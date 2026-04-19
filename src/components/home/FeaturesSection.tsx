'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Zap, 
  Clock, 
  Award, 
  Leaf, 
  PenTool, 
  Home, 
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Container from '../common/Container';
import Link from 'next/link';

const features = [
  {
    icon: Shield,
    title: 'ISO 9001 Certified',
    description: 'Quality management system certified to international standards. Every project undergoes rigorous quality checks.',
    stat: '100%',
    statLabel: 'Quality Score'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect your timeline. Our project management system ensures timely delivery with weekly progress updates.',
    stat: '98%',
    statLabel: 'On-Time'
  },
  {
    icon: Zap,
    title: 'Smart Construction',
    description: 'Energy-efficient building techniques that reduce long-term operating costs while maximizing comfort.',
    stat: '40%',
    statLabel: 'Energy Saved'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '50+ skilled professionals including architects, engineers, and craftsmen with decades of combined experience.',
    stat: '50+',
    statLabel: 'Team Members'
  },
  {
    icon: Leaf,
    title: 'Sustainable Building',
    description: 'Eco-friendly materials and green construction practices for a smaller environmental footprint.',
    stat: '45+',
    statLabel: 'Green Projects'
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized excellence in architectural design and construction quality across Sri Lanka.',
    stat: '15+',
    statLabel: 'Years Experience'
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange text-sm font-semibold uppercase tracking-wider mb-4 block">
            Why Buildangle
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Built Different. <span className="text-orange">Built Better.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine modern construction techniques with traditional craftsmanship to deliver 
            exceptional results that stand the test of time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-gray-100/50 transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                  <feature.icon size={24} className="text-orange group-hover:text-white transition-colors" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-heading font-bold text-navy">{feature.stat}</div>
                  <div className="text-gray-400 text-xs">{feature.statLabel}</div>
                </div>
              </div>
              
              <h3 className="text-lg font-heading font-bold text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link 
            href="/about" 
            className="inline-flex items-center text-orange font-semibold hover:translate-x-1 transition-transform"
          >
            Learn more about us <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}