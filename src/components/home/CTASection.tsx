'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../common/Container';
import { Phone, Mail, MapPin, ArrowRight, Clock, Shield, CheckCircle } from 'lucide-react';

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

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
              Ready to Start?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Let's Build Something <span className="text-orange"> extraordinary</span> Together
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              Whether you're ready to break ground or just exploring options, we're here to help. 
              Get a free, no-obligation quote within 48 hours. No pressure. No hidden costs. Just expert guidance.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-400">
                <CheckCircle size={18} className="text-orange" />
                <span className="text-sm">Free site visit</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <CheckCircle size={18} className="text-orange" />
                <span className="text-sm">No obligation</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <CheckCircle size={18} className="text-orange" />
                <span className="text-sm">48hr response</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-orange hover:bg-orange-dark text-white px-8 py-4 text-sm font-semibold transition-all hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Get Your Free Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white hover:bg-white hover:text-navy px-8 py-4 text-sm font-semibold transition-all inline-flex items-center justify-center"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Phone */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center mb-4">
                <Phone size={24} className="text-orange" />
              </div>
              <h4 className="text-white font-semibold mb-2">Call Us</h4>
              <p className="text-gray-400 text-sm mb-2">Mon-Sat: 8am - 6pm</p>
              <a href="tel:+94112345678" className="text-orange font-semibold hover:underline">
                +94 11 234 5678
              </a>
            </div>

            {/* Email */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-orange/30 transition-all duration-300">
              <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center mb-4">
                <Mail size={24} className="text-orange" />
              </div>
              <h4 className="text-white font-semibold mb-2">Email Us</h4>
              <p className="text-gray-400 text-sm mb-2">We reply within 24hrs</p>
              <a href="mailto:info@buildangle.com" className="text-orange font-semibold hover:underline">
                info@buildangle.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-orange/30 transition-all duration-300 sm:col-span-2">
              <div className="w-12 h-12 bg-orange/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin size={24} className="text-orange" />
              </div>
              <h4 className="text-white font-semibold mb-2">Visit Our Office</h4>
              <p className="text-gray-400 text-sm">
                No. 45, Gregory's Road, Colombo 07, Sri Lanka
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-heading font-bold text-orange mb-2">15+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-orange mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-orange mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-orange mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}