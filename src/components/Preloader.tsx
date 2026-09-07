import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { brand } from '@/data/brand';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(
      () => {
        setShow(false);
        setTimeout(onComplete, 800);
      },
      prefersReducedMotion ? 200 : 2200
    );
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-cream"
          exit={{
            clipPath: 'inset(0 0 100% 0)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="relative flex flex-col items-center">
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="text-terracotta"
            >
              <motion.path
                d="M60 15 C 35 15, 25 35, 45 50 C 65 65, 75 85, 55 95 C 40 103, 25 95, 30 80"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
              />
              <motion.circle
                cx="60"
                cy="60"
                r="50"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                opacity="0.2"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </motion.svg>
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="font-label text-espresso/60">{brand.fullName}</p>
              <p className="mt-2 font-display text-2xl text-espresso">{brand.tagline}</p>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="h-px w-32 overflow-hidden bg-espresso/10">
              <motion.div
                className="h-full bg-terracotta"
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
