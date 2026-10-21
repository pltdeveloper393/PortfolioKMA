import { SITE } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export default function Hero() {
  const { content } = useLanguage();

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1 className="hero__name">{content.hero.name}</h1>
          <p className="hero__role">{content.hero.role}</p>
          <p className="hero__tagline">{content.hero.tagline}</p>

          <div className="hero__actions">
            <a className="button" href="#projects">
              {content.hero.ctaProjects}
            </a>
            <a
              className="button button--ghost"
              href={SITE.resumePdf}
              download
              target="_blank"
              rel="noreferrer"
            >
              {content.hero.ctaResume}
            </a>
          </div>

          <p className="status">
            <span className="status__dot" aria-hidden="true" />
            {content.hero.status}
          </p>
        </div>

        <div className="hero__orb" aria-hidden="true">
          <div className="orb">
            <span className="orb__ring orb__ring--1" />
            <span className="orb__ring orb__ring--2" />
            <span className="orb__ring orb__ring--3" />
            <span className="orb__core">{content.hero.orbMark}</span>
            {content.hero.orbTags.map((tag, index) => (
              <span
                className={`orb__tag orb__tag--${index + 1}`}
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
