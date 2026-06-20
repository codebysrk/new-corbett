import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Check, 
  Users, 
  MapPin, 
  Calendar, 
  HelpCircle, 
  Calculator, 
  CheckCircle,
  Clock,
  ArrowRight,
  Sparkle,
  Bookmark
} from 'lucide-react';

interface EventsPageProps {
  onBackToHome: () => void;
}

const detailedEvents = [
  {
    id: 'weddings',
    title: 'Weddings',
    subtitle: 'Nuptials In Village Dhela Grasslands',
    description: 'Pristine riverside mandaps, deep forest backdrops, and candle-lit wooden deck receptions. Say "I do" surrounded by wild beauty and the flowing sound of the Ramganga River.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    capacity: 'Up to 350 Guests',
    venueOptions: ['The Sal Forest Lawn', 'Riverbed Meadow', 'Under-the-Stars Deck'],
    features: [
      'Bespoke Kumaoni & Global culinary catering curation',
      'Rustic timber floral gazebos and lantern decoration',
      'Exclusive forest entrance and luxury transport arrangements',
      'Dedicated wedding design and production concierge'
    ]
  },
  {
    id: 'birthdays',
    title: 'Birthday Celebrations',
    subtitle: 'Milestone Birthday & Theme Parties',
    description: 'Make your birthday milestone truly unforgettable. From intimate poolside family dinners to grand themed evening dances under stargit skies with custom cakes, live music, and personalized decor.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    capacity: '20 to 150 Guests',
    venueOptions: ['The Deck at Ember Creek', 'Central Lawn amphitheater', 'Private Canopy Gazebos'],
    features: [
      'Custom decorative theme setups with balloons and lanterns',
      'Gourmet multi-cuisine buffet and customized designer cakes',
      'Live acoustic guitarists or local Uttarakhand folk musicians',
      'Dedicated kids playzone setup and audio visual arrangements'
    ]
  },
  {
    id: 'kitty-parties',
    title: 'Kitty Parties',
    subtitle: 'Chic Social Gatherings & High Tea Meets',
    description: 'Relax and bond with your circle in our pristine nature gardens. Host vibrant, luxury kitty meets featuring gourmet wood-fired pizzas, herbal high-teas, light games, and spectacular selfie points.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    capacity: '10 to 60 Guests',
    venueOptions: ['Riverbed Meadow Deck', 'The Glasshouse Pavilion', 'Orchard Greenhouse Gazebo'],
    features: [
      'Premium high-tea assemblies, mocktails, and fresh bakeries',
      'Personalized theme setup and fun icebreaking games coordination',
      'Gorgeous scenic riverbed photographs captured by our naturalist',
      'Exclusive private seating arrangements'
    ]
  },
  {
    id: 'get-togethers',
    title: 'Get-Togethers',
    subtitle: 'Scenic Reunions & Social Meets',
    description: 'Reconnect with old friends and beloved family members. Share bonfire stories, play light cricket on the grass, stream late-night karaoke, and dine on authentic local mountain organic wheat preparations.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
    capacity: '15 to 200 Guests',
    venueOptions: ['Ember Creek Bonfire Ring', 'The Forest Grill Amphitheater', 'Dhela Nature Lawn'],
    features: [
      'Grand open bonfire setups with live tandoor and barbecues',
      'Karaoke audio setups, board games, and group forest treks',
      'Group photography and memory keepsake video recordings',
      'Special customized children food menus and elderly assistance'
    ]
  },
  {
    id: 'meetings',
    title: 'Corporate Retreats',
    subtitle: 'High-Performance Mindful Seminars',
    description: 'Elite executive gatherings, team brainstorming escapes, and high-tech corporate summits in a highly inspiring glass-front pavilion with state-of-the-art facilities.',
    image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80',
    capacity: 'Up to 150 Attendees',
    venueOptions: ['The Glasshouse Pavilion', 'Creekside Boardroom', 'Central Lawn amphitheater'],
    features: [
      'High-speed fiber connectivity with complete hybrid stream options',
      'Ergonomic handcrafted leather seats and natural sound insulation',
      'Post-meeting team-building wilderness safaris and birding treks',
      'Customized premium health breaks and single-origin coffee bar'
    ]
  }
];

