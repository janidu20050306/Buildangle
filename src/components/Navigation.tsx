'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Container from './common/Container';

const navLinks = [
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/80 backdrop-blur-xl border-b border-gold/10 py-4'
          : 'bg-transparent py-8'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tighter text-gold leading-none">
              ELITE HOMES
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-cream/70 mt-1">
              LANKA • EST 2008
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-widest transition-colors hover:text-gold ${
                  pathname === link.href ? 'text-gold' : 'text-cream/90'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/quote"
              className="bg-gold hover:bg-gold/90 text-navy px-6 py-3 rounded-sm text-xs uppercase tracking-widest font-bold transition-all transform hover:scale-105"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
            className="absolute top-full left-0 right-0 bg-navy border-b border-gold/20 md:hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-serif text-cream hover:text-gold transition-colors flex items-center justify-between"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={16} className="text-gold" />
                </Link>
              ))}
              <Link
                href="/quote"
                className="bg-gold text-navy text-center py-4 rounded-sm font-bold uppercase tracking-widest mt-4"
                onClick={() => setIsOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
