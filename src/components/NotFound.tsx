import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useBooking } from '../booking';

export default function NotFound() {
  const openBooking = useBooking();

  return (
    <section className="relative pt-40 pb-32 px-6 overflow-hidden bg-pearl">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[50vw] h-[50vw] max-w-[560px] max-h-[560px] rounded-full bg-gold-300/20 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="font-data text-xs uppercase tracking-[0.25em] text-pine-600 mb-9">
          Error 404 · Missing tooth
        </p>

        {/* Smile-arch mark — the brand motif as the missing page */}
        <div className="relative flex items-center justify-center mb-10" aria-hidden="true">
          <span className="smile-arch h-24 w-24 lg:h-32 lg:w-32 block" />
          <span className="absolute bottom-[24%] h-2 w-14 lg:h-2.5 lg:w-20 rounded-full bg-pine-800" />
        </div>

        <h1 className="font-display text-5xl lg:text-7xl text-pine-950 leading-[1.05] mb-6 text-wrap-balance">
          This page has a <span className="text-pine-700 italic">missing tooth.</span>
        </h1>

        <p className="text-lg text-pine-900/70 leading-relaxed max-w-md mx-auto mb-10 text-pretty">
          The page you were after isn't in our records — an old link, a moved page, or a
          typo. Let's get you back to your smile.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-pine-800 text-pearl font-bold text-lg hover:bg-pine-700 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back home
          </Link>
          <button
            onClick={openBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-pine-900 font-bold text-lg border border-pine-200 hover:border-pine-300 hover:bg-white/70 transition-colors"
          >
            Book an appointment
          </button>
        </div>
      </div>
    </section>
  );
}