import { FOOTER, FOOTER_SECTIONS } from '@/lib/content';

const SOCIAL_LINKS = [
  { label: 'Line',      src: '/line.png',     href: '#' },
  { label: 'Facebook',  src: '/facebook.png',  href: '#' },
  { label: 'X',         src: '/x.png',         href: '#' },
  { label: 'YouTube',   src: '/youtube.png',   href: '#' },
  { label: 'Discord',   src: '/discord.png',   href: '#' },
  { label: 'TikTok',    src: '/tiktok.png',    href: '#' },
  { label: 'Instagram', src: '/ig.png',        href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E7EB] bg-white text-[#111111] px-5 md:px-16 py-12 md:py-16 overflow-hidden">
      <div className="space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <img
                src="/Screenshot_2569-05-06_at_04.21.11-removebg-preview.png"
                alt="Medalverse logo"
                width={22}
                height={22}
                style={{ objectFit: 'contain' }}
              />
              <span className="lowercase" style={{ fontFamily: "'Chillax', ui-sans-serif, system-ui, sans-serif", fontWeight: 500, fontSize: '22.86px', color: 'rgb(60,57,54)', letterSpacing: '-0.01em', lineHeight: 1 }}>medalverse</span>
            </div>
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
              <a key={social.label} href={social.href} aria-label={social.label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5E7EB] bg-white transition hover:border-[#111111]">
                <img src={social.src} alt={social.label} width={28} height={28} style={{ objectFit: 'contain' }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
