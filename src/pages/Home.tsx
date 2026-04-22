import { useCallback, useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { About } from '../components/About'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Filters, type RoleFilter, type CategoryFilter } from '../components/Filters'
import { ProjectGrid } from '../components/ProjectGrid'
import { Footer } from '../components/Footer'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { restoreHomeScroll, saveHomeScroll } from '../lib/scrollMemory'
import { announceRoute } from '../components/common/RouteAnnouncer'

const SECTION_IDS = ['about', 'experience', 'skills', 'projects']

export function Home() {
  const [role, setRole] = useState<RoleFilter>('all')
  const [category, setCategory] = useState<CategoryFilter>('all')
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    restoreHomeScroll()
    announceRoute('Returned to portfolio home')
    return () => {
      saveHomeScroll()
    }
  }, [])

  const handleNavClick = useCallback((id: string) => {
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <div id="view-home">
        <main id="main">
          <About />
          <Experience />
          <Skills />
          <section id="projects" className="projects-section">
            <div className="container">
              <h2 className="section-header">Projects & Portfolio</h2>
              <Filters
                role={role}
                category={category}
                onRoleChange={setRole}
                onCategoryChange={setCategory}
              />
              <ProjectGrid role={role} category={category} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
