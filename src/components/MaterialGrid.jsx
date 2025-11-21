import { Link } from 'react-router-dom'

const materials = [
  {
    slug: 'basics',
    title: 'Basic Networking',
    desc: 'OSI model, IP addressing, switching & routing overview.'
  },
  {
    slug: 'topology',
    title: 'Network Topologies',
    desc: 'Star, Bus, Ring, Mesh, Hybrid — when and why to use them.'
  },
  {
    slug: 'devices',
    title: 'Network Devices',
    desc: 'Hubs, switches, routers, access points, NICs.'
  }
]

export default function MaterialGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white mb-4">Materials</h2>
      <p className="text-blue-200 mb-6">Click to explore a topic</p>
      <div className="grid md:grid-cols-3 gap-4">
        {materials.map((m) => (
          <Link key={m.slug} to={m.slug === 'topology' ? '/topology' : '#'} className="block group p-5 rounded-2xl border border-white/10 bg-slate-800/50 hover:bg-slate-800 transition">
            <h3 className="text-white font-semibold mb-1">{m.title}</h3>
            <p className="text-blue-200 text-sm">{m.desc}</p>
            <div className="mt-4 text-blue-300 group-hover:text-white text-sm">Open →</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
