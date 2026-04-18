'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {/* Initial Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/01.jpg"
            alt="Buildangle Construction"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Video Background with fade */}
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
        
        <div className="absolute inset-0 bg-navy/60 z-10" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent z-15" />
      </div>

      <div className="relative z-30 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-orange/90 text-white text-sm font-semibold px-4 py-2 mb-6 uppercase tracking-wider">
              Building Excellence Since 2008
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              We Build Your <span className="text-orange">Dream</span> <br />
              Into Reality
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              Premium construction and architecture services in Sri Lanka. 
              From luxury villas to sustainable buildings, we deliver excellence in every project.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href="/projects"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-4 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange/30 w-full md:w-auto"
              >
                Our Projects
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 text-sm font-semibold transition-all w-full md:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Projects Completed' },
            { number: '15+', label: 'Years Experience' },
            { number: '200+', label: 'Happy Clients' },
            { number: '50+', label: 'Team Members' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={32} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}