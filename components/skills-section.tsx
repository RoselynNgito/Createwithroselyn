"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  PenTool,
  Smartphone,
  Monitor,
  Users,
  Figma,
  BarChart3,
  Layers,
  Code,
  Globe,
  Palette,
} from "lucide-react"

export function SkillsSection() {
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

  const designSkills = [
    { name: "UX Research", icon: Search, description: "User interviews, surveys, and usability testing" },
    { name: "Wireframing", icon: PenTool, description: "Low and high-fidelity wireframes and prototypes" },
    { name: "UI Design", icon: Monitor, description: "Visual design and interface creation" },
    { name: "Prototyping", icon: Smartphone, description: "Interactive prototypes and user flows" },
    { name: "Design Thinking", icon: Users, description: "Double Diamond Process and empathy mapping" },
    { name: "Information Architecture", icon: Layers, description: "User flows and journey mapping" },
    { name: "Visual Composition", icon: Palette, description: "Mood boards and visual design systems" },
  ]

  const webDesignTools = [
    { name: "Visual Studio Code", icon: Code, description: "Primary code editor for web development" },
    { name: "HTML/CSS", icon: Globe, description: "Frontend markup and styling languages" },
    { name: "Responsive Design", icon: Monitor, description: "Multi-device and cross-platform layouts" },
  ]

  const technicalSkills = [
    { name: "JavaScript", icon: Code, description: "Dynamic programming and web interactivity" },
    { name: "HTML", icon: Globe, description: "Semantic markup and web structure" },
    { name: "CSS", icon: Palette, description: "Styling and responsive design" },
    { name: "React", icon: Code, description: "Frontend JavaScript library" },
  ]

  const tools = [
    { name: "Figma", icon: Figma, description: "Primary design and prototyping tool" },
    { name: "FigJam", icon: BarChart3, description: "Collaborative whiteboarding and brainstorming" },
    { name: "Excalidraw", icon: PenTool, description: "Hand-drawn style diagrams and wireframes" },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-800 via-red-900 to-red-800 bg-clip-text text-transparent tracking-tight mb-4 text-center">
            Skills & Tools
          </h2>
        </div>

        {/* Design Skills */}
        <div className="mb-16">
          <h3
            className={`font-sans text-xl font-semibold text-foreground mb-8 text-center transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Design Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {designSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`group hover:shadow-md transition-all duration-700 ease-out border-border delay-${(index + 2) * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3
            className={`font-sans text-xl font-semibold text-foreground mb-8 text-center transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Web Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webDesignTools.map((tool, index) => (
              <Card
                key={tool.name}
                className={`group hover:shadow-md transition-all duration-700 ease-out border-border delay-${(index + 4) * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <tool.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3
            className={`font-sans text-xl font-semibold text-foreground mb-8 text-center transition-all duration-700 ease-out delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`group hover:shadow-md transition-all duration-700 ease-out border-border delay-${(index + 6) * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-red-200 rounded-full group-hover:bg-red-300 transition-colors">
                      <skill.icon className="h-6 w-6 text-red-700" />
                    </div>
                  </div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3
            className={`font-sans text-xl font-semibold text-foreground mb-8 text-center transition-all duration-700 ease-out delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Design Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Card
                key={tool.name}
                className={`group hover:shadow-md transition-all duration-700 ease-out border-border delay-${(index + 8) * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                      <tool.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
