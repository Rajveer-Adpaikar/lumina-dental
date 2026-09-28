import { Phone, MessageCircle } from 'lucide-react';
import { CLINIC } from '../config';

export default function EmergencyCta() {
  return (
    <section className="py-14 sm:py-16 bg-blush-600 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl text-white">
            In pain? Don't wait it out.
          </h2>
          <p className="mt-2 text-white/85">
            Severe pain, swelling, trauma or a broken tooth — call us now and we'll see you
            the same day wherever possible.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={`tel:${CLINIC.phoneHref}`}
            className="btn bg-white text-blush-700 hover:bg-blush-50"
          >
            <Phone className="w-5 h-5" />
            Emergency · Call Now
          </a>
          <a
            href={CLINIC.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn bg-wine-950 text-white hover:bg-wine-900"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp the Clinic
          </a>
        </div>
      </div>
    </section>
  );
}