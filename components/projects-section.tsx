"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)
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
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "School-Match: Connecting Parents with Perfect Educational Opportunities",
      description:
        "A comprehensive mobile app design connecting parents with educational opportunities. Features user research, persona development, wireframing, and high-fidelity prototyping with focus on accessibility and user-centered design.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASE%20STUDY%20PHOTO-kRaZCd01eU8QTwxROpHayyLJC5DVZ8.png",
      tags: ["UX Research", "Mobile Design", "Prototyping", "User Testing"],
      link: "https://www.figma.com/proto/ZumvkAKIyXNTCeQLYN2aAj/School-Match?page-id=0%3A1&node-id=5-72&viewport=-521%2C163%2C0.12&t=BoF9enLiFCqSlko8-1&scaling=scale-down-width&content-scaling=fixed",
    },
    {
      id: 2,
      title: "M-Pathway Mobile App: Enhancing Learning Through AI-Powered Study Tools",
      description:
        "Educational mobile application featuring course selection, AI-powered study tools, and interactive learning modules. Designed with comprehensive Material Design guidelines, featuring smart study recommendations, personalized flashcards, and accessibility-focused quiz interfaces for enhanced learning experiences.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASE%20STUDY%202-YVJS4HbiTkOLDw4gg6zZqfy4QbBD0I.png",
      tags: ["Material Design", "Educational App", "Mobile UX", "Accessibility"],
      link: "https://www.figma.com/proto/Ojdp2dQ603DoKnGJINfD2Y/M-PATHWAY?page-id=0%3A1&node-id=1-540&viewport=45%2C274%2C0.02&t=13bbsuaaw5njh8O2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5604",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="work"
      className="min-h-screen bg-gradient-to-br from-red-50 via-rose-50 to-red-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-200 to-rose-200 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-br from-rose-200 to-red-200 rounded-full opacity-50"></div>
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-gradient-to-br from-red-200 to-rose-300 rounded-full opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-800 via-red-900 to-red-800 bg-clip-text text-transparent mb-4 text-center tracking-tight">
            Latest Work
          </h2>
          <div className="w-16 h-px bg-red-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex items-center justify-center transition-all duration-700 ease-out delay-${(index + 1) * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Card className="group max-w-4xl w-full bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden rounded-3xl">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                    <div className={`relative overflow-hidden ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                      <div className="flex items-center justify-center h-full min-h-[350px] bg-stone-50">
                        <div className="flex items-center justify-center w-full h-full p-6">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-1000"
                          />
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <div
                      className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 0 ? "order-2" : "order-1"}`}
                    >
                      <div className="space-y-4">
                        <h3 className="font-serif text-xl lg:text-2xl font-light text-stone-800 leading-tight group-hover:font-semibold transition-all duration-300">
                          {project.title}
                        </h3>

                        <p className="text-stone-600 text-base leading-relaxed group-hover:font-medium group-hover:text-stone-700 transition-all duration-300">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-stone-100/80 text-stone-700 text-sm rounded-full border border-stone-200/50 backdrop-blur-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4">
                          {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                              <Button
                                variant="outline"
                                className={`group bg-transparent border-2 border-stone-300 text-stone-700 transition-all duration-300 px-10 py-4 rounded-full font-medium text-base ${
                                  project.id === 1
                                    ? "hover:bg-emerald-800 hover:text-white hover:border-emerald-800"
                                    : "hover:bg-orange-600 hover:text-white hover:border-orange-600"
                                }`}
                              >
                                {project.id === 2 ? "View Project" : "View Case Study"}
                                <ExternalLinkIcon />
                              </Button>
                            </a>
                          ) : (
                            <Button
                              variant="outline"
                              className={`group bg-transparent border-2 border-stone-300 text-stone-700 transition-all duration-300 px-10 py-4 rounded-full font-medium text-base ${
                                project.id === 1
                                  ? "hover:bg-emerald-800 hover:text-white hover:border-emerald-800"
                                  : "hover:bg-orange-600 hover:text-white hover:border-orange-600"
                              }`}
                            >
                              {project.id === 2 ? "View Project" : "View Case Study"}
                              <ExternalLinkIcon />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
