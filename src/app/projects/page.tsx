'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Compass } from 'lucide-react';
import Container from '@/components/common/Container';
import ProjectCard from '@/components/projects/ProjectCard';
import { PROJECTS, Project } from '@/lib/constants';

const categories = ['All', 'Luxury Villa', 'Modern Home', 'Renovation', 'Commercial'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="section-padding bg-cream text-navy pt-24 min-h-screen">
      <Container>
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-gold text-xs uppercase tracking-[0.5em] mb-4 block font-bold"
          >
            Elite Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight tracking-tight uppercase"
          >
            Architectural <br />
            <span className="italic text-gold italic-emerald">Masterpieces</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-navy/60 text-lg md:text-xl font-light leading-relaxed italic"
          >
            "A showcase of visionary design and net-zero luxury engineering across Southeast Asia."
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-y border-navy/5 py-10 sticky top-24 bg-white/5 backdrop-blur-3xl z-40">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.2em] font-bold px-6 py-2 transition-all rounded-sm border ${
                  activeCategory === cat
                    ? 'bg-gold border-gold text-navy shadow-lg shadow-gold/20'
                    : 'border-navy/10 hover:border-gold/30 text-navy/60 hover:text-navy'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30" size={18} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy/5 border border-navy/10 px-12 py-3 rounded-sm text-sm focus:outline-none focus:border-gold transition-colors font-light italic"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/30 hover:text-navy"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-12 text-[10px] uppercase font-bold tracking-widest text-navy/40 italic">
           <span>Displaying {filteredProjects.length} Extraordinary Projects</span>
           <span className="flex items-center">
              <Compass size={14} className="mr-2 text-gold animate-spin-slow" />
              Interactive 3D Views Available
           </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-40 border border-dashed border-gold/20 rounded-lg">
            <X size={48} className="mx-auto text-gold/20 mb-6" />
            <h3 className="text-2xl font-serif text-navy mb-2">No projects found.</h3>
            <p className="text-navy/50 font-light italic uppercase tracking-widest text-xs">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* Pagination Placeholder */}
        <div className="mt-24 flex justify-center">
           <button className="text-sm uppercase tracking-[0.4em] font-bold text-navy/40 hover:text-gold transition-colors border-b border-gold/20 pb-2 flex items-center group">
              View Earlier Projects
              <Filter size={14} className="ml-4 transition-transform group-hover:rotate-180" />
           </button>
        </div>
      </Container>
    </div>
  );
}
