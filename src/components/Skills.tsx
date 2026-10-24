import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHead from './SectionHead';
import { fadeRise, stagger } from '../lib/variants';

export default function Skills() {
  const { content, lang } = useLanguage();
  const { levels } = content.skills;

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <SectionHead
          eyebrow={content.skills.label}
          title={content.skills.title}
          lead={content.skills.lead}
        />

        <motion.div
          className="skills__grid"
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {content.skills.groups.map((group, index) => (
            <motion.div className="skill-group" key={index} variants={fadeRise}>
              <h3 className="skill-group__title">{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li
                    className={`chip chip--${item.level}`}
                    data-tip={levels[item.level]}
                    key={item.name}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

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
