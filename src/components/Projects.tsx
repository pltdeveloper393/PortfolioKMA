import { useState } from 'react';
import { projects, type ProjectMeta } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { content } = useLanguage();
  const [selected, setSelected] = useState<ProjectMeta | null>(null);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">{content.projects.label}</p>
          <h2 className="section__title">{content.projects.title}</h2>
          <p className="section__lead">{content.projects.lead}</p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
