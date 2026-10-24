import { motion } from 'motion/react';
import Words from './Words';
import { fadeRise, stagger, wordStagger } from '../lib/variants';

type SectionHeadProps = {
  eyebrow: string;
  title: string;
  lead?: string;
  simple?: boolean;
};

/**
 * Единая шапка секции: eyebrow → заголовок (word-by-word) → lead.
 * Анимация запускается при попадании во viewport (once).
 */
export default function SectionHead({ eyebrow, title, lead, simple = false }: SectionHeadProps) {
  const className = simple ? 'section__head section__head--simple' : 'section__head';

  return (
    <motion.div
      className={className}
      variants={stagger(0.1, 0.05)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.p className="eyebrow" variants={fadeRise}>
        {eyebrow}
      </motion.p>

      <motion.h2 className="section__title" variants={wordStagger} aria-label={title}>
        <span aria-hidden="true">
          <Words text={title} />
        </span>
      </motion.h2>

      {lead && (
        <motion.p className="section__lead" variants={fadeRise}>
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}
