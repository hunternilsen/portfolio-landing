import headshot from '../assets/Headshot.jpg'

export function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-inner">
          <div className="about-photo">
            <img src={headshot} alt="Hunter Nilsen" width={180} height={180} />
          </div>
          <div className="about-content">
            <h1>Hunter Nilsen</h1>
            <p className="about-subtitle">RevOps Analyst at Domo</p>
            <p className="about-text">
              With a Master's in Business Analytics and a Bachelor's in Information Systems, I am passionate about leveraging the power of AI and data-driven solutions to drive operational efficiency and enable smarter business decisions.
            </p>
            <p className="about-text">
              My work revolves around integrating innovative tools and automation to streamline workflows, reduce complexity, and provide actionable insights. By blending technical expertise with a collaborative mindset, I aim to help organizations turn data into meaningful, impactful actions that drive operational success.
            </p>
            <div className="about-stats">
              <span className="about-stat"><strong>15</strong> Projects</span>
              <span className="about-stat"><strong>3</strong> Roles at Domo</span>
              <span className="about-stat"><strong>MS</strong> Business Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
