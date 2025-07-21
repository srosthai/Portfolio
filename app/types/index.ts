export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
  demo?: string;
  playStore?: string;
  appStore?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
}

export interface NavigationItem {
  name: string;
  id: string;
}

export interface ContactFormData {
  fullName: string;
  contactInfo: string;
  message: string;
}

export interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  url?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  url?: string;
}