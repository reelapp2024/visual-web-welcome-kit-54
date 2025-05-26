
export interface ServiceItem {
  name: string;
  slug: string;
  description?: string;
}

export interface AreaItem {
  name: string;
  slug: string;
  description?: string;
}

export interface ContentConfig {
  services: ServiceItem[];
  areas: AreaItem[];
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
}

export const defaultContent: ContentConfig = {
  services: [
    { name: 'Residential Junk Removal', slug: 'residential-junk-removal' },
    { name: 'Commercial Cleanouts', slug: 'commercial-cleanouts' },
    { name: 'Estate Cleanouts', slug: 'estate-cleanouts' },
    { name: 'Furniture Removal', slug: 'furniture-removal' },
    { name: 'Construction Debris', slug: 'construction-debris' }
  ],
  areas: [
    { name: 'Downtown Metro', slug: 'downtown-metro' },
    { name: 'North Hills', slug: 'north-hills' },
    { name: 'Westside District', slug: 'westside-district' },
    { name: 'East Valley', slug: 'east-valley' },
    { name: 'South Bay Area', slug: 'south-bay-area' }
  ],
  hero: {
    title: 'Professional Junk Removal Services',
    subtitle: 'Fast, reliable, and eco-friendly junk removal for your home or business',
    cta: 'Get Free Estimate'
  },
  about: {
    title: 'About Our Services',
    description: 'We provide professional junk removal and hauling services for residential and commercial properties.'
  }
};
