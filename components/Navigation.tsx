"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShimmerButton } from "./ui/shimmer-button"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-obsidian/80" : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo/Brand */}
        <motion.button
          onClick={() => scrollToSection("hero")}
          className="text-ancient text-alabaster md:text-2xl text-xl tracking-[0.15em] uppercase font-bold hover:text-lucid transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          LUCID SYSTEMS
        </motion.button>


        {/* Navigation Links - HIDDEN on Mobile, Visible on MD+ */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("systems")}
            className="text-modern text-granite text-sm uppercase tracking-widest hover:text-lucid transition-colors duration-300"
          >
            SYSTEMS
          </button>

         {/* Ascend Button */}
         <ShimmerButton
           onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
           className="text-sm px-6 py-3"
         >
           [ ASCEND ]
         </ShimmerButton>
        </div>        

        {/* Mobile Only CTA - Simpler version for small screens */}
        <div className="md:hidden">
           <button 
             onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
             className="text-lucid text-sm uppercase tracking-widest border border-lucid/30 px-4 py-2"
           >
             ASCEND
           </button>
        </div>
      </div>
    </motion.nav>
  )
}