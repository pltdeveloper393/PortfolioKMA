import { useEffect, useRef } from 'react';
import type { ProjectMeta } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

type ProjectModalProps = {
  project: ProjectMeta;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { content } = useLanguage();
  const item = content.projects.items[project.id];
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;

    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) {
      document.body.style.paddingRight = `${scrollbar}px`;
    }
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((element) => element.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, [onClose]);

  return (
    <div
      className="modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          ref={closeRef}
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label={content.projects.close}
        >
          ×
        </button>

        <div
          className={`modal__visual project-card--${project.tone}`}
          aria-hidden="true"
        >
          <span className="project-card__number">{project.number}</span>
        </div>

        <div className="modal__content">
          <p className="eyebrow">{item.category}</p>
          <h2 className="modal__title" id="project-modal-title">
            {project.name}
          </h2>
          <p className="modal__summary">{item.summary}</p>

          <dl className="modal__meta">
            <div>
              <dt>{content.projects.meta.role}</dt>
              <dd>{item.role}</dd>
            </div>
            <div>
              <dt>{content.projects.meta.year}</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>{content.projects.meta.stack}</dt>
              <dd>{project.stack.join(' · ')}</dd>
            </div>
            <div>
              <dt>{content.projects.meta.status}</dt>
              <dd>{item.status}</dd>
            </div>
          </dl>

          <div className="modal__sections">
            <section>
              <h3>{content.projects.sections.task}</h3>
              <p>{item.task}</p>
            </section>
            <section>
              <h3>{content.projects.sections.solution}</h3>
              <p>{item.solution}</p>
            </section>
            <section>
              <h3>{content.projects.sections.whatIDid}</h3>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>{content.projects.sections.result}</h3>
              <p>{item.result}</p>
            </section>
          </div>

          {item.privateNote && (
            <p className="modal__note">{item.privateNote}</p>
          )}

          {item.links && item.links.length > 0 && (
            <div className="modal__links">
              <span>{content.projects.meta.links}</span>
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
