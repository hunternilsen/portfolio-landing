import { useEffect, useRef } from 'react'
import type { Project } from '../../types/project'

export function DetailHeader({ project, tagline }: { project: Project; tagline: string }) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    titleRef.current?.focus()
  }, [project.slug])

  const metaLine = [project.dateLabel, project.company].filter(Boolean).join(' · ')

  return (
    <div className="detail-header">
      <h1 className="detail-title" tabIndex={-1} ref={titleRef}>{project.title}</h1>
      <p className="detail-tagline">{tagline}</p>
      {metaLine && <p className="detail-company">{metaLine}</p>}
      <div className="detail-tags">
        <span className={'role-badge ' + project.role}>{project.roleLabel}</span>
        {project.tags.map((tag) => (
          <span key={tag} className="category-tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}
