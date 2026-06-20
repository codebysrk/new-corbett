import { motion } from 'motion/react';
import { Compass, Sparkles, Star } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#FAF9F6] overflow-hidden relative border-b border-gold-200">
      {/* Decorative architectural layout detail line */}
      <div className="absolute top-0 left-12 w-px h-full bg-gold-200/30 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-6 space-y-8" id="about-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <span className="h-[1px] w-12 bg-gold-400"></span>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> REFINED PHILOSOPHY
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif text-luxury-charcoal tracking-wide leading-tight font-light">
                Luxury in the <br />
                <span className="italic text-gold-400">timeless wild.</span>
              </h2>
            </motion.div>

            <div className="space-y-4 text-gold-700 font-sans text-sm sm:text-base leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Corbett Treat Resort is a premium nature retreat situated in the peaceful surroundings of Village Dhela, near the renowned Jim Corbett National Park. Designed for travelers seeking both adventure and comfort, the resort combines modern hospitality with the raw beauty of the wilderness.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Whether you're planning a family vacation, romantic getaway, wildlife expedition, destination wedding, or corporate retreat, Corbett Treat Resort offers thoughtfully designed accommodations, authentic dining experiences, exciting jungle safaris, and personalized service. Surrounded by forests, open landscapes, and abundant wildlife, every stay provides an opportunity to reconnect with nature while enjoying luxury and relaxation.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From early morning bird songs and thrilling safari adventures to relaxing evenings by the pool and bonfire gatherings under the stars, Corbett Treat Resort delivers a memorable experience that captures the true spirit of Corbett.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gold-200/60"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 border border-gold-200 bg-white text-gold-400 rounded-none shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-charcoal uppercase tracking-wider">Wilderness Sanctuary</h4>
                  <p className="text-xs text-gold-600 mt-2 leading-relaxed">
                    Perfectly situated in Village Dhela, providing direct access to premium tiger safari zones of Jim Corbett.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 border border-gold-200 bg-white text-gold-400 rounded-none shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-luxury-charcoal uppercase tracking-wider">Premium Comfort</h4>
                  <p className="text-xs text-gold-600 mt-2 leading-relaxed">
                    Thoughtfully designed cottages and suites offering air conditioning, fine linen, and private outdoor spaces.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistics Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-gold-200/60 text-center md:text-left"
              id="about-statistics"
            >
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-light">24</p>
                <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-gold-600 mt-1">Luxury Lodges</p>
              </div>
              <div className="border-x border-gold-200/60 px-4">
                <p className="font-serif text-3xl sm:text-4xl text-luxury-charcoal font-light">04</p>
                <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-gold-600 mt-1">Safari Zones</p>
              </div>
              <div className="pl-2">
                <p className="font-serif text-3xl sm:text-4xl text-[#232323] font-light">150+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase font-bold text-gold-600 mt-1">Bird Species</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Beautiful Overlay Image Composition */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[550px] flex items-center justify-center lg:justify-end" id="about-images">
            {/* Primary/Larger Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-4 lg:left-0 top-0 w-[72%] h-[82%] rounded-none overflow-hidden shadow-lg border border-gold-200 bg-white p-2.5"
            >
              <div className="w-full h-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
                  alt="Jim Corbett lush forest foliage pathways"
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Secondary/Overlapping Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30, x: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute right-4 lg:right-0 bottom-6 w-[52%] h-[55%] rounded-none overflow-hidden shadow-xl border border-gold-200 bg-white p-2"
            >
              <div className="w-full h-full overflow-hidden relative">
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-tiger-in-the-forest-40177-large.mp4"
                  poster="https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?auto=format&fit=crop&w=600&q=80"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover grayscale-[10%] brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Experience Year Floating Accent Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute left-3 sm:left-4 lg:left-6 bottom-4 sm:bottom-6 lg:bottom-8 bg-[#232323] text-white p-3.5 sm:p-4 lg:p-5 text-center shadow-2xl border border-gold-400/30 rounded-none max-w-[130px] sm:max-w-[160px] lg:max-w-[180px] z-10"
              id="about-experience-badge"
            >
              <p className="font-serif text-2xl sm:text-3xl font-light leading-none">10+</p>
              <p className="text-[7px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold text-gold-400 mt-1.5 sm:mt-2">Years of Wilderness Hospitality</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
