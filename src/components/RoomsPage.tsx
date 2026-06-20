import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Check, 
  Tv, 
  Wifi, 
  Coffee, 
  Eye, 
  Grid, 
  Maximize2, 
  Calculator, 
  DollarSign, 
  Compass, 
  Waves,
  Zap,
  Info
} from 'lucide-react';
import { ROOMS } from '../data';

interface RoomsPageProps {
  onBackToHome: () => void;
  onBookRoom: (roomId: string) => void;
  currency: string;
}

const filterOptions = [
  { id: 'all', label: 'All Lodgings' },
  { id: 'deluxe', label: 'Cottages' },
  { id: 'family-couple', label: 'Wilderness Suites' },
  { id: 'premium', label: 'Private Pool Villas' }
] as const;

export default function RoomsPage({ onBackToHome, onBookRoom, currency }: RoomsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<typeof filterOptions[number]['id']>('all');
  const [guestLimit, setGuestLimit] = useState<number>(0);
  const [hasOfferIncluded, setHasOfferIncluded] = useState<boolean>(false);

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Filter & match calculation logic
  const filteredRooms = ROOMS.filter(room => {
    const matchesCategory = selectedFilter === 'all' || room.type === selectedFilter;
    const matchesGuests = guestLimit === 0 || room.maxGuests >= guestLimit;
    const matchesOffers = !hasOfferIncluded || room.pricePerNight > 150; // Premium suites offer special packages
    return matchesCategory && matchesGuests && matchesOffers;
  });

  const getPriceMultiplier = () => {
    if (currency === 'EUR') return 0.92;
    if (currency === 'GBP') return 0.78;
    return 1;
  };

  const getCurrencySymbol = () => {
    if (currency === 'EUR') return '€';
    if (currency === 'GBP') return '£';
    return '$';
  };

  return (
    <div className="bg-[#FAF9F6] text-luxury-charcoal" id="rooms-page-wrapper">
      
      {/* Editorial Header bar */}
      <div className="relative pt-28 pb-16 overflow-hidden border-b border-gold-200 bg-neutral-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
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
              ACCOMMODATIONS & SANCTUARIES
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-light leading-tight tracking-wide">
              The Woodcrafted <br />
              <span className="italic text-gold-300 font-normal">Rooms & Cottages</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl font-light font-sans pt-2">
              Deepen relaxation inside freestanding lodges built with pristine regional wood, premium natural skylights, and majestic vistas of Corbett forests.
            </p>
          </div>
        </div>
      </div>

      {/* Lodging Search Filter Parameters */}
      <section className="py-8 bg-white border-b border-gold-200 sticky top-[60px] sm:top-[74px] z-30 shadow-sm px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Categories selectors */}
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-4 py-2 text-[10.5px] uppercase tracking-widest font-bold border Transition-all duration-300 cursor-pointer ${
                  selectedFilter === opt.id
                    ? 'bg-luxury-charcoal text-white border-luxury-charcoal'
                    : 'bg-transparent text-neutral-500 border-gold-200/50 hover:border-gold-400 hover:text-luxury-charcoal'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Guest Count Limits and dynamic toggles */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Guests:</span>
              <select
                value={guestLimit}
                onChange={(e) => setGuestLimit(Number(e.target.value))}
                className="bg-white border border-gold-200 px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-gold-400 font-bold"
              >
                <option value={0}>Any Occupancy</option>
                <option value={2}>2+ Guests</option>
                <option value={3}>3+ Guests</option>
                <option value={4}>4 Guests</option>
              </select>
            </div>

            <label className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-neutral-500 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={hasOfferIncluded}
                onChange={(e) => setHasOfferIncluded(e.target.checked)}
                className="w-4 h-4 accent-gold-400 border border-gold-300"
              />
              <span>Premium Suites Only</span>
            </label>
          </div>

        </div>
      </section>

      {/* Structured Suites & Cottages List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredRooms.length === 0 ? (
          <div className="text-center py-20 bg-white border border-gold-200/45 p-12">
            <Info className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="font-serif text-2xl font-light text-luxury-charcoal">No Lodgings Match Selection</h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-sm mx-auto font-light">
              Try adjusting your guest capacity filters or switching to "All Lodgings" to view our master collection.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredRooms.map((room, idx) => {
              const convertedPrice = Math.round(room.pricePerNight * getPriceMultiplier());
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={room.id}
                  className={`flex flex-col lg:flex-row gap-12 items-center bg-white border border-gold-200/50 p-6 sm:p-10 shadow-sm hover:shadow-lg transition-shadow duration-500 ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                  id={`room-card-${room.id}`}
                >
                  {/* Left component: Image layout */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden aspect-[4/3] bg-zinc-50 border border-gold-100 p-2">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover grayscale-[2%] brightness-[96%] hover:scale-[102%] transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Size and view badge overlay */}
                    <div className="absolute bottom-5 left-5 right-5 bg-neutral-900/90 text-white p-4 flex justify-between border border-gold-400/30">
                      <div>
                        <span className="text-[7.5px] tracking-[0.2em] uppercase text-gold-400 font-bold block">ROOM SIZE</span>
                        <span className="text-[11px] font-mono">{room.size}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[7.5px] tracking-[0.2em] uppercase text-gold-400 font-bold block">VISTA VIEW</span>
                        <span className="text-[11px] font-serif font-light">{room.view}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right component: Rich Spec Data */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex justify-between items-start border-b border-gold-200/40 pb-4">
                      <div>
                        <div className="flex items-center space-x-1 text-gold-500 mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="text-[8.5px] uppercase tracking-[0.25em] font-bold">Premium Sanctuary</span>
                        </div>
                        <h3 className="font-serif text-3xl font-light text-luxury-charcoal tracking-wide">
                          {room.name}
                        </h3>
                      </div>

                      <div className="text-right">
                        <p className="text-[9px] text-neutral-400 uppercase tracking-widest">PER NIGHT</p>
                        <p className="font-mono text-3xl font-bold text-gold-600">
                          {getCurrencySymbol()}{convertedPrice}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs text-gold-900/90 leading-relaxed font-sans font-light">
                      {room.description}
                    </p>

                    {/* Quick feature checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-gold-100">
                      <div>
                        <span className="text-[8px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">BEDDING ARRAYS</span>
                        <p className="text-xs text-[#232323] font-serif italic">{room.bedType}</p>
                      </div>
                      <div>
                        <span className="text-[8px] uppercase tracking-widest font-bold text-neutral-400 block mb-2">MAX OCCUPANCY</span>
                        <p className="text-xs text-[#232323] font-light">Up to {room.maxGuests} Active Guests</p>
                      </div>
                    </div>

                    {/* Inclusive Luxury Upgrades & Amenities panel */}
                    <div className="space-y-3">
                      <span className="text-[8px] tracking-[0.25em] font-bold text-gold-500 uppercase block">WHAT IS INCLUDED IN THIS LODGINGS</span>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((amenity, i) => (
                          <span 
                            key={i}
                            className="bg-gold-50 border border-gold-200/45 text-[10px] text-gold-900 font-sans py-1.5 px-3 uppercase tracking-wider font-medium inline-flex items-center gap-1.5"
                          >
                            <Check className="w-3.5 h-3.5 text-gold-500" />
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Book trigger action bar */}
                    <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-[10px] text-neutral-400/90 font-mono font-bold leading-none">
                        * Immediate confirmation • Zero credit card deposit required today
                      </p>
                      <button
                        onClick={() => onBookRoom(room.id)}
                        className="bg-neutral-900 hover:bg-gold-500 text-white p-4 text-[10px] uppercase font-bold tracking-[0.3em] rounded-none transition-colors border border-gold-400/10 cursor-pointer"
                      >
                        RESERVE THIS SANCTUARIES
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Comparison Specifications Matrix detailing elite level of luxury */}
      <section className="py-20 bg-neutral-900 border-t border-gold-200/10 text-white select-none">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase">LUXURY SPEC COMPARISONS</span>
            <h2 className="text-3xl font-serif font-light text-white">Compare Suite Amenities</h2>
          </div>

          <div className="overflow-x-auto border border-white/10" id="lodging-comparison-matrix">
            <table className="w-full text-left text-xs font-light">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-[9.5px] uppercase tracking-widest font-bold text-gold-400">
                  <th className="p-4">SANCTUARIES SIGHTS</th>
                  <th className="p-4">AIR CON</th>
                  <th className="p-4">FREE WIFI</th>
                  <th className="p-4">PRIVATE MINIBAR</th>
                  <th className="p-4">AYURVEDIC SPA ACC.</th>
                  <th className="p-4">PRIVATE POOL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-serif text-sm">Deluxe Jungle Cottage</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-neutral-500">—</td>
                  <td className="p-4 text-neutral-500">—</td>
                  <td className="p-4 text-neutral-500">—</td>
                </tr>
                <tr>
                  <td className="p-4 font-serif text-sm">Family & Couple Cottage</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-neutral-500">—</td>
                  <td className="p-4 text-neutral-500">—</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="p-4 font-serif text-sm text-gold-300">Premium Forest Pool Cottage</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-emerald-400">✓ Included</td>
                  <td className="p-4 text-emerald-400">✓ Full Access</td>
                  <td className="p-4 text-emerald-400">✓ Heaters Installed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
