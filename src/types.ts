export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  categories: ('Full Stack' | 'Data Science' | 'Machine Learning' | 'Security')[];
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  architectureNote?: string;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  cgpa?: string;
  details?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  type: 'internship' | 'virtual_internship';
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  type: string;
  description: string;
  tags: string[];
}
