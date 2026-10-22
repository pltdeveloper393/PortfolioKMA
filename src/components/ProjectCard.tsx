import type { ProjectMeta } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';

type ProjectCardProps = {
  project: ProjectMeta;
  onOpen: () => void;
};

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { content } = useLanguage();
  const item = content.projects.items[project.id];
  const visibleStack = project.stack.slice(0, 3);
  const restCount = project.stack.length - visibleStack.length;

  return (
    <button
      className={`project-card project-card--${project.tone}`}
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-label={`${project.name} — ${item.category}`}
    >
      <span className="project-card__visual" aria-hidden="true">
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
          {content.projects.viewCase} <span aria-hidden="true">→</span>
        </span>
      </span>
    </button>
  );
}
