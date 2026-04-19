'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, CheckCircle, ArrowRight, Star, Shield, Users, Building2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import HeroOrbsScene from '@/components/three/HeroOrbsScene';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="absolute inset-0 -mt-20">
          <Image
            src="/01.jpg"
            alt="Buildangle Construction"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
        </motion.div>
        
        {/* Dark gradient overlay - SaaS style */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-12" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 z-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        {/* 3D Scene */}
        <motion.div style={{ opacity }} className="absolute inset-0 z-15">
          <HeroOrbsScene />
        </motion.div>
      </div>

      <div className="relative z-30 container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badges - SaaS style pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
              <Shield size={16} className="text-orange" />
              <span className="text-white/90 text-sm font-medium">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
              <Users size={16} className="text-orange" />
              <span className="text-white/90 text-sm font-medium">15+ Years</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full">
              <Building2 size={16} className="text-orange" />
              <span className="text-white/90 text-sm font-medium">500+ Projects</span>
            </div>
          </motion.div>

          {/* Main Heading - Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Luxury Construction <br />
              <span className="text-orange">Without The Headache</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              We handle everything from design to completion—so you get a stress-free building experience 
              and a home that's built to last generations. No surprises. No compromises.
            </p>
          </motion.div>

          {/* CTA Buttons - Primary + Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/quote"
              className="group flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 text-base font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-1 w-full sm:w-auto"
            >
              Get Your Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-2 border border-white/20 text-white hover:bg-white hover:text-navy px-8 py-4 text-base font-semibold rounded-xl transition-all w-full sm:w-auto"
            >
              See Our Work
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-400" />
              <span>On-Time, On-Budget</span>
            </div>
          </motion.div>
        </div>

        {/* Stats - Horizontal layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10"
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '200+', label: 'Happy Clients' },
            { number: '50+', label: 'Expert Team' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-orange mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}