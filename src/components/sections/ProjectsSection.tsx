import { useState } from 'react'
import { projects } from '../../content/portfolio'
import { ArrowIcon } from '../icons/ArrowIcon'
import { ExternalLink } from '../ui/ExternalLink'
import { ProjectVisual } from '../ui/ProjectVisual'
import { SectionHeading } from '../ui/SectionHeading'
import { Tags } from '../ui/Tags'

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Selected systems"
          title="Research thinking, engineered into useful tools."
          description="Projects across event-based perception, databases, and workflow applications—designed around concrete operational needs."
        />

        <div id="project-grid" className="project-grid">
          {visibleProjects.map((project, index) => (
            <article key={project.title} className="project-card">
              <ProjectVisual index={index} />
              <div className="project-card__content">
                <div className="project-card__label">
                  <span>{project.category}</span>
                  {project.featured ? <span>Featured</span> : null}
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <Tags values={project.technologies} />
                {project.href ? (
                  <ExternalLink href={project.href} className="project-card__link">
                    Explore the code <ArrowIcon />
                  </ExternalLink>
                ) : (
                  <span className="project-card__link project-card__link--muted">Dissertation research</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="section-action">
          <button
            type="button"
            className="button button--outline"
            aria-expanded={showAll}
            aria-controls="project-grid"
            onClick={() => setShowAll((current) => !current)}
          >
            {showAll ? 'Show selected projects' : 'View all five projects'}
            <span aria-hidden="true">{showAll ? '−' : '+'}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
