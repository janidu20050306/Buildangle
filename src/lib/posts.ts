import { Metadata } from 'next';

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const posts: Post[] = [
  {
    slug: 'sustainable-tropical-design-principles',
    title: '5 Sustainable Design Principles for Tropical Sri Lankan Homes',
    excerpt: 'Explore how we blend ancestral wisdom with modern net-zero engineering to keep luxury homes cool and carbon-neutral.',
    content: `
      <p>In the heart of the tropics, where humidity and heat pose constant challenges, sustainable architecture is not just an option—it's a necessity. At Buildangle, we've spent 17 years perfecting the art of blending ancestral wisdom with modern engineering to create homes that are both environmentally responsible and luxuriously comfortable.</p>

      <h2>1. Natural Ventilation Architecture</h2>
      <p>Traditional Sri Lankan architecture mastered the art of natural cooling through strategic positioning of windows, ventilation corridors, and courtyards. Our approach honours these principles while incorporating modern computational fluid dynamics to optimize airflow patterns. The result? Homes that stay naturally cool without excessive air conditioning.</p>

      <h2>2. Passive Cooling Technologies</h2>
      <p>From traditional "maduwa" concepts to advanced thermal mass materials, we utilize the earth's thermal stability to regulate indoor temperatures. Our signature CoolCore™ wall systems incorporate locally-sourced materials like coral stone and laterite, which have proven thermal properties passed down through generations.</p>

      <h2>3. Rainwater Harvesting Integration</h2>
      <p>With Sri Lanka's monsoonal climate, water management is crucial. Our luxury villas incorporate sophisticated rainwater harvesting systems that blend seamlessly with architectural aesthetics—rooftop collection systems, underground storage, and greywater recycling that maintains lush tropical gardens year-round.</p>

      <h2>4. Native Landscaping as Climate Control</h2>
      <p>We've pioneered the use of vertical gardens and rooftop vegetation not just as aesthetic elements, but as functional climate barriers. Our "Living Facade" systems reduce ambient temperatures by up to 8°C while creating private sanctuaries that connect residents with nature.</p>

      <h2>5. Solar Integration Without Compromise</h2>
      <p>Net-zero living is achievable without sacrificing architectural vision. Our solar panel integration strategies ensure that renewable energy systems become design features rather than afterthoughts—integrated into roofing, facades, and even outdoor structures.</p>

      <p>At Buildangle, sustainable luxury isn't a tagline—it's our founding principle. Every villa we create is a testament to the possibility of harmony between modern living and environmental responsibility.</p>
    `,
    author: 'Mr. Harsha Kodippili',
    authorRole: 'Founder & CEO',
    authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    date: 'April 12, 2026',
    readTime: '08 Min Read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1448630360428-654a6575399c?w=1200&q=80',
    tags: ['Sustainability', 'Tropical Architecture', 'Net-Zero', 'Luxury Homes']
  },
  {
    slug: 'future-of-smart-homes-tradition',
    title: 'The Future of Smart Homes: Where Technology Meets Tradition',
    excerpt: 'Seamless integration of IoT ecosystems within heritage-focused architecture. How to scale intelligence without losing the soul.',
    content: `
      <p>The question isn't whether a luxury home should be smart—it's how to make technology disappear into the background while still delivering a living experience that responds to every need. At Buildangle, we believe that true luxury lies in invisibility: technology that anticipates needs before they arise.</p>

      <h2>The Invisible Revolution</h2>
      <p>Our Smart Climate™ system learns from your preferences, adjusting temperature, humidity, and airflow based on time of day, season, and even your mood. Hidden sensors throughout the villa track environmental conditions and make micro-adjustments you're never aware of—but always appreciate.</p>

      <h2>Heritage Meets Innovation</h2>
      <p>We understand that our clients often value heritage aesthetics. That's why we've developed "HeritageSmart" solutions—technology disguised within traditional architectural elements. Smart lighting behind carved wooden panels. Climate control hidden in coral stone walls. Security systems embedded in antique-inspired door hardware.</p>

      <h2>The Central Nervous System</h2>
      <p>Every Buildangle villa operates on our proprietary "VillaOS" platform—an intuitive interface accessible via custom wall-mounted panels, tablets, or voice command. But the real intelligence lives in the background: predictive algorithms that learn your patterns and prepare your home before you arrive.</p>

      <h2>Security Without Fortress Mentality</h2>
      <p>Our security systems are comprehensive yet unobtrusive. Biometric access integrated into decorative elements. Perimeter detection that activates landscape lighting. AI-driven threat assessment that distinguishes between a fallen branch and potential intrusion.</p>

      <p>The future of luxury living isn't about more technology—it's about technology that disappears, leaving only the experience of living beautifully.</p>
    `,
    author: 'Eng. Priyantha Silva',
    authorRole: 'Lead Structural Engineer',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    date: 'March 28, 2026',
    readTime: '12 Min Read',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    tags: ['Smart Homes', 'IoT', 'Innovation', 'Technology']
  },
  {
    slug: 'renovating-coastal-villas-guide',
    title: 'Coastal Construction: Combatting Salt & Humidity in Style',
    excerpt: 'Choosing the right materials for villas in Galle and Bentota. A guide to salt-resistant luxury finishes.',
    content: `
      <p>The salty air that makes coastal living so desirable is simultaneously one of construction's greatest enemies. At Buildangle, we've developed specialized expertise in creating coastal luxury that stands the test of time—even in the harshest marine environments.</p>

      <h2>Material Selection: The Foundation of Longevity</h2>
      <p>Not all stone is created equal. For our coastal projects, we specify premium granite and certain limestones that have proven salt-resistant over decades. Our "Marine-Grade Specification" document, developed through years of coastal work, outlines precisely which materials will thrive in each specific microclimate.</p>

      <h2>Protective Coatings and Treatments</h2>
      <p>Even the most resilient materials benefit from modern protection. We utilize nano-coating technologies that create invisible barriers against salt penetration while maintaining the natural aesthetic of the material. These treatments are reapplied as part of our comprehensive maintenance programs.</p>

      <h2>Engineering for Corrosion Resistance</h2>
      <p>Every metal element in our coastal projects receives special attention. From structural reinforcement to decorative hardware, we specify marine-grade stainless steel, specialized alloys, or intelligent material substitution. Our engineering team maintains relationships with specialized suppliers who understand the unique demands of tropical marine environments.</p>

      <h2>Ventilation as Defense</h2>
      <p>The most effective defense against salt damage is often the simplest: proper ventilation. Our coastal designs maximize natural airflow while protecting interiors from salt spray. Cross-ventilation patterns, covered verandas, and strategic opening placement all contribute to a home that breathes—and survives.</p>

      <p>Building on the coast shouldn't mean constant maintenance and anxiety. With proper planning, materials, and engineering, your beachside villa can be a legacy property—passed down through generations while maintaining its original beauty.</p>
    `,
    author: 'Ar. Sameea Wijetunge',
    authorRole: 'Head Architect',
    authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    date: 'March 15, 2026',
    readTime: '10 Min Read',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80',
    tags: ['Coastal Construction', 'Materials', 'Technical', 'Maintenance']
  }
];

export function getPost(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostMetadata(slug: string): Metadata | undefined {
  const post = getPost(slug);
  if (!post) return undefined;

  return {
    title: `${post.title} | Buildangle Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}