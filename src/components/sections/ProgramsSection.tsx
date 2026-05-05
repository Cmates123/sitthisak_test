import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import ProgramCard from '@/components/shared/ProgramCard';
import { PROGRAMS } from '@/lib/content';

export default function ProgramsSection() {
  return (
    <section id="programs" className="px-5 py-16 md:py-24 md:px-16 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <SectionHeading
              eyebrow="Trending opportunities"
              title={<>From Confusion to Acceptance — <span className="text-[#2563EB]">with Real Mentors</span></>}
              subtitle="Here are some trending opportunities matched to your potential."
            />
          </div>
        </Reveal>

        <div className="space-y-16">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.slug} delayMs={i * 80}>
              <ProgramCard program={program} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
