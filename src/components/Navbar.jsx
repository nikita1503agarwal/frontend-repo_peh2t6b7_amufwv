import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-blue-500/20 text-white' : 'text-blue-200 hover:text-white hover:bg-blue-500/10'}`

  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
          NetLearn
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <NavLink to="/" className={linkClasses}>Home</NavLink>
          <NavLink to="/topology" className={linkClasses}>Topology</NavLink>
          <NavLink to="/lkpd" className={linkClasses}>LKPD</NavLink>
          <NavLink to="/reflection" className={linkClasses}>Reflection</NavLink>
          <NavLink to="/quiz" className={linkClasses}>Quiz</NavLink>
        </nav>
      </div>
    </header>
  )
}
