import PageIntro from '../components/PageIntro';
import FAQ from '../components/FAQ';
import EmergencyCta from '../components/EmergencyCta';
import BookingSection from '../components/BookingSection';
import { useBooking } from '../booking';

export default function FAQPage() {
  const openBooking = useBooking();
  return (
    <>
      <PageIntro
        kicker="FAQ"
        title="Answers to the questions we hear most."
        body="Booking, costs, emergencies, children — all in one place."
        ctas={[{ label: 'Book an appointment', onClick: openBooking }]}
      />
      <FAQ />
      <EmergencyCta />
      <BookingSection />
    </>
  );
}