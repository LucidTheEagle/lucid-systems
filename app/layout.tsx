import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucid Systems — Clarity. Altitude. Systems.",
  description: "AI-powered SaaS systems designed from altitude. Fast, structured, built to convert.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}