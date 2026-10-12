import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function AboutPage() {
  useEffect(() => {
    // Set page title
    document.title = "About | Design With Roselyn";
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <AboutSection />
      <Footer />
      <BackToTop />
    </div>
  );
}