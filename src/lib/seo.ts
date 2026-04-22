import type { Project } from '../types/project'

const DEFAULT_TITLE = 'Hunter Nilsen — Portfolio'
const DEFAULT_DESCRIPTION =
  'Hunter Nilsen — RevOps Analyst building dashboards, automation workflows, and enablement tools that drive measurable business impact at Domo.'
const DEFAULT_OG_TITLE = 'Hunter Nilsen — Portfolio'

function setMeta(selector: string, content: string) {
  const el = document.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute('content', content)
}

export function applyProjectSeo(project: Project) {
  document.title = project.title + ' — Hunter Nilsen'
  setMeta('meta[name="description"]', project.summary)
  setMeta('meta[property="og:title"]', project.title + ' — Hunter Nilsen')
}

export function resetSeo() {
  document.title = DEFAULT_TITLE
  setMeta('meta[name="description"]', DEFAULT_DESCRIPTION)
  setMeta('meta[property="og:title"]', DEFAULT_OG_TITLE)
}
