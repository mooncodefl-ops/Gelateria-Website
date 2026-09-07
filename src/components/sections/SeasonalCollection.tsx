import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { seasonalCollections, seasonalFlavours } from '@/data/seasonal';
import { useReducedMotion } from '@/hooks/useMotion';

export default function SeasonalCollection() {
  const [activeSeason, setActiveSeason] = useState<'Summer' | 'Winter'>('Summer');
  const reduced = useReducedMotion();
  const flavours = seasonalFlavours(activeSeason);
  const collection = seasonalCollections.find((c) => c.season === activeSeason)!;

  return (
    <section id="seasonal" className="bg-espresso py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section opener */}
        <div className="mb-12 lg:mb-16">
          <span className="font-label text-terracotta">La Collezione</span>
          <h2 className="mt-4 font-display text-5xl text-cream lg:text-8xl">
            Seasonal
          </h2>
        </div>

        {/* Season toggle */}
        <div className="mb-12 flex gap-4">
          {seasonalCollections.map((col) => (
            <button
              key={col.season}
              onClick={() => setActiveSeason(col.season)}
              className={`relative font-display text-3xl lg:text-5xl transition-colors duration-300 ${
                activeSeason === col.season
                  ? 'text-cream'
                  : 'text-cream/30 hover:text-cream/60'
              }`}
            >
              {col.season}
              <span className="ml-3 font-display text-lg italic text-terracotta/70">
                {col.italian}
              </span>
              {activeSeason === col.season && (
                <motion.div
                  layoutId="season-underline"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-terracotta"
                />
              )}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="relative mb-16 h-auto min-h-[5rem] max-w-xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeSeason}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 text-cream/70 text-lg leading-relaxed"
            >
              {collection.description}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Flavour cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSeason}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {flavours.map((flavour, i) => {
              if (!flavour) return null;
              return (
                <motion.div
                  key={flavour.id}
                  initial={reduced ? {} : { opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
                  animate={
                    reduced
                      ? {}
                      : { opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }
                  }
                  transition={{
                    duration: 0.7,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  data-cursor="taste"
                  className="group cursor-pointer"
                >
                  <div className="zoom-img relative aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={flavour.image}
                      alt={flavour.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="font-display text-3xl text-cream">{flavour.name}</p>
                      <p className="mt-1 font-display text-sm italic text-cream/60">
                        {flavour.italianName}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
