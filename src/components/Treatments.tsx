import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC } from '../config';

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 sm:py-28 bg-porcelain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-wine-950">
            Six areas of care, one clinic.
          </h2>
          <p className="mt-4 text-lg text-wine-800">
            From routine check-ups to full-mouth rehabilitation — every treatment is
            explained first, priced transparently, and carried out in-house.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10">
          {CLINIC.services.map((s, i) => (
            <motion.article
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
              className="dossier-item"
            >
              <div className="flex items-start gap-5">
                <span className="font-data text-sm text-blush-600 pt-1">{s.num}</span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-wine-950">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-wine-600">{s.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-sm text-wine-800">
                        <ChevronRight className="w-3.5 h-3.5 text-blush-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}