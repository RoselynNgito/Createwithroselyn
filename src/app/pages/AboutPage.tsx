import { Navigation } from "../components/Navigation";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function AboutPage() {

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <AboutSection />
      <Footer />
      <BackToTop />
    </div>
  );
}