export interface Project {
  slug: string;
  title: string;
  category: 'Luxury Villa' | 'Modern Home' | 'Renovation' | 'Commercial';
  location: string;
  year: number;
  image: string;
  description: string;
  longDescription?: string;
  area?: number;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: 'modern-luxury-villa-colombo-7',
    title: 'Aura Villa - Gregory\'s Road',
    category: 'Luxury Villa',
    location: 'Colombo 07',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=90',
    description: 'A contemporary 6-bedroom masterpiece blending traditional architecture with minimalist design.',
    featured: true,
    area: 4500
  },
  {
    slug: 'sustainable-retreat-galle',
    title: 'The Eco-Sanctuary',
    category: 'Renovation',
    location: 'Galle Fort',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=90',
    description: 'Heritage-focused net-zero renovation that preserves the 18th-century soul while providing modern comfort.',
    featured: true,
    area: 3200
  },
  {
    slug: 'corporate-hq-kandy',
    title: 'Apex Business Center',
    category: 'Commercial',
    location: 'Kandy Central',
    year: 2025,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90',
    description: 'A landmark institutional complex that sets new standards for vertical offices in the Hill Country.',
    featured: true,
    area: 12000
  },
  {
    slug: 'minimalist-beach-house-bentota',
    title: 'Azure Horizon',
    category: 'Modern Home',
    location: 'Bentota',
    year: 2024,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=90',
    description: 'A glass-oriented beach pavilion designed to maximize ocean views while resisting coastal salinity.',
    area: 2800
  },
  {
    slug: 'urban-loft-colombo-3',
    title: 'Sky Garden Loft',
    category: 'Modern Home',
    location: 'Colombo 03',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=90',
    description: 'Redefining urban living with vertical gardens and industrial-chic aesthetics in the heart of the city.',
    area: 2200
  },
  {
    slug: 'hillside-manor-nuwara-eliya',
    title: 'Mistwood Estate',
    category: 'Luxury Villa',
    location: 'Nuwara Eliya',
    year: 2023,
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=90',
    description: 'A tudor-style revival manor nestled in the misty tea plantations, featuring advanced geothermal heating.',
    area: 5500
  }
];
