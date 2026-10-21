import { useLanguage } from '../i18n/LanguageContext';

export default function About() {
  const { content } = useLanguage();

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="section__head section__head--simple">
          <p className="eyebrow">{content.about.label}</p>
          <h2 className="section__title">{content.about.title}</h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            {content.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

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
