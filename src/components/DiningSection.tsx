import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Coffee, Sparkles, X, ArrowRight } from 'lucide-react';

interface ExperienceMoment {
  title: string;
  description: string;
}

interface Venue {
  id: string;
  name: string;
  subtitle: string;
  timing: string;
  image: string;
  description: string;
  highlights: string[];
  moments: ExperienceMoment[];
}

const diningVenues: Venue[] = [
  {
    id: 'forest-grill',
    name: 'The Forest Grill',
    subtitle: 'Signature Fine Dining & Live Grills',
    timing: '07:30 PM - 11:00 PM',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    description: 'An elegant open-air culinary trial where charcoal-grilled gourmet specialties are prepared live before your eyes. Savor the smoky aromas mixed with the crisp evening breeze of the Jim Corbett wilderness, accented with traditional Uttarakhand mountain herbs.',
    highlights: ['Live Charcoal Grills', 'Organic Kumaoni Spices', 'Forestside Candlelit Tables'],
    moments: [
      {
        title: 'The Live Embers',
        description: 'Gather around the open tandoors and fire pits to witness the expert hand-basting of regional mountain delicacies over oak-wood embers.'
      },
      {
        title: 'Mountain Herb Infusions',
        description: 'Discover distinct flavor profiles highlighting wild Himalayan thyme, hand-roasted coriander, and yellow mountain chilies.'
      },
      {
        title: 'Table by the Wilderness',
        description: 'Enjoy intimate dining setups framed closely by towering Sal trees, illuminated with subtle designer lanterns and rustic candlelight.'
      }
    ]
  },
  {
    id: 'alfresco-deck',
    name: 'Ember Creek Deck',
    subtitle: 'Private Campfire Sanctuary Dining',
    timing: 'By Exclusive Reservation Only',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80',
    description: 'Elevate your retreat with a private, butler-manned dining deck set beside a crackling river creek campfire. Each dynamic culinary chapter of this multi-course story is tailored to perfection by our Head Chef.',
    highlights: ['Complimentary Personal Butler', 'Custom Culinary Walkway', 'Heritage Folk Music Atmosphere'],
    moments: [
      {
        title: 'The Hidden Escort',
        description: 'Be guided down a lantern-lit walkway to a highly private timber deck overlooking a quiet mountain stream.'
      },
      {
        title: 'Pre-session Flavor Mapping',
        description: 'An exclusive pre-dinner discussion with our Chef to custom-design your dinner, celebrating personal path histories and themes.'
      },
      {
        title: 'Ancient Folk Serenade',
        description: 'Take in acoustic music set softly in the background, played by local Uttarakhand folk musicians utilizing ancestral wooden flutes.'
      }
    ]
  },
  {
    id: 'canopy-cafe',
    name: 'The Canopy Café',
    subtitle: 'All-Day Multi-Sensory Diner',
    timing: '07:00 AM - 10:30 PM',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    description: 'A cozy, high-ceiling glasshouse sanctuary wrapped in the lush forest borders of Uttarakhand. Enjoy a sparkling sunrise breakfast, robust single-origin coffees, and curated selections celebrating North Indian legacies.',
    highlights: ['Glasshouse Forest Views', 'Local Single-Origin Arabica', 'Morning Birdsong Sessions'],
    moments: [
      {
        title: 'Sunrise Coffee Ritual',
        description: 'A crisp morning experience featuring hand-brewed custom local coffee blends, perfect for quiet birdwatchers looking out at the foggy valley.'
      },
      {
        title: 'The Glass Gazebo',
        description: 'Relax within our premium architectural glass vault, allowing the rain drops or passing clouds to become a core part of the aesthetic.'
      },
      {
        title: 'Foothills Harvest',
        description: 'Savor regional crops, organic millet crumbles, and fresh Himalayan fruit preserves sourced directly from neighboring community orchards.'
      }
    ]
  }
];

