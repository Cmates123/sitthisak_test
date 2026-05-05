export type MBTI = 'INTP' | 'INTJ' | 'ENFP' | 'ENFJ' | 'INFP' | 'INFJ' | 'ISTP' | 'ISTJ' | 'ENTP' | 'ENTJ' | 'ESTP' | 'ESTJ' | 'ESFP' | 'ESFJ' | 'ISFP' | 'ISFJ';

export interface Mentor {
  id: string;
  name: string;
  mbti: MBTI;
  university: string;
  program: string;
  bio: string;
  teachingTags: string[];
  achievements: string[];
  personalityTraits: string[];
}

export interface JourneyStep {
  index: number;
  title: string;
  description: string;
}

export interface Program {
  slug: string;
  name: string;
  fullName: string;
  blurb?: string;
  components: string[];
  featured?: boolean;
}

export type ToolStatus = 'LIVE NOW' | 'COMING SOON';
export interface Tool {
  id: string;
  title: string;
  status: ToolStatus;
  description: string;
}

export interface Stat {
  value: number | string;
  suffix?: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
