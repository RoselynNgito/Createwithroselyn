"use client"

import { useEffect, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("contact")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - you'll implement this later
    console.log("Form submitted:", formData)
    alert("Thank you for your message! This is a placeholder - form functionality will be added later.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(147.995deg, rgb(255, 250, 250) 0%, rgb(255, 250, 250) 50%, rgb(255, 248, 250) 100%)",
      }}
    >
      {/* Floating background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-40 h-40 rounded-full opacity-20 animate-float-slow"
          style={{
            background: "linear-gradient(135deg, rgb(255, 201, 201) 0%, rgb(255, 161, 173) 100%)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-25 animate-float"
          style={{
            background: "linear-gradient(135deg, rgb(255, 161, 173) 0%, rgb(255, 99, 126) 100%)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-28 h-28 rounded-full opacity-15 animate-float-delayed"
          style={{
            background: "linear-gradient(135deg, rgb(255, 226, 226) 0%, rgb(255, 204, 211) 100%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-[1200ms] ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{
              fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
              color: "#800020",
              transitionDelay: "200ms",
            }}
          >
            Let's Work Together
          </h2>
          <p
            className={`text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto transition-all duration-[1200ms] ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              transitionDelay: "400ms",
            }}
          >
            Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing
            together.
          </p>
        </div>

        {/* Contact Options */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 transition-all duration-[1200ms] ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {/* Email Button */}
          <a
            href="mailto:roselynngito@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "#800020",
              color: "white",
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Me
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border-2"
            style={{
              borderColor: "#800020",
              color: "#800020",
              backgroundColor: "white",
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Contact Form */}
        <div
          className={`bg-white rounded-2xl shadow-xl p-8 lg:p-12 transition-all duration-[1200ms] ease-out ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
                style={{
                  color: "#2c2c2c",
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-[#800020] focus:outline-none transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
                style={{
                  color: "#2c2c2c",
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-[#800020] focus:outline-none transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}
                placeholder="your.email@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
                style={{
                  color: "#2c2c2c",
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border-2 border-stone-200 focus:border-[#800020] focus:outline-none transition-colors duration-300 resize-none"
                style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: "#800020",
                color: "white",
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}