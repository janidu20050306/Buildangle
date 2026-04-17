import ContactForm from '@/components/forms/ContactForm';
import Container from '@/components/common/Container';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen pt-24 text-navy">
      <Container className="mb-20">
        <div className="text-center">
          <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block font-bold">
            Establish Connection
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-navy mb-8 leading-tight tracking-[0.05em] uppercase">
            Let's <span className="italic italic-gold italic-emerald transition-all duration-1000">Collaborate!</span>
          </h1>
          <p className="text-navy/40 max-w-2xl mx-auto font-light text-lg leading-relaxed italic tracking-widest">
            "Your vision is our catalyst. Connect with our executive team to initiate your journey towards architectural excellence."
          </p>
        </div>
      </Container>

      <section className="section-padding overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
             {/* Contact Info */}
             <div className="lg:col-span-5 flex flex-col justify-center space-y-12 h-full">
                <div className="group border-l border-gold/20 pl-8 hover:border-gold transition-colors duration-500">
                   <h4 className="text-[10px] uppercase font-bold text-navy/40 mb-4 tracking-[0.3em] font-black italic">Email Connectivity</h4>
                   <Link href="mailto:inquire@buildangle.lk" className="text-3xl font-serif text-navy hover:text-gold transition-colors block mb-2 underline decoration-gold/20 underline-offset-[12px]">inquire@buildangle.lk</Link>
                   <p className="text-xs text-navy/40 font-bold uppercase tracking-widest">Response within 24 business hours.</p>
                </div>
                
                <div className="group border-l border-gold/20 pl-8 hover:border-gold transition-colors duration-500">
                   <h4 className="text-[10px] uppercase font-bold text-navy/40 mb-4 tracking-[0.3em] font-black italic">Direct Hotline / WhatsApp</h4>
                   <Link href="tel:+94112345678" className="text-3xl font-serif text-navy hover:text-gold transition-colors block mb-2 underline decoration-gold/20 underline-offset-[12px]">+94 11 234 5678</Link>
                   <p className="text-xs text-navy/40 font-bold uppercase tracking-widest">Executive Support Desk Available.</p>
                </div>

                <div className="group border-l border-gold/20 pl-8 hover:border-gold transition-colors duration-500">
                   <h4 className="text-[10px] uppercase font-bold text-navy/40 mb-4 tracking-[0.3em] font-black italic">Global Headquarters</h4>
                   <p className="text-xl font-serif text-navy/60 leading-relaxed italic">
                      Elite Plaza, No. 45th Floor, <br />
                      Gregory's Road, Colombo 7, Sri Lanka
                   </p>
                </div>

                <div className="pt-12 flex space-x-6">
                   <Link href="#" className="p-4 bg-navy text-gold rounded-full hover:scale-110 active:scale-95 transition-all shadow-2xl">
                      <MessageCircle size={28} />
                   </Link>
                   <Link href="#" className="p-4 bg-navy text-gold rounded-full hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center px-10 text-[10px] uppercase font-bold tracking-widest opacity-30">
                      Explore Map
                   </Link>
                </div>
             </div>

             {/* Form */}
             <div className="lg:col-span-7 bg-white p-12 md:p-16 border border-navy/5 shadow-2xl relative shadow-navy/5">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl -z-10" />
                <ContactForm />
             </div>
          </div>
        </Container>
      </section>

      {/* Map Placeholder */}
      <section className="h-[50vh] w-full bg-navy/5 relative overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-navy/20 z-10" />
         <Image
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1600&q=80"
            alt="Map Preview"
            fill
            className="object-cover grayscale"
         />
         <div className="relative z-20 text-center">
            <MapPin size={48} className="text-gold mx-auto mb-6 animate-bounce" />
            <span className="text-xs uppercase font-bold tracking-[0.5em] text-cream drop-shadow-lg">Located in the heart of Colombo 7</span>
         </div>
      </section>
    </div>
  );
}
