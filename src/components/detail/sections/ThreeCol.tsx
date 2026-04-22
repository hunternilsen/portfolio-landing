import type { ThreeColSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function ThreeCol({ section, isAlt }: { section: ThreeColSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-three-col">
        {section.cards.map((c, i) => (
          <div key={i} className="rich-col-card">
            <div className="rich-col-card-icon">{c.icon}</div>
            <h4>{c.title}</h4>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
