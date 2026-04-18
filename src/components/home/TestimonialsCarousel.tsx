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
    company: 'Colombo',
    photo: 'https://images.unsplash.com/photo-1544168190-79c17527004f?w=200&h=200&fit=crop',
    quote: 'Buildangle transformed our vision into reality. The attention to detail and craftsmanship are unmatched in Sri Lanka.',
    rating: 5,
  },
  {
    name: 'Dr. Sameera Perera',
    role: 'Chief Medical Officer',
    company: 'Colombo 7',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop',
    quote: 'From inception to handover, the process was seamless. Their expertise in tropical architecture is exceptional.',
    rating: 5,
  },
  {
    name: 'Mrs. Ananda De Silva',
    role: 'Private Investor',
    company: 'Bentota',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    quote: 'The 3D virtual tour allowed us to visualize the design clearly. Their commitment to excellence sets them apart.',
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
    <section className="py-24 bg-gray-50 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
            What Our <span className="text-orange">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-32 h-32 shrink-0">
                  <Image
                    src={testimonials[index].photo}
                    alt={testimonials[index].name}
                    fill
                    className="object-cover rounded-full border-4 border-orange/20"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange rounded-full flex items-center justify-center">
                    <Quote size={20} className="text-white" />
                  </div>
                </div>
                
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-orange fill-orange" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 italic leading-relaxed">
                    "{testimonials[index].quote}"
                  </p>
                  
                  <div>
                    <div className="font-heading font-bold text-navy text-lg">
                      {testimonials[index].name}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[index].role} - {testimonials[index].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? 'bg-orange w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}