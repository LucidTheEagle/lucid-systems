import type { Metadata, Viewport } from "next"
import { Cinzel, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import StructuredData from "@/components/StructuredData"

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-ancient',
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-modern',
  weight: ['400', '500'],
  display: 'swap',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#050505',
}

export const metadata: Metadata = {
  title: "Lucid Systems | AI Systems Architect for High-Volume Operations",
  description: "I provide clarity where there is blur, fog, and smoke. Operational leverage through AI systems architecture. Deploy The Prism, The Sentry, or The Overwatch to enforce order in high-volume operations.",
  
  keywords: [
    "AI systems architecture",
    "operational efficiency",
    "data extraction automation",
    "lead qualification engine",
    "predictive analytics",
    "business intelligence",
    "workflow automation",
    "high-volume operations",
    "AI triage system",
    "document processing AI"
  ],
  
  authors: [{ name: "Lucid the Eagle" }],
  creator: "Lucid Systems",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucidsystems.vercel.app",
    title: "Lucid Systems | AI Systems Architect for High-Volume Operations",
    description: "I provide clarity where there is blur, fog, and smoke. Deploy intelligence systems that remove chaos from high-volume operations.",
    siteName: "Lucid Systems",
    images: [
      {
        url: "https://lucidsystems.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "Lucid Systems - Clarity. Altitude. Systems.",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Lucid Systems | AI Systems Architect for High-Volume Operations",
    description: "I provide clarity where there is blur, fog, and smoke. Deploy intelligence systems that remove chaos.",
    images: ["https://lucidsystems.vercel.app/og.png"],
    creator: "@lucidtheeagle",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* DNS Prefetch for external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cal.com" />
      </head>
      <body className="antialiased bg-obsidian text-alabaster selection:bg-lucid selection:text-obsidian">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}