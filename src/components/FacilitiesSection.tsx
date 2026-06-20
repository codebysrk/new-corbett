import React from 'react';
import { motion } from 'motion/react';
import { 
  Car, 
  Wifi, 
  Droplets, 
  Utensils, 
  Dices, 
  Sprout, 
  Heart, 
  Navigation, 
  Compass, 
  Trees, 
  Waves, 
  Binoculars, 
  Flame, 
  Smile,
  ArrowRight
} from 'lucide-react';

interface Facility {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const FACILITIES_LIST: Facility[] = [
  {
    id: "jungle-safari",
    title: "Jungle Safari",
    description: "Personalized open-jeep reserve tracking with certified naturalists.",
    icon: Binoculars,
    badge: "Wilderness"
  },
  {
    id: "swimming-pool",
    title: "Swimming Pool",
    description: "Crystalline turquoise pool with comfortable bespoke sun loungers.",
    icon: Waves,
    badge: "Relax"
  },
  {
    id: "bonfire-nights",
    title: "Bonfire Nights",
    description: "Evening acoustic musical gatherings under starry jungle skies.",
    icon: Flame,
    badge: "Acoustic"
  },
  {
    id: "village-excursions",
    title: "Village Excursions",
    description: "Immersive Kumaoni cultural walks led by community elders.",
    icon: Trees,
    badge: "Cultural"
  },
  {
    id: "trekking",
    title: "Trekking",
    description: "Thrilling nature walks through guided Himalayan foothill trails.",
    icon: Compass,
    badge: "Adventure"
  },
  {
    id: "in-house-dining",
    title: "In-House Dining",
    description: "Aromatic multi-cuisine masterworks and authentic local flavors.",
    icon: Utensils,
    badge: "Bespoke"
  },
  {
    id: "kitchen-garden",
    title: "Kitchen Garden",
    description: "Organic micro-greenhouse supplying fresh handpicked herbs.",
    icon: Sprout,
    badge: "Organic"
  },
  {
    id: "children-play-area",
    title: "Children's Play Area",
    description: "Safe, scenic outdoor recreation playground for boutique guests.",
    icon: Smile,
    badge: "Family"
  },
  {
    id: "free-wifi",
    title: "Free WiFi",
    description: "High-capacity remote-ready satellite internet connectivity.",
    icon: Wifi,
    badge: "Connected"
  },
  {
    id: "hot-water",
    title: "Hot Water",
    description: "Seamless 24/7 solar-heated thermal showers.",
    icon: Droplets,
  },
  {
    id: "free-parking",
    title: "Free Parking",
    description: "Spacious, secure resort gated parking under round-the-clock patrol.",
    icon: Car,
  },
  {
    id: "pet-friendly",
    title: "Pet Friendly",
    description: "Warm hospitality welcoming your beloved four-legged companions.",
    icon: Heart,
  },
  {
    id: "taxi-assistance",
    title: "Taxi Assistance",
    description: "Seamless luxury shuttle bookings and local railway transit.",
    icon: Navigation,
  },
  {
    id: "indoor-games",
    title: "Indoor Games",
    description: "Leisure lounge featuring billiards, carrom, board chess, and table tennis.",
    icon: Dices,
  }
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-neutral-50/40 relative overflow-hidden border-b border-gold-200">
      {/* Decorative vertical backdrop axis */}
      <div className="absolute right-12 top-0 w-px h-full bg-gold-200/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <span className="h-[1px] w-8 bg-gold-400"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold">
              EXCLUSIVE AMENITIES
            </span>
            <span className="h-[1px] w-8 bg-gold-400"></span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif text-luxury-charcoal tracking-wide leading-tight font-light">
            Resort Facilities & <span className="italic text-gold-500">Experiences</span>
          </h2>
          
          <p className="text-sm text-gold-800/80 max-w-xl mx-auto font-light leading-relaxed">
            Every aspect of your stay is curated to balance rustic jungle wilderness with pristine modern comfort. Explore our boutique leisure options right at the edge of Corbett.
          </p>
        </div>

        {/* Elegant Gold-Trimmed Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_LIST.map((fac, idx) => {
            const IconComponent = fac.icon;
            return (
              <motion.div
                key={fac.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white hover:bg-neutral-900 border border-gold-200/60 hover:border-gold-400 p-6 flex items-start space-x-5 transition-all duration-300 relative shadow-sm hover:shadow-lg"
                id={`facility-item-${fac.id}`}
              >
                {/* Elegant Icon Seal */}
                <div className="p-3 bg-gold-50 group-hover:bg-gold-500/10 border border-gold-200 group-hover:border-gold-400 text-gold-600 group-hover:text-gold-400 transition-colors flex-shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>

                <div className="space-y-1.5 flex-grow pr-4">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-serif text-base font-normal text-luxury-charcoal group-hover:text-white transition-colors">
                      {fac.title}
                    </h3>
                    {fac.badge && (
                      <span className="text-[7.5px] uppercase tracking-wider bg-gold-50 group-hover:bg-gold-500/25 text-gold-600 group-hover:text-gold-300 px-1.5 py-0.5 font-bold border border-gold-200 group-hover:border-gold-500/40">
                        {fac.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gold-800/80 group-hover:text-neutral-300 transition-colors leading-relaxed font-light">
                    {fac.description}
                  </p>
                </div>

                {/* Corner highlight line */}
                <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-gold-400 group-hover:w-1/3 transition-all duration-300"></span>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
