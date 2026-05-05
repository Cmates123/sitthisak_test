import HeroButton from '@/components/shared/HeroButton';
import FloatingIcons from '@/components/shared/FloatingIcons';
import Reveal from '@/components/shared/Reveal';

export default function CtaBanner() {
  return (
    <section className="relative px-5 py-24 md:py-36 md:px-16 bg-white overflow-hidden">

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[#111111] mb-4">
            Your acceptance story starts here.
          </h2>
          <p className="mx-auto text-sm text-[#6B7280] leading-relaxed mb-10">
            Get a free session with a mentor who made it into your dream program—no pressure, just real guidance.
          </p>
          <HeroButton href="#" dark>Book Your Free Session</HeroButton>

          <div className="mt-12">
            <FloatingIcons />
          </div>
        </Reveal>
      </div>

    </section>
  );
}
