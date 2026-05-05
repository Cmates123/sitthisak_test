'use client';
import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  threshold?: number;
  once?: boolean;
}

export function useReveal<T extends HTMLElement>(opts: UseRevealOptions = {}) {
  const { threshold = 0.15, once = true } = opts;
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setRevealed(false);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, revealed };
}
