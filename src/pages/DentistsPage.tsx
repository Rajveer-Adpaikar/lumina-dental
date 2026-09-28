import PageIntro from '../components/PageIntro';
import Dentists from '../components/Dentists';
import BookingSection from '../components/BookingSection';

export default function DentistsPage() {
  return (
    <>
      <PageIntro
        kicker="Our Dentists"
        title="Three specialists with one goal — a smile you trust."
        body="Qualified, experienced, and known for explaining every step. Meet the team."
        ctas={[{ label: 'Book with the team', to: '/cost' }]}
      />
      <Dentists />
      <BookingSection />
    </>
  );
}