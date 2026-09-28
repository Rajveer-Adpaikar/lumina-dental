import Hero from '../components/Hero';
import Treatments from '../components/Treatments';
import Dentists from '../components/Dentists';
import WhyUs from '../components/WhyUs';
import BeforeAfter from '../components/BeforeAfter';
import Reviews from '../components/Reviews';
import EmergencyCta from '../components/EmergencyCta';
import CostEnquiry from '../components/CostEnquiry';
import FAQ from '../components/FAQ';
import Gallery from '../components/Gallery';
import Location from '../components/Location';
import BookingSection from '../components/BookingSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Treatments />
      <Dentists />
      <WhyUs />
      <BeforeAfter />
      <Reviews />
      <EmergencyCta />
      <CostEnquiry />
      <FAQ />
      <Gallery />
      <Location />
      <BookingSection />
    </>
  );
}