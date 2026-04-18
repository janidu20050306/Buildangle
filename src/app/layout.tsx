import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/common/CustomCursor';
import AIChatbot from '@/components/common/AIChatbot';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-navy text-cream min-h-screen mesh-bg selection:bg-gold/30 selection:text-gold`}>
        <div className="noise-overlay pointer-events-none" />
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen relative z-10 flex flex-col">
          {children}
        </main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
