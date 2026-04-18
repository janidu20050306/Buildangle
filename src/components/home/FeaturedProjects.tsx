'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Calendar, Target, TrendingUp } from 'lucide-react';
import Container from '../common/Container';
import type { Project } from '@/lib/constants';

interface FeaturedProjectsProps {
  projects: Project[];
}

const metrics = [
  { icon: Target, label: 'Challenge', value: 'Limited space, maximum luxury' },
  { icon: TrendingUp, label: 'Solution', value: 'Vertical design + smart layout' },
  { icon: TrendingUp, label: 'Result', value: '40% more space utilization' },
];

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
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
    <section className="py-24 bg-navy text-white overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange text-xs uppercase tracking-[0.4em] mb-4 block font-bold"
            >
              Featured Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold text-white"
            >
              Projects That <span className="text-orange">Speak</span> For Themselves
            </motion.h2>
          </div>
          
          <div className="flex space-x-4 mt-8 md:mt-0">
            <button
              onClick={() => paginate(-1)}
              className="p-4 border border-white/20 hover:bg-orange hover:border-orange transition-all duration-300 rounded-full"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4 border border-white/20 hover:bg-orange hover:border-orange transition-all duration-300 rounded-full"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative h-[650px] md:h-[700px] w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Image Side */}
              <div className="lg:col-span-7 relative group overflow-hidden rounded-2xl h-[350px] lg:h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                
                {/* Quick Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <div className="text-orange text-xs uppercase tracking-wider">Type</div>
                    <div className="text-white font-semibold">{project.category}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                    <div className="text-orange text-xs uppercase tracking-wider">Year</div>
                    <div className="text-white font-semibold">{project.year}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center">
                    <MapPin size={16} className="text-orange mr-2" />
                    <div className="text-white font-semibold">{project.location}</div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-5 flex flex-col justify-center h-full">
                <div className="space-y-6">
                  {/* Project Name */}
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                    {project.title}
                  </h3>

                  {/* Brief Description */}
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Problem/Solution/Result Cards */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {metrics.map((m, i) => (
                      <div key={m.label} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                        <m.icon size={20} className="text-orange mb-2" />
                        <div className="text-orange text-xs uppercase tracking-wider mb-1">{m.label}</div>
                        <div className="text-white text-sm font-medium">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="pt-6 flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center justify-center bg-orange hover:bg-orange-dark text-white px-8 py-4 font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-orange/30"
                    >
                      View Full Case Study
                    </Link>
                    <Link
                      href="/projects"
                      className="flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-navy px-8 py-4 font-semibold rounded-lg transition-all"
                    >
                      See All Projects
                    </Link>
                  </div>
                </div>

                {/* Pagination Indicator */}
                <div className="mt-12 flex items-center text-white/30 space-x-4">
                  <span className="text-2xl font-heading font-bold">{`0${index + 1}`}</span>
                  <div className="h-[1px] w-16 bg-white/20" />
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