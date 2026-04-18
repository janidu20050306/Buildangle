'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../common/Container';
import { ArrowRight } from 'lucide-react';

export default function AboutOwner() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
                alt="Mr. Harsha Kodippili - Founder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/20" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange text-white p-6 rounded-lg shadow-xl">
              <div className="text-4xl font-heading font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
              Building Dreams Since 2008
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Buildangle is a premier construction and architecture company in Sri Lanka, specializing in luxury villas, modern homes, and sustainable buildings. Our founder, Mr. Harsha Kodippili, established the company with a vision to deliver excellence in every project.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience and 500+ successful projects, we have become a trusted name in the construction industry. Our team of expert architects, engineers, and builders work together to transform your vision into reality.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {['Premium Quality', 'On-Time Delivery', 'Expert Team', 'Customer Satisfaction'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange rounded-full" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="inline-flex items-center text-orange font-semibold hover:underline">
              Learn More About Us <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}