"use client";
import React, { useMemo } from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  // Compute year once with useMemo
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const socialLinks = [
    { 
      icon: Twitter, 
      href: "https://twitter.com/lucidtheeagle", 
      label: "Twitter" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/victor-okefie-9a333b26b/", 
      label: "LinkedIn" 
    },
    { 
      icon: Github, 
      href: "https://github.com/lucidtheeagle", 
      label: "GitHub" 
    }
  ];

  const sitemapLinks = [
    { href: "#creed", label: "The Creed" },
    { href: "#problem", label: "The Problem" },
    { href: "#systems", label: "Systems" },
    { href: "#how-it-works", label: "Execution" },
    { href: "#pricing", label: "Deployment" },
    { href: "#proof", label: "Proof" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/msa", label: "Master Services Agreement" },
  ];

  return (
    <footer 
      className="w-full bg-basalt border-t border-white/5 pt-16 pb-8"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TOP ROW: GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* COL 1: BRAND */}
          <div className="space-y-4">
            <h3 className="text-ancient text-xl font-bold text-alabaster tracking-[0.15em] uppercase">
              Lucid <span className="bg-gradient-to-r from-emerald-400 to-lucid bg-clip-text text-transparent">Systems</span>
            </h3>
            <p className="text-modern text-granite text-sm leading-relaxed max-w-xs">
              I provide clarity where there is blur, fog, and smoke. Every system I build is proof of clarity.
            </p>
            
            {/* STATUS INDICATOR */}
            <div className="flex items-center gap-2 mt-4">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span 
                  className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"
                  style={{ willChange: 'opacity, transform' }}
                />
                <span className="relative inline-flex h-2 w-2 bg-emerald-500 rounded-full" />
              </span>
              <span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase">
                Systems Operational
              </span>
            </div>
          </div>

          {/* COL 2: SITEMAP */}
          <nav aria-label="Site navigation">
            <h4 className="text-alabaster font-mono text-xs tracking-widest uppercase mb-6">
              Coordinates
            </h4>
            <ul className="space-y-3 text-sm text-granite font-mono">
              {sitemapLinks.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="hover:text-lucid transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* COL 3: LEGAL */}
          <nav aria-label="Legal">
            <h4 className="text-alabaster font-mono text-xs tracking-widest uppercase mb-6">
              Protocols
            </h4>
            <ul className="space-y-3 text-sm text-granite font-mono">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <a 
                    href={href} 
                    className="hover:text-lucid transition-colors duration-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* COL 4: CONNECT */}
          <div>
            <h4 className="text-alabaster font-mono text-xs tracking-widest uppercase mb-6">
              Transmissions
            </h4>
            <div className="flex gap-4 mb-6" role="list">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-granite hover:text-lucid hover:bg-white/10 hover:border-lucid/50 transition-all duration-300 touch-manipulation"
                  aria-label={`Visit our ${label}`}
                  role="listitem"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* EMAIL */}
            <a 
              href="mailto:lucidtheeagle@gmail.com"
              className="flex items-center gap-2 text-xs text-granite hover:text-lucid transition-colors duration-300 font-mono"
              aria-label="Email us"
            >
              <Mail className="w-4 h-4" />
              <span className="break-all">lucidtheeagle@gmail.com</span>
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div 
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          role="separator"
          aria-hidden="true"
        />

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-granite text-xs font-mono">
            © {currentYear} LUCID SYSTEMS. All rights reserved.
          </p>
          <p className="text-granite text-xs font-mono opacity-50 flex flex-wrap items-center justify-center gap-2">
            <span>Built by</span>
            <span className="text-lucid">Lucid the Eagle</span>
            <span aria-hidden="true">•</span>
            <span>Intelligence enforced. Chaos removed.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}