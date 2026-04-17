'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountUp from 'react-countup';
import Container from '../common/Container';

const stats = [
  { label: 'Years of Excellence', value: 17, suffix: '+' },
  { label: 'Completed Projects', value: 150, suffix: '+' },
  { label: 'Portfolio Value', value: 150, prefix: '$', suffix: 'M+' },
  { label: 'Team Members', value: 45, suffix: '+' },
  { label: 'International Awards', value: 5, suffix: '' },
];

export default function AboutOwner() {
  return (
    <section className="section-padding bg-cream text-navy">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto group">
              <div className="absolute inset-0 border-[12px] border-gold transform translate-x-6 translate-y-6 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-500" />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
                alt="Mr. Janidu Perera - Founder & CEO"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Narrative + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
              About the Visionary
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Leading with Architectural <br />
              <span className="italic">Excellence Since 2008</span>
            </h2>
            <div className="space-y-6 text-navy/70 leading-relaxed font-light text-lg mb-12">
              <p>
                Founded by <span className="text-navy font-bold">Mr. Janidu Perera</span>, Elite Homes Lanka has redefined the landscape of tropical luxury architecture. Our firm was born from a vision to blend timeless design with sustainable practices, creating spaces that breathe and inspire.
              </p>
              <p>
                With over 17 years of experience, we have transformed the dreams of high-net-worth individuals and institutional clients into iconic landmarks across Sri Lanka, Maldives, and Singapore.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-navy/10">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl md:text-4xl font-serif font-bold text-gold">
                    {stat.prefix}
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                    {stat.suffix}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-navy/60 font-bold mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
