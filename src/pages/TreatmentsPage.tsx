import PageIntro from '../components/PageIntro';
import Treatments from '../components/Treatments';
import BookingSection from '../components/BookingSection';

export default function TreatmentsPage() {
  return (
    <>
      <PageIntro
        kicker="Treatments"
        title="Every treatment, explained in plain language."
        body="Six areas of care under one roof — from a routine check-up to full-mouth rehabilitation."
        ctas={[{ label: 'Book an appointment', to: '/cost' }]}
      />
      <Treatments />
      <BookingSection />
    </>
  );
}