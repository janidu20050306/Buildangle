import HeroSection from '@/components/home/HeroSection';
import AboutOwner from '@/components/home/AboutOwner';
import ValuesSection from '@/components/home/ValuesSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTASection from '@/components/home/CTASection';
import NewsletterSignup from '@/components/NewsletterSignup';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutOwner />
      <ValuesSection />
      <ServicesPreview />
      <FeaturedProjects />
      <TestimonialsCarousel />
      <CTASection />
      <NewsletterSignup />
    </>
  );
}
