import { useEffect, useMemo, useRef } from 'react'
import { PROJECT_DATA } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import type { RoleFilter, CategoryFilter } from './Filters'

interface ProjectGridProps {
  role: RoleFilter
  category: CategoryFilter
}

export function ProjectGrid({ role, category }: ProjectGridProps) {
  const sorted = useMemo(() => {
    return [...PROJECT_DATA].sort((a, b) => b.date.localeCompare(a.date))
  }, [])

  const visible = useMemo(() => {
    return sorted.filter((p) => {
      const roleMatch = role === 'all' || p.role === role
      const catMatch = category === 'all' || p.category === category
      return roleMatch && catMatch
    })
  }, [sorted, role, category])

  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const list = listRef.current
    if (!list) return
    const cards = list.querySelectorAll<HTMLElement>('.project-card')

    if (prefersReducedMotion) {
      cards.forEach((c) => {
        c.style.opacity = '1'
        c.style.transform = 'none'
      })
      return
    }

    cards.forEach((c) => {
      c.style.opacity = '0'
      c.style.transform = 'translateY(12px)'
      c.classList.remove('fade-in-up')
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            setTimeout(() => {
              target.classList.add('fade-in-up')
            }, i * 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' },
    )

    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [visible])

  return (
    <>
      {visible.length === 0 && (
        <div id="filter-empty-state" style={{ textAlign: 'center', padding: '48px 0' }}>
          <p style={{ fontSize: '16px', color: '#6B7280' }}>No projects match the selected filters.</p>
          <p style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '8px' }}>
            Try adjusting your role or category selection.
          </p>
        </div>
      )}

      <div className="project-category" style={{ display: visible.length === 0 ? 'none' : undefined }}>
        <div className="projects-list" ref={listRef}>
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </>
  )
}
