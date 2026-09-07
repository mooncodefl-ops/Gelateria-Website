import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { brand } from '@/data/brand';
import MagneticButton from '@/components/MagneticButton';

const heroImage =
  'https://images.pexels.com/photos/5060290/pexels-photo-5060290.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = brand.hero.headline;

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <img
          src={heroImage}
          alt="Macro gelato texture with spatula swirl"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/20 to-espresso/60" />
      </motion.div>

      {/* Foreground content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-24 lg:px-12 lg:pb-32"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6"
        >
          <span className="font-label text-cream/80">{brand.hero.eyebrow}</span>
        </motion.div>

        {/* Headline with masked reveal */}
        <h1 className="display-hero text-cream text-[18vw] sm:text-[14vw] lg:text-[10rem] xl:text-[12rem]">
          {words.map((word, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.15,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-8 max-w-md text-cream/80 text-lg leading-relaxed"
        >
          {brand.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            variant="primary"
            onClick={() => {
              const el = document.querySelector('#flavours');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
          >
            {brand.hero.primaryCta}
          </MagneticButton>
          <MagneticButton
            variant="secondary"
            className="!border-cream/40 !text-cream hover:!bg-cream hover:!text-espresso"
            onClick={() => {
              const el = document.querySelector('#location');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
          >
            {brand.hero.secondaryCta}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-label text-[0.55rem] text-cream/60">Scroll</span>
          <ArrowDown className="h-4 w-4 text-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