export default function DiningSection() {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

  return (
    <section id="dining" className="py-28 bg-[#FAF9F6] relative overflow-hidden border-b border-gold-200">
      {/* Visual luxury accent lines */}
      <div className="absolute top-0 left-12 w-px h-full bg-gold-200/15 hidden xl:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-gold-200/15 hidden xl:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-5xl sm:text-6xl font-serif text-luxury-charcoal tracking-wide leading-tight font-light">
            Indulge Every Sense
          </h2>
          
          {/* Aesthetic Separator Line detailing */}
          <div className="flex flex-col items-center py-6">
            <div className="w-48 h-[1px] bg-gold-300 relative">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-14 bg-gold-300" />
            </div>
          </div>

          <p className="text-sm sm:text-base text-gold-800/80 font-sans max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Sip by sip and bite by bite, journey through Uttarakhand's sensory culinary repertoire at our handpicked on-site restaurants, open-air grills, glasshouse cafés, and private campfire decks.
          </p>

          <div className="pt-8">
            <button
              onClick={() => setSelectedVenue(diningVenues[0])}
              className="border border-gold-300/80 px-10 py-4 text-[11px] font-sans tracking-[0.25em] uppercase hover:bg-gold-50 transition-all duration-300 hover:border-gold-500 hover:text-gold-950 font-bold bg-white/50 text-luxury-charcoal"
            >
              Get a Taste
            </button>
          </div>
        </div>

        {/* Staggered Custom Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16 items-start mt-24">
          
          {/* Item 1: Forest Grill (Left Top, landscape) */}
          <div className="md:col-span-7 group cursor-pointer" onClick={() => setSelectedVenue(diningVenues[0])}>
            <div className="overflow-hidden aspect-[4/3] bg-zinc-100 relative mb-4">
              <img
                src={diningVenues[0].image}
                alt={diningVenues[0].name}
                className="w-full h-full object-cover grayscale-[4%] brightness-[96%] group-hover:scale-[103%] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-serif text-2xl font-light tracking-wide text-luxury-charcoal group-hover:text-gold-500 transition-colors duration-300">
                {diningVenues[0].name}
              </h3>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
            </div>
            <p className="text-[11px] text-gold-600 uppercase tracking-widest mt-1 font-sans font-bold">
              {diningVenues[0].subtitle}
            </p>
          </div>

          {/* Item 2: Under-the-Stars Deck (Right Column, starting offsets, portrait) */}
          <div className="md:col-span-5 md:mt-28 group cursor-pointer" onClick={() => setSelectedVenue(diningVenues[1])}>
            <div className="overflow-hidden aspect-[3/4] bg-zinc-100 relative mb-4">
              <img
                src={diningVenues[1].image}
                alt={diningVenues[1].name}
                className="w-full h-full object-cover grayscale-[4%] brightness-[96%] group-hover:scale-[103%] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-serif text-2xl font-light tracking-wide text-luxury-charcoal group-hover:text-gold-500 transition-colors duration-300">
                {diningVenues[1].name}
              </h3>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
            </div>
            <p className="text-[11px] text-gold-600 uppercase tracking-widest mt-1 font-sans font-bold">
              {diningVenues[1].subtitle}
            </p>
          </div>

          {/* Item 3: Canopy Café (Left Column, lower vertical placement) */}
          <div className="md:col-span-5 md:-mt-12 group cursor-pointer" onClick={() => setSelectedVenue(diningVenues[2])}>
            <div className="overflow-hidden aspect-[1.35] bg-zinc-100 relative mb-4">
              <img
                src={diningVenues[2].image}
                alt={diningVenues[2].name}
                className="w-full h-full object-cover grayscale-[4%] brightness-[96%] group-hover:scale-[103%] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
            <div className="flex items-center justify-between pt-1">
              <h3 className="font-serif text-2xl font-light tracking-wide text-luxury-charcoal group-hover:text-gold-500 transition-colors duration-300">
                {diningVenues[2].name}
              </h3>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
            </div>
            <p className="text-[11px] text-gold-600 uppercase tracking-widest mt-1 font-sans font-bold">
              {diningVenues[2].subtitle}
            </p>
          </div>

        </div>

      </div>

      {/* Immersive Experiential Detail Overlay Modal */}
      <AnimatePresence>
        {selectedVenue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-luxury-charcoal/80 backdrop-blur-sm"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-[#FAF9F6] border border-gold-300 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-none shadow-2xl relative grid grid-cols-1 md:grid-cols-12 gap-0"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVenue(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-luxury-charcoal hover:text-gold-500 bg-white/75 hover:bg-white transition-all border border-gold-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Showcase */}
              <div className="md:col-span-5 relative h-64 md:h-full bg-zinc-100 min-h-[300px]">
                <img
                  src={selectedVenue.image}
                  alt={selectedVenue.name}
                  className="w-full h-full object-cover grayscale-[3%] brightness-[95%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/40 to-transparent md:bg-black/5" />
                <div className="absolute bottom-6 left-6 right-6 text-white md:hidden">
                  <span className="text-[9px] tracking-[0.25em] uppercase font-serif text-gold-400 font-bold block mb-1">
                    {selectedVenue.subtitle}
                  </span>
                  <h3 className="text-3xl font-serif font-light leading-none">
                    {selectedVenue.name}
                  </h3>
                </div>
              </div>

              {/* Right Column: Custom Experiential Story & Highlights */}
              <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
                
                {/* Header Information */}
                <div>
                  <div className="hidden md:block">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-bold block mb-1">
                      {selectedVenue.subtitle}
                    </span>
                    <h3 className="text-4xl font-serif font-light text-luxury-charcoal tracking-wide">
                      {selectedVenue.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 mt-4 text-[10px] uppercase font-bold tracking-widest text-[#232323] bg-gold-50 border border-gold-200/50 py-1.5 px-3 w-fit">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <span>TIMING: {selectedVenue.timing}</span>
                  </div>

                  <p className="text-sm text-gold-950 font-sans font-light leading-relaxed mt-6">
                    {selectedVenue.description}
                  </p>

                  {/* Highlights section */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedVenue.highlights.map((hlt, i) => (
                      <div key={i} className="flex items-center space-x-1.5 bg-white border border-gold-200/40 px-2.5 py-1.5">
                        <Coffee className="w-3 h-3 text-gold-400 shrink-0" />
                        <span className="text-[9px] uppercase tracking-wider font-bold text-luxury-charcoal leading-none">{hlt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Sensory Journey Timeline */}
                <div className="space-y-4 pt-6 border-t border-gold-200/40">
                  <div className="flex items-center gap-1 text-gold-400">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-serif text-xs uppercase tracking-widest font-black">SENSORY CHAPTERS</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {selectedVenue.moments.map((moment, idx) => (
                      <div key={idx} className="flex gap-3 group">
                        <span className="w-6 h-6 flex items-center justify-center border border-gold-200 text-gold-500 font-serif text-[10px] shrink-0 font-bold">
                          0{idx + 1}
                        </span>
                        <div>
                          <h5 className="font-serif text-[13px] font-medium text-luxury-charcoal tracking-wide">
                            {moment.title}
                          </h5>
                          <p className="text-[11px] text-gold-800 font-sans font-light leading-relaxed">
                            {moment.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <p className="text-[9.5px] uppercase tracking-[0.2em] text-gold-600 font-sans font-bold leading-relaxed pt-4 border-t border-gold-200/20">
                  * Complimentary reservations are available for our premium suite guests.
                </p>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
