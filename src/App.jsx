import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Objectives from './components/Objectives'
import MaterialGrid from './components/MaterialGrid'

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Hero />
      <Objectives />
      <MaterialGrid />
    </main>
  )
}

export default function AppRouter() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Home />
    </div>
  )
}
