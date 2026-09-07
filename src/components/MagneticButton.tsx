import { useRef, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type MagneticButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  radius?: number;
  strength?: number;
};

export default function MagneticButton({
  children,
  onClick,
  variant = 'primary',
  className = '',
  radius = 100,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < radius) {
      setOffset({ x: dx * strength, y: dy * strength });
    } else {
      setOffset({ x: 0, y: 0 });
    }
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  const base =
    'relative inline-flex items-center justify-center font-label transition-colors duration-300';
  const variants = {
    primary: 'bg-terracotta text-cream hover:bg-terracotta-dark px-8 py-4',
    secondary:
      'border border-espresso/30 text-espresso hover:bg-espresso hover:text-cream px-8 py-4',
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
