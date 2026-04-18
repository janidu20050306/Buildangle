'use client';

import { useState } from 'react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-orange/30 shadow-lg shadow-orange/5">
      <Container>
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center rounded-xl shadow-lg shadow-orange/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-heading font-bold text-2xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold tracking-wide text-navy group-hover:text-orange transition-colors">
                BUILDANGLE
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-semibold">
                Construction Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-all hover:bg-orange/10 ${
                  pathname === link.href 
                    ? 'text-orange bg-orange/10' 
                    : 'text-navy hover:text-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+94112345678" 
              className="flex items-center gap-2 text-base font-bold text-navy hover:text-orange transition-colors bg-gray-50 px-4 py-2 rounded-lg border border-gray-200 hover:border-orange"
            >
              <Phone size={20} className="text-orange" />
              <span>+94 11 234 5678</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 bg-orange/10 hover:bg-orange/20 rounded-lg"
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
            className="lg:hidden bg-white border-t-2 border-orange/20 shadow-xl"
          >
            <Container>
              <div className="flex flex-col py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg font-bold px-4 py-3 rounded-lg transition-colors ${
                      pathname === link.href 
                        ? 'text-orange bg-orange/10' 
                        : 'text-navy hover:bg-orange/5 hover:text-orange'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {/* Phone in mobile */}
                <a 
                  href="tel:+94112345678" 
                  className="flex items-center gap-2 text-base font-bold text-navy mt-4 px-4 py-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <Phone size={20} className="text-orange" />
                  <span>+94 11 234 5678</span>
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}