'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-orange flex items-center justify-center rounded-lg">
              <span className="text-white font-heading font-bold text-2xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold tracking-wide text-navy">
                BUILDANGLE
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-medium">
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
                className={`text-base font-semibold transition-colors hover:text-orange ${
                  pathname === link.href ? 'text-orange' : 'text-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:+94112345678" 
              className="flex items-center gap-2 text-sm font-medium text-navy hover:text-orange transition-colors"
            >
              <Phone size={18} className="text-orange" />
              <span className="font-semibold">+94 11 234 5678</span>
            </a>
            <Link
              href="/quote"
              className="bg-orange hover:bg-orange-dark text-white px-8 py-3.5 text-sm font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
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
            className="lg:hidden bg-white border-t border-gray-200 shadow-xl"
          >
            <Container>
              <div className="flex flex-col py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-semibold text-navy hover:text-orange py-3 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/quote"
                  className="bg-orange text-white text-center py-4 font-bold rounded-lg mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}