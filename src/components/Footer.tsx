export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-name">Hunter Nilsen</p>
        <div className="footer-social">
          <a href="mailto:hunter.nilsen@domo.com">Email</a>
          <a href="https://www.linkedin.com/in/hunternilsen/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/hunternilsen" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="footer-copyright">&copy; {year} Hunter Nilsen</p>
      </div>
    </footer>
  )
}
