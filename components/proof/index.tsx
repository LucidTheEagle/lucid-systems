"use client";
import React, { useRef, useState, memo, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy load simulations with loading placeholders
const PrismSimulation = dynamic(() => import("./Prism"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-basalt animate-pulse flex items-center justify-center">
      <div className="text-granite text-xs font-mono">Loading Prism...</div>
    </div>
  )
});

const SentrySimulation = dynamic(() => import("./Sentry"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-basalt animate-pulse flex items-center justify-center">
      <div className="text-granite text-xs font-mono">Loading Sentry...</div>
    </div>
  )
});

const OverwatchSimulation = dynamic(() => import("./Overwatch"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-basalt animate-pulse flex items-center justify-center">
      <div className="text-granite text-xs font-mono">Loading Overwatch...</div>
    </div>
  )
});

export default function Proof() {
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

  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  return (
    <section 
      id="proof" 
      className="relative w-full bg-obsidian py-24 md:py-48 overflow-hidden"
      aria-labelledby="proof-heading"
    >
      {/* Background Texture - Disabled on mobile */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
            transform: 'translateZ(0)'
          }}
          aria-hidden="true"
        />
      )}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,rgba(0,0,0,0)_60%)]"
        style={{ transform: 'translateZ(0)' }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 md:space-y-48">
        
        {/* SYSTEM BOOT HEADLINE */}
        <SystemBootHeadline premiumEase={premiumEase} isMobile={isMobile} />

        <ShowcaseContainer 
          number="01" 
          title="The Prism" 
          subtitle="Intelligent Data Fracturing" 
          align="left"
          premiumEase={premiumEase}
        >
          <PrismSimulation />
        </ShowcaseContainer>

        <ShowcaseContainer 
          number="02" 
          title="The Sentry" 
          subtitle="Autonomous Triage Engine" 
          align="right"
          premiumEase={premiumEase}
        >
          <SentrySimulation />
        </ShowcaseContainer>

        <ShowcaseContainer 
          number="03" 
          title="The Overwatch" 
          subtitle="Predictive Strategy Core" 
          align="left"
          premiumEase={premiumEase}
        >
          <OverwatchSimulation />
        </ShowcaseContainer>

      </div>
    </section>
  );
}

// MEMOIZED HEADLINE TO PREVENT RERENDERS
const SystemBootHeadline = memo(function SystemBootHeadline({ 
  premiumEase, 
  isMobile 
}: { 
  premiumEase: [number, number, number, number];
  isMobile: boolean;
}) {
  const [bootStage, setBootStage] = useState(0);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const delays = isMobile ? [300, 800, 1200] : [500, 1200, 2000];
    
    timers.push(setTimeout(() => setBootStage(1), delays[0]));
    timers.push(setTimeout(() => setBootStage(2), delays[1]));
    timers.push(setTimeout(() => setBootStage(3), delays[2]));
    
    return () => timers.forEach(clearTimeout);
  }, [isMobile]);

  return (
    <header 
      className="text-center mb-20 md:mb-32 min-h-[200px] flex flex-col items-center justify-center"
      id="proof-heading"
    >
      {/* BOOT SEQUENCE */}
      <div className="mb-8 space-y-2 font-mono text-xs text-lucid/60 h-16">
        {bootStage >= 1 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            style={{ willChange: 'opacity' }}
            className="tracking-widest"
          >
            [SYSTEM_INIT]
          </motion.div>
        )}
        {bootStage >= 2 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            style={{ willChange: 'opacity' }}
            className="tracking-widest"
          >
            &gt; LOADING_PROOF_LAYER...
          </motion.div>
        )}
        {bootStage >= 3 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            style={{ willChange: 'opacity' }}
            className="tracking-widest text-emerald-400/80"
          >
            &gt; SYSTEMS_ONLINE
          </motion.div>
        )}
      </div>

      {/* MAIN HEADLINE */}
      {bootStage >= 3 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
          style={{ willChange: 'opacity, transform' }}
        >
          <h2 className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-alabaster mb-4">
            Systems in Production.
          </h2>
          <p className="text-modern text-granite text-xs md:text-sm tracking-[0.3em] uppercase">
            Deployed intelligence. Real interfaces. Zero vaporware.
          </p>
        </motion.div>
      )}
    </header>
  );
});

function ShowcaseContainer({ 
  number, 
  title, 
  subtitle, 
  children, 
  align,
  premiumEase 
}: {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  align: "left" | "right";
  premiumEase: [number, number, number, number];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <article 
      ref={ref} 
      className={`flex flex-col ${align === "right" ? "md:items-end" : "md:items-start"} gap-8`}
    >
      
      {/* HEADER */}
      <div className={`flex flex-col ${align === "right" ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lucid font-mono text-sm tracking-widest">[{number}]</span>
          <div className="h-px w-12 bg-lucid/50" aria-hidden="true" />
        </div>
        <h3 className="text-ancient text-2xl md:text-4xl lg:text-5xl text-alabaster uppercase tracking-wide mb-2">
          {title}
        </h3>
        <p className="text-granite font-mono text-xs tracking-[0.2em] uppercase">
          {subtitle}
        </p>
      </div>

      {/* HUD CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: premiumEase }}
        style={{ willChange: 'opacity, transform' }}
        className="w-full h-[350px] md:h-[550px] bg-basalt border border-white/10 overflow-hidden relative group rounded-sm"
      >
        {/* TERMINAL HEADER */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between z-30 select-none backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="flex gap-1" aria-hidden="true">
              <div className="w-1 h-1 bg-lucid/50 rounded-full" />
              <div className="w-1 h-1 bg-lucid/30 rounded-full" />
            </div>
            <span className="text-[10px] text-lucid/80 font-mono tracking-widest uppercase hidden sm:inline-block">
              SYS_ID: {title.toUpperCase().replace(" ", "_")}
            </span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-[8px] text-emerald-400 font-mono uppercase tracking-wider">
              ONLINE
            </div>
            <div 
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"
              aria-label="System online indicator"
            />
          </div>
        </div>
        
        {/* CONTENT */}
        <div className="pt-8 h-full w-full relative bg-obsidian/50">{children}</div>
        
        {/* HOVER BORDER GLOW - Desktop only */}
        <div 
          className="absolute inset-0 pointer-events-none border border-lucid/0 hover:border-lucid/20 transition-all duration-500 hidden md:block"
          aria-hidden="true"
        />
      </motion.div>
    </article>
  );
}