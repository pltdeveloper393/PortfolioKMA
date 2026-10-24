import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useHoverPointer } from '../lib/use-hover-pointer';

type MagneticProps = {
  children: ReactNode;
  /** Доля смещения курсора, которую наследует элемент (0..1). */
  strength?: number;
};

/**
 * Магнитный контейнер: элемент тянется к курсору в своих пределах
 * и пружинно возвращается. Только для мыши/трекпада без reduced-motion.
 */
export default function Magnetic({ children, strength = 0.3 }: MagneticProps) {
  const isHoverPointer = useHoverPointer();
  const reduce = useReducedMotion();

  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 });

  const enabled = isHoverPointer && !reduce;

  const onMouseMove = (event: MouseEvent) => {
    if (!enabled) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  if (!enabled) {
    return <span className="magnetic">{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className="magnetic"
      style={{ x: springX, y: springY }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </motion.span>
  );
}
