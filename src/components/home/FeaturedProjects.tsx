'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Compass } from 'lucide-react';
import Container from '../common/Container';
import type { Project } from '@/lib/constants';

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const safeProjects = projects.length ? projects : [];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + safeProjects.length) % safeProjects.length);
  };

  if (!safeProjects.length) return null;
  const project = safeProjects[index];

  return (
    <section className="section-padding bg-navy text-cream overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold"
            >
              Elite Projects Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-cream uppercase tracking-tight"
            >
              Flagship <span className="italic">Masterpieces</span>
            </motion.h2>
          </div>
          
          <div className="flex space-x-4 mt-8 md:mt-0">
            <button
              onClick={() => paginate(-1)}
              className="p-4 border border-gold/20 hover:bg-gold hover:text-navy transition-all duration-300 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4 border border-gold/20 hover:bg-gold hover:text-navy transition-all duration-300 rounded-full"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative h-[600px] md:h-[700px] w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              <div className="lg:col-span-8 relative group overflow-hidden rounded-sm h-[400px] lg:h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-navy/90 to-transparent flex flex-col justify-end lg:hidden">
                   <h3 className="text-3xl font-serif text-gold mb-2">{project.title}</h3>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center h-full">
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-gold/10 border border-gold/30 text-gold text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full">
                      {project.category}
                    </span>
                    <span className="bg-cream/5 border border-cream/20 text-cream/70 text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full flex items-center">
                      <Calendar size={12} className="mr-1.5" />
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-serif text-cream leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex items-center text-gold/80 italic font-serif">
                    <MapPin size={20} className="mr-2" />
                    {project.location}
                  </div>

                  <p className="text-cream/60 leading-relaxed font-light text-lg">
                    {project.description}
                  </p>

                  <div className="pt-10 flex flex-col sm:flex-row gap-6">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group flex items-center justify-between border border-gold/40 hover:border-gold px-8 py-5 text-sm uppercase tracking-[0.2em] font-bold text-gold bg-gold/5 hover:bg-gold hover:text-navy transition-all duration-500"
                    >
                      View Case Study
                      <ArrowRight size={20} className="ml-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                    <Link
                      href={`/projects/${project.slug}#3d`}
                      className="group flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-bold text-cream underline decoration-gold/40 underline-offset-[12px] hover:text-gold transition-colors"
                    >
                      <Compass size={16} />
                      <span>Explore 3D Virtual Tour</span>
                    </Link>
                  </div>
                </div>

                <div className="mt-16 flex items-center text-cream/20 space-x-6">
                  <span className="text-3xl font-serif font-black">{`0${index + 1}`}</span>
                  <div className="h-[1px] w-20 bg-gold/20" />
                  <span className="text-sm font-medium uppercase tracking-[0.4em]">{`OF 0${safeProjects.length}`}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
