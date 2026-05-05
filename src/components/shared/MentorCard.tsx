import type { Mentor } from '@/types/content';

const AVATAR_GRADIENTS = [
  'from-[#D6E4FF] to-[#EEF3FF]',
  'from-[#FFE8D0] to-[#FFF4EC]',
  'from-[#DDD6FF] to-[#F0EDFF]',
  'from-[#D0F5E8] to-[#EDFAF4]',
];

const PERSONALITY_COLORS = [
  'bg-[#E6FAF3] text-[#059669]',
  'bg-[#EEF4FF] text-[#2563EB]',
  'bg-[#FFF7ED] text-[#D97706]',
  'bg-[#F5F3FF] text-[#7C3AED]',
  'bg-[#FEF2F2] text-[#DC2626]',
  'bg-[#F0FDF4] text-[#16A34A]',
];

export default function MentorCard({ mentor, index = 0 }: { mentor: Mentor; index?: number }) {
  return (
    <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.07)] overflow-hidden flex flex-col">

      {/* Photo area */}
      <div className={`h-52 bg-linear-to-b ${AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]} flex items-center justify-center overflow-hidden`}>
        <div className="w-28 h-28 rounded-full bg-white/60 flex items-center justify-center text-4xl font-bold text-[#374151]">
          {mentor.name.charAt(0)}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col">

        {/* Name + university + bio */}
        <div className="mb-4">
          <h3
            className="font-bold text-[#111111] leading-tight mb-0.5"
            style={{ fontFamily: "'Outfit', ui-sans-serif, system-ui, sans-serif", fontSize: '17px' }}
          >
            {mentor.name}
          </h3>
          <p className="text-sm font-medium text-[#374151] mb-2">{mentor.university}</p>
          <p className="text-sm text-[#6B7280] leading-relaxed">{mentor.bio}</p>
        </div>

        <hr className="border-[rgba(0,0,0,0.07)] mb-4" />

        {/* What they teach */}
        <div className="mb-4">
          <p className="text-xs text-[#9CA3AF] mb-2">What they teach</p>
          <div className="flex flex-wrap gap-2">
            {mentor.teachingTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-[#374151] bg-white border border-[rgba(0,0,0,0.08)] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-[rgba(0,0,0,0.07)] mb-4" />

        {/* Program */}
        <div className="mb-4">
          <p className="text-xs text-[#9CA3AF] mb-1">Program</p>
          <p className="text-sm font-semibold text-[#111111] leading-snug">{mentor.program}</p>
        </div>

        {/* Achievements */}
        <div className="mb-4">
          <p className="text-xs text-[#9CA3AF] mb-1">Achievements</p>
          <p className="text-sm font-semibold text-[#111111]">{mentor.achievements.join(', ')}</p>
        </div>

        {/* Personality */}
        <div>
          <p className="text-xs text-[#9CA3AF] mb-2">Personality</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[#E6FAF3] text-[#059669]">
              {mentor.mbti}
            </span>
            {mentor.personalityTraits.map((trait, i) => (
              <span
                key={trait}
                className={`px-2.5 py-1 text-xs font-medium rounded-full ${PERSONALITY_COLORS[(i + 1) % PERSONALITY_COLORS.length]}`}
              >
                {trait}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
