import type { JourneyStep } from '@/types/content';

export default function JourneyStepCard({ step }: { step: JourneyStep }) {
  return (
    <div className="rounded-2xl md:rounded-[2rem] border border-[#E5E7EB] bg-white p-5 md:p-8 text-left shadow-sm">
      <div className="flex items-start md:items-center gap-4 md:gap-5">
        <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-[#E0E7FF] text-base md:text-lg font-bold text-[#2563EB]">
          {step.index}
        </div>
        <div>
          <h3 className="text-base md:text-xl font-semibold text-[#111111]">{step.title}</h3>
          <p className="mt-1.5 md:mt-2 text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}
