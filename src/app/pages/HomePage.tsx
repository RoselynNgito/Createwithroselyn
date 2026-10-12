import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { CaseStudies } from "../components/CaseStudies";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export default function HomePage() {
  useEffect(() => {
    // Set up IntersectionObserver to update page title based on visible section
    const updatePageTitle = (sectionName: string) => {
      const titles: Record<string, string> = {
        home: "Home | Design With Roselyn",
        work: "Work | Design With Roselyn",
      };
      document.title = titles[sectionName] || "Design With Roselyn";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            updatePageTitle(entry.target.id);
          }
        });
      },
      { threshold: [0.5] }
    );

    // Observe all main sections on home page
    const sections = ['home', 'work'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Set initial title
    updatePageTitle('home');

    return () => observer.disconnect();
  }, []);

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