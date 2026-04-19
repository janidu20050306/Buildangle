'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-100/50 py-3' 
          : 'bg-white py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center rounded-lg shadow-lg shadow-orange/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-heading font-bold text-xl">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-heading font-bold text-navy">
                BUILDANGLE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname === link.href 
                    ? 'text-orange bg-orange/10' 
                    : 'text-gray-600 hover:text-navy hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+94112345678" 
              className="text-sm font-medium text-gray-600 hover:text-navy transition-colors"
            >
              +94 11 234 5678
            </a>
            <Link 
              href="/quote"
              className="flex items-center gap-2 bg-navy hover:bg-navy/90 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-lg hover:shadow-navy/20"
            >
              Get Quote
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-navy" /> : <Menu size={24} className="text-navy" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <Container>
              <div className="flex flex-col py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-base font-medium px-4 py-3 rounded-lg transition-colors ${
                      pathname === link.href 
                        ? 'text-orange bg-orange/10' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link 
                  href="/quote"
                  className="flex items-center justify-center gap-2 bg-navy text-white mx-4 mt-4 px-4 py-3 rounded-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Get Quote <ArrowRight size={16} />
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}