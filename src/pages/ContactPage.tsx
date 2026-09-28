import PageIntro from '../components/PageIntro';
import Location from '../components/Location';
import EmergencyCta from '../components/EmergencyCta';

export default function ContactPage() {
  return (
    <>
      <PageIntro
        kicker="Contact & Visit"
        title="Come see us on Residency Road."
        body="Directions, parking, opening hours and every way to reach the clinic."
        ctas={[{ label: 'Book an appointment', to: '/' }]}
      />
      <Location />
      <EmergencyCta />
    </>
  );
}