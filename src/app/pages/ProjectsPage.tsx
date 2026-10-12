import { Navigation } from "../components/Navigation";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function ProjectsPage() {

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <ProjectsGrid />
      <Footer />
      <BackToTop />
    </div>
  );
}