import { motion } from 'motion/react';
import { CLINIC } from '../config';

// ponytail: before/after imagery is stock (no real clinical photos in a demo).
// A representative smile/teeth shot per case; swap in real case photos for the client.
const CASE_IMG: Record<string, string> = {
  'Porcelain veneers': 'smileClose',
  'Teeth whitening': 'smileWoman',
  'Dental implants': 'teethBright',
  'Smile makeover': 'brightSmile',
};

export default function BeforeAfter() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-porcelain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-wine-950">
            Could be your smile — outcome gallery.
          </h2>
          <p className="mt-4 text-lg text-wine-800">
            Representative outcomes across veneers, whitening, implants and full makeovers.
            <span className="block mt-2 font-data text-xs text-wine-400">
              Demo imagery — ask for real case photos before presenting to clients.
            </span>
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CLINIC.beforeAfter.map((c, i) => (
            <motion.figure
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="panel overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-porcelain">
                <img
                  src={CLINIC.images[CASE_IMG[c.title] ?? 'smileClose']}
                  alt={`${c.title} — ${c.result}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4">
                <p className="font-data text-[11px] uppercase tracking-[0.16em] text-blush-600">
                  {c.months}
                </p>
                <h3 className="mt-1 font-display text-lg text-wine-950">{c.title}</h3>
                <p className="text-sm text-wine-700">{c.result}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}