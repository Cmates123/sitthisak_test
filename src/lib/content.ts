import type { Mentor, JourneyStep, Program, Tool, Stat, NavLink } from '@/types/content';

export const NAV_LINKS: NavLink[] = [
  { label: 'Program', href: '#programs' },
  { label: 'Features', href: '#tools' },
  { label: 'Resources', href: '#' },
  { label: 'Company', href: '#' },
  { label: 'Contact Us', href: '#' },
];

export const NAV_CONTACT = [
  { title: 'Line official', href: '#' },
  { title: 'Instagram', href: '#' },
  { title: 'Facebook', href: '#' },
  { title: 'TikTok', href: '#' },
  { title: 'Discord', href: '#' },
  { title: 'Youtube', href: '#' },
  { title: 'X', href: '#' },
];

export const NAV_COMPANY = [
  { title: 'About Us', href: '#' },
  { title: 'Career', href: '#' },
  { title: 'Contact Company', href: '#' },
  { title: 'Become a Mentor', href: '#' },
];

export const NAV_RESOURCES = [
  { title: 'Feature Requests', description: 'Suggest new features and help shape the future of the platform.' },
  { title: 'FAQs', description: 'Find quick answers to common questions about the platform.' },
  { title: 'Changelog', description: 'Stay updated with the latest improvements and new releases.' },
  { title: 'Help Center', description: 'Guides and support to help you get the most out of the platform.' },
  { title: 'Blog', description: 'Insights, updates, and ideas on learning and digital credentials.' },
  { title: 'Discord Community', description: 'Join the community to share ideas, ask questions, and connect with others.' },
];

export const NAV_FEATURES = [
  { title: 'Mentor Matching', description: 'Smart algorithm pairs you with mentors who share your goals and have succeeded on a similar path.' },
  { title: 'Mission Room', description: 'A learning workspace where you create missions, manage tasks, submit work, and track progress on your own schedule.' },
  { title: 'Experience Hub', description: 'An event marketplace where you join activities, build skills, and earn verified credentials.' },
  { title: 'Credential Cloud', description: 'A secure space to store and showcase all your achievements and certifications.' },
  { title: 'Portfolio Link', description: 'A verified personal portfolio CV or resume that you can share with university applications via link or PDF.' },
];

export const HERO = {
  eyebrow: 'University Admission Mentorship',
  headline: 'Looking for a mentor to guide you—from choosing the right major to preparing your scores—all in one place, stress-free?',
  subtitle: 'Get guided every step of the way—from choosing your major to building a strong application—with mentors and tools designed to help you succeed.',
  ctaLabel: 'Book Free Session',
  ctaSecondary: 'Contact Us',
  videoTitle: 'WINNER',
  videoCaption: 'Representing Thailand at the Global Stage',
};

export const STATS: Stat[] = [
  { value: 50, suffix: '+', label: 'Verified Mentors' },
  { value: 95, suffix: '%', label: 'Acceptance Rate' },
  { value: 3, suffix: '', label: 'Top Programs' },
  { value: '∞', suffix: '', label: 'Possibilities' },
];

export const MENTORS: Mentor[] = [
  {
    id: 'thanaphon-y',
    name: 'Thanaphon Y.',
    university: 'Chulalongkorn University',
    program: 'Bachelor of Business Administration (BBA)',
    bio: 'Ranked in the top 10 of my cohort, with a focus on finance and case competitions. I usually break problems down step by step and look for clear, structured solutions.',
    mbti: 'INTP',
    achievements: ['Top 10 Cohort', 'Case Finalist'],
    teachingTags: ['Business', 'Portfolio', 'Interview', 'SAT', 'IELTS'],
    personalityTraits: ['Confident', 'Organized', 'Business', 'Finance', 'Strategy'],
  },
  {
    id: 'chalida-p',
    name: 'Chalida P.',
    university: 'Chulalongkorn University',
    program: 'Communication Arts (International Program)',
    bio: 'I pay attention to how messages are delivered both in tone and visuals and whether they actually connect with people.',
    mbti: 'ENFP',
    achievements: ['Top 10 Cohort', 'Case Finalist'],
    teachingTags: ['Business', 'Portfolio', 'Interview', 'SAT', 'IELTS'],
    personalityTraits: ['Creativity', 'Teamwork', 'Adaptable', 'Creative', 'Content', 'Branding'],
  },
  {
    id: 'nattapon-k',
    name: 'Nattapon K.',
    university: 'Chulalongkorn University',
    program: 'Communication Arts (International Program)',
    bio: 'Awarded in national robotics competitions. I focus on building solutions that are logical, efficient, and easy to understand.',
    mbti: 'ENFP',
    achievements: ['Top 10 Cohort', 'Case Finalist'],
    teachingTags: ['Business', 'Portfolio', 'Interview', 'SAT', 'IELTS'],
    personalityTraits: ['Creativity', 'Teamwork', 'Adaptable', 'Creative', 'Content', 'Branding'],
  },
  {
    id: 'narisa-s',
    name: 'Narisa S.',
    university: 'Chulalongkorn University',
    program: 'Communication Arts (International Program)',
    bio: 'Awarded in national robotics competitions. I focus on building solutions that are logical, efficient, and easy to understand.',
    mbti: 'ENFP',
    achievements: ['Top 10 Cohort', 'Case Finalist'],
    teachingTags: ['Business', 'Portfolio', 'Interview', 'SAT', 'IELTS'],
    personalityTraits: ['Creativity', 'Teamwork', 'Adaptable', 'Creative', 'Content', 'Branding'],
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    index: 1,
    title: 'Match with a mentor',
    description:
      'Tell us your goals—our algorithm pairs you with mentors who’ve succeeded on the same path.',
  },
  {
    index: 2,
    title: '1 on 1 session',
    description:
      'Get a personalized session to clarify your direction, gaps, and next steps—with real insider insight.',
  },
  {
    index: 3,
    title: 'Choose your plan',
    description:
      'Pick the path that fits you best—with clarity and confidence, no second-guessing.',
  },
  {
    index: 4,
    title: 'Get coached end-to-end',
    description:
      'Work with mentor, specialists, and our platform to build every part of your application—from portfolio and exams to interviews—all in one place.',
  },
  {
    index: 5,
    title: 'Choose your buddy',
    description:
      'Select a mentor who stays with you—guiding and supporting you until you get accepted.',
  },
  {
    index: 6,
    title: 'Get accepted',
    description: 'Apply with confidence—no regrets, no “what ifs,” just results.',
  },
];

