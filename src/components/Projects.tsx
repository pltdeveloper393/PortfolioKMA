import { useCallback, useState } from 'react';
import { motion } from 'motion/react';
import { projects, type ProjectMeta } from '../data/projects';
import { useLanguage } from '../i18n/LanguageContext';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import SectionHead from './SectionHead';
import { fadeRise, stagger } from '../lib/variants';

export default function Projects() {
  const { content } = useLanguage();
  const [selected, setSelected] = useState<ProjectMeta | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <SectionHead
          eyebrow={content.projects.label}
          title={content.projects.title}
          lead={content.projects.lead}
        />

        <motion.div
          className="projects__grid"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div className="projects__grid-item" key={project.id} variants={fadeRise}>
              <ProjectCard project={project} onOpen={() => setSelected(project)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={closeModal} />
      )}
    </section>
  );
}
