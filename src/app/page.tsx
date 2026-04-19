import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/home/SocialProofSection';
import AboutSection from '@/components/home/AboutSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ProcessSection from '@/components/home/ProcessSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import PricingSection from '@/components/home/PricingSection';
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
      <FeaturesSection />
      <ProcessSection />
      <ServicesPreview />
      <FeaturedProjects projects={featuredProjects} />
      <PricingSection />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}