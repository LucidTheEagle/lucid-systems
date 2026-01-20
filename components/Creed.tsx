"use client";
import React, { useState, useEffect } from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export function Creed() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  // Simplified text for mobile (no word-by-word animation)
  const manifestoText = "I provide clarity where there is blur, fog, and smoke.";
  const emphasisText1 = "I do not post to be seen. I post to declare vision.";
  const normalText = "Every project I build is proof of clarity.";
  const emphasisText2 = "My system is my signature.";
  const signature = "— Lucid the Eagle —";

  return (
    <section 
      id="creed"
      className="relative w-full min-h-screen bg-obsidian flex flex-col items-center justify-center overflow-hidden py-20 md:py-32"
      aria-label="The Lucid Creed"
    >
      {/* Starfield Background - Disabled on mobile for performance */}
      {mounted && !isMobile && (
        <div className="w-full absolute inset-0 h-full">
          <SparklesCore
            id="creed-starfield"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#e5e5e5"
            speed={0.3}
          />
        </div>
      )}

      {/* Mobile: Simple gradient background instead of particles */}
      {mounted && isMobile && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-basalt/20 to-transparent" />
      )}

      {/* TRENDING UP VISUAL */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.08 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute inset-0 flex items-center justify-center z-10"
        aria-hidden="true"
      >
        <TrendingUp className="w-[60%] h-[60%] text-lucid opacity-25" strokeWidth={0.5} />
      </motion.div>
      
      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        
        {/* Main Headlines */}
        <header className="space-y-4 mb-12 md:mb-16">
          {/* VISION CLEAR */}
          <motion.h1 
            initial={{ opacity: 0, y: 30, color: "#737373" }}
            whileInView={{ opacity: 1, y: 0, color: "#E5E5E5" }}
            transition={{ duration: isMobile ? 0.8 : 1.2, ease: premiumEase }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: 'opacity, transform' }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase"
          >
            Vision Clear.
          </motion.h1>
          
          {/* PURPOSE STRONG */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: isMobile ? 0.6 : 1, delay: 0.3, ease: premiumEase }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: 'opacity, transform' }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase text-lucid"
          >
            Purpose Strong.
          </motion.h1>
        </header>

        {/* Manifesto Text - OPTIMIZED: Single animation on mobile, word-by-word on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto mb-12"
        >
          {mounted && isMobile ? (
            // Mobile: Simple fade-in (no word-by-word)
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-modern text-base md:text-lg leading-relaxed"
            >
              <span className="text-granite">{manifestoText} </span>
              <span className="text-alabaster">{emphasisText1} </span>
              <span className="text-granite">{normalText} </span>
              <span className="text-lucid">{emphasisText2}</span>
            </motion.p>
          ) : (
            // Desktop: Word-by-word animation
            <p className="text-modern text-base md:text-lg leading-relaxed">
              {manifestoText.split(" ").map((word, i) => (
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
              {emphasisText1.split(" ").map((word, i) => (
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
              {normalText.split(" ").map((word, i) => (
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
              {emphasisText2.split(" ").map((word, i) => (
                <motion.span
                  key={`emphasis2-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.1, delay: 2.2 + i * 0.05 }}
                  viewport={{ once: true }}
                  className="text-lucid"
                >
                  {word}{i < emphasisText2.split(" ").length - 1 ? " " : ""}
                </motion.span>
              ))}
            </p>
          )}
        </motion.div>
         
        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: isMobile ? 1 : 1.5, delay: isMobile ? 1.5 : 2.5, ease: "easeInOut" }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: 'transform' }}
          className="h-px bg-gradient-to-r from-transparent via-lucid to-transparent mx-auto max-w-2xl opacity-40"
          role="separator"
          aria-hidden="true"
        />

        {/* Eagle Signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: isMobile ? 1.8 : 3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 font-mono"
        >
          {mounted && isMobile ? (
            // Mobile: Instant display with cursor
            <div className="text-granite text-xs md:text-sm uppercase tracking-[0.2em] inline-flex items-center">
              <span>{signature}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                className="ml-1 text-lucid"
              >
                _
              </motion.span>
            </div>
          ) : (
            // Desktop: Typing effect
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
          )}
        </motion.div>
      </div>

      {/* Radial Gradient Mask */}
      <div className="absolute inset-0 w-full h-full bg-obsidian mask-[radial-gradient(ellipse_90%_70%_at_50%_50%,transparent_20%,black)]" aria-hidden="true" />
    </section>
  );
}