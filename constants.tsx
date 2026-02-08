
import React from 'react';
import { 
  Zap, 
  Wind, 
  Droplets, 
  Flame, 
  ShieldCheck, 
  Cpu,
  Users,
  Target,
  FileCheck,
  Heart
} from 'lucide-react';
import { NavItem, ServiceItem, GalleryItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { id: 'about', label: { en: 'About Us', ar: 'من نحن' } },
  { id: 'services', label: { en: 'Services', ar: 'خدماتنا' } },
  { id: 'gallery', label: { en: 'Projects', ar: 'مشاريعنا' } },
  { id: 'contact', label: { en: 'Contact Us', ar: 'تواصل معنا' } },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    icon: 'wind',
    title: { en: 'HVAC Solutions', ar: 'حلول التكييف والتهوية' },
    description: { 
      en: 'Specialized heating, ventilation, and air conditioning systems for optimal comfort.',
      ar: 'أنظمة التدفئة والتهوية وتكييف الهواء المتخصصة لتحقيق الراحة المثالية.'
    }
  },
  {
    id: 2,
    icon: 'zap',
    title: { en: 'Electrical & Light Current', ar: 'الأنظمة الكهربائية والتيار الخفيف' },
    description: { 
      en: 'Complete electrical infrastructure and low-voltage systems (ELV).',
      ar: 'البنية التحتية الكهربائية الكاملة وأنظمة الجهد المنخفض.'
    }
  },
  {
    id: 3,
    icon: 'droplets',
    title: { en: 'Plumbing Systems', ar: 'أنظمة السباكة' },
    description: { 
      en: 'Reliable water supply and drainage solutions for modern buildings.',
      ar: 'حلول موثوقة لإمدادات المياه وصرفها للمباني الحديثة.'
    }
  },
  {
    id: 4,
    icon: 'flame',
    title: { en: 'Fire Fighting & Safety', ar: 'مكافحة الحريق والسلامة' },
    description: { 
      en: 'Advanced fire protection and life safety systems to ensure maximum protection.',
      ar: 'أنظمة متقدمة للحماية من الحرائق وسلامة الأرواح لضمان أقصى حماية.'
    }
  },
  {
    id: 5,
    icon: 'cpu',
    title: { en: 'Automation & Security', ar: 'الأتمتة والأنظمة الأمنية' },
    description: { 
      en: 'Intelligent building automation and security systems for smart facilities.',
      ar: 'أنظمة أتمتة المباني الذكية والأنظمة الأمنية للمرافق الحديثة.'
    }
  },
  {
    id: 6,
    icon: 'file-check',
    title: { en: 'Industrial Solutions', ar: 'الحلول الصناعية' },
    description: { 
      en: 'Tailored electromechanical solutions for complex industrial environments.',
      ar: 'حلول كهروميكانيكية مخصصة للبيئات الصناعية المعقدة.'
    }
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, type: 'hvac', image: 'https://picsum.photos/seed/hvac1/800/600', title: { en: 'Central HVAC System', ar: 'نظام تكييف مركزي' } },
  { id: 2, type: 'electrical', image: 'https://picsum.photos/seed/elec1/800/600', title: { en: 'Smart Electrical Panel', ar: 'لوحة كهربائية ذكية' } },
  { id: 3, type: 'plumbing', image: 'https://picsum.photos/seed/plum1/800/600', title: { en: 'Water Filtration Plant', ar: 'محطة تنقية مياه' } },
  { id: 4, type: 'fire', image: 'https://picsum.photos/seed/fire1/800/600', title: { en: 'Automatic Sprinkler System', ar: 'نظام رشاشات تلقائي' } },
  { id: 5, type: 'automation', image: 'https://picsum.photos/seed/auto1/800/600', title: { en: 'Building Management System', ar: 'نظام إدارة المباني' } },
  { id: 6, type: 'hvac', image: 'https://picsum.photos/seed/hvac2/800/600', title: { en: 'Industrial Ventilation', ar: 'تهوية صناعية' } },
];

export const CORE_VALUES = [
  { icon: <Users size={32} />, title: { en: 'Cooperation', ar: 'التعاون' } },
  { icon: <Target size={32} />, title: { en: 'Effectiveness', ar: 'الفعالية' } },
  { icon: <ShieldCheck size={32} />, title: { en: 'Responsibility', ar: 'المسؤولية' } },
  { icon: <Heart size={32} />, title: { en: 'Respect', ar: 'الاحترام' } },
];
