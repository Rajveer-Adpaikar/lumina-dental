import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import EmergencyCta from '../components/EmergencyCta';
import BookingSection from '../components/BookingSection';
import { CLINIC } from '../config';

// The homepage is a wayfinding page, not a second copy of every subpage.
// Each section below either has no dedicated route (WhyUs, EmergencyCta,
// BookingSection) or previews one route's content and links out to it.
// Sections that own a route — Treatments, Dentists, BeforeAfter, Gallery,
// Reviews, CostEnquiry, FAQ, Location — live on that route only.
const ROUTES = [
  {
    to: '/treatments',
    kicker: 'Treatments',
    title: 'Six areas of care, one roof',
    body: 'Routine check-ups through implants, orthodontics and emergency care — explained before we begin.',
    cta: 'See all treatments',
  },
  {
    to: '/dentists',
    kicker: 'Our Dentists',
    title: 'Three specialists, one plan',
    body: 'A prosthodontist, an endodontist and a cosmetic dentist — all working from the same treatment plan.',
    cta: 'Meet the team',
  },
  {
    to: '/results',
    kicker: 'Results',
    title: 'See the work, not the promise',
    body: 'Before-and-after outcomes and the clinic itself, so you can picture your own visit.',
    cta: 'View results',
  },
  {
    to: '/cost',
    kicker: 'Cost Enquiry',
    title: "An honest number, not a menu",
    body: "We don't publish fixed prices. Tell us what you're considering and we'll estimate it properly.",
    cta: 'Get an estimate',
  },
  {
    to: '/faq',
    kicker: 'FAQ',
    title: 'The questions we hear most',
    body: 'Booking, costs, emergencies and children — answered in one place.',
    cta: 'Read the FAQ',
  },
  {
    to: '/contact',
    kicker: 'Visit',
    title: 'Find us on Residency Road',
    body: 'Opening hours, parking, directions and every way to reach the clinic.',
    cta: 'Plan your visit',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Route map — the homepage's job is to get people to the right page */}
      <section className="py-20 sm:py-28 bg-porcelain">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-4xl sm:text-5xl text-wine-950 max-w-2xl">
            Everything the clinic does, on its own page.
          </h2>
          <p className="mt-4 text-lg text-wine-800 max-w-2xl">
            Pick the part you need. Each of these has the detail, the pricing notes and the
            booking options for that topic.
          </p>

          <div className="mt-12 grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {ROUTES.map((r, i) => (
              <motion.div
                key={r.to}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="dossier-item"
              >
                <Link
                  to={r.to}
                  className="group flex items-start gap-5 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wine-600"
                >
                  <div className="flex-1">
                    <p className="label text-xs text-blush-600">{r.kicker}</p>
                    <h3 className="mt-1 font-display text-2xl text-wine-950 group-hover:text-wine-700 transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-1.5 text-wine-700 leading-relaxed">{r.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-wine-700 group-hover:gap-2.5 transition-all">
                      {r.cta}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <EmergencyCta />

      {/* Short social proof — full reviews live on /results */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex justify-center gap-0.5 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-5 font-display text-2xl sm:text-3xl text-wine-950 text-balance">
            “{CLINIC.reviews[0].text}”
          </blockquote>
          <p className="mt-4 text-wine-700">
            {CLINIC.reviews[0].name} · {CLINIC.reviews[0].treatment}
          </p>
          <Link
            to="/results"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-wine-700 hover:text-wine-500 transition-colors"
          >
            Read more patient reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <BookingSection />
    </>
  );
}