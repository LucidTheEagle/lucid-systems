"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// INTERFERENCE TEXT - Block characters
const InterferenceText = ({ 
  children, 
  delay = 0 
}: { 
  children: string; 
  delay?: number;
}) => {
  const [text, setText] = useState(children);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const blockChars = "█▓▒░▖▗▘▙▚▛█▓▒░";

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setText(
          children
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) return children[index];
              return blockChars[Math.floor(Math.random() * blockChars.length)];
            })
            .join("")
        );
        
        iteration += 0.5;
        if (iteration >= children.length) {
          clearInterval(interval);
          setText(children);
        }
      }, 60);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, children, delay]);

  return <span ref={ref} className="text-lucid">{text}</span>;
};

// SCRAMBLE TEXT EFFECT for Closing Statement
const ScrambleText = ({ 
  children, 
  delay = 0 
}: { 
  children: string; 
  delay?: number;
}) => {
  const [text, setText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let iteration = 0;
      const interval = setInterval(() => {
        setText(
          children
            .split("")
            .map((char, index) => {
              if (char === " " || char === ".") return char;
              if (index < iteration) return children[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
        
        iteration += 1;
        if (iteration >= children.length) {
          clearInterval(interval);
          setText(children);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, children, delay]);

  return <span ref={ref}>{text}</span>;
};

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const noiseOpacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 0]);
  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  return (
    <div ref={containerRef} className="relative">
      <section 
        id="problem" 
        className="relative w-full py-32 md:py-48 overflow-hidden bg-gradient-to-b from-obsidian via-[#0a0a0a] to-obsidian"
      >
        {/* STATIC NOISE OVERLAY */}
        <motion.div 
          style={{ opacity: noiseOpacity }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <div 
            className="w-full h-full opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px"
            }}
          />
        </motion.div>

        {/* SCANLINES */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.08] z-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.05) 2px,
              rgba(255,255,255,0.05) 4px
            )`,
            animation: "scanlines 8s linear infinite"
          }}
        />

        <div className="relative z-30 max-w-5xl mx-auto px-6">
          
          {/* SYSTEM CRITICAL ALERT - BREATHING GLOW (No Scale) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: premiumEase }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-12"
          >
            {/* Breathing Glow Effect (Opacity pulse on drop-shadow) */}
            <motion.div
              animate={{ 
                opacity: [0.3, 1, 0.3],
                filter: [
                  "drop-shadow(0 0 4px rgba(239, 68, 68, 0.3))",
                  "drop-shadow(0 0 12px rgba(239, 68, 68, 1))",
                  "drop-shadow(0 0 4px rgba(239, 68, 68, 0.3))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-red-500 rounded-full"
            />
            <p className="text-modern text-red-500/80 text-xs uppercase tracking-[0.3em] font-medium">
              System Critical: Signal Degradation Detected
            </p>
          </motion.div>

          {/* HEADLINE - Interference effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] leading-tight">
              <InterferenceText delay={0}>
                CHAOS
              </InterferenceText>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-alabaster"
              >
                IS THE DEFAULT STATE.
              </motion.span>
            </h2>
          </motion.div>

          {/* GRID LAYOUT - Symptoms + Declaration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            
            {/* LEFT: THE SYMPTOMS */}
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, borderLeftWidth: 0 }}
                whileInView={{ opacity: 1, borderLeftWidth: 4 }}
                transition={{ duration: 0.6, delay: 2.0, ease: premiumEase }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-granite/20"
              >
                <h3 className="text-lucid text-modern text-xs uppercase tracking-[0.3em] mb-3 font-medium">
                  ERROR_LOG_01: VOLUME
                </h3>
                <p className="text-modern text-base md:text-lg text-granite leading-relaxed">
                  High-volume operations drown in unstructured noise.{" "}
                  <InterferenceText delay={2500}>
                    PDFs pile up.
                  </InterferenceText>{" "}
                  <InterferenceText delay={3000}>
                    Inboxes overflow.
                  </InterferenceText>{" "}
                  <InterferenceText delay={3500}>
                    Leads go unqualified.
                  </InterferenceText>{" "}
                  <span className="text-alabaster">Every manual click is a micro-fracture in your revenue.</span>
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, borderLeftWidth: 0 }}
                whileInView={{ opacity: 1, borderLeftWidth: 4 }}
                transition={{ duration: 0.6, delay: 2.3, ease: premiumEase }}
                viewport={{ once: true }}
                className="pl-6 border-l-4 border-granite/20"
              >
                <h3 className="text-lucid text-modern text-xs uppercase tracking-[0.3em] mb-3 font-medium">
                  ERROR_LOG_02: SCALING
                </h3>
                <p className="text-modern text-base md:text-lg text-granite leading-relaxed">
                  Most businesses build processes that scale linearly. When volume doubles, they double headcount. 
                  When complexity increases, they add more tools.{" "}
                  <span className="text-alabaster">The result is chaos wrapped in expensive payroll.</span>
                </p>
              </motion.div>
            </div>

            {/* RIGHT: THE DECLARATION */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.6, ease: premiumEase }}
                viewport={{ once: true }}
                className="bg-basalt border border-white/10 p-8 md:p-10 relative overflow-hidden"
              >
                {/* Icon decoration - BREATHING GLOW */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-10"
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    filter: [
                      "drop-shadow(0 0 4px rgba(0,240,255,0.2))",
                      "drop-shadow(0 0 12px rgba(0,240,255,0.6))",
                      "drop-shadow(0 0 4px rgba(0,240,255,0.2))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-lucid">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </motion.div>

                <p className="text-modern text-lg md:text-xl leading-relaxed text-alabaster relative z-10">
                  I do not sell hours. I do not build templates.
                  <br /><br />
                  <span className="text-lucid font-bold">
                    I build the intelligence layer that eats the chaos.
                  </span>
                </p>
                
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px bg-white/10 grow" />
                  <p className="text-xs text-granite uppercase tracking-widest">Lucid Protocol</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* DIVIDER */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 3.0, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-lucid/40 to-transparent mx-auto mb-16"
          />

          {/* CLOSING STATEMENT - SCRAMBLE TEXT EFFECT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.3, ease: premiumEase }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glitch overlay */}
            <motion.div
              initial={{ opacity: 0.8, x: -4 }}
              whileInView={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.3, delay: 3.3 }}
              viewport={{ once: true }}
              className="absolute inset-0 text-ancient text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.2em] text-lucid/30 blur-sm"
            >
              The fog lifts when systems think.
            </motion.div>

            {/* Main text - SCRAMBLE EFFECT */}
            <h3 className="relative text-ancient text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.2em] text-lucid text-left border-l-4 border-lucid pl-6">
              <ScrambleText delay={3500}>
                The fog lifts when systems think.
              </ScrambleText>
            </h3>

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block w-2 h-8 md:h-10 bg-lucid ml-2 align-middle"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}