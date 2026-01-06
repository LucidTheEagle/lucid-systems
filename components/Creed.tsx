"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Creed() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToNext = () => {
    const problemSection = document.getElementById("problem");
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="creed"
      className="relative w-full min-h-screen bg-obsidian flex flex-col items-center justify-center overflow-hidden py-20 md:py-32"
    >
      {/* Starfield Background - CONDITIONAL DENSITY */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="creed-starfield"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={isMobile ? 30 : 60} // 30 on mobile, 60 on desktop
          className="w-full h-full"
          particleColor="#e5e5e5" // Alabaster (white stars, not cyan)
          speed={0.3} // Slower = more serene
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        
        {/* Main Headlines */}
        <div className="space-y-4 mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase text-alabaster"
          >
            Vision Clear.
          </motion.h1>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase text-lucid"
          >
            Purpose Strong.
          </motion.h1>
        </div>

        {/* Manifesto Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-modern text-granite text-base md:text-lg leading-relaxed">
            I provide clarity where there is blur, fog, and smoke.{" "}
            <span className="text-alabaster">I do not post to be seen. I post to declare vision.</span>{" "}
            Every project I build is proof of clarity.{" "}
            <span className="text-lucid">My system is my signature.</span>
          </p>
        </motion.div>
         
        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-lucid to-transparent mx-auto max-w-2xl opacity-40"
        />

        {/* Eagle Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-modern text-granite text-xs md:text-sm uppercase tracking-[0.2em]">
            — Lucid the Eagle —
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-granite hover:text-lucid transition-colors cursor-pointer z-20"
        whileHover={{ y: 5 }}
      >
        <ChevronDown size={24} />
      </motion.button>

      {/* Radial Gradient Mask - SOFTER FADE */}
      <div className="absolute inset-0 w-full h-full bg-obsidian [mask-image:radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_20%,black)]" />
    </section>
  );
}