import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Medalverse — University Admission Mentorship',
  description:
    'Connect with verified Chulalongkorn University mentors. Get personalized guidance from choosing the right major to preparing your scores—all in one place, stress-free.',
  openGraph: {
    title: 'Medalverse — University Admission Mentorship',
    description: 'Connect with verified mentors from top Thai universities.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F8F7F4] text-[#111111] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
