import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects | Design With Roselyn";
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <ProjectsGrid />
      <Footer />
      <BackToTop />
    </div>
  );
}