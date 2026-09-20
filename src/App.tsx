import { useEffect } from 'react';
import { LanguageProvider } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import RoomsSection from '@/components/RoomsSection';
import BookingWidget from '@/components/BookingWidget';
import Amenities from '@/components/Amenities';
import SeaStory from '@/components/SeaStory';
import LocationSection from '@/components/LocationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ReviewCarousel from '@/components/ReviewCarousel';
import Gallery from '@/components/Gallery';
import BookingCTA from '@/components/BookingCTA';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MobileBookingBar from '@/components/MobileBookingBar';

function AppContent() {
  useEffect(() => {
    // Set document title and meta
    document.title = 'Casa del Sole Guest Rooms | Alghero, Sardegna';

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', 'Casa del Sole Guest Rooms ad Alghero: camere confortevoli, vista mare, terrazza e posizione ideale per scoprire il centro storico e le spiagge della Sardegna.');
    setMeta('og:title', 'Casa del Sole Guest Rooms | Alghero, Sardegna', true);
    setMeta('og:description', 'Camere confortevoli con vista mare e terrazza nel cuore di Alghero, Sardegna.', true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', 'it_IT', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', 'Casa del Sole Guest Rooms | Alghero, Sardegna');

    // Structured data (LocalBusiness / LodgingBusiness)
    const existing = document.querySelector('#structured-data');
    if (!existing) {
      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: 'Casa del Sole Guest Rooms',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Via XX Settembre, n.1',
          addressLocality: 'Alghero',
          addressRegion: 'SS',
          postalCode: '07041',
          addressCountry: 'IT',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '8.9',
          bestRating: '10',
          worstRating: '1',
        },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Sea view', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Terrace', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Air conditioning', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Private bathroom', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Flat-screen TV', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Non-smoking rooms', value: true },
        ],
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Intro />
        <RoomsSection />
        <Amenities />
        <SeaStory />
        <LocationSection />
        <ExperienceSection />
        <ReviewCarousel />
        <Gallery />
        <BookingCTA />
        <BookingWidget />
        <ContactSection />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
