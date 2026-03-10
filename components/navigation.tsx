"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

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
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const handleScroll = () => {
      const sections = ["work", "contact"]
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
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About Me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/ngito-roselyn.pdf", isExternal: true },
    { name: "Contact", href: "mailto:roselynngito@gmail.com", isExternal: true },
  ]

  const filteredNavItems = navItems

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
          <a
            href="/"
            className="font-serif text-2xl font-black text-black tracking-wider hover:text-stone-700 transition-colors duration-300"
          >
            NR
          </a>

          {/* Desktop Navigation positioned far right */}
          <div className="hidden md:flex space-x-8">
            {filteredNavItems.map((item) => {
              const isRouteActive = item.href.startsWith("/") && pathname === item.href
              const isSectionActive =
                pathname === "/" && item.href.includes("#") && activeSection === item.href.substring(2)
              const isActive = isRouteActive || isSectionActive

              return (
                <a
                  key={item.name}
                  href={item.href}
                  {...(item.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  className={`px-3 py-2 transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                    isActive
                      ? "text-stone-900 after:w-full after:bg-stone-900"
                      : "text-stone-700 hover:text-stone-900 after:w-0 hover:after:w-full hover:after:bg-stone-400"
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

         {/* Mobile Menu Button positioned far right */}
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
              {filteredNavItems.map((item) => {
                const isRouteActive = item.href.startsWith("/") && pathname === item.href
                const isSectionActive =
                  pathname === "/" && item.href.includes("#") && activeSection === item.href.substring(2)
                const isActive = isRouteActive || isSectionActive

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    {...(item.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-all duration-300 font-medium px-3 py-2 ${
                      isActive
                        ? "bg-[#800020] text-white"
                        : "text-stone-700 hover:bg-[#800020] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
