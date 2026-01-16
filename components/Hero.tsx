"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Premium cubic-bezier easing
  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* DUAL SPOTLIGHT BEAMS */}
      <Spotlight 
        className="-top-40 left-0 md:left-60 md:-top-20" 
        fill="white" 
      />
      <Spotlight 
        className="-top-40 right-0 md:right-60 md:-top-20" 
        fill="rgba(0, 240, 255, 0.5)" 
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        
        {/* Main Headline - PREMIUM PHYSICS */}
        <div className="mb-8 md:mb-12">
          <TextGenerateEffect
            words="YOU ARE BUILDING IN THE FOG."
            className="text-ancient text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest text-alabaster"
            filter={true}
            duration={0.8}
          />
        </div>

        {/* Subheadline - Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5, ease: premiumEase }}
          className="mb-12 md:mb-16 flex justify-center"
        >
          <TypewriterEffectSmooth
            words={[
              { text: "> SYSTEM_STATUS:", className: "text-granite text-sm md:text-xl" },
              { text: " CLARITY_REQUIRED", className: "text-lucid text-sm md:text-xl" },
            ]}
            className="text-sm md:text-xl font-mono"
            cursorClassName="bg-lucid"
          />
        </motion.div>

        {/* THE ASCENT CTA - PREMIUM WEIGHTY ENTRANCE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8, ease: premiumEase }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
            className="group relative inline-flex h-16 items-center justify-center overflow-hidden bg-basalt px-10 font-medium text-neutral-200 transition-all duration-500 hover:w-80 hover:bg-white/5 border border-white/10 hover:border-lucid/50"
          >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>

            <div className="flex flex-col items-center justify-center z-10">
               <span className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-alabaster group-hover:text-lucid transition-colors flex items-center gap-2">
                  INITIATE ASCENT
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
               </span>
               <span className="text-[10px] uppercase tracking-widest text-granite mt-1 group-hover:text-white/60 transition-colors">
                  Strategy • Design • Systems
               </span>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}