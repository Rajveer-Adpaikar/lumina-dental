import { ShieldCheck, Clock, Stethoscope, HeartHandshake, Mic2, BadgeCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC } from '../config';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Transparent quotes',
    body: 'No fixed price lists — you get an honest estimate after a proper assessment, before any commitment.',
  },
  {
    icon: Stethoscope,
    title: 'All in-house',
    body: 'Implants, root canals and cosmetic work happen in our own studio — no referrals, no hand-offs.',
  },
  {
    icon: Clock,
    title: 'Open late & weekends',
    body: 'Mon–Fri until 8 PM, Saturday until 6 PM and Sunday mornings — care that fits around work.',
  },
  {
    icon: HeartHandshake,
    title: 'Explained first',
    body: 'You’ll know what we’re doing, why, and what it costs — in plain language, every visit.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-wine-950 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl text-white max-w-md">
              Why patients stay with Lumina.
            </h2>
            <p className="mt-5 text-lg text-white/70 max-w-md leading-relaxed">
              Since {CLINIC.established}, the same team has built a clinic on one idea —
              that great dentistry is heard, explained and true to its word.
            </p>

            <div className="mt-10 aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={CLINIC.images.clinicRoom}
                alt="Inside the Lumina treatment studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <r.icon className="w-6 h-6 text-blush-300" />
                <h3 className="mt-4 font-display text-xl text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}