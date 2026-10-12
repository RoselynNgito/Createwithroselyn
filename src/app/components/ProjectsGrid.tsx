"use client"

import { useEffect, useState } from "react"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { Link } from "react-router"


interface CaseStudy {
  id: number
  category: string
  title: string
  description: string
  image: string
  tools: string[]
  link: string
  isExternal?: boolean
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    category: "END TO END APPLICATION",
    title: "Verido: Turning Business Data into Profitable Decisions",
    description: "Led the end-to-end design of a data-driven platform that helps small business owners track cash flow, optimize pricing, and manage customers and suppliers. Transformed complex financial workflows into clear, actionable insights that support profitability and smarter decision-making.",
    image: "https://res.cloudinary.com/dhdsr11od/image/upload/v1775068511/HERO_IMAGE_k4inwv.png",
    tools: ["Figma", "UX Research", "Data Visualization", "Wireframing", "Prototyping", "Usability Testing"],
    link: "/projects/verido",
  },
  {
    id: 2,
    category: "MOBILE APPLICATION DESIGN",
    title: "School Match: Connecting Parents with Perfect Educational Opportunities",
    description: "Creating a comprehensive platform that helps parents find their perfect educational match through data-driven insights and personalized recommendations.",
    image: "https://res.cloudinary.com/dhdsr11od/image/upload/v1775068273/CASE-STUDY_HERO_IMAGE_qreqqw.png",
    tools: ["Figma", "Excalidraw", "Notion", "Market research", "User testing"],
    link: "/projects/school-match",
  },
  {
    id: 3,
    category: "MOBILE APPLICATION DESIGN",
    title: "M-Pathway: Enhancing Reading Experience with AI Technology",
    description: "Educational app with course selection, AI study tools, and interactive learning. Built with Material Design, personalized flashcards, smart recommendations, and accessible quizzes.",
    image: "https://res.cloudinary.com/dhdsr11od/image/upload/v1775470695/CASE_STUDY_uvdgxr.png",
    tools: ["Figma", "Material Design", "Excalidraw", "A/B Testing"],
    link: "https://www.figma.com/proto/Ojdp2dQ603DoKnGJINfD2Y/M-PATHWAY?page-id=0%3A1&node-id=1-540&viewport=-99%2C178%2C0.1&t=13bbsuaaw5njh8O2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5604",
    isExternal: true,
  },
  {
    id: 4,
    category: "MOBILE APPLICATION RE-DESIGN",
    title: "My-Power: Simplifying Energy Payments with MyPower",
    description: "Redesigned the MyPower app to make payments easier, speed up token delivery, and create a smoother, more reliable experience for users.",
    image: "https://res.cloudinary.com/dhdsr11od/image/upload/v1775476092/CASE_STUDY_pkpvqd.png",
    tools: ["Figma", "Miro", "A/B Testing"],
    link: "https://www.figma.com/proto/WIsNddSuGvxtPrmGxhjcEG/MY-POWER?page-id=0%3A1&node-id=1-1864&viewport=-99%2C178%2C0.1&t=IGPxUELeMlhWD54p-1&scaling=scale-down&content-scaling=fixed",
    isExternal: true,
  },
]

export function ProjectsGrid() {
  const [visibleStudies, setVisibleStudies] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute("data-study-id") || "0")
            setVisibleStudies((prev) => [...new Set([...prev, id])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll("[data-study-id]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(147.995deg, rgb(255, 250, 250) 0%, rgb(255, 250, 250) 50%, rgb(255, 248, 250) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-12">UI/UX design projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {caseStudies.map((study) => {
            const isVisible = visibleStudies.includes(study.id)
            const Wrapper = study.isExternal ? "a" : Link

            return (
              <div
                key={study.id}
                data-study-id={study.id}
                className={`transition-all duration-[1000ms] ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-95"
                }`}
                style={{ transitionDelay: `${study.id * 150}ms` }}
              >
                {/* Image */}
                <Wrapper
                  {...(study.isExternal
                    ? { href: study.link, target: "_blank", rel: "noopener noreferrer" }
                    : { to: study.link })}
                  className="block"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-6 transition-all duration-500 ease-out hover:scale-95 group/image cursor-pointer">
                    <ImageWithFallback
                      src={study.image}
                      alt={study.title}
                      fill
                      style={{ objectFit: "cover", pointerEvents: "none" }}
                      className="transition-all duration-500 ease-out group-hover/image:brightness-95"
                    />
                  </div>
                </Wrapper>

                {/* Category */}
                <div className="mb-3">
                  <span
                    className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border-2 border-stone-900 text-stone-900"
                    style={{
                      fontFamily:
                        "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                    }}
                  >
                    {study.category}
                  </span>
                </div>

                {/* Title */}
                <Wrapper
                  {...(study.isExternal
                    ? { href: study.link, target: "_blank", rel: "noopener noreferrer" }
                    : { to: study.link })}
                  className="group/title inline-block mb-3"
                >
                  <h3
                    className="text-2xl sm:text-2xl lg:text-3xl font-bold leading-tight transition-all duration-300"
                    style={{
                      fontFamily:
                        "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
                      color: "#2c2c2c",
                      textDecoration: "none",
                      textDecorationThickness: "3px",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    <span className="group-hover/title:underline group-hover/title:decoration-[3px] group-hover/title:underline-offset-4 group-hover/title:decoration-stone-900 transition-all duration-300">
                      {study.title}
                    </span>
                  </h3>
                </Wrapper>

                {/* Description */}
                <p
                  className="text-base text-stone-600 mb-4 leading-relaxed"
                  style={{
                    fontFamily:
                      "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  }}
                >
                  {study.description}
                </p>

                {/* Tools */}
                <div className="mb-5">
                  <p
                    className="text-xs font-semibold text-stone-500 mb-2"
                    style={{
                      fontFamily:
                        "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                    }}
                  >
                    Tools & Methods
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-xs rounded-full bg-white text-stone-700 border border-stone-200"
                        style={{
                          fontFamily:
                            "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Wrapper
                  {...(study.isExternal
                    ? { href: study.link, target: "_blank", rel: "noopener noreferrer" }
                    : { to: study.link })}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{
                    backgroundColor: "#800020",
                    color: "white",
                    fontFamily:
                      "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  }}
                >
                  View Case Study
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Wrapper>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}