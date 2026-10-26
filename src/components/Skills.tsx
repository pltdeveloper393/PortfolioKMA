import { useId, useMemo, useState, type KeyboardEvent } from 'react';
import { motion } from 'motion/react';
import type { SkillLevel } from '../content/types';
import { useLanguage } from '../i18n/LanguageContext';
import { fadeRise, stagger } from '../lib/variants';

const LEVEL_ORDER: SkillLevel[] = ['core', 'experience', 'basic'];
const METER_SEGMENTS = [0, 1, 2];
const METER_FILL: Record<SkillLevel, number> = {
  core: 3,
  experience: 2,
  basic: 1,
};
const ROWS_PER_PAGE = 4;

function pad(value: number) {
  return String(value).padStart(2, '0');
}

function pluralize(lang: 'ru' | 'en', count: number, forms: string) {
  const [one = '', few = one, many = few] = forms.split('|');

  if (lang === 'en') {
    return count === 1 ? one : few;
  }

  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
}

function Meter({ level }: { level: SkillLevel }) {
  const fill = METER_FILL[level];

  return (
    <span
      className={`skills-spec__meter skills-spec__meter--${level}`}
      aria-hidden="true"
    >
      {METER_SEGMENTS.map((segment) => (
        <i key={segment} className={segment < fill ? 'is-on' : undefined} />
      ))}
    </span>
  );
}

export default function Skills() {
  const { content, lang } = useLanguage();
  const { groups, levels, levelHints, meta, counts, labels, panel } = content.skills;
  const [active, setActive] = useState(0);
  const [page, setPage] = useState(0);
  const uid = useId().replace(/:/g, '');
  const tabId = (index: number) => `skills-tab-${uid}-${index}`;
  const panelId = `skills-panel-${uid}`;
  const activeIndex = Math.min(active, Math.max(groups.length - 1, 0));
  const activeGroup = groups[activeIndex];
  const totalSkills = useMemo(
    () => groups.reduce((total, group) => total + group.items.length, 0),
    [groups],
  );
  const totalCategories = groups.length;

  const activeCounts = useMemo(() => {
    const result: Record<SkillLevel, number> = {
      core: 0,
      experience: 0,
      basic: 0,
    };

    if (activeGroup) {
      for (const item of activeGroup.items) {
        result[item.level] += 1;
      }
    }

    return result;
  }, [activeGroup]);

  if (!activeGroup) return null;

  const totalPages = Math.max(
    1,
    Math.ceil(activeGroup.items.length / ROWS_PER_PAGE),
  );
  const currentPage = Math.min(page, totalPages - 1);
  const visibleItems = activeGroup.items.slice(
    currentPage * ROWS_PER_PAGE,
    (currentPage + 1) * ROWS_PER_PAGE,
  );

  const goToPage = (next: number) => {
    setPage(Math.max(0, Math.min(totalPages - 1, next)));
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let next = index;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      next = (index + 1) % groups.length;
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      next = (index - 1 + groups.length) % groups.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = groups.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActive(next);
    setPage(0);
    document.getElementById(tabId(next))?.focus();
  };

  return (
    <section className="section skills">
      <div className="container" id="skills">
        <motion.div
          className="skills-spec__head"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="eyebrow" variants={fadeRise}>
            {content.skills.label}
          </motion.p>

          <div className="skills-spec__title-row">
            <motion.h2 className="section__title" variants={fadeRise}>
              {content.skills.title}
            </motion.h2>

            <div
              className="skills-spec__legend"
              role="group"
              aria-label={labels.levels}
            >
              {LEVEL_ORDER.map((level) => (
                <span
                  className={`skills-spec__legend-item skills-spec__legend-item--${level}`}
                  key={level}
                  title={`${levels[level]} — ${levelHints[level]}`}
                >
                  <Meter level={level} />
                  <span>{levels[level]}</span>
                </span>
              ))}
            </div>

            <motion.p className="skills-spec__meta" variants={fadeRise}>
              <b>{totalSkills}</b>{' '}
              {pluralize(lang, totalSkills, meta.skills)} ·{' '}
              <b>{totalCategories}</b>{' '}
              {pluralize(lang, totalCategories, meta.categories)}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="skills-spec__layout"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.aside className="skills-spec__rail" variants={fadeRise}>
            <div
              className="skills-spec__rail-label"
              id={`skills-categories-${uid}`}
            >
              {labels.categories}
            </div>

            <div
              className="skills-spec__index"
              role="tablist"
              aria-labelledby={`skills-categories-${uid}`}
              aria-orientation="vertical"
            >
              {groups.map((group, index) => (
                <button
                  key={index}
                  id={tabId(index)}
                  type="button"
                  role="tab"
                  aria-selected={activeIndex === index}
                  aria-controls={panelId}
                  tabIndex={activeIndex === index ? 0 : -1}
                  className="skills-spec__cat"
                  onClick={() => {
                    setActive(index);
                    setPage(0);
                  }}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span className="skills-spec__num" aria-hidden="true">
                    {pad(index + 1)}
                  </span>
                  <span className="skills-spec__name">{group.title}</span>
                  <span className="skills-spec__count" aria-hidden="true">
                    {pad(group.items.length)}
                  </span>
                </button>
              ))}
            </div>
          </motion.aside>

          <motion.div className="skills-spec__panel-wrap" variants={fadeRise}>
            <div
              key={`${activeIndex}-${lang}`}
              id={panelId}
              className="skills-spec__panel"
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={tabId(activeIndex)}
            >
              <div className="skills-spec__panel-head">
                <h3>{activeGroup.title}</h3>
                <span className="skills-spec__panel-desc">
                  {activeCounts.core} {counts.core} · {activeCounts.experience}{' '}
                  {counts.experience} · {activeCounts.basic} {counts.basic}
                </span>

                {totalPages > 1 && (
                  <div className="skills-spec__pager">
                    <button
                      type="button"
                      className="skills-spec__page-btn"
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 0}
                      aria-label={labels.previousPage}
                    >
                      <svg viewBox="0 0 10 12" aria-hidden="true">
                        <path d="M10 0 0 6 10 12Z" />
                      </svg>
                    </button>
                    <span
                      className="skills-spec__page-count"
                      aria-live="polite"
                    >
                      {currentPage + 1} / {totalPages}
                    </span>
                    <button
                      type="button"
                      className="skills-spec__page-btn"
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages - 1}
                      aria-label={labels.nextPage}
                    >
                      <svg viewBox="0 0 10 12" aria-hidden="true">
                        <path d="M0 0 10 6 0 12Z" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div
                className="skills-spec__rows"
                key={`${activeIndex}-${currentPage}-${lang}`}
              >
                {visibleItems.map((item) => (
                  <div
                    className={`skills-spec__row skills-spec__row--${item.level}`}
                    key={item.name}
                  >
                    <span className="skills-spec__skill">{item.name}</span>
                    <span className="skills-spec__ctx">
                      {levelHints[item.level]}
                    </span>
                    <span className="skills-spec__level">
                      {levels[item.level]} <Meter level={item.level} />
                    </span>
                  </div>
                ))}
              </div>

              <div className="skills-spec__panel-foot">
                {pad(activeGroup.items.length)}{' '}
                {pluralize(lang, activeGroup.items.length, panel.records)}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
