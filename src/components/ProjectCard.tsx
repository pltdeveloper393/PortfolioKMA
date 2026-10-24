import { useRef, type MouseEvent } from 'react';
import { useReducedMotion } from 'motion/react';
import type { ProjectMeta } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { useHoverPointer } from '../lib/use-hover-pointer';

type ProjectCardProps = {
  project: ProjectMeta;
  onOpen: () => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { content } = useLanguage();
  const item = content.projects.items[project.id];
  const visibleStack = project.stack.slice(0, 3);
  const restCount = project.stack.length - visibleStack.length;

  const isHoverPointer = useHoverPointer();
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLButtonElement>(null);
  const tiltEnabled = isHoverPointer && !reduce;

  const onMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (!tiltEnabled) return;
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    element.style.setProperty('--ry', `${((px - 0.5) * 8).toFixed(2)}deg`);
    element.style.setProperty('--rx', `${((0.5 - py) * 8).toFixed(2)}deg`);
    element.style.setProperty('--mx', `${(px * 100).toFixed(1)}%`);
    element.style.setProperty('--my', `${(py * 100).toFixed(1)}%`);
  };

  const onMouseLeave = () => {
    const element = cardRef.current;
    if (!element) return;

    element.style.setProperty('--rx', '0deg');
    element.style.setProperty('--ry', '0deg');
  };

  return (
    <button
      ref={cardRef}
      className={`project-card project-card--${project.tone}`}
      type="button"
      onClick={onOpen}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      aria-haspopup="dialog"
      aria-label={`${project.name} — ${item.category}`}
    >
      <span className="project-card__visual" aria-hidden="true">
        <span className="project-card__glare" />
        <span className="project-card__number">{project.number}</span>
        <span className="project-card__visual-title">{project.name}</span>
      </span>

      <span className="project-card__body">
        <span className="project-card__meta">
          <span>{item.category}</span>
          <span>{project.year}</span>
        </span>
        <span className="project-card__summary">{item.summary}</span>

        <span className="project-card__stack" aria-hidden="true">
          {visibleStack.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
          {restCount > 0 && <span>+{restCount}</span>}
        </span>

        <span className="project-card__cta">
          <span>{content.projects.viewCase}</span>
          <span aria-hidden="true">→</span>
        </span>
      </span>
    </button>
  );
}
