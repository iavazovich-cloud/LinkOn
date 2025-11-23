import { 
  Palette, 
  Share2, 
  Video, 
  Megaphone, 
  Globe, 
  Lightbulb, 
  Camera,
} from 'lucide-react';
import { ServiceItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'about', path: '/about' },
  { key: 'studio', path: '/studio' },
  { key: 'blog', path: '/blog' },
];

export const SERVICE_ICONS = {
  branding: Palette,
  smm: Share2,
  production: Video,
  ads: Megaphone,
  web: Globe,
  strategy: Lightbulb,
  studio: Camera
};

export const COLORS = {
  primary: '#6366f1', // Indigo 500
  secondary: '#ec4899', // Pink 500
  dark: '#050507',
  glass: 'rgba(255, 255, 255, 0.05)',
};
