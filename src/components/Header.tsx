import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

const NAV = [
  { to: '/treatments', label: 'Treatments' },
  { to: '/dentists', label: 'Our Dentists' },
  { to: '/results', label: 'Results' },
  { to: '/cost', label: 'Cost' },
  { to: '/contact', label: 'Visit' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openBooking = useBooking();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white border-b border-wine-100 transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo — L monogram + wordmark */}
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span className="smile-arch h-7 w-7 block" aria-hidden="true" />
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-xl leading-none text-wine-950 group-hover:text-wine-700 transition-colors">
              Lumina Dental
            </span>
            <span className="block font-data text-[10px] uppercase tracking-[0.25em] text-wine-500 mt-1">
              Bengaluru
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-blush-600' : 'text-wine-800 hover:text-wine-500'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`tel:${CLINIC.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-wine-800 hover:text-wine-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {CLINIC.phone}
          </a>
          <button onClick={openBooking} className="btn btn-primary">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 -mr-2 text-wine-950"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-snow border-b border-wine-100 shadow-xl md:hidden"
          >
            <div className="p-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="text-lg font-medium text-wine-950"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {n.label}
                </NavLink>
              ))}
              <a
                href={`tel:${CLINIC.phoneHref}`}
                className="flex items-center gap-2 text-lg font-medium text-wine-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                {CLINIC.phone}
              </a>
              <hr className="border-wine-100 my-2" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking();
                }}
                className="btn btn-primary w-full"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}