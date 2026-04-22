import type { Project } from '../../types/project'
import { SectionDispatcher } from './SectionDispatcher'

export function RichDetail({ project }: { project: Project }) {
  const rd = project.richDetail!
  return (
    <>
      {rd.heroStats && rd.heroStats.length > 0 && (
        <div className="rich-hero-stats">
          {rd.heroStats.map((stat, i) => (
            <div key={i} className="rich-hero-stat">
              <div className="rich-stat-value">{stat.value}</div>
              <div className="rich-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
      {rd.sections.map((section, i) => (
        <SectionDispatcher key={i} section={section} index={i} />
      ))}
    </>
  )
}
