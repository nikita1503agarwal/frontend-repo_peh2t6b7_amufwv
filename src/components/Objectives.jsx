export default function Objectives() {
  const items = [
    'Understand common network topologies (Bus, Ring, Star, Mesh, Hybrid)',
    'Identify advantages and disadvantages of each topology',
    'Choose the right topology for a given scenario',
    'Apply concepts in practice through LKPD and a graded quiz'
  ]

  return (
    <section id="objectives" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-semibold text-white mb-4">Learning Objectives</h2>
      <p className="text-blue-200 mb-6">What you will achieve in this module</p>
      <ul className="grid md:grid-cols-2 gap-3">
        {items.map((it) => (
          <li key={it} className="p-4 rounded-xl border border-white/10 bg-slate-800/50 text-blue-100">{it}</li>
        ))}
      </ul>
    </section>
  )
}
