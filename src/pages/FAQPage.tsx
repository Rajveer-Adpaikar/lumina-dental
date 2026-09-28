import PageIntro from '../components/PageIntro';
import FAQ from '../components/FAQ';
import EmergencyCta from '../components/EmergencyCta';
import BookingSection from '../components/BookingSection';

export default function FAQPage() {
  return (
    <>
      <PageIntro
        kicker="FAQ"
        title="Answers to the questions we hear most."
        body="Booking, costs, emergencies, children — all in one place."
        ctas={[{ label: 'Ask us on WhatsApp', to: '/cost' }]}
      />
      <FAQ />
      <EmergencyCta />
      <BookingSection />
    </>
  );
}