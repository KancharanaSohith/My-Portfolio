export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  longBio: string;
  email: string;
  phone?: string;
  location: string;
  avatarUrl: string;
  resumeUrl?: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export type ProjectSource = 'Work' | 'Personal' | 'Freelance';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  source: ProjectSource;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile' | 'AI/ML' | 'Design';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: 'trophy' | 'award' | 'certificate';
}

export interface Skill {
  name: string;
  level: number; // 1-5 or percentage
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export type ThemeAccent = 'gryffindor' | 'slytherin' | 'ravenclaw' | 'hufflepuff' | 'hogwarts' | 'azure' | 'emerald' | 'amber' | 'violet' | 'rose' | 'slate' | 'indigo';
export type LayoutStyle = 'parchment' | 'darkGrimoire' | 'ministry' | 'minimalist' | 'glassmorphism' | 'brutalist';

export interface PortfolioConfig {
  accent: ThemeAccent;
  layout: LayoutStyle;
  personal: PersonalInfo;
  stats: Stat[];
  projects: Project[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
}
