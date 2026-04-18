'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowUpRight, Compass } from 'lucide-react';
import { Project } from '@/lib/constants';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = project.status ?? 'ongoing';
  const statusClass =
    status === 'done'
      ? 'bg-emerald/90 text-white'
      : status === 'coming-soon'
      ? 'bg-clay text-white'
      : 'bg-navy/80 text-gold border border-gold/30';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-navy/5 overflow-hidden rounded-sm"
    >
      <Link href={`/projects/${project.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          <span className="bg-navy/80 backdrop-blur-md text-gold text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full border border-gold/20">
            {project.category}
          </span>
          {project.featured && (
            <span className="bg-gold text-navy text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
              Featured
            </span>
          )}
          <span className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full ${statusClass}`}>
            {status.replace('-', ' ')}
          </span>
        </div>

        {/* Explore 3D */}
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="bg-gold text-navy p-2 rounded-full transform rotate-45 group-hover:rotate-0 transition-transform duration-500 bg-emerald/10 text-emerald animate-pulse">
              <Compass size={18} />
           </div>
        </div>
      </Link>

      <div className="p-8 border-x border-b border-navy/5 group-hover:border-gold/20 transition-colors duration-500 bg-white dark:bg-charcoal/10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-serif text-navy group-hover:text-gold transition-colors mb-1">{project.title}</h3>
            <div className="flex items-center text-xs text-navy/40 uppercase tracking-widest font-bold">
              <MapPin size={12} className="mr-1.5 text-gold" />
              {project.location}
            </div>
          </div>
          <span className="text-xs font-serif italic text-gold">{project.year}</span>
        </div>

        <p className="text-navy/60 text-sm italic font-serif leading-relaxed line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          "{project.description}"
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] font-bold text-navy group-hover:text-gold transition-colors pt-4 border-t border-navy/5 group-hover:border-gold/10"
        >
          View Case Study
          <ArrowUpRight size={14} className="ml-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
