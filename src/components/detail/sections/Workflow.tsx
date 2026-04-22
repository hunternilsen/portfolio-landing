import { Fragment } from 'react'
import type { WorkflowSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Workflow({ section, isAlt }: { section: WorkflowSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-workflow">
        {section.steps.map((step, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="rich-workflow-arrow">→</span>}
            <div className="rich-workflow-step">
              {step.label}
              {step.sublabel && <small>{step.sublabel}</small>}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
