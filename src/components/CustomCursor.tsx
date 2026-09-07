import { useEffect, useRef } from 'react';

type CursorState = 'default' | 'hover' | 'taste';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    document.body.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let stateRef: CursorState = 'default';
    let visibleRef = false;
    let raf = 0;

    const updateCursorVisibility = (visible: boolean) => {
      if (visibleRef === visible) return;
      visibleRef = visible;
      dot.style.opacity = visible ? '1' : '0';
      ring.style.opacity = visible ? '1' : '0';
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateCursorVisibility(true);
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;

      const target = e.target as HTMLElement;
      const tasteEl = target.closest('[data-cursor="taste"]');
      const hoverEl = target.closest('a, button, [data-cursor="hover"]');
      const newState: CursorState = tasteEl ? 'taste' : hoverEl ? 'hover' : 'default';

      if (stateRef !== newState) {
        stateRef = newState;
        if (newState === 'taste') {
          label.style.opacity = '1';
          ring.style.backgroundColor = 'rgba(198, 125, 94, 0.1)';
        } else {
          label.style.opacity = '0';
          ring.style.backgroundColor = 'transparent';
        }
      }
    };

    const onLeave = () => updateCursorVisibility(false);

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      const size = stateRef === 'taste' ? 64 : stateRef === 'hover' ? 44 : 32;
      ring.style.transform = `translate3d(${ringX - size / 2}px, ${ringY - size / 2}px, 0)`;
      ring.style.width = `${size}px`;
      ring.style.height = `${size}px`;
      label.style.transform = `translate3d(${ringX - 30}px, ${ringY - 8}px, 0)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-espresso"
        style={{ opacity: 0, transition: 'opacity 0.3s' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border border-espresso/40"
        style={{ opacity: 0, transition: 'opacity 0.3s, width 0.3s, height 0.3s, background-color 0.3s' }}
      />
      <div
        ref={labelRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] font-label text-[0.6rem] text-terracotta"
        style={{ opacity: 0, transition: 'opacity 0.3s' }}
      >
        Taste it
      </div>
    </>
  );
}
