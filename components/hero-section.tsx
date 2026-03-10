"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const heroElement = document.getElementById("home")
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-red-50 to-rose-100"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-red-200 to-rose-300 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-rose-400 to-red-300 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-red-100 to-rose-200 rounded-full opacity-35 animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-rose-300 to-red-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-red-300 to-rose-400 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-gradient-to-br from-rose-200 to-red-100 rounded-full opacity-25 animate-float-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-48">
        <h1
          className={`font-sans text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight drop-shadow-sm transition-all duration-[1200ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <span className="font-black text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-red-800 via-rose-700 to-red-900 bg-clip-text text-transparent drop-shadow-lg">
            Ngito Roselyn
          </span>{" "}
          is a{" "}
          <span className="font-bold" style={{ color: "#800020" }}>
            UI/UX designer
          </span>{" "}
          crafting products that bring people and ideas together through intuitive, meaningful experiences.
        </h1>

        <div
          className={`mt-12 transition-all duration-[1200ms] ease-out ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"
          }`}
          style={{ animationDelay: "1500ms" }}
        >
          <a
            href="/ngito-roselyn.pdf"
            download
            className="inline-flex items-center gap-2 font-sans text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ color: "#800020" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#600018")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#800020")}
          >
            Download Resume
            <svg
              className="w-5 h-5 transition-transform duration-300 hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
