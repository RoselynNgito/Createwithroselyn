"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-stone-50 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src="/placeholder-nsijr.png"
              alt="Roselyn Njoki Ngito"
              className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
            />
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center lg:text-left">
              <h2 className="font-sans text-2xl md:text-3xl font-bold text-stone-800 mb-6 text-center">About Me</h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-stone-600">
              <p>
                Hello! 👋 I'm Roselyn, a UX/UI & Web Designer who loves bringing intuitive and visually captivating
                designs to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
