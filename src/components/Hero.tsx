import React, { useState, useEffect } from 'react';
import { Calendar, Users, Home, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onSearchAvailability: (searchCriteria: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomType: string;
  }) => void;
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1650&q=85',
  'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1650&q=85',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1650&q=85'
];

const HERO_SUBTITLES = [
  'THE LEGENDARY WILDERNESS OF JIM CORBETT',
  'A LUXURY RESORT COMPLEMENTED BY EXQUISITE COMFORT',
  'RECONNECT WITH NATURE IN VILLAGE DHELA, UTTARAKHAND'
];

const HERO_TITLES = [
  'Luxury in the Wild',
  'Bengal Tigers & Forest Escapes',
  'Premium Wilderness Retreat'
];

export default function Hero({ onSearchAvailability }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [soundOn, setSoundOn] = useState(false);

  // Search parameters state
  const [checkIn, setCheckIn] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [checkOut, setCheckOut] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 3);
    return tomorrow.toISOString().split('T')[0];
  });
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchAvailability({
      checkIn,
      checkOut,
      guests,
      roomType
    });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black flex items-end justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMAGES[currentSlide]})` }}
          />
        </AnimatePresence>
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal via-black/40 to-black/70" />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24 pt-12">
        <motion.div
          key={`deco-${currentSlide}`}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 48 }}
          transition={{ duration: 1 }}
          className="h-px bg-gold-400 mx-auto mb-4"
        />
        <motion.p
          key={`sub-${currentSlide}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xs sm:text-sm tracking-[0.35em] text-gold-400 uppercase font-bold mb-4 drop-shadow-md"
        >
          {HERO_SUBTITLES[currentSlide]}
        </motion.p>

        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight mb-8 sm:mb-10 max-w-5xl mx-auto font-light"
        >
          {HERO_TITLES[currentSlide]}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-2 mb-14 sm:mb-20"
        >
          <button
            onClick={() => scrollToSection('rooms')}
            className="w-full sm:w-auto bg-[#C5A059] hover:bg-gold-500 text-white font-bold text-[11px] tracking-[0.25em] uppercase px-9 py-4 rounded-none transition-all duration-300 shadow-md"
          >
            Explore Lodges & Suites
          </button>
        </motion.div>
      </div>


    </section>
  );
}
