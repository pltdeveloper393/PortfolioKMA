import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHead from './SectionHead';
import { fadeRise, stagger } from '../lib/variants';

export default function About() {
  const { content } = useLanguage();

  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHead
          eyebrow={content.about.label}
          title={content.about.title}
          simple
        />

        <div className="about__grid">
          <motion.div
            className="about__text"
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {content.about.paragraphs.map((paragraph, index) => (
              <motion.p key={index} variants={fadeRise}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <dl className="facts">
            {content.about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
