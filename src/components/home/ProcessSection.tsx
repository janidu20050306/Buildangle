'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Hammer, Key, CheckCircle, ArrowRight } from 'lucide-react';
import Container from '../common/Container';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Consultation',
    description: 'We visit your site, understand your vision, and provide a detailed proposal with transparent pricing—no hidden costs.',
    duration: '1-2 Days',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Our architects create detailed 3D renderings and blueprints. We refine every detail until you\'re 100% satisfied.',
    duration: '2-4 Weeks',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Construction',
    description: 'Our skilled team builds with precision, keeping you updated weekly. Quality checks at every milestone ensure perfection.',
    duration: '3-12 Months',
  },
  {
    number: '04',
    icon: Key,
    title: 'Handover & Support',
    description: 'Walk into your completed dream home. We provide documentation, warranties, and ongoing support for peace of mind.',
    duration: '1 Day',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Your Project, <span className="text-orange">4 Simple Steps</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From concept to completion, we make building your dream home straightforward and stress-free
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/20 via-orange to-orange/20 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10"
            >
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl hover:border-orange/30 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center">
                    <span className="text-orange font-heading font-bold text-lg">{step.number}</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-orange/10 rounded-xl flex items-center justify-center mb-4">
                  <step.icon size={28} className="text-orange" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Check for last step */}
                {i === steps.length - 1 && (
                  <div className="mt-4 flex items-center gap-2 text-green-600 text-sm">
                    <CheckCircle size={16} />
                    <span>Guaranteed Quality</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            href="/quote"
            className="inline-flex items-center bg-navy text-white px-8 py-4 font-semibold rounded-lg hover:bg-navy/90 transition-colors"
          >
            Start Your Project
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}