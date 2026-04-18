'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Container from '../common/Container';

const services = [
  {
    title: 'Luxury Villas',
    subtitle: 'Bespoke tropical retreats',
    description: 'Custom-designed villas that blend indoor-outdoor living with Sri Lanka\'s natural beauty. Every detail crafted to your lifestyle.',
    benefits: ['Ocean & hill country views', 'Private pools & gardens', 'Smart home integration'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    projects: '120+',
  },
  {
    title: 'Modern Homes',
    subtitle: 'Contemporary living spaces',
    description: 'State-of-the-art homes built with cutting-edge techniques. Open floor plans, sustainable materials, and timeless aesthetics.',
    benefits: ['Energy-efficient design', 'Open-concept layouts', 'Premium finishes'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    projects: '180+',
  },
  {
    title: 'Commercial Buildings',
    subtitle: 'Business spaces that work',
    description: 'Professional environments designed for productivity. From offices to retail, we create spaces that elevate your business.',
    benefits: ['Optimized workflows', 'Brand-aligned design', 'Long-term durability'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    projects: '85+',
  },
  {
    title: 'Renovations',
    subtitle: 'Transform & modernize',
    description: 'Give existing structures new life. We upgrade, extend, and transform properties while maintaining their character.',
    benefits: ['Structural assessments', 'Seamless extensions', 'Modern amenities'],
    image: 'https://images.unsplash.com/photo-1522781556877-c7140ecc7980?w=800&q=80',
    projects: '95+',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            What We Build
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Construction <span className="text-orange">Tailored to You</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every project is unique. We build spaces that reflect your vision and stand the test of time.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${i % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute top-6 left-6 bg-orange text-white text-sm font-bold px-4 py-1.5 rounded-full">
                  {service.projects} Projects
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-heading font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-orange text-sm font-semibold">{service.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={16} className="text-orange flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-orange font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Explore {service.title} <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link 
            href="/services" 
            className="inline-flex items-center bg-navy text-white px-8 py-4 font-semibold rounded-lg hover:bg-navy/90 transition-colors"
          >
            View All Services
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}