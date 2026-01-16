"use client";
import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-basalt border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TOP ROW: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* COL 1: BRAND */}
          <div className="space-y-4">
            <h3 className="text-ancient text-xl font-bold text-alabaster tracking-[0.15em] uppercase">
              Lucid <span className="bg-linear-to-r from-emerald-400 to-lucid bg-clip-text text-transparent">Systems</span>
            </h3>
            <p className="text-modern text-granite text-sm leading-relaxed max-w-xs">
              I provide clarity where there is blur, fog, and smoke. Every system I build is proof of clarity.
            </p>
            
            {/* STATUS INDICATOR */}
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">
                Systems Operational
              </span>
            </div>
          </div>

          {/* COL 2: SITEMAP */}
          <div>
            <h4 className="text-alabaster font-mono text-xs tracking-widest uppercase mb-6">Coordinates</h4>
            <ul className="space-y-3 text-sm text-granite font-mono">
              <li><a href="#creed" className="hover:text-lucid transition-colors">The Creed</a></li>
              <li><a href="#problem" className="hover:text-lucid transition-colors">The Problem</a></li>
              <li><a href="#systems" className="hover:text-lucid transition-colors">Systems</a></li>
              <li><a href="#how-it-works" className="hover:text-lucid transition-colors">Execution</a></li>
              <li><a href="#pricing" className="hover:text-lucid transition-colors">Deployment</a></li>
              <li><a href="#proof" className="hover:text-lucid transition-colors">Proof</a></li>
            </ul>
          </div>

          {/* COL 3: LEGAL */}
          <div>
            <h4 className="text-alabaster font-mono text-xs tracking-widest uppercase mb-6">Protocols</h4>
            <ul className="space-y-3 text-sm text-granite font-mono">
              <li><a href="/privacy" className="hover:text-lucid transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-lucid transition-colors">Terms of Service</a></li>
              <li><a href="/msa" className="hover:text-lucid transition-colors">Master Services Agreement</a></li>
            </ul>
          </div>

          {/* COL 4: CONNECT */}
          <div>
            <h4 className="text-alabaster font-mono text-xs tracking-widest uppercase mb-6">Transmissions</h4>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://twitter.com/lucidtheeagle" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-granite hover:text-lucid hover:bg-white/10 hover:border-lucid/50 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/victor-okefie-9a333b26b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-granite hover:text-lucid hover:bg-white/10 hover:border-lucid/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/lucidtheeagle" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-granite hover:text-lucid hover:bg-white/10 hover:border-lucid/50 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            {/* EMAIL */}
            <a 
              href="mailto:lucid@lucidsystems.io"
              className="flex items-center gap-2 text-xs text-granite hover:text-lucid transition-colors font-mono"
            >
              <Mail className="w-4 h-4" />
              <span>lucidtheeagle@gmail.com</span>
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-granite text-xs font-mono">
            © {currentYear} LUCID SYSTEMS. All rights reserved.
          </p>
          <p className="text-granite text-xs font-mono opacity-50 flex items-center gap-2">
            <span>Built by</span>
            <span className="text-lucid">Lucid the Eagle</span>
            <span>•</span>
            <span>Intelligence enforced. Chaos removed.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}