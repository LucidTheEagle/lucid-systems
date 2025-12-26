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
  title: "Lucid Systems — Clarity. Altitude. Systems.",
  description: "AI-powered SaaS systems designed from altitude. Fast, structured, built to convert.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}