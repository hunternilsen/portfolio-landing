import type { Project } from '../../types/project'

export function PlainDetail({ project }: { project: Project }) {
  return (
    <>
      <div className="detail-metrics">
        {project.detail.metrics.map((m, i) => (
          <div key={i} className="metric-card">
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="detail-section">
        <h2>The Problem</h2>
        <p>{project.detail.problem}</p>
      </div>

      <div className="detail-section">
        <h2>The Solution</h2>
        <p>{project.detail.solution}</p>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginTop: 20, marginBottom: 8 }}>Impact Areas</h3>
        <ul className="impact-list">
          {project.impactAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>

      <div className="detail-section">
        <h2>Building the Solution</h2>
        <p>{project.detail.building}</p>
      </div>

      <div className="detail-section">
        <h2>Results & Impact</h2>
        <p>{project.detail.results}</p>
      </div>
    </>
  )
}
