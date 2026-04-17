'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Container from '../common/Container';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 bg-gold/5 border border-gold/10 p-10 rounded-sm">
        <Send size={48} className="text-gold mx-auto mb-6" />
        <h3 className="text-2xl font-serif text-gold mb-4 uppercase tracking-widest italic">Connection Established.</h3>
        <p className="text-navy/60 font-light italic text-sm tracking-widest uppercase">We will contact you within 24 business hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          required
          placeholder="Full Legal Name"
          className="w-full bg-navy/5 border border-navy/10 px-8 py-5 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors font-light italic text-sm"
        />
        <input
          type="email"
          required
          placeholder="Private Email Address"
          className="w-full bg-navy/5 border border-navy/10 px-8 py-5 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors font-light italic text-sm"
        />
      </div>
      <input
        type="tel"
        required
        placeholder="International Phone (WhatsApp enabled)"
        className="w-full bg-navy/5 border border-navy/10 px-8 py-5 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors font-light italic text-sm"
      />
      <select className="w-full bg-navy/5 border border-navy/10 px-8 py-5 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors font-light italic text-sm cursor-pointer appearance-none">
        <option value="">Inquiry Type</option>
        <option value="residential">Luxury Residential</option>
        <option value="commercial">Institutional / Commercial</option>
        <option value="renovation">Legacy Renovation</option>
        <option value="sustainable">Sustainable / Net-Zero Build</option>
        <option value="partnership">Global Partnership</option>
      </select>
      <textarea
        required
        placeholder="Brief overview of your requirements..."
        rows={6}
        className="w-full bg-navy/5 border border-navy/10 px-8 py-5 rounded-sm text-navy focus:outline-none focus:border-gold transition-colors font-light italic text-sm resize-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-navy hover:bg-navy/95 text-gold px-12 py-5 rounded-sm text-sm uppercase tracking-[0.5em] font-black transition-all active:scale-95 shadow-xl shadow-navy/10 flex items-center justify-center"
      >
        {status === 'loading' ? 'Encrypting & Sending...' : 'Establish Connection'}
        <Send size={18} className="ml-4" />
      </button>

      <p className="text-center text-[10px] text-navy/30 uppercase tracking-[0.3em] font-black italic">
        "Your data is securely processed as per our executive privacy protocols."
      </p>
    </form>
  );
}
