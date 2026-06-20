import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Eye, 
  Leaf, 
  Heart, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  Globe2,
  TreePine,
  Activity,
  Compass,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

const philosophyPillars = [
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: 'Eco-Sustainable Lodging',
    text: 'Formulated with local thatch roofs, mud-plastered timber walls, and natural Shivalik gravel pathways to minimize structural heat absorption and eliminate plastic footprints.'
  },
  {
    icon: <Globe2 className="w-6 h-6 text-gold-600" />,
    title: 'Village Co-Existence',
    text: 'Over 85% of our staff members are local descendants from Village Dhela. We funnel guest tourism value directly into local primary schools, water wells, and organic Kumaon wheat farms.'
  },
  {
    icon: <TreePine className="w-6 h-6 text-green-600" />,
    title: 'Preserve Boundaries Care',
    text: 'Maintaining silent non-audible zones. All outdoor evening bonfires use dry-fallen mountain timber rather than felling fresh woodland wood, safeguarding Jhirna reserve corridors.'
  },
  {
    icon: <Heart className="w-6 h-6 text-rose-600" />,
    title: 'Authentic Wildlife Advocacy',
    text: 'Fostering non-intrusive jeep driving parameters. We actively educate guests on conservation ethics, helping them appreciate tigers and elephants without disturbing native mating tracks.'
  }
];

const timelineMilestones = [
  {
    year: '2015',
    title: 'The Foundation',
    subtitle: 'A Humble Birding Outpost',
    description: 'Began as a simple, 4-lodge sanctuary with local naturalists pointing out mountain eagles and leopards to visiting conservationists.'
  },
  {
    year: '2018',
    title: 'The Expansion',
    subtitle: 'Bespoke Wooden Architecture',
    description: 'Constructed our signature Deluxe Jungle Cottages using classical stone craft techniques, incorporating custom organic local slate panels.'
  },
  {
    year: '2021',
    title: 'Carbon-Neutral Certification',
    subtitle: 'Leading Sustainability standards',
    description: 'Transitioned the entire resort to off-grid solar-thermal warm water loops, certified with Zero Waste status across all organic compost setups.'
  },
  {
    year: '2026',
    title: 'Cornett Treat Today',
    subtitle: 'The Premier Forest Sanctuary',
    description: 'Acclaimed globally as Jim Corbett’s ultimate wellness ecosystem, providing pristine river deck spaces, botanical high-tea, and supreme comfort.'
  }
];

const exoticSpecies = [
  {
    name: 'Royal Bengal Tiger',
    type: 'Fauna • Guardian',
    desc: 'The undisputed sovereign of the Jim Corbett Sal grasslands. Best tracked on morning Jeep rides through Jhirna or Bijrani.'
  },
  {
    name: 'Asiatic Forest Elephant',
    type: 'Fauna • Giant',
    desc: 'Gentle family herds passing majestically through ramified dry sand beds of riverbeds near local Village Dhela.'
  },
  {
    name: 'Crested Serpent Eagle',
    type: 'Avian • Predator',
    desc: 'Exquisite crested raptor frequently observed nesting silently on upper canopy Sal tree tops, letting out high flutey notes.'
  },
  {
    name: 'Sal Forest Canopy (Shorea robusta)',
    type: 'Flora • Forest Backbone',
    desc: 'Towering native hardwoods lining 75% of Corbett. Their dense canopy blocks peak tropical midday heat, keeping the resort pathways beautifully cool.'
  }
];

export default function AboutPage({ onBackToHome, onOpenBooking }: AboutPageProps) {
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="bg-[#FAF9F6] text-luxury-charcoal" id="about-page-wrapper">
      
      {/* Visual Backdrop details */}
      <div className="relative pt-28 pb-16 overflow-hidden border-b border-gold-200 bg-neutral-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center mix-blend-overlay opacity-25" />
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
              ESTABLISHED IN HARMONY • SINCE 2015
            </span>
            <h1 className="text-5xl sm:text-6xl font-serif font-light leading-tight tracking-wide">
              Where wilderness meets <br />
              <span className="italic text-gold-300 font-normal">conscious luxury</span>
            </h1>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl font-light font-sans pt-2">
              Our history is rooted in Village Dhela, safeguarding old migratory corridors while providing a premier sanctuary for travelers seeking immersive Himalayan nature.
            </p>
          </div>
        </div>
      </div>

      {/* Sustainable Philosophy Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-b border-gold-200/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="h-[1px] w-8 bg-gold-400"></span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gold-500">OUR PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light tracking-wide leading-tight">
              Honoring the ecology of <span className="italic font-normal text-gold-500">Jim Corbett</span> National Park.
            </h2>
            <p className="text-xs text-gold-800 leading-relaxed font-sans font-light">
              We operate under a strict code of environmental stewardship. Our location in Village Dhela is strategically curated to maintain complete respect for tigers, deer, and countless endemic birds that share this pristine mountain valley.
            </p>
            
            {/* Embedded Quality badging */}
            <div className="p-6 bg-white border border-gold-300/40 space-y-4" id="philosophy-quality-badge">
              <div className="flex items-center space-x-3 text-gold-500">
                <ShieldCheck className="w-6 h-6 shrink-0" />
                <span className="font-serif text-sm uppercase tracking-wider font-bold">100% Sustainable Operations</span>
              </div>
              <p className="text-[11px] text-neutral-500 font-light leading-relaxed">
                From organic farm supply lines to natural timber building logs, we make sure local ecological balance remains completely unharmed.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {philosophyPillars.map((pillar, i) => (
              <div key={i} className="bg-white p-8 border border-gold-200/40 space-y-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 flex items-center justify-center border border-gold-200 bg-[#FCFBF9]">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-base font-bold text-luxury-charcoal uppercase tracking-wider">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light font-sans">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE TIMELINE SECTION */}
      <section className="py-24 bg-[#FCFBF9] border-b border-gold-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] tracking-[0.3em] text-gold-500 font-bold uppercase">Chronicles of Corbett Treat</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-luxury-charcoal">Resort Timeline</h2>
            <p className="text-xs text-neutral-400 font-light max-w-md mx-auto">
              Follow our evolution as we transformed a rustic wilderness campsite into a state-of-the-art conscious resort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timelineMilestones.map((milestone, idx) => (
              <div key={idx} className="relative bg-white border border-gold-200 p-8 flex flex-col justify-between group hover:border-gold-400 transition-colors">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gold-200 pb-3">
                    <span className="font-serif text-3xl font-light text-gold-500">
                      {milestone.year}
                    </span>
                    <Clock className="w-4 h-4 text-gold-300" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-luxury-charcoal tracking-wide-sm leading-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-[10px] text-gold-600 font-bold uppercase tracking-widest leading-none">
                    {milestone.subtitle}
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLORA AND FAUNA OF THE CORBETT FOREST */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative h-[400px] sm:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=800&q=80"
              alt="Majestic Tiger moving smoothly in Jim Corbett grasslands"
              className="w-full h-full object-cover border border-gold-200 p-2.5 bg-white shadow-lg"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-luxury-charcoal text-white p-6 border border-gold-400/30 flex flex-col justify-center text-center hidden sm:flex">
              <span className="font-serif text-3xl text-gold-400 font-light">150+</span>
              <span className="text-[8px] uppercase tracking-widest font-sans font-bold text-gold-200 mt-2">Endemic Bird Species</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.3em] font-bold text-gold-500 uppercase">LOCAL BIODIVERSITY GUIDE</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-luxury-charcoal">
                The Wildlife surrounding <span className="italic text-gold-500">Village Dhela</span>
              </h2>
              <p className="text-xs text-gold-900 leading-relaxed font-light">
                Our resident naturalists lead regular forest edge walks to teach young and veteran travelers how to track wildlife footprints and listen to exotic avian accents:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {exoticSpecies.map((species, i) => (
                <div key={i} className="p-5 bg-white border border-gold-200/50 space-y-2">
                  <span className="text-[8.5px] uppercase tracking-widest font-bold text-gold-600 block">
                    {species.type}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#232323]">
                    {species.name}
                  </h4>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {species.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Call To Action */}
      <section className="bg-neutral-900 text-white py-16 text-center select-none relative overflow-hidden" id="about-booking-cta">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-[9px] tracking-[0.4em] text-gold-400 uppercase font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> DEEPEN YOUR DISCOVERY
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif font-light">
            Ready to experience conscious forest hospitality?
          </h3>
          <p className="text-neutral-400 text-xs font-light max-w-lg mx-auto">
            Book one of our meticulously timber-crafted sanctuaries that fund local Dhela primary education loops directly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-white hover:bg-gold-500 hover:text-white transition-colors text-neutral-950 font-bold text-[10px] tracking-[0.3em] uppercase py-4 px-10 rounded-none cursor-pointer"
            >
              Check Availability
            </button>
            <button
              onClick={onBackToHome}
              className="text-white hover:text-gold-300 font-bold text-[10px] tracking-[0.3em] uppercase transition-colors flex items-center space-x-2 cursor-pointer pb-1 border-b border-transparent hover:border-gold-300"
            >
              <span>Back To Home</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
