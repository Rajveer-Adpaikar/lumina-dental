import { Clock, MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { CLINIC } from '../config';

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-28 bg-porcelain">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl text-wine-950">Find us on Residency Road.</h2>
          <p className="mt-4 text-lg text-wine-800">
            Easy to reach, with parking at Aurora Plaza.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
          {/* Map — Google Maps embed of the Bengaluru pin */}
          <div className="rounded-2xl overflow-hidden min-h-[320px] border border-wine-100 bg-white">
            <iframe
              title="Map to Lumina Dental & Implant Studio, Bengaluru"
              src="https://www.google.com/maps?q=Residency+Road+Bengaluru&output=embed"
              className="w-full h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="panel p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blush-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-wine-950">Lumina Dental &amp; Implant Studio</p>
                  <p className="mt-1 text-sm text-wine-800">{CLINIC.address}</p>
                  <a
                    href="https://maps.google.com/?q=Residency+Road+Bengaluru"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-wine-700 underline hover:text-wine-500"
                  >
                    <Navigation className="w-4 h-4" />
                    Get directions
                  </a>
                </div>
              </div>
            </div>

            <div className="panel p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blush-500 mt-0.5 shrink-0" />
                <div className="w-full">
                  <p className="font-semibold text-wine-950 mb-3">Opening hours</p>
                  <ul className="space-y-1.5">
                    {CLINIC.hours.map((h) => (
                      <li key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-wine-700">{h.day}</span>
                        <span className="font-data text-wine-900">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel p-6 flex flex-wrap gap-x-6 gap-y-3">
              <a href={`tel:${CLINIC.phoneHref}`} className="flex items-center gap-2 text-sm font-semibold text-wine-800 hover:text-wine-500">
                <Phone className="w-4 h-4 text-blush-500" />
                {CLINIC.phone}
              </a>
              <a href={`mailto:${CLINIC.email}`} className="flex items-center gap-2 text-sm font-semibold text-wine-800 hover:text-wine-500">
                <Mail className="w-4 h-4 text-blush-500" />
                {CLINIC.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}