import type { CompareSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Compare({ section, isAlt }: { section: CompareSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <table className="rich-compare-table">
        <thead>
          <tr>
            {section.headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row, i) => (
            <tr key={i}>
              <td>{row[0]}</td>
              <td className="compare-cross">{row[1]}</td>
              <td className="compare-check">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
