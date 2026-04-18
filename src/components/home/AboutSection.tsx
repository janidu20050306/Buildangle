'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../common/Container';
import { ArrowRight, Award, Clock, Shield, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80"
                    alt="Luxury Villa"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80"
                    alt="Modern Home"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                    alt="Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    alt="Commercial"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-4 bg-navy text-white p-6 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-heading font-bold text-orange">15+</div>
                  <div className="text-gray-400 text-xs">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-orange">500+</div>
                  <div className="text-gray-400 text-xs">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-orange">100%</div>
                  <div className="text-gray-400 text-xs">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-orange">50+</div>
                  <div className="text-gray-400 text-xs">Team</div>
                </div>
              </div>
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
              About Buildangle
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
              Building Excellence <span className="text-orange">Since 2008</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Buildangle is Sri Lanka's trusted name in premium construction. Founded by Mr. Harsha Kodippili, 
              we've grown from a small team to one of the most respected construction companies in the country.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              What sets us apart is our commitment to quality, transparency, and client satisfaction. Every project 
              we undertake becomes a testament to our craftsmanship and dedication.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-orange" />
                </div>
                <div>
                  <div className="font-semibold text-navy">ISO 9001 Certified</div>
                  <div className="text-gray-500 text-sm">Quality assured</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-orange" />
                </div>
                <div>
                  <div className="font-semibold text-navy">On-Time Delivery</div>
                  <div className="text-gray-500 text-sm">Always on schedule</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield size={20} className="text-orange" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Transparent Pricing</div>
                  <div className="text-gray-500 text-sm">No hidden costs</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-orange" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Expert Team</div>
                  <div className="text-gray-500 text-sm">50+ professionals</div>
                </div>
              </div>
            </div>

            <Link href="/about" className="inline-flex items-center text-orange font-semibold hover:translate-x-1 transition-transform">
              Learn Our Full Story <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}