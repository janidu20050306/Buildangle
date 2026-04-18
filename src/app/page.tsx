import HeroSection from '@/components/home/HeroSection';
import AboutOwner from '@/components/home/AboutOwner';
import ValuesSection from '@/components/home/ValuesSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTASection from '@/components/home/CTASection';
import { getFeaturedProjects } from '@/lib/projects';

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <AboutOwner />
      <ValuesSection />
      <ServicesPreview />
      <FeaturedProjects projects={featuredProjects} />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}
