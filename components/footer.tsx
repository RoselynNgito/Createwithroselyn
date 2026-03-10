"use client"

import type React from "react"
import { useRouter } from "next/navigation"

export function Footer() {
  const router = useRouter()

  const handleWorkClick = (e: React.MouseEvent) => {
    e.preventDefault()

    const scrollToWork = () => {
      const workSection = document.getElementById("work")
      if (workSection) {
        const navHeight = 80 // Account for navigation bar height
        const elementPosition = workSection.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }

    // If we're already on the home page, just scroll to the work section
    if (window.location.pathname === "/") {
      scrollToWork()
    } else {
      // If we're on another page, navigate to home then scroll to work section
      router.push("/")
      setTimeout(() => {
        scrollToWork()
      }, 300) // Increased timeout for better page load handling
    }
  }

  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-muted-foreground/80 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-gray-700 text-sm">© 2025 Design With Roselyn | Get In Touch</span>
            <a
              href="mailto:roselynngito@gmail.com"
              className="text-red-800 hover:text-red-900 transition-colors text-sm underline"
            >
              roselynngito@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
