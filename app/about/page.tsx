import type { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About Me | Design With Roselyn",
}

export default function About() {
  return <AboutClient />
}
