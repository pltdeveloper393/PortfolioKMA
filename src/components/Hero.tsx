import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SITE } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import Magnetic from './Magnetic';
import { fadeRise, stagger } from '../lib/variants';

export default function Hero() {
  const { content } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  // Параллакс орба: сфера уезжает медленнее контента при скролле hero
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section className="hero" id="top" ref={sectionRef}>
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          variants={stagger(0.07, 0.05)}
          initial="hidden"
          animate="show"
        >
          <motion.p className="eyebrow" variants={fadeRise}>
            {content.hero.eyebrow}{' '}
            <span className="eyebrow__sep" aria-hidden="true">
              ·
            </span>{' '}
            <span className="hero__surname-inline">{content.hero.surname}</span>
          </motion.p>

          <motion.h1 className="hero__name" variants={fadeRise}>
            {content.hero.name}
          </motion.h1>

          <motion.p className="hero__role" variants={fadeRise}>
            {content.hero.role}
          </motion.p>

          <motion.p className="hero__tagline" variants={fadeRise}>
            {content.hero.tagline}
          </motion.p>

          <motion.div className="hero__actions" variants={fadeRise}>
            <Magnetic>
              <a className="button" href="#projects">
                <span className="button__label">
                  <span>{content.hero.ctaProjects}</span>
                  <span aria-hidden="true">{content.hero.ctaProjects}</span>
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                className="button button--ghost"
                href={SITE.resumePdf}
                download={SITE.resumeFileName}
              >
                <span className="button__label">
                  <span>{content.hero.ctaResume}</span>
                  <span aria-hidden="true">{content.hero.ctaResume}</span>
                </span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.p className="status" variants={fadeRise}>
            <span className="status__dot" aria-hidden="true" />
            {content.hero.status}
          </motion.p>
        </motion.div>

        <div className="hero__orb" aria-hidden="true">
          <motion.div
            className="orb-drift"
            style={{ y: orbY, rotate: orbRotate, scale: orbScale }}
          >
            <div className="orb">
              <span className="orb__ring orb__ring--1" />
              <span className="orb__ring orb__ring--2" />
              <span className="orb__ring orb__ring--3" />
              <span className="orb__core">{content.hero.orbMark}</span>
              {content.hero.orbTags.map((tag, index) => (
                <span
                  className={`orb__tag orb__tag--${index + 1}`}
                  key={index}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
