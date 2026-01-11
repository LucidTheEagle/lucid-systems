"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp } from "lucide-react";

export default function OverwatchSimulation() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000); // Historic data
    const timer2 = setTimeout(() => setStage(2), 3000); // Prediction
    const timer3 = setTimeout(() => setStage(3), 4500); // Alert
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="w-full h-full p-4 md:p-6 flex flex-col bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,240,255,0.02))]">
      
      {/* HEADER - What is being predicted */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
        <div>
          <h4 className="text-alabaster font-mono text-sm uppercase tracking-wide">OPERATIONAL LOAD</h4>
          <p className="text-granite text-[10px] mt-1">Next 7-day forecast based on historical patterns</p>
        </div>
        <TrendingUp className={`w-5 h-5 ${stage >= 2 ? 'text-amber-400 animate-pulse' : 'text-granite'}`} />
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6">
        {[
          { label: "CURRENT", val: "2,847", col: "text-alabaster" },
          { label: "AVG GROWTH", val: "+24%", col: "text-emerald-400" },
          { label: "FORECAST", val: stage >= 2 ? "+40%" : "—", col: stage >= 2 ? "text-amber-400 font-bold" : "text-granite" }
        ].map((m, i) => (
          <div key={i} className="bg-white/5 border border-white/5 p-2 md:p-3">
            <div className={`text-base md:text-xl font-bold font-mono ${m.col} transition-colors duration-500`}>{m.val}</div>
            <div className="text-[8px] md:text-[9px] text-granite tracking-wider mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      {/* GRAPH */}
      <div className="flex-1 relative border-l border-b border-white/10">
        
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
        
        {/* Y-Axis Label */}
        <div className="absolute -left-8 top-0 text-[9px] text-granite rotate-[-90deg] origin-left font-mono">
          VOLUME
        </div>

        {/* Timeline Labels */}
        <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[9px] text-granite font-mono">
          <span>DAY 1</span>
          <span className="text-lucid">TODAY</span>
          <span className="text-amber-400">DAY 14</span>
        </div>

        {/* Vertical divider at "today" */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-lucid/20" />
        <div className="absolute left-1/2 top-2 text-[8px] text-lucid font-mono -translate-x-1/2 bg-obsidian px-1">
          NOW
        </div>

        <svg className="absolute inset-0 w-full h-full p-2 overflow-visible">
          
          {/* HISTORIC DATA (Past 7 days - steady) */}
          {stage >= 1 && (
            <motion.path 
              d="M 50,150 L 100,140 L 150,145 L 200,135 L 250,130 L 300,125"
              fill="none"
              stroke="#00F0FF"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          )}
          
          {/* PREDICTED DATA (Next 7 days - spike) */}
          {stage >= 2 && (
            <>
              <motion.path 
                d="M 300,125 L 350,100 L 400,70 L 450,50 L 500,40"
                fill="none"
                stroke="#FBBF24"
                strokeWidth="2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
              
              {/* Confidence interval shading */}
              <motion.path 
                d="M 300,125 L 350,100 L 400,70 L 450,50 L 500,40 L 500,80 L 450,90 L 400,105 L 350,130 Z"
                fill="url(#gradient)"
                opacity="0.15"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ delay: 0.3 }}
              />
            </>
          )}
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* ALERT - Spike detected */}
        {stage >= 3 && (
          <motion.div 
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-amber-900/30 border-2 border-amber-500/60 p-2 md:p-3 rounded backdrop-blur-md"
          >
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-400 animate-pulse" />
              <span className="text-[10px] md:text-xs text-amber-200 font-mono font-bold uppercase">CRITICAL FORECAST</span>
            </div>
            <p className="text-[9px] md:text-[10px] text-amber-300/80 font-mono">
              +40% load spike predicted in 7 days
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}