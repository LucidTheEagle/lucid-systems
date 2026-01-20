"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function OverwatchSimulation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => setStage(3), 3500)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full p-4 md:p-6 flex flex-col bg-gradient-to-b from-black/0 to-lucid/5">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/5">
        <div>
          <h4 className="text-alabaster font-mono text-xs md:text-sm uppercase tracking-wide">
            OPERATIONAL LOAD
          </h4>
          <p className="text-granite text-[9px] mt-1">Predictive Scaling Engine</p>
        </div>
        <div 
          className={`px-2 py-1 rounded border text-[9px] font-mono transition-colors duration-500 ${
            stage >= 2 
              ? 'bg-amber-500/10 border-amber-500/50 text-amber-500' 
              : 'bg-white/5 border-white/10 text-granite'
          }`}
        >
          {stage >= 2 ? 'SCALING UP' : 'STABLE'}
        </div>
      </div>

      {/* METRICS ROW */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8">
        {[
          { label: "CURRENT", val: "2,847", col: "text-alabaster" },
          { label: "GROWTH", val: "+24%", col: "text-emerald-400" },
          { 
            label: "FORECAST", 
            val: stage >= 2 ? "+40%" : "—", 
            col: stage >= 2 ? "text-amber-400 font-bold" : "text-granite" 
          }
        ].map((m, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-2 md:p-3 rounded-sm">
            <div className={`text-sm md:text-xl font-bold font-mono ${m.col} transition-colors duration-500`}>
              {m.val}
            </div>
            <div className="text-[8px] text-granite tracking-wider mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* GRAPH CONTAINER */}
      <div className="flex-1 relative border-l border-b border-white/10 mx-2 mb-2">
        
        {/* BG GRID */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[length:20px_20px]"
          style={{ transform: 'translateZ(0)' }}
          aria-hidden="true"
        />
        
        {/* GRAPH SVG */}
        <svg 
          className="absolute inset-0 w-full h-full overflow-visible" 
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
          aria-label="Operational load forecast graph"
        >
          <defs>
            <linearGradient id="prediction-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Historic Data (Blue) */}
          {stage >= 1 && (
            <motion.path 
              d="M 0,80 L 20,75 L 40,78 L 60,70"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
              style={{ willChange: 'auto' }}
            />
          )}

          {/* Predicted Data (Amber) */}
          {stage >= 2 && (
            <>
              <motion.path 
                d="M 60,70 L 80,40 L 100,20"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="0.5"
                strokeDasharray="1 1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ willChange: 'auto' }}
              />
              <motion.path 
                d="M 60,70 L 80,40 L 100,20 L 100,100 L 60,100 Z"
                fill="url(#prediction-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ willChange: 'opacity' }}
              />
            </>
          )}
        </svg>

        {/* "NOW" LINE */}
        <div 
          className="absolute top-0 bottom-0 left-[60%] w-px bg-lucid/30 flex flex-col items-center"
          aria-label="Current time indicator"
        >
          <div className="px-1 bg-obsidian text-[8px] text-lucid -translate-y-1/2">NOW</div>
          <div 
            className="w-1 h-1 bg-lucid rounded-full mt-auto mb-[-2px] animate-ping"
            style={{ willChange: 'opacity, transform' }}
          />
        </div>

        {/* ALERT POPUP */}
        {stage >= 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            style={{ willChange: 'opacity, transform' }}
            className="absolute top-4 right-4 z-20 bg-obsidian border border-amber-500/40 p-3 shadow-lg shadow-amber-500/10 max-w-[160px] rounded-sm"
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <div className="text-amber-500 text-[9px] font-bold font-mono mb-1">
                  ANOMALY DETECTED
                </div>
                <div className="text-granite text-[8px] leading-tight">
                  Projected load exceeds capacity.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}