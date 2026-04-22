import { useState } from 'react'
import type { RubricSection, RubricCategory, RubricLevel } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

const LEVEL_LABEL: Record<RubricLevel, string> = {
  high: 'High',
  mid: 'Mid',
  low: 'Low',
}

function RubricCard({ category, index }: { category: RubricCategory; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={'rich-rubric' + (open ? ' open' : '')}>
      <div
        className="rich-rubric-header"
        onClick={() => setOpen((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setOpen((v) => !v)
          }
        }}
      >
        <div className="rich-rubric-num">{index + 1}</div>
        <div className="rich-rubric-title">
          <h3>{category.title}</h3>
          <p>{category.description}</p>
        </div>
        <svg className="rich-rubric-toggle" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="rich-rubric-body">
        <div className="rich-rubric-tiers">
          {category.tiers.map((tier, i) => (
            <div key={i} className={'rich-rubric-tier ' + tier.level}>
              <div className="rich-rubric-tier-badge">
                <div className="rich-rubric-tier-score">{tier.scores}</div>
                <div className="rich-rubric-tier-label">{LEVEL_LABEL[tier.level]}</div>
              </div>
              <div className="rich-rubric-tier-content">
                <p>{tier.content}</p>
                <div className="rich-rubric-tier-example">{'“' + tier.example + '”'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Rubric({ section, isAlt }: { section: RubricSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-rubric-list">
        {section.scoreNote && (
          <div className="rich-callout" style={{ marginTop: 0, marginBottom: 32 }}>
            <h4>Scoring Scale: 0–5</h4>
            <p>{section.scoreNote}</p>
          </div>
        )}
        {section.categories.map((cat, i) => (
          <RubricCard key={i} category={cat} index={i} />
        ))}
      </div>
    </div>
  )
}
