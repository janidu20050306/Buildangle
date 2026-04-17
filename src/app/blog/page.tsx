'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User, Search, Filter } from 'lucide-react';
import Container from '@/components/common/Container';

const posts = [
  {
    slug: 'sustainable-tropical-design-principles',
    title: '5 Sustainable Design Principles for Tropical Sri Lankan Homes',
    excerpt: 'Explore how we blend ancestral wisdom with modern net-zero engineering to keep luxury homes cool and carbon-neutral.',
    author: 'Mr. Harsha Kodippili',
    date: 'April 12, 2026',
    readTime: '08 Min Read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1448630360428-654a6575399c?w=1200&q=80'
  },
  {
    slug: 'future-of-smart-homes-tradition',
    title: 'The Future of Smart Homes: Where Technology Meets Tradition',
    excerpt: 'Seamless integration of IoT ecosystems within heritage-focused architecture. How to scale intelligence without losing the soul.',
    author: 'Eng. Priyantha Silva',
    date: 'March 28, 2026',
    readTime: '12 Min Read',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80'
  },
  {
    slug: 'renovating-coastal-villas-guide',
    title: 'Coastal Construction: Combatting Salt & Humidity in Style',
    excerpt: 'Choosing the right materials for villas in Galle and Bentota. A guide to salt-resistant luxury finishes.',
    author: 'Ar. Sameea Wijetunge',
    date: 'March 15, 2026',
    readTime: '10 Min Read',
    category: 'Technical',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-cream min-h-screen pt-24 text-navy">
      <Container className="mb-24">
         <div className="text-center max-w-4xl mx-auto">
            <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">Design Insights & Wisdom</span>
            <h1 className="text-5xl md:text-8xl font-serif text-navy mb-8 leading-tight tracking-tight uppercase">
               The <span className="italic text-gold">Mastery</span> <br /> Journal
            </h1>
            <p className="text-navy/40 text-lg md:text-xl font-light leading-relaxed italic tracking-widest max-w-2xl mx-auto">
               "Trends, technical wisdom, and stories from the vanguard of Sri Lanka's luxury architecture scene."
            </p>
         </div>
      </Container>

      {/* Blog Grid */}
      <section className="section-padding bg-navy/5 border-y border-navy/5 overflow-hidden">
         <Container>
            {/* Featured Post (First) */}
            <Link href={`/blog/${posts[0].slug}`} className="group relative block aspect-[21/9] w-full mb-20 overflow-hidden rounded-sm shadow-2xl">
               <Image
                  src={posts[0].image}
                  alt={posts[0].title}
                  fill
                  className="object-cover transition-transform duration-[4000ms] group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
               />
               <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/60 transition-colors duration-1000" />
               <div className="absolute inset-x-0 bottom-0 p-12 z-20">
                  <div className="flex items-center space-x-6 mb-6">
                     <span className="bg-gold text-navy text-[10px] uppercase font-black px-4 py-1.5 rounded-full tracking-widest">{posts[0].category}</span>
                     <span className="text-[10px] uppercase font-bold text-cream/70 tracking-widest flex items-center">
                        <Calendar size={12} className="mr-2" /> {posts[0].date}
                     </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif text-cream italic mb-6 max-w-3xl leading-tight uppercase tracking-tight group-hover:text-gold transition-colors">{posts[0].title}</h2>
                  <div className="flex items-center text-cream/50 text-[10px] uppercase font-black tracking-[0.3em]">
                     <User size={14} className="mr-3 text-gold" /> {posts[0].author} • {posts[0].readTime}
                  </div>
               </div>
            </Link>

            {/* Sub-grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {posts.slice(1).map((post, i) => (
                  <Link key={i} href={`/blog/${post.slug}`} className="group flex flex-col md:flex-row gap-8 items-center bg-white border border-navy/5 p-8 hover:border-gold/30 transition-all shadow-xl shadow-navy/5">
                     <div className="relative aspect-square w-full md:w-56 overflow-hidden shrink-0">
                        <Image
                           src={post.image}
                           alt={post.title}
                           fill
                           className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                        />
                     </div>
                     <div className="flex flex-col justify-between py-2">
                        <div>
                           <div className="flex items-center space-x-4 mb-4 text-[10px] uppercase font-bold tracking-widest text-gold italic">
                              <span>{post.category}</span>
                              <span className="text-navy/20">•</span>
                              <span className="text-navy/40 italic">{post.date}</span>
                           </div>
                           <h3 className="text-2xl font-serif text-navy mb-4 uppercase tracking-tight group-hover:text-gold transition-colors">{post.title}</h3>
                           <p className="text-sm font-light text-navy/60 leading-relaxed italic line-clamp-2">{post.excerpt}</p>
                        </div>
                        <div className="pt-8 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-navy/30 group-hover:text-gold transition-colors">
                           <span>Read Full Insight</span>
                           <ArrowRight size={14} className="ml-4 transition-transform group-hover:translate-x-2" />
                        </div>
                     </div>
                  </Link>
               ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-20 flex justify-center space-x-4 items-center">
               <button className="p-4 border border-navy/10 hover:border-gold transition-colors rounded-sm opacity-20 cursor-not-allowed">
                  <Clock size={18} />
               </button>
               <span className="text-xs uppercase font-black tracking-widest text-navy/20">Archived Insights (Locked)</span>
            </div>
         </Container>
      </section>

      {/* CTA Area */}
      <section className="py-32 section-padding bg-cream relative">
         <Container>
            <div className="max-w-3xl mx-auto text-center">
               <span className="text-gold/40 text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold">Intellectual Legacy</span>
               <h2 className="text-4xl md:text-6xl font-serif text-navy mb-12 uppercase tracking-tight italic">Expand Your <span className="italic text-gold">Legacy Knowledge</span></h2>
               <Link href="/quote" className="bg-navy text-gold px-12 py-5 rounded-sm text-sm uppercase tracking-[0.5em] font-black transition-all shadow-2xl hover:scale-105">Request Executive Consultation</Link>
            </div>
         </Container>
      </section>
    </div>
  );
}
