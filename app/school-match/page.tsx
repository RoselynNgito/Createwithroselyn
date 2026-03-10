import type { Metadata } from "next"
import CaseStudy from "./case-study"

export const metadata: Metadata = {
  title: "School-Match: Connecting Parents with Perfect Educational Opportunities",
}

export default function SchoolMatchPage() {
  return <CaseStudy />
}
