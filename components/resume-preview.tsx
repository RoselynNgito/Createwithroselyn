"use client"

import { Button } from "@/components/ui/button"

const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const FileTextIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

export function ResumePreview() {
  return (
    <section id="resume" className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Resume</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            View my complete professional background, skills, and project experience.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* PDF Preview */}
          <div className="w-full h-[600px] border-b border-stone-200">
            <iframe src="/ngito-roselyn.pdf" className="w-full h-full" title="Resume Preview" />
          </div>

          {/* Action Button */}
          <div className="p-6 text-center bg-stone-50">
            <Button asChild size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3">
              <a
                href="/ngito-roselyn.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FileTextIcon />
                Open Full Resume
                <ExternalLinkIcon />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
