import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
        <div className="max-w-xl bg-slate-900/60 backdrop-blur rounded-2xl p-8 border border-white/10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Network Topology</h1>
          <p className="text-blue-200 mb-6">Explore basic networking with interactive modules: learn, reflect, and test yourself.</p>
          <div className="flex items-center gap-3">
            <a href="#objectives" className="px-5 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition">Learn More</a>
            <Link to="/lkpd" className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Start Working on LKPD</Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
    </section>
  )
}
