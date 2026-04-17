'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Briefcase, Star, ChevronRight, Award, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import Container from '@/components/common/Container';

const team = [
  { name: 'Mr. Harsha Kodippili', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop' },
  { name: 'Ar. Sameea Wijetunge', role: 'Head Architect', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop' },
  { name: 'Eng. Priyantha Silva', role: 'Lead Structural Engineer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  { name: 'Ms. Nelum Jayawardene', role: 'Design Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
];

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pt-24 text-navy">
      <Container className="mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
            The Elite Architectural Legacy
          </span>
          <h1 className="text-5xl md:text-8xl font-serif text-navy mb-8 leading-tight tracking-tight uppercase">
            The <span className="italic text-gold italic-emerald">Visionary</span> <br /> Behind the Mastery
          </h1>
          <p className="text-navy/40 text-lg md:text-xl font-light leading-relaxed italic tracking-widest max-w-3xl mx-auto">
            "We aren't just building structures. We are crafting the future of tropical luxury, one legacy at a time."
          </p>
        </div>
      </Container>

      {/* Founder's Journey */}
      <section className="section-padding bg-navy text-cream relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-3xl -z-10" />
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
               <div className="lg:col-span-5 relative aspect-square w-full">
                  <div className="absolute inset-0 border-[12px] border-gold transform translate-x-8 translate-y-8 -z-10" />
                  <Image
                     src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop"
                     alt="Mr. Harsha Kodippili"
                     fill
                     className="object-cover grayscale hover:grayscale-0 transition-all duration-[3000ms]"
                  />
                  <div className="absolute bottom-10 right-10 z-20 flex space-x-4">
                     <Link href="#" className="p-3 bg-gold text-navy rounded-full shadow-2xl hover:scale-110 transition-transform">
                        <Briefcase size={20} />
                     </Link>
                  </div>
               </div>

               <div className="lg:col-span-7 space-y-10 group">
                  <div className="mb-12">
                     <span className="text-gold text-[10px] uppercase font-bold tracking-[0.5em] mb-4 block italic">CEO & Principal Strategist</span>
                     <h2 className="text-4xl md:text-5xl font-serif text-gold mb-8 uppercase tracking-tight">Mr. Harsha Kodippili</h2>
                     <div className="space-y-6 text-cream/70 text-lg md:text-xl font-light leading-relaxed italic border-l border-gold/20 pl-10">
                        <p>
                          "My journey began in 2008 with a simple realization: architecture in the tropics was either too grounded in the past or too disconnected from the soul of the land. At Elite Homes Lanka, we bridges that gap."
                        </p>
                        <p>
                          Over the past 17 years, we have scaled from a boutique design house to a $150M+ design-build empire. Every project we undertake is personal—a search for structural perfection and environmental harmony.
                        </p>
                        <p>
                          We lead with a singular mission: to provide our clients not just with a domicile, but with a sanctuary that commands authority and reflects their personal success.
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                     {[
                        { label: 'Milestone', val: 'Est. 2008' },
                        { label: 'Experience', val: '17+ Years' },
                        { label: 'Portfolio', val: '$150M+' },
                        { label: 'Network', val: 'Global Elite' },
                     ].map((item, i) => (
                        <div key={i} className="flex flex-col border-t border-gold/10 pt-6">
                           <span className="text-[10px] uppercase font-bold text-gold/30 mb-2 italic">{item.label}</span>
                           <span className="text-lg font-serif italic text-gold">{item.val}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </Container>
      </section>

      {/* Timeline of Excellence */}
      <section className="section-padding bg-cream">
         <Container>
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">The Strategic Roadmap</span>
               <h2 className="text-4xl md:text-5xl font-serif text-navy uppercase tracking-tight">02 Decades of <span className="italic">Evolution</span></h2>
            </div>

            <div className="relative space-y-24 max-w-4xl mx-auto before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold/20 before:to-transparent">
               {[
                  { yr: '2008', t: 'The Foundation', d: 'Harsha Kodippili establishes a boutique architectural consultancy focused on coastal luxury.' },
                  { yr: '2014', t: 'Design-Build Integration', d: 'Elite Homes scales into a full-service construction firm to ensure surgical precision in execution.' },
                  { yr: '2019', t: 'Global Expansion', d: 'Strategic partnerships established in the Maldives and Singapore for ultra-luxury residential builds.' },
                  { yr: '2024', t: 'The Gold Standard', d: 'Named "Best Sustainable Villa Provider" at the Sri Lankan Architecture Awards.' },
               ].map((item, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                     {/* Circle */}
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gold/40 bg-cream text-gold text-xs font-serif italic z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-gold group-hover:text-navy transition-all duration-700">
                        {item.yr}
                     </div>
                     {/* Content */}
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-8 border border-navy/5 bg-white/50 backdrop-blur-3xl rounded-sm hover:border-gold/30 transition-all shadow-xl shadow-navy/5">
                        <h4 className="text-xl font-serif text-navy italic mb-2 uppercase tracking-widest">{item.t}</h4>
                        <p className="text-xs font-light text-navy/40 leading-relaxed italic">{item.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* Team Showcase */}
      <section className="section-padding bg-navy text-cream overflow-hidden">
         <Container>
            <div className="flex flex-col md:flex-row items-end justify-between mb-20">
               <div>
                  <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">Master Designers & Engineers</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-cream uppercase tracking-tight">The Executive <span className="italic">Artisans</span></h2>
               </div>
               <Link href="/contact" className="text-[10px] uppercase font-black text-gold border-b border-gold/20 pb-4 tracking-[0.4em] hover:tracking-[0.6rem] transition-all duration-700 mt-8 md:mt-0">Join our Elite Team</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {team.map((member, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group cursor-crosshair overflow-hidden"
                  >
                     <div className="aspect-[3/4] relative overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
                        <Image
                           src={member.image}
                           alt={member.name}
                           fill
                           className="object-cover group-hover:scale-110 transition-transform duration-[4000ms]"
                        />
                        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/10 transition-colors duration-1000" />
                        
                        {/* Social Links on Hover */}
                        <div className="absolute top-6 right-6 flex flex-col space-y-4 translate-x-20 group-hover:translate-x-0 transition-transform duration-700">
                           <Link href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-gold hover:text-navy transition-all">
                              <Briefcase size={18} />
                           </Link>
                           <Link href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-gold hover:text-navy transition-all">
                              <Camera size={18} />
                           </Link>
                        </div>
                     </div>
                     <div className="pt-8 text-center border-t border-gold/10 mt-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h4 className="text-2xl font-serif text-gold uppercase tracking-widest">{member.name}</h4>
                        <p className="text-[10px] uppercase font-black text-cream/30 tracking-[0.3em] mt-2 italic">{member.role}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </Container>
      </section>

      {/* Awards & Press */}
      <section className="section-padding bg-cream border-y border-navy/5">
         <Container>
            <div className="text-center mb-20 max-w-2xl mx-auto">
               <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold text-center">Global Recognition</span>
               <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-16 uppercase tracking-tight italic">Accolades & <span className="italic text-gold">Press</span></h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all">
               {[
                  'Architecture Board', 'USGBC Platinum', 'ISO 9001 Certified', 'Sri Lanka Design Guild', 'Global Sustainable Awards'
               ].map((press) => (
                  <div key={press} className="flex flex-col items-center group">
                     <Award className="mb-4 text-navy group-hover:text-gold transition-colors" size={40} />
                     <span className="text-[10px] uppercase font-black tracking-widest text-center">{press}</span>
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* Final CTA Area */}
      <section className="py-40 bg-cream relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-gradient-to-b from-navy/5 to-transparent" />
         <Container className="relative z-10 text-center">
            <h2 className="text-5xl md:text-8xl font-serif text-navy mb-12 uppercase tracking-tighter shadow-navy/5 opacity-10">THE LEGACY LANKA</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
               <Link href="/projects" className="group flex items-center text-sm uppercase tracking-[0.5em] font-black text-navy hover:text-gold transition-all duration-700">
                  <span className="border-b border-navy/10 group-hover:border-gold pb-4">View Full Portfolio of Mastery</span>
                  <ArrowRight size={24} className="ml-6 transition-transform group-hover:translate-x-4" />
               </Link>
            </div>
         </Container>
      </section>
    </div>
  );
}
