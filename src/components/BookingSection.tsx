import { motion } from 'motion/react';
import { CalendarCheck, Phone, MessageCircle } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

export default function BookingSection() {
  const openBooking = useBooking();
  return (
    <section id="booking" className="py-20 sm:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="panel overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left — pitch + steps */}
            <div className="p-8 sm:p-10 bg-porcelain">
              <h2 className="font-display text-3xl sm:text-4xl text-wine-950">
                Book your visit in under a minute.
              </h2>
              <p className="mt-3 text-wine-800 leading-relaxed">
                Choose your dentist, the treatment you need, and a time that fits — we'll
                confirm by phone or WhatsApp.
              </p>
              <ol className="mt-8 space-y-4">
                {[
                  'Pick a dentist & treatment',
                  'Choose date and time',
                  'Tell us who you are',
                  'We confirm — you relax',
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-4">
                    <span className="font-data text-xl text-blush-600 w-8 shrink-0">{i + 1}</span>
                    <span className="text-wine-900">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Right — CTA */}
            <div className="p-8 sm:p-10 flex flex-col justify-center gap-4">
              <button onClick={openBooking} className="btn btn-primary text-base py-4">
                <CalendarCheck className="w-5 h-5" />
                Book an Appointment
              </button>
              <a href={CLINIC.whatsappLink} target="_blank" rel="noreferrer" className="btn btn-whatsapp text-base py-4">
                <MessageCircle className="w-5 h-5" />
                WhatsApp the Clinic
              </a>
              <a href={`tel:${CLINIC.phoneHref}`} className="btn btn-emergency text-base py-4">
                <Phone className="w-5 h-5" />
                Emergency · Call Now
              </a>
              <p className="mt-2 text-center font-data text-xs text-wine-400">
                Confirmation by phone/WhatsApp on every booking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}