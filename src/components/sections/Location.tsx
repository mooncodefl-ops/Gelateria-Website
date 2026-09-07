import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { location } from '@/data/location';
import { useReducedMotion } from '@/hooks/useMotion';

export default function Location() {
  const reduced = useReducedMotion();

  return (
    <section id="location" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section opener */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label text-terracotta">Vieni a Trovarci</span>
            <h2 className="mt-4 font-display text-5xl text-espresso lg:text-8xl">
              Find us.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Info column */}
          <div className="flex flex-col gap-10">
            {/* Address */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, x: -40 }}
              whileInView={reduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-terracotta" />
                <div>
                  <h3 className="font-label text-espresso/50">Address</h3>
                  <p className="mt-2 font-display text-2xl text-espresso">
                    {location.address.street}
                  </p>
                  <p className="text-espresso/70">
                    {location.address.city}, {location.address.region}{' '}
                    {location.address.postalCode}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, x: -40 }}
              whileInView={reduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-terracotta" />
                <div>
                  <h3 className="font-label text-espresso/50">Opening Hours</h3>
                  <div className="mt-2 space-y-1">
                    {location.hours.map((h) => (
                      <div key={h.day} className="flex justify-between gap-8">
                        <span className="text-espresso/70">{h.day}</span>
                        <span className="font-display text-espresso">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, x: -40 }}
              whileInView={reduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 flex-shrink-0 text-terracotta" />
                  <a
                    href={`tel:${location.phone}`}
                    className="text-espresso/70 hover:text-terracotta"
                  >
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 flex-shrink-0 text-terracotta" />
                  <a
                    href={`mailto:${location.email}`}
                    className="text-espresso/70 hover:text-terracotta"
                  >
                    {location.email}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Directions */}
            <motion.div
              initial={reduced ? {} : { opacity: 0, x: -40 }}
              whileInView={reduced ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg bg-butter/40 p-6"
            >
              <div className="flex items-start gap-4">
                <Navigation className="mt-1 h-5 w-5 flex-shrink-0 text-terracotta" />
                <div>
                  <h3 className="font-label text-espresso/50">Directions</h3>
                  <p className="mt-2 text-espresso/70 leading-relaxed">
                    {location.directions}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map column */}
          <motion.div
            initial={reduced ? {} : { opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={reduced ? {} : { opacity: 1, clipPath: 'inset(0 0 0 0)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-lg"
          >
            <iframe
              src={location.mapEmbed}
              className="h-full min-h-[400px] w-full"
              title="Gelateria Dolce location map"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
