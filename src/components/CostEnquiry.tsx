import { useState, type FormEvent } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC } from '../config';

const SERVICES = CLINIC.services.flatMap((s) => s.items);

export default function CostEnquiry() {
  const [treatment, setTreatment] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/918045872196?text=${encodeURIComponent(
        `Hi Lumina Dental, I'd like an estimated cost for ${treatment || 'a treatment'}.\n\nName: ${name}\nPhone: ${phone}`,
      )}`,
      '_blank',
      'noopener',
    );
    setSent(true);
  };

  if (sent) {
    return (
      <section id="cost-enquiry" className="py-20 sm:py-28 bg-porcelain">
        <div className="max-w-2xl mx-auto px-5 text-center">
          <CheckCircle2 className="w-12 h-12 text-wine-700 mx-auto" />
          <h2 className="mt-5 font-display text-4xl text-wine-950">
            Enquiry sent — we'll be in touch.
          </h2>
          <p className="mt-3 text-lg text-wine-800">
            We've opened WhatsApp with your enquiry. If nothing opens, call us directly at{' '}
            <a href={`tel:${CLINIC.phoneHref}`} className="font-semibold text-wine-700 underline">
              {CLINIC.phone}
            </a>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="cost-enquiry" className="py-20 sm:py-28 bg-porcelain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl sm:text-5xl text-wine-950 max-w-md">
            What will my treatment cost?
          </h2>
          <p className="mt-4 text-lg text-wine-800 max-w-md">
            We don't quote flat prices — every case is different. Tell us what you're
            considering and we'll call you back with an honest estimate after a quick
            assessment.
          </p>
          <ul className="mt-8 space-y-3 text-wine-900 max-w-md">
            {['No obligation', 'Free initial estimate', 'Response within one working day'].map((li) => (
              <li key={li} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blush-500 mt-0.5 shrink-0" />
                {li}
              </li>
            ))}
          </ul>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          onSubmit={submit}
          className="panel p-8"
        >
          <label className="block text-sm font-semibold text-wine-900 mb-1.5" htmlFor="treatment">
            Treatment you're interested in
          </label>
          <select
            id="treatment"
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className="w-full rounded-xl border border-wine-200 bg-white px-4 py-3 text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-400 mb-5"
          >
            <option value="">Choose a treatment…</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <label className="block text-sm font-semibold text-wine-900 mb-1.5" htmlFor="cost-name">
            Your name
          </label>
          <input
            id="cost-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="e.g. Ananya"
            className="w-full rounded-xl border border-wine-200 bg-white px-4 py-3 text-wine-950 placeholder:text-wine-300 focus:outline-none focus:ring-2 focus:ring-wine-400 mb-5"
          />

          <label className="block text-sm font-semibold text-wine-900 mb-1.5" htmlFor="cost-phone">
            Phone number
          </label>
          <input
            id="cost-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="+91 …"
            className="w-full rounded-xl border border-wine-200 bg-white px-4 py-3 text-wine-950 placeholder:text-wine-300 focus:outline-none focus:ring-2 focus:ring-wine-400 mb-6"
          />

          <button type="submit" className="btn btn-primary w-full">
            <MessageCircle className="w-5 h-5" />
            Send Cost Enquiry
          </button>
          <p className="mt-3 text-center text-sm text-wine-500">
            Sends via WhatsApp — demo confirmation screen
          </p>
        </motion.form>
      </div>
    </section>
  );
}