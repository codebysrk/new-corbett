import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Camera, 
  ArrowLeft, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'resort' | 'lodgings' | 'safari' | 'dining' | 'nature';
  image: string;
  description: string;
  colSpanClass: string;
  rowSpanClass: string;
  aspectClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'The Turquoise Oasis Pool',
    category: 'resort',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    description: 'Refresh beneath clear skies surrounded by whispering bamboo groves and luxury loungers.',
    colSpanClass: 'md:col-span-2',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[16/10]'
  },
  {
    id: 2,
    title: 'Majestic Royal Bengal Tiger',
    category: 'safari',
    image: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=1200&q=80',
    description: 'An unforgettable close encounter with Corbett’s supreme guardian during a dawn safari.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-2',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 3,
    title: 'The Elegant Grand Villa',
    category: 'lodgings',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    description: 'Impeccable local timber details fused with masterclass luxury and state-of-the-art comforts.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[4/3]'
  },
  {
    id: 4,
    title: 'Farm-to-Table Gastronomy',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    description: 'Handpicked organic greenhouse herbs turned into masterworks by our signature chefs.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[4/3]'
  },
  {
    id: 5,
    title: 'Misty Ramganga River Crossing',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
    description: 'A tranquil riverbank walk as morning fog dances around old towering Sal groves.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-2',
    aspectClass: 'aspect-[3/4]'
  },
  {
    id: 6,
    title: 'Campfire Storytelling Lounge',
    category: 'resort',
    image: 'https://images.unsplash.com/photo-1526491109672-74740652b963?auto=format&fit=crop&w=1200&q=80',
    description: 'Acoustic evening live music sessions around crackling mountain forest fires.',
    colSpanClass: 'md:col-span-2',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[16/10]'
  },
  {
    id: 7,
    title: 'Asiatic Elephants in the Shallows',
    category: 'safari',
    image: 'https://images.unsplash.com/photo-1581850518616-bcb8077fa213?auto=format&fit=crop&w=1200&q=80',
    description: 'Majestic forest giants enjoying a gentle afternoon swim in the pristine streams.',
    colSpanClass: 'md:col-span-2',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[16/10]'
  },
  {
    id: 8,
    title: 'Sun-Drenched Private Balcony',
    category: 'lodgings',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    description: 'Wake up to crisp woodland air and golden light filtering directly onto your deck.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[4/3]'
  },
  {
    id: 9,
    title: 'Boutique Garden High-Tea',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
    description: 'Sip signature Kumaoni herbal teas matched with curated light pastry selections.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[4/3]'
  },
  {
    id: 10,
    title: 'The Spotted Deer Sanctuary',
    category: 'safari',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1200&q=80',
    description: 'Gentle spotted chitals passing gracefully through our morning forest grasslands.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[4/3]'
  },
  {
    id: 11,
    title: 'Wilderness Wellness Spa Lounge',
    category: 'resort',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    description: 'Deep tissue therapy rooms utilizing native aromatic flowers and organic oils.',
    colSpanClass: 'md:col-span-2',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[16/10]'
  },
  {
    id: 12,
    title: 'Himalayan Ridge Sunrise',
    category: 'nature',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
    description: 'Breathtaking foothills bathed in golden cosmic radiance at the break of dawn.',
    colSpanClass: 'md:col-span-1',
    rowSpanClass: 'md:row-span-1',
    aspectClass: 'aspect-[4/3]'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Sights' },
  { id: 'resort', label: 'Resort & Grounds' },
  { id: 'lodgings', label: 'Sanctuaries & Suites' },
  { id: 'safari', label: 'Wildlife Safaris' },
  { id: 'dining', label: 'Dining & Gardens' },
  { id: 'nature', label: 'Forest Trails' }
] as const;

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<typeof CATEGORIES[number]['id']>('all');
  const [isFullViewOpen, setIsFullViewOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Filter items in the full archive view
  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeTab);

  // Curated subset shown on primary Homepage
  const curatedItems = GALLERY_ITEMS.slice(0, 6);

  // Autoplay functionality for full page slideshow lightbox
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && selectedImageIndex !== null) {
      interval = setInterval(() => {
        setSelectedImageIndex((prev) => {
          if (prev === null) return 0;
          return prev === filteredItems.length - 1 ? 0 : prev + 1;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedImageIndex, filteredItems.length]);

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    const prevIndex = selectedImageIndex === 0 ? filteredItems.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(prevIndex);
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex === null) return;
    const nextIndex = selectedImageIndex === filteredItems.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(nextIndex);
  };

  // Prevent scroll leaks when dedicated modal is viewed
  useEffect(() => {
    if (isFullViewOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullViewOpen]);

  return (
    <section id="gallery" className="py-24 bg-[#FCFBF9] relative overflow-hidden border-b border-gold-200">
      <div className="absolute top-0 right-16 w-px h-full bg-gold-200/10 hidden lg:block" />
      <div className="absolute top-0 left-16 w-px h-full bg-gold-200/10 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-[1px] w-12 bg-gold-400"></span>
            <span className="text-[10px] uppercase tracking-[0.45em] text-gold-500 font-bold flex items-center gap-2">
              <Camera className="w-3.5 h-3.5" /> VISUAL JOURNAL
            </span>
            <span className="h-[1px] w-12 bg-gold-400"></span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl font-serif text-luxury-charcoal tracking-wide leading-none font-light">
            The Experience <span className="italic text-gold-400 font-normal">in Frames</span>
          </h2>
          
          <div className="w-20 h-[1.5px] bg-gold-400/40 mx-auto my-3" />

          <p className="text-xs sm:text-sm text-gold-800/80 font-sans max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Observe the magnificent wild forest reserves, bespoke riverside sanctuaries, and exquisite garden highlights that shape tranquil moments at the resort.
          </p>
        </div>

        {/* Minimalist Grid of Curated Sights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="curated-homepage-gallery">
          {curatedItems.map((item, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              key={item.id}
              className="group relative overflow-hidden bg-white border border-gold-200/40 p-2.5 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              onClick={() => {
                // Instantly opens full portal page focused on this image index
                setIsFullViewOpen(true);
                setSelectedImageIndex(idx);
                setIsPlaying(false);
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-105 filter brightness-[0.96]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro hover feedback banner */}
                <div className="absolute inset-0 bg-[#1d1d1d]/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[7.5px] tracking-[0.2em] uppercase font-bold text-gold-400 border border-gold-400/30 px-2 py-0.5 bg-neutral-900/40 self-start">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-white text-base font-light">
                      {item.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-[8px] text-gold-300 uppercase tracking-widest pt-2">
                      <span>View Gallery Portal</span>
                      <Maximize2 className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Action see-more trigger matching luxury guidelines */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setIsFullViewOpen(true)}
            className="group pointer-events-auto bg-[#1d1d1d] hover:bg-gold-500 text-white hover:text-white border border-gold-300/30 hover:border-gold-400 transition-all duration-400 font-bold text-[10px] tracking-[0.3em] uppercase py-5 px-12 rounded-none inline-flex items-center space-x-3 shadow-md hover:shadow-xl cursor-pointer"
            id="btn-open-full-galleries"
          >
            <span>Explore Full Sights Gallery</span>
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform text-gold-400 group-hover:text-white" />
          </button>
        </div>

        {/* Dedicated Immersive Independent Gallery Subpage/Portal */}
        <AnimatePresence>
          {isFullViewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#FAF9F6] z-50 overflow-y-auto"
              id="fullscreen-gallery-portal"
            >
              <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
                
                {/* Visual grid axes lines */}
                <div className="absolute top-0 right-16 w-px h-full bg-gold-200/10 hidden lg:block pointer-events-none" />
                <div className="absolute top-0 left-16 w-px h-full bg-gold-200/10 hidden lg:block pointer-events-none" />

                <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                  
                  {/* Floating Luxury Return Action bar */}
                  <div className="flex justify-between items-center border-b border-gold-200/60 pb-6">
                    <button
                      onClick={() => {
                        setIsFullViewOpen(false);
                        setSelectedImageIndex(null);
                        setIsPlaying(false);
                      }}
                      className="group flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase font-bold text-luxury-charcoal hover:text-gold-600 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 text-gold-500 group-hover:-translate-x-1 transition-transform" />
                      <span>Back to Resort Home</span>
                    </button>

                    <div className="hidden sm:flex items-center space-x-2 text-gold-500 text-[10px] tracking-widest uppercase font-bold">
                      <Sparkles className="w-4 h-4" />
                      <span>Standalone Gallery Archive</span>
                    </div>

                    <button
                      onClick={() => setIsFullViewOpen(false)}
                      className="text-gray-400 hover:text-luxury-charcoal border border-gold-200 rounded-none w-10 h-10 flex items-center justify-center hover:bg-gold-50 transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Portal Header */}
                  <div className="text-center space-y-3 py-6">
                    <span className="text-[10px] tracking-[0.4em] font-normal text-gold-500 uppercase">
                      THE COMPREHENSIVE ARCHIVE
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl text-luxury-charcoal font-light leading-tight">
                      Experience Sights & <span className="italic font-normal text-gold-500">Aesthetics</span>
                    </h1>
                    <p className="text-xs text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
                      Deepen your adventure by filtering through architectural suites, custom culinary plates, high-speed jungle expeditions, and secret forest foothills.
                    </p>
                  </div>

                  {/* Independent Subpage Category Filters */}
                  <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 border-b border-gold-200/30 pb-6 max-w-4xl mx-auto">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setActiveTab(cat.id);
                          setSelectedImageIndex(null);
                        }}
                        className={`relative px-4 py-2.5 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold rounded-none transition-all duration-300 cursor-pointer ${
                          activeTab === cat.id
                            ? 'text-gold-600 font-black'
                            : 'text-neutral-500 hover:text-luxury-charcoal'
                        }`}
                      >
                        <span className="relative z-10">{cat.label}</span>
                        {activeTab === cat.id && (
                          <motion.span
                            layoutId="subpageActiveLine"
                            className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-gold-500"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Bento Grid containing All Gallery Items inside the page content */}
                  <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    <AnimatePresence mode="popLayout">
                      {filteredItems.map((item, index) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.4 }}
                          key={item.id}
                          className={`group relative overflow-hidden bg-white border border-gold-200/40 p-2.5 transition-all duration-500 hover:shadow-xl cursor-pointer ${
                            activeTab === 'all' ? `${item.colSpanClass} ${item.rowSpanClass}` : 'col-span-1'
                          }`}
                          onClick={() => {
                            setSelectedImageIndex(index);
                            setIsPlaying(false);
                          }}
                        >
                          <div className={`relative w-full h-full overflow-hidden ${activeTab === 'all' ? 'min-h-[220px]' : 'aspect-square md:aspect-[3/4]'}`}>
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-[950ms] ease-out group-hover:scale-105 filter brightness-[0.96]"
                              referrerPolicy="no-referrer"
                            />
                            
                            <div className="absolute inset-0 bg-neutral-900/85 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6">
                              <div className="flex justify-between items-start">
                                <span className="text-[7.5px] uppercase tracking-[0.25em] text-gold-400 font-bold border border-gold-400/40 px-2 py-0.5 bg-neutral-950/40">
                                  {CATEGORIES.find(c => c.id === item.category)?.label}
                                </span>
                                <Maximize2 className="text-white/80 w-3.5 h-3.5" />
                              </div>

                              <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-serif text-white text-lg font-light leading-tight">
                                  {item.title}
                                </h3>
                                <p className="text-[10px] text-neutral-300 font-light leading-relaxed line-clamp-2">
                                  {item.description}
                                </p>
                                <div className="pt-1.5 flex items-center space-x-1 text-gold-400 text-[8px] uppercase font-bold tracking-widest">
                                  <span>View High-Res Frame</span>
                                  <ChevronRight className="w-3 h-3" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Footing note inside portal */}
                  <div className="pt-12 text-center">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400">
                      Corbett Treat Resort • Aesthetic Catalogues
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient Darkened Lightbox Overlay for Detailed Slideshow */}
        <AnimatePresence>
          {selectedImageIndex !== null && isFullViewOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/98 z-[60] flex items-center justify-center p-4 sm:p-8 md:p-12 select-none"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Top Controls Bar */}
              <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-50 text-white border-b border-white/5 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center space-x-4">
                  <span className="text-[10px] tracking-[0.20em] font-bold text-gold-400 bg-gold-400/10 px-3 py-1 border border-gold-400/20">
                    {filteredItems[selectedImageIndex].category.toUpperCase()}
                  </span>
                  <span className="text-[11px] text-neutral-400 tracking-wider">
                    {selectedImageIndex + 1} / {filteredItems.length} Sights
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                    className="flex items-center space-x-2 text-[9px] tracking-[0.2em] uppercase font-bold text-neutral-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 cursor-pointer"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5 text-gold-400" />
                        <span>Pause Reel</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 text-gold-400" />
                        <span>Autoplay Reel</span>
                      </>
                    )}
                  </button>

                  <button
                    className="text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 border border-white/10 cursor-pointer"
                    onClick={() => setSelectedImageIndex(null)}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                className="absolute left-4 sm:left-10 text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/15 p-4 border border-white/5 backdrop-blur-sm z-40 cursor-pointer"
                onClick={handlePrevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Immersive Image Display Container */}
              <motion.div
                initial={{ scale: 0.97, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.97, y: 15 }}
                transition={{ type: 'spring', damping: 28 }}
                className="max-w-5xl w-full flex flex-col space-y-6 justify-center items-center z-40 select-none"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative max-h-[75vh] sm:max-h-[80vh] overflow-hidden border border-gold-400/30 p-2.5 bg-neutral-900/40">
                  <motion.img
                    key={selectedImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.35 }}
                    src={filteredItems[selectedImageIndex].image}
                    alt={filteredItems[selectedImageIndex].title}
                    className="max-h-[75vh] sm:max-h-[80vh] w-auto max-w-full object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
                </div>
              </motion.div>

              <button
                className="absolute right-4 sm:right-10 text-white/80 hover:text-white transition-colors bg-white/5 hover:bg-white/15 p-4 border border-white/5 backdrop-blur-sm z-40 cursor-pointer"
                onClick={handleNextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
