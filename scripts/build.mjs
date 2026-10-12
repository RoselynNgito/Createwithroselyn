import { build } from "vite";
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const temporaryDir = path.resolve("node_modules/.roselyn-prerender");
await build();
try {
  await build({ build: { ssr: "src/prerender.tsx", outDir: temporaryDir, emptyOutDir: true } });
  const seo = await import(pathToFileURL(path.join(temporaryDir, "prerender.js")).href);
  const template = await readFile("dist/index.html", "utf8");
  for (const pathname of Object.keys(seo.pageMetadata)) {
    const page = seo.getPageMetadata(pathname);
    const escape = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    const meta = (attribute, name, value) => `<meta ${attribute}="${name}" content="${escape(value)}" />`;
    const head = [
      `<title>${escape(page.title)}</title>`,
      meta("name", "description", page.description), meta("name", "robots", page.robots),
      `<link rel="canonical" href="${page.url}" />`,
      ...Object.entries({ "og:type": "website", "og:site_name": seo.SITE_NAME, "og:locale": "en_KE", "og:title": page.title, "og:description": page.description, "og:url": page.url, "og:image": seo.OG_IMAGE, "og:image:secure_url": seo.OG_IMAGE, "og:image:type": "image/webp", "og:image:width": "1200", "og:image:height": "630", "og:image:alt": seo.IMAGE_ALT }).map(([name, value]) => meta("property", name, value)),
      ...Object.entries({ "twitter:card": "summary_large_image", "twitter:title": page.title, "twitter:description": page.description, "twitter:image": seo.OG_IMAGE, "twitter:image:alt": seo.IMAGE_ALT }).map(([name, value]) => meta("name", name, value)),
      `<script id="page-schema" type="application/ld+json">${JSON.stringify(seo.structuredData(pathname)).replaceAll("<", "\\u003c")}</script>`,
    ].join("\n      ");
    const html = template.replace(/<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/, `<!-- SEO_START -->\n      ${head}\n      <!-- SEO_END -->`).replace('<div id="root"></div>', () => `<div id="root">${seo.renderPage(pathname)}</div>`);
    const directory = path.join("dist", pathname === "/" ? "" : pathname.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), html);
    console.log(`Prerendered ${pathname}`);
  }
  await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(seo.pageMetadata).map((pathname) => `<url><loc>${seo.getPageMetadata(pathname).url}</loc></url>`).join("")}</urlset>\n`);
} finally {
  await rm(temporaryDir, { recursive: true, force: true });
}
