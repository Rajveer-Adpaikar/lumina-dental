import { motion } from 'motion/react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

export default function Hero() {
  const openBooking = useBooking();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-wine-950 text-white">
      {/* backdrop image */}
      <div className="absolute inset-0">
        <img
          src={CLINIC.images.hero}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wine-950 via-wine-950/75 to-wine-900/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-data text-xs uppercase tracking-[0.3em] text-blush-300 mb-6">
            Est. {CLINIC.established} · {CLINIC.city}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-white">
            Modern Dentistry.
            <span className="block text-blush-200 italic">Exceptional Care.</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-md leading-relaxed">
            Implants, root canals, cosmetic and family dentistry — cared for by three
            specialists under one roof in {CLINIC.city}.
          </p>

          {/* CTA cluster */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <button onClick={openBooking} className="btn btn-gold !text-wine-950">
              <CalendarCheck className="w-5 h-5" />
              Book an Appointment
            </button>
            <a href={CLINIC.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <MessageCircle className="w-5 h-5" />
              WhatsApp the Clinic
            </a>
            <a href={`tel:${CLINIC.phoneHref}`} className="btn btn-emergency">
              <Phone className="w-5 h-5" />
              Emergency · Call Now
            </a>
          </div>

          <p className="mt-6 font-data text-xs text-white/50">
            4.9/5 average rating · 24,000+ patients since {CLINIC.established}
          </p>
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="absolute bottom-0 inset-x-0 bg-white/5 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CLINIC.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-display text-3xl text-white">{s.value}</span>
              <span className="font-data text-[11px] uppercase tracking-[0.18em] text-white/55">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}