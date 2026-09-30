import { MessageCircle, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

const NAV = [
  { to: '/treatments', label: 'Treatments' },
  { to: '/dentists', label: 'Our Dentists' },
  { to: '/results', label: 'Results' },
  { to: '/cost', label: 'Cost Enquiry' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Visit Us' },
];

export default function Footer() {
  const openBooking = useBooking();
  return (
    <footer className="bg-wine-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <span className="smile-arch" aria-hidden="true" />
              <div>
                <p className="font-display text-xl leading-none">Lumina Dental</p>
                <p className="label text-[10px] text-blush-200 mt-1">
                  Bengaluru
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Modern Dentistry. Exceptional Care. Implants, root canals, cosmetic & family
              dentistry since {CLINIC.established}.
            </p>
          </div>

          {/* Explore */}
          <nav className="md:col-span-1" aria-label="Footer">
            <p className="label text-xs text-blush-200 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="py-1 inline-block text-sm text-white/70 hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-1">
            <p className="label text-xs text-blush-200 mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-blush-300 shrink-0" />
                  {CLINIC.phone}
                </a>
              </li>
              <li>
                <a href={CLINIC.whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 text-blush-300 shrink-0" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-blush-300 shrink-0" />
                  {CLINIC.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-blush-300 shrink-0 mt-0.5" />
                {CLINIC.address}
              </li>
            </ul>
          </div>

          {/* Hours + CTA */}
          <div className="md:col-span-1">
            <p className="label text-xs text-blush-200 mb-4">
              Hours
            </p>
            <ul className="space-y-1.5 text-sm text-white/70">
              {CLINIC.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-white/80">{h.time}</span>
                </li>
              ))}
            </ul>
            <button onClick={openBooking} className="btn btn-gold w-full mt-6 !text-wine-950">
              Book an Appointment
            </button>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 pb-20 md:pb-0">
          <p>
            © {new Date().getFullYear()} {CLINIC.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Fictional demo clinic — details on the client brief.
            <Heart className="w-3.5 h-3.5 text-blush-400 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}