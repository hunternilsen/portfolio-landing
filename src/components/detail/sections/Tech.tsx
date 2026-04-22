import type { TechSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Tech({ section, isAlt }: { section: TechSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-tech-grid">
        {section.items.map((item, i) => (
          <div key={i} className="rich-tech-pill">
            <div className="rich-tech-pill-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
