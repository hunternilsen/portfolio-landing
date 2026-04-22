import { Fragment } from 'react'
import type { DataArchitectureSection, DataTierColor } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

function tierLabelClass(color: DataTierColor): string {
  switch (color) {
    case 'accent': return 'rich-data-tier-label accent'
    case 'green': return 'rich-data-tier-label green'
    case 'muted': return 'rich-data-tier-label'
  }
}

export function DataArchitecture({ section, isAlt }: { section: DataArchitectureSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-data-flow">
        {section.tiers.map((tier, i) => (
          <Fragment key={i}>
            {i > 0 && <div className="rich-data-arrow">↓</div>}
            <div className="rich-data-tier">
              <div className={tierLabelClass(tier.color)}>{tier.label}</div>
              <div className="rich-data-nodes">
                {tier.items.map((item, j) => (
                  <div key={j} className="rich-data-node">
                    <strong>{item.title}</strong>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </div>
      {section.metrics && section.metrics.length > 0 && (
        <div className="rich-data-metrics">
          {section.metrics.map((m, i) => (
            <div key={i} className="rich-data-metric">
              <div className="rich-data-metric-value">{m.value}</div>
              <div className="rich-data-metric-label">{m.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
