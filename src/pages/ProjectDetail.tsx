import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { PROJECT_DATA } from '../data/projects'
import { DetailHeader } from '../components/detail/DetailHeader'
import { PlainDetail } from '../components/detail/PlainDetail'
import { RichDetail } from '../components/detail/RichDetail'
import { PrevNextNav } from '../components/detail/PrevNextNav'
import { applyProjectSeo, resetSeo } from '../lib/seo'
import { announceRoute } from '../components/common/RouteAnnouncer'

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const index = PROJECT_DATA.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? PROJECT_DATA[index] : null

  useEffect(() => {
    if (!project) return
    window.scrollTo(0, 0)
    applyProjectSeo(project)
    announceRoute('Viewing project: ' + project.title)
    return () => resetSeo()
  }, [project])

  if (!project) return <Navigate to="/" replace />

  const prev = index > 0 ? PROJECT_DATA[index - 1] : null
  const next = index < PROJECT_DATA.length - 1 ? PROJECT_DATA[index + 1] : null
  const tagline = project.richDetail?.subtitle || project.detail.tagline

  return (
    <div className="detail-view">
      <div className="container">
        <a href="#/" className="detail-back">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Portfolio
        </a>

        <DetailHeader project={project} tagline={tagline} />

        {project.richDetail ? <RichDetail project={project} /> : <PlainDetail project={project} />}

        <PrevNextNav prev={prev} next={next} />
      </div>
    </div>
  )
}
