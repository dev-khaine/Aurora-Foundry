export type NavigationItem = {
  id: string;
  label: string;
  icon: any;
};

export type ColorToken = {
  name: string;
  value: string;
  shade: number;
};

export type MockMetric = {
  name: string;
  value: number;
  change: string;
  trend: 'up' | 'down';
};

export type SocialPost = {
  id: string;
  platform: 'Instagram' | 'Twitter' | 'LinkedIn';
  content: string;
  likes: number;
  image?: string;
};

export enum ViewState {
  MARKETING = 'MARKETING',
  BRAND_GUIDE = 'BRAND_GUIDE',
  DESIGN_SYSTEM = 'DESIGN_SYSTEM',
  DASHBOARD = 'DASHBOARD',
  EDITOR = 'EDITOR',
  SOCIALS = 'SOCIALS',
  PROFILE = 'PROFILE',
}