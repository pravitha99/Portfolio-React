
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const Nav = () => (
  <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
    <nav className="container flex items-center justify-between h-16">
      <NavLink to="/" className="font-bold text-lg">Pravi<span className="text-indigo-600">.</span></NavLink>
      <div className="flex gap-6">
        {['/', '/about', '/projects', '/contact'].map((path, idx) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              'text-sm font-medium ' + (isActive ? 'text-indigo-600' : 'text-slate-700 hover:text-slate-900')
            }
            end={idx===0}
          >
            {['Home','About','Projects','Contact'][idx]}
          </NavLink>
        ))}
      </div>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="border-t mt-16">
    <div className="container py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between">
      <p>© {new Date().getFullYear()} Pravi. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
      </div>
    </div>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="container flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
