import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Target, Users, Award, Trophy, MapPin } from 'lucide-react'

export default function About() {
  const timelineItems = [
    { title: 'Registration Opens', date: 'Oct 27, 2024' },
    { title: 'Registration Closes', date: 'Nov 4, 2024' },
    { title: 'Prelims Hackathon Begins', date: 'Nov 5, 2024 9:00 AM' },
    { title: 'Prelims Hackathon Ends', date: 'Nov 5, 2024 3:00 PM' },
    { title: 'Final Round', date: 'Nov 15, 2024 4:00 PM' },
    { title: 'Award Ceremony', date: 'Nov 15, 2024 6:00 PM' },
  ]

  const themes = [
    { icon: Shield, title: 'Cyber Security', color: 'indigo' },
    { icon: Target, title: 'Threat Intelligence', color: 'rose' },
    { icon: Users, title: 'OSINT', color: 'amber' },
    { icon: Award, title: 'AI-driven Defense', color: 'violet' },
  ]

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-4">
            About The Event
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white to-rose-400">
            Devbhoomi Cyberthon 3.0
          </h1>
          <p className="text-white/40 text-lg leading-relaxed">
            Hosted by Uttarakhand Police & Special Task Force (STF). A hybrid hackathon designed to promote 
            innovation in Cyber Security, Threat Intelligence, OSINT, Digital Forensics, and AI-driven Defense.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Timeline */}
          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-indigo-500 to-rose-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white/40 text-sm">{item.date}</p>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Event Details */}
          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-white/40 text-sm mb-1">Organizers</h3>
                <p className="text-white">Uttarakhand Police & STF</p>
              </div>
              <div>
                <h3 className="text-white/40 text-sm mb-1">Type</h3>
                <p className="text-white">Hybrid (Open for All)</p>
              </div>
              <div>
                <h3 className="text-white/40 text-sm mb-1">Team Size</h3>
                <p className="text-white">2-4 Members</p>
              </div>
              <div>
                <h3 className="text-white/40 text-sm mb-1">Final Round</h3>
                <p className="text-white">Police Lines, Dehradun</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Themes */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Focus Themes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => {
              const Icon = theme.icon
              return (
                <Card 
                  key={index}
                  className="bg-white/[0.03] border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 bg-${theme.color}-500/20 rounded-lg mb-4`}>
                      <Icon className={`h-8 w-8 text-${theme.color}-400`} />
                    </div>
                    <h3 className="text-white font-semibold">{theme.title}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Top 10 Qualification */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Competition Format
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Eligibility', description: 'Open for All', icon: Users, color: 'indigo' },
              { title: 'Qualifiers', description: 'Top 10 Teams', icon: Trophy, color: 'amber' },
              { title: 'Final Round', description: 'Police Lines, Dehradun', icon: MapPin, color: 'rose' },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <Card 
                  key={index}
                  className="bg-white/[0.03] border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors"
                >
                  <CardContent className="p-8 text-center">
                    <Icon className={`h-16 w-16 mx-auto mb-4 text-${item.color}-400`} />
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-lg text-white/60">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

