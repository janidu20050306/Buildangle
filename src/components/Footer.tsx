import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Container from '@/components/common/Container';

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange flex items-center justify-center">
                <span className="text-white font-heading font-bold text-2xl">B</span>
              </div>
              <div>
                <span className="text-xl font-heading font-bold text-white">BUILDANGLE</span>
                <span className="text-[10px] block text-gray-500">Construction Ltd</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building excellence since 2008. We deliver premium construction and architecture services across Sri Lanka.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-orange transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-orange transition-colors">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-orange transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-orange transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {['Luxury Villas', 'Modern Homes', 'Commercial Buildings', 'Renovations', 'Sustainable Building'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-orange transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="text-orange shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  No. 45, Gregory's Road,<br />
                  Colombo 07, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-orange shrink-0" size={20} />
                <a href="tel:+94112345678" className="text-gray-400 hover:text-orange transition-colors">
                  +94 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-orange shrink-0" size={20} />
                <a href="mailto:info@buildangle.com" className="text-gray-400 hover:text-orange transition-colors">
                  info@buildangle.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Buildangle Construction Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}