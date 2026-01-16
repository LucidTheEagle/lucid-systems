"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

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

  // Premium cubic-bezier easing
  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  // Word-by-word animation for manifesto
  const manifestoText = "I provide clarity where there is blur, fog, and smoke.";
  const manifestoWords = manifestoText.split(" ");

  const emphasisText1 = "I do not post to be seen. I post to declare vision.";
  const emphasisWords1 = emphasisText1.split(" ");

  const normalText = "Every project I build is proof of clarity.";
  const normalWords = normalText.split(" ");

  const emphasisText2 = "My system is my signature.";
  const emphasisWords2 = emphasisText2.split(" ");

  // Terminal signature with cursor
  const signature = "— Lucid the Eagle —";

  return (
    <section 
      id="creed"
      className="relative w-full min-h-screen bg-obsidian flex flex-col items-center justify-center overflow-hidden py-20 md:py-32"
    >
      {/* Starfield Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="creed-starfield"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={isMobile ? 30 : 60}
          className="w-full h-full"
          particleColor="#e5e5e5"
          speed={0.3}
        />
      </div>

      {/* TRENDING UP VISUAL - Subtle Background Graph */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <TrendingUp className="w-[60%] h-[60%] text-lucid opacity-25" strokeWidth={0.5} />
      </motion.div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        
        {/* Main Headlines */}
        <div className="space-y-4 mb-12 md:mb-16">
          {/* VISION CLEAR - Gray to White Fade */}
          <motion.h1 
            initial={{ opacity: 0, y: 30, color: "#737373" }}
            whileInView={{ opacity: 1, y: 0, color: "#E5E5E5" }}
            transition={{ duration: 1.2, ease: premiumEase }}
            viewport={{ once: true }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase"
          >
            Vision Clear.
          </motion.h1>
          
          {/* PURPOSE STRONG - Scale Outward (Power Projection) */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: premiumEase }}
            viewport={{ once: true }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase text-lucid"
          >
            Purpose Strong.
          </motion.h1>
        </div>

        {/* Manifesto Text - WORD-BY-WORD TYPING */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-modern text-base md:text-lg leading-relaxed">
            {/* First sentence - Normal */}
            {manifestoWords.map((word, i) => (
              <motion.span
                key={`normal-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.8 + i * 0.05 }}
                viewport={{ once: true }}
                className="text-granite"
              >
                {word}{" "}
              </motion.span>
            ))}

            {/* Emphasis 1 - Alabaster */}
            {emphasisWords1.map((word, i) => (
              <motion.span
                key={`emphasis1-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 1.2 + i * 0.05 }}
                viewport={{ once: true }}
                className="text-alabaster"
              >
                {word}{" "}
              </motion.span>
            ))}

            {/* Normal text */}
            {normalWords.map((word, i) => (
              <motion.span
                key={`normal2-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 1.8 + i * 0.05 }}
                viewport={{ once: true }}
                className="text-granite"
              >
                {word}{" "}
              </motion.span>
            ))}

            {/* Emphasis 2 - Cyan */}
            {emphasisWords2.map((word, i) => (
              <motion.span
                key={`emphasis2-${i}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 2.2 + i * 0.05 }}
                viewport={{ once: true }}
                className="text-lucid"
              >
                {word}{i < emphasisWords2.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </p>
        </motion.div>
         
        {/* Divider Line - HORIZONTAL STRETCH (easeInOut) */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-lucid to-transparent mx-auto max-w-2xl opacity-40"
        />

        {/* Eagle Signature - TERMINAL TYPING WITH CURSOR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3 }}
          viewport={{ once: true }}
          className="mt-12 font-mono"
        >
          <div className="text-granite text-xs md:text-sm uppercase tracking-[0.2em] inline-flex items-center">
            {signature.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 3.2 + i * 0.05 }}
                viewport={{ once: true }}
              >
                {char}
              </motion.span>
            ))}
            {/* Blinking Cursor */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                delay: 3.2 + signature.length * 0.05 
              }}
              className="ml-1 text-lucid"
            >
              _
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Radial Gradient Mask */}
      <div className="absolute inset-0 w-full h-full bg-obsidian mask-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_20%,black)]" />
    </section>
  );
}