import { cn } from '@/lib/utils';

export default function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-sm font-semibold uppercase tracking-[0.24em] text-[#2563EB] mb-4', className)}>
      {children}
    </p>
  );
}
