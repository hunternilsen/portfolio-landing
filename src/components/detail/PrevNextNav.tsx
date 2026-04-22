import type { Project } from '../../types/project'

export function PrevNextNav({ prev, next }: { prev: Project | null; next: Project | null }) {
  if (!prev && !next) return null
  return (
    <nav className="detail-nav" aria-label="Project navigation">
      {prev && (
        <a href={`#/project/${prev.slug}`} className="detail-nav-link prev">
          <span className="detail-nav-label">Previous</span>
          <span className="detail-nav-title">{prev.title}</span>
        </a>
      )}
      {next && (
        <a href={`#/project/${next.slug}`} className="detail-nav-link next">
          <span className="detail-nav-label">Next</span>
          <span className="detail-nav-title">{next.title}</span>
        </a>
      )}
    </nav>
  )
}
