import { Link } from 'react-router-dom'
import { Calendar, MapPin, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative -mt-20">
        <HeroGeometric
          badge="Devbhoomi Cyberthon 3.0"
          title1="Secure The Future"
          title2="AI-driven Cyber Defense"
          subtitle="Organized by Uttarakhand Police & STF. Join India's premier cybersecurity event focused on Cyber Security, Threat Intelligence, OSINT, and Digital Forensics."
        />
      </div>

      {/* Info Cards Section */}
      <section className="container mx-auto px-4 py-20 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-500/20 rounded-lg">
                <Calendar className="h-6 w-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Event Date</h3>
                <p className="text-white/40 text-sm">November 15-16, 2025</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-rose-500/20 rounded-lg">
                <MapPin className="h-6 w-6 text-rose-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-white/40 text-sm">Uttarakhand, India</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/[0.03] border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <Trophy className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Prize Pool</h3>
                <p className="text-white/40 text-sm">₹5,00,000+</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/40 mb-10 text-lg">
            Join hundreds of cybersecurity enthusiasts and showcase your innovative solutions
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:opacity-90 text-white border-0 px-8"
              >
                Register Now
              </Button>
            </Link>
            <Link to="/problems">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/[0.05] px-8"
              >
                View Problems
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

