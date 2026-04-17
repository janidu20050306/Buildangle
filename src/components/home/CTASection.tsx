'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../common/Container';

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-navy z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-x-0 top-0 h-full bg-gradient-to-br from-gold/20 via-transparent to-emerald/20 blur-3xl rounded-full"
        />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold text-xs uppercase tracking-[0.5em] mb-6 block font-bold">
            Let's Build Your Dream
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-cream mb-10 leading-tight">
            Ready to Reimagine <br />
            <span className="italic italic-gold italic-emerald transition-colors duration-500">Your Space?</span>
          </h2>
          <p className="text-cream/60 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed italic">
            "Your vision is the compass; our mastery is the map. Together, we create a sanctuary that reflects your soul."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link
              href="/quote"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold transition-all transform hover:scale-105 shadow-2xl shadow-gold/10"
            >
              Get Detailed Quote
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto border border-cream/30 hover:border-gold hover:text-gold transition-all px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold text-cream"
            >
              View Project Portfolio
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
