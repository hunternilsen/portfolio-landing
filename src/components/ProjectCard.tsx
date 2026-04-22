import type { Project } from '../types/project'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="project-card"
      data-role={project.role}
      data-category={project.category}
      data-slug={project.slug}
      data-date={project.date}
    >
      <time className="row-date">{project.dateLabel}</time>
      <div className="row-body">
        <div className="row-header">
          <h4 className="project-title">{project.title}</h4>
          <a href={`#/project/${project.slug}`} className="card-link">
            View Project{' '}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="card-tags">
          <span className={'role-badge ' + project.role}>{project.roleLabel}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="category-tag">{tag}</span>
          ))}
        </div>
        <p className="card-summary">{project.summary}</p>
        {project.cardStats && project.cardStats.length > 0 && (
          <div className="row-stats">
            {project.cardStats.map((stat) => (
              <span key={stat} className="row-stat">{stat}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
