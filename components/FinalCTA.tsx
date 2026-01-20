"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

export default function FinalCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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

  return (
    <section 
      className="relative w-full py-32 md:py-48 bg-obsidian overflow-hidden flex flex-col items-center justify-center border-t border-white/5"
      aria-labelledby="cta-heading"
    >
      
      {/* Background Ambience */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,rgba(0,0,0,0)_50%)]"
        style={{ transform: 'translateZ(0)' }}
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"
        style={{ transform: 'translateZ(0)' }}
        aria-hidden="true"
      />

      {/* SCANLINES - Disabled on mobile */}
      {!isMobile && (
        <div 
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.05) 2px,
              rgba(255,255,255,0.05) 4px
            )`,
            transform: 'translateZ(0)',
          }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* ICON - Breathing glow disabled on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: premiumEase }}
          style={{ willChange: 'opacity, transform' }}
          className="mx-auto mb-8"
        >
          <motion.div
            className="w-16 h-16 bg-basalt border border-lucid flex items-center justify-center mx-auto"
            animate={!isMobile ? {
              boxShadow: [
                "0 0 15px rgba(0,240,255,0.2)",
                "0 0 30px rgba(0,240,255,0.4)",
                "0 0 15px rgba(0,240,255,0.2)"
              ]
            } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: !isMobile ? 'box-shadow' : 'auto' }}
            aria-hidden="true"
          >
            <Terminal className="w-8 h-8 text-lucid" />
          </motion.div>
        </motion.div>

        {/* HEADLINE */}
        <motion.h2 
          id="cta-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8, ease: premiumEase }}
          style={{ willChange: 'opacity, transform' }}
          className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-alabaster mb-6"
        >
          Ready to <span className="text-lucid">Enforce Order</span>?
        </motion.h2>

        {/* SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: premiumEase }}
          style={{ willChange: 'opacity, transform' }}
          className="text-modern text-granite text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I don&apos;t build features. I build systems that remove chaos from high-volume operations. 
          <span className="text-alabaster block mt-2">If your team is drowning in manual work, we need to talk.</span>
        </motion.p>

        {/* BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.8, ease: premiumEase }}
          style={{ willChange: 'opacity, transform' }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* PRIMARY CTA */}
          <a 
            href="https://cal.com/lucid-theeagle-ebabkz/system-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-lucid text-obsidian font-bold text-lg tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-3 border border-lucid hover:border-white touch-manipulation"
            aria-label="Schedule strategy call"
          >
            <span className="uppercase tracking-widest">Initiate Deployment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            
            {/* EXPANDING BORDER EFFECT - Desktop only */}
            <div 
              className="absolute inset-0 border border-white/20 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none hidden md:block"
              aria-hidden="true"
            />
          </a>

          {/* SECONDARY CTA */}
          <a 
            href="#systems"
            className="text-granite hover:text-alabaster font-mono text-sm tracking-widest uppercase border-b border-transparent hover:border-lucid transition-all duration-300 pb-1"
          >
            Review System Architecture
          </a>
        </motion.div>

        {/* TERMINAL PROMPT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ willChange: 'opacity' }}
          className="mt-16 text-center"
        >
          <p className="text-lucid/60 font-mono text-xs uppercase tracking-[0.3em]">
            &gt; DEPLOYMENT_PROTOCOL_ACTIVE
          </p>
        </motion.div>

      </div>
    </section>
  );
}