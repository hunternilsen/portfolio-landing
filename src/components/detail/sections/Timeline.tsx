import type { TimelineSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Timeline({ section, isAlt }: { section: TimelineSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-timeline">
        {section.items.map((item, i) => (
          <div key={i} className="rich-timeline-item">
            {item.phase && <div className="rich-timeline-phase">{item.phase}</div>}
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            {item.pills && item.pills.length > 0 && (
              <div className="rich-timeline-pills">
                {item.pills.map((pill) => (
                  <span key={pill} className="rich-timeline-pill">{pill}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
