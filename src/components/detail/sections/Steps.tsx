import type { StepsSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Steps({ section, isAlt }: { section: StepsSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-steps">
        {section.items.map((item, i) => (
          <div key={i} className="rich-step">
            <div className="rich-step-num">{i + 1}</div>
            <div className="rich-step-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
