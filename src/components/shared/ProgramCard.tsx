import type { Program } from '@/types/content';

const PROGRAM_CONFIG: Record<string, { bg: string; badgeText: string; badgeBg: string; accent: string }> = {
  bascii: { bg: 'bg-[#EAF0FB]', badgeText: 'text-[#2563EB]', badgeBg: 'bg-[#EEF4FF]', accent: '#2563EB' },
  inda:   { bg: 'bg-[#F0EBF8]', badgeText: 'text-[#7C3AED]', badgeBg: 'bg-[#F5F3FF]', accent: '#7C3AED' },
  ise:    { bg: 'bg-[#EBF5F0]', badgeText: 'text-[#059669]', badgeBg: 'bg-[#ECFDF5]', accent: '#059669' },
};

const FALLBACK = { bg: 'bg-[#F3F4F6]', badgeText: 'text-[#2563EB]', badgeBg: 'bg-[#EEF4FF]', accent: '#2563EB' };

export default function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const isReversed = index % 2 !== 0;
  const cfg = PROGRAM_CONFIG[program.slug] ?? FALLBACK;

  const visual = (
    <div
      className={`${cfg.bg} rounded-2xl min-h-95 flex items-center justify-center shrink-0`}
      style={{ flex: '0 0 44%' }}
    >
      <span
        className="font-black tracking-tight leading-none opacity-10 select-none"
        style={{
          fontFamily: "'Chillax', ui-sans-serif, system-ui, sans-serif",
          fontSize: 'clamp(3rem, 8vw, 6rem)',
        }}
      >
        {program.name}
      </span>
    </div>
  );

  const content = (
    <div className="flex flex-col justify-center py-8 px-8 rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white" style={{ flex: '0 0 52%' }}>
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-3xl font-black text-[#111111]"
          style={{ fontFamily: "'Chillax', ui-sans-serif, system-ui, sans-serif" }}
        >
          {program.name}
        </span>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cfg.badgeText} ${cfg.badgeBg}`}>
          End-to-End
        </span>
      </div>

      <p className="text-sm font-bold text-[#111111] mb-4">{program.fullName}</p>

      {program.blurb && (
        <p className="text-sm text-[#6B7280] leading-relaxed">{program.blurb}</p>
      )}
    </div>
  );

  const spacer = <div style={{ flex: '0 0 44%' }} />;

  return (
    <div className="flex flex-col md:flex-row gap-8 items-stretch">
      {isReversed ? <>{content}{spacer}</> : <>{spacer}{content}</>}
    </div>
  );
}
