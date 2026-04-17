'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';

const services = [
  {
    title: 'Luxury Residential Villas',
    description: 'Custom-designed, high-end tropical retreats with seamless indoor-outdoor living.',
    image: 'https://images.unsplash.com/photo-1613547843441-75bec6c0667f',
    href: '/services#villas',
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'Modern Construction',
    description: 'Cutting-edge contemporary designs with state-of-the-art building techniques.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    href: '/services#modern',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Heritage & Renovations',
    description: 'Bespoke architectural transformations preserving legacy while enhancing modern comfort.',
    image: 'https://images.unsplash.com/photo-1522781556877-c7140ecc7980',
    href: '/services#renovations',
    colSpan: 'md:col-span-1 lg:col-span-1'
  },
  {
    title: 'Sustainable & Net-Zero',
    description: 'Leading the future of construction with LEED-certified, eco-conscious builds.',
    image: 'https://images.unsplash.com/photo-1448630360428-654a6575399c',
    href: '/services#sustainable',
    colSpan: 'md:col-span-2 lg:col-span-2'
  },
  {
    title: 'Institutional Projects',
    description: 'Private clubs, hotels, and headquarters that set the standard for architectural authority.',
    image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145',
    href: '/services#commercial',
    colSpan: 'md:col-span-3 lg:col-span-4'
  }
];

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-cream text-navy">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-navy"
            >
              Comprehensive <span className="italic">Design-Build</span> <br />
              Excellence Since 2008
            </motion.h2>
          </div>
          <Link href="/services" className="group flex items-center text-sm uppercase tracking-widest font-bold text-gold mt-6 md:mt-0">
            View All Services
            <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden group rounded-lg ${service.colSpan}`}
            >
              <Image
                src={`${service.image}?w=1200&q=80`}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/60 transition-colors duration-500 z-10" />
              
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 flex flex-col justify-end h-full">
                <h3 className="text-xl md:text-2xl font-serif text-cream mb-2 uppercase tracking-wide opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {service.title}
                </h3>
                
                <div className="absolute inset-x-8 bottom-8 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl md:text-2xl font-serif text-gold mb-3 uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-cream/80 text-sm md:text-base leading-relaxed mb-6 font-light line-clamp-2">
                    {service.description}
                  </p>
                  <Link href={service.href} className="text-xs uppercase tracking-widest font-bold text-cream underline decoration-gold underline-offset-8">
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
