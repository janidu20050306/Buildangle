'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Star, CheckCircle, Award, Shield, Users } from 'lucide-react';
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="absolute inset-0 z-0 -mt-16">
          <Image
            src="/01.jpg"
            alt="Buildangle Construction"
            fill
            priority
            className="object-cover brightness-90"
          />
        </motion.div>
        
        <div className="absolute inset-0 z-5 opacity-0 animate-fade-in-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/02.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/40 to-transparent z-12" />
        
        <motion.div style={{ opacity }} className="absolute inset-0 z-15">
          <HeroOrbsScene />
        </motion.div>
      </div>

      <div className="relative z-30 container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Premium Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 bg-orange px-5 py-2.5 rounded-full shadow-lg shadow-orange/30">
              <Award size={18} className="text-white" />
              <span className="text-white text-sm font-bold">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
              <Shield size={18} className="text-orange" />
              <span className="text-white text-sm font-semibold">15+ Years</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/20">
              <Users size={18} className="text-orange" />
              <span className="text-white text-sm font-semibold">500+ Projects</span>
            </div>
          </motion.div>

          {/* Main Heading - Value Driven */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Luxury Construction <br />
              <span className="text-orange">Without The Headache</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
              We handle everything from design to completion—so you get a stress-free building experience 
              and a home that's built to last generations. No surprises. No compromises. Just results.
            </p>

            {/* Dual CTAs - Conversion Focused */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/quote"
                className="bg-orange hover:bg-orange-dark text-white px-10 py-4 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange/40 hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Your Free Quote
              </Link>
              <Link
                href="/projects"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-navy px-10 py-4 text-sm font-semibold transition-all w-full sm:w-auto"
              >
                See Our Work
              </Link>
            </div>

            {/* Quick Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-orange" />
                <span>On-Time, On-Budget</span>
              </div>
            </div>
          </motion.div>

          {/* Stats - Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '200+', label: 'Happy Clients' },
              { number: '50+', label: 'Expert Team' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-orange mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={24} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}