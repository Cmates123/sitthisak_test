import HeroButton from '@/components/shared/HeroButton';
import TypewriterText from '@/components/shared/TypewriterText';
import { HERO } from '@/lib/content';

export default function Hero() {
  return (
    <section className="relative min-h-dvh flex items-start justify-center text-center px-5 pt-72 pb-12 bg-[#EEF0F8] overflow-hidden">
      {/* Background blobs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -bottom-20 -left-32 w-175 h-175 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(180,192,240,0.55) 0%, transparent 65%)', filter: 'blur(70px)' }}
        />
        <div
          className="absolute -top-20 -right-32 w-150 h-150 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(195,200,245,0.45) 0%, transparent 65%)', filter: 'blur(90px)' }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto w-full">
        {/* Headline */}
        <h1 className="text-2xl font-semibold leading-[1.13] tracking-tight text-[#0F1117] mb-6">
          {HERO.headline}
        </h1>

        {/* Subtitle */}
        <p className="text-base text-[#6B7280] leading-relaxed max-w-lg mx-auto mb-10">
          {HERO.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-16">
          <HeroButton href="#mentors" dark>{HERO.ctaLabel}</HeroButton>
          <HeroButton href="#mentors">{HERO.ctaSecondary}</HeroButton>
        </div>

        {/* Winner badge */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#4F63D2]">
            WINNER
          </span>
          <p className="text-sm text-[#374151] font-medium">
            <TypewriterText
              text="Techstars Startup Weekend Women Bangkok 2026"
              speed={55}
              startDelay={600}
            />
          </p>
          <div className="text-2xl font-black text-[#111111] tracking-tight mt-1">
            techstars<span className="text-[#5CB85C]">_</span>
          </div>
        </div>

      </div>
    </section>
  );
}
