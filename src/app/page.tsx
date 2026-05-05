import Starfield from '@/components/effects/Starfield';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CtaBanner from '@/components/layout/CtaBanner';
import Hero from '@/components/sections/Hero';
import MentorsSection from '@/components/sections/MentorsSection';
import JourneySection from '@/components/sections/JourneySection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import ToolsSection from '@/components/sections/ToolsSection';

export default function HomePage() {
  return (
    <>
      <Starfield />
      <Header />
      <main>
        <Hero />
        <MentorsSection />
        <JourneySection />
        <ProgramsSection />
        <ToolsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
