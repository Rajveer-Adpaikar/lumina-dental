import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CLINIC, CONTACT_EMAIL } from '../config';

// Cal.com inline embed. The loader script is injected once per page load; the
// "inline" instruction re-runs on each modal open so the calendar remounts
// into the fresh container.
const CAL_NS = 'lumina-dental';

function loadCalScript() {
  const w = window as any;
  if (w.Cal?.loaded) return;
  // Official Cal.com embed loader, verbatim (it wires up the Cal.ns[namespace] API)
  (function (C: any, A: string, L: string) {
    const p = function (a: any, ar: any) {
      a.q.push(ar);
    };
    const d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement('script')).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function (...args: any[]) {
            p(api, args);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ['initNamespace', namespace]);
          } else p(cal, ar);
          return api;
        }
        p(cal, ar);
      };
  })(w, 'https://app.cal.com/embed/embed.js', 'init');
}

declare global {
  interface Window {
    Cal?: any;
  }
}

export function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !CLINIC.calLink) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    loadCalScript();
    const Cal = (window as any).Cal;
    // namespace init is idempotent — safe to call every open
    Cal('init', CAL_NS, { origin: 'https://app.cal.com' });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;
    Cal.ns[CAL_NS]('inline', {
      elementOrSelector: '#cal-inline-container',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
      calLink: CLINIC.calLink,
    });
    Cal.ns[CAL_NS]('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-wine-950/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 w-10 h-10 rounded-full bg-white/90 border border-wine-100 flex items-center justify-center text-wine-900/70 hover:text-wine-950 hover:bg-white transition-colors shadow-sm"
              aria-label="Close booking"
            >
              <X className="w-5 h-5" />
            </button>

            {CLINIC.calLink ? (
              <div
                id="cal-inline-container"
                ref={containerRef}
                style={{ width: '100%', height: '80vh', maxHeight: '92vh', minHeight: 500, overflowY: 'auto' }}
              />
            ) : (
              <div className="p-12 text-center">
                <div className="mb-4 flex justify-center">
                  <span className="smile-arch !w-16 !h-16" aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl text-wine-950 mb-2">Booking is almost ready</h3>
                <p className="text-wine-900/60 max-w-md mx-auto">
                  We're hooking up our online calendar right now. In the meantime, reach us at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-wine-700 font-semibold hover:underline">
                    {CONTACT_EMAIL}
                  </a>{' '}
                  and we'll schedule your visit personally.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}