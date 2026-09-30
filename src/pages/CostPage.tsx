import PageIntro from '../components/PageIntro';
import CostEnquiry from '../components/CostEnquiry';
import EmergencyCta from '../components/EmergencyCta';
import { useBooking } from '../booking';

export default function CostPage() {
  const openBooking = useBooking();
  return (
    <>
      <PageIntro
        kicker="Treatment Cost"
        title="Estimate your treatment cost."
        body="No fixed price lists — an honest estimate after a quick assessment, sent to you within a working day."
        ctas={[{ label: 'Book an appointment', onClick: openBooking }]}
      />
      <CostEnquiry />
      <EmergencyCta />
    </>
  );
}