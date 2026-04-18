'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Phone } from 'lucide-react';
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
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold tracking-wide text-navy">
                BUILDANGLE
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">
                Construction Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange ${
                  pathname === link.href ? 'text-orange' : 'text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+94112345678" className="flex items-center gap-2 text-sm font-medium text-navy hover:text-orange transition-colors">
              <Phone size={18} className="text-orange" />
              <span>+94 11 234 5678</span>
            </a>
            <Link
              href="/quote"
              className="bg-orange hover:bg-orange-dark text-white px-6 py-3 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange/30"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} className="text-navy" /> : <Menu size={28} className="text-navy" />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-navy hover:text-orange py-2 flex items-center justify-between border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={16} className="text-gray-400" />
                </Link>
              ))}
              <Link
                href="/quote"
                className="bg-orange text-white text-center py-4 font-semibold mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}