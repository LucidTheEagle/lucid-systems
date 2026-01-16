import type { Metadata } from "next"
import { Cinzel, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-ancient',
  weight: ['400', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-modern',
  weight: ['400', '500', '700'],
  display: 'swap',
})

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
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lucidsystems.io", // UPDATE WITH YOUR DOMAIN
    title: "Lucid Systems | AI Systems Architect for High-Volume Operations",
    description: "I provide clarity where there is blur, fog, and smoke. Deploy intelligence systems that remove chaos from high-volume operations.",
    siteName: "Lucid Systems",
    images: [
      {
        url: "https://lucidsystems.io/og.png", // UPDATE WITH YOUR DOMAIN
        width: 1200,
        height: 630,
        alt: "Lucid Systems - Clarity. Altitude. Systems.",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Lucid Systems | AI Systems Architect for High-Volume Operations",
    description: "I provide clarity where there is blur, fog, and smoke. Deploy intelligence systems that remove chaos.",
    images: ["https://lucidsystems.vercel.app/og.png"], // UPDATE WITH YOUR DOMAIN
    creator: "@lucidtheeagle",
  },
  
  // Additional
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
  
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}