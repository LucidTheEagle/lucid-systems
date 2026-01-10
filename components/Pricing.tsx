"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Package, Network, Check, ArrowRight } from "lucide-react";
import { ShimmerButton } from "./ui/shimmer-button";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

// DECRYPTING PRICE - Flickers through randoms then locks (Oracle's idea)
const DecryptedPrice = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const [display, setDisplay] = useState("0000");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const finalValue = value.toString();

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      let iterations = 0;
      const interval = setInterval(() => {
        setDisplay(
          finalValue.split("").map((char, i) => {
            if (i < iterations) return char;
            return Math.floor(Math.random() * 10).toString();
          }).join("")
        );
        iterations += 0.2; // Speed of decryption
        if (iterations >= finalValue.length) {
          clearInterval(interval);
          setDisplay(finalValue);
        }
      }, 50);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, finalValue, delay]);

  return <span ref={ref} className="tabular-nums">{display}</span>;
};

export default function Pricing() {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const tiers = [
    {
      id: "single",
      name: "Single System",
      subtitle: "Deploy One",
      price: 2500,
      description: "Deploy one system (Prism, Sentry, or Overwatch) customized for your operations.",
      icon: <Box className="w-10 h-10" strokeWidth={1.5} />,
      features: [
        "System customization & configuration",
        "2 weeks of deployment support",
        "Training documentation",
        "30 days of monitoring & optimization"
      ],
      whoItsFor: "Built for operations teams processing 100+ documents weekly.",
      cta: "DEPLOY ONE SYSTEM",
      secondaryCta: "View Documentation",
      featured: false,
    },
    {
      id: "operations",
      name: "Operations Pack",
      subtitle: "The Oracle's Choice",
      price: 4500,
      description: "Deploy The Prism + The Sentry. Automate document processing and lead qualification in one integrated system.",
      icon: <Package className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1.5} />,
      features: [
        "Two systems deployed & integrated",
        "60-minute strategy call",
        "Custom workflow design",
        "4 weeks of deployment support",
        "60 days of monitoring & optimization",
        "Priority support channel"
      ],
      whoItsFor: "Built for businesses losing $10k+/month to unqualified leads.",
      cta: "DEPLOY OPERATIONS PACK",
      secondaryCta: "Try Live Demo",
      featured: true,
    },
    {
      id: "full",
      name: "Full Intelligence",
      subtitle: "Complete Stack",
      price: 7000,
      description: "Deploy all three systems (Prism + Sentry + Overwatch) as a unified intelligence layer for your entire operation.",
      icon: <Network className="w-10 h-10" strokeWidth={1.5} />,
      features: [
        "All three systems deployed & integrated",
        "90-minute strategy & architecture session",
        "Custom workflow design + data modeling",
        "6 weeks of deployment support",
        "90 days of monitoring & optimization",
        "Direct access to Lucid (24-hour response)",
        "Quarterly system reviews"
      ],
      whoItsFor: "Built for teams making million-dollar decisions from incomplete data.",
      cta: "DEPLOY THE FULL STACK",
      secondaryCta: "See Sample Insights",
      featured: false,
    }
  ];

  return (
    <section id="pricing" className="relative w-full bg-obsidian py-32 md:py-40 overflow-hidden">
      
      {/* SERVER CORE BACKGROUND - Vertical glowing lines (Oracle's idea) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-lucid/50 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-lucid/50 to-transparent" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-white/10" />
        
        {/* Horizontal traces */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-lucid/10 to-transparent" />
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-lucid/10 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-32 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-ancient text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-[0.15em] text-alabaster"
          >
            Deployment Protocols.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <TypewriterEffectSmooth
              words={[
                { text: "I", className: "text-granite text-base md:text-lg" },
                { text: "don't", className: "text-granite text-base md:text-lg" },
                { text: "sell", className: "text-granite text-base md:text-lg" },
                { text: "hours.", className: "text-granite text-base md:text-lg" },
                { text: "I", className: "text-granite text-base md:text-lg" },
                { text: "sell", className: "text-granite text-base md:text-lg" },
                { text: "operational", className: "text-lucid text-base md:text-lg" },
                { text: "leverage.", className: "text-lucid text-base md:text-lg" },
              ]}
              className="text-base md:text-lg"
              cursorClassName="bg-lucid"
            />
          </motion.div>
        </div>

        {/* THE VAULT - 3 MONUMENT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
              className={`
                group relative flex flex-col h-full bg-basalt p-8 md:p-10 transition-all duration-500
                ${tier.featured 
                  ? "md:min-h-[750px] md:-mt-8 md:pb-12 border-2 border-lucid/40 shadow-[0_0_40px_rgba(0,240,255,0.15)]" 
                  : "md:min-h-[700px] border border-white/5"
                }
                ${hoveredTier === tier.id 
                  ? "scale-103 shadow-[0_0_60px_rgba(0,240,255,0.3)] z-20" 
                  : hoveredTier 
                    ? "opacity-20 blur-[1px] scale-95" 
                    : "hover:border-lucid/50 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]"
                }
              `}
            >
              {/* PHOTON BEAM - Sentry Only */}
              {tier.featured && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lucid to-transparent animate-scan-line opacity-75" />
                </div>
              )}

              {/* CARD HEADER */}
              <div className="flex items-start justify-between mb-8">
                <div className={`p-3 bg-obsidian border transition-colors duration-300 
                  ${tier.featured ? "border-lucid/30 text-lucid" : "border-white/10 text-alabaster group-hover:border-lucid/30 group-hover:text-lucid"}
                `}>
                  {tier.icon}
                </div>
                {tier.featured && (
                  <motion.div
                    animate={{ 
                      boxShadow: hoveredTier === tier.id 
                        ? "0 0 20px rgba(0,240,255,0.4)" 
                        : "0 0 10px rgba(0,240,255,0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                    className="px-3 py-1.5 border-2 border-lucid text-lucid text-[10px] font-bold uppercase tracking-widest bg-lucid/10"
                  >
                    {tier.subtitle}
                  </motion.div>
                )}
              </div>

              {/* TIER NAME */}
              <div className="mb-6">
                <h3 className="text-ancient text-xl md:text-2xl font-bold text-alabaster mb-2 tracking-widest uppercase group-hover:text-white transition-colors">
                  {tier.name}
                </h3>
                {!tier.featured && (
                  <p className="text-modern text-xs md:text-sm text-granite uppercase tracking-widest">
                    {tier.subtitle}
                  </p>
                )}
              </div>

              {/* PRICE - DECRYPTING EFFECT (Oracle's idea) */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-lucid/5 translate-y-1 translate-x-1">
                  $<DecryptedPrice value={tier.price} delay={idx * 300} />
                </div>
                <div className="relative">
                  <div className={`text-5xl md:text-6xl font-bold tracking-tighter transition-colors ${
                    tier.featured ? "text-lucid" : "text-alabaster group-hover:text-lucid"
                  }`}>
                    $<DecryptedPrice value={tier.price} delay={idx * 300} />
                  </div>
                  <p className="text-modern text-[10px] text-granite uppercase tracking-widest mt-2">
                    Operational Leverage
                  </p>
                </div>
                
                {/* Price scan line on hover */}
                {hoveredTier === tier.id && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-lucid/20 to-transparent pointer-events-none"
                  />
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="text-modern text-sm md:text-base text-granite leading-relaxed mb-8 border-l-2 border-white/5 pl-4 group-hover:border-lucid/50 transition-colors">
                {tier.description}
              </p>

              {/* CAPABILITIES */}
              <div className="mb-8 grow">
                <p className="text-modern text-alabaster text-xs uppercase tracking-widest mb-4 opacity-60">Capabilities:</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (idx * 0.3) + (i * 0.1), duration: 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-sm text-granite group-hover:text-neutral-300 transition-colors"
                    >
                      <Check 
                        className={`w-4 h-4 mt-0.5 shrink-0 transition-all ${
                          hoveredTier === tier.id 
                            ? "text-lucid scale-110" 
                            : "text-lucid/70"
                        }`}
                        strokeWidth={2} 
                      />
                      <span className="text-modern leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* WHO IT'S FOR */}
              <p className="text-modern text-sm text-alabaster mb-8 italic opacity-80">
                {tier.whoItsFor}
              </p>

              {/* CTA AREA */}
              <div className="mt-auto space-y-4">
                <ShimmerButton 
                  onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
                  className="w-full py-4 text-xs font-bold tracking-widest uppercase"
                >
                  [ {tier.cta} ]
                </ShimmerButton>
                
                <button 
                  onClick={() => window.open("https://cal.com/lucid-theeagle-ebabkz/system-strategy-call", "_blank")}
                  className="w-full flex items-center justify-center gap-2 text-xs text-granite hover:text-lucid transition-colors uppercase tracking-widest group/link"
                >
                  {tier.secondaryCta}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* CONNECTION LINES */}
              {idx < tiers.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 z-30">
                  <div className="relative">
                    <div className={`h-px bg-lucid/20 transition-all duration-300 ${
                      hoveredTier === tier.id || hoveredTier === tiers[idx + 1].id 
                        ? "bg-lucid shadow-[0_0_8px_rgba(0,240,255,0.5)]" 
                        : ""
                    }`} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                      <p className="text-[8px] text-granite uppercase tracking-widest bg-obsidian px-2">
                        +${((tiers[idx + 1].price - tier.price) / 1000).toFixed(1)}k
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* VALUE STATEMENT - Keep your unique treatment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-20 relative"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-lucid/30 to-transparent mx-auto max-w-md mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <p className="text-modern text-lucid/60 text-xs uppercase tracking-[0.3em]">
              &gt; DEPLOYMENT_PROTOCOL
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
            className="text-modern text-sm md:text-base text-granite max-w-2xl mx-auto leading-relaxed"
          >
            Each deployment includes full system customization, integration support, and ongoing optimization.
            <br />
            <motion.span 
              initial={{ opacity: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 1.8 }}
              viewport={{ once: true }}
              className="text-lucid font-bold tracking-wide inline-block mt-2"
            >
              The fog lifts when systems think.
            </motion.span>
          </motion.p>

          <motion.div
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-lucid rounded-full mx-auto mt-6 shadow-[0_0_10px_rgba(0,240,255,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  );
}