import { SITE } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export default function Header() {
  const { content, lang, toggleLang } = useLanguage();
  const skipLabel = lang === 'ru' ? 'К содержанию' : 'Skip to content';

  return (
    <>
      <a className="skip-link" href="#main">
        {skipLabel}
      </a>
      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand" href="#top" aria-label={content.hero.name}>
            <span className="brand__mark" aria-hidden="true">
              {content.hero.orbMark}
            </span>
            <span className="brand__name">{content.hero.surname}</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="#projects">{content.nav.projects}</a>
            <a href="#skills">{content.nav.skills}</a>
            <a href="#education">{content.nav.education}</a>
            <a href="#contact">{content.nav.contact}</a>
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

            <a
              className="button button--small"
              href={SITE.resumePdf}
              download={SITE.resumeFileName}
            >
              {content.nav.resume}
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
