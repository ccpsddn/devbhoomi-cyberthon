import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Trophy } from 'lucide-react'

const problemStatements = [
  'OSINT & Threat Actor Profiling Automation',
  'Dark Web & Deep Web Intelligence Tool',
  'Secure Communication Systems for Law Enforcement',
  'Digital Money Trail & Crypto Intelligence System',
  'Digital Forensics Automation – Telecom Tower Dump / CDR / IPDR Analysis',
  'Crime Hotspot Mapping & Predictive Patrol Routing',
  'Threat Intelligence Aggregation & Alerting System',
  'Network & Packet Forensics Platform',
  'OSINT/Video Analytics for Surveillance Enhancement',
  'Open-Ended Innovation for Smart Policing',
  'Blockchain-Enabled Financial Fraud Traceability System'
]

export default function Register() {
  const [formData, setFormData] = useState({
    teamName: '',
    problemStatement: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    institution: '',
    member1: '',
    member2: '',
    member3: '',
    experience: '',
    motivation: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const registrationData = {
        ...formData,
        membersCount: [formData.member1, formData.member2, formData.member3].filter(Boolean).length + 1,
      }
      
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      })

      const data = await response.json()

      if (response.ok) {
        alert('Registration successful! Thank you for participating.')
        // Clear form
        setFormData({
          teamName: '',
          problemStatement: '',
          leaderName: '',
          leaderEmail: '',
          leaderPhone: '',
          institution: '',
          member1: '',
          member2: '',
          member3: '',
          experience: '',
          motivation: '',
        })
      } else {
        setError(data.error || 'Registration failed')
      }
    } catch (err) {
      setError('Failed to connect to server. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-4">
            Join The Competition
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white to-rose-400">
            Register Your Team
          </h1>
          <p className="text-white/40 text-lg">
            Register for Devbhoomi Cyberthon 3.0 organized by Uttarakhand Police & STF
          </p>
        </motion.div>

        <Card className="max-w-4xl mx-auto bg-white/[0.03] border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Team Registration Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Team Info */}
              <div>
                <h3 className="text-white font-semibold text-xl mb-4">Team Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="teamName" className="text-white">
                      Team Name <span className="text-rose-400">*</span>
                    </Label>
                    <Input
                      id="teamName"
                      required
                      value={formData.teamName}
                      onChange={(e) => handleChange('teamName', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="problemStatement" className="text-white">
                      Problem Statement <span className="text-rose-400">*</span>
                    </Label>
                    <Select
                      id="problemStatement"
                      required
                      value={formData.problemStatement}
                      onChange={(e) => handleChange('problemStatement', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white"
                    >
                      <option value="">Select a problem statement</option>
                      {problemStatements.map((problem) => (
                        <option key={problem} value={problem}>
                          {problem}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
              </div>

              {/* Team Leader Info */}
              <div>
                <h3 className="text-white font-semibold text-xl mb-4">Team Leader Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="leaderName" className="text-white">
                      Full Name <span className="text-rose-400">*</span>
                    </Label>
                    <Input
                      id="leaderName"
                      required
                      value={formData.leaderName}
                      onChange={(e) => handleChange('leaderName', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="leaderEmail" className="text-white">
                      Email <span className="text-rose-400">*</span>
                    </Label>
                    <Input
                      id="leaderEmail"
                      type="email"
                      required
                      value={formData.leaderEmail}
                      onChange={(e) => handleChange('leaderEmail', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="leaderPhone" className="text-white">
                      Contact Number <span className="text-rose-400">*</span>
                    </Label>
                    <Input
                      id="leaderPhone"
                      type="tel"
                      required
                      value={formData.leaderPhone}
                      onChange={(e) => handleChange('leaderPhone', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="institution" className="text-white">
                      City / Institution / Organization <span className="text-rose-400">*</span>
                    </Label>
                    <Input
                      id="institution"
                      required
                      value={formData.institution}
                      onChange={(e) => handleChange('institution', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <h3 className="text-white font-semibold text-xl mb-4">Team Members (Optional)</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num}>
                      <Label htmlFor={`member${num}`} className="text-white">
                        Member {num} Name & Email
                      </Label>
                      <Input
                        id={`member${num}`}
                        value={formData[`member${num}` as keyof typeof formData]}
                        onChange={(e) => handleChange(`member${num}`, e.target.value)}
                        className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                        placeholder="Name (email@example.com)"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <h3 className="text-white font-semibold text-xl mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience" className="text-white">
                      Prior Experience (Optional)
                    </Label>
                    <Textarea
                      id="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={(e) => handleChange('experience', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                      placeholder="Do you or your team have prior experience in Cyber Security / Hackathons?"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="motivation" className="text-white">
                      Why do you want to participate? <span className="text-rose-400">*</span>
                    </Label>
                    <Textarea
                      id="motivation"
                      required
                      rows={3}
                      value={formData.motivation}
                      onChange={(e) => handleChange('motivation', e.target.value)}
                      className="bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                      placeholder="Tell us what motivates your team to participate..."
                    />
                  </div>
                </div>
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
                <Trophy className="mr-2 h-4 w-4" />
                {loading ? 'Submitting...' : 'Submit Registration'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
