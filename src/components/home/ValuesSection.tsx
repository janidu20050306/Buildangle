'use client';

import { motion } from 'framer-motion';
import { Shield, Leaf, Hammer, Lightbulb, CheckCircle } from 'lucide-react';
import Container from '../common/Container';

const pillars = [
  {
    title: 'Quality Assured',
    icon: Shield,
    description: 'ISO 9001 certified processes ensuring the highest standards in every project we deliver.',
    features: ['Certified Quality', 'Industry Leading', 'Trusted Excellence']
  },
  {
    title: 'Sustainable Building',
    icon: Leaf,
    description: 'Eco-friendly construction practices that minimize environmental impact while maximizing efficiency.',
    features: ['Green Materials', 'Energy Efficient', 'LEED Certified']
  },
  {
    title: 'Expert Craftsmanship',
    icon: Hammer,
    description: 'Our skilled team of 50+ professionals brings decades of combined experience to every project.',
    features: ['Skilled Team', 'Premium Finish', 'Attention to Detail']
  },
  {
    title: 'Modern Innovation',
    icon: Lightbulb,
    description: 'Cutting-edge construction technology and smart building solutions for the future.',
    features: ['Smart Homes', 'Modern Tech', 'Future Ready']
  }
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
            Our <span className="text-orange">Core Values</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Building on 15+ years of excellence, we deliver projects that exceed expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange/30 hover:shadow-xl hover:shadow-orange/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange group-hover:shadow-lg group-hover:shadow-orange/20 transition-all duration-300">
                <pillar.icon size={32} className="text-orange group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-navy mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {pillar.description}
              </p>
              
              <div className="space-y-2">
                {pillar.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                    <CheckCircle size={12} className="text-orange" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}