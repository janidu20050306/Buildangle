'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden -mt-24 md:-mt-32">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/60 z-10" /> {/* Background Overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale-[0.2]"
        >
          {/* Replace with actual high-quality drone footage later */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-luxury-house-exterior-at-dusk-12563-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 block font-medium tracking-widest relative">
            <span className="absolute inset-0 blur-md bg-gold/30 rounded-full"></span>
            <span className="relative">Architects of Timeless Luxury</span>
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-cream mb-8 leading-[1.1] relative">
            Where Vision Meets <br />
            <span className="italic gradient-text-gold drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">Mastery</span> in Sri Lanka
          </h1>
          <p className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Leading the way in ultra-luxury tropical residential and institutional design-build excellence since 2008.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-30">
            <Link
              href="/projects"
              className="bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-black transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]"
            >
              Explore Our Legacy
            </Link>
            <Link
              href="/quote"
              className="border border-cream/30 hover:border-gold hover:text-gold transition-all px-10 py-4 rounded-sm text-sm uppercase tracking-widest font-bold text-cream"
            >
              Private Consultation
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-cream/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
