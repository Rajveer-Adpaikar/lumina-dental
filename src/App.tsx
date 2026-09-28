import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './booking';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dentists from './components/Dentists';
import ClinicInfo from './components/ClinicInfo';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HIPAA from './components/HIPAA';
import NotFound from './components/NotFound';

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Dentists />
      <ClinicInfo />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <BookingProvider>
        <div className="min-h-screen bg-pearl font-sans text-pine-950 selection:bg-gold-400 selection:text-pine-950">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/hipaa" element={<HIPAA />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BookingProvider>
    </BrowserRouter>
  );
}