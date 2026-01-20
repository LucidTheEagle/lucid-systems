"use client";

import { useEffect, useState } from "react";

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState({ fps: 0, memory: 0 });

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const updateMetrics = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) {
        // @ts-expect-error - memory API is not standard but works in Chrome
        const memory = performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) : 0;
        
        setMetrics({
          fps: Math.round((frameCount * 1000) / (now - lastTime)),
          memory,
        });

        frameCount = 0;
        lastTime = now;
      }

      animationFrameId = requestAnimationFrame(updateMetrics);
    };

    animationFrameId = requestAnimationFrame(updateMetrics);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div className="fixed bottom-4 left-4 z-9999 bg-black/80 text-lucid border border-lucid/20 p-2 font-mono text-xs rounded pointer-events-none">
      <div className={metrics.fps < 30 ? "text-red-500 font-bold" : "text-lucid"}>
        FPS: {metrics.fps}
      </div>
      <div className="text-granite">
        RAM: {metrics.memory}MB
      </div>
    </div>
  );
}