'use client';
import { useCountUp } from '@/lib/hooks/useCountUp';
import { useReveal } from '@/lib/hooks/useReveal';

interface StatCounterProps {
  value: number | string;
  suffix?: string;
  label: string;
  durationMs?: number;
}

export default function StatCounter({ value, suffix = '', label, durationMs = 1400 }: StatCounterProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const isNumeric = typeof value === 'number';
  const count = useCountUp(isNumeric ? (value as number) : 0, { durationMs, start: revealed });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-[#111111] leading-none">
        {isNumeric ? `${count}${suffix}` : `${value}${suffix}`}
      </div>
      <div className="mt-2 text-sm text-[#6B7280] font-medium">{label}</div>
    </div>
  );
}
