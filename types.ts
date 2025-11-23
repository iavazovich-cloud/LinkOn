import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'uz' | 'ru';

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
}

export interface NavItem {
  key: string;
  path: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  category: string;
  image: string;
}
