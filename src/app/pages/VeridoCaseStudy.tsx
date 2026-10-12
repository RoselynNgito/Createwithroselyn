import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"
import { BackToTop } from "../components/BackToTop"
import { motion } from "motion/react"
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
const VeridoHero = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775068511/HERO_IMAGE_k4inwv.png"
const designProcessImage = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775122903/design-process_tkab0l.png"
const empathyMapImage = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126028/Empathy_Map_q80xko.png"
const persona1Image = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126125/PERSONA-1_rceyse.png"
const persona2Image = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126191/PERSONA-2_qpjddi.png"
const jobsToBeDoneImage = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126284/JTBD_lrxfx8.png"
const competitiveAnalysisImage = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126340/Competitive-analysis_jltrmz.png"
const moscowImage = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126392/MoSCoW-Prioritization_nq9abx.png"
const userFlowImage = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126716/Userflow_zprr4g.png"
const wireframe1Image = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126887/LOW-FI-1_r5vcul.png"
const wireframe2Image = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126941/LOW-FI-2_ezywdz.png"
const wireframe3Image = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126979/LOW-FI-3_alkxef.png"
const wireframe4Image = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775126982/LOW-FI-4_re0rfz.png"
const brandingImage = "https://res.cloudinary.com/dhdsr11od/image/upload/v1775120187/BRANDING_ldxenk.png"


