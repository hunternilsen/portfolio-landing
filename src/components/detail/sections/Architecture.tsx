import { Fragment } from 'react'
import type { ArchitectureSection } from '../../../types/project'
import { RichSectionHeader } from './RichSectionHeader'

export function Architecture({ section, isAlt }: { section: ArchitectureSection; isAlt: boolean }) {
  return (
    <div className={'rich-section' + (isAlt ? ' rich-section-alt' : '')}>
      <RichSectionHeader section={section} />
      <div className="rich-arch-grid">
        <div className="rich-arch-card">
          <h3>{section.before.title}</h3>
          <p>{section.before.description}</p>
          <div className="rich-code-block">
            <div className="rich-code-block-header">
              <span className="rich-code-dot" />
              <span className="rich-code-dot" />
              <span className="rich-code-dot" />
              <span className="rich-code-title">app.js — 3,445 lines</span>
            </div>
            <pre>
              {section.before.lines.map((line, i) => {
                const isComment = line.indexOf('//') === 0
                const isFunction = line.indexOf('function') === 0
                if (isComment) {
                  return <span key={i} className="rich-code-comment">{line + '\n'}</span>
                }
                if (isFunction) {
                  const parts = line.split('function ')
                  const fnNameEnd = parts[1].indexOf('(')
                  const fnName = parts[1].substring(0, fnNameEnd)
                  const rest = parts[1].substring(fnNameEnd)
                  return (
                    <Fragment key={i}>
                      <span className="rich-code-keyword">function </span>
                      <span style={{ color: '#FFD54F' }}>{fnName}</span>
                      {rest + '\n'}
                    </Fragment>
                  )
                }
                return <Fragment key={i}>{line + '\n'}</Fragment>
              })}
            </pre>
          </div>
        </div>
        <div className="rich-arch-card">
          <h3>{section.after.title}</h3>
          <p>{section.after.description}</p>
          <div className="rich-code-block">
            <div className="rich-code-block-header">
              <span className="rich-code-dot" />
              <span className="rich-code-dot" />
              <span className="rich-code-dot" />
              <span className="rich-code-title">modules/</span>
            </div>
            <pre>
              {section.after.modules.map((m, i) => {
                const padding = '            '.substring(0, 14 - m.name.length)
                return (
                  <Fragment key={i}>
                    <span className="rich-code-keyword">{m.name}</span>
                    <span className="rich-code-comment">{padding + m.lines + ' lines  · ' + m.desc}</span>
                    {'\n'}
                  </Fragment>
                )
              })}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
