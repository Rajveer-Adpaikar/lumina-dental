import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { useBooking } from '../booking';
import { CLINIC } from '../config';

// Mobile-only sticky action bar. Covered by .sticky-bar (hidden ≥768px).
export default function StickyBar() {
  const openBooking = useBooking();
  return (
    <nav className="sticky-bar" aria-label="Quick actions">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${CLINIC.phoneHref}`}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-wine-800 active:bg-wine-50"
        >
          <Phone className="w-5 h-5" />
          Call
        </a>
        <a
          href={CLINIC.whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-wine-800 border-x border-wine-100 active:bg-wine-50"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
        <button
          onClick={openBooking}
          className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-white bg-wine-800"
        >
          <CalendarCheck className="w-5 h-5" />
          Book
        </button>
      </div>
    </nav>
  );
}