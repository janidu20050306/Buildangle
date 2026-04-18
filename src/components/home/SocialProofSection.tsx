'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import Container from '../common/Container';

const clients = [
  { name: 'Royal Lanka Hotels', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop' },
  { name: 'Colombo Business Park', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=80&fit=crop' },
  { name: 'Aqua Properties', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop' },
  { name: 'Green Valley Developers', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop' },
  { name: 'Sunset Resorts', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=80&fit=crop' },
];

const metrics = [
  { number: '98%', label: 'Client Retention' },
  { number: '100%', label: 'Project Delivery' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '50+', label: 'Industry Awards' },
];

const testimonials = [
  {
    quote: "Buildangle didn't just build our villa—they created our dream home. The attention to detail was incredible, and they completed everything on time. We couldn't be happier with the result.",
    name: "Mr. & Mrs. Jayawardene",
    role: "Business Owners",
    location: "Colombo 07",
    image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=200&h=200&fit=crop"
  },
  {
    quote: "After a bad experience with another contractor, Buildangle restored our faith. Professional, transparent, and the quality speak for itself. Our commercial project was delivered exactly as promised.",
    name: "Kumar Silva",
    role: "Director",
    location: "Colombo Business Park",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    quote: "The team's expertise in sustainable building exceeded our expectations. Our energy costs dropped by 40% thanks to their smart design recommendations. Highly recommend!",
    name: "Dr. Anjali Perera",
    role: "Healthcare Investor",
    location: "Nuwara Eliya",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop"
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-20 bg-navy">
      <Container>
        {/* Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 border border-white/10 rounded-xl bg-white/5"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-orange mb-2">{metric.number}</div>
              <div className="text-gray-400 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Trusted by Leading Organizations</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <div className="w-32 h-12 relative flex items-center justify-center bg-white/5 rounded-lg px-4">
                  <span className="text-white/60 font-semibold text-sm">{client.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            What Our <span className="text-orange">Clients Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-orange/30 transition-all duration-300"
            >
              <Quote className="text-orange/30 size-10 mb-4" />
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role} • {testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}