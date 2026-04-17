'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, MapPin, Calendar, Layers, Maximize, 
  Leaf, Info, Compass, ChevronRight, Star, 
  MessageCircle, ArrowRight, Share2, Printer
} from 'lucide-react';
import { PROJECTS, Project } from '@/lib/constants';
import Container from '@/components/common/Container';

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isRenovation = project.category === 'Renovation';

  return (
    <div className="bg-cream min-h-screen text-navy pt-24">
      {/* Navigation Helper */}
      <Container className="mb-8">
        <Link href="/projects" className="flex items-center text-[10px] uppercase tracking-widest font-bold text-navy/40 hover:text-gold transition-colors group">
          <ArrowLeft size={14} className="mr-2 transition-transform group-hover:-translate-x-2" />
          Back to Portfolio
        </Link>
      </Container>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
          priority
        />
        <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/30 transition-colors duration-1000" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-gold text-xs uppercase tracking-[0.5em] mb-6 block font-bold">
                Elite Flagship Project
              </span>
              <h1 className="text-5xl md:text-8xl font-serif text-cream mb-8 leading-tight tracking-tight uppercase">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-cream/70 text-sm uppercase tracking-widest font-bold">
                 <div className="flex items-center">
                    <MapPin size={18} className="mr-2 text-gold" />
                    {project.location}
                 </div>
                 <div className="flex items-center">
                    <Calendar size={18} className="mr-2 text-gold" />
                    {project.year}
                 </div>
              </div>
            </motion.div>
          </Container>
        </div>

        {/* Action Bar */}
        <div className="absolute bottom-10 right-10 z-20 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <button className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-gold hover:text-navy transition-all">
              <Share2 size={24} />
           </button>
           <button className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-gold hover:text-navy transition-all">
              <Printer size={24} />
           </button>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y border-navy/5 bg-white/50 sticky top-24 z-40 backdrop-blur-xl">
        <Container>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 items-center text-center md:text-left">
              <div className="border-r border-navy/5">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40 mb-1 block">Project Type</span>
                 <p className="font-serif text-lg text-gold italic uppercase">{project.category}</p>
              </div>
              <div className="border-r border-navy/5">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40 mb-1 block">Total Area</span>
                 <p className="font-serif text-lg text-navy uppercase italic">{project.area} sq. ft.</p>
              </div>
              <div className="border-r border-navy/5">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40 mb-1 block">Client Tier</span>
                 <p className="font-serif text-lg text-navy uppercase italic">Private Elite</p>
              </div>
              <div>
                 <span className="text-[10px] uppercase font-bold tracking-widest text-navy/40 mb-1 block">Sustainability</span>
                 <div className="flex items-center justify-center md:justify-start text-emerald font-bold text-xs uppercase tracking-widest italic group cursor-help">
                    <Leaf size={14} className="mr-2 animate-bounce hover:animate-spin" />
                    LEED Certified
                 </div>
              </div>
           </div>
        </Container>
      </div>

      {/* Detailed Overview */}
      <section className="section-padding overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <div className="mb-12">
                   <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
                      The Concept
                   </span>
                   <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8 leading-tight">
                      A Sanctuary of <br />
                      <span className="italic">Timeless Elegance</span>
                   </h2>
                   <div className="space-y-6 text-navy/70 leading-relaxed font-light text-lg">
                      <p>
                        Elite Homes Lanka was tasked with creating a residence that serves as a quiet refuge from the bustling energy of {project.location}. The architectural response focuses on materiality and natural ventilation, utilizing traditional craftsmanship techniques updated for modern sustainability standards.
                      </p>
                      <p>
                        The interior features open-plan layouts that flow seamlessly into lush green spaces, ensuring that every corner of the home connects with the tropical environment. Custom-crafted teak elements and locally-sourced stone provide a tactile richness that ages beautifully.
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-12 border-t border-navy/5">
                   {[
                      { icon: Layers, label: 'Stories', value: '03 Levels' },
                      { icon: MapPin, label: 'Land Size', value: '15 Perches' },
                      { icon: Info, label: 'Materials', value: 'Teak & Slate' },
                      { icon: Compass, label: 'View', value: 'Ocean/Garden' },
                   ].map((spec, i) => (
                      <div key={i} className="flex flex-col">
                         <div className="flex items-center text-gold mb-2">
                            <spec.icon size={18} />
                            <span className="text-xs uppercase tracking-widest font-bold ml-2">{spec.label}</span>
                         </div>
                         <p className="text-navy text-xl font-serif italic">{spec.value}</p>
                      </div>
                   ))}
                </div>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] w-full bg-navy/5"
             >
                <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-8 translate-y-8" />
                <Image
                   src={project.image}
                   alt="Interior view"
                   fill
                   className="object-cover"
                />
             </motion.div>
          </div>
        </Container>
      </section>

      {/* ⭐ 3D MODEL SECTION ⭐ */}
      <section id="3d" className="section-padding bg-navy text-cream relative">
         <Container>
            <div className="text-center mb-16">
               <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
                  Interactive Design Portfolio
               </span>
               <h2 className="text-4xl md:text-5xl font-serif text-cream uppercase tracking-tight">
                  Experience the <span className="italic">3D Perspective</span>
               </h2>
               <p className="text-cream/50 mt-6 max-w-xl mx-auto font-light">
                  Explore the architectural nuances of this project in a fully interactive virtual model. Rotate, zoom, and discover the soul of the structure.
               </p>
            </div>

            <div className="relative aspect-video w-full max-w-6xl mx-auto bg-charcoal/30 border border-gold/10 rounded-sm overflow-hidden group">
               {/* Spline Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                     <div className="relative mb-8">
                        <Compass size={120} className="text-gold/20 animate-spin-slow mx-auto" />
                        <div className="absolute inset-0 flex items-center justify-center">
                           <Maximize size={48} className="text-gold/40" />
                        </div>
                     </div>
                     <p className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold/40 mb-6 italic">Initialising Spline VR Engine...</p>
                     
                     <Link
                        href="#"
                        className="bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold transition-all shadow-2xl"
                     >
                        Launch Interactive Model
                     </Link>
                  </div>
               </div>
               
               {/* Model Controls Hover */}
               <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-6">
                     <div className="flex items-center text-[10px] text-gold/60 uppercase font-black space-x-2">
                        <span>ROTATE:</span>
                        <div className="flex border border-gold/20 p-2 space-x-4">
                           <span>A</span>
                           <span>D</span>
                        </div>
                     </div>
                     <div className="flex items-center text-[10px] text-gold/60 uppercase font-black space-x-2">
                        <span>ZOOM:</span>
                        <div className="flex border border-gold/20 p-2 space-x-4">
                           <span>+</span>
                           <span>-</span>
                        </div>
                     </div>
                  </div>
                  <div className="text-[10px] text-emerald font-black uppercase tracking-widest animate-pulse flex items-center">
                     <Star size={12} className="mr-2" />
                     LIVE 3D RENDER ENGINE v1.0
                  </div>
               </div>
            </div>
         </Container>
      </section>

      {/* Renovation Feature - Before/After Slider */}
      {isRenovation && (
         <section className="section-padding bg-cream">
            <Container>
               <div className="flex flex-col md:flex-row items-center gap-20">
                  <div className="md:w-1/3">
                     <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
                        Architectural Metamorphosis
                     </span>
                     <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">
                        The Legacy <br />
                        <span className="italic">Redefined</span>
                     </h2>
                     <p className="text-navy/60 leading-relaxed italic mb-8">
                        Every renovation is a conversation between history and future. We preserved the original stone footings while introducing glass spans that open the home to the courtyard.
                      </p>
                      <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-navy/80">
                         <li className="flex items-center"><ChevronRight size={14} className="text-gold mr-2" /> Original Stone Restoration</li>
                         <li className="flex items-center"><ChevronRight size={14} className="text-gold mr-2" /> Structural Reinforcement</li>
                         <li className="flex items-center"><ChevronRight size={14} className="text-gold mr-2" /> Modern HVAC Integration</li>
                      </ul>
                  </div>

                  <div className="md:w-2/3 relative aspect-video group overflow-hidden border border-navy/5">
                     <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r-2 border-gold z-10 transition-all duration-700 group-hover:w-[20%]">
                        <Image
                           src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?grayscale"
                           alt="Before"
                           fill
                           className="object-cover"
                        />
                        <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
                           <span className="text-cream text-[10px] uppercase font-bold tracking-[0.5em] border border-cream/30 px-6 py-2">Before Restoration</span>
                        </div>
                     </div>
                     <Image
                        src={project.image}
                        alt="After"
                        fill
                        className="object-cover"
                     />
                     <div className="absolute top-8 right-8 z-20">
                        <span className="bg-gold text-navy text-[10px] uppercase font-bold tracking-[0.5em] px-6 py-2 shadow-2xl">After Perfection</span>
                     </div>
                  </div>
               </div>
            </Container>
         </section>
      )}

      {/* Testimonial Feature */}
      <section className="bg-navy py-24 text-cream border-t border-gold/10">
         <Container>
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
               <Star className="text-gold" fill="currentColor" size={32} />
               <p className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed">
                  "The transformation of Mistwood Estate was nothing short of miraculous. Elite Homes Lanka understood the emotional value of the property and elevated it beyond our wildest expectations."
               </p>
               <div className="flex flex-col items-center">
                  <span className="text-xl font-serif text-gold uppercase tracking-widest">Mr. Awantha Wickramasinghe</span>
                  <span className="text-[10px] text-cream/40 tracking-[0.3em] uppercase font-bold mt-2">Executive Client • August 2024</span>
               </div>
            </div>
         </Container>
      </section>

      {/* CTA Section */}
      <section className="py-32 section-padding bg-cream relative">
         <Container>
            <div className="text-center group">
               <span className="text-gold/40 text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold transition-all group-hover:tracking-[0.8em]">Start Your Own Legacy</span>
               <h2 className="text-5xl md:text-7xl font-serif text-navy mb-12 uppercase tracking-tight">
                  Inspired by <span className="italic text-gold italic-emerald">This Design?</span>
               </h2>
               
               <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                  <Link
                    href="/quote"
                    className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy px-12 py-5 rounded-sm text-sm uppercase tracking-widest font-bold transition-all shadow-2xl active:scale-95"
                  >
                    Request Similar Build
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center text-sm uppercase tracking-[0.4em] font-black text-navy/40 hover:text-gold transition-colors"
                  >
                     <MessageCircle size={20} className="mr-3" />
                     WhatsApp Enquiry
                  </Link>
               </div>
            </div>

            <div className="mt-40 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-navy/5 pt-12 items-center opacity-30">
               {[
                  { label: 'Award', val: 'Sri Lankan Architecture Awards 2024' },
                  { label: 'Certification', val: 'IGBC Green Building Platinum' },
                  { label: 'Featured In', val: 'Luxury Living Weekly Issue #45' },
                  { label: 'Partnership', val: 'Smart Home IoT Global Alliance' },
               ].map((signal, i) => (
                  <div key={i} className="text-center">
                     <p className="text-[10px] uppercase font-bold text-navy mb-2">{signal.label}</p>
                     <p className="text-xs font-serif italic text-navy/60">{signal.val}</p>
                  </div>
               ))}
            </div>
         </Container>
      </section>
    </div>
  );
}
