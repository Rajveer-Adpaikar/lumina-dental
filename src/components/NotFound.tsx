import { Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

// `standalone` is set by src/404.tsx (the 404.html entry), which boots this
// page outside the router — so "Back home" becomes a plain link there.
export default function NotFound({ standalone = false }: { standalone?: boolean }) {
  const openBooking = useBooking();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-wine-950 text-white overflow-hidden">
      {/* Decorative rose glow + arch */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vmin] h-[70vmin] max-w-[640px] max-h-[640px] rounded-full bg-blush-600/25 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 24px, rgba(255,255,255,0.5) 24px, rgba(255,255,255,0.5) 25px)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center py-24">
        {/* Brand mark — large rose arch */}
        <div className="flex items-center justify-center mb-8" aria-hidden="true">
          <span className="relative flex h-28 w-28 lg:h-36 lg:w-36 items-center justify-center">
            <span className="smile-arch h-full w-full !border-2" />
          </span>
        </div>

        <p className="font-data text-xs uppercase tracking-[0.3em] text-blush-300 mb-5">
          Error 404 · Smile not found
        </p>

        <h1 className="font-display text-5xl lg:text-7xl leading-[1.02] text-white">
          This page is <span className="text-blush-300 italic">out of our records.</span>
        </h1>

        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-md mx-auto">
          A moved page, an old link, or a typo — either way, we'll get you back to the
          care you came for.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {standalone ? (
            <a href="/" className="btn btn-gold !text-wine-950">
              <Home className="w-5 h-5" />
              Back home
            </a>
          ) : (
            <Link to="/" className="btn btn-gold !text-wine-950">
              <Home className="w-5 h-5" />
              Back home
            </Link>
          )}
          <a href={`tel:${CLINIC.phoneHref}`} className="btn btn-ghost !border-white/25 !text-white hover:!bg-white/10">
            <Phone className="w-5 h-5" />
            Call the clinic
          </a>
        </div>
      </div>
    </section>
  );
}