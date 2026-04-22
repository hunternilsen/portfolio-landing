import type { CalloutSection } from '../../../types/project'

export function Callout({ section }: { section: CalloutSection }) {
  return (
    <div className="rich-callout">
      <h4>{section.title}</h4>
      <p>{section.content}</p>
    </div>
  )
}
