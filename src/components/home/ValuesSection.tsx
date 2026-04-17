'use client';

import { motion } from 'framer-motion';
import { Hourglass, Leaf, Hammer, Lightbulb } from 'lucide-react';
import Container from '../common/Container';

const pillars = [
  {
    title: 'Timeless Design',
    icon: Hourglass,
    description: 'We create architectural legacies that transcend trends, blending classical elegance with contemporary functionality.',
    philosophy: 'Architecture is the language of history. Our designs are built to stand the test of time, both structurally and aesthetically.'
  },
  {
    title: 'Sustainable Excellence',
    icon: Leaf,
    description: 'Our net-zero builds and eco-friendly practices lead the way in responsible tropical luxury construction.',
    philosophy: 'Sustainability isn\'t a feature; it\'s our foundation. We integrate renewable energy and local materials into every project.'
  },
  {
    title: 'Master Craftsmanship',
    icon: Hammer,
    description: 'Dedicated to the finest details, our team of 45+ artisans ensures every finish is a masterpiece of precision.',
    philosophy: 'Details are not just details; they are the heart of a home. We employ the best craftspeople to ensure perfection.'
  },
  {
    title: 'Visionary Innovation',
    icon: Lightbulb,
    description: 'From smart home IoT ecosystems to modular structures, we push the boundaries of what is possible in construction.',
    philosophy: 'Innovation drives us forward. We utilize cutting-edge technology to enhance comfort, security, and efficiency.'
  }
];

export default function ValuesSection() {
  return (
    <section className="section-padding bg-navy text-cream relative">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-3xl rounded-full -z-10" />

      <Container>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold"
          >
            Mission & Philosophy
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-cream"
          >
            Our Strategic <span className="italic">Positioning Pillars</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="premium-card p-10 group bg-charcoal/30 border-gold/10 hover:border-gold/30 hover:bg-charcoal/50 flex flex-col items-center text-center h-full"
            >
              <div className="p-4 rounded-full bg-gold/10 text-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                <pillar.icon size={36} />
              </div>
              <h3 className="text-2xl font-serif text-gold mb-4 uppercase tracking-wider">{pillar.title}</h3>
              <p className="text-cream/60 leading-relaxed font-light mb-8 flex-grow">
                {pillar.description}
              </p>
              
              <div className="pt-6 border-t border-gold/10 mt-auto">
                <p className="text-[10px] text-gold/40 uppercase tracking-widest font-bold mb-3 italic">Our Philosophy</p>
                <p className="text-xs text-cream/40 leading-relaxed italic">"{pillar.philosophy}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
