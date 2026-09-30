import { motion } from 'motion/react';
import { CLINIC } from '../config';

const HERO_IMAGES = {
  NR: 'dentistNisha',
  AM: 'dentistArjun',
  TM: 'dentistTara',
} as const;

export default function Dentists() {
  return (
    <section id="dentists" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-wine-950">
            Three specialists. One plan for your smile.
          </h2>
          <p className="mt-4 text-lg text-wine-800">
            Meet the team who'll be looking after you — each one qualified, focused, and
            careful about explaining every step.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {CLINIC.dentists.map((d, i) => (
            <motion.article
              key={d.initials}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="panel overflow-hidden hover:shadow-lg hover:shadow-wine-900/5 transition-shadow"
            >
              <div className="aspect-[4/5] overflow-hidden bg-porcelain">
                <img
                  src={CLINIC.images[HERO_IMAGES[d.initials]]}
                  alt={d.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-wine-950">{d.name}</h3>
                </div>
                <p className="mt-1 label text-xs text-blush-600">
                  {d.specialty}
                </p>
                <p className="mt-3 text-sm text-wine-800 leading-relaxed">{d.blurb}</p>
                <div className="mt-5 flex gap-6 border-t border-wine-100 pt-4 text-sm">
                  <span className="text-wine-600">
                    <span className="font-display text-xl text-wine-950 block">{d.experience}</span>
                    Experience
                  </span>
                  <span className="text-wine-600">
                    <span className="font-display text-xl text-wine-950 block">{d.patients}</span>
                    Patients
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}