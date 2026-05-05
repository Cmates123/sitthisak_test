import type { Program } from '@/types/content';

const PROGRAM_CONFIG: Record<string, { badgeText: string; badgeBg: string }> = {
  bascii: { badgeText: 'text-[#2563EB]', badgeBg: 'bg-[#EEF4FF]' },
  inda:   { badgeText: 'text-[#7C3AED]', badgeBg: 'bg-[#F5F3FF]' },
  ise:    { badgeText: 'text-[#059669]', badgeBg: 'bg-[#ECFDF5]' },
};

const FALLBACK = { badgeText: 'text-[#2563EB]', badgeBg: 'bg-[#EEF4FF]' };

export default function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const isReversed = index % 2 !== 0;
  const cfg = PROGRAM_CONFIG[program.slug] ?? FALLBACK;

  return (
    <div className={`flex ${isReversed ? 'justify-start' : 'justify-end'}`}>
      <div className="w-full md:w-[52%] rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white py-6 px-6 md:py-8 md:px-8">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-2xl md:text-3xl font-black text-[#111111]"
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
    </div>
  );
}
