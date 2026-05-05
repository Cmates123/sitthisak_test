'use client';
import { useEffect, useState } from 'react';

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(
  target: number,
  opts: { durationMs?: number; start?: boolean } = {}
): number {
  const { durationMs = 1600, start = true } = opts;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      setCount(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);

  return count;
}
