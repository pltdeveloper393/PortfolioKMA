import { SITE } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>{content.footer.rights}</span>
        <span>{content.footer.madeWith}</span>
        <a href={SITE.sourceRepo} target="_blank" rel="noreferrer">
          {content.footer.source} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  );
}