export const PROGRAMS: Program[] = [
  {
    slug: 'bascii',
    name: 'BAScii',
    fullName: 'Bachelor of Arts and Science in Integrated Innovation',
    blurb: 'Get guided by mentors who were accepted into BAScii—turning your potential into a clear, insider strategy. From choosing your direction to working on your projects, building a strong portfolio, gaining real team tasks experiences, preparing for interviews, and aptitude tests—we guide every step',
    featured: false,
    components: ['SAT Math & Eng', 'Team Dynamics Assessment', 'E-Portfolio', 'Interview', 'Aptitude Test', 'Innovation Idea'],
  },
  {
    slug: 'inda',
    name: 'INDA',
    fullName: 'International Program In Design & Architecture',
    blurb: 'Work with INDA mentors who guide you in building a strong, differentiated creative portfolio—backed by real projects, structured feedback, and clear direction at every stage. From exploring your design identity to crafting a compelling portfolio and preparing for submission, every step is personalized to help you stand out.',
    featured: true,
    components: ['SAT Math & Eng', 'Writing Test', 'E-Portfolio', 'Interview', 'CU-TAD'],
  },
  {
    slug: 'ise',
    name: 'ISE',
    fullName: 'Inter national School of Engineering',
    blurb: 'Work with INDA mentors who guide you in building a strong, differentiated creative portfolio—backed by real projects, structured feedback, and clear direction at every stage. From exploring your design identity to crafting a compelling portfolio and preparing for submission, every step is personalized to help you stand out.',
    featured: false,
    components: ['SAT Math', 'IELTS', 'CU-ATS', 'Interview', 'Portfolio'],
  },
];

export const TOOLS: Tool[] = [
  {
    id: 'create-mission',
    title: 'Create Your Mission',
    status: 'COMING SOON',
    description: 'Tell Medalverse your goal. Mission Room\'s AI maps out exactly which experiences will get you there — with a live tracker showing your application readiness as you progress.',
  },
  {
    id: 'explore-marketplace',
    title: 'Explore the Marketplace',
    status: 'LIVE NOW',
    description: 'Browse verified workshops, competitions, internships, and programs in one place. Every opportunity is curated, credible, and matched to your goal — no more hunting, no more guessing if it\'s legit.',
  },
  {
    id: 'earn-credentials',
    title: 'Earn Verified Credentials',
    status: 'LIVE NOW',
    description: 'Every activity you complete earns a blockchain-secured credential, stored automatically in your Credential Cloud. Organized, tamper-proof, and ready to share.',
  },
  {
    id: 'share-impact',
    title: 'Share With Maximum Impact',
    status: 'COMING SOON',
    description: 'Let Medalverse\'s AI Storyteller turn everything you\'ve done into a compelling narrative that highlights your strengths. Share as a link, PDF, or verified profile. Walk in already ahead.',
  },
];

export const FOOTER = {
  tagline: 'Medalverse is an end-to-end admissions platform helping students get accepted through real mentors, proven insider strategies, and verified achievements—all in one place.',
  legal: `© 2026 Medalverse. All Rights Reserved.`,
};

export const FOOTER_SECTIONS = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Become a Mentor', href: '#' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Mentor Matching', href: '#' },
      { label: 'Mission Room', href: '#' },
      { label: 'Experience Hub', href: '#' },
      { label: 'Credential Cloud', href: '#' },
      { label: 'Portfolio link', href: '#' },
      { label: 'Event Organizers', href: '#' },
      { label: 'Credential Issuers', href: '#' },
      { label: 'Advertisers', href: '#' },
      { label: 'Universities', href: '#' },
      { label: 'Companies', href: '#' },
      { label: 'Schools', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Feature Requests', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Discord Community', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Report Issue', href: '#' },
    ],
  },
];
