import { cn } from '@/lib/utils';
import SectionEyebrow from './SectionEyebrow';

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
      <h2 className="tracking-tight text-[#111111] leading-tight" style={{ fontSize: '24px', fontWeight: 600 }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-sm text-[#6B7280] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
