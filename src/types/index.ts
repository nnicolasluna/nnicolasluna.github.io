export interface PersonalInfo {
  name: string;
  title: string;
  titleHighlight: string;
  summary: string;
  bio: string[];
  location: string;
  cvUrl: string;
}

export interface AboutHighlight {
  value: string;
  label: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Project {
  name: string;
  description: string;
  problemSolved: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLinks;
  about: {
    highlights: AboutHighlight[];
  };
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  projects: Project[];
  education: EducationItem[];
  certifications: Certification[];
}
