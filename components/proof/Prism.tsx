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
    const startTimer = setTimeout(() => {
      setIsScanning(true);
      
      let currentIndex = 0;
      const typeInterval = setInterval(() => {
        if (currentIndex < fullJSON.length) {
          setJsonText(fullJSON.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setIsComplete(true);
            setIsScanning(false);
          }, 500);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }, 1000);

    return () => clearTimeout(startTimer);
  }, [fullJSON]);

  return (
    <div className="w-full h-full flex relative font-mono">
      
      <div className="flex h-full w-full">
        {/* LEFT: UNSTRUCTURED (BLURRED CHAOS) */}
        <div className={`w-1/2 h-full p-4 md:p-6 bg-obsidian/50 text-granite overflow-hidden relative transition-all duration-1000 ${isComplete ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
          <div className="text-[9px] text-red-400/70 tracking-widest mb-4 uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-red-400 animate-pulse" />
            UNSTRUCTURED INPUT
          </div>
          <div className={`space-y-3 text-[10px] md:text-sm ${isScanning ? 'animate-pulse' : ''}`}>
            <p>RESUME: Sarah Chen</p>
            <p>EXP: 8 years Python dev...</p>
            <p>Seeking senior role in AI...</p>
            <div className="w-full h-2 bg-white/10" />
            <p>Skills: PyTorch, React, Node...</p>
            <div className="w-3/4 h-2 bg-white/10" />
            <p>Education: MIT, CS Degree...</p>
            <div className="w-2/3 h-2 bg-white/10 mt-2" />
            <p className="text-[9px] opacity-50">Contact: sarah@email.com</p>
          </div>
        </div>

        {/* RIGHT: STRUCTURED (CRYSTAL CLARITY) */}
        <div className="w-1/2 h-full p-4 md:p-6 bg-basalt text-lucid overflow-hidden relative border-l border-white/10">
          <div className="text-[9px] text-emerald-400/70 tracking-widest mb-4 uppercase flex items-center gap-2">
            <motion.span 
              className="w-1.5 h-1.5 bg-emerald-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            STRUCTURED OUTPUT
          </div>
          <pre className="text-[10px] md:text-sm leading-relaxed whitespace-pre-wrap">
            {jsonText.split('\n').map((line, i) => {
              const isScore = line.includes('"score"');
              return (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className={isScore ? 'text-amber-400 font-bold' : ''}
                >
                  {line}{'\n'}
                </motion.span>
              );
            })}
          </pre>
        </div>

        {/* SCANNER LINE (ORACLE'S UPGRADE) */}
        {isScanning && !isComplete && (
          <motion.div 
            className="absolute top-0 bottom-0 w-[2px] bg-lucid z-30"
            style={{ boxShadow: "0 0 20px rgba(0,240,255,0.8)" }}
            animate={{ left: ["0%", "50%", "0%"] }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          >
            {/* TRAILING LIGHT */}
            <div className="absolute top-1/2 -right-[500px] w-[500px] h-px bg-gradient-to-l from-lucid/30 to-transparent" />
          </motion.div>
        )}

        {/* CENTER ICON (FRACTURE POINT) */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-obsidian border border-lucid p-2"
          animate={isScanning ? {
            boxShadow: [
              "0 0 15px rgba(0,240,255,0.3)",
              "0 0 30px rgba(0,240,255,0.6)",
              "0 0 15px rgba(0,240,255,0.3)"
            ]
          } : {
            boxShadow: "0 0 10px rgba(0,240,255,0.2)"
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FileText className={`w-4 h-4 text-lucid ${isScanning ? 'animate-spin' : ''}`} />
        </motion.div>
      </div>
    </div>
  );
}