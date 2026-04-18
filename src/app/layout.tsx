import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/common/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://buildangle.com'),
  title: 'Buildangle | Construction & Architecture Sri Lanka',
  description: 'Premium construction and architecture services in Sri Lanka. Building excellence since 2008. Luxury villas, modern homes, and sustainable buildings.',
  keywords: ['Construction Sri Lanka', 'Architecture Sri Lanka', 'Luxury Homes', 'Building Company', 'Villa Construction', 'Sustainable Architecture'],
  openGraph: {
    title: 'Buildangle | Construction & Architecture Sri Lanka',
    description: 'Premium construction and architecture services in Sri Lanka.',
    url: 'https://buildangle.com',
    siteName: 'Buildangle',
    images: [
      {
        url: 'https://buildangle.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Buildangle Construction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildangle | Construction & Architecture Sri Lanka',
    description: 'Premium construction and architecture services in Sri Lanka.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body bg-cream text-navy antialiased">
        <CustomCursor />
        <Navigation />
        <main className="min-h-screen relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}