'use client';
import { useReveal } from '@/lib/hooks/useReveal';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
}

export default function Reveal({ children, delayMs = 0, className }: RevealProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-reveal
      data-revealed={revealed || undefined}
      style={revealed && delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
