import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/common/CustomCursor';
import AIChatbot from '@/components/common/AIChatbot';

export const metadata: Metadata = {
  title: 'Elite Homes Lanka | Architects of Timeless Luxury',
  description: 'The gold standard in tropical luxury construction. Build your legacy with Sri Lanka\'s premier design-build empire. Founded by Mr. Harsha Kodippili.',
  keywords: ['Luxury Homes Sri Lanka', 'Elite Construction Colombo', 'Sustainable Architecture', 'Modern Villa Design', 'Elite Homes Lanka'],
  openGraph: {
    title: 'Elite Homes Lanka | Architects of Timeless Luxury',
    description: 'Transforming visions into architectural masterpieces since 2008.',
    url: 'https://elitehomes.lk',
    siteName: 'Elite Homes Lanka',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Homes Lanka Luxury Villa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Homes Lanka | Architects of Timeless Luxury',
    description: 'The gold standard in tropical luxury construction.',
    images: ['/images/twitter-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="flex flex-col min-h-full font-sans overflow-x-hidden">
        <Navigation />
        <CustomCursor />
        <AIChatbot />
        <main className="flex-grow pt-24 md:pt-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
