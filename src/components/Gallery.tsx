import { motion } from 'motion/react';
import { CLINIC } from '../config';

const IMG_KEYS: Record<string, string> = {
  reception: 'reception',
  clinicRoom: 'clinicRoom',
  equipment: 'equipment',
  smileClose: 'smileClose',
};

export default function Gallery() {
  return (
    <section id="clinic-gallery" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-wine-950">Inside the studio.</h2>
          <p className="mt-4 text-lg text-wine-800">
            A calm reception, modern treatment rooms and the equipment behind the work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLINIC.gallery.map((g, i) => (
            <motion.figure
              key={g.label}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src={CLINIC.images[IMG_KEYS[g.src]]}
                alt={g.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* The scrim stays opaque under the text and only fades above it —
                  an 80%-to-transparent ramp put white text at 4.48:1 on a bright
                  photo, just under AA. */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wine-950 from-45% to-transparent px-4 pt-10 pb-3 text-white text-sm font-medium">
                {g.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}