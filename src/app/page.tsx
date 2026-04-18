import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import AboutSection from '@/components/home/AboutSection';
import ProcessSection from '@/components/home/ProcessSection';
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
      <SocialProofSection />
      <AboutSection />
      <ProcessSection />
      <ServicesPreview />
      <FeaturedProjects projects={featuredProjects} />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}