import { useState } from 'react'
import type { AccordionSection, AccordionItem } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

function AccordionRow({ item, index }: { item: AccordionItem; index: number }) {
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
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
        <svg className="rich-rubric-toggle" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="rich-rubric-body">
        <p style={{ fontSize: 14, lineHeight: 1.6 }}>{item.content}</p>
      </div>
    </div>
  )
}

export function Accordion({ section, isAlt }: { section: AccordionSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-rubric-list">
        {section.items.map((item, i) => (
          <AccordionRow key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  )
}
