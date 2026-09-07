import { motion } from 'framer-motion';
import { ingredients } from '@/data/ingredients';
import { useReducedMotion } from '@/hooks/useMotion';

export default function Ingredients() {
  const reduced = useReducedMotion();

  return (
    <section id="ingredients" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section opener */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label text-terracotta">Gli Ingredienti</span>
            <h2 className="mt-4 font-display text-5xl text-espresso lg:text-8xl">
              What goes in.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-espresso/70 leading-relaxed">
              No powders. No pre-made bases. No frozen fruit. Every ingredient
              is chosen for its provenance and handled with respect — because
              gelato is only as honest as what you put in it.
            </p>
          </motion.div>
        </div>

        {/* Ingredient grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {ingredients.map((ing, i) => {
            const isLeft = i % 2 === 0;
            const direction = isLeft ? -60 : 60;

            return (
              <motion.div
                key={ing.id}
                initial={reduced ? {} : { opacity: 0, x: direction }}
                whileInView={reduced ? {} : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.1 }}
                className="group"
              >
                <div className="zoom-img relative aspect-[4/5] overflow-hidden rounded-lg">
                  <img
                    src={ing.image}
                    alt={ing.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  <span className="absolute left-4 top-4 font-label text-[0.55rem] text-cream/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-2xl text-espresso">{ing.name}</h3>
                  <p className="font-display text-sm italic text-terracotta">
                    {ing.italianName}
                  </p>
                  <p className="mt-2 text-sm text-espresso/60 leading-relaxed">
                    {ing.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
