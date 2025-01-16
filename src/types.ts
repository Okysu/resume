export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface BasicInfo {
  name: string;
  englishName: string;
  location: string;
  phone: string;
  email: string;
  description: string;
  links: {
    resume: string;
    blog: string;
    github: string;
    linkedin: string;
  };
}

export interface Experience {
  id: string;
  title: string;
  role: string;
  period: string;
  description: string;
  highlights?: Array<{
    date: string;
    content: string;
  }>;
}

export interface Award {
  id: string;
  year: number;
  title: string;
  level: string;
  certificate?: string;
  certNumber: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string;
  link?: string;
  image?: string;
}

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
