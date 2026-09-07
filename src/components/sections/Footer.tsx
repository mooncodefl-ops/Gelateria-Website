import { motion } from 'framer-motion';
import { brand, marqueeText } from '@/data/brand';
import { useReducedMotion } from '@/hooks/useMotion';

export default function Footer() {
  const reduced = useReducedMotion();

  return (
    <footer className="bg-espresso text-cream">
      {/* Closing marquee */}
      <div className="overflow-hidden border-y border-cream/10 py-8">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[...marqueeText, ...marqueeText, ...marqueeText, ...marqueeText].map((text, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="font-display text-4xl italic text-cream/30 lg:text-5xl">
                {text}
              </span>
              <span className="text-terracotta text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          whileInView={reduced ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-label text-cream/40">{brand.fullName}</p>
            <h2 className="mt-4 font-display text-6xl text-cream lg:text-9xl">
              {brand.closing}
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-6">
              {brand.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="font-label text-cream/60 hover:text-terracotta"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-label text-[0.55rem] text-cream/40">
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </p>
          <p className="font-label text-[0.55rem] text-cream/40">
            Made with patience in Liguria
          </p>
        </div>
      </div>
    </footer>
  );
}
