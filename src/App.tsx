import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { BookingProvider } from './booking';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';
import NotFound from './components/NotFound';

import Home from './pages/Home';
import TreatmentsPage from './pages/TreatmentsPage';
import DentistsPage from './pages/DentistsPage';
import ResultsPage from './pages/ResultsPage';
import CostPage from './pages/CostPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

// ponytail: shared scroll-to-top on route change — cheap, expected.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <BookingProvider>
        <ScrollToTop />
        <a href="#main" className="skiplink">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/dentists" element={<DentistsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/cost" element={<CostPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <StickyBar />
      </BookingProvider>
    </BrowserRouter>
  );
}