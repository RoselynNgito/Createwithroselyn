"use client"

import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const arrowRef = useRef<SVGSVGElement>(null)

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

  const handleViewProjectsHover = (isHovering: boolean) => {
    if (arrowRef.current) {
      arrowRef.current.style.transform = isHovering ? "rotate(90deg)" : "rotate(50deg)"
    }
  }

  const scrollToWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const workSection = document.getElementById("work")
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(147.995deg, rgb(255, 250, 250) 0%, rgb(255, 250, 250) 50%, rgb(255, 248, 250) 100%)",
      }}
    >
      {/* Animated gradient background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-30 animate-float"
          style={{
            background: "linear-gradient(135deg, rgb(255, 201, 201) 0%, rgb(255, 161, 173) 100%)"
          }}
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 rounded-full opacity-25 animate-float-delayed"
          style={{
            background: "linear-gradient(135deg, rgb(255, 99, 126) 0%, rgb(255, 161, 173) 100%)"
          }}
        />
        <div 
          className="absolute bottom-32 left-20 w-40 h-40 rounded-full opacity-35 animate-float-slow"
          style={{
            background: "linear-gradient(135deg, rgb(255, 226, 226) 0%, rgb(255, 204, 211) 100%)"
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-28 h-28 rounded-full opacity-30 animate-float"
          style={{
            background: "linear-gradient(135deg, rgb(255, 161, 173) 0%, rgb(255, 201, 201) 100%)"
          }}
        />
        <div 
          className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full opacity-20 animate-float-delayed"
          style={{
            background: "linear-gradient(135deg, rgb(255, 161, 173) 0%, rgb(255, 99, 126) 100%)"
          }}
        />
        <div 
          className="absolute top-1/3 right-1/3 w-36 h-36 rounded-full opacity-25 animate-float-slow"
          style={{
            background: "linear-gradient(135deg, rgb(255, 204, 211) 0%, rgb(255, 226, 226) 100%)"
          }}
        />
      </div>

      {/* Content container - optimized for desktop with responsive breakpoints */}
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 text-left relative z-10 py-20 sm:py-24 lg:py-32">
        {/* Main heading with enhanced animation */}
        <h1
          className={`font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight transition-all duration-[1200ms] ease-out text-left ${
            isVisible 
              ? "opacity-100 translate-y-0 scale-100 blur-0" 
              : "opacity-0 translate-y-12 scale-95 blur-sm"
          }`}
          style={{ 
            transitionDelay: "200ms",
            willChange: "transform, opacity, filter",
            maxWidth: "100%"
          }}
        >
          {/* Name - always on its own line on desktop */}
          <span 
            className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-red-800 via-rose-700 to-red-900 bg-clip-text text-transparent block mb-2 lg:mb-3"
            style={{
              textShadow: "0 4px 4px rgba(0,0,0,0.15)",
              backgroundSize: "200% auto",
              paddingBottom: "0.5rem",
              lineHeight: "1.2"
            }}
          >
            Ngito Roselyn
          </span>
          
          {/* Role - on its own line on desktop */}
          <span 
            className={`block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 lg:mb-6 transition-all duration-[1200ms] ease-out ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: "600ms"
            }}
          >
            is a{" "}
            <span className="font-bold" style={{ color: "#800020" }}>
              UI/UX designer
            </span>
          </span>
          
          {/* Description - paragraph style on desktop */}
          <span 
            className={`block text-xl sm:text-2xl md:text-3xl lg:text-3xl font-normal max-w-3xl transition-all duration-[1200ms] ease-out ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-8"
            }`}
            style={{ 
              transitionDelay: "900ms",
              lineHeight: "1.6"
            }}
          >
            with a passion for crafting products that bring people and ideas together through intuitive, meaningful experiences.
          </span>
        </h1>

        {/* Download Resume button with enhanced animation - COMMENTED OUT FOR NOW */}
        {/* <div
          className={`mt-10 sm:mt-12 transition-all duration-[1200ms] ease-out ${
            isVisible 
              ? "opacity-100 translate-y-0 scale-100" 
              : "opacity-0 translate-y-8 scale-90"
          }`}
          style={{ 
            transitionDelay: "1200ms",
            willChange: "transform, opacity"
          }}
        >
          <a
            href="/ngito-roselyn.pdf"
            download
            className="group inline-flex items-center gap-2 sm:gap-3 font-sans text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 relative"
            style={{ color: "#800020" }}
          >
            <span className="relative">
              Download Resume
              <span 
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "#800020" }}
              />
            </span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div> */}

        {/* View Projects Button - Circular like reference */}
        <a
          href="#work"
          onClick={scrollToWork}
          className={`mt-10 sm:mt-12 inline-flex items-center gap-4 transition-all duration-[1200ms] ease-out group hover:scale-105 ${
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: "1400ms",
            willChange: "transform, opacity"
          }}
          onMouseEnter={() => handleViewProjectsHover(true)}
          onMouseLeave={() => handleViewProjectsHover(false)}
        >
          {/* Circular button with zoom-out on active/click */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-black flex items-center justify-center transition-all duration-300 group-hover:border-[#800020] group-hover:bg-[#800020] group-hover:scale-110 group-active:scale-95">
            {/* Arrow - points at angle by default, rotates to 90deg (down) on hover */}
            <svg
              ref={arrowRef}
              className="w-8 h-8 sm:w-10 sm:h-10 text-black transition-all duration-300 group-hover:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ 
                transform: "rotate(50deg)",
                transition: "transform 300ms"
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
          
          {/* Text - Bolder font weight - BLACK DEFAULT, BURGUNDY ON HOVER */}
          <span
            className="text-base sm:text-lg font-bold text-black uppercase tracking-wider transition-colors duration-300 group-hover:text-[#800020]"
            style={{
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            View Projects
          </span>
        </a>
      </div>
    </section>
  )
}