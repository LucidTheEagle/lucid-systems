"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SentrySimulation() {
  const [messages, setMessages] = useState<Array<{role: string; text: string}>>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState("INITIALIZING");

  const conversation = [
    { role: 'ai', text: "Analyzing current lead volume...", delay: 2000 },
    { role: 'user', text: "About 200/week. Only 10 convert.", delay: 5000 }, // Human slower
    { role: 'ai', text: "5% conversion detected. Identifying bottleneck...", delay: 6500 }, // AI faster
    { role: 'user', text: "Can you help qualify them?", delay: 9500 },
    { role: 'ai', text: "Affirmative. Booking strategy call now.", delay: 11000 }
  ];

  useEffect(() => {
    // Initial loading
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      setStatus("STANDBY");
    }, 1500);

    // Execute conversation
    conversation.forEach(({ role, text, delay }) => {
      setTimeout(() => {
        if (role === 'ai') {
          setIsTyping(true);
          setStatus("ANALYZING");
          setTimeout(() => {
            setMessages(prev => [...prev, { role, text }]);
            setIsTyping(false);
            setStatus("QUALIFIED");
          }, 1000); // AI response delay
        } else {
          setMessages(prev => [...prev, { role, text }]);
        }
      }, delay);
    });

    return () => clearTimeout(loadTimer);
  }, []);

  return (
    <div className="flex flex-col h-full bg-black/20 p-4 md:p-6 relative">
      
      {/* NEURAL LOG */}
      <div className="h-6 flex items-center justify-between border-b border-white/5 pb-2 mb-4">
        <span className="text-[8px] md:text-[9px] text-granite font-mono tracking-widest">AI_AGENT_ID: SENTRY_09</span>
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${
            isLoading ? 'bg-gray-500' : 
            isTyping ? 'bg-amber-500 animate-pulse' : 
            'bg-emerald-500'
          }`} />
          <span className={`text-[8px] md:text-[9px] font-mono ${
            isLoading ? 'text-gray-500' :
            isTyping ? 'text-amber-500/80' : 
            'text-emerald-500/80'
          }`}>
            {status}
          </span>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 space-y-3 overflow-y-auto flex flex-col justify-end">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-lucid/50 rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
              <div className="w-2 h-2 bg-lucid/50 rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
              <div className="w-2 h-2 bg-lucid/50 rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: msg.role === 'ai' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-2 md:p-3 rounded-lg text-[10px] md:text-sm font-mono ${
                  msg.role === 'ai' 
                    ? 'bg-basalt border border-white/10 text-alabaster rounded-tl-none' 
                    : 'bg-lucid/10 border border-lucid/30 text-lucid rounded-tr-none'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-basalt border border-white/5 px-3 py-2 rounded-lg rounded-tl-none flex gap-1">
                  <span className="w-1 h-1 bg-granite rounded-full animate-bounce" style={{animationDelay: '0ms'}} />
                  <span className="w-1 h-1 bg-granite rounded-full animate-bounce" style={{animationDelay: '150ms'}} />
                  <span className="w-1 h-1 bg-granite rounded-full animate-bounce" style={{animationDelay: '300ms'}} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}