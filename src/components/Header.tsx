import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { SITE } from '../config';
import { useLanguage } from '../i18n/LanguageContext';
import Magnetic from './Magnetic';

const NAV_SECTIONS = ['projects', 'skills', 'education', 'contact'] as const;

export default function Header() {
  const { content, lang, toggleLang } = useLanguage();
  const skipLabel = lang === 'ru' ? 'К содержанию' : 'Skip to content';

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40);

    let current: string | null = null;
    for (const id of NAV_SECTIONS) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= 120) {
        current = id;
      }
    }
    setActiveSection(current);
  });

  useEffect(() => {
    // Стартовое состояние: если страница открыта со смещением (якорь в URL)
    let current: string | null = null;
    for (const id of NAV_SECTIONS) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= 120) {
        current = id;
      }
    }
    setActiveSection(current);
    setScrolled(window.scrollY > 40);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        {skipLabel}
      </a>
      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <div className="container site-header__inner">
          <a className="brand" href="#top" aria-label={content.hero.name}>
            <span className="brand__mark" aria-hidden="true">
              {content.hero.orbMark}
            </span>
            <span className="brand__name">{content.hero.surname}</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            {NAV_SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'is-active' : undefined}
              >
                {content.nav[id]}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <button
              className="lang-toggle"
              type="button"
              onClick={toggleLang}
              aria-label="Switch language"
            >
              <span className={lang === 'ru' ? 'is-active' : undefined}>RU</span>
              <span aria-hidden="true">/</span>
              <span className={lang === 'en' ? 'is-active' : undefined}>EN</span>
            </button>

            <Magnetic>
              <a
                className="button button--small"
                href={SITE.resumePdf}
                download={SITE.resumeFileName}
              >
                <span className="button__label">
                  <span>{content.nav.resume}</span>
                  <span aria-hidden="true">{content.nav.resume}</span>
                </span>
              </a>
            </Magnetic>
          </div>
        </div>

        <motion.span
          className="scroll-progress"
          style={{ scaleX: scrollYProgress }}
          aria-hidden="true"
        />
      </header>
    </>
  );
}
