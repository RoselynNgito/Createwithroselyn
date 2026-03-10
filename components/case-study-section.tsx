"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const ExternalLinkIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const FileTextIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

export function CaseStudySection() {
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

  const handleOpenPDF = () => {
    window.open("/casestudy.pdf", "_blank")
  }

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-serif">Case Study</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into my design process and methodology through this comprehensive case study
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div
            className={`space-y-6 transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileTextIcon />
              <h3 className="text-lg font-semibold text-foreground">Design Process Documentation</h3>
            </div>

            <Button
              onClick={handleOpenPDF}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base"
            >
              <ExternalLinkIcon />
              <span className="ml-2">Open Full Case Study</span>
            </Button>

            <div className="prose prose-stone max-w-none">
              <p className="text-muted-foreground">
                This case study showcases my complete design process from initial research and user interviews to final
                prototypes and usability testing. It demonstrates my approach to solving complex UX challenges through
                systematic methodology and user-centered design principles.
              </p>
            </div>
          </div>

          <div
            className={`bg-card rounded-lg border shadow-sm overflow-hidden transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="aspect-[3/4] w-full">
              <iframe src="/casestudy.pdf" className="w-full h-full border-0" title="Case Study PDF Preview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
