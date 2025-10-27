import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shield, Lock, Mail } from 'lucide-react'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('adminToken', data.token)
        navigate('/dashboard')
      } else {
        setError(data.error || 'Invalid credentials')
      }
    } catch (err) {
      setError('Failed to connect to server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-4">
            Admin Panel
          </Badge>
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
            Admin Login
          </h1>
          <p className="text-white/40">
            Access the dashboard to manage registrations
          </p>
        </motion.div>

        <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6" />
              Sign In
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40 mt-2"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-white flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40 mt-2"
                  placeholder="Enter your password"
                />
              </div>

              {error && (
                <div className="text-rose-400 text-sm bg-rose-500/10 border border-rose-500/20 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-500 to-rose-500 hover:opacity-90 text-white"
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>

              <p className="text-white/40 text-sm text-center">
                <a href="/register" className="text-indigo-400 hover:text-indigo-300">
                  Not an admin? Register as a team →
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

