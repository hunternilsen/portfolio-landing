import { HashRouter, Route, Routes } from 'react-router-dom'
import { SkipLink } from './components/common/SkipLink'
import { ScrollProgress } from './components/common/ScrollProgress'
import { RouteAnnouncer } from './components/common/RouteAnnouncer'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'

export default function App() {
  return (
    <HashRouter>
      <SkipLink />
      <ScrollProgress />
      <RouteAnnouncer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
