import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import { DM_Sans, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"
import { BackToTop } from "@/components/back-to-top"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["700"], // Bold weight for headings
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-pro",
  weight: ["400"], // Regular weight for body text
})

export const metadata: Metadata = {
  title: "Design With Roselyn",
  description: "UI/UX Designer creating engaging user experiences and sharing creative insights",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSansPro.variable} antialiased`}>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body>
        {children}
        <BackToTop />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/service-worker.js')
                    .then(function(registration) {
                      console.log('[SW] Service Worker registered successfully:', registration.scope);
                      
                      // Check for updates
                      registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        if (newWorker) {
                          newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              // New content is available, refresh the page
                              console.log('[SW] New content available, refreshing...');
                              window.location.reload();
                            }
                          });
                        }
                      });
                    })
                    .catch(function(error) {
                      console.log('[SW] Service Worker registration failed:', error);
                    });
                });

                // Listen for online event and reload page
                window.addEventListener('online', function() {
                  console.log('[SW] Back online, reloading page...');
                  // Small delay to ensure connection is stable
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                });

                // Optional: Listen for offline event
                window.addEventListener('offline', function() {
                  console.log('[SW] Gone offline');
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
