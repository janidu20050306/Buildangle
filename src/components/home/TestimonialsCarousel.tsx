'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Quote, Star } from 'lucide-react';
import Container from '../common/Container';

const testimonials = [
  {
    name: 'Mr. & Mrs. Jayawardene',
    role: 'Business Owners',
    company: 'Jayawardene Enterprises',
    photo: 'https://images.unsplash.com/photo-1544168190-79c17527004f?w=400&h=400&fit=crop',
    quote: 'Buildangle transformed our vision into reality. The attention to detail, sustainable design, and craftsmanship are unmatched in Sri Lanka. They didn\'t just build a house; they built our legacy.',
    rating: 5,
  },
  {
    name: 'Dr. Sameera Perera',
    role: 'Chief Medical Officer',
    company: 'Capital Health',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
    quote: 'From inception to handover, the process was seamless. Their expertise in tropical luxury architecture ensured our home remains cool and energy-efficient even in the heart of the city.',
    rating: 5,
  },
  {
    name: 'Mrs. Ananda De Silva',
    role: 'Private Investor',
    company: 'Global Ventures',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    quote: 'The 3D virtual tour allowed us to visualize the design clearly before a single brick was laid. Their commitment to international standards of excellence is what sets them apart.',
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding bg-cream text-navy overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-navy"
          >
            Echoes of <span className="italic">Excellence</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 h-[500px] md:h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center text-center space-y-10"
            >
              <Quote size={48} className="text-gold/30" />
              
              <p className="text-2xl md:text-3xl font-serif italic text-navy/80 leading-relaxed font-light">
                "{testimonials[index].quote}"
              </p>

              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold/20 mb-4 group shadow-lg">
                  <Image
                    src={testimonials[index].photo}
                    alt={testimonials[index].name}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="mb-2 flex space-x-1">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif text-gold uppercase tracking-widest">{testimonials[index].name}</span>
                  <span className="text-[10px] text-navy/50 tracking-widest uppercase font-bold mt-1">
                    {testimonials[index].role} • {testimonials[index].company}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-20 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === i ? 'w-10 bg-gold' : 'w-2 bg-gold/20'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