export default function EventsPage({ onBackToHome }: EventsPageProps) {
  // Calculator config states
  const [eventType, setEventType] = useState<string>('weddings');
  const [guests, setGuests] = useState<number>(100);
  const [days, setDays] = useState<number>(2);
  const [includeCatering, setIncludeCatering] = useState<boolean>(true);
  const [includePhotography, setIncludePhotography] = useState<boolean>(false);
  const [includeSafaris, setIncludeSafaris] = useState<boolean>(true);

  // Enquiry Submission Form state
  const [enquirySuccess, setEnquirySuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    customRequests: ''
  });

  // Calculate dynamic quote estimation
  const calculateEstimate = () => {
    let basePricePerGuestPerDay = 40; // default for others
    if (eventType === 'weddings') basePricePerGuestPerDay = 85;
    else if (eventType === 'birthdays') basePricePerGuestPerDay = 45;
    else if (eventType === 'kitty-parties') basePricePerGuestPerDay = 35;
    else if (eventType === 'meetings') basePricePerGuestPerDay = 50;

    let subtotal = basePricePerGuestPerDay * guests * days;

    if (includeCatering) {
      const cateringPrice = eventType === 'weddings' ? 35 : 20;
      subtotal += cateringPrice * guests * days;
    }
    if (includePhotography) {
      subtotal += 450 * days;
    }
    if (includeSafaris) {
      subtotal += 60 * guests; // per guest permit fee / jeep shares
    }

    return Math.round(subtotal);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Please provide your name and email so we can send the formal quote.');
      return;
    }
    setEnquirySuccess(true);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-luxury-charcoal" id="events-page-wrapper">
      
      {/* Editorial Header bar */}
      <div className="relative pt-28 pb-16 overflow-hidden border-b border-gold-200 bg-neutral-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="absolute top-0 left-16 w-px h-full bg-white/5 hidden lg:block" />
        <div className="absolute top-0 right-16 w-px h-full bg-white/5 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={onBackToHome}
            className="group flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase font-bold text-gold-400 hover:text-white transition-colors cursor-pointer mb-8"
          >
            <ArrowLeft className="w-4 h-4 text-gold-400 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Home</span>
          </button>

          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] tracking-[0.4em] font-bold text-gold-400 uppercase block">
              DHELA MEADOWS • CORBETT CELEBRATIONS
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-light leading-tight tracking-wide">
              Bespoke Forest <br />
              <span className="italic text-gold-300 font-normal">Events & Seminars</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl font-light font-sans pt-2">
              From candlelit wild forest weddings to focused elite executive brainstorm sessions, shape memories in Jim Corbett’s most inspiring outdoor venues.
            </p>
          </div>
        </div>
      </div>

      {/* Events Categories Presentation List */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {detailedEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={event.id}
              className={`flex flex-col lg:flex-row gap-12 items-center border-b border-gold-200/40 pb-16 last:border-0 last:pb-0 ${
                !isEven ? 'lg:flex-row-reverse' : ''
              }`}
              id={`events-category-${event.id}`}
            >
              
              {/* Event Image view */}
              <div className="w-full lg:w-1/2 overflow-hidden aspect-[4/3] border border-gold-200 p-2 bg-white relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover grayscale-[1%] brightness-[96%] hover:scale-[102%] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Meta Capacity Badge */}
                <div className="absolute top-6 left-6 bg-neutral-900/90 text-white border border-gold-400/30 font-bold px-3 py-1.5 text-[8.5px] uppercase tracking-widest flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-gold-400" />
                  <span>{event.capacity}</span>
                </div>
              </div>

              {/* Event Info Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-2 text-gold-500">
                  <Sparkle className="w-4 h-4 text-gold-400" />
                  <span className="text-[10px] tracking-[0.25em] font-bold uppercase">{event.subtitle}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-light text-luxury-charcoal">
                  {event.title}
                </h3>
                
                <p className="text-sm text-gold-950 font-sans leading-relaxed font-light">
                  {event.description}
                </p>

                {/* Event venues checklist */}
                <div>
                  <span className="text-[8px] tracking-widest font-bold text-neutral-400 uppercase block mb-3">VENUE LOCATIONS AT THE RESORT</span>
                  <div className="flex flex-wrap gap-2">
                    {event.venueOptions.map((v, i) => (
                      <span 
                        key={i}
                        className="bg-neutral-950 text-white font-sans text-[9px] py-1.5 px-3 uppercase tracking-wider font-bold"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Event signature solutions list */}
                <div className="pt-6 border-t border-gold-200/40 space-y-3">
                  <span className="text-[8.5px] tracking-widest font-black text-gold-500 uppercase block">INCLUDED SOLUTIONS</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {event.features.map((feat, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span className="w-4.5 h-4.5 flex items-center justify-center border border-emerald-200 text-emerald-600 rounded-full shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <p className="text-[11.5px] text-neutral-500 font-sans font-light leading-snug">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </section>

    </div>
  );
}
