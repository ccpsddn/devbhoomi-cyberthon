import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="text-center px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="mb-8"
        >
          <Shield className="h-32 w-32 mx-auto text-indigo-500 opacity-20" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 mt-4">
            Page Not Found
          </h2>
          <p className="text-white/40 text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link to="/">
            <Button className="bg-gradient-to-r from-indigo-500 to-rose-500 hover:opacity-90">
              Return to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

