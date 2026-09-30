import PageIntro from '../components/PageIntro';
import Treatments from '../components/Treatments';
import BookingSection from '../components/BookingSection';
import { useBooking } from '../booking';

export default function TreatmentsPage() {
  const openBooking = useBooking();
  return (
    <>
      <PageIntro
        kicker="Treatments"
        title="Every treatment, explained in plain language."
        body="Six areas of care under one roof — from a routine check-up to full-mouth rehabilitation."
        ctas={[{ label: 'Book an appointment', onClick: openBooking }]}
      />
      <Treatments />
      <BookingSection />
    </>
  );
}