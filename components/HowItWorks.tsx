"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Layers, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "OBSERVE",
    subtitle: "The Audit",
    status: "SYSTEM MAPPING",
    description: "We map your current operational flow. Every document type. Every decision point. Every bottleneck. We identify exactly where manual work is bleeding revenue.",
    icon: <Search className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
  },
  {
    id: "02",
    title: "ARCHITECT",
    subtitle: "The Blueprint",
    status: "LOGIC DESIGN",
    description: "We design the intelligence layer. Custom AI models. Structured data schemas. Integration points. Every system is built for your specific workflow, not generic templates.",
    icon: <Layers className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
  },
  {
    id: "03",
    title: "DEPLOY",
    subtitle: "The Injection",
    status: "LIVE INTEGRATION",
    description: "The system goes live. We train your team. We monitor performance. We iterate based on real data. You see results within 7 days.",
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
  },
  {
    id: "04",
    title: "EVOLVE",
    subtitle: "The Growth",
    status: "ADAPTIVE LEARNING",
    description: "The system learns. As your volume increases, it adapts. As your needs change, it evolves. You never rebuild from scratch.",
    icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />,
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  return (
    <section 
      id="how-it-works" 
      ref={containerRef}
      className="relative w-full bg-obsidian py-32 md:py-48 overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* DATA FOG */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.1)_0%,rgba(0,0,0,0)_70%)]" />
      
      {/* PRECISION GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-24 md:mb-32 pl-6 md:pl-8 border-l-2 border-lucid/20 relative">
          {/* GLOWING DOT */}
          <motion.div 
            className="absolute -left-[5px] top-0 w-2 h-2 bg-lucid rounded-full"
            animate={{
              boxShadow: [
                "0 0 10px rgba(0,240,255,0.5)",
                "0 0 20px rgba(0,240,255,0.8)",
                "0 0 10px rgba(0,240,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
           
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            viewport={{ once: true }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-alabaster mb-4"
          >
            Execution Protocol
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
            viewport={{ once: true }}
            className="text-modern text-granite text-sm md:text-base tracking-[0.2em]"
          >
            From chaos to clarity in 4 stages.
          </motion.p>
        </div>

        {/* CIRCUIT CONTAINER */}
        <div className="space-y-20 md:space-y-28">
          {steps.map((step, idx) => (
            <CircuitNode 
              key={step.id} 
              step={step} 
              index={idx} 
              totalSteps={steps.length}
              premiumEase={premiumEase}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// CIRCUIT NODE - LIQUID SMOOTH TRANSITIONS
function CircuitNode({ 
  step, 
  index, 
  totalSteps,
  premiumEase 
}: { 
  step: typeof steps[0]; 
  index: number; 
  totalSteps: number;
  premiumEase: [number, number, number, number];
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLast = index === totalSteps - 1;

  return (
    <div ref={ref} className="relative">
      
      {/* FLEX CONTAINER: Icon + Content Side by Side */}
      <div className="flex gap-6 md:gap-10 items-start">
        
        {/* LEFT: ICON + VERTICAL LINE */}
        <div className="relative flex flex-col items-center shrink-0">
          
          {/* ICON NODE - BREATHING GLOW */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: premiumEase }}
          >
            <motion.div 
              className={`
                w-14 h-14 md:w-16 md:h-16 flex items-center justify-center 
                bg-basalt border-2 transition-all duration-700
                ${isInView 
                  ? "border-lucid" 
                  : "border-white/10"
                }
              `}
              animate={isInView ? {
                boxShadow: [
                  "0 0 15px rgba(0,240,255,0.1)",
                  "0 0 30px rgba(0,240,255,0.3)",
                  "0 0 15px rgba(0,240,255,0.1)"
                ]
              } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Corner accents */}
              <motion.div 
                className="absolute top-0 left-0 w-1 h-1 bg-lucid"
                animate={isInView ? { opacity: [0.3, 0.7, 0.3] } : { opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-0 right-0 w-1 h-1 bg-lucid"
                animate={isInView ? { opacity: [0.3, 0.7, 0.3] } : { opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              <motion.div 
                className={`transition-colors duration-700 ${
                  isInView ? "text-lucid" : "text-granite"
                }`}
                animate={isInView ? {
                  filter: [
                    "drop-shadow(0 0 2px rgba(0,240,255,0.3))",
                    "drop-shadow(0 0 6px rgba(0,240,255,0.6))",
                    "drop-shadow(0 0 2px rgba(0,240,255,0.3))"
                  ]
                } : {}}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {step.icon}
              </motion.div>
              
              {/* Number Badge */}
              <div className="absolute -top-2 -right-2 bg-obsidian px-1.5 py-0.5 border border-white/10 text-[9px] font-mono text-granite tracking-wider">
                {step.id}
              </div>
            </motion.div>
          </motion.div>

          {/* VERTICAL LINE (Connecting to next stage) - LIQUID FLOW */}
          {!isLast && (
            <div className="w-px h-20 md:h-28 bg-white/5 mt-4 relative overflow-hidden">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.6, 
                  ease: premiumEase 
                }}
                className="w-full h-full bg-lucid origin-top"
                style={{
                  boxShadow: "0 0 8px rgba(0,240,255,0.4)"
                }}
              />
              
              {/* ENERGY PULSE TRAVELING DOWN */}
              {isInView && (
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ 
                    y: "300%", 
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 2,
                    delay: 1.8,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 w-full h-4 bg-linear-to-b from-transparent via-lucid to-transparent"
                />
              )}
            </div>
          )}
        </div>

        {/* RIGHT: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: premiumEase }}
          className="flex-1 pt-1"
        >
          {/* STATUS INDICATOR - BOOT-UP FEEL */}
          <div className="flex items-center gap-2 mb-3">
            <motion.div 
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-700 ${
                isInView ? "bg-emerald-400" : "bg-granite"
              }`}
              animate={isInView ? { 
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1]
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span 
              className={`text-[10px] md:text-xs font-mono tracking-widest uppercase transition-colors duration-700 ${
                isInView ? "text-emerald-400/80" : "text-granite"
              }`}
            >
              {step.status} {isInView ? "INITIALIZED" : "PENDING"}
            </motion.span>
          </div>

          {/* TITLE + SUBTITLE */}
          <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-4 mb-4 md:mb-6">
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-ancient text-2xl md:text-4xl lg:text-5xl font-bold text-alabaster tracking-wide uppercase leading-tight"
            >
              {step.title}
            </motion.h3>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 0.7, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8, ease: premiumEase }}
              className="text-lucid text-modern text-xs md:text-sm tracking-[0.2em] uppercase md:mb-1"
            >
              {step.subtitle}
            </motion.span>
          </div>

          {/* DESCRIPTION */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.0, ease: premiumEase }}
            className="text-modern text-granite text-sm md:text-base leading-relaxed max-w-2xl border-l-2 border-white/5 pl-4 hover:border-lucid/50 transition-colors duration-500"
          >
            {step.description}
          </motion.p>
        </motion.div>

      </div>
    </div>
  );
}