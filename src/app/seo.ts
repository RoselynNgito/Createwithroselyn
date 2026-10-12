export const SITE_URL = "https://designwithroselyn.com";
export const SITE_NAME = "Design With Roselyn";
export const OG_IMAGE = `${SITE_URL}/rosie-og.webp`;
export const IMAGE_ALT = "Design With Roselyn — Ngito Roselyn, UI/UX designer";

export const pageMetadata: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Ngito Roselyn | UI/UX Designer in Nairobi",
    description: "Explore Ngito Roselyn's UI/UX design portfolio. Based in Nairobi, Kenya, Roselyn crafts intuitive digital products through research and thoughtful design.",
  },
  "/about": {
    title: "About Ngito Roselyn | Design With Roselyn",
    description: "Meet Ngito Roselyn, a Nairobi-based UI/UX designer with a background in technology and coding, creating meaningful experiences for people.",
  },
  "/projects": {
    title: "UI/UX Design Projects | Design With Roselyn",
    description: "Explore Roselyn's UI/UX projects and case studies, including Verido, School Match, M-Pathway and My-Power, from user research to product design.",
  },
  "/projects/school-match": {
    title: "School Match UX Case Study | Design With Roselyn",
    description: "See how Roselyn designed School Match to help parents find educational opportunities, with user research, empathy mapping and mobile application design.",
  },
  "/projects/verido": {
    title: "Verido UX Case Study | Design With Roselyn",
    description: "Explore Roselyn's Verido case study: designing an application that helps businesses set profitable prices, track products and make informed decisions.",
  },
};

export function getPageMetadata(pathname: string) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = pageMetadata[path];
  return {
    ...(page || { title: `Page Not Found | ${SITE_NAME}`, description: "The requested page could not be found." }),
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    robots: page ? "index, follow, max-image-preview:large" : "noindex, follow",
  };
}

export function structuredData(pathname: string) {
  const page = getPageMetadata(pathname);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person", "@id": `${SITE_URL}/#roselyn`,
        name: "Ngito Roselyn", jobTitle: "UI/UX Designer", url: `${SITE_URL}/`,
        image: `${SITE_URL}/roselyn.jpg`,
        sameAs: ["https://www.linkedin.com/in/ngito-roselyn/"],
        homeLocation: { "@type": "Place", name: "Nairobi, Kenya" },
      },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: `${SITE_URL}/` },
      {
        "@type": pathname === "/about" ? "AboutPage" : "WebPage",
        "@id": `${page.url}#webpage`, url: page.url, name: page.title,
        description: page.description, isPartOf: { "@id": `${SITE_URL}/#website` },
        author: { "@id": `${SITE_URL}/#roselyn` }, inLanguage: "en",
      },
    ],
  };
}
