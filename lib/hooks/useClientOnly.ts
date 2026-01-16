import { useEffect, useState, useRef } from "react";

/**
 * useClientOnly Hook
 * 
 * Returns true only after component has mounted on client.
 * Prevents hydration mismatches for client-only features.
 * 
 * Usage:
 * ```tsx
 * const isClient = useClientOnly();
 * 
 * return (
 *   <div>
 *     {isClient ? <ClientOnlyComponent /> : <Skeleton />}
 *   </div>
 * );
 * ```
 */
export function useClientOnly(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Use requestAnimationFrame or setTimeout to avoid immediate setState
    const raf = requestAnimationFrame(() => {
      setIsClient(true);
    });
    
    return () => cancelAnimationFrame(raf);
  }, []);

  return isClient;
}

/**
 * useClientValue Hook
 * 
 * Safely generates client-only values (random numbers, timestamps, etc.)
 * without causing hydration errors.
 * 
 * Usage:
 * ```tsx
 * const sessionId = useClientValue(() => Math.floor(Math.random() * 9000 + 1000));
 * const timestamp = useClientValue(() => new Date().toLocaleTimeString());
 * 
 * return <div>Session: {sessionId ?? "----"}</div>
 * ```
 */
export function useClientValue<T>(generator: () => T): T | null {
  const [value, setValue] = useState<T | null>(null);
  const generatorRef = useRef(generator);

  // Update ref if generator changes
  useEffect(() => {
    generatorRef.current = generator;
  }, [generator]);

  useEffect(() => {
    // Use requestAnimationFrame to avoid immediate setState
    const raf = requestAnimationFrame(() => {
      setValue(generatorRef.current());
    });
    
    return () => cancelAnimationFrame(raf);
  }, []); // Empty deps because we use ref

  return value;
}