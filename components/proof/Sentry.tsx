"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Message {
  role: "ai" | "user";
  text: string;
}

const conversation: Message[] = [
  { role: "ai", text: "Candidate qualification initiated. Name?" },
  { role: "user", text: "James Rodriguez" },
  { role: "ai", text: "Years of experience in sales?" },
  { role: "user", text: "5 years, B2B SaaS mostly" },
  { role: "ai", text: "Current role?" },
  { role: "user", text: "Account Executive at CloudTech" },
  { role: "ai", text: "Qualification complete. SCORE: 0.87 | Scheduling strategy call..." },
];

export default function SentrySimulation() {
  // Initialize with computed values directly 
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Calculate these once on mount, but without useEffect
  const [sessionId] = useState(() => Math.floor(Math.random() * 9000 + 1000));
  const [timestamp] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  });

  // Message progression effect (only effect we need)
  useEffect(() => {
    if (currentIndex < conversation.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, conversation[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? 800 : 1500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <div className="w-full h-full p-4 md:p-6 flex flex-col font-mono bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),rgba(16,185,129,0.02))]">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
        <div className="flex items-center gap-3">
          <motion.div 
            className="w-2 h-2 bg-emerald-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-emerald-400 text-[10px] uppercase tracking-widest">LIVE TRIAGE</span>
        </div>
        <span className="text-granite text-[9px] uppercase tracking-wider">
          SESSION: {sessionId}
        </span>
      </div>

      {/* CONVERSATION */}
      <div className="flex-1 overflow-y-auto space-y-4 pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
        {messages.map((msg, idx) => (
          <motion.div 
            key={`${msg.role}-${idx}-${msg.text.substring(0, 10)}`}
            initial={{ opacity: 0, x: msg.role === 'ai' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            {/* METADATA LINE */}
            <div className="flex items-center gap-2 mb-1 opacity-50 text-[8px] font-mono uppercase tracking-wider">
              <span>{msg.role === 'ai' ? 'SENTRY_CORE' : 'INCOMING_SIGNAL'}</span>
              <span>::</span>
              <span>{timestamp}</span>
            </div>

            {/* MESSAGE BLOCK */}
            <div className={`max-w-[85%] p-3 border-l-2 text-xs md:text-sm leading-relaxed ${
              msg.role === 'ai' 
                ? 'bg-emerald-900/10 border-emerald-500 text-emerald-100 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                : 'bg-white/5 border-white/40 text-gray-300'
            }`}>
              {msg.role === 'ai' && (
                <span className="mr-2 text-emerald-500 font-bold">{'>'}</span>
              )}
              {msg.text}
              
              {/* HIGHLIGHT SCORE */}
              {msg.text.includes('SCORE') && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="block mt-2 text-amber-400 font-bold text-sm"
                >
                  ► HIGH-QUALITY LEAD DETECTED
                </motion.span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* TYPING INDICATOR */}
      {currentIndex < conversation.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-emerald-400/60 text-xs"
        >
          <div className="flex gap-1">
            <motion.div className="w-1 h-1 bg-emerald-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
            <motion.div className="w-1 h-1 bg-emerald-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} />
            <motion.div className="w-1 h-1 bg-emerald-400" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wide">Processing response...</span>
        </motion.div>
      )}
    </div>
  );
}