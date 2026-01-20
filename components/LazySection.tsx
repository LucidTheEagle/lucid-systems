"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function LazySection({ 
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "200px" 
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={`min-h-[10vh] ${className}`}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      ) : (
        <div className="h-24 w-full bg-transparent" aria-hidden="true" />
      )}
    </div>
  );
}