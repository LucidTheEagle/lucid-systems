"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-obsidian overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* ICON */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 w-16 h-16 bg-basalt border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.1)]"
        >
          <Terminal className="w-8 h-8 text-lucid" />
        </motion.div>

        {/* HEADLINE */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-alabaster tracking-tight mb-6"
        >
          READY TO <span className="text-lucid">ENFORCE ORDER</span>?
        </motion.h2>

        {/* SUBHEADLINE */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-granite text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The fog is optional. Clarity is a choice. 
          Stop managing chaos and start architecting your ascent.
        </motion.p>

        {/* BUTTONS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* PRIMARY CTA */}
          <a 
            href="https://cal.com/your-link" // REPLACE WITH REAL LINK
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-lucid text-obsidian font-bold text-lg tracking-wide hover:bg-white transition-all duration-300 flex items-center gap-3"
          >
            <span>INITIATE DEPLOYMENT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 border border-white/20 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
          </a>

          {/* SECONDARY CTA */}
          <a 
            href="#systems"
            className="text-granite hover:text-alabaster font-mono text-sm tracking-widest uppercase border-b border-transparent hover:border-lucid transition-all duration-300 pb-1"
          >
            Review System Architecture
          </a>
        </motion.div>

      </div>
    </section>
  );
}