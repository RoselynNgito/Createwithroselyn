import { Outlet } from "react-router";
import { ScrollToTop } from "./ScrollToTop";
import { PageMetadata } from "./PageMetadata";

export function RootLayout() {
  return (
    <>
      <PageMetadata />
      <ScrollToTop />
      <Outlet />
    </>
  );
}
