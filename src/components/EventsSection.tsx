import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, X, Sparkles, MapPin, Users, Calendar, Check } from 'lucide-react';

interface EventType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  capacity: string;
  venueOptions: string[];
  features: string[];
  extraDetails: string;
}

const eventTypes: EventType[] = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Nuptials In The Heart of Nature',
    description: 'Pristine riverside mandaps, deep forest backdrops, and candle-lit wooden deck receptions. Say "I do" surrounded by wild beauty and the flowing sound of the Ramganga River.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    capacity: 'Up to 350 Guests',
    venueOptions: ['Riverbed Meadow', 'Sal Wilderness Lawn', 'Under-the-Stars Deck'],
    features: [
      'Bespoke Kumaoni & Global culinary catering curation',
      'Rustic timber floral gazebos and lantern walkways',
      'Exclusive forest entrance and luxury transport arrangements',
      'Dedicated wedding design and production concierge'
    ],
    extraDetails: 'Our signature mountain weddings blend the untamed majesty of Jim Corbett with the finest boutique details, ensuring your special celebration is spoken about for generations.'
  },
  {
    id: 'birthdays',
    title: 'Birthday Celebrations',
    subtitle: 'Milestone Birthday & Theme Parties',
    description: 'Make your birthday milestone truly unforgettable. From intimate poolside family dinners to grand themed evening dances under stargit skies with custom cakes, live music, and personalized decor.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    capacity: '20 to 150 Guests',
    venueOptions: ['The Deck at Ember Creek', 'Central Lawn amphitheater', 'Private Canopy Gazebos'],
    features: [
      'Custom decorative theme setups with balloons and lanterns',
      'Gourmet multi-cuisine buffet and customized designer cakes',
      'Live acoustic guitarists or local Uttarakhand folk musicians',
      'Dedicated kids playzone setup and audio visual arrangements'
    ],
    extraDetails: 'Whether you are raising a glass to a landmark anniversary or hosting a private reunion, our master culinary chefs and butlers set a majestic stage for your evening.'
  },
  {
    id: 'kitty-parties',
    title: 'Kitty Parties',
    subtitle: 'Chic Social Gatherings & High Tea Meets',
    description: 'Relax and bond with your circle in our pristine nature gardens. Host vibrant, luxury kitty meets featuring gourmet wood-fired pizzas, herbal high-teas, light games, and spectacular selfie points.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    capacity: '10 to 60 Guests',
    venueOptions: ['Riverbed Meadow Deck', 'The Glasshouse Pavilion', 'Orchard Greenhouse Gazebo'],
    features: [
      'Premium high-tea assemblies, mocktails, and fresh bakeries',
      'Personalized theme setup and fun icebreaking games coordination',
      'Gorgeous scenic riverbed photographs captured by our naturalist',
      'Exclusive private seating arrangements'
    ],
    extraDetails: 'Sip on handcrafted mountain infusions and enjoy warm organic bakeries while spending undisturbed, quality leisure time surrounded by dense Sal trees.'
  },
  {
    id: 'get-togethers',
    title: 'Get-Togethers',
    subtitle: 'Scenic Reunions & Social Meets',
    description: 'Reconnect with old friends and beloved family members. Share bonfire stories, play light cricket on the grass, stream late-night karaoke, and dine on authentic local mountain organic wheat preparations.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    capacity: '15 to 200 Guests',
    venueOptions: ['Ember Creek Bonfire Ring', 'The Forest Grill Amphitheater', 'Dhela Nature Lawn'],
    features: [
      'Grand open bonfire setups with live tandoor and barbecues',
      'Karaoke audio setups, board games, and group forest treks',
      'Group photography and memory keepsake video recordings',
      'Special customized children food menus and elderly assistance'
    ],
    extraDetails: 'Gatherings at Jim Corbett bring everyone back to nature. Build lasting, loving memories of laughter and stories around an crackling wood fire.'
  },
  {
    id: 'meetings',
    title: 'Corporate Retreats',
    subtitle: 'High-Performance Mindful Seminars',
    description: 'Elite executive gatherings, team brainstorming escapes, and high-tech corporate summits in a highly inspiring glass-front pavilion with state-of-the-art facilities.',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=800&q=80',
    capacity: 'Up to 150 Attendees',
    venueOptions: ['The Glasshouse Pavilion', 'Creekside Boardroom', 'Central Lawn amphitheater'],
    features: [
      'High-speed fiber connectivity with complete hybrid stream options',
      'Ergonomic handcrafted leather seats and natural sound insulation',
      'Post-meeting team-building wilderness safaris and birding treks',
      'Customized premium health breaks and single-origin coffee bar'
    ],
    extraDetails: 'Introduce your leadership team to an environment free of distractions, designed purely to encourage creative deep workflows and deep organizational bonding.'
  }
];

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  return (
    <section id="events" className="py-28 bg-[#FAF9F6] relative overflow-hidden border-b border-gold-200">
      {/* Visual luxury alignments */}
      <div className="absolute top-0 left-12 w-px h-full bg-gold-200/15 hidden xl:block" />
      <div className="absolute top-0 right-12 w-px h-full bg-gold-200/15 hidden xl:block" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header exactly matching requested style */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-serif text-luxury-charcoal tracking-wide leading-tight font-light">
            Unforgettable Events
          </h2>

          <p className="text-sm sm:text-base text-gold-800/80 font-sans max-w-xl mx-auto font-light leading-relaxed tracking-wide pt-4">
            Jim Corbett's premier event destination, no matter the occasion. Say "I do", set ambitious team goals, or celebrate life's major milestones in breathtaking settings accompanied by tailored gourmet catering and signature service.
          </p>
        </div>

        {/* Aligned 3-Column Luxury Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {eventTypes.map((event) => (
            <div 
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              {/* Vertical Elegant Portrait Image Wrapper */}
              <div>
                <div className="overflow-hidden aspect-[3/4] bg-zinc-100 relative mb-5 border border-gold-200/50 p-1.5 bg-white">
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-[4%] brightness-[96%] group-hover:scale-[103%] transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/[0.04] group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                </div>

                {/* Event Type Name */}
                <div className="flex items-center justify-between pt-1">
                  <h3 className="font-serif text-2xl font-light tracking-wide text-[#232323] group-hover:text-gold-500 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <ArrowRight className="w-4.5 h-4.5 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300 shrink-0" />
                </div>
                
                {/* Event Subtitle / Description teaser */}
                <p className="text-[10px] text-gold-600 uppercase tracking-widest mt-1.5 font-sans font-bold">
                  {event.subtitle}
                </p>

                <p className="text-xs text-gold-800/90 font-sans font-light leading-relaxed mt-2.5 line-clamp-2">
                  {event.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Immersive Event Detail Overlay Modal */}
      <AnimatePresence>
        {selectedEvent && (
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
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center text-luxury-charcoal hover:text-gold-500 bg-white/75 hover:bg-white transition-all border border-gold-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image Area */}
              <div className="md:col-span-5 relative h-64 md:h-full bg-zinc-100 min-h-[300px]">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover grayscale-[3%] brightness-[95%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/50 to-transparent md:bg-black/5" />
                <div className="absolute bottom-6 left-6 right-6 text-white md:hidden">
                  <span className="text-[9px] tracking-[0.25em] uppercase font-serif text-gold-400 font-bold block mb-1">
                    {selectedEvent.subtitle}
                  </span>
                  <h3 className="text-3xl font-serif font-light leading-none">
                    {selectedEvent.title}
                  </h3>
                </div>
              </div>

              {/* Right Column: Custom Event Details & Features */}
              <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
                
                {/* Content body */}
                <div>
                  <div className="hidden md:block">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-bold block mb-1">
                      {selectedEvent.subtitle}
                    </span>
                    <h3 className="text-4xl font-serif font-light text-luxury-charcoal tracking-wide">
                      {selectedEvent.title}
                    </h3>
                  </div>

                  {/* Metadata labels */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#232323] bg-gold-50 border border-gold-200/40 py-1.5 px-3">
                      <Users className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{selectedEvent.capacity}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#232323] bg-gold-50 border border-gold-200/40 py-1.5 px-3">
                      <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span>{selectedEvent.venueOptions[0]}</span>
                    </div>
                  </div>

                  <p className="text-sm text-gold-950 font-sans font-light leading-relaxed mt-6">
                    {selectedEvent.description}
                  </p>

                  <p className="text-xs text-gold-800/80 italic font-sans font-light leading-relaxed mt-3 border-l-2 border-gold-300 pl-3">
                    {selectedEvent.extraDetails}
                  </p>
                </div>

                {/* Custom Features lists */}
                <div className="space-y-4 pt-6 border-t border-gold-200/40">
                  <div className="flex items-center gap-1 text-gold-400">
                    <Sparkles className="w-4 h-4" />
                    <h4 className="font-serif text-xs uppercase tracking-widest font-black">SIGNATURE SOLUTIONS</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedEvent.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <span className="w-5 h-5 flex items-center justify-center border border-gold-200 text-gold-500 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-gold-500" />
                        </span>
                        <p className="text-xs text-gold-800 font-sans font-light leading-tight">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer and Request Action */}
                <div className="pt-6 border-t border-gold-200/30 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-[10px] text-gold-600/90 font-sans font-bold uppercase tracking-widest text-center sm:text-left">
                    * Booking well in advance is recommended for peak season dates.
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="w-full sm:w-auto bg-[#232323] text-white hover:bg-gold-500 px-6 py-2.5 text-[10px] font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-gold-400/20"
                  >
                    Close & Inquire
                  </button>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
