import type { FeaturesSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Features({ section, isAlt }: { section: FeaturesSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-card-grid">
        {section.cards.map((c, i) => (
          <div key={i} className="rich-card-h">
            <div className="rich-card-icon">{c.icon}</div>
            <div className="rich-card-body">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
