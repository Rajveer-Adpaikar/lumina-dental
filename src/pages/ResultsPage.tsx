import PageIntro from '../components/PageIntro';
import BeforeAfter from '../components/BeforeAfter';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import BookingSection from '../components/BookingSection';

export default function ResultsPage() {
  return (
    <>
      <PageIntro
        kicker="Results"
        title="Outcomes and the smiles that prove them."
        body="A gallery of our work — veneers, whitening, implants and full smile makeovers."
        ctas={[{ label: 'See treatments', to: '/treatments' }, { label: 'Get a cost estimate', to: '/cost' }]}
      />
      <BeforeAfter />
      <Gallery />
      <Reviews />
      <BookingSection />
    </>
  );
}