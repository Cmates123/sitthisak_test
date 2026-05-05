import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import HeroButton from '@/components/shared/HeroButton';
import MentorCard from '@/components/shared/MentorCard';
import { MENTORS } from '@/lib/content';

export default function MentorsSection() {
  return (
    <section
      id="mentors"
      className="relative px-5 py-20 md:py-28 md:px-16 overflow-hidden bg-white"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <SectionHeading
              title="Ready to start your mission?"
              subtitle="Here are some trending opportunities matched to your potential."
            />
            <div className="mt-8">
              <HeroButton href="#programs" dark>Explore More</HeroButton>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {MENTORS.map((mentor, i) => (
            <Reveal key={mentor.id} delayMs={i * 60}>
              <MentorCard mentor={mentor} index={i} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
