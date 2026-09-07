import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { makingOfSteps } from '@/data/ingredients';
import { useReducedMotion } from '@/hooks/useMotion';

gsap.registerPlugin(ScrollTrigger);

export default function MakingOf() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.making-panel');
      const totalWidth = track.scrollWidth;

      const tween = gsap.to(track, {
        x: () => -(totalWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((panel) => {
        const img = panel.querySelector('.panel-img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            }
          );
        }

        const text = panel.querySelector('.panel-text');
        if (text) {
          gsap.fromTo(
            text,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tween,
                start: 'left 80%',
                end: 'center center',
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="making"
      className="relative h-screen overflow-hidden bg-espresso"
    >
      <div className="absolute left-0 top-0 z-10 w-full p-6 lg:p-12">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="font-label text-cream/50">Il Processo</span>
            <h2 className="mt-2 font-display text-4xl text-cream lg:text-6xl">
              The Making
            </h2>
          </div>
          <span className="hidden font-label text-cream/40 lg:block">
            Scroll to explore →
          </span>
        </div>
      </div>

      {reduced ? (
        <div className="flex h-full flex-col items-center justify-center gap-8 overflow-y-auto px-6 py-24">
          {makingOfSteps.map((step) => (
            <div key={step.step} className="flex max-w-2xl flex-col items-center gap-4 text-center">
              <div className="h-64 w-full overflow-hidden rounded-lg">
                <img src={step.image} alt={step.title} className="h-full w-full object-cover" />
              </div>
              <span className="font-label text-terracotta">{step.step}</span>
              <h3 className="font-display text-3xl text-cream">{step.title}</h3>
              <p className="text-cream/70">{step.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div ref={trackRef} className="flex h-full items-center" style={{ width: 'max-content' }}>
          {makingOfSteps.map((step, i) => (
            <div
              key={step.step}
              className="making-panel relative flex h-screen w-screen flex-shrink-0 items-center justify-center px-6 lg:px-24"
            >
              <div className="flex w-full max-w-6xl flex-col items-center gap-8 lg:flex-row lg:gap-16">
                <div className="relative h-[40vh] w-full overflow-hidden rounded-lg lg:h-[60vh] lg:w-1/2">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="panel-img h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="panel-text max-w-md">
                  <span className="font-label text-terracotta">
                    {step.step} — {step.italian}
                  </span>
                  <h3 className="mt-4 font-display text-5xl text-cream lg:text-7xl">
                    {step.title}
                  </h3>
                  <p className="mt-6 text-cream/70 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {i < makingOfSteps.length - 1 && (
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-cream/20">
                  <span className="font-display text-6xl">→</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
