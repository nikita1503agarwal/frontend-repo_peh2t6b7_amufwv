import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL

export default function QuizPage() {
  const [userId, setUserId] = useState('student-001')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [status, setStatus] = useState('')
  const [blocked, setBlocked] = useState(true)

  useEffect(() => {
    const init = async () => {
      const st = await fetch(`${API}/api/status?user_id=${userId}`).then(r=>r.json())
      setBlocked(!st.has_reflection)
      const q = await fetch(`${API}/api/quiz`).then(r=>r.json())
      setQuestions(q.questions || [])
    }
    init()
  }, [userId])

  const submit = async () => {
    if (blocked) return
    const res = await fetch(`${API}/api/quiz/submit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, answers })
    })
    const data = await res.json()
    if (data.ok) setStatus(`Score: ${data.score}/${data.total}`)
    else setStatus(data.detail || 'Error')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-6">Quiz</h1>
        {blocked && <div className="mb-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200">Please complete the reflection before taking the quiz.</div>}
        <div className="mb-4">
          <label className="block text-sm text-blue-200 mb-1">User ID</label>
          <input value={userId} onChange={(e)=>setUserId(e.target.value)} className="w-full bg-slate-900/60 border border-white/10 rounded-lg px-3 py-2 text-white" />
        </div>
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={q.id} className="p-4 rounded-xl border border-white/10 bg-slate-800/50">
              <div className="text-white font-medium mb-2">{idx+1}. {q.question}</div>
              <div className="grid gap-2">
                {q.options.map((opt, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="radio" name={q.id} checked={answers[q.id]===i} onChange={()=>setAnswers({ ...answers, [q.id]: i })} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={submit} disabled={blocked} className="mt-6 px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50">Submit Quiz</button>
        {status && <p className="mt-3 text-sm text-blue-200">{status}</p>}
      </div>
    </main>
  )
}