export default function VeridoCaseStudy() {

  return (
    <div className="min-h-screen" style={{
      background: "linear-gradient(147.995deg, rgb(255, 250, 250) 0%, rgb(255, 250, 250) 50%, rgb(255, 248, 250) 100%)",
    }}>
      {/* Navigation */}
      <Navigation />

      {/* Fade-in wrapper for seamless load */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        {/* Hero Section */}
        <motion.section className="relative w-full h-auto flex flex-col items-center justify-center pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center px-4">
            {/* Tag */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border-2 border-stone-900 text-stone-900" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>
                END TO END APPLICATION
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-6"
              style={{
                fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              Verido: Turning Business Data into Profitable Decisions
            </motion.h1>

            {/* Hero Image */}
<motion.div
  className="relative w-full mb-12"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
>
  <img
    src={VeridoHero}
    alt="Verido Case Study"
    className="w-full h-auto object-contain"
  />
</motion.div>
</div>
</motion.section>

        {/* Main Case Study Content */}
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
              <h2 className="text-3xl font-bold text-black-900 whitespace-nowrap" style={{
                fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
              }}>Project Overview</h2>
            </div>
            <div className="flex items-start">
              <p className="text-base text-gray-900 leading-relaxed" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>
                <span className="text-green-700 font-semibold">Business owners </span> often struggle to price their products profitably and keep track of complex costs, inventory, and customer debts.
                Verido solves this problem by automatically generating profitable selling prices, tracking best-selling items, and sending automated 
                payment reminders, making business financial management simple, profitable, and stress-free.
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
                text: "4 Months",
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
                <h3 className="text-lg font-semibold text-green-900 mb-4" style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}>{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed" style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}>{item.text}</p>
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
              <h2 className="text-lg font-semibold text-green-900 mb-4" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>THE CHALLENGE</h2>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-1 m-0 p-0" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>
                <li>Hidden costs</li>
                <li>Unpaid debts</li>
                <li>Poor internet</li>
              </ul>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-base text-gray-700 leading-relaxed" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>
                Market women struggle to charge enough and prove their business is doing well because they have
                to use paper notebooks and guess their actual costs.
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
              <h2 className="text-lg font-semibold text-green-900 mb-4" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>THE GOAL/OBJECTIVE</h2>
            </div>
            <div className="flex items-start">
              <p className="text-base text-gray-700 leading-relaxed" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>
                Design a mobile-first digital platform that{" "}
                <span className="text-green-700 font-semibold">
                  simplifies daily transaction tracking, proves small enterprises are investible partners, and bridges the gap to credit and supply-chain opportunities
                </span>
                , by offering offline voice-to-text capture, QR scanners, built-in wallet modules, and role-based performance dashboards in one place.

              </p>
            </div>
          </motion.div>

          <div className="border-t border-gray-400 mt-12"></div>

          {/* My Design Process */}
          <motion.div
            className="space-y-4 -mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h2
              className="text-3xl font-bold mb-8 text-black-900"
              style={{
                fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              My Design Process
            </motion.h2>
            <motion.div
              className="relative w-full max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <ImageWithFallback
                src={designProcessImage}
                alt="Design Process Diagram"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Empathy Map */}
          <motion.div
            className="mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-black-900 uppercase tracking-wide mb-1" style={{
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
            }}>
              Empathize
            </h3>

            {/* Description */}
            <p className="text-base text-gray-700 leading-relaxed border-l-4 border-green-900 pl-6 italic mb-1" style={{
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
            }}>
              To understand how parents make school choices, I created an empathy map that revealed their influences,
              struggles, feelings, and goals. It captured what shaped their decisions, the challenges they faced, and
              the outcomes they wanted for their children. These insights provided a clear foundation for the design
              process.
            </p>

            {/* Image */}
            <div className="relative w-full max-w-4xl mx-auto h-auto mt-8">
              <ImageWithFallback
                src={empathyMapImage}
                alt="Empathy Map showing user influences, pain points, tasks, feelings, and goals"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* User Personas Section */}
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
                <h2 className="text-3xl font-bold text-black-900 whitespace-pre-line" style={{
                  fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
                }}>
                  User Personas
                </h2>
              </div>
              <div className="flex items-start">
                <p className="text-base text-gray-700 leading-relaxed" style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}>
                  To better understand our target users, I created two personas that capture
                  their motivations, goals, and challenges. These personas guided design
                  decisions throughout the project and ensured the solution stayed aligned
                  with user needs.
                </p>
              </div>
            </div>

            {/* Persona Images */}
            <motion.div
              className="flex flex-col gap-8 mt-8 w-full max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-full h-auto">
                <ImageWithFallback
                  src={persona1Image}
                  alt="Persona 1 - David Mwangi"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative w-full h-auto">
                <ImageWithFallback
                  src={persona2Image}
                  alt="Persona 2 - Evelyn Kinyua"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Jobs To Be Done Section */}
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
                <h2 className="text-3xl font-semibold text-black-900 mb-4" style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}>
                  JTBD (Jobs To Be Done)
                </h2>
              </div>
              <div>
                <p className="text-base text-gray-700 leading-relaxed" style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}>
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
              <div className="relative w-full max-w-2xl mx-auto h-auto">
                <ImageWithFallback
                  src={jobsToBeDoneImage}
                  alt="Jobs To Be Done - Five job stories covering emotional fit, comparison clarity, trust, logistics, and values-based matching"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Competitive Analysis */}
          <motion.div
            className="-mt-12 mb-10 w-full mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Title + Description */}
            <div className="grid gap-11 items-start md:grid-cols-[250px_1fr]">
              <div className="flex flex-col justify-start">
                <h2 className="text-3xl font-semibold text-black-900" style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}>Competitive Analysis</h2>
              </div>
              <div>
                <p className="text-base text-gray-700 leading-relaxed" style={{
                  fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
                }}>
                  To evaluate the existing landscape, I analyzed two school ranking platforms:{" "}
                  <span className="font-medium text-green-800">Fraser Institute</span> and{" "}
                  <span className="font-medium text-green-800">Prep Review</span>. 
                  The findings showed that while Fraser emphasizes data-driven rankings, Prep Review focuses more on prestige. 
                  These insights highlighted clear gaps and opportunities to build a platform that better serves parents with transparent, personalized comparisons.
                </p>
              </div>
            </div>

            {/* SWOT Image */}
            <motion.div
              className="flex justify-center mt-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-5xl mx-auto h-auto">
                <ImageWithFallback
                  src={competitiveAnalysisImage}
                  alt="SWOT Competitive Analysis"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* MoSCoW Prioritization Section */}
          <motion.div
            className="grid gap-11 items-start md:grid-cols-[250px_1fr] mt-26"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold text-black-900 whitespace-pre-line" style={{
                fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
              }}>
                MoSCoW {"\n"} Prioritization
              </h2>
            </div>
            <div className="flex items-start">
              <p className="text-base text-gray-700 leading-relaxed" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>
                To decide which features to focus on for the MVP, I applied the MoSCoW method. 
                This framework helped categorize features into Must Have, Should Have, Could Have, 
                and Won't Have, ensuring we built around real user needs while balancing effort 
                and impact.
              </p>
            </div>
          </motion.div>

          {/* MoSCoW Image */}
          <motion.div
            className="w-full max-w-5xl flex flex-col items-center -mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-3xl mx-auto h-auto">
              <ImageWithFallback
                src={moscowImage}
                alt="MoSCoW Prioritization framework"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* User Flow Breakdown Section */}
          <motion.div
            className="grid gap-11 items-start md:grid-cols-[250px_1fr] mt-26"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold text-black-900 whitespace-pre-line" style={{
                fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
              }}>
                User Flow {"\n"} Breakdown
              </h2>
            </div>
            <div className="flex items-start">
              <p className="text-base text-gray-700 leading-relaxed" style={{
                fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
              }}>
                This user flow breakdown highlights the key route parents follow in the app starting 
                from entering the platform, exploring school options, and comparing results, to finally 
                shortlisting schools. It emphasizes a streamlined path designed to simplify decision 
                making and guide users toward their goals.
              </p>
            </div>
          </motion.div>

          {/* User Flow Image */}
          <motion.div
            className="w-full max-w-5xl flex flex-col items-center -mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-3xl mx-auto h-auto">
              <ImageWithFallback
                src={userFlowImage}
                alt="User Flow Breakdown diagram"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Low - Mid Fidelity Wireframes Section */}
          <motion.div
            className="w-full mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <h2 className="text-3xl font-bold text-black-900 mb-6" style={{
              fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
            }}>
              Low - Mid Fidelity Wireframes
            </h2>
            
            {/* Description */}
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl" style={{
              fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
            }}>
              I began by developing low to mid-fidelity wireframes to test various layout structures and navigation patterns. This early exploration allowed me to iterate on the core user journey, focusing particularly on the onboarding experience and profile creation flow while establishing the foundational information architecture.
            </p>
            
            {/* Wireframe Images */}
            <motion.div
              className="flex flex-col gap-8 mt-8 w-full max-w-3xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-full h-auto">
                <ImageWithFallback
                  src={wireframe1Image}
                  alt="Wireframe 1 - Onboarding Experience"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative w-full h-auto max-w-xl mx-auto">
                <ImageWithFallback
                  src={wireframe2Image}
                  alt="Wireframe 2 - Profile Creation Flow"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative w-full h-auto">
                <ImageWithFallback
                  src={wireframe3Image}
                  alt="Wireframe 3 - Onboarding Flow Sketches"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="relative w-full h-auto">
                <ImageWithFallback
                  src={wireframe4Image}
                  alt="Wireframe 4 - Home Screen and My Matches Sketches"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Branding Section */}
          <motion.div
            className="grid gap-11 items-start md:grid-cols-[250px_1fr] mt-26"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl font-bold text-black-900" style={{
                fontFamily: "var(--font-dm-sans), ui-serif, Georgia, Cambria, serif",
              }}>
                Branding
              </h2>
            </div>
            <div className="flex flex-col gap-4">
  {/* Intro paragraph */}
  <p
    className="text-base text-gray-700 leading-relaxed"
    style={{
      fontFamily: "var(--font-source-sans-pro), ui-sans-serif, system-ui, sans-serif",
    }}
  >
    To establish a cohesive brand identity, I developed a carefully balanced color palette following the 60-30-10 rule. This approach ensures visual harmony while guiding user attention across the interface.
  </p>

