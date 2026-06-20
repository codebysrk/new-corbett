/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import GallerySection from './components/GallerySection';
import FacilitiesSection from './components/FacilitiesSection';
import DiningSection from './components/DiningSection';
import EventsSection from './components/EventsSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Standalone pages
import AboutPage from './components/AboutPage';
import RoomsPage from './components/RoomsPage';
import EventsPage from './components/EventsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'rooms' | 'events'>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedRoomId, setPreselectedRoomId] = useState<string | undefined>(undefined);
  const [currency, setCurrency] = useState('USD');
  const [lang, setLang] = useState('EN');

  // Interactive booking entry loops
  const handleBookRoom = (roomId: string) => {
    setPreselectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    setPreselectedRoomId(undefined);
    setIsBookingOpen(true);
  };

  const handleSearchAvailability = (criteria: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
  }) => {
    // Map selected roomType criteria to corresponding sample room IDs
    let rId = 'room-deluxe';
    if (criteria.roomType === 'family-couple') {
      rId = 'room-family-couple';
    } else if (criteria.roomType === 'premium') {
      rId = 'room-premium';
    }
    setPreselectedRoomId(rId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-luxury-cream text-luxury-charcoal selection:bg-gold-200 selection:text-gold-900 overflow-x-hidden">
      {/* Sticky Premium Header / Navigation */}
      <Navbar
        onOpenBooking={handleOpenGeneralBooking}
        currency={currency}
        setCurrency={setCurrency}
        lang={lang}
        setLang={setLang}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />

      {/* Main Luxury Sections */}
      <main>
        {currentPage === 'home' && (
          <>
            {/* Full Slider Hero */}
            <Hero onSearchAvailability={handleSearchAvailability} />

            {/* Brand Philosophy About */}
            <AboutSection />

            {/* Accommodations Accommodation Panels with Details Drawers */}
            <RoomsSection onBookRoom={handleBookRoom} currency={currency} />

            {/* Captivating visual gallery of wilderness sights */}
            <GallerySection />

            {/* Exclusive brand wilderness facilities and amenities */}
            <FacilitiesSection />

            {/* Elegant culinary experiences spotlight */}
            <DiningSection />

            {/* Tailored luxury weddings and corporate events and milestone celebrations section */}
            <EventsSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onBackToHome={() => setCurrentPage('home')}
            onOpenBooking={handleOpenGeneralBooking}
          />
        )}

        {currentPage === 'rooms' && (
          <RoomsPage
            onBackToHome={() => setCurrentPage('home')}
            onBookRoom={handleBookRoom}
            currency={currency}
          />
        )}

        {currentPage === 'events' && (
          <EventsPage
            onBackToHome={() => setCurrentPage('home')}
          />
        )}
      </main>

      {/* Corporate detailed map/coordinates Footer */}
      <Footer onChangePage={setCurrentPage} />

      {/* Interactive Reservation checkout / receipt engine */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedRoomId={preselectedRoomId}
        currency={currency}
      />
    </div>
  );
}

