"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function PrismSimulation() {
  const [isScanning, setIsScanning] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const fullJSON = `{
  "candidate": "Sarah Chen",
  "role": "Senior Engineer",
  "experience": 8,
  "stack": ["Python", "PyTorch", "React"],
  "score": 0.94
}`;

  useEffect(() => {
    // Auto-start scan after 1s
    const startTimer = setTimeout(() => {
      setIsScanning(true);
      
      // Type out JSON
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < fullJSON.length) {
          setJsonText(fullJSON.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          // Complete - stop scanner, fade unstructured
          setTimeout(() => {
            setIsComplete(true);
            setIsScanning(false);
          }, 500);
        }
      }, 30);
    }, 1000);

    return () => clearTimeout(startTimer);
  }, [fullJSON]);

  return (
    <div className="w-full h-full flex relative font-mono">
      
      <div className="flex h-full w-full">
        {/* LEFT: UNSTRUCTURED */}
        <div className={`w-1/2 h-full p-4 md:p-6 bg-obsidian/50 text-granite overflow-hidden relative transition-opacity duration-1000 ${isComplete ? 'opacity-20' : 'opacity-100'}`}>
          <div className="text-[9px] text-red-400/70 tracking-widest mb-4">⚠ UNSTRUCTURED INPUT</div>
          <div className={`space-y-3 text-[10px] md:text-sm blur-[2px] ${isScanning ? 'animate-pulse' : ''}`}>
            <p>RESUME: Sarah Chen</p>
            <p>EXP: 8 years Python dev...</p>
            <p>Seeking senior role in AI...</p>
            <div className="w-full h-2 bg-white/10" />
            <p>Skills: PyTorch, React, Node...</p>
            <div className="w-3/4 h-2 bg-white/10" />
            <p>Education: MIT, CS Degree...</p>
          </div>
        </div>

        {/* RIGHT: STRUCTURED */}
        <div className="w-1/2 h-full p-4 md:p-6 bg-basalt text-lucid overflow-hidden relative border-l border-white/10">
          <div className="text-[9px] text-emerald-400/70 tracking-widest mb-4">✓ STRUCTURED OUTPUT</div>
          <pre className="text-[10px] md:text-sm leading-relaxed whitespace-pre-wrap">
            {jsonText.split('\n').map((line, i) => {
              const isScore = line.includes('"score"');
              return (
                <span key={i} className={isScore ? 'text-amber-400 font-bold' : ''}>
                  {line}{'\n'}
                </span>
              );
            })}
          </pre>
        </div>

        {/* SCANNER LINE - Only on left side, stops when complete */}
        {isScanning && !isComplete && (
          <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-lucid z-30 shadow-[0_0_20px_cyan]"
            animate={{ left: ["0%", "50%", "0%"] }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          >
            <div className="absolute top-1/2 -right-[500px] w-[500px] h-px bg-gradient-to-l from-lucid/30 to-transparent" />
          </motion.div>
        )}

        {/* CENTER ICON */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-obsidian border border-lucid rounded-full p-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
          <FileText className={`w-4 h-4 text-lucid ${isScanning ? 'animate-spin' : 'animate-pulse'}`} />
        </div>
      </div>
    </div>
  );
}