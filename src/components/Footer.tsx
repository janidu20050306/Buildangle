import Link from 'next/link';
import { Camera, Briefcase, PlaySquare, MessageCircle, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Container from './common/Container';

const links = {
  company: [
    { name: 'About Buildangle', href: '/about' },
    { name: 'The Process', href: '/services#process' },
    { name: 'Meet the Founder', href: '/about#founder' },
    { name: 'Architecture Awards', href: '/about#awards' },
  ],
  services: [
    { name: 'Luxury Villas', href: '/services#villas' },
    { name: 'Modern Homes', href: '/services#modern' },
    { name: 'Sustainability', href: '/services#sustainable' },
    { name: 'Commercial', href: '/services#commercial' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Security Compliance', href: '/security' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-24 pb-12 border-t border-gold/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col">
            <Link href="/" className="mb-8">
              <span className="text-3xl font-serif font-bold text-gold tracking-tight">BUILDANGLE</span>
              <span className="text-[10px] tracking-widest block text-cream/50 mt-1 uppercase italic font-medium">SINCE 2008</span>
            </Link>
            <p className="text-cream/60 leading-relaxed mb-8 max-w-xs italic font-serif">
              "Building more than structures, we craft legacies that harmonize with nature and elevate the standard of living."
            </p>
            <div className="flex space-x-4">
              {[Camera, Briefcase, PlaySquare, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="p-2 border border-gold/20 hover:border-gold/60 transition-colors text-gold">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-8 uppercase tracking-widest">The Firm</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gold transition-colors flex items-center group">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-8 uppercase tracking-widest">Expertise</h4>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-gold transition-colors flex items-center group">
                    {link.name}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-serif text-lg mb-8 uppercase tracking-widest">Global HQ</h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin className="text-gold mt-1 mr-4 shrink-0" size={20} />
                <span className="text-cream/70 leading-relaxed">
                  Elite Plaza, No. 45th Floor, Gregory's Road, Colombo 7, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold mr-4 shrink-0" size={20} />
                <span className="text-cream/70">+94 11 234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold mr-4 shrink-0" size={20} />
                <span className="text-cream/70">inquire@buildangle.lk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 pt-12 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest text-cream/40 uppercase">
          <p className="mb-4 md:mb-0">© 2026 Buildangle. All Rights Reserved.</p>
          <div className="flex space-x-8">
            {links.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-cream transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
