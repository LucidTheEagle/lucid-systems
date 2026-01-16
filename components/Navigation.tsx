"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShimmerButton } from "./ui/shimmer-button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-obsidian/80" : "bg-transparent"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo/Brand - GRADIENT SPLIT + RADIANCE HOVER */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="text-ancient text-2xl md:text-3xl tracking-[0.15em] uppercase font-bold transition-all duration-300 group"
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-alabaster group-hover:drop-shadow-[0_0_12px_rgba(229,229,229,0.6)]">
              LUCID
            </span>
            <span className="bg-gradient-to-r from-emerald-400 to-lucid bg-clip-text text-transparent group-hover:drop-shadow-[0_0_16px_rgba(0,240,255,0.8)]">
              SYSTEMS
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("systems")}
              className="text-modern text-granite text-sm uppercase tracking-widest hover:text-lucid transition-colors duration-300"
            >
              SYSTEMS
            </button>

            <ShimmerButton
              onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
              className="text-sm px-6 py-3"
            >
              [ ASCEND ]
            </ShimmerButton>
          </div>        

          {/* Mobile Hamburger Menu */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-alabaster hover:text-lucid transition-colors duration-300 z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* GLASS SHEET MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ backdropFilter: "blur(20px)" }}
          >
            <div className="absolute inset-0 bg-obsidian/90" />
            
            <div className="relative h-full flex flex-col items-center justify-center gap-12 px-6">
              <motion.button
                onClick={() => scrollToSection("systems")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-ancient text-alabaster text-3xl uppercase tracking-[0.15em] hover:text-lucid transition-colors duration-300"
              >
                SYSTEMS
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("pricing")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-ancient text-alabaster text-3xl uppercase tracking-[0.15em] hover:text-lucid transition-colors duration-300"
              >
                PRICING
              </motion.button>

              <motion.button
                onClick={() => {
                  window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")
                  setMobileMenuOpen(false)
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lucid text-2xl uppercase tracking-widest border-2 border-lucid px-8 py-4 hover:bg-lucid hover:text-obsidian transition-all duration-300"
              >
                ASCEND
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-granite text-xs uppercase tracking-widest absolute bottom-12"
              >
                TAP ANYWHERE TO CLOSE
              </motion.p>
            </div>

            <div 
              className="absolute inset-0 z-0"
              onClick={() => setMobileMenuOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}