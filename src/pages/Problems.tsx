import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Search, Archive, MessageSquare, DollarSign, Phone, MapPin, 
  AlertCircle, Network, Eye, Sparkles, FileSearch, ChevronDown, CheckCircle2 
} from 'lucide-react'

interface Problem {
  id: string
  title: string
  icon: typeof Search
  color: string
  category: string
  description: string
  whyIndia: string
  expectedOutput: string
}

const problems: Problem[] = [
  {
    id: '1',
    title: 'OSINT & Threat Actor Profiling Automation',
    icon: Search,
    color: 'indigo',
    category: 'OSINT',
    description: 'Develop a comprehensive tool that automates open-source intelligence (OSINT) collection across the surface, deep, and dark web. The system should take a single input (email, username, or phone number) and correlate all publicly available data — social media, forums, data breaches, crypto wallets — to build detailed threat actor profiles.',
    whyIndia: 'Threat actors use multiple identities and platforms to mask activity. Manual OSINT investigations are time-consuming. An automated profiling platform can enhance early detection and attribution for cybercrime investigations.',
    expectedOutput: 'A dashboard that generates detailed digital profiles with data sources, confidence scores, network visualizations, and exportable investigation reports.'
  },
  {
    id: '2',
    title: 'Dark Web & Deep Web Intelligence Tool',
    icon: Archive,
    color: 'rose',
    category: 'Dark Web',
    description: 'Design a search and analytics engine that crawls dark web and deep web sources (TOR, I2P, Freenet, etc.) to detect illegal listings, discussions, and digital footprints related to drugs, data leaks, financial fraud, or arms trade. Include keyword-based search, filtering, and alert generation.',
    whyIndia: 'Most cybercriminal trade occurs on the dark web. A specialized tool can assist agencies in continuous monitoring and takedown operations.',
    expectedOutput: 'An interactive dashboard that indexes dark web data, identifies threat entities, extracts metadata (PGP keys, wallet IDs), and visualizes interconnections between users or markets.'
  },
  {
    id: '3',
    title: 'Secure Communication Systems for Law Enforcement',
    icon: MessageSquare,
    color: 'amber',
    category: 'Communication',
    description: 'Develop an end-to-end encrypted real-time communication platform (text, voice, video) for police and intelligence agencies. Include user authentication, device-level encryption, secure file sharing, and audit logging for accountability.',
    whyIndia: 'Police and intelligence units often rely on unsecured channels for coordination. Secure communication infrastructure is vital for sensitive operations.',
    expectedOutput: 'A working prototype (mobile or desktop) that supports encrypted calls/chats, controlled group creation, and an administrative audit trail — ensuring privacy without compromising command visibility.'
  },
  {
    id: '4',
    title: 'Digital Money Trail & Crypto Intelligence System',
    icon: DollarSign,
    color: 'violet',
    category: 'Financial',
    description: 'Build a system that visualizes and analyses money movements across bank accounts and crypto wallets. It should detect patterns in UPI/NEFT transactions, identify mule accounts, and integrate blockchain analytics to follow cryptocurrency trails.',
    whyIndia: 'Cybercrime proceeds are quickly laundered through multiple intermediaries across banking and crypto ecosystems. Unified visibility across financial layers can prevent fund flight.',
    expectedOutput: 'A multi-layered dashboard mapping fund flow, wallet clustering, AML (Anti-Money Laundering) indicators, and risk scoring with real-time transaction traceability.'
  },
  {
    id: '5',
    title: 'Digital Forensics Automation – Telecom Tower Dump / CDR / IPDR Analysis',
    icon: Phone,
    color: 'cyan',
    category: 'Forensics',
    description: 'Create a forensic analytics platform to automate the ingestion and correlation of telecom datasets — tower dumps, call detail records (CDRs), and IPDRs. Enable link analysis, common number detection, and travel path reconstruction.',
    whyIndia: 'Manual CDR analysis takes hours or days; automation can significantly reduce investigative turnaround time.',
    expectedOutput: 'A tool that visualizes call linkages, movement heatmaps, and suspect proximity timelines with exportable case reports.'
  },
  {
    id: '6',
    title: 'Crime Hotspot Mapping & Predictive Patrol Routing',
    icon: MapPin,
    color: 'emerald',
    category: 'Policing',
    description: 'Develop a GIS-enabled system that maps reported crimes (FIRs, complaints, patrol data) and predicts future crime-prone zones using temporal and spatial analytics. Suggest patrol routes and resource deployment based on trends.',
    whyIndia: 'Police forces need data-driven tools for predictive policing and efficient deployment of limited manpower.',
    expectedOutput: 'An interactive GIS dashboard highlighting hotspots, showing time-based crime trends, and recommending optimized patrol routes.'
  },
  {
    id: '7',
    title: 'Threat Intelligence Aggregation & Alerting System',
    icon: AlertCircle,
    color: 'orange',
    category: 'Intelligence',
    description: 'Create a unified intelligence aggregation platform that collects alerts from multiple channels — social media, emergency services, cyber-incident databases — and auto-categorizes them by priority, type, and location.',
    whyIndia: 'Fragmented alert systems delay coordinated responses. Unified aggregation accelerates situational awareness and crisis management.',
    expectedOutput: 'A real-time dashboard with automatic clustering, heatmaps, and rule-based notifications to the concerned departments.'
  },
  {
    id: '8',
    title: 'Network & Packet Forensics Platform',
    icon: Network,
    color: 'pink',
    category: 'Network Security',
    description: 'Build a system capable of capturing and analysing live or stored network traffic to detect anomalies such as data exfiltration, hidden tunnels, and insider threats. Include packet decoding, signature-based detection, and anomaly visualization.',
    whyIndia: 'Advanced persistent threats (APTs) often hide within legitimate network traffic. Automated packet analysis can uncover hidden activity faster.',
    expectedOutput: 'A packet capture and analysis tool that generates flow diagrams, identifies anomalies, and allows exporting forensic evidence.'
  },
  {
    id: '9',
    title: 'OSINT/Video Analytics for Surveillance Enhancement',
    icon: Eye,
    color: 'lime',
    category: 'Video Analytics',
    description: 'Create an AI-based tool that enhances low-quality CCTV/DVR footage and performs analytics such as facial recognition, number plate identification, and crowd movement analysis. Integrate it with known suspect databases for instant flagging.',
    whyIndia: 'Millions of CCTV feeds remain underutilized due to poor image quality and lack of analytics. Smart video forensics can drastically improve investigation outcomes.',
    expectedOutput: 'A video-processing system capable of enhancement, detection, and real-time alert generation for flagged entities.'
  },
  {
    id: '10',
    title: 'Open-Ended Innovation for Smart Policing',
    icon: Sparkles,
    color: 'sky',
    category: 'Innovation',
    description: 'Develop any innovative solution that enhances the efficiency, transparency, or responsiveness of policing — such as AI-driven case management, predictive analytics, digital evidence management, or public engagement apps.',
    whyIndia: 'Modern policing requires smarter digital tools to keep up with rising cybercrime and administrative challenges.',
    expectedOutput: 'A functional prototype with a defined use case, measurable impact, and clear demonstration of efficiency improvement.'
  },
  {
    id: '11',
    title: 'Blockchain-Enabled Financial Fraud Traceability System',
    icon: FileSearch,
    color: 'purple',
    category: 'Blockchain',
    description: 'Create a permissioned blockchain-powered system that traces fraudulent financial transactions across banks and wallets in real time and automatically freezes funds if flagged.',
    whyIndia: 'Cybercriminals often move stolen funds across multiple accounts and wallets within minutes. A blockchain-based shared ledger can provide instant cross-institution visibility.',
    expectedOutput: 'A cross-bank fraud-trail dashboard mapping illicit fund flow and triggering smart alerts for enforcement authorities.'
  },
]

export default function Problems() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-4">
            Problem Statements
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-white to-rose-400">
            Choose Your Challenge
          </h1>
          <p className="text-white/40 text-lg">
            Tackle real-world cybersecurity challenges organized by Uttarakhand Police & STF
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-4">
          {problems.map((problem) => {
            const Icon = problem.icon
            const isOpen = openId === problem.id
            
            return (
              <Card
                key={problem.id}
                className="bg-white/[0.03] border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : problem.id)}
                  className="w-full p-6 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-${problem.color}-500/20 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${problem.color}-400`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                      <Badge variant="outline" className="text-white/60 border-white/20">
                        {problem.category}
                      </Badge>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 text-white/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 space-y-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                            Problem Statement
                          </h4>
                          <p className="text-white/60">{problem.description}</p>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-rose-400" />
                            Why India Needs This
                          </h4>
                          <p className="text-white/60">{problem.whyIndia}</p>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-amber-400" />
                            Expected Output
                          </h4>
                          <p className="text-white/60">{problem.expectedOutput}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
