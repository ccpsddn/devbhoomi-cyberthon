import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Problems', path: '/problems' },
    { name: 'Register', path: '/register' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/[0.03] backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Devbhoomi Cyber" className="h-10 w-auto" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
              Devbhoomi Cyber
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${isActive(link.path)
                    ? 'bg-white/[0.1] text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin/login"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/[0.03] backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 rounded-lg text-sm font-medium transition-colors
                    ${isActive(link.path)
                      ? 'bg-white/[0.1] text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.05]'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white text-sm font-medium text-center hover:opacity-90 transition-opacity"
              >
                Admin Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

