import type { Variants } from 'motion/react';

/** Единая кривая easing для всех reveal-анимаций (easeOutQuint-подобная). */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Fade + подъём: базовый reveal для текста, кнопок, блоков. */
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

/** Только fade: для длинных абзацев (без сдвига). */
export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

/** Контейнер с каскадом детей. */
export function stagger(step = 0.08, delayChildren = 0): Variants {
  return {
    hidden: {},
    show: {
      transition: { staggerChildren: step, delayChildren },
    },
  };
}

/** Подъём слова из маски (используется с .word-mask). */
export const wordRise: Variants = {
  hidden: { y: '110%' },
  show: {
    y: '0%',
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/** Контейнер word-by-word для заголовков. */
export const wordStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};
