"use client"

import { useEffect, useRef, useState } from "react"
// Kept in public so the deployment does not depend on a Figma-generated asset ID.
const roselynPhoto = "/roselyn.jpg"

const skills = [
  "User Interface Design",
  "User Experience Design",
  "Responsive Design",
  "Market & User Research",
  "Wireframing & Prototyping",
  "Information Architecture",
  "User Flows",
]

const tools = [
  "Figma",
  "Illustrator",
  "InDesign",
  "Excalidraw",
  "Miro",
  "FigJam",
]

const education = [
  {
    degree: "B.Sc. Information Technology",
    institution: "Mount Kenya University",
    year: "2021-2025"
  },
  {
    degree: "Product Design",
    institution: "Moringa School",
    year: "2025"
  },
]

function useStaggerReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

export function AboutSection() {
  const hero = useStaggerReveal(0.1)
  const bio = useStaggerReveal(0.15)
  const skillsSection = useStaggerReveal(0.15)
  const eduSection = useStaggerReveal(0.15)
  const contactSection = useStaggerReveal(0.15)

  return (
    <section id="about" className="min-h-screen" style={{
      background: "linear-gradient(147.995deg, rgb(255, 250, 250) 0%, rgb(255, 250, 250) 50%, rgb(255, 248, 250) 100%)",
    }}>
      {/* Hero Section with Photo */}
      <div ref={hero.ref} className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <div
              className={`transition-all duration-[1500ms] cubic-bezier-out order-2 lg:order-1 ${
                hero.visible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
              style={{
                transitionDelay: "200ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight"
                style={{
                  fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
                  color: "#2c2c2c",
                }}
              >
                UX/UI designer with a background in technology and coding. Based in Nairobi, Kenya
              </h1>
            </div>

            {/* Right: Circular Photo with gradient background circle */}
            <div
              className={`transition-all duration-[1200ms] ease-out order-1 lg:order-2 ${
                hero.visible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0 flex justify-center">
                {/* Simple circular container with photo inside */}
                <div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: "400px",
                    height: "400px",
                  }}
                >
                  <img
                    src={roselynPhoto}
                    alt="Nghi Roselyn"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BIO Section */}
      <div ref={bio.ref} className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div
              className={`lg:col-span-2 transition-all duration-[1000ms] ease-out ${
                bio.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h2
                className="text-xl font-bold uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  color: "#2c2c2c",
                }}
              >
                BIO
              </h2>
            </div>
            <div className="lg:col-span-10 space-y-6">
              <p
                className={`text-base lg:text-lg text-stone-700 leading-relaxed transition-all duration-[1000ms] ease-out ${
                  bio.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  transitionDelay: "250ms",
                }}
              >
                With a degree in Information Technology, I started in tech with a strong foundation in coding. But even back in school, I always had an eye for design, constantly tweaking layouts and fixing visual hierarchy. But I wanted more than just aesthetics, I wanted to understand how people interact with what I create. That curiosity led me to UX/UI design, where I discovered the perfect blend of technical thinking and creative expression.
              </p>
              <p
                className={`text-base lg:text-lg text-stone-700 leading-relaxed transition-all duration-[1000ms] ease-out ${
                  bio.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  transitionDelay: "400ms",
                }}
              >
                When I'm not designing, you'll find me reading, writing, creating art, or playing the guitar and piano. Music and creativity fuel my work and keep me inspired.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS Section */}
      <div ref={skillsSection.ref} className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div
              className={`lg:col-span-2 transition-all duration-[1000ms] ease-out ${
                skillsSection.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h2
                className="text-xl font-bold uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  color: "#2c2c2c",
                }}
              >
                SKILLS
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-3">
                {skills.map((skill, idx) => (
                  <p
                    key={idx}
                    className={`text-base lg:text-lg text-stone-700 transition-all duration-[800ms] ease-out ${
                      skillsSection.visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                      transitionDelay: `${200 + idx * 80}ms`,
                    }}
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <div
              className={`lg:col-span-2 transition-all duration-[1000ms] ease-out ${
                skillsSection.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h3
                className="text-xl font-bold uppercase tracking-wide mb-6"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  color: "#2c2c2c",
                }}
              >
                DESIGN TOOLS
              </h3>
            </div>
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {tools.map((tool, idx) => (
                  <p
                    key={idx}
                    className={`text-base lg:text-lg text-stone-700 transition-all duration-[800ms] ease-out ${
                      skillsSection.visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                    style={{
                      fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                      transitionDelay: `${400 + idx * 80}ms`,
                    }}
                  >
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION Section */}
      <div ref={eduSection.ref} className="py-12 lg:py-16 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div
              className={`lg:col-span-2 transition-all duration-[1000ms] ease-out ${
                eduSection.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <h2
                className="text-xl font-bold uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  color: "#2c2c2c",
                }}
              >
                EDUCATION
              </h2>
            </div>
            <div className="lg:col-span-10">
              <div className="space-y-0">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`py-6 border-b border-stone-300 grid grid-cols-1 sm:grid-cols-2 gap-2 transition-all duration-[900ms] ease-out ${
                      eduSection.visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${200 + idx * 150}ms` }}
                  >
                    <p
                      className="text-base lg:text-lg text-stone-700"
                      style={{
                        fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                      }}
                    >
                      {edu.degree}
                    </p>
                    <p
                      className="text-base lg:text-lg text-stone-600 sm:text-right"
                      style={{
                        fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                      }}
                    >
                      {edu.institution} ({edu.year})
                    </p>
                  </div>
                ))}
              </div>

              {/* Request Resume Button */}
              <div
                className={`mt-10 transition-all duration-[1000ms] ease-out ${
                  eduSection.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "900ms" }}
              >
                <a
                  href="mailto:roselynngito@gmail.com?subject=Resume Request"
                  className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full transition-all duration-300 hover:bg-[#800020] hover:scale-105"
                  style={{
                    fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  }}
                >
                  Request Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GET IN TOUCH Section */}
      <div ref={contactSection.ref} className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative flex items-center justify-center min-h-[500px]">
            {/* Gradient Blob Background */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-[1500ms] ease-out ${
                contactSection.visible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div
                className="w-[400px] h-[400px]"
                style={{
                  background: "radial-gradient(circle at 30% 40%, #ff6b6b 0%, #d63447 25%, #a4193d 45%, #800020 60%, #6b4e71 80%, #8b7ba8 100%)",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                  filter: "blur(40px)",
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <p
                className={`text-base lg:text-lg mb-4 transition-all duration-[1000ms] ease-out ${
                  contactSection.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                  color: "#2c2c2c",
                  transitionDelay: "300ms",
                }}
              >
                Let's chat?
              </p>
              <h2
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 transition-all duration-[1200ms] ease-out ${
                  contactSection.visible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{
                  fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
                  color: "#2c2c2c",
                  transitionDelay: "500ms",
                }}
              >
                Get in touch
              </h2>
              <div
                className={`transition-all duration-[1000ms] ease-out ${
                  contactSection.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: "700ms" }}
              >
                <a
                  href="mailto:roselynngito@gmail.com"
                  className="inline-block px-10 py-4 border-2 border-black bg-transparent text-black font-medium rounded-full transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
                  style={{
                    fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                    fontSize: "1.125rem",
                  }}
                >
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
