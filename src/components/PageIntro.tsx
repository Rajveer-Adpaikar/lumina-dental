import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// A CTA either navigates (`to`) or triggers an action (`onClick`) — booking
// CTAs open the modal rather than routing somewhere that only mentions booking.
type Cta = { label: string; to?: string; onClick?: () => void };

export default function PageIntro({
  kicker,
  title,
  body,
  ctas,
}: {
  kicker: string;
  title: string;
  body?: string;
  ctas?: Cta[];
}) {
  return (
    <section className="pt-32 pb-14 sm:pt-40 sm:pb-20 bg-porcelain border-b border-wine-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <p className="label text-xs text-blush-600">{kicker}</p>
        <h1 className="mt-4 font-display text-4xl sm:text-6xl text-wine-950 leading-[1.05] max-w-3xl">
          {title}
        </h1>
        {body && <p className="mt-5 text-lg text-wine-800 max-w-xl leading-relaxed">{body}</p>}
        {ctas && (
          <div className="mt-7 flex flex-wrap gap-3">
            {ctas.map((c) =>
              c.onClick ? (
                <button key={c.label} onClick={c.onClick} className="btn btn-primary">
                  {c.label}
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <Link key={c.to} to={c.to!} className="btn btn-primary">
                  {c.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ),
            )}
          </div>
        )}
      </div>
    </section>
  );
}