import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import ThemeToggle from './ThemeToggle'

const navLinks = ['Home', 'About', 'Projects', 'Contact']

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const sections = navLinks.map(l => document.getElementById(l.toLowerCase()))
      const scrollPos = window.scrollY + 100
      sections.forEach((sec, i) => {
        if (sec && scrollPos >= sec.offsetTop) {
          setActive(navLinks[i])
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 glass shadow-2xl shadow-black/10'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="group flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-accent/40 group-hover:scale-110 transition-transform">
              S
            </span>
            <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
              Sachin<span className="text-accent">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`nav-link ${active === link ? 'active' : ''}`}
              >
                {link}
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-accent transition-colors"
            >
              {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 glass rounded-2xl p-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(link)}
                className={`w-full text-left px-4 py-3 rounded-xl font-body font-medium text-sm transition-all duration-200
                  ${active === link
                    ? 'bg-accent/15 text-accent'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-white/10 hover:text-accent'
                  }`}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
