import { useEffect } from "react";
import { useLocation } from "react-router";
import { getPageMetadata, structuredData } from "../seo";

export function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const page = getPageMetadata(pathname);
    document.title = page.title;
    for (const [selector, content] of Object.entries({
      'meta[name="description"]': page.description,
      'meta[name="robots"]': page.robots,
      'meta[property="og:title"]': page.title,
      'meta[property="og:description"]': page.description,
      'meta[property="og:url"]': page.url,
      'meta[name="twitter:title"]': page.title,
      'meta[name="twitter:description"]': page.description,
    })) document.querySelector(selector)?.setAttribute("content", content);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", page.url);
    const schema = document.getElementById("page-schema");
    if (schema) schema.textContent = JSON.stringify(structuredData(pathname));
  }, [pathname]);
  return null;
}
