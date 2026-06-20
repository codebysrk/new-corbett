import { useState, useEffect } from 'react';
import { Menu, X, Compass, Sparkles, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ResortLogo from './ResortLogo';

interface NavbarProps {
  onOpenBooking: (roomId?: string) => void;
  currency: string;
  setCurrency: (curr: string) => void;
  lang: string;
  setLang: (lang: string) => void;
  currentPage: 'home' | 'about' | 'rooms' | 'events';
  onChangePage: (page: 'home' | 'about' | 'rooms' | 'events') => void;
}

export default function Navbar({ onOpenBooking, currency, setCurrency, lang, setLang, currentPage, onChangePage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showConfigDropdown, setShowConfigDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies = [
    { code: 'USD', symbol: '$', label: 'USD ($)' },
    { code: 'EUR', symbol: '€', label: 'EUR (€)' },
    { code: 'GBP', symbol: '£', label: 'GBP (£)' }
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'FR', label: 'Français' },
    { code: 'JA', label: '日本語' }
  ];

  const handleNavItemClick = (item: string) => {
    setMobileMenuOpen(false);
    const target = item.toLowerCase();

    if (target === 'home') {
      onChangePage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about') {
      onChangePage('about');
    } else if (target === 'rooms') {
      onChangePage('rooms');
    } else if (target === 'events') {
      onChangePage('events');
    } else {
      // If we are not on home, switch to home first, then scroll cleanly!
      if (currentPage !== 'home') {
        onChangePage('home');
        setTimeout(() => {
          const element = document.getElementById(target);
          if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      } else {
        const element = document.getElementById(target);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md py-3 border-b border-gold-200 shadow-sm'
            : 'bg-gradient-to-b from-black/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Branding Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center space-x-2.5"
              id="navbar-logo"
            >
              <ResortLogo
                className={`w-7 h-7 transition-all duration-500 group-hover:scale-110 ${
                  scrolled ? 'text-gold-500' : 'text-gold-300'
                }`}
              />
              <span className="flex flex-col">
                <span
                  className={`font-serif tracking-[0.2em] text-xl font-light leading-none ${
                    scrolled ? 'text-luxury-charcoal' : 'text-white'
                  }`}
                >
                  CORBETT
                </span>
                <span
                  className={`text-[8px] tracking-[0.45em] uppercase font-sans font-bold ${
                    scrolled ? 'text-gold-400' : 'text-gold-300'
                  }`}
                >
                  TREAT RESORT
                </span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-10" id="desktop-nav-menu">
              {['Home', 'About', 'Rooms', 'Events', 'Gallery', 'Facilities', 'Dining'].map((item) => {
                const id = item.toLowerCase();
                const isActive = currentPage === id || (currentPage === 'home' && id === 'home');
                return (
                  <button
                    key={item}
                    onClick={() => handleNavItemClick(item)}
                    className={`font-sans text-[11px] font-bold tracking-[0.2em] uppercase hover:text-gold-400 transition-colors duration-300 relative py-1 group ${
                      isActive 
                        ? 'text-gold-500 font-extrabold' 
                        : scrolled ? 'text-luxury-charcoal' : 'text-white'
                    }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gold-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                );
              })}
            </nav>

            {/* Config & CTA Buttons */}
            <div className="hidden md:flex items-center space-x-6" id="desktop-actions">
              {/* Climate Temperature Indicator */}
              <div
                className={`flex items-center space-x-2 text-[10px] font-bold tracking-[0.15em] uppercase border px-4 py-2 rounded-none transition-all duration-300 ${
                  scrolled
                    ? 'border-gold-200 text-luxury-charcoal bg-[#FAF9F6]'
                    : 'border-white/10 text-white bg-white/5'
                }`}
                id="header-weather-info"
              >
                <Sun className="w-3.5 h-3.5 text-gold-400 rotate-12" />
                <span className="font-serif italic font-normal text-[11px] text-gold-500">28°C</span>
                <span className="text-[9px] font-light">SUNNY</span>
              </div>

              {/* Book Now Button */}
              <button
                onClick={() => onOpenBooking()}
                className={`text-[10px] font-bold tracking-[0.25em] uppercase px-7 py-3 rounded-none transition-all duration-300 border ${
                  scrolled
                    ? 'bg-[#232323] border-[#232323] text-white hover:bg-gold-400 hover:border-gold-400 hover:shadow-lg'
                    : 'bg-white border-white text-luxury-charcoal hover:bg-transparent hover:text-white'
                }`}
                id="btn-navbar-book"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center space-x-3">
              <div
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-none border ${
                  scrolled
                    ? 'border-gold-200 text-luxury-charcoal bg-[#FAF9F6]'
                    : 'border-white/15 text-white bg-white/5'
                }`}
                id="mobile-weather-info"
              >
                <Sun className="w-4 h-4 text-gold-400 rotate-12" />
                <span className="font-serif italic font-normal text-[11px] text-gold-500">28°C</span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 focus:outline-none ${scrolled ? 'text-luxury-charcoal' : 'text-white'}`}
                id="btn-mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-luxury-cream border-t border-gold-200 overflow-hidden shadow-md"
              id="mobile-nav-panel"
            >
              <div className="px-5 pt-3 pb-6 space-y-3">
                {['Home', 'About', 'Rooms', 'Events', 'Gallery', 'Facilities', 'Dining'].map((item) => {
                  const id = item.toLowerCase();
                  const isActive = currentPage === id;
                  return (
                    <button
                      key={item}
                      onClick={() => handleNavItemClick(item)}
                      className={`block w-full text-left font-serif text-lg tracking-widest uppercase py-2 border-b border-gold-200 ${
                        isActive ? 'text-gold-500 font-extrabold' : 'text-luxury-charcoal hover:text-gold-400'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
                <div className="pt-4 flex flex-col space-y-4">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-center text-[10px] font-bold tracking-[0.25em] uppercase bg-[#232323] text-white py-3.5 rounded-none hover:bg-gold-400"
                    id="btn-mobile-book"
                  >
                    Check Room Availability
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
