import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC } from '../config';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          {/* rating summary */}
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-4xl sm:text-5xl text-wine-950 max-w-md">
              Patients say it best.
            </h2>
            <div className="mt-6 flex items-end gap-4">
              <span className="font-display text-7xl text-wine-950">4.9</span>
              <div className="pb-2">
                <div className="flex gap-0.5 text-gold-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="mt-1.5 font-data text-xs uppercase tracking-[0.16em] text-wine-400">
                  Average of {CLINIC.stats[1].value} patients
                </p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3 text-wine-800">
              <Quote className="w-6 h-6 text-blush-500" />
              <p className="text-sm italic max-w-xs">
                Filed on every treatment card — you'll never wonder what people think.
              </p>
            </div>
          </div>

          {/* review cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {CLINIC.reviews.map((r, i) => (
              <motion.blockquote
                key={r.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="panel p-6"
              >
                <div className="flex gap-0.5 text-gold-500 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-wine-900 leading-relaxed">“{r.text}”</p>
                <footer className="mt-4 flex items-center justify-between border-t border-wine-100 pt-3">
                  <span className="font-semibold text-wine-950">{r.name}</span>
                  <span className="font-data text-[11px] uppercase tracking-[0.14em] text-wine-400">
                    {r.treatment}
                  </span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}