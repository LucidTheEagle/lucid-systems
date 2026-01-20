"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  
  useEffect(() => {
    // Only animate if filter is enabled (desktop)
    if (filter) {
      animate(
        "span",
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          duration: duration,
          delay: stagger(0.2),
        }
      );
    } else {
      // Mobile: instant display, no animation
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.05),
        }
      );
    }
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
                willChange: filter ? 'opacity, filter' : 'opacity',
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white leading-snug">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};