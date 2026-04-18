'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '../common/Container';

const services = [
  {
    title: 'Luxury Villas',
    description: 'Custom-designed, high-end tropical retreats with seamless indoor-outdoor living.',
    image: 'https://images.unsplash.com/photo-1613547843441-75bec6c0667f?w=800&q=80',
    href: '/services#villas',
    colSpan: 'md:col-span-2'
  },
  {
    title: 'Modern Homes',
    description: 'Cutting-edge contemporary designs with state-of-the-art building techniques.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    href: '/services#modern',
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Renovations',
    description: 'Bespoke architectural transformations preserving legacy while enhancing modern comfort.',
    image: 'https://images.unsplash.com/photo-1522781556877-c7140ecc7980?w=800&q=80',
    href: '/services#renovations',
    colSpan: 'md:col-span-1'
  },
  {
    title: 'Sustainable Building',
    description: 'Leading the future of construction with LEED-certified, eco-conscious builds.',
    image: 'https://images.unsplash.com/photo-1448630360428-654a6575399c?w=800&q=80',
    href: '/services#sustainable',
    colSpan: 'md:col-span-2'
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block"
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-heading font-bold text-navy"
            >
              Our <span className="text-orange">Services</span>
            </motion.h2>
          </div>
          <Link href="/services" className="group flex items-center text-sm font-semibold text-navy hover:text-orange mt-6 md:mt-0">
            View All Services
            <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative overflow-hidden group rounded-lg ${service.colSpan} min-h-[280px]`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-heading font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
                <Link href={service.href} className="text-orange font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}