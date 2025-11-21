import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function ReflectionPage() {
  const [userId, setUserId] = useState('student-001')
  const [text, setText] = useState('')
  const [gated, setGated] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const check = async () => {
      const res = await fetch(`${API}/api/status?user_id=${userId}`)
      const data = await res.json()
      setGated(!data.has_lkpd)
    }
    check()
  }, [userId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (gated) return
    const res = await fetch(`${API}/api/reflection`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, reflection_text: text })
    })
    const data = await res.json()
    setStatus(data.ok ? 'Saved!' : data.detail || 'Error')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Reflection</h1>
        {gated && <div className="mb-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200">Please complete LKPD before writing your reflection.</div>}
        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800/50 border border-white/10 p-6 rounded-2xl">
          <div>
            <label className="block text-sm text-blue-200 mb-1">User ID</label>
            <input value={userId} onChange={(e)=>setUserId(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Write your reflection</label>
            <textarea value={text} onChange={(e)=>setText(e.target.value)} className="w-full min-h-[120px] bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white"></textarea>
          </div>
          <button disabled={gated} className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">Submit</button>
          {status && <p className="text-sm text-blue-200">{status}</p>}
        </form>
      </div>
    </main>
  )
}
