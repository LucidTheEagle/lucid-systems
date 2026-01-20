"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  // Initialize with server-safe defaults
  const [isMobile, setIsMobile] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // This runs only on the client after hydration
    setHasHydrated(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    checkMobile();
    
    // Debounced resize handler for performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* SPOTLIGHT - Disabled on mobile for performance */}
      {hasHydrated && !isMobile && (
        <>
          <Spotlight 
            className="-top-40 left-0 md:left-60 md:-top-20" 
            fill="white" 
          />
          <Spotlight 
            className="-top-40 right-0 md:right-60 md:-top-20" 
            fill="rgba(0, 240, 255, 0.5)" 
          />
        </>
      )}
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        
        {/* Main Headline - PREMIUM PHYSICS */}
        <div className="mb-8 md:mb-12">
          {hasHydrated ? (
            <TextGenerateEffect
              words="YOU ARE BUILDING IN THE FOG."
              className="text-ancient text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest text-alabaster"
              filter={!isMobile}
              duration={isMobile ? 0.4 : 0.8}
            />
          ) : (
            // SSR fallback - instant display, prevents CLS
            <h1 className="text-ancient text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest text-alabaster">
              YOU ARE BUILDING IN THE FOG.
            </h1>
          )}
        </div>

        {/* Subheadline - Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: isMobile ? 1.5 : 2.5, 
            duration: 0.5, 
            ease: premiumEase 
          }}
          className="mb-12 md:mb-16 flex justify-center"
        >
          {hasHydrated ? (
            <TypewriterEffectSmooth
              words={[
                { text: "> SYSTEM_STATUS:", className: "text-granite text-sm md:text-xl" },
                { text: " CLARITY_REQUIRED", className: "text-lucid text-sm md:text-xl" },
              ]}
              className="text-sm md:text-xl font-mono"
              cursorClassName="bg-lucid"
            />
          ) : (
            <p className="text-sm md:text-xl font-mono">
              <span className="text-granite">&gt; SYSTEM_STATUS:</span>
              <span className="text-lucid"> CLARITY_REQUIRED</span>
            </p>
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: isMobile ? 2.0 : 3.5, 
            duration: 0.8, 
            ease: premiumEase 
          }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
            className="group relative inline-flex h-16 items-center justify-center overflow-hidden bg-basalt px-10 font-medium text-neutral-200 transition-all duration-500 hover:w-80 hover:bg-white/5 border border-white/10 hover:border-lucid/50 touch-manipulation"
            aria-label="Schedule strategy call"
          >
            {/* Background Glow - Only on hover (desktop) */}
            <div className="absolute inset-0 hidden md:flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:transform-[skew(-12deg)_translateX(100%)] transition-transform duration-500">
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