import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { flavours, flavourCategories, type Flavour } from '@/data/flavours';
import { useReducedMotion } from '@/hooks/useMotion';

gsap.registerPlugin(ScrollTrigger);

export default function FlavourShowcase() {
  const [activeId, setActiveId] = useState(flavours[0].id);
  const [category, setCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const activeFlavour = flavours.find((f) => f.id === activeId) ?? flavours[0];

  const filtered =
    category === 'All'
      ? flavours
      : flavours.filter((f) => f.category === category);

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth;

      gsap.to(track, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth * 0.8}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced, category]);

  return (
    <section
      ref={sectionRef}
      id="flavours"
      className="relative flex h-screen flex-col overflow-hidden"
      style={{
        backgroundColor: activeFlavour.color.bg,
        transition: 'background-color 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Header */}
      <div className="relative z-30 w-full shrink-0 bg-gradient-to-b from-cream/95 to-transparent px-6 pb-8 pt-6 lg:px-12 lg:pb-12 lg:pt-12">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="font-label text-espresso/50">I Nostri Sapori</span>
            <h2 className="mt-2 font-display text-4xl text-espresso lg:text-6xl">
              Flavours
            </h2>
          </div>
          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {flavourCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`font-label px-4 py-2 transition-all duration-300 ${
                  category === cat
                    ? 'bg-espresso text-cream'
                    : 'border border-espresso/20 text-espresso/60 hover:border-espresso/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      {reduced ? (
        <div className="flex flex-col gap-8 px-6 py-32">
          {filtered.map((flavour) => (
            <FlavourCard
              key={flavour.id}
              flavour={flavour}
              active={flavour.id === activeId}
              onClick={() => setActiveId(flavour.id)}
            />
          ))}
        </div>
      ) : (
        <div
          ref={trackRef}
          className="flex min-h-0 flex-1 items-start pl-6 pt-4 lg:pl-12 lg:pt-6"
          style={{ width: 'max-content' }}
        >
          {filtered.map((flavour, i) => (
            <FlavourCard
              key={flavour.id}
              flavour={flavour}
              active={flavour.id === activeId}
              onClick={() => setActiveId(flavour.id)}
              index={i}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function FlavourCard({
  flavour,
  active,
  onClick,
  index = 0,
}: {
  flavour: Flavour;
  active: boolean;
  onClick: () => void;
  index?: number;
}) {
  return (
    <div
      data-cursor="taste"
      onClick={onClick}
      className="group relative mr-6 flex-shrink-0 cursor-pointer"
      style={{ width: '70vw', maxWidth: '480px' }}
    >
      <motion.div
        className="relative h-[52vh] max-h-[520px] overflow-hidden rounded-lg lg:h-[58vh]"
        animate={{ scale: active ? 1 : 0.92 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0">
          <img
            src={flavour.image}
            alt={flavour.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top, ${flavour.color.text}99, transparent 50%)`,
            opacity: active ? 0.7 : 0.4,
          }}
        />

        {/* Number */}
        <span
          className="absolute left-4 top-4 font-label text-[0.6rem]"
          style={{ color: '#FBF6EE' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Seasonal badge */}
        {flavour.seasonal && (
          <span
            className="absolute right-4 top-4 font-label text-[0.55rem] px-2 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(251, 246, 238, 0.9)',
              color: flavour.color.text,
            }}
          >
            {flavour.seasonal}
          </span>
        )}

        {/* Name */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p
            className="font-display text-3xl text-cream lg:text-4xl"
            style={{ color: '#FBF6EE' }}
          >
            {flavour.name}
          </p>
          <p
            className="mt-1 font-display text-sm italic"
            style={{ color: '#FBF6EE', opacity: 0.7 }}
          >
            {flavour.italianName}
          </p>
        </div>
      </motion.div>

      {/* Details (shown when active) */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 max-w-md overflow-hidden"
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: flavour.color.text, opacity: 0.8 }}
            >
              {flavour.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {flavour.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="font-label text-[0.55rem] px-3 py-1 rounded-full border"
                  style={{
                    borderColor: `${flavour.color.text}40`,
                    color: flavour.color.text,
                  }}
                >
                  {ing}
                </span>
              ))}
            </div>
            {flavour.allergens.length > 0 && (
              <p
                className="mt-4 font-label text-[0.5rem]"
                style={{ color: flavour.color.text, opacity: 0.5 }}
              >
                Allergens: {flavour.allergens.join(', ')}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
