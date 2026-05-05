import type { Tool } from '@/types/content';
import { Target, Globe, Cloud, Sparkle } from 'lucide-react';
import StatusBadge from './StatusBadge';
import { cn } from '@/lib/utils';

const ICONS: Record<Tool['id'], React.ReactNode> = {
  'create-mission':      <Target className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />,
  'explore-marketplace': <Globe  className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />,
  'earn-credentials':    <Cloud  className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />,
  'share-impact':        <Sparkle className="w-6 h-6 text-[#2563EB]" strokeWidth={1.5} />,
};

export default function ToolCard({ tool }: { tool: Tool }) {
  const isLive = tool.status === 'LIVE NOW';
  return (
    <div
      className={cn(
        'rounded-2xl border p-6 text-left shadow-sm transition-colors duration-200',
        isLive
          ? 'border-[rgba(0,0,0,0.07)] bg-white hover:bg-[#ECFDF5] hover:border-[#6EE7B7]'
          : 'border-[rgba(0,0,0,0.07)] bg-white hover:bg-[#EEF4FF] hover:border-[#BFDBFE]',
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] flex items-center justify-center">
          {ICONS[tool.id as Tool['id']]}
        </div>
        <StatusBadge status={tool.status as 'LIVE NOW' | 'COMING SOON'} />
      </div>
      <h3 className="font-semibold text-[#111111] text-base tracking-tight mb-2">
        {tool.title}
      </h3>
      <p className="text-sm text-[#6B7280] leading-relaxed">{tool.description}</p>
    </div>
  );
}
