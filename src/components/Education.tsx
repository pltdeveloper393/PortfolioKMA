import { useLanguage } from '../i18n/LanguageContext';
import SectionHead from './SectionHead';

export default function Education() {
  const { content } = useLanguage();
  const education = content.education;

  return (
    <section className="section education" id="education">
      <div className="container">
        <SectionHead
          eyebrow={education.label}
          title={education.title}
          lead={education.lead}
        />

        <div className="education__card">
          <div className="education__top">
            <span>{education.period}</span>
            <span>{education.status}</span>
          </div>

          <h3 className="education__org">{education.org}</h3>
          <p className="education__specialty">{education.specialty}</p>
          <p className="education__qualification">
            {education.qualification}
          </p>

          <div className="education__disciplines">
            <p className="eyebrow">{education.disciplinesTitle}</p>
            <ul className="chips">
              {education.disciplines.map((discipline) => (
                <li className="chip chip--basic" key={discipline}>
                  {discipline}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
