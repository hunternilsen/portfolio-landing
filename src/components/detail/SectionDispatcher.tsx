import type { RichSection } from '../../types/project'
import { Features } from './sections/Features'
import { ThreeCol } from './sections/ThreeCol'
import { Compare } from './sections/Compare'
import { Workflow } from './sections/Workflow'
import { Pipeline } from './sections/Pipeline'
import { Tech } from './sections/Tech'
import { Steps } from './sections/Steps'
import { Rubric } from './sections/Rubric'
import { Accordion } from './sections/Accordion'
import { Modules } from './sections/Modules'
import { DataArchitecture } from './sections/DataArchitecture'
import { Timeline } from './sections/Timeline'
import { Callout } from './sections/Callout'
import { Architecture } from './sections/Architecture'

export function SectionDispatcher({ section, index }: { section: RichSection; index: number }) {
  const isAlt = index % 2 === 0
  switch (section.type) {
    case 'features': return <Features section={section} isAlt={isAlt} />
    case 'three-col': return <ThreeCol section={section} isAlt={isAlt} />
    case 'compare': return <Compare section={section} isAlt={isAlt} />
    case 'workflow': return <Workflow section={section} isAlt={isAlt} />
    case 'pipeline': return <Pipeline section={section} isAlt={isAlt} />
    case 'tech': return <Tech section={section} isAlt={isAlt} />
    case 'steps': return <Steps section={section} isAlt={isAlt} />
    case 'rubric': return <Rubric section={section} isAlt={isAlt} />
    case 'accordion': return <Accordion section={section} isAlt={isAlt} />
    case 'modules': return <Modules section={section} isAlt={isAlt} />
    case 'data-architecture': return <DataArchitecture section={section} isAlt={isAlt} />
    case 'timeline': return <Timeline section={section} isAlt={isAlt} />
    case 'callout': return <Callout section={section} />
    case 'architecture': return <Architecture section={section} isAlt={isAlt} />
    default: {
      const _exhaustive: never = section
      void _exhaustive
      return null
    }
  }
}
