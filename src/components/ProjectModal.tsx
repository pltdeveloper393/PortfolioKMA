import { useEffect, useRef } from 'react';
import type { ProjectMeta } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

type ProjectModalProps = {
  project: ProjectMeta;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { content } = useLanguage();
  const item = content.projects.items[project.id];
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
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
