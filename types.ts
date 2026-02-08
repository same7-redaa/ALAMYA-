
export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: {
    en: string;
    ar: string;
  };
}

export interface ServiceItem {
  id: number;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  icon: string;
}

export interface GalleryItem {
  id: number;
  type: 'hvac' | 'electrical' | 'plumbing' | 'fire' | 'automation';
  image: string;
  title: { en: string; ar: string };
}
