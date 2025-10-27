import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Users, Shield, Building2, Search, Download, Eye, LogOut, User } from 'lucide-react'
import { logout, getAuthToken } from '@/utils/auth'

interface Registration {
  id: string
  teamName: string
  problemStatement: string
  leaderName: string
  leaderEmail: string
  leaderPhone: string
  institution: string
  member1: string
  member2: string
  member3: string
  experience: string
  motivation: string
  registrationDate: string
  membersCount: number
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRegistrations()
  }, [])

  const fetchRegistrations = async () => {
    try {
      const token = getAuthToken()
      const response = await fetch(`${(import.meta.env as any).VITE_API_URL || 'http://localhost:5000'}/api/registrations`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setRegistrations(data)
      } else if (response.status === 401) {
        logout()
      }
    } catch (error) {
      console.error('Failed to fetch registrations:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredRegistrations = registrations.filter((reg) =>
    reg.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.leaderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.leaderEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.problemStatement.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    totalTeams: registrations.length,
    totalParticipants: registrations.reduce((sum, reg) => sum + reg.membersCount, 0),
    totalProblems: new Set(registrations.map((reg) => reg.problemStatement)).size,
    totalInstitutions: new Set(registrations.map((reg) => reg.institution)).size,
  }

  const exportData = () => {
    const dataStr = JSON.stringify(registrations, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr)
    const exportFileDefaultName = 'devbhoomi-cyberthon-registrations.json'
    
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', exportFileDefaultName)
    linkElement.click()
  }

  const handleLogout = () => {
    logout()
  }

  if (loading) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <p className="text-white/60">Loading...</p>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-indigo-400" />
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                Admin Dashboard
              </Badge>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/[0.05]"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white to-rose-400">
            Registrations Dashboard
          </h1>
          <p className="text-white/40 text-lg">
            Monitor and manage all Devbhoomi Cyberthon registrations
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-sm mb-1">Total Teams</p>
                  <p className="text-3xl font-bold text-white">{stats.totalTeams}</p>
                </div>
                <Users className="h-10 w-10 text-indigo-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-sm mb-1">Total Participants</p>
                  <p className="text-3xl font-bold text-white">{stats.totalParticipants}</p>
                </div>
                <Users className="h-10 w-10 text-rose-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-sm mb-1">Problems Selected</p>
                  <p className="text-3xl font-bold text-white">{stats.totalProblems}</p>
                </div>
                <Shield className="h-10 w-10 text-amber-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/40 text-sm mb-1">Institutions</p>
                  <p className="text-3xl font-bold text-white">{stats.totalInstitutions}</p>
                </div>
                <Building2 className="h-10 w-10 text-violet-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Export */}
        <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                <Input
                  placeholder="Search by team, leader, email, or problem..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/[0.03] border-white/10 text-white placeholder:text-white/40"
                />
              </div>
              <Button
                onClick={exportData}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/[0.05]"
              >
                <Download className="mr-2 h-4 w-4" />
                Export JSON
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Registrations Table */}
        <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl">All Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-white">Team Name</TableHead>
                  <TableHead className="text-white">Leader</TableHead>
                  <TableHead className="text-white">Email</TableHead>
                  <TableHead className="text-white">Members</TableHead>
                  <TableHead className="text-white">Problem</TableHead>
                  <TableHead className="text-white">Institution</TableHead>
                  <TableHead className="text-white">Date</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRegistrations.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center text-white/40 py-8">
                      No registrations found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredRegistrations.map((reg) => (
                    <TableRow key={reg.id} className="border-white/10">
                      <TableCell className="text-white font-medium">{reg.teamName}</TableCell>
                      <TableCell className="text-white">{reg.leaderName}</TableCell>
                      <TableCell className="text-white">{reg.leaderEmail}</TableCell>
                      <TableCell className="text-white">{reg.membersCount}</TableCell>
                      <TableCell className="text-white">{reg.problemStatement}</TableCell>
                      <TableCell className="text-white">{reg.institution}</TableCell>
                      <TableCell className="text-white">
                        {new Date(reg.registrationDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSelectedRegistration(reg)}
                          className="text-white hover:bg-white/[0.05]"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Detail Modal */}
      {selectedRegistration && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedRegistration(null)}
        >
          <Card 
            className="bg-[#030303] border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CardHeader>
              <CardTitle className="text-white text-2xl">{selectedRegistration.teamName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-white/60">
              <div>
                <h3 className="text-white font-semibold mb-2">Problem Statement</h3>
                <p>{selectedRegistration.problemStatement}</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Team Leader</h3>
                <p>{selectedRegistration.leaderName} - {selectedRegistration.leaderEmail}</p>
                <p className="text-sm">{selectedRegistration.leaderPhone}</p>
              </div>
              {(selectedRegistration.member1 || selectedRegistration.member2 || selectedRegistration.member3) && (
                <div>
                  <h3 className="text-white font-semibold mb-2">Team Members</h3>
                  <ul className="space-y-1">
                    {selectedRegistration.member1 && <li>• {selectedRegistration.member1}</li>}
                    {selectedRegistration.member2 && <li>• {selectedRegistration.member2}</li>}
                    {selectedRegistration.member3 && <li>• {selectedRegistration.member3}</li>}
                  </ul>
                </div>
              )}
              <div>
                <h3 className="text-white font-semibold mb-2">Institution</h3>
                <p>{selectedRegistration.institution}</p>
              </div>
              {selectedRegistration.experience && (
                <div>
                  <h3 className="text-white font-semibold mb-2">Experience</h3>
                  <p>{selectedRegistration.experience}</p>
                </div>
              )}
              <div>
                <h3 className="text-white font-semibold mb-2">Motivation</h3>
                <p>{selectedRegistration.motivation}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

