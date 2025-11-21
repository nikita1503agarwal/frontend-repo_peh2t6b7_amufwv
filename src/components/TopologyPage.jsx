export default function TopologyPage() {
  const sections = [
    {
      title: 'What is Network Topology?',
      body: 'Network topology describes how nodes (computers, switches, routers) are arranged and how data flows between them.'
    },
    {
      title: 'Common Types',
      body: 'Bus (single backbone), Ring (closed loop), Star (central device), Mesh (multiple paths), Hybrid (combination).'
    }
  ]

  const details = [
    {
      name: 'Bus',
      pros: ['Easy to implement', 'Low cable length'],
      cons: ['Single point of failure', 'Collisions increase with load']
    },
    {
      name: 'Ring',
      pros: ['Predictable performance'],
      cons: ['Break affects the ring unless dual-ring']
    },
    {
      name: 'Star',
      pros: ['Easy to manage', 'Failure isolated to a single link'],
      cons: ['Central device is a single point of failure']
    },
    {
      name: 'Full Mesh',
      pros: ['High redundancy', 'Excellent fault tolerance'],
      cons: ['Expensive cabling/ports']
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Network Topology</h1>
        <section className="grid md:grid-cols-2 gap-6 mb-10">
          {sections.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-white/10 bg-slate-800/50">
              <h2 className="text-xl font-semibold text-white mb-2">{s.title}</h2>
              <p className="text-blue-200">{s.body}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Details</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {details.map((d) => (
              <div key={d.name} className="p-6 rounded-2xl border border-white/10 bg-slate-800/50">
                <h3 className="text-white font-semibold mb-2">{d.name}</h3>
                <p className="text-sm text-blue-200 mb-2">Pros:</p>
                <ul className="list-disc list-inside text-blue-100 mb-2">
                  {d.pros.map((p) => (<li key={p}>{p}</li>))}
                </ul>
                <p className="text-sm text-blue-200 mb-2">Cons:</p>
                <ul className="list-disc list-inside text-blue-100">
                  {d.cons.map((c) => (<li key={c}>{c}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
