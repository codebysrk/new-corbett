import React, { useState } from 'react';
import { Compass, Mail, Phone, MapPin, ArrowRight, Check, ShieldCheck, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ResortLogo from './ResortLogo';

interface FooterProps {
  onChangePage?: (page: 'home' | 'about' | 'rooms' | 'events') => void;
}

export default function Footer({ onChangePage }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsSuccess, setNewsSuccess] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsSuccess(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#232323] text-white pt-20 pb-8 relative border-t border-gold-400/30 overflow-hidden">
      {/* Decorative background vectors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-900/5 rounded-none blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-800/5 rounded-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-white/10" id="footer-top">
          {/* Col 1: Brand & Desc */}
          <div className="lg:col-span-4 space-y-6" id="footer-info">
            <button onClick={handleScrollToTop} className="flex items-center space-x-3 text-left">
              <ResortLogo className="w-9 h-9 text-gold-400 shrink-0" />
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.25em] text-xl font-light leading-none text-white">
                  CORBETT
                </span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-gold-400 mt-1.5 font-bold">
                  TREAT RESORT
                </span>
              </div>
            </button>

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-light">
              Experience the perfect balance of raw wilderness and refined luxury. Surrounded by the lush greenery, scenic landscapes, and rich biodiversity of the Corbett region, Corbett Treat Resort offers an opportunity to reconnect with nature while enjoying modern premium comforts and warm, personalized hospitality.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <div className="flex items-center space-x-2 text-gold-400">
                <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
                <span className="text-[9px] tracking-[0.15em] uppercase font-bold">Verified Safe Stay</span>
              </div>
              <div className="flex items-center space-x-2 text-gold-400 border-l border-white/10 pl-4">
                <Award className="w-4.5 h-4.5 shrink-0" />
                <span className="text-[9px] tracking-[0.15em] uppercase font-bold">5 Star Forbes</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 text-sm" id="footer-navigation">
            <div className="space-y-4">
              <h4 className="font-serif text-gold-400 tracking-wider font-light text-base uppercase">The Resort</h4>
              <ul className="space-y-2.5 text-white/70">
                {['Home', 'About', 'Rooms', 'Events', 'Gallery', 'Dining'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        const target = link.toLowerCase();
                        if (onChangePage) {
                          e.preventDefault();
                          if (target === 'home' || target === 'about' || target === 'rooms' || target === 'events') {
                            onChangePage(target as any);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else {
                            onChangePage('home');
                            setTimeout(() => {
                              const el = document.getElementById(target);
                              if (el) {
                                const offset = 80;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = el.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                              }
                            }, 300);
                          }
                        }
                      }}
                      className="hover:text-gold-400 transition-colors block text-xs tracking-wider font-light cursor-pointer"
                    >
                      {link} Selection
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-gold-400 tracking-wider font-light text-base uppercase">Contact Desk</h4>
              <ul className="space-y-3.5 text-xs text-white/70 font-light leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Village Dhela, near Jim Corbett National Park, Ramnagar, Uttarakhand - 244715</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>+91 91522 61522</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>contact@corbetttreatresort.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter Sign-up */}
          <div className="lg:col-span-4 space-y-6" id="footer-newsletter">
            <div className="space-y-2">
              <h4 className="font-serif text-gold-400 tracking-wider font-light text-base uppercase font-semibold">Elite invitation Registry</h4>
              <p className="text-white/60 text-xs leading-relaxed font-light">
                Receive handpicked seasonal flight offers, butler package updates, and pre-release room bookings directly in your inbox.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!newsSuccess ? (
                <motion.form
                  key="newsletter-input"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleNewsSubmit}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-gold-400 rounded-none px-4 py-3 text-xs placeholder-white/20 text-white focus:ring-0 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-none transition-all duration-300 w-12 flex items-center justify-center shrink-0"
                    id="btn-footer-news-submit"
                  >
                    <ArrowRight className="w-4.5 h-4.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="newsletter-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gold-500/10 border border-gold-500/20 rounded-none p-4 flex items-start gap-3"
                  id="newsletter-success-notif"
                >
                  <div className="p-1 bg-gold-500 text-white rounded-none mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-gold-400 tracking-wider uppercase">Welcomely Registered</h5>
                    <p className="text-[11px] text-white/75 mt-0.5 leading-relaxed font-light">
                      Your invite coordinates have been saved. A welcome brochure package of seasonal packages will reach you shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Abstract coordinate sketch */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-none flex items-center justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[#FFF]/40 font-bold font-sans">Resort GPS Coordinates</p>
                <code className="text-xs text-gold-400 font-mono font-bold block mt-1">29.4005° N, 78.9680° E</code>
              </div>
              <ResortLogo className="w-9 h-9 text-white/10 rotate-12" />
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright area */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#FFF]/40 gap-4" id="footer-bottom">
          <p>© 2026 Corbett Treat Resort. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Stay</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Wilderness Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
