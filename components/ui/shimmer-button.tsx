"use client";
import React, { ComponentPropsWithoutRef, CSSProperties, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#00f0ff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "0px",
      background = "rgba(5, 5, 5, 1)",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
    }, []);

    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-lucid whitespace-nowrap text-lucid [background:var(--bg)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          "hover:bg-lucid hover:text-obsidian transition-colors",
          "text-modern uppercase tracking-widest",
          "touch-manipulation", // Better mobile interaction
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Shimmer effect - disabled on mobile for performance */}
        {!isMobile && (
          <div
            className={cn(
              "-z-30 blur-[2px]",
              "absolute inset-0 overflow-visible"
            )}
            style={{ willChange: 'transform' }}
          >
            <div className="animate-shimmer-slide absolute inset-0 aspect-[1] h-full rounded-none">
              <div 
                className="animate-spin-around absolute -inset-full w-auto rotate-0"
                style={{
                  background: 'conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>
        )}
        
        {children}
        
        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-0 size-full z-10 pointer-events-none",
            "px-4 py-1.5 text-sm font-medium",
            "text-lucid group-hover:text-obsidian transition-colors duration-300",
            "shadow-[inset_0_-8px_10px_#00f0ff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#00f0ff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#00f0ff3f]"
          )}
        />
        
        {/* Backdrop */}
        <div
          className={cn(
            "absolute -z-20 [border-radius:var(--radius)] [background:var(--bg)]"
          )}
          style={{
            inset: 'var(--cut)',
          }}
        />
      </button>
    );
  }
);

ShimmerButton.displayName = "ShimmerButton";