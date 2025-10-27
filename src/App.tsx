import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import { AnimatedBackground } from './components/AnimatedBackground'
import { ProtectedRoute } from './components/ProtectedRoute'
import Index from './pages/Index'
import About from './pages/About'
import Register from './pages/Register'
import Problems from './pages/Problems'
import Dashboard from './pages/Dashboard'
import AdminLogin from './pages/AdminLogin'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen bg-[#030303] relative">
      <AnimatedBackground />
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App

