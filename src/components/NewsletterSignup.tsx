'use client';

import { useState } from 'react';
import Container from './common/Container';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="section-padding bg-charcoal text-cream border-t border-gold/10">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif text-gold mb-4 uppercase tracking-wider">Join Our Vision</h3>
            <p className="text-cream/60 leading-relaxed font-light text-sm italic">
              Receive exclusive insights on tropical luxury design, sustainable building trends, and our latest project milestones.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="Ex. info@buildangle.lk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/5 border border-gold/20 px-6 py-4 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors text-sm font-light italic"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gold hover:bg-gold/90 text-navy px-10 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.2em] transition-all transform active:scale-95 disabled:opacity-50"
              >
                {status === 'loading' ? 'Joining...' : 'Subscribe'}
              </button>
            </div>
            {status === 'success' && (
              <p className="text-emerald text-sm mt-4 text-center lg:text-left animate-fade-in font-bold italic tracking-widest">
                Welcome to the legacy. You have successfully subscribed.
              </p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}
