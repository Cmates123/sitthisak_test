import { cn } from '@/lib/utils';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'md' | 'lg';
  variant?: 'primary' | 'ghost';
  href?: string;
}

export default function GoldButton({
  size = 'md',
  variant = 'primary',
  href,
  className,
  children,
  ...props
}: GoldButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center font-semibold tracking-tight rounded-full transition-all duration-200 cursor-pointer select-none',
    size === 'md' && 'px-6 py-2.5 text-sm',
    size === 'lg' && 'px-8 py-3.5 text-base',
    variant === 'primary' &&
      'bg-[#111111] text-white hover:bg-[#2A2A2A] hover:shadow-lg hover:-translate-y-0.5',
    variant === 'ghost' &&
      'bg-white text-[#111111] border border-[rgba(0,0,0,0.15)] hover:bg-[#F2F1EE] hover:border-[rgba(0,0,0,0.25)]',
    className
  );

  if (href) {
    return <a href={href} className={base}>{children}</a>;
  }
  return <button className={base} {...props}>{children}</button>;
}
