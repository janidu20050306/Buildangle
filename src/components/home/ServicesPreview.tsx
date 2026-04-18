'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Hammer, Home, Building2, Leaf, Shield } from 'lucide-react';
import Container from '../common/Container';

const services = [
  {
    title: 'Luxury Villas',
    description: 'Custom-designed tropical retreats with seamless indoor-outdoor living',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    icon: Home,
    projects: '120+',
  },
  {
    title: 'Modern Homes',
    description: 'Contemporary designs with state-of-the-art building techniques',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    icon: Building2,
    projects: '180+',
  },
  {
    title: 'Commercial Buildings',
    description: 'Professional spaces built to enhance business productivity',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    icon: Building2,
    projects: '85+',
  },
  {
    title: 'Renovations',
    description: 'Transforming existing structures with modern innovations',
    image: 'https://images.unsplash.com/photo-1522781556877-c7140ecc7980?w=800&q=80',
    icon: Hammer,
    projects: '95+',
  },
  {
    title: 'Sustainable Building',
    description: 'Eco-friendly construction with LEED-certified solutions',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80',
    icon: Leaf,
    projects: '45+',
  },
  {
    title: 'Infrastructure',
    description: 'Roads, bridges, and civil engineering projects',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    icon: Shield,
    projects: '30+',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Our <span className="text-orange">Services</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-orange text-white text-sm font-bold px-3 py-1 rounded-full">
                  {service.projects} Projects
                </div>
                <div className="absolute bottom-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <service.icon size={24} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-orange font-semibold text-sm group-hover:underline"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
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
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
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