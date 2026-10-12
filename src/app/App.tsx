import { RouterProvider } from "react-router";
import { router } from "./routes";
import { useEffect } from "react";
import faviconImg from "figma:asset/8797fd85f023b29a78a3751c9b824a966b843f36.png";

export default function App() {
  useEffect(() => {
    // Set the favicon
    const setFavicon = () => {
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/png';
      link.rel = 'icon';
      link.href = faviconImg;
      document.getElementsByTagName('head')[0].appendChild(link);
    };
    
    setFavicon();
  }, []);

  return <RouterProvider router={router} />;
}