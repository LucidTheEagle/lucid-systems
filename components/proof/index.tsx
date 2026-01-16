"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

// DISABLE SSR FOR SIMULATIONS (Hydration-safe, client-only)
const PrismSimulation = dynamic(() => import("./Prism"), { ssr: false });
const SentrySimulation = dynamic(() => import("./Sentry"), { ssr: false });
const OverwatchSimulation = dynamic(() => import("./Overwatch"), { ssr: false });

export default function Proof() {
  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  return (
    <section id="proof" className="relative w-full bg-obsidian py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.03)_0%,rgba(0,0,0,0)_60%)]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 md:space-y-48">
        
        {/* SYSTEM BOOT HEADLINE */}
        <SystemBootHeadline premiumEase={premiumEase} />

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

// SYSTEM BOOT HEADLINE
function SystemBootHeadline({ premiumEase }: { premiumEase: [number, number, number, number] }) {
  const [bootStage, setBootStage] = useState(0);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setBootStage(1), 500);
    const timer2 = setTimeout(() => setBootStage(2), 1200);
    const timer3 = setTimeout(() => setBootStage(3), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="text-center mb-20 md:mb-32 min-h-[200px] flex flex-col items-center justify-center">
      {/* BOOT SEQUENCE */}
      <div className="mb-8 space-y-2 font-mono text-xs text-lucid/60">
        {bootStage >= 1 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: premiumEase }}
            className="tracking-widest"
          >
            [SYSTEM_INIT]
          </motion.div>
        )}
        {bootStage >= 2 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: premiumEase }}
            className="tracking-widest"
          >
            &gt; LOADING_PROOF_LAYER...
          </motion.div>
        )}
        {bootStage >= 3 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: premiumEase }}
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
        >
          <h2 className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-alabaster mb-4">
            Systems in Production.
          </h2>
          <p className="text-modern text-granite text-sm md:text-base tracking-[0.3em] uppercase">
            Deployed intelligence. Real interfaces. Zero vaporware.
          </p>
        </motion.div>
      )}
    </div>
  );
}

// SHOWCASE CONTAINER - MILITARY-GRADE HUD
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
    <div ref={ref} className={`flex flex-col ${align === "right" ? "md:items-end" : "md:items-start"} gap-8`}>
      
      {/* HEADER */}
      <div className={`flex flex-col ${align === "right" ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lucid font-mono text-sm tracking-widest">[{number}]</span>
          <div className="h-px w-12 bg-lucid/50" />
        </div>
        <h3 className="text-ancient text-2xl md:text-4xl lg:text-5xl text-alabaster uppercase tracking-wide mb-2">{title}</h3>
        <p className="text-granite font-mono text-xs tracking-[0.2em] uppercase">{subtitle}</p>
      </div>

      {/* HUD CONTAINER */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: premiumEase }}
        className="w-full h-[400px] md:h-[550px] bg-basalt border border-white/10 overflow-hidden relative group"
      >
        {/* TERMINAL HEADER (ORACLE'S FIX) */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between z-30 select-none">
          {/* LEFT: System ID */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-lucid/50" />
              <div className="w-1 h-1 bg-lucid/30" />
              <div className="w-1 h-1 bg-lucid/10" />
            </div>
            <span className="text-[10px] text-lucid/80 font-mono tracking-widest uppercase">
              SYS_ID: {title.toUpperCase().replace(" ", "_")}
            </span>
          </div>
          
          {/* RIGHT: Status Indicators */}
          <div className="flex items-center gap-3">
            <div className="px-2 py-0.5 border border-emerald-500/30 bg-emerald-500/10 text-[8px] text-emerald-400 font-mono uppercase tracking-wider">
              ONLINE
            </div>
            <motion.div 
              className="w-2 h-2 border border-white/20 relative"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-white/10" />
            </motion.div>
          </div>
        </div>
        
        {/* CONTENT */}
        <div className="pt-8 h-full w-full relative">{children}</div>
        
        {/* HOVER BORDER GLOW */}
        <div className="absolute inset-0 pointer-events-none border border-lucid/0 group-hover:border-lucid/20 transition-all duration-500" />
      </motion.div>
    </div>
  );
}