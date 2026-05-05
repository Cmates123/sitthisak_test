'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROGRAMS, NAV_FEATURES, NAV_RESOURCES, NAV_COMPANY, NAV_CONTACT } from '@/lib/content';
import HeroButton from '@/components/shared/HeroButton';

// ─── Typography tokens ────────────────────────────────────────────────────────
const FONT_SANS    = "'Outfit', ui-sans-serif, system-ui, sans-serif";
const FONT_DISPLAY = "'Chillax', ui-sans-serif, system-ui, sans-serif";

const NAV_ITEM_BASE = {
  fontFamily: FONT_SANS,
  fontWeight: 500,
  fontSize: '14px',
  letterSpacing: '-0.03em',
} as const;

const DROPDOWN_TITLE = {
  fontFamily: FONT_SANS,
  fontWeight: 600,
  fontSize: '15px',
  color: 'rgb(17,17,17)',
  letterSpacing: '-0.02em',
} as const;

const DROPDOWN_SUB = {
  fontFamily: FONT_SANS,
  fontWeight: 400,
  fontSize: '13px',
  color: 'rgb(107,114,128)',
  marginTop: '4px',
  lineHeight: '1.5',
} as const;

// Border helpers for 2-col grids
function cellBorder(i: number, total: number, cols = 2) {
  return {
    borderBottom: i < total - cols ? '1px solid rgba(0,0,0,0.06)' : 'none',
    borderRight: i % cols === 0 ? '1px solid rgba(0,0,0,0.06)' : 'none',
  };
}

// ─── Small SVG icons ──────────────────────────────────────────────────────────
function HexagonLogo() {
  return (
    <img
      src="/Screenshot_2569-05-06_at_04.21.11-removebg-preview.png"
      alt="Medalverse logo"
      width={28}
      height={28}
      style={{ objectFit: 'contain' }}
    />
  );
}

function ChevronDownIcon({ rotated }: { rotated?: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
      style={{ transition: 'transform 150ms', transform: rotated ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path d="M3 5L7 9L11 5" stroke="rgb(27,28,27)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="rgb(27,28,27)" strokeWidth="1.2" />
      <ellipse cx="8" cy="8" rx="2.8" ry="6.5" stroke="rgb(27,28,27)" strokeWidth="1.2" />
      <path d="M1.5 8h13M2 5.5h12M2 10.5h12" stroke="rgb(27,28,27)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

// ─── Dropdown content renderers ───────────────────────────────────────────────
const PROGRAM_ORDER = ['bascii', 'ise', 'inda'] as const;

function ProgramDropdown() {
  const items = PROGRAM_ORDER.map(slug => PROGRAMS.find(p => p.slug === slug)).filter(Boolean) as typeof PROGRAMS;
  return (
    <div className="grid grid-cols-2">
      {items.map((prog, i) => (
        <a key={prog.slug} href="#programs" className="flex flex-col px-7 py-5 hover:bg-[#F8F8F7] transition-colors" style={cellBorder(i, items.length)}>
          <span style={{ fontFamily: FONT_DISPLAY, fontWeight: 700, fontSize: '16px', color: 'rgb(17,17,17)', letterSpacing: '-0.02em' }}>
            {prog.name}
          </span>
          <span style={{ fontFamily: FONT_SANS, fontWeight: 400, fontSize: '13px', color: 'rgb(107,114,128)', marginTop: '3px' }}>
            Chulalongkorn University
          </span>
        </a>
      ))}
    </div>
  );
}

function RichDropdown({ items, href }: { items: { title: string; description: string }[]; href: string }) {
  return (
    <div className="grid grid-cols-2">
      {items.map((item, i) => (
        <a key={item.title} href={href} className="flex flex-col px-7 py-5 hover:bg-[#F8F8F7] transition-colors" style={cellBorder(i, items.length)}>
          <span style={DROPDOWN_TITLE}>{item.title}</span>
          <span style={DROPDOWN_SUB}>{item.description}</span>
        </a>
      ))}
    </div>
  );
}

function CompanyDropdown({ items }: { items: { title: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-2" style={{ width: '560px' }}>
      {items.map((item, i) => (
        <a key={item.title} href={item.href} className="flex items-center px-7 py-6 hover:bg-[#F8F8F7] transition-colors" style={cellBorder(i, items.length)}>
          <span style={{ fontFamily: FONT_SANS, fontWeight: 500, fontSize: '16px', color: 'rgb(17,17,17)', letterSpacing: '-0.02em' }}>
            {item.title}
          </span>
        </a>
      ))}
    </div>
  );
}

// ─── Mobile sub-items (mirrors desktop dropdowns) ─────────────────────────────
type MobileSubItem = { label: string; href: string };

function getMobileSubItems(label: string): MobileSubItem[] {
  if (label === 'Program')    return PROGRAMS.map(p => ({ label: p.name, href: '#programs' }));
  if (label === 'Features')   return NAV_FEATURES.map(f => ({ label: f.title, href: '#tools' }));
  if (label === 'Resources')  return NAV_RESOURCES.map(r => ({ label: r.title, href: '#' }));
  if (label === 'Company')    return NAV_COMPANY.map(c => ({ label: c.title, href: c.href }));
  if (label === 'Contact Us') return NAV_CONTACT.map(c => ({ label: c.title, href: c.href }));
  return [];
}

// ─── Main component ───────────────────────────────────────────────────────────
const NAV_DROPDOWN_KEYS = new Set(['Program', 'Features', 'Solutions', 'Resources', 'Company', 'Contact Us']);

export default function Header() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [openDropdown, setOpenDropdown]     = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [langOpen, setLangOpen]             = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [lang, setLang]                     = useState<'EN' | 'TH'>('EN');

  function getDropdownContent(key: string) {
    if (key === 'Program')    return <ProgramDropdown />;
    if (key === 'Features')   return <RichDropdown items={NAV_FEATURES} href="#tools" />;
    if (key === 'Resources')  return <RichDropdown items={NAV_RESOURCES} href="#" />;
    if (key === 'Company')    return <CompanyDropdown items={NAV_COMPANY} />;
    if (key === 'Contact Us') return <CompanyDropdown items={NAV_CONTACT} />;
    return null;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-5">
        <div className="max-w-330 mx-auto bg-white/97 backdrop-blur-xl border border-[rgba(0,0,0,0.08)] shadow-[0_2px_16px_rgba(0,0,0,0.07)] rounded-2xl px-5 lg:px-6 h-14 flex items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0">
            <HexagonLogo />
            <span className="lowercase" style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, fontSize: '22.86px', color: 'rgb(60,57,54)', letterSpacing: '-0.01em', lineHeight: 1 }}>
              medalverse
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NAV_LINKS.map((link) => {
              const hasDropdown = NAV_DROPDOWN_KEYS.has(link.label);
              const isOpen = openDropdown === link.label;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-lg transition-colors duration-150 whitespace-nowrap"
                    style={{
                      ...NAV_ITEM_BASE,
                      color: isOpen ? 'rgb(37,99,235)' : 'rgb(27,28,27)',
                      backgroundColor: isOpen ? 'rgba(219,234,254,0.7)' : 'transparent',
                    }}
                  >
                    {link.label}
                    {hasDropdown && <ChevronDownIcon rotated={isOpen} />}
                  </a>

                  {hasDropdown && isOpen && (
                    <div className="absolute top-full left-0 pt-3 z-50">
                      <div className="bg-white border border-[rgba(0,0,0,0.07)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]" style={{ width: '660px' }}>
                        {getDropdownContent(link.label)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right — login + language */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <HeroButton href="#" dark sm>Login</HeroButton>

            <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
              <button
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors duration-150"
                style={{ ...NAV_ITEM_BASE, color: langOpen ? 'rgb(37,99,235)' : 'rgb(27,28,27)', backgroundColor: langOpen ? 'rgba(219,234,254,0.7)' : 'transparent' }}
              >
                <GlobeIcon />
                <span>{lang}</span>
                <ChevronDownIcon rotated={langOpen} />
              </button>

              {langOpen && (
                <div className="absolute top-full right-0 pt-3 z-50">
                  <div className="bg-white border border-[rgba(0,0,0,0.07)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden" style={{ minWidth: '160px' }}>
                    {(['EN', 'TH'] as const).map((value, i) => (
                      <button
                        key={value}
                        onClick={() => { setLang(value); setLangOpen(false); }}
                        className="w-full text-left px-6 py-4 hover:bg-[#F8F8F7] transition-colors"
                        style={{ fontFamily: FONT_SANS, fontWeight: 500, fontSize: '15px', color: 'rgb(17,17,17)', letterSpacing: '-0.02em', borderBottom: i === 0 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                      >
                        {value === 'EN' ? 'English (EN)' : 'Thai (TH)'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[#F2F1EE] transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{ color: 'rgb(27,28,27)' }}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-17 left-4 right-4 z-40 bg-white border border-[rgba(0,0,0,0.08)] shadow-lg rounded-2xl px-5 pt-3 pb-5 max-h-[80vh] overflow-y-auto">
          <nav aria-label="Mobile navigation">
            <ul className="space-y-0.5 mb-4">
              {NAV_LINKS.map((link) => {
                const subItems = getMobileSubItems(link.label);
                const expanded = mobileExpanded === link.label;
                return (
                  <li key={link.label}>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 rounded-xl transition-colors hover:bg-[#F8F7F4]"
                      style={{ ...NAV_ITEM_BASE, color: 'rgb(27,28,27)' }}
                      onClick={() => subItems.length > 0 ? setMobileExpanded(expanded ? null : link.label) : setMobileOpen(false)}
                    >
                      {link.label}
                      {subItems.length > 0 && <ChevronDownIcon rotated={expanded} />}
                    </button>
                    {subItems.length > 0 && expanded && (
                      <ul className="ml-4 mb-1 space-y-0.5">
                        {subItems.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 rounded-lg hover:bg-[#F5F5F4] transition-colors"
                              style={{ fontFamily: FONT_SANS, fontWeight: 400, fontSize: '13px', color: 'rgb(107,114,128)', letterSpacing: '-0.02em' }}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between pt-3 border-t border-[rgba(0,0,0,0.06)]">
              <HeroButton href="#" dark sm>Login</HeroButton>
              <div className="relative">
                <button
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-[#F5F5F4] transition-colors"
                  style={{ ...NAV_ITEM_BASE, color: 'rgb(27,28,27)' }}
                  onClick={() => setMobileLangOpen(v => !v)}
                >
                  <GlobeIcon />
                  <span>{lang}</span>
                  <ChevronDownIcon rotated={mobileLangOpen} />
                </button>
                {mobileLangOpen && (
                  <div className="absolute bottom-full right-0 mb-2 bg-white border border-[rgba(0,0,0,0.07)] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden" style={{ minWidth: '160px' }}>
                    {(['EN', 'TH'] as const).map((value, i) => (
                      <button
                        key={value}
                        onClick={() => { setLang(value); setMobileLangOpen(false); }}
                        className="w-full text-left px-6 py-4 hover:bg-[#F8F8F7] transition-colors"
                        style={{ fontFamily: FONT_SANS, fontWeight: 500, fontSize: '15px', color: 'rgb(17,17,17)', letterSpacing: '-0.02em', borderBottom: i === 0 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                      >
                        {value === 'EN' ? 'English (EN)' : 'Thai (TH)'}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
