import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { CaseStudies } from "../components/CaseStudies";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function HomePage() {

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <HeroSection />
      <CaseStudies />
      <Footer />
      <BackToTop />
    </div>
  );
}