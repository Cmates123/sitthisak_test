import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import JourneyStepCard from '@/components/shared/JourneyStepCard';
import { JOURNEY_STEPS } from '@/lib/content';

export default function JourneySection() {
  return (
    <section id="journey" className="bg-[#F8FAFC] px-5 py-16 md:py-24 md:px-16 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <SectionHeading
            eyebrow="Here's how it works"
            title={
              <>
                From <span className="text-[#2563EB]">"I did this"</span> to{' '}
                "you're accepted" — in 4 steps.
              </>
            }
            subtitle={`"Where do I even start?" "Is this event even legit?" "Where did I put that certificate?" "How do I explain all of this?" Meldalverse was built to answer every single one.`}
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {JOURNEY_STEPS.map((step, i) => (
            <Reveal key={step.index} delayMs={i * 80}>
              <JourneyStepCard step={step} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
