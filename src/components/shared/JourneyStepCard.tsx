import type { JourneyStep } from '@/types/content';

export default function JourneyStepCard({ step }: { step: JourneyStep }) {
  return (
    <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 text-left shadow-sm">
      <div className="flex items-center gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E0E7FF] text-lg font-bold text-[#2563EB]">
          {step.index}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#111111]">{step.title}</h3>
          <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  );
}
