"use client";
import React from "react";
import { motion } from "framer-motion";
import { Triangle, ShieldCheck, Radar, ArrowRight, Check } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";

export default function Systems() {
  const premiumEase: [number, number, number, number] = [0.25, 0.1, 0.25, 1.0];

  const systems = [
    {
      id: "prism",
      title: "THE PRISM",
      subtitle: "INTELLIGENT DATA FRACTURING",
      description: "Your operations drown in unstructured noise—PDFs, contracts, messy inboxes. The Prism does not just read; it understands. It fractures raw documents into pure, structured data, instantly ranking relevance and extracting signal from the noise.",
      icon: <Triangle className="w-8 h-8 md:w-10 md:h-10 text-alabaster group-hover:text-lucid transition-colors duration-300" strokeWidth={1.5} />,
      features: [
        "Auto-extraction: PDF/Docx → strict JSON schema",
        "Relevance scoring: Ranks inputs against custom criteria",
        "Entity mapping: Identifies names, dates, intent automatically",
        "Instant database sync: No manual entry. Ever."
      ],
      whoItsFor: "Built for operations teams processing 100+ documents weekly.",
      cta: "DEPLOY THE PRISM",
      secondaryCta: "View Documentation",
      featured: false,
    },
    {
      id: "sentry",
      title: "THE SENTRY",
      subtitle: "AUTONOMOUS TRIAGE ENGINE",
      description: "Stop guarding the gate yourself. The Sentry is an always-on neural agent that engages leads, candidates, or clients 24/7. It possesses context-aware memory, qualifies intent via natural conversation, and only alerts you when the objective is met.",
      icon: <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-lucid" strokeWidth={1.5} />,
      features: [
        "Contextual memory: Remembers details across conversations",
        "Dynamic qualification: Asks follow-ups based on answers",
        "Sentiment analysis: Detects urgency or frustration",
        "The handoff: Seamlessly books meetings for qualified targets"
      ],
      whoItsFor: "Built for businesses losing $10k+/month to unqualified leads.",
      cta: "DEPLOY THE SENTRY",
      secondaryCta: "Try Live Demo",
      featured: true,
    },
    {
      id: "overwatch",
      title: "THE OVERWATCH",
      subtitle: "PREDICTIVE STRATEGY CORE",
      description: "Hindsight is useless. You need foresight. The Overwatch is not just a dashboard; it is a prediction engine. It monitors your operational flow in real-time and uses AI to forecast bottlenecks, revenue dips, or resource gaps before they happen.",
      icon: <Radar className="w-8 h-8 md:w-10 md:h-10 text-alabaster group-hover:text-lucid transition-colors duration-300" strokeWidth={1.5} />,
      features: [
        "Live telemetry: Real-time visualization of system flow",
        "AI forecasting: Predicts next week's load based on history",
        "Anomaly detection: Alerts you to deviations in patterns",
        "Natural language query: Ask your data questions in plain English"
      ],
      whoItsFor: "Built for teams making million-dollar decisions from incomplete data.",
      cta: "DEPLOY THE OVERWATCH",
      secondaryCta: "See Sample Insights",
      featured: false,
    },
  ];

  return (
    <section id="systems" className="relative w-full bg-obsidian py-24 md:py-32 overflow-hidden">
      
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808014_1px,transparent_1px),linear-gradient(to_bottom,#80808014_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: premiumEase }}
            viewport={{ once: true }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-alabaster"
          >
            Architecture for the Fog.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: premiumEase }}
            viewport={{ once: true }}
            className="text-modern text-granite text-base md:text-lg tracking-widest"
          >
            Chaos is the default state. These systems enforce order.
          </motion.p>
        </div>

        {/* THE MONOLITHS - 3 CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {systems.map((system, idx) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: premiumEase }}
              viewport={{ once: true }}
              className={`group relative flex flex-col h-full bg-basalt p-8 md:p-10 transition-all duration-500 
                ${system.featured 
                  ? "md:-mt-8 md:pb-12 border border-lucid/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:shadow-[0_0_50px_rgba(0,240,255,0.25)]" 
                  : "border border-white/5 hover:border-lucid/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                }
              `}
            >
              {/* THE PHOTON BEAM - Sentry Only */}
              {system.featured && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-lucid to-transparent"
                    animate={{ 
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              )}

              {/* CARD HEADER - Icon + Badge */}
              <div className="flex items-start justify-between mb-8">
                {/* ICON WITH BREATHING GLOW */}
                <motion.div 
                  className={`p-3 bg-obsidian border transition-colors duration-300 
                    ${system.featured ? "border-lucid/30" : "border-white/10 group-hover:border-lucid/30"}
                  `}
                  animate={system.featured ? {
                    boxShadow: [
                      "0 0 10px rgba(0,240,255,0.2)",
                      "0 0 25px rgba(0,240,255,0.5)",
                      "0 0 10px rgba(0,240,255,0.2)"
                    ]
                  } : {}}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {system.icon}
                </motion.div>

                {system.featured && (
                  <motion.span 
                    className="px-3 py-1 border border-lucid text-lucid text-[10px] font-bold uppercase tracking-widest bg-lucid/10"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(0,240,255,0.2)",
                        "0 0 20px rgba(0,240,255,0.4)",
                        "0 0 10px rgba(0,240,255,0.2)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Most Deployed
                  </motion.span>
                )}
              </div>

              {/* TITLES */}
              <div className="mb-6">
                <h3 className="text-ancient text-xl md:text-2xl font-bold text-alabaster mb-2 tracking-widest uppercase group-hover:text-white transition-colors">
                  {system.title}
                </h3>
                <p className="text-modern text-xs md:text-sm text-lucid uppercase tracking-widest font-medium opacity-80">
                  {system.subtitle}
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="text-modern text-granite text-sm md:text-base leading-relaxed mb-8 border-l-2 border-white/5 pl-4 group-hover:border-lucid/50 transition-colors duration-500">
                {system.description}
              </p>

              {/* CAPABILITIES - Staggered Reveal */}
              <div className="mb-8 grow">
                <p className="text-modern text-alabaster text-xs uppercase tracking-widest mb-4 opacity-60">Capabilities:</p>
                <ul className="space-y-3">
                  {system.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: 0.4 + (idx * 0.15) + (i * 0.08), 
                        duration: 0.4,
                        ease: premiumEase 
                      }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-sm text-granite group-hover:text-neutral-300 transition-colors"
                    >
                      <Check className="w-4 h-4 text-lucid/70 mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-modern leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* WHO IT'S FOR */}
              <p className="text-modern text-sm text-alabaster mb-8 italic opacity-80">
                {system.whoItsFor}
              </p>

              {/* CTA AREA */}
              <div className="mt-auto space-y-4">
                <ShimmerButton 
                  onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
                  className="w-full py-4 text-xs font-bold tracking-widest uppercase"
                >
                  [ {system.cta} ]
                </ShimmerButton>
                
                <button 
                  onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
                  className="w-full flex items-center justify-center gap-2 text-xs text-granite hover:text-lucid transition-colors uppercase tracking-widest group/link"
                >
                  {system.secondaryCta}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}