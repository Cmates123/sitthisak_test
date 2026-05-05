import { FOOTER, FOOTER_SECTIONS } from '@/lib/content';
import { Globe, Mail, MessageCircle, SquareStar, Heart } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: 'Line', icon: null, href: '#' },
  { label: 'Website', icon: <Globe className="w-4 h-4" />, href: '#' },
  { label: 'Email', icon: <Mail className="w-4 h-4" />, href: '#' },
  { label: 'Chat', icon: <MessageCircle className="w-4 h-4" />, href: '#' },
  { label: 'Highlights', icon: <SquareStar className="w-4 h-4" />, href: '#' },
  { label: 'Favorites', icon: <Heart className="w-4 h-4" />, href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white text-[#111111] px-5 md:px-16 py-12 md:py-16 overflow-hidden">
      <div className="space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 font-display font-bold text-lg uppercase tracking-[0.24em]">medalverse</div>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-[18rem]">
              Meldalverse is an end-to-end admissions platform helping students get accepted through real mentors, proven insider strategies, and verified achievements — all in one place.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#111111]">
                {section.title}
              </h3>
              <ul className="space-y-3 text-sm text-[#6B7280]">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors duration-200 hover:text-[#111111]">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 border-t border-[#E5E7EB] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-[#6B7280]">{FOOTER.legal}</div>
          <div className="flex flex-wrap items-center gap-4 text-[#6B7280]">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] transition hover:border-[#111111] hover:text-[#111111]">
                {social.icon ?? social.label.charAt(0)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
