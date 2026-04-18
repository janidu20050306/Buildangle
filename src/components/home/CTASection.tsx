'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../common/Container';

export default function CTASection() {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #f97316 1px, transparent 1px), radial-gradient(circle at 75% 75%, #f97316 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
              Get A Free Quote
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Let's Build Your Dream Project Together
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Contact us today for a free consultation. Our expert team will help you transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-4 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange/30"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white hover:bg-white hover:text-navy px-8 py-4 text-sm font-semibold transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '500+', label: 'Projects Done' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-lg text-center border border-white/10">
                <div className="text-3xl font-heading font-bold text-orange mb-2">{item.number}</div>
                <div className="text-gray-400 text-sm">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}