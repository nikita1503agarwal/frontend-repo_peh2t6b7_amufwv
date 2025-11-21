import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function LKPDPage() {
  const [userId, setUserId] = useState('student-001')
  const [responses, setResponses] = useState({ task1: '', task2: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${API}/api/lkpd`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, responses })
      })
      const data = await res.json()
      setStatus(data.ok ? 'Submitted!' : data.detail || 'Error')
    } catch (err) {
      setStatus('Submission failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">LKPD</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-slate-800/50 border border-white/10 p-6 rounded-2xl">
          <div>
            <label className="block text-sm text-blue-200 mb-1">User ID</label>
            <input value={userId} onChange={(e)=>setUserId(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" />
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Task 1: Explain Star Topology in your words</label>
            <textarea value={responses.task1} onChange={(e)=>setResponses({ ...responses, task1: e.target.value })} className="w-full min-h-[100px] bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white"></textarea>
          </div>
          <div>
            <label className="block text-sm text-blue-200 mb-1">Task 2: Choose a topology for a small office and justify</label>
            <textarea value={responses.task2} onChange={(e)=>setResponses({ ...responses, task2: e.target.value })} className="w-full min-h-[100px] bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white"></textarea>
          </div>
          <button disabled={loading} className="px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">{loading ? 'Submitting...' : 'Submit'}</button>
          {status && <p className="text-sm text-blue-200">{status}</p>}
        </form>
      </div>
    </main>
  )
}
