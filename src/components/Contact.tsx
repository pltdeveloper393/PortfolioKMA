import { SITE } from '../config';
import { useLanguage } from '../i18n/LanguageContext';

export default function Contact() {
  const { content } = useLanguage();
  const contact = content.contact;

  return (
    <section className="contact" id="contact">
      <div className="container contact__grid">
        <div>
          <p className="eyebrow eyebrow--light">{contact.label}</p>
          <h2 className="contact__title">{contact.title}</h2>
          <p className="contact__lead">{contact.lead}</p>
        </div>

        <div className="contact__links">
          <a className="contact__link" href={`mailto:${SITE.email}`}>
            <span>{contact.email}</span>
            <strong>{SITE.email}</strong>
          </a>

          <a
            className="contact__link"
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>{contact.github}</span>
            <strong>
              {SITE.githubLabel} <span aria-hidden="true">↗</span>
            </strong>
          </a>

          <a
            className="contact__link"
            href={SITE.resumePdf}
            download={SITE.resumeFileName}
          >
            <span>{contact.resume}</span>
            <strong>
              PDF <span aria-hidden="true">↓</span>
            </strong>
          </a>
        </div>
      </div>
    </section>
  );
}
