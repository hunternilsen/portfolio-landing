interface SectionHeaderShape {
  overline?: string
  title?: string
  subtitle?: string
}

export function RichSectionHeader({ section }: { section: SectionHeaderShape }) {
  if (!section.overline && !section.title && !section.subtitle) return null
  return (
    <div className="rich-section-header">
      {section.overline && <span className="rich-section-overline">{section.overline}</span>}
      {section.title && <h2>{section.title}</h2>}
      {section.subtitle && <p>{section.subtitle}</p>}
    </div>
  )
}
