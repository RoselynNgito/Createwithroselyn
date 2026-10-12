import { renderToString } from "react-dom/server";
import { createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "./app/routes";
export { pageMetadata, getPageMetadata, structuredData, OG_IMAGE, IMAGE_ALT, SITE_NAME, SITE_URL } from "./app/seo";

export function renderPage(pathname: string) {
  const router = createMemoryRouter(routes, { initialEntries: [pathname] });
  try {
    return renderToString(<RouterProvider router={router} />);
  } finally {
    router.dispose();
  }
}
