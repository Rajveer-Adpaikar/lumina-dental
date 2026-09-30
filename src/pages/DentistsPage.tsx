import PageIntro from '../components/PageIntro';
import Dentists from '../components/Dentists';
import BookingSection from '../components/BookingSection';
import { useBooking } from '../booking';

export default function DentistsPage() {
  const openBooking = useBooking();
  return (
    <>
      <PageIntro
        kicker="Our Dentists"
        title="Three specialists with one goal — a smile you trust."
        body="Qualified, experienced, and known for explaining every step. Meet the team."
        ctas={[{ label: 'Book with the team', onClick: openBooking }]}
      />
      <Dentists />
      <BookingSection />
    </>
  );
}