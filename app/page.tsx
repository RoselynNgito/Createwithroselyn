import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home | Design With Roselyn",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div className="py-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto max-w-6xl opacity-60"></div>
      </div>
      <ProjectsSection />
      <div className="py-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto max-w-6xl opacity-60"></div>
      </div>
      <SkillsSection />
      <div className="py-20">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent mx-auto max-w-6xl opacity-60"></div>
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}
