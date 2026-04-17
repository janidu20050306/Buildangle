import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import { Home, Building2, Hammer, Leaf, Compass, Star, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: 'villas',
    title: 'Luxury Residential Villas',
    icon: Home,
    description: 'Bespoke architectural masterpieces designed for the elite. Our villas blend tropical aesthetics with international luxury standards.',
    features: ['Custom Design & Masterplanning', 'Full Construction Management', 'Smart Home (IoT) Integration', 'Sustainability (Net-Zero) Engineering'],
    budget: 'LKR 5Cr - 20Cr+',
    timeline: '18 - 36 Months',
    image: 'https://images.unsplash.com/photo-1613547843441-75bec6c0667f?w=1200&q=90'
  },
  {
    id: 'modern',
    title: 'Modern Home Construction',
    icon: Building2,
    description: 'Contemporary living spaces focusing on minimalism, natural ventilation, and vertical green integration.',
    features: ['Minimalist Design Principles', 'Modular Construction Options', 'Energy-Efficient Systems', 'Interior-Exterior Transition Optimization'],
    budget: 'LKR 1.5Cr - 8Cr',
    timeline: '12 - 24 Months',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90'
  },
  {
    id: 'renovations',
    title: 'Heritage & Legacy Renovations',
    icon: Hammer,
    description: 'Meticulous restoration of heritage properties, preserving history while infusing modern comfort and structural integrity.',
    features: ['Historical Site Preservation', 'Adaptive Re-use Strategy', 'Material Matching & Restoration', 'Value-Added Structural Scaling'],
    budget: 'LKR 50L - 5Cr',
    timeline: '6 - 18 Months',
    image: 'https://images.unsplash.com/photo-1522781556877-c7140ecc7980?w=1200&q=90'
  },
  {
    id: 'sustainable',
    title: 'Sustainable & Net-Zero Builds',
    icon: Leaf,
    description: 'The future of residential construction. Carbon-neutral homes incorporating advanced renewable systems and local materials.',
    features: ['Solar & Geothermal Integration', 'Rainwater Harvesting Systems', 'Off-grid Capability Options', 'Certified Green Material Selection'],
    budget: 'Variable Pricing',
    timeline: '18 - 36 Months',
    image: 'https://images.unsplash.com/photo-1448630360428-654a6575399c?w=1200&q=90'
  },
  {
    id: 'commercial',
    title: 'Institutional & Commercial',
    icon: Compass,
    description: 'Authoritative commercial complexes, private clubs, and luxury boutiques that represent corporate excellence.',
    features: ['Vertical Office Optimization', 'Hospitality & Boutique Hotels', 'Mixed-use Complex Design', 'Logistics-Centric Construction'],
    budget: 'LKR 5Cr+',
    timeline: '24 - 48 Months',
    image: 'https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=1200&q=90'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen pt-24 text-navy">
      <Container className="mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
            Elite Expertise
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight tracking-tight uppercase">
            Specialized <span className="italic text-gold">Design-Build</span> <br /> Capabilities
          </h1>
          <p className="text-navy/40 text-lg md:text-xl font-light leading-relaxed italic tracking-widest">
            "We offer a full spectrum of architectural and construction services tailored to the vision of high-net-worth clients and institutional entities."
          </p>
        </div>
      </Container>

      {/* Services Main Loop */}
      <section className="space-y-32 mb-40">
        {services.map((service, i) => (
          <div key={service.id} id={service.id} className="group relative overflow-hidden section-padding border-y border-navy/5 bg-white/50 backdrop-blur-3xl min-h-[60vh] flex items-center">
             <Container>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 !== 0 ? 'lg:rtl' : ''}`}>
                   {/* Text Column */}
                   <div className="flex flex-col space-y-8 lg:ltr">
                      <div className="flex items-center text-gold mb-2">
                         <service.icon size={36} />
                         <span className="text-[10px] uppercase font-bold tracking-[0.4em] ml-6 italic">Tier 0{i + 1} Expertise</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-serif text-navy uppercase tracking-tight">{service.title}</h2>
                      <p className="text-navy/60 text-lg leading-relaxed italic font-light italic-gold">{service.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-navy/5">
                        <div className="flex flex-col">
                           <span className="text-[10px] uppercase font-bold text-navy/40 mb-2 tracking-widest">Investment Range</span>
                           <p className="text-gold font-serif text-xl tracking-widest uppercase italic">{service.budget}</p>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[10px] uppercase font-bold text-navy/40 mb-2 tracking-widest">Typical Timeline</span>
                           <p className="text-gold font-serif text-xl tracking-widest uppercase italic">{service.timeline}</p>
                        </div>
                      </div>

                      <ul className="space-y-4 pt-4">
                         {service.features.map(f => (
                            <li key={f} className="flex items-center text-xs uppercase tracking-widest font-black text-navy/80 italic">
                               <ChevronRight size={14} className="text-gold mr-3" />
                               {f}
                            </li>
                         ))}
                      </ul>

                      <div className="pt-10 flex flex-col sm:flex-row gap-8">
                         <Link href="/quote" className="bg-gold hover:bg-gold/90 text-navy px-10 py-5 rounded-sm text-[10px] uppercase tracking-widest font-black transition-all shadow-xl active:scale-95">Inquire Specification</Link>
                         <Link href="/projects" className="flex items-center text-[10px] uppercase tracking-[0.3em] font-black text-navy/40 hover:text-gold transition-colors">
                            <ArrowRight size={14} className="mr-3" /> Explore Related Projects
                         </Link>
                      </div>
                   </div>

                   {/* Image Column */}
                   <div className="relative aspect-video lg:aspect-square w-full group-hover:shadow-2xl transition-all duration-1000 overflow-hidden rounded-sm lg:ltr">
                      <Image
                         src={service.image}
                         alt={service.title}
                         fill
                         className="object-cover grayscale-[0.2] transition-transform duration-[3000ms] group-hover:scale-110 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-1000" />
                   </div>
                </div>
             </Container>
          </div>
        ))}
      </section>

      {/* Methodology Section */}
      <section id="process" className="section-padding bg-navy text-cream">
         <Container>
            <div className="text-center mb-24 max-w-2xl mx-auto">
               <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">The Strategic Mastery</span>
               <h2 className="text-4xl md:text-5xl font-serif text-cream uppercase tracking-tight">Our 07-Step <span className="italic">Visionary Process</span></h2>
               <p className="text-cream/50 mt-6 font-light italic">"From original discovery to legacy handover, we manage every detail with surgical precision."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 text-center pt-10">
               {[
                  'Discovery & Visioning', 'Conceptual Design', 'Detailed Planning', 'Regulatory Approvals', 'Construction Mgmt', 'Quality Assurance', 'Legacy Handover'
               ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center group relative">
                     <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center text-gold font-serif text-2xl mb-6 group-hover:bg-gold group-hover:text-navy transition-all duration-500 shadow-xl shadow-gold/5 italic">
                        0{i + 1}
                     </div>
                     <p className="text-[10px] uppercase font-bold tracking-widest text-cream/70 italic group-hover:text-gold transition-colors">{step}</p>
                     
                     {i < 6 && (
                        <div className="hidden lg:block absolute top-8 left-[70%] w-full h-[1px] bg-gold/10 -z-10 group-hover:bg-gold/30 transition-colors" />
                     )}
                  </div>
               ))}
            </div>
         </Container>
      </section>

      {/* FAQ Section Placeholder */}
      <section className="section-padding bg-cream">
         <Container>
            <div className="max-w-2xl mx-auto">
               <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold text-center">Executive Intelligence</span>
               <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-16 uppercase tracking-tight">Strategic <span className="italic">FAQs</span></h2>
               
               <div className="space-y-8">
                  {[
                     { q: 'What is the average duration of a luxury villa project?', a: 'Typically, a project of Elite calibre takes 18-36 months depending on the complexity and custom elements required.' },
                     { q: 'Do you handle international building certifications?', a: 'Yes. We are specialists in LEED and IGBC certifications for sustainable architecture across the region.' },
                     { q: 'Can I request a 3D virtual tour of my design?', a: 'Every flagship project includes a Spline/Three.js interactive virtual environment for executive review.' },
                     { q: 'What are your primary regions of operation?', a: 'We operate primarily in Sri Lanka, Maldives, Singapore, and are expanding towards high-value zones in the UAE.' },
                  ].map((faq, i) => (
                     <div key={i} className="border-b border-navy/5 pb-8 group cursor-pointer">
                        <h4 className="flex justify-between items-center text-lg font-serif italic text-navy/80 group-hover:text-gold transition-colors mb-4 uppercase">
                           {faq.q}
                           <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform opacity-30" />
                        </h4>
                        <p className="text-sm font-light leading-relaxed text-navy/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{faq.a}</p>
                     </div>
                  ))}
               </div>
               
               <div className="text-center mt-20">
                  <Link href="/contact" className="text-xs uppercase tracking-[0.4em] font-black text-navy/40 hover:text-gold transition-all border-b border-gold/20 pb-4">View All Executive Intelligence</Link>
               </div>
            </div>
         </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy py-32 border-t border-gold/10">
         <Container>
            <div className="text-center">
               <h2 className="text-4xl md:text-6xl font-serif text-cream mb-12 uppercase italic tracking-tighter shadow-gold/10">Initialise Your <span className="italic text-gold">Masterpiece Today</span></h2>
               <Link href="/quote" className="bg-gold hover:bg-gold/90 text-navy px-16 py-6 rounded-sm text-sm uppercase tracking-[0.5em] font-black transition-all shadow-2xl active:scale-95">Initialise Consultation</Link>
            </div>
         </Container>
      </section>
    </div>
  );
}
