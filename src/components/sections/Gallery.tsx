import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, type GalleryImage } from '@/data/gallery';
import { useReducedMotion } from '@/hooks/useMotion';

const spanClasses: Record<GalleryImage['span'], string> = {
  small: 'row-span-1',
  medium: 'row-span-2',
  large: 'row-span-2 col-span-2',
  tall: 'row-span-3',
  wide: 'row-span-1 col-span-2',
};

const revealDirections = [
  'inset(0 100% 0 0)',
  'inset(0 0 100% 0)',
  'inset(0 0 0 100%)',
  'inset(100% 0 0 0)',
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? prev : (prev + 1) % galleryImages.length
      ),
    []
  );
  const prevImage = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null ? prev : (prev - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section opener */}
        <div className="mb-16 lg:mb-24">
          <span className="font-label text-terracotta">La Galleria</span>
          <h2 className="mt-4 font-display text-5xl text-espresso lg:text-8xl">
            Moments.
          </h2>
        </div>

        {/* Editorial gallery grid */}
        <div className="grid auto-rows-[120px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:auto-rows-[150px]">
          {galleryImages.map((img, i) => {
            const dir = revealDirections[i % revealDirections.length];
            return (
              <motion.div
                key={img.id}
                initial={reduced ? {} : { clipPath: dir, opacity: 0 }}
                whileInView={reduced ? {} : { clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative cursor-pointer overflow-hidden rounded-lg ${spanClasses[img.span]}`}
                data-cursor="taste"
                onClick={() => setLightboxIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightboxIndex(i);
                  }
                }}
                aria-label={img.caption}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-4 left-4 font-display text-lg text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.caption}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute right-6 top-6 text-cream/70 hover:text-cream"
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 text-cream/70 hover:text-cream"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-10 w-10" />
            </button>
            <motion.div
              key={galleryImages[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-h-[85vh] w-full rounded-lg object-contain"
              />
              <p className="mt-4 text-center font-display text-xl italic text-cream/80">
                {galleryImages[lightboxIndex].caption}
              </p>
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 text-cream/70 hover:text-cream"
              aria-label="Next image"
            >
              <ChevronRight className="h-10 w-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
