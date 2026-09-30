import PageIntro from '../components/PageIntro';
import Location from '../components/Location';
import EmergencyCta from '../components/EmergencyCta';
import { useBooking } from '../booking';

export default function ContactPage() {
  const openBooking = useBooking();
  return (
    <>
      <PageIntro
        kicker="Contact & Visit"
        title="Come see us on Residency Road."
        body="Directions, parking, opening hours and every way to reach the clinic."
        ctas={[{ label: 'Book an appointment', onClick: openBooking }]}
      />
      <Location />
      <EmergencyCta />
    </>
  );
}