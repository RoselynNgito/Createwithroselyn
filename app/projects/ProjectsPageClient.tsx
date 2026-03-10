"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const ArrowRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
  </svg>
)

export default function ProjectsPageClient() {
  const projectsRef = useRef<HTMLDivElement>(null)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const pageLoadTimer = setTimeout(() => {
      setHasLoaded(true)
    }, 200)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("animate-in")) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains("text-animate-in")) {
            entry.target.classList.add("text-animate-in")
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -30px 0px" },
    )

    const observeElements = () => {
      const projectElements = projectsRef.current?.querySelectorAll(".project-item")
      projectElements?.forEach((el) => {
        observer.observe(el)
      })

      const textElements = projectsRef.current?.querySelectorAll(".text-fade")
      textElements?.forEach((el) => {
        textObserver.observe(el)
      })
    }

    if (hasLoaded) {
      setTimeout(observeElements, 100)
    }

    return () => {
      clearTimeout(pageLoadTimer)
      observer.disconnect()
      textObserver.disconnect()
    }
  }, [hasLoaded])

  const projects = [
    {
      id: 1,
      name: "School-Match",
      tag: "MOBILE APPLICATION DESIGN",
      title: "Connecting Parents with Perfect Educational Opportunities",
      description:
        "Creating a comprehensive platform that helps parents find their perfect educational match through data-driven insights and personalized recommendations.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASE%20STUDY%20PHOTO-kRaZCd01eU8QTwxROpHayyLJC5DVZ8.png",
      slug: "/school-match", // 🔹 internal page
      buttonText: "View Case Study",
    },
    {
      id: 2,
      name: "M-PATHWAY",
      tag: "MOBILE APPLICATION DESIGN",
      title: "Enhancing Reading Experience with AI Technology",
      description:
        "Educational app with course selection, AI study tools, and interactive learning. Built with Material Design, personalized flashcards, smart recommendations, and accessible quizzes.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CASE%20STUDY%202-YVJS4HbiTkOLDw4gg6zZqfy4QbBD0I.png",
      link: "https://www.figma.com/proto/Ojdp2dQ603DoKnGJINfD2Y/M-PATHWAY?page-id=0%3A1&node-id=1-540&viewport=-99%2C178%2C0.1&t=13bbsuaaw5njh8O2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5604",
      buttonText: "View Project",
    },
    {
      id: 3,
      name: "MY POWER",
      tag: "MOBILE APPLICATION RE-DESIGN",
      title: "Simplifying Energy Payments with MyPower",
      description:
        "Redesigned the MyPower app to make payments easier, speed up token delivery, and create a smoother, more reliable experience for users.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MY-POWER-410NlkKroMHYURgHqn8Uxg9jjzUN2r.png",
      link: "https://www.figma.com/proto/WIsNddSuGvxtPrmGxhjcEG/MY-POWER?page-id=0%3A1&node-id=1-1864&viewport=-99%2C178%2C0.1&t=IGPxUELeMlhWD54p-1&scaling=scale-down&content-scaling=fixed",
      buttonText: "View Project",
    },
    {
      id: 4,
      name: "NOTION",
      tag: "MOBILE APPLICATION DESIGN",
      title: "Exploring How Color and Typography Shape a Clearer, more Accessible Notion",
      description:
        "A personalized Notion experience that explores the power of color and typography to create clarity, accessibility, and emotional connection.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NOTION-Rtkjra9KMmY6cnlrYU6eBbNl1zQysF.png",
      link: "https://www.figma.com/proto/oOITrUM8TzUOjxIjrsyWwk/NOTION?page-id=0%3A1&node-id=1-90&viewport=227%2C219%2C0.07&t=1xiQYSgmEsxDTvnj-1&scaling=scale-down&content-scaling=fixed",
      buttonText: "View Project",
    },
  ]

  return (
    <div className="min-h-screen bg-white relative">
      {/* 🔹 NAVBAR */}
      <div
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-1000 ease-out ${
          hasLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <Navigation />
      </div>

      {/* MAIN PAGE CONTENT */}
      <main className="pt-28 pb-16">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
            hasLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-96"
          }`}
        >
          <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div key={project.id} className="project-item transition-all duration-700 ease-out group project-initial">
                <div>
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden transition-transform duration-700 group-hover:scale-95">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="pt-8">
                    <div className="inline-block mb-4">
                      <span className="text-fade text-initial px-4 py-2 bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full border border-black">
                        {project.tag}
                      </span>
                    </div>

                    <Link href={project.slug || project.link} passHref>
                      <h3 className="text-fade text-initial text-2xl font-bold text-gray-900 mb-4 leading-tight hover:underline transition-all cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>

                    <p className="text-fade text-initial text-gray-700 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="text-fade text-initial">
                      {project.slug ? (
                        <Link href={project.slug} passHref>
                          <Button
                            variant="ghost"
                            className="group/btn p-0 h-auto text-gray-900 hover:text-black hover:bg-transparent text-base transition-all duration-300 hover:scale-110"
                          >
                            <span className="group-hover/btn:underline">{project.buttonText}</span>
                            <ArrowRightIcon />
                          </Button>
                        </Link>
                      ) : (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            className="group/btn p-0 h-auto text-gray-900 hover:text-black hover:bg-transparent text-base transition-all duration-300 hover:scale-110"
                          >
                            <span className="group-hover/btn:underline">{project.buttonText}</span>
                            <ArrowRightIcon />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative bg-gray-50 rounded-3xl p-16 text-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              </div>

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
      </main>

      <Footer />

      <style jsx>{`
        .project-initial {
          opacity: 0;
          transform: translateZ(-100px) scale(0.8);
          transition: all 1.5s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateZ(0px) scale(1) !important;
          transition: all 1.5s ease-out !important;
        }
        /* Added text fade-in animation styles */
        .text-initial {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease-out;
        }
        .text-animate-in {
          opacity: 1 !important;
          transform: translateY(0px) !important;
          transition: all 0.8s ease-out !important;
        }
      `}</style>
    </div>
  )
}
