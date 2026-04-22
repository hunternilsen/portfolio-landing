import type { ModulesSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Modules({ section, isAlt }: { section: ModulesSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-module-grid">
        {section.items.map((m, i) => (
          <div key={i} className="rich-module-card">
            <div className="rich-module-card-header">
              <span className="rich-module-name">{m.name}</span>
              <span className="rich-module-badge">{m.lines + ' lines'}</span>
            </div>
            <div className="rich-module-desc">{m.description}</div>
          </div>
        ))}
      </div>
      {section.depFlow && section.depFlow.length > 0 && (
        <div className="rich-dep-flow">
          <div className="rich-dep-title">{section.depTitle || 'Dependency Injection — No Circular Imports'}</div>
          {section.depFlow.map((dep, i) => (
            <div key={i} className="rich-dep-row">
              <div className="rich-dep-node rich-dep-orchestrator">{dep.from}</div>
              <span className="rich-dep-arrow">→</span>
              <div className="rich-dep-node">{dep.to}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
