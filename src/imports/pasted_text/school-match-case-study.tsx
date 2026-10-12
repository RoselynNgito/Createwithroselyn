"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      {/* 🔹 Navbar */}
      <Navigation />

      {/* 🔹 Fade-in wrapper for seamless load */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* 🔹 Hero Section */}
        <motion.section className="relative w-full h-auto flex flex-col items-center justify-center bg-white pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center px-4">
            {/* Tag */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, z: -100, scale: 0.8 }}
              animate={{ opacity: 1, z: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <span className="px-4 py-2 bg-gray-100 text-gray-900 text-xs font-medium uppercase tracking-wider rounded-full border border-black">
                MOBILE APPLICATION DESIGN
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            >
              School-Match: Connecting Parents with Perfect Educational Opportunities
            </motion.h2>

            {/* Hero Image */}
            <motion.div
              className="relative w-full h-[500px] overflow-hidden shadow-lg mb-12"
              initial={{ opacity: 0, z: -100, scale: 0.8 }}
              animate={{ opacity: 1, z: 0, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/images/design-mode/CASE%20STUDY%20PHOTO(1).png"
                alt="School-Match Case Study"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* 🔹 Main Case Study Content */}
        <section className="max-w-4xl mx-auto px-4 py-20 space-y-24">
          {/* Project Overview */}
          <motion.div
            className="grid gap-11 items-start md:grid-cols-[250px_1fr]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold text-black-900 whitespace-nowrap">Project Overview</h2>
            </div>
            <div className="flex items-start">
              <p className="text-base text-gray-700 leading-relaxed">
                Parents often struggle to compare schools and make informed decisions about their children's education.
                School-Match solves this problem by providing curated data, AI-driven insights, and personalized
                recommendations, making the school selection process transparent and stress-free.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-gray-400"></div>

          {/* Timeframe, My Role, Tools */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}
            viewport={{ once: true }}
          >
            {[
              {
                title: "TIMEFRAME",
                text: "9 Weeks",
              },
              {
                title: "MY ROLE",
                text: "UX + UI Design, User flow, Research, Prototyping User Testing",
              },
              {
                title: "TOOLS",
                text: "Figma, Excalidraw, Notion",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-green-900 mb-4">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="border-t border-gray-400"></div>

          {/* The Challenge */}
          <motion.div
            className="grid gap-11 items-start md:grid-cols-[250px_1fr]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold text-green-900 mb-4">THE CHALLENGE</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-1 m-0 p-0">
                <li>Emotional unfit</li>
                <li>Information gaps</li>
                <li>Research fatigue</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-base text-gray-700 leading-relaxed">
                Parents struggle to find a school that aligns with their child's emotional, academic, and logistical
                needs due to scattered, incomplete, and impersonal information online.
              </p>
            </div>
          </motion.div>

          {/* Project Objective */}
          <motion.div
            className="grid gap-11 items-start md:grid-cols-[250px_1fr]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-start">
              <h2 className="text-lg font-semibold text-green-900 mb-4">THE GOAL/OBJECTIVE</h2>
            </div>
            <div className="flex items-start">
              <p className="text-base text-gray-700 leading-relaxed">
                Design a parent-first school discovery app that{" "}
                <span className="text-green-700 font-semibold">
                  simplifies research, supports emotionally aligned school choices, and bridges information gaps
                </span>
                , by offering personalized recommendations, rich school profiles, comparison tools, and verified parent
                reviews in one place.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-gray-400 mt-12"></div>
          {/* Design Process */}
          <motion.div
            className="space-y-4 -mt-8" // added negative margin to move section closer to border above
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl font-bold mb-1 text-black-900" // reduced bottom margin from mb-2 to mb-1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Design Process
            </motion.h2>
            <motion.div
              className="relative w-full h-[400px] overflow-hidden mb-2" // reduced bottom margin from mb-4 to mb-2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Image src="/design-process.png" alt="Design Process Diagram" fill className="object-contain" />
            </motion.div>
          </motion.div>

{/* Empathy Map */}
<motion.div
  className="-mt-32" // pulled section higher
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* Title */}
  <h3 className="text-lg font-semibold text-green-900 uppercase tracking-wide mb-1">
    EMPATHY MAP
  </h3>

  {/* Description */}
  <p className="text-base text-gray-700 leading-relaxed border-l-4 border-green-900 pl-6 italic mb-1">
    To understand how parents make school choices, I created an empathy map that revealed their influences,
    struggles, feelings, and goals. It captured what shaped their decisions, the challenges they faced, and
    the outcomes they wanted for their children. These insights provided a clear foundation for the design
    process.
  </p>

  {/* Image tightly below description */}
  <div className="relative w-full h-[650px] -mt-1">
    <Image
      src="/Empathy-Map.png"
      alt="Empathy Map showing user influences, pain points, tasks, feelings, and goals"
      fill
      className="object-contain"
    />
  </div>
</motion.div>

{/* 🔹 User Personas Section */}
<motion.div
  className="w-full -mt-16"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Title + Description side by side */}
  <div className="grid gap-11 items-start md:grid-cols-[250px_1fr] mt-1">
    <div className="flex flex-col justify-start">
      <h2 className="text-3xl font-bold text-black-900 whitespace-pre-line">
        User Personas
      </h2>
    </div>
    <div className="flex items-start">
      <p className="text-base text-gray-700 leading-relaxed">
        To better understand our target users, I created two personas that capture
        their motivations, goals, and challenges. These personas guided design
        decisions throughout the project and ensured the solution stayed aligned
        with user needs.
      </p>
    </div>
  </div>

  {/* Persona Images - stacked tightly below */}
  <motion.div
    className="flex justify-center mt-6"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="relative w-full max-w-5xl flex flex-col m-0 p-0">
      <Image
        src="/PERSONA-1.png"
        alt="User Persona 1"
        width={1200}
        height={650}
        className="object-contain block m-0 p-0"
      />
      <Image
        src="/PERSONA-2.png"
        alt="User Persona 2"
        width={1200}
        height={650}
        className="object-contain block m-0 p-0"
      />
    </div>
  </motion.div>
</motion.div>


{/* 🔹 Jobs To Be Done Section */}
<motion.div
  className="w-full -mt-6"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* Title + Description side by side */}
  <div className="grid gap-11 items-start md:grid-cols-[250px_1fr]">
    <div className="flex flex-col justify-start">
      <h2 className="text-lg font-semibold text-green-900 mb-4">
        JOBS TO BE DONE
      </h2>
    </div>
    <div>
      <p className="text-base text-gray-700 leading-relaxed">
        I developed the job stories from my synthesis of parent interviews. By pulling together 
        the main themes like the need for emotional fit, trust, clear comparisons, real-life 
        planning, and values, I shaped them into practical stories that highlight what parents 
        truly want when making school choices. This process helped me connect research insights 
        to real user needs and guided my design decisions.
      </p>
    </div>
  </div>

  {/* Centered Image below */}
  <div className="flex justify-center mt-6">
    <div className="relative w-full max-w-5xl h-[700px]">
      <Image
        src="/JTBD.png"
        alt="Jobs To Be Done"
        fill
        className="object-contain"
      />
    </div>
  </div>
</motion.div>


{/* Competitive Analysis */}
<motion.div
  className="-mt-12 mb-10 w-full mt-20" // added bigger bottom margin
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  {/* Title + Description (side by side like other sections) */}
  <div className="grid gap-11 items-start md:grid-cols-[250px_1fr]">
    <div className="flex flex-col justify-start">
      <h2 className="text-lg font-semibold text-green-900">COMPETITIVE ANALYSIS</h2>
    </div>
    <div>
      <p className="text-base text-gray-700 leading-relaxed">
        To evaluate the existing landscape, I analyzed two school ranking platforms:{" "}
        <span className="font-medium text-green-800">Fraser Institute</span> and{" "}
        <span className="font-medium text-green-800">Prep Review</span>. 
        The findings showed that while Fraser emphasizes data-driven rankings, Prep Review focuses more on prestige. 
        These insights highlighted clear gaps and opportunities to build a platform that better serves parents with transparent, personalized comparisons.
      </p>
    </div>
  </div>

  {/* Centered SWOT Image below description */}
  <motion.div
    className="flex justify-center mt-12"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <div className="relative w-full max-w-5xl flex flex-col m-0 p-0">
      <Image
        src="/swot.png"
        alt="SWOT Competitive Analysis"
        width={1200}
        height={700}
        className="object-contain block m-0 p-0"
      />
    </div>
  </motion.div>
</motion.div>

{/* 🔹 MoSCoW Prioritization Section */}
<motion.div
  className="grid gap-11 items-start md:grid-cols-[250px_1fr] mt-26" 
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="flex flex-col justify-start">
    <h2 className="text-3xl font-bold text-black-900 whitespace-pre-line">
      MoSCoW {"\n"} Prioritization
    </h2>
  </div>
  <div className="flex items-start">
    <p className="text-base text-gray-700 leading-relaxed">
      To decide which features to focus on for the MVP, I applied the MoSCoW method. 
      This framework helped categorize features into Must Have, Should Have, Could Have, 
      and Won’t Have, ensuring we built around real user needs while balancing effort 
      and impact.
    </p>
  </div>
</motion.div>

{/* MoSCoW Image - stacked tightly with no spacing */}
<motion.div
  className="w-full max-w-5xl flex flex-col items-center -mt-10" // slight spacing before image
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <div className="relative w-full flex flex-col m-0 p-0">
    <Image
      src="/MoSCoW-Prioritization.png"
      alt="MoSCoW Prioritization framework with Must, Should, Could, and Won’t Have features"
      width={1200}
      height={650}
      className="object-contain block m-0 p-0"
    />
  </div>
</motion.div>

{/* 🔹 User Flow Breakdown Section */}
<motion.div
  className="grid gap-11 items-start md:grid-cols-[250px_1fr] mt-26" 
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <div className="flex flex-col justify-start">
    <h2 className="text-3xl font-bold text-black-900 whitespace-pre-line">
      User Flow {"\n"} Breakdown
    </h2>
  </div>
  <div className="flex items-start">
    <p className="text-base text-gray-700 leading-relaxed">
      This user flow breakdown highlights the key route parents follow in the app starting 
      from entering the platform, exploring school options, and comparing results, to finally 
      shortlisting schools. It emphasizes a streamlined path designed to simplify decision 
      making and guide users toward their goals.
    </p>
  </div>
</motion.div>

{/* User Flow Image - stacked tightly with no spacing */}
<motion.div
  className="w-full max-w-5xl flex flex-col items-center -mt-10" 
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <div className="relative w-full flex flex-col m-0 p-0">
    <Image
      src="/Userflow.png"
      alt="User Flow Breakdown diagram"
      width={1200}
      height={650}
      className="object-contain block m-0 p-0"
    />
  </div>
</motion.div>


<div className="border-t border-gray-400 mt-6"></div>

<div className="text-center text-2xl font-bold text-gray-900 mt-4">
  STILL IN THE WORKS
</div>

        </section>
      </motion.div>

      {/* 🔹 Footer */}
      <Footer />
    </div>
  )
}
