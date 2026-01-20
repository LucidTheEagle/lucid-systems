"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Cpu } from "lucide-react";

export default function PrismSimulation() {
  const [isScanning, setIsScanning] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const fullJSON = `{\n  "candidate": "Sarah Chen",\n  "role": "Senior Engineer",\n  "experience": 8,\n  "stack": ["Python", "PyTorch"],\n  "score": 0.94\n}`;

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
      }, 20);

      return () => clearInterval(typeInterval);
    }, 1000);

    return () => clearTimeout(startTimer);
  }, [fullJSON]);

  return (
    <div className="w-full h-full flex relative font-mono text-[10px] md:text-xs">
      
      <div className="flex h-full w-full">
        {/* LEFT: UNSTRUCTURED (CHAOS) */}
        <div 
          className={`w-1/2 h-full p-4 md:p-6 bg-obsidian/80 text-granite overflow-hidden relative transition-all duration-1000 ${
            isComplete ? 'opacity-10 grayscale' : 'opacity-100'
          }`}
          style={{ willChange: isComplete ? 'auto' : 'opacity, filter' }}
        >
          <div className="text-red-400/70 tracking-widest mb-4 uppercase flex items-center gap-2">
            <span 
              className="w-1.5 h-1.5 bg-red-400 animate-pulse rounded-full"
              aria-label="Processing indicator"
            />
            RAW_INPUT
          </div>
          <div className={`space-y-4 transition-opacity duration-500 ${isScanning ? 'opacity-50' : ''}`}>
            <p className="text-[10px] md:text-xs">RESUME: Sarah Chen</p>
            <p className="opacity-70 text-[9px] md:text-[11px]">Senior developer with 8 years exp in Python...</p>
            <div className="w-full h-px bg-white/5 my-2" />
            <p className="text-[10px] md:text-xs">Looking for roles in AI architecture.</p>
            <p className="opacity-60 text-[9px] md:text-[11px]">Skills: PyTorch, React, Node, AWS...</p>
            <div className="w-3/4 h-2 bg-white/5" />
            <div className="w-1/2 h-2 bg-white/5" />
          </div>
        </div>

        {/* RIGHT: STRUCTURED (CLARITY) */}
        <div className="w-1/2 h-full p-4 md:p-6 bg-basalt text-lucid overflow-hidden relative border-l border-white/10">
          <div className="text-emerald-400/70 tracking-widest mb-4 uppercase flex items-center gap-2">
            <motion.span 
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ willChange: 'opacity' }}
              aria-label="Active processing"
            />
            PRISM_OUTPUT
          </div>
          <pre className="leading-relaxed whitespace-pre-wrap font-mono text-[10px] md:text-xs">
            {jsonText}
            {isScanning && (
              <span 
                className="animate-pulse bg-lucid w-2 h-4 inline-block align-middle ml-1"
                style={{ willChange: 'opacity' }}
              />
            )}
          </pre>
        </div>

        {/* SCANNER LINE - GPU accelerated */}
        {isScanning && !isComplete && (
          <motion.div 
            className="absolute top-0 bottom-0 w-[1px] bg-lucid z-30"
            style={{ 
              boxShadow: "0 0 15px rgba(0,240,255,0.5)",
              left: "0%",
              willChange: 'left'
            }}
            animate={{ left: ["0%", "50%", "0%"] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            aria-hidden="true"
          >
            <div className="absolute top-1/2 -right-[100px] w-[200px] h-[100px] bg-lucid/10 blur-xl rounded-full" />
          </motion.div>
        )}

        {/* FRACTURE POINT ICON */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-obsidian border border-lucid/50 p-2 rounded-full"
          animate={isScanning ? { 
            scale: [1, 1.1, 1], 
            borderColor: ["rgba(0,240,255,0.5)", "rgba(0,240,255,1)", "rgba(0,240,255,0.5)"] 
          } : {}}
          transition={{ duration: 1, repeat: Infinity }}
          style={{ willChange: isScanning ? 'transform, border-color' : 'auto' }}
          aria-hidden="true"
        >
          {isScanning ? (
            <Cpu className="w-5 h-5 text-lucid" style={{ animation: 'spin 3s linear infinite' }} />
          ) : (
            <FileText className="w-5 h-5 text-lucid" />
          )}
        </motion.div>
      </div>
    </div>
  );
}