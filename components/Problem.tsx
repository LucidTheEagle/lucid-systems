"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// OPTIMIZED INTERFERENCE TEXT
const InterferenceText = ({ 
  children, 
  delay = 0,
  skipOnMobile = false
}: { 
  children: string; 
  delay?: number;
  skipOnMobile?: boolean;
}) => {
  // Initialize with children directly
  const [text, setText] = useState(children);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const blockChars = "█▓▒░";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
  }, []);

  useEffect(() => {
    // Don't run effect if we should skip
    if (!isInView || (skipOnMobile && isMobile)) {
      return; // Text is already initialized to children
    }

    const timeout = setTimeout(() => {
      let iteration = 0;
      const targetIterations = isMobile ? children.length * 0.3 : children.length;
      
      const interval = setInterval(() => {
        if (iteration >= targetIterations) {
          clearInterval(interval);
          setText(children);
          return;
        }

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
        
        iteration += isMobile ? 2 : 0.5;
      }, isMobile ? 40 : 60);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, children, delay, isMobile, skipOnMobile]);

  return <span ref={ref} className="text-lucid" style={{ willChange: 'contents' }}>{text}</span>;
};

// PRODUCTION-READY SCRAMBLE TEXT - Guaranteed Visibility
const ScrambleText = ({ 
  children, 
  delay = 0 
}: { 
  children: string; 
  delay?: number;
}) => {
  // Start with actual text
  const [text, setText] = useState(children);
  const [isMobile, setIsMobile] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
  }, []);

  useEffect(() => {
    if (!isInView || hasStarted) return;

    // On mobile, skip animation entirely - just mark as started
    if (isMobile) {
      setHasStarted(true);
      return; // Text is already initialized to children
    }

    const timeout = setTimeout(() => {
      setHasStarted(true);
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
  }, [isInView, children, delay, isMobile, hasStarted]);

  return <span ref={ref} style={{ willChange: 'contents' }}>{text}</span>;
};

export default function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const noiseOpacity = useTransform(
    scrollYProgress, 
    [0, 0.6], 
    isMobile ? [0, 0] : [0.4, 0]
  );
  
  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  return (
    <div ref={containerRef} className="relative">
      <section 
        id="problem" 
        className="relative w-full py-32 md:py-48 overflow-hidden bg-gradient-to-b from-obsidian via-[#0a0a0a] to-obsidian"
        aria-labelledby="problem-heading"
      >
        {/* NOISE OVERLAY - Desktop only */}
        {!isMobile && (
          <motion.div 
            style={{ opacity: noiseOpacity, willChange: 'opacity' }}
            className="absolute inset-0 pointer-events-none z-20"
            aria-hidden="true"
          >
            <div 
              className="w-full h-full opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
                transform: 'translateZ(0)',
              }}
            />
          </motion.div>
        )}

        {/* SCANLINES */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.08] z-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)`,
            animation: isMobile ? 'none' : 'scanlines 8s linear infinite',
            transform: 'translateZ(0)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-30 max-w-5xl mx-auto px-6">
          
          {/* SYSTEM CRITICAL ALERT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: 'opacity, transform' }}
            className="flex items-center gap-3 mb-12"
            role="alert"
            aria-live="polite"
          >
            <motion.div
              animate={{ 
                opacity: isMobile ? [0.5, 0.5] : [0.3, 1, 0.3],
                filter: isMobile 
                  ? ["drop-shadow(0 0 6px rgba(239, 68, 68, 0.5))"]
                  : [
                      "drop-shadow(0 0 4px rgba(239, 68, 68, 0.3))",
                      "drop-shadow(0 0 12px rgba(239, 68, 68, 1))",
                      "drop-shadow(0 0 4px rgba(239, 68, 68, 0.3))"
                    ]
              }}
              transition={{ duration: 2, repeat: isMobile ? 0 : Infinity, ease: "easeInOut" }}
              style={{ willChange: isMobile ? 'auto' : 'opacity, filter' }}
              className="w-2 h-2 bg-red-500 rounded-full"
              aria-hidden="true"
            />
            <p className="text-modern text-red-500/80 text-xs uppercase tracking-[0.3em] font-medium">
              System Critical: Signal Degradation Detected
            </p>
          </motion.div>

          {/* HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: 'opacity, transform' }}
            className="mb-20"
          >
            <h2 
              id="problem-heading"
              className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] leading-tight"
            >
              <InterferenceText delay={0}>
                CHAOS
              </InterferenceText>{" "}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ willChange: 'opacity' }}
                className="text-alabaster"
              >
                IS THE DEFAULT STATE.
              </motion.span>
            </h2>
          </motion.div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            
            {/* LEFT: THE SYMPTOMS */}
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, borderLeftWidth: 0 }}
                whileInView={{ opacity: 1, borderLeftWidth: 4 }}
                transition={{ duration: 0.6, delay: isMobile ? 1.5 : 2.0, ease: premiumEase }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ willChange: 'opacity, border-left-width' }}
                className="pl-6 border-l-4 border-granite/20"
              >
                <h3 className="text-lucid text-modern text-xs uppercase tracking-[0.3em] mb-3 font-medium">
                  ERROR_LOG_01: VOLUME
                </h3>
                <p className="text-modern text-base md:text-lg text-granite leading-relaxed">
                  High-volume operations drown in unstructured noise.{" "}
                  <InterferenceText delay={isMobile ? 2000 : 2500} skipOnMobile={true}>
                    PDFs pile up.
                  </InterferenceText>{" "}
                  <InterferenceText delay={isMobile ? 2200 : 3000} skipOnMobile={true}>
                    Inboxes overflow.
                  </InterferenceText>{" "}
                  <InterferenceText delay={isMobile ? 2400 : 3500} skipOnMobile={true}>
                    Leads go unqualified.
                  </InterferenceText>{" "}
                  <span className="text-alabaster">Every manual click is a micro-fracture in your revenue.</span>
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, borderLeftWidth: 0 }}
                whileInView={{ opacity: 1, borderLeftWidth: 4 }}
                transition={{ duration: 0.6, delay: isMobile ? 1.8 : 2.3, ease: premiumEase }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ willChange: 'opacity, border-left-width' }}
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
                transition={{ duration: 0.8, delay: isMobile ? 2.0 : 2.6, ease: premiumEase }}
                viewport={{ once: true, margin: "-100px" }}
                style={{ willChange: 'opacity, transform' }}
                className="bg-basalt border border-white/10 p-8 md:p-10 relative overflow-hidden"
              >
                {/* RESPONSIVE ICON - Mobile: 24px, Tablet: 32px, Desktop: 40px */}
                <motion.div 
                  className="absolute top-4 right-4 opacity-10"
                  animate={{ 
                    opacity: isMobile ? [0.15, 0.15] : [0.1, 0.3, 0.1],
                    filter: isMobile
                      ? ["drop-shadow(0 0 6px rgba(0,240,255,0.3))"]
                      : [
                          "drop-shadow(0 0 4px rgba(0,240,255,0.2))",
                          "drop-shadow(0 0 12px rgba(0,240,255,0.6))",
                          "drop-shadow(0 0 4px rgba(0,240,255,0.2))"
                        ]
                  }}
                  transition={{ duration: 3, repeat: isMobile ? 0 : Infinity, ease: "easeInOut" }}
                  style={{ willChange: isMobile ? 'auto' : 'opacity, filter' }}
                  aria-hidden="true"
                >
                  <svg 
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-lucid" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </motion.div>

                <p className="text-modern text-base sm:text-lg md:text-xl leading-relaxed text-alabaster relative z-10">
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
            transition={{ duration: isMobile ? 1 : 1.5, delay: isMobile ? 2.2 : 3.0, ease: "easeInOut" }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: 'transform' }}
            className="h-px bg-gradient-to-r from-transparent via-lucid/40 to-transparent mx-auto mb-16"
            role="separator"
            aria-hidden="true"
          />

          {/* CLOSING STATEMENT - PRODUCTION READY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: isMobile ? 2.5 : 3.3, ease: premiumEase }}
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: 'opacity, transform' }}
            className="relative"
          >
            {/* Glitch overlay - Desktop only */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0.8, x: -4 }}
                whileInView={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.3, delay: 3.3 }}
                viewport={{ once: true }}
                style={{ willChange: 'opacity, transform' }}
                className="absolute inset-0 text-ancient text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[0.2em] text-lucid/30 blur-sm pointer-events-none select-none"
                aria-hidden="true"
              >
                The fog lifts when systems think.
              </motion.div>
            )}

            {/* Main text - GUARANTEED VISIBILITY */}
            <h3 className="relative text-ancient text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-lucid text-left border-l-4 border-lucid pl-4 md:pl-6 leading-tight">
              <ScrambleText delay={isMobile ? 2700 : 3500}>
                The fog lifts when systems think.
              </ScrambleText>
            </h3>

            {/* Blinking cursor */}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ willChange: 'opacity' }}
              className="inline-block w-1.5 md:w-2 h-7 md:h-9 lg:h-11 bg-lucid ml-2 align-middle"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}