import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Portfolio | Design With Roselyn",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
