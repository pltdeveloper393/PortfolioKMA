import { motion } from 'motion/react';
import { SITE } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import Words from './Words';
import { fadeRise, stagger, wordStagger } from '../lib/variants';

export default function Contact() {
  const { content } = useLanguage();
  const contact = content.contact;

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="eyebrow eyebrow--light" variants={fadeRise}>
            {contact.label}
          </motion.p>
          <motion.h2 className="contact__title" variants={wordStagger} aria-label={contact.title}>
            <span aria-hidden="true">
              <Words text={contact.title} />
            </span>
          </motion.h2>
          <motion.p className="contact__lead" variants={fadeRise}>
            {contact.lead}
          </motion.p>
        </motion.div>

        <motion.div
          className="contact__links"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.a className="contact__link" href={`mailto:${SITE.email}`} variants={fadeRise}>
            <span>{contact.email}</span>
            <strong>{SITE.email}</strong>
          </motion.a>

          <motion.a
            className="contact__link"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            variants={fadeRise}
          >
            <span>{contact.github}</span>
            <strong>
              {SITE.githubLabel} <span aria-hidden="true" className="arrow arrow--ne">↗</span>
            </strong>
          </motion.a>

          <motion.a
            className="contact__link"
            href={SITE.resumePdf}
            download={SITE.resumeFileName}
            variants={fadeRise}
          >
            <span>{contact.resume}</span>
            <strong>
              PDF <span aria-hidden="true" className="arrow arrow--s">↓</span>
            </strong>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
