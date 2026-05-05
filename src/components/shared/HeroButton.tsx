import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroButtonProps {
  href?: string;
  dark?: boolean;
  sm?: boolean;
  children: React.ReactNode;
}

export default function HeroButton({ href = '#', dark = false, sm = false, children }: HeroButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex items-center rounded-full font-semibold',
        sm ? 'text-sm px-5 py-2' : 'text-base px-8 py-4',
        dark
          ? 'bg-[#111111] text-white hover:bg-[#1a1a1a]'
          : 'bg-white text-[#111111] border border-[rgba(0,0,0,0.1)] shadow-sm'
      )}
    >
      <span>{children}</span>
      {/* ยืดขวาอย่างเดียว: w-0 → w-5 */}
      <span className="overflow-hidden w-0 group-hover:w-6 transition-all duration-300 ease-out flex items-center">
        <ArrowUpRight className="w-5 h-5 shrink-0 ml-1.5" strokeWidth={2} />
      </span>
    </a>
  );
}
