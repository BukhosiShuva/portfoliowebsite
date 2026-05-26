import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import ProjectEvo from './pages/ProjectEvo'
import ProjectEmerge from './pages/ProjectEmerge'
import ProjectCurl from './pages/ProjectCurl'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolioprojectEvo" element={<ProjectEvo />} />
        <Route path="/portfolioprojectEmerge" element={<ProjectEmerge />} />
        <Route path="/portfolioprojectCurl" element={<ProjectCurl />} />
      </Route>
    </Routes>
  )
}
