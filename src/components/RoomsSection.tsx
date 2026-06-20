import { useState } from 'react';
import { ROOMS } from '../data';
import { Room } from '../types';
import { Bed, Maximize2, Sparkles, Star, ArrowRight, Eye, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RoomsSectionProps {
  onBookRoom: (roomId: string) => void;
  currency: string;
}

export default function RoomsSection({ onBookRoom, currency }: RoomsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'deluxe' | 'family-couple' | 'premium'>('all');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  // Currency Converter Symbol and Rate mapping
  const getConvertedPrice = (price: number) => {
    switch (currency) {
      case 'EUR':
        return { symbol: '€', amount: Math.round(price * 0.92) };
      case 'GBP':
        return { symbol: '£', amount: Math.round(price * 0.79) };
      case 'USD':
      default:
        return { symbol: '$', amount: price };
    }
  };

  const filteredRooms = ROOMS.filter((room) => {
    if (activeFilter === 'all') return true;
    return room.type === activeFilter;
  });

  return (
    <section id="rooms" className="py-24 bg-white overflow-hidden border-b border-gold-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-[1px] w-12 bg-gold-400"></span>
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold-400 font-bold">
              PREMIUM LODGES & SUITES
            </span>
            <span className="h-[1px] w-12 bg-gold-400"></span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif text-luxury-charcoal tracking-wide leading-tight font-light">
            Impeccable Spaces <br />
            <span className="italic text-gold-400">Crafted for Absolute Indulgence</span>
          </h2>
          <p className="text-sm text-gold-700 tracking-wide font-light max-w-2xl mx-auto">
            Each accommodation combines custom rustic layout proportions, premium comforts, and expansive balconies overlooking the magnificent Jim Corbett woodlands.
          </p>
        </div>



        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10" id="rooms-grid">
          <AnimatePresence mode="popLayout">
            {filteredRooms.map((room) => {
              const converted = getConvertedPrice(room.pricePerNight);
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={room.id}
                  className="bg-white rounded-none overflow-hidden shadow-sm border border-gold-200 hover:shadow-lg transition-all duration-500 flex flex-col group p-2.5"
                >
                  {/* Image Container */}
                  <div className="relative h-60 sm:h-64 overflow-hidden shrink-0">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Room Tag */}
                    <div className="absolute top-4 left-4 bg-white/95 border border-gold-200 text-gold-700 text-[9px] tracking-[0.2em] uppercase font-bold py-1.5 px-3.5 rounded-none shadow-sm">
                      <span>{room.type === 'family-couple' ? 'Family & Couple' : room.type}</span>
                    </div>

                    {/* View Tag */}
                    <div className="absolute bottom-4 right-4 bg-[#232323]/90 text-white text-[9px] tracking-[0.15em] uppercase font-bold py-1 px-3 rounded-none border border-gold-400/20">
                      {room.view}
                    </div>
                  </div>

                  {/* Room Details Panel */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-4">


                      <h3 className="font-serif text-xl sm:text-2xl text-luxury-charcoal leading-tight hover:text-gold-500 transition-colors duration-300 font-light">
                        {room.name}
                      </h3>

                      <p className="text-neutral-500 font-light text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {room.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {room.features.slice(0, 2).map((feat, i) => (
                          <span
                            key={i}
                            className="bg-neutral-50/80 text-[8.5px] text-gold-600 uppercase tracking-widest px-2.5 py-1 rounded-none border border-gold-200/40 font-bold"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Simple Bottom Action Section */}
                    <div className="pt-5 mt-5 border-t border-gold-200/40 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setSelectedRoom(room);
                          setActiveGalleryIndex(0);
                        }}
                        className="text-[9px] tracking-[0.2em] font-bold text-gold-600 hover:text-neutral-900 uppercase transition-colors py-2 cursor-pointer"
                      >
                        View Specs
                      </button>
                      <button
                        onClick={() => onBookRoom(room.id)}
                        className="bg-[#1d1d1d] hover:bg-gold-500 text-white font-bold text-[9px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-none transition-all duration-300 shadow-sm cursor-pointer"
                      >
                        Reserve Lodge
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Room Specification Modal/Drawer */}
        <AnimatePresence>
          {selectedRoom && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedRoom(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-x-4 bottom-4 top-20 md:inset-auto md:top-auto md:w-full md:max-w-4xl bg-[#FAF9F6] rounded-none shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row border border-gold-200 p-2 md:p-3"
                id="room-details-modal"
              >
                {/* Left side: Gallery */}
                <div className="md:w-1/2 bg-[#232323] relative flex flex-col justify-between shrink-0 h-64 md:h-auto border border-gold-200">
                  <div className="absolute inset-0">
                    <img
                      src={selectedRoom.gallery[activeGalleryIndex]}
                      alt={selectedRoom.name}
                      className="w-full h-full object-cover transition-all duration-500 grayscale-[10%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  </div>

                  {/* Header/Close button for mobile */}
                  <div className="p-4 relative flex justify-between items-start">
                    <span className="text-white text-[9px] bg-[#232323]/90 border border-gold-400 font-bold px-3 py-1.5 rounded-none uppercase tracking-[0.2em]">
                      {selectedRoom.type === 'family-couple' ? 'Family & Couple' : selectedRoom.type}
                    </span>
                    <button
                      onClick={() => setSelectedRoom(null)}
                      className="md:hidden bg-black/50 backdrop-blur-md rounded-none py-1.5 px-3 text-white border border-white/20 hover:bg-black/80"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Bottom Navigation Thumbnails */}
                  <div className="p-4 relative space-y-2">
                    <p className="text-[9px] tracking-widest uppercase text-white/80 font-bold">Image Suite Gallery</p>
                    <div className="flex space-x-2">
                      {selectedRoom.gallery.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveGalleryIndex(i)}
                          className={`w-14 h-10 rounded-none overflow-hidden border transition-all ${
                            activeGalleryIndex === i ? 'border-gold-400 scale-105 shadow-md' : 'border-transparent opacity-60'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Detailed Specs */}
                <div className="md:w-1/2 p-6 sm:p-8 flex flex-col overflow-y-auto max-h-[calc(100vh-320px)] md:max-h-[600px] bg-white border border-gold-200 border-l-0 md:border-l">
                  {/* Close button for desktop */}
                  <div className="hidden md:flex justify-end mb-2">
                    <button
                      onClick={() => setSelectedRoom(null)}
                      className="text-gray-400 hover:text-luxury-charcoal transition-colors border border-gold-200 rounded-none p-2 w-10 h-10 flex items-center justify-center hover:bg-gold-50"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-6 flex-1">
                    <div>
                      <div className="flex items-center space-x-2 text-[10px] tracking-widest uppercase text-gold-600 font-bold">
                        <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                        <span>{selectedRoom.rating.toFixed(2)} / 5.0 Ratings</span>
                      </div>
                      <h3 className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-light mt-1.5">
                        {selectedRoom.name}
                      </h3>
                    </div>

                    <p className="text-gold-700 font-light text-sm leading-relaxed">
                      {selectedRoom.description}
                    </p>

                    {/* Meta Specifications */}
                    <div className="grid grid-cols-2 gap-4 bg-[#FAF9F6] border border-gold-200/60 p-4 rounded-none text-xs">
                      <div>
                        <p className="text-gold-500 uppercase tracking-widest text-[9px] font-bold">Space Dimensions</p>
                        <p className="font-semibold text-luxury-charcoal mt-1">{selectedRoom.size}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 uppercase tracking-widest text-[9px] font-bold">Bed Comfort</p>
                        <p className="font-semibold text-luxury-charcoal mt-1">{selectedRoom.bedType}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 uppercase tracking-widest text-[9px] font-bold">Resort Views</p>
                        <p className="font-semibold text-luxury-charcoal mt-1">{selectedRoom.view}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 uppercase tracking-widest text-[9px] font-bold">Max Occupancy</p>
                        <p className="font-semibold text-luxury-charcoal mt-1">{selectedRoom.maxGuests} Adults</p>
                      </div>
                    </div>

                    {/* Room Amenities */}
                    <div>
                      <h4 className="font-serif text-md font-semibold tracking-wider text-luxury-charcoal uppercase mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-gold-400" /> Included Lounge Services
                      </h4>
                      <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-gold-700 font-light">
                        {selectedRoom.amenities.map((amenity, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 bg-gold-400 shrink-0" />
                            <span>{amenity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Price & CTA Section */}
                  <div className="pt-6 mt-8 border-t border-gold-200/80 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-gold-500 font-bold">EXCELLENCE TIER</p>
                      <p className="font-serif text-lg text-gold-600 font-light mt-0.5">
                        Luxury Sanctuary
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        const rId = selectedRoom.id;
                        setSelectedRoom(null);
                        onBookRoom(rId);
                      }}
                      className="bg-[#232323] hover:bg-gold-400 text-white font-bold text-[10px] tracking-[0.25em] uppercase px-8 py-4 rounded-none transition-all duration-300 border border-transparent shadow"
                    >
                      Reserve Now
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
