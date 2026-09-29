import React from 'react';
import projectData from '../../data/projectData';
import Section, { Reveal } from '../Section';
import { CodeIcon, ExternalIcon } from '../Icons';
import './Projects.css';

type Project = (typeof projectData)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = React.useRef<HTMLElement>(null);
  const slug = project.name.toLowerCase().replace(/\s+/g, '-');

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty('--x', `${x}px`);
    ref.current.style.setProperty('--y', `${y}px`);
    ref.current.style.setProperty('--ry', `${((x / rect.width) - 0.5) * 8}deg`);
    ref.current.style.setProperty('--rx', `${((y / rect.height) - 0.5) * -8}deg`);
  };

  const onPointerLeave = () => {
    ref.current?.style.setProperty('--rx', '0deg');
    ref.current?.style.setProperty('--ry', '0deg');
  };

  return (
    <article className="project spotlight" ref={ref} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="project-shot-wrap">
        <div className="window project-shot">
          <div className="window-bar">
            <span className="window-dots" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <span className="window-title mono project-url">
              <span className="project-url-lock" aria-hidden>
                https://
              </span>
              {slug}.app
            </span>
            <span className="window-dots-spacer" />
          </div>
          <div className="project-img">
            <img src={project.img} alt={`Screenshot of ${project.name}`} loading="lazy" />
          </div>
        </div>
      </div>

      <div className="project-body">
        <p className="project-kicker mono">
          <span className="project-num">{String(index + 1).padStart(2, '0')}</span>
          <span className="tok-comment">// {'inProgress' in project ? 'in progress' : project.live ? 'live project' : 'source available'}</span>
        </p>
        <h3 className="project-name mono">{project.name}</h3>
        <p className="project-desc">{project.description}</p>

        <ul className="project-tags mono" aria-label="Tech stack">
          {project.techStack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <ExternalIcon /> live demo
            </a>
          )}
          <a href={project.source} target="_blank" rel="noopener noreferrer" className="btn">
            <CodeIcon /> source
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <Section id="projects" index="02" file="projects.json" caption="/* things I've built — click through, they work */">
      <div className="projects">
        {projectData.map((p, i) => (
          <Reveal key={p.name}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
