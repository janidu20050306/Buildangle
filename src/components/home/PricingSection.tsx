'use client';

import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';
import Container from '../common/Container';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small renovations and extensions',
    price: 'From',
    amount: 'LKR 15M',
    period: '',
    features: [
      { name: 'Basic consultation & design', included: true },
      { name: 'Structural assessment', included: true },
      { name: 'Material selection', included: true },
      { name: 'Project management', included: true },
      { name: '3D renderings', included: false },
      { name: 'Smart home integration', included: false },
      { name: 'Landscape design', included: false },
      { name: 'Lifetime warranty', included: false },
    ],
    cta: 'Get Quote',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for custom homes & luxury villas',
    price: 'From',
    amount: 'LKR 35M',
    period: '',
    features: [
      { name: 'Full architectural design', included: true },
      { name: 'Structural engineering', included: true },
      { name: 'Premium materials', included: true },
      { name: 'Dedicated project manager', included: true },
      { name: '3D renderings', included: true },
      { name: 'Smart home integration', included: true },
      { name: 'Landscape design', included: false },
      { name: 'Lifetime warranty', included: true },
    ],
    cta: 'Get Quote',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For commercial & large-scale projects',
    price: 'From',
    amount: 'LKR 75M',
    period: '',
    features: [
      { name: 'Turnkey solution', included: true },
      { name: 'Multi-discipline team', included: true },
      { name: 'Luxury finishes', included: true },
      { name: '24/7 site supervision', included: true },
      { name: 'VR walkthrough', included: true },
      { name: 'Home automation', included: true },
      { name: 'Full landscape design', included: true },
      { name: 'Extended warranty', included: true },
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export default function PricingSection() {
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
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
            Simple, <span className="text-orange">Transparent</span> Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No hidden costs. No surprises. Get a detailed quote tailored to your specific project requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'ring-2 ring-orange shadow-2xl scale-105'
                  : 'border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-heading font-bold text-navy mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-500 text-sm">{plan.price}</span>
                  <span className="text-4xl font-heading font-bold text-navy">{plan.amount}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check size={18} className="text-green-500 flex-shrink-0" />
                    ) : (
                      <Minus size={18} className="text-gray-300 flex-shrink-0" />
                    )}
                    <span className={feature.included ? 'text-gray-700 text-sm' : 'text-gray-400 text-sm'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/quote"
                className={`block w-full py-4 text-center rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-orange hover:bg-orange-dark text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-navy'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          *Prices are indicative. Final quote depends on site conditions, design complexity, and material choices.
        </motion.p>
      </Container>
    </section>
  );
}