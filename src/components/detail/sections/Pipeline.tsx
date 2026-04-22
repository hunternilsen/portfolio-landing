import { Fragment } from 'react'
import type { PipelineSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Pipeline({ section, isAlt }: { section: PipelineSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-pipeline">
        {section.stages.map((stage, i) => (
          <Fragment key={i}>
            {i > 0 && <span className="rich-pipeline-arrow">→</span>}
            <div className="rich-pipeline-stage">
              <div className="rich-pipeline-stage-icon">{stage.icon}</div>
              <h4>{stage.title}</h4>
              <p>{stage.description}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
