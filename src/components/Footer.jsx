import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const quickLinks = ['Home', 'About', 'Projects', 'Contact']
const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/SachinDevarajan', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/sachindevarajan', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:sachindevarajan7@gmail.com', label: 'Email' },
]

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-accent/40">
                S
              </span>
              <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
                Sachin<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Data Analyst passionate about transforming raw data into actionable business insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-accent hover:border-accent/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              sachindevarajan7@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Sachin Devarajan. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Built with React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
