"use client";
import React from "react";
import { Github, Twitter, Linkedin } from "lucide-react"; // Make sure these are installed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-basalt border-t border-white/5 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TOP ROW: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* COL 1: BRAND */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-alabaster tracking-widest">LUCID</h3>
            <p className="text-granite text-sm leading-relaxed max-w-xs">
              Providing clarity where there is blur. We build the systems that build your business.
            </p>
            {/* STATUS INDICATOR */}
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">
                SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>

          {/* COL 2: SITEMAP */}
          <div>
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6">Coordinates</h4>
            <ul className="space-y-3 text-sm text-granite">
              <li><a href="#creed" className="hover:text-lucid transition-colors">The Creed</a></li>
              <li><a href="#systems" className="hover:text-lucid transition-colors">Systems</a></li>
              <li><a href="#pricing" className="hover:text-lucid transition-colors">Investment</a></li>
              <li><a href="#proof" className="hover:text-lucid transition-colors">Proof</a></li>
            </ul>
          </div>

          {/* COL 3: LEGAL */}
          <div>
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6">Protocols</h4>
            <ul className="space-y-3 text-sm text-granite">
              <li><a href="#" className="hover:text-lucid transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-lucid transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-lucid transition-colors">Master Services Agreement</a></li>
            </ul>
          </div>

          {/* COL 4: CONNECT */}
          <div>
            <h4 className="text-white font-mono text-xs tracking-widest uppercase mb-6">Transmissions</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-granite hover:text-lucid hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-granite hover:text-lucid hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-granite hover:text-lucid hover:bg-white/10 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-granite text-xs font-mono">
            © {currentYear} LUCID SYSTEMS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-granite text-xs font-mono opacity-50">
            DESIGNED IN OBSIDIAN.
          </p>
        </div>

      </div>
    </footer>
  );
}