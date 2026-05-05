import Reveal from '@/components/shared/Reveal';
import SectionHeading from '@/components/shared/SectionHeading';
import ToolCard from '@/components/shared/ToolCard';
import { TOOLS } from '@/lib/content';

export default function ToolsSection() {
  return (
    <section id="tools" className="bg-white px-5 py-16 md:py-24 md:px-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl mx-auto text-center mb-12">
          <Reveal>
            <SectionHeading
              eyebrow="Platform Tools"
              title={<>Everything You Need, <em className="not-italic text-[#2563EB]">In One Place</em></>}
              subtitle="Powerful tools built specifically to maximize your university admission success."
            />
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOOLS.map((tool, i) => (
            <Reveal key={tool.id} delayMs={i * 60}>
              <ToolCard tool={tool} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
