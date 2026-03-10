"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect, useState, useRef } from "react"

export default function AboutClient() {
  const [isPhotoVisible, setIsPhotoVisible] = useState(false)
  const [isWaving, setIsWaving] = useState(false)
  const sectionsRef = useRef<HTMLDivElement>(null)
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set())

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPhotoVisible(true)
    }, 300)

    const waveTimer = setTimeout(() => {
      setIsWaving(true)
    }, 500)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleSections((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const sectionElements = sectionsRef.current?.querySelectorAll(".animate-section")
    sectionElements?.forEach((el, index) => {
      el.setAttribute("data-index", index.toString())
      observer.observe(el)
    })

    return () => {
      clearTimeout(timer)
      clearTimeout(waveTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16" ref={sectionsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div
              className={`space-y-23 animate-section transition-all duration-700 ease-out ${
                visibleSections.has(0) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Hey{" "}
                  <span className={`inline-block transition-transform duration-500 ${isWaving ? "animate-wave" : ""}`}>
                    👋
                  </span>
                </h2>
                <p className="font-sans text-base text-foreground leading-relaxed">
                  I'm Roselyn, a UI/UX designer passionate about creating intuitive, user-friendly, and visually
                  engaging experiences. I focus on turning complex problems into simple and elegant design solutions
                  that make products both functional and enjoyable to use.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Interests</h2>
                <div className="space-y-2">
                  <p className="font-sans text-base text-foreground">Reading</p>
                  <p className="font-sans text-base text-foreground">Writing</p>
                  <p className="font-sans text-base text-foreground">Music</p>
                  <p className="font-sans text-base text-foreground">Art</p>
                </div>
              </div>
            </div>

            <div
              className={`space-y-33 animate-section transition-all duration-700 ease-out delay-100 ${
                visibleSections.has(1) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Experience</h2>
                <div className="space-y-6">
                  <div>
                    <p className="font-sans text-base text-foreground font-medium">UI/UX Designer | Present</p>
                    <p className="font-sans text-base text-foreground italic">Freelance</p>
                  </div>
                  <div>
                    <p className="font-sans text-base text-foreground font-medium">ERP Consultant | 2024</p>
                    <p className="font-sans text-base text-foreground italic">SoftIQ Technologies, Kenya</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Education</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-sans text-base text-foreground font-medium">Product Design Certificate | 2025</p>
                    <p className="font-sans text-base text-foreground italic">Moringa School, Kenya</p>
                  </div>
                  <div>
                    <p className="font-sans text-base text-foreground font-medium">
                      BSc Information Technology | 2021-2025
                    </p>
                    <p className="font-sans text-base text-foreground italic">Mount Kenya University, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`flex justify-center lg:justify-end animate-section transition-all duration-700 ease-out delay-200 ${
                visibleSections.has(2) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative">
                <img
                  src="/roselyn.jpg"
                  alt="Roselyn"
                  className={`w-full max-w-sm h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
                    isPhotoVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                  }`}
                />
              </div>
            </div>
          </div>

          <div
            className={`mt-16 max-w-6xl mx-auto animate-section transition-all duration-700 ease-out delay-300 ${
              visibleSections.has(3) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative bg-gray-50 rounded-3xl p-16 text-center overflow-hidden">
              {/* Gradient blob background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-gray-700 text-lg mb-4 font-light">Let's chat?</p>
                <h2 className="font-serif text-4xl md:text-5xl text-black font-light mb-8">Get in touch</h2>
                <a
                  href="mailto:roselynngito@gmail.com"
                  className="inline-block px-8 py-3 border-2 border-black text-gray-700 rounded-full font-medium hover:bg-red-800 hover:border-red-800 hover:text-white hover:scale-110 transition-all duration-300"
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
