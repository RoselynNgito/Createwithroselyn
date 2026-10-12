"use client"

import { useState, useEffect } from "react"

export function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!showBackToTop) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-2 border-muted-foreground/60 bg-background/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-muted-foreground hover:bg-gray-200 hover:scale-110 transition-all duration-300 z-50 shadow-lg"
      aria-label="Back to top"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m-7 7l7-7 7 7" />
      </svg>
    </button>
  )
}
