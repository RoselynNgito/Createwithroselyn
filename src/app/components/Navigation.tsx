"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"

const MenuIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work"]
      const scrollPosition = window.scrollY + 100

      setIsScrolled(window.scrollY > 0)

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About Me", href: "/about", isRoute: true },
    { name: "Projects", href: "/projects", isRoute: true },
    { name: "Contact", href: "mailto:roselynngito@gmail.com", isRoute: false, isEmail: true },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 border-b border-stone-200/20 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Name & Title Format */}
          <Link
            to="/"
            className="relative flex items-center gap-3"
          >
            {/* Creative NR Logo - SMALLER SIZE, NO HOVER */}
            <div className="relative">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                {/* Outer circle background - smaller radius */}
                <circle cx="24" cy="24" r="22" fill="#800020" />
                
                {/* Inner geometric pattern */}
                <circle cx="24" cy="24" r="18" fill="none" stroke="white" strokeWidth="0.4" opacity="0.3" />
                
                {/* N letter - Left side - SMALLER */}
                <g>
                  {/* Left vertical bar */}
                  <rect x="13" y="16" width="2" height="16" fill="white" rx="0.5" />
                  {/* Diagonal connector */}
                  <path d="M15 16 L21 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  {/* Right vertical bar */}
                  <rect x="21" y="16" width="2" height="16" fill="white" rx="0.5" />
                </g>
                
                {/* R letter - Right side - SMALLER */}
                <g>
                  {/* Vertical bar of R */}
                  <rect x="27" y="16" width="2" height="16" fill="white" rx="0.5" />
                  {/* Top curved part of R */}
                  <path d="M29 16 L32.5 16 C34 16 35 17 35 18.5 C35 20 34 21 32.5 21 L29 21" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                  {/* Diagonal leg of R */}
                  <path d="M31 21.5 L35 32" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </g>
                
                {/* Decorative dots */}
                <circle cx="24" cy="8" r="1" fill="white" opacity="0.5" />
                <circle cx="24" cy="40" r="1" fill="white" opacity="0.5" />
              </svg>
            </div>

            {/* Name & Title */}
            <div className="flex flex-col">
              <span
                className="font-bold text-base leading-tight"
                style={{
                  fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
                  color: "#2c2c2c",
                }}
              >
                Ngito Roselyn
              </span>
              <span
                className="text-xs uppercase tracking-wide text-stone-600"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}
              >
                UI/UX DESIGNER
              </span>
            </div>
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            {navItems.map((item) => {
              const isSectionActive = item.isRoute 
                ? location.pathname === item.href
                : activeSection === item.href.substring(1)

              return item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                    isSectionActive
                      ? "text-stone-900 after:w-full after:bg-[#800020]"
                      : "hover:text-stone-900 after:w-0 hover:after:w-full hover:after:bg-black"
                  }`}
                  style={{ 
                    fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                    color: isSectionActive ? undefined : "rgba(0, 0, 0, 0.9)"
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                    isSectionActive
                      ? "text-stone-900 after:w-full after:bg-[#800020]"
                      : "hover:text-stone-900 after:w-0 hover:after:w-full hover:after:bg-black"
                  }`}
                  style={{ 
                    fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                    color: isSectionActive ? undefined : "rgba(0, 0, 0, 0.9)"
                  }}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

          {/* LinkedIn Icon - CIRCULAR/ELLIPSE - Filled by default, outline on hover */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.linkedin.com/in/ngito-roselyn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border-2 bg-stone-900 border-stone-900 flex items-center justify-center transition-all duration-300 hover:bg-transparent hover:border-stone-900 text-white hover:text-stone-900 font-bold text-xl"
              aria-label="LinkedIn"
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              in
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-none focus:outline-none"
          >
            <span
              className="inline-flex items-center justify-center text-black transition-transform duration-200 ease-out hover:scale-125"
              style={{ willChange: "transform" }}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isSectionActive = item.isRoute 
                  ? location.pathname === item.href
                  : activeSection === item.href.substring(1)

                return item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-all duration-300 font-medium px-3 py-2 rounded ${
                      isSectionActive
                        ? "bg-[#800020] text-white"
                        : "text-stone-700 hover:bg-[#800020] hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-all duration-300 font-medium px-3 py-2 rounded ${
                      isSectionActive
                        ? "bg-[#800020] text-white"
                        : "text-stone-700 hover:bg-[#800020] hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif" }}
                  >
                    {item.name}
                  </a>
                )
              })}
              
              {/* LinkedIn in mobile menu */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 transition-all duration-300 font-medium px-3 py-2 rounded text-stone-700 hover:bg-[#800020] hover:text-white"
                style={{ fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}