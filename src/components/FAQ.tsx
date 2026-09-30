import { motion } from 'motion/react';
import { CLINIC } from '../config';

export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <h2 className="font-display text-4xl sm:text-5xl text-wine-950 text-center">
          Questions, answered.
        </h2>
        <p className="mt-4 text-lg text-wine-700 text-center max-w-md mx-auto">
          Booking, costs, emergencies and everything in between.
        </p>

        <div className="mt-12 space-y-3">
          {CLINIC.faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="panel group"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 font-semibold text-wine-950 list-none [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl leading-none text-blush-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="px-6 pb-5 text-wine-800 leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}