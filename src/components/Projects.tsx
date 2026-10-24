import { Suspense, lazy, useState } from 'react';
import { projects, type ProjectMeta } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import { useMediaQuery } from '../hooks/useMediaQuery';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectOrbit = lazy(() => import('./ProjectOrbit'));

export default function Projects() {
  const { content } = useLanguage();
  const [selected, setSelected] = useState<ProjectMeta | null>(null);
  const [view, setView] = useState<'orbit' | 'list'>('orbit');
  const isMobile = useMediaQuery('(max-width: 760px)');

  const showOrbit = view === 'orbit' && !isMobile;

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">{content.projects.label}</p>
          <h2 className="section__title">{content.projects.title}</h2>
          <p className="section__lead">{content.projects.lead}</p>
        </div>

        {!isMobile && (
          <div className="projects__toolbar">
            <div className="view-toggle">
              <button
                type="button"
                className={view === 'orbit' ? 'is-active' : undefined}
                onClick={() => setView('orbit')}
              >
                {content.projects.viewOrbit}
              </button>
              <button
                type="button"
                className={view === 'list' ? 'is-active' : undefined}
                onClick={() => setView('list')}
              >
                {content.projects.viewList}
              </button>
            </div>
            <p className="projects__hint">{content.projects.hint}</p>
          </div>
        )}

        {showOrbit ? (
          <div className="projects__stage">
            <Suspense fallback={<div className="orbit-fallback" />}>
              <ProjectOrbit onOpen={setSelected} />
            </Suspense>
          </div>
        ) : (
          <div className="projects__grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </div>
        )}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
