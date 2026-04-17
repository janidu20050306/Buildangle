'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ChevronRight, ArrowLeft, CheckCircle2, 
  Home, Building2, Hammer, Zap, Leaf, 
  Droplets, ShieldCheck, Mail, Phone, User
} from 'lucide-react';
import Container from '../common/Container';

type Step = 'basics' | 'details' | 'sustainability' | 'contact' | 'review' | 'success';

export default function QuoteFormMultiStep() {
  const [step, setStep] = useState<Step>('basics');
  const [progress, setProgress] = useState(20);
  const [formData, setFormData] = useState({
    projectType: '',
    location: '',
    budget: 50,
    landSize: '',
    stories: '',
    sustainability: [] as string[],
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = (nextStep: Step) => {
    setStep(nextStep);
    const steps: Step[] = ['basics', 'details', 'sustainability', 'contact', 'review', 'success'];
    setProgress(((steps.indexOf(nextStep) + 1) / (steps.length - 1)) * 100);
  };

  const toggleSustainability = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      sustainability: prev.sustainability.includes(val)
        ? prev.sustainability.filter((s) => s !== val)
        : [...prev.sustainability, val],
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 'basics':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="text-3xl font-serif text-gold mb-8 italic uppercase tracking-widest">Project Basics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Luxury Villa', icon: Home, val: 'villa' },
                { label: 'Commercial', icon: Building2, val: 'commercial' },
                { label: 'Renovation', icon: Hammer, val: 'renovate' },
              ].map((item) => (
                <button
                  key={item.val}
                  onClick={() => updateFormData({ projectType: item.val })}
                  className={`flex flex-col items-center justify-center p-8 border rounded-sm transition-all ${
                    formData.projectType === item.val
                      ? 'bg-gold border-gold text-navy shadow-2xl shadow-gold/20'
                      : 'border-gold/20 hover:border-gold/50 text-cream/70 hover:text-gold'
                  }`}
                >
                  <item.icon size={32} className="mb-4" />
                  <span className="text-xs uppercase font-bold tracking-[0.2em]">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-8">
               <div>
                  <label className="text-[10px] uppercase font-bold text-gold/40 mb-4 block tracking-widest italic">Project Location (Sri Lanka / International)</label>
                  <input
                    type="text"
                    placeholder="Ex. Colombo 7, Sri Lanka"
                    value={formData.location}
                    onChange={(e) => updateFormData({ location: e.target.value })}
                    className="w-full bg-charcoal/30 border border-gold/10 px-6 py-5 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors italic font-light"
                  />
               </div>
               <div>
                  <label className="text-[10px] uppercase font-bold text-gold/40 mb-6 block tracking-widest italic flex justify-between">
                     Estimated Investment Tier
                     <span className="text-gold font-bold">LKR {formData.budget} Lakhs+</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="5000"
                    step="50"
                    value={formData.budget}
                    onChange={(e) => updateFormData({ budget: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-gold/10 accent-gold appearance-none cursor-pointer rounded-full"
                  />
                  <div className="flex justify-between text-[10px] text-cream/20 mt-4 font-black uppercase tracking-widest">
                     <span>50L</span>
                     <span>Elite Standard</span>
                     <span>5,000L (5Cr+)</span>
                  </div>
               </div>
            </div>

            <div className="flex justify-end mt-16">
              <button
                disabled={!formData.projectType || !formData.location}
                onClick={() => handleNext('details')}
                className="group flex items-center bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-[0.3em] font-black transition-all disabled:opacity-20"
              >
                Proceed to Details
                <ChevronRight size={18} className="ml-3 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </motion.div>
        );

      case 'details':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="text-3xl font-serif text-gold mb-8 italic uppercase tracking-widest">Architectural Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gold/40 tracking-widest italic">Land Size (Sq. Ft.)</label>
                  <input
                    type="number"
                    placeholder="Ex. 5000"
                    value={formData.landSize}
                    onChange={(e) => updateFormData({ landSize: e.target.value })}
                    className="w-full bg-charcoal/30 border border-gold/10 px-6 py-5 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors font-light italic"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-gold/40 tracking-widest italic">Planned Stories</label>
                  <select
                    value={formData.stories}
                    onChange={(e) => updateFormData({ stories: e.target.value })}
                    className="w-full bg-charcoal/30 border border-gold/10 px-6 py-5 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors font-light italic cursor-pointer"
                  >
                     <option value="">Select Option</option>
                     <option value="1">Single Level Pavilion</option>
                     <option value="2">Duplex (02 Stories)</option>
                     <option value="3">Triplex (03 Stories+)</option>
                     <option value="multi">Institutional Multi-Story</option>
                  </select>
               </div>
            </div>

            <div className="flex justify-between mt-16">
              <button onClick={() => handleNext('basics')} className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold/40 hover:text-gold transition-colors">
                <ArrowLeft size={14} className="mr-2" /> Previous Step
              </button>
              <button
                disabled={!formData.landSize || !formData.stories}
                onClick={() => handleNext('sustainability')}
                className="group flex items-center bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-[0.3em] font-black transition-all disabled:opacity-20"
              >
                Vision & Sustainability
                <ChevronRight size={18} className="ml-3 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </motion.div>
        );

      case 'sustainability':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="text-3xl font-serif text-gold mb-8 italic uppercase tracking-widest">Global Sustainability Goals</h3>
            <p className="text-cream/40 mb-10 font-light italic text-sm">Select the net-zero and eco-conscious features you wish to integrate into your build.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
               {[
                  { id: 'solar', label: 'Solar & Renewable Energy', icon: Zap },
                  { id: 'water', label: 'Rainwater Harvesting Systems', icon: Droplets },
                  { id: 'netzero', label: 'LEED Net-Zero Certification', icon: Leaf },
                  { id: 'smart', label: 'IoT Smart Home Ecosystem', icon: ShieldCheck },
               ].map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleSustainability(goal.id)}
                    className={`flex items-center p-6 border rounded-sm transition-all text-left ${
                      formData.sustainability.includes(goal.id)
                        ? 'bg-gold/10 border-gold text-gold shadow-lg'
                        : 'border-gold/10 hover:border-gold/30 text-cream/50'
                    }`}
                  >
                    <goal.icon size={24} className="mr-6 shrink-0" />
                    <span className="text-xs uppercase font-bold tracking-widest">{goal.label}</span>
                    {formData.sustainability.includes(goal.id) && <CheckCircle2 size={16} className="ml-auto" />}
                  </button>
               ))}
            </div>

            <div className="flex justify-between mt-16">
              <button onClick={() => handleNext('details')} className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold/40 hover:text-gold transition-colors">
                <ArrowLeft size={14} className="mr-2" /> Previous Step
              </button>
              <button
                onClick={() => handleNext('contact')}
                className="group flex items-center bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-[0.3em] font-black transition-all"
              >
                Identity & Contact
                <ChevronRight size={18} className="ml-3 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </motion.div>
        );

      case 'contact':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <h3 className="text-3xl font-serif text-gold mb-8 italic uppercase tracking-widest">Private Identity Details</h3>
            <div className="space-y-8 mb-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                     <User size={18} className="absolute left-6 top-6 text-gold/30" />
                     <input
                        type="text"
                        placeholder="Full Legal Name"
                        value={formData.name}
                        onChange={(e) => updateFormData({ name: e.target.value })}
                        className="w-full bg-charcoal/30 border border-gold/10 pl-16 pr-6 py-5 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors font-light italic"
                     />
                  </div>
                  <div className="relative">
                     <Mail size={18} className="absolute left-6 top-6 text-gold/30" />
                     <input
                        type="email"
                        placeholder="Private Email Address"
                        value={formData.email}
                        onChange={(e) => updateFormData({ email: e.target.value })}
                        className="w-full bg-charcoal/30 border border-gold/10 pl-16 pr-6 py-5 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors font-light italic"
                     />
                  </div>
               </div>
               <div className="relative">
                  <Phone size={18} className="absolute left-6 top-6 text-gold/30" />
                  <input
                    type="tel"
                    placeholder="International Phone (WhatsApp enabled)"
                    value={formData.phone}
                    onChange={(e) => updateFormData({ phone: e.target.value })}
                    className="w-full bg-charcoal/30 border border-gold/10 pl-16 pr-6 py-5 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors font-light italic"
                  />
               </div>
               <textarea
                 rows={4}
                 placeholder="Specific requirements or visionary notes..."
                 value={formData.message}
                 onChange={(e) => updateFormData({ message: e.target.value })}
                 className="w-full bg-charcoal/30 border border-gold/10 px-6 py-5 rounded-sm text-cream focus:outline-none focus:border-gold transition-colors font-light italic resize-none"
               />
            </div>

            <div className="flex justify-between mt-16">
              <button onClick={() => handleNext('sustainability')} className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold/40 hover:text-gold transition-colors">
                <ArrowLeft size={14} className="mr-2" /> Previous Step
              </button>
              <button
                disabled={!formData.name || !formData.email || !formData.phone}
                onClick={() => handleNext('review')}
                className="group flex items-center bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-[0.3em] font-black transition-all disabled:opacity-20"
              >
                Review Application
                <ChevronRight size={18} className="ml-3 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </motion.div>
        );

      case 'review':
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
            <h3 className="text-3xl font-serif text-gold mb-8 italic uppercase tracking-widest text-center">Final Portfolio Review</h3>
            <div className="bg-charcoal/40 border border-gold/10 p-10 rounded-sm space-y-8 mb-12">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gold/10 pb-8">
                  <div>
                     <span className="text-[10px] uppercase font-bold text-gold/30 block mb-2">Project</span>
                     <p className="text-cream text-lg italic uppercase">{formData.projectType}</p>
                  </div>
                  <div>
                     <span className="text-[10px] uppercase font-bold text-gold/30 block mb-2">Location</span>
                     <p className="text-cream text-lg italic uppercase">{formData.location}</p>
                  </div>
                  <div>
                     <span className="text-[10px] uppercase font-bold text-gold/30 block mb-2">Investment</span>
                     <p className="text-gold text-lg italic font-bold">LKR {formData.budget}L+</p>
                  </div>
                  <div>
                     <span className="text-[10px] uppercase font-bold text-gold/30 block mb-2">Timeline</span>
                     <p className="text-cream text-lg italic uppercase">Priority</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <span className="text-[10px] uppercase font-bold text-gold/30 block mb-4">Sustainability Features Selected</span>
                  <div className="flex flex-wrap gap-3">
                     {formData.sustainability.map(s => (
                        <span key={s} className="bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase px-4 py-1.5 rounded-full font-bold">
                           {s.replace('solar', 'Solar Energy').replace('water', 'Water Mgmt').replace('netzero', 'LEED-NET0').replace('smart', 'IoT Smart Home')}
                        </span>
                     ))}
                     {formData.sustainability.length === 0 && <span className="text-cream/20 text-xs italic">No specific eco-requirements listed.</span>}
                  </div>
               </div>

               <div className="pt-8 border-t border-gold/10 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                     <span className="text-[10px] uppercase font-bold text-gold/30 block mb-3">Identity Contact</span>
                     <p className="text-cream font-serif text-xl tracking-widest uppercase">{formData.name}</p>
                     <p className="text-gold text-sm italic underline font-bold mt-1">{formData.email}</p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                     <span className="text-[10px] uppercase font-bold text-gold/30 block mb-3">Security Passcode Required</span>
                     <div className="w-12 h-1 bg-gold/50" />
                     <p className="text-cream/30 text-[10px] uppercase mt-2 font-black italic tracking-tighter">Verified Enterprise Lead</p>
                  </div>
               </div>
            </div>

            <div className="flex justify-between mt-16">
              <button onClick={() => handleNext('contact')} className="flex items-center text-[10px] uppercase font-bold tracking-widest text-gold/40 hover:text-gold transition-colors">
                <ArrowLeft size={14} className="mr-2" /> Modify Application
              </button>
              <button
                onClick={() => handleNext('success')}
                className="group flex items-center bg-gold hover:bg-gold/90 text-navy px-16 py-6 rounded-sm text-sm uppercase tracking-[0.5em] font-black transition-all shadow-[0_0_50px_rgba(212,175,55,0.3)] animate-pulse"
              >
                Submit Vision
              </button>
            </div>
          </motion.div>
        );

      case 'success':
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="text-center py-20"
          >
            <div className="mb-12 relative inline-block">
               <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-150 animate-pulse" />
               <CheckCircle2 size={120} className="text-gold relative z-10" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-cream mb-6 leading-tight uppercase tracking-tighter">
               Vision Received. <br />
               <span className="italic text-gold italic-emerald">Mastery Initialised.</span>
            </h2>
            <p className="text-cream/60 max-w-lg mx-auto mb-16 font-light text-lg leading-relaxed italic">
               "Your inquiry has been elevated to our VIP concierge. Mr Harsha Kodippili's executive office will review your requirements and reach out within 24 business hours."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link
                href="/projects"
                className="bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-black transition-all shadow-xl"
              >
                Browse Our Legacy
              </Link>
              <Link
                href="/"
                className="text-xs uppercase tracking-[0.4em] font-bold text-cream underline decoration-gold/40 underline-offset-[12px] hover:text-gold transition-all"
              >
                Back to Entrance
              </Link>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="bg-navy py-32 min-h-[90vh] flex items-center relative overflow-hidden">
       {/* Background Aesthetics */}
       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
       <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
       
       <Container>
         <div className="max-w-4xl mx-auto">
            {/* Progress Stepper */}
            {step !== 'success' && (
               <div className="mb-20">
                  <div className="flex justify-between mb-4">
                     <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold">Elite Quote Engine v2.0</span>
                     <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-cream/30">{Math.round(progress)}% Processed</span>
                  </div>
                  <div className="h-1 w-full bg-gold/10 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gold shadow-[0_0_20px_rgba(212,175,55,0.7)]" 
                     />
                  </div>
               </div>
            )}

            <AnimatePresence mode="wait">
               {renderStep()}
            </AnimatePresence>
         </div>
       </Container>
    </div>
  );
}
