import { useLanguage } from '../i18n/LanguageContext';

export default function Skills() {
  const { content, lang } = useLanguage();
  const { levels } = content.skills;

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">{content.skills.label}</p>
          <h2 className="section__title">{content.skills.title}</h2>
          <p className="section__lead">{content.skills.lead}</p>
        </div>

        <div className="skills__grid">
          {content.skills.groups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3 className="skill-group__title">{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li
                    className={`chip chip--${item.level}`}
                    key={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="skills__legend"
          aria-label={lang === 'ru' ? 'Уровни навыков' : 'Skill levels'}
        >
          <span>
            <i className="legend-dot legend-dot--core" aria-hidden="true" />
            {levels.core}
          </span>
          <span>
            <i
              className="legend-dot legend-dot--experience"
              aria-hidden="true"
            />
            {levels.experience}
          </span>
          <span>
            <i className="legend-dot legend-dot--basic" aria-hidden="true" />
            {levels.basic}
          </span>
        </div>
      </div>
    </section>
  );
}