{/* Color Palette Section */}
  <div>
    <p className="font-bold text-green-700">Color Palette:</p>
    <p className="text-gray-700">Cream beige serves as the dominant background (60%)</p>
    <p className="text-gray-700">Calming green anchors key elements and navigation (30%)</p>
    <p className="text-gray-700">Vibrant yellow highlights CTAs and important actions (10%)</p>
  </div>

  {/* Typography Section */}
  <div>
    <p className="font-bold text-green-700">Typography:</p>
    <p className="text-gray-700">
      Roboto was selected as the primary typeface for clarity and modern appeal
    </p>
  </div>

  {/* Accessibility */}
  <p className="text-gray-700 font-medium">
    All color combinations were validated using <span className="text-green-700 font-semibold">Stark's contrast checker to ensure WCAG accessibility compliance</span> across all components.
  </p>
</div>
          </motion.div>

          {/* Branding Image */}
          <motion.div
            className="w-full max-w-5xl flex flex-col items-center -mt-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-5xl mx-auto h-auto">
              <ImageWithFallback
                src={brandingImage}
                alt="Branding - Color palette, 60-30-10 breakdown, contrast checker, and typography"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </section>
      </motion.div>

      {/* Footer */}
      <Footer />
      <BackToTop />
    </div>
  )
}