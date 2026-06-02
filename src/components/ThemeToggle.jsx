import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-14 h-7 rounded-full glass flex items-center px-1 transition-all duration-300 hover:ring-2 hover:ring-accent/40"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: darkMode ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="w-5 h-5 rounded-full bg-accent shadow-lg shadow-accent/40 flex items-center justify-center"
      >
        {darkMode
          ? <HiMoon size={11} className="text-white" />
          : <HiSun size={11} className="text-white" />
        }
      </motion.div>
    </button>
  )
}
