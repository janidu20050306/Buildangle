'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import Container from '../common/Container';

const testimonials = [
  {
    quote: "Buildangle didn't just build our villa—they created our dream home. The attention to detail was incredible, and they completed everything on time. We couldn't be happier with the result.",
    name: "Mr. & Mrs. Jayawardene",
    role: "Business Owners",
    location: "Colombo 07",
    image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    quote: "After a bad experience with another contractor, Buildangle restored our faith. Professional, transparent, and the quality speak for itself. Our commercial project was delivered exactly as promised.",
    name: "Kumar Silva",
    role: "Director",
    location: "Colombo Business Park",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    rating: 5,
  },
  {
    quote: "The team's expertise in sustainable building exceeded our expectations. Our energy costs dropped by 40% thanks to their smart design recommendations. Highly recommend!",
    name: "Dr. Anjali Perera",
    role: "Healthcare Investor",
    location: "Nuwara Eliya",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop",
    rating: 5,
  },
];

const stats = [
  { number: '98%', label: 'Client Retention' },
  { number: '100%', label: 'On-Time Delivery' },
  { number: '4.9/5', label: 'Average Rating' },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            What Our <span className="text-orange">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Buildangle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <Quote className="text-orange/20 size-8 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-navy">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role} • {testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-heading font-bold text-orange mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}