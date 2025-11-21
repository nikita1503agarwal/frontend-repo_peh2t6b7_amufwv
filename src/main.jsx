import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TopologyPage from './components/TopologyPage'
import LKPDPage from './components/LKPDPage'
import ReflectionPage from './components/ReflectionPage'
import QuizPage from './components/QuizPage'
import Navbar from './components/Navbar'
import './index.css'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      {children}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><App /></Layout>} />
        <Route path="/topology" element={<Layout><TopologyPage /></Layout>} />
        <Route path="/lkpd" element={<Layout><LKPDPage /></Layout>} />
        <Route path="/reflection" element={<Layout><ReflectionPage /></Layout>} />
        <Route path="/quiz" element={<Layout><QuizPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
