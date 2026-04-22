const SKILL_CATEGORIES = [
  {
    title: 'Data & Analytics',
    pills: ['Domo', 'SQL', 'Python', 'Excel', 'Google Sheets'],
  },
  {
    title: 'CRM & Sales Tech',
    pills: ['Salesforce', 'Gong', 'Apollo.io', 'Clay', 'Salesloft'],
  },
  {
    title: 'Development',
    pills: ['JavaScript', 'HTML / CSS', 'TailwindCSS', 'Chart.js', 'Git / GitHub'],
  },
  {
    title: 'RevOps',
    pills: ['Pipeline Management', 'Funnel Analysis', 'Comp Plan Design', 'Process Automation'],
  },
] as const

export function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-header">Skills & Tools</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className="skill-category">
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-pills">
                {cat.pills.map((pill) => (
                  <span key={pill} className="skill-pill">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
