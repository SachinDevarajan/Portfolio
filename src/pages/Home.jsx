import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { HiArrowRight } from 'react-icons/hi'
import profileImg from '../assets/images/profile.png'
import resumePDF from '../assets/resume/Sachin_Resume.pdf'

const socials = [
  { icon: <FiGithub size={20} />, href: 'https://github.com/SachinDevarajan', label: 'GitHub' },
  { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/sachindevarajan', label: 'LinkedIn' },
  { icon: <FiMail size={20} />, href: 'mailto:sachindevarajan7@gmail.com', label: 'Email' },
]

const stats = [
  { num: '4+', label: 'Projects Built' },
  { num: '5+', label: 'Tools Mastered' },
  { num: '51K+', label: 'Records Analyzed' },
  { num: '2', label: 'Degrees' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 dark:opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-accent/60 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 rounded-full bg-accent/30 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent/80">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 variants={item} className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-[1.05] mb-4">
              Sachin
              <br />
              <span className="gradient-text">Devarajan</span>
            </motion.h1>

            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[60px] bg-accent/40" />
              <p className="font-body font-medium text-lg text-gray-600 dark:text-gray-300">
                Data Analyst
              </p>
              <span className="text-accent/40">•</span>
              <p className="font-body text-lg text-gray-500 dark:text-gray-400">
                BI & ML Enthusiast
              </p>
            </motion.div>

            <motion.p variants={item} className="text-gray-500 dark:text-gray-400 leading-relaxed text-base mb-8 max-w-xl">
              Aspiring Data Analyst with hands-on expertise in <span className="text-accent font-medium">Python, SQL, Power BI</span>, and Machine Learning. 
              I transform raw datasets into actionable insights using data-driven decision making and 
              compelling visualizations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
              <a
                href={resumePDF}
                download="Sachin_Devarajan_Resume.pdf"
                className="btn-primary"
              >
                <FiDownload size={16} />
                Download Resume
              </a>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline"
              >
                Contact Me
                <HiArrowRight size={16} />
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex items-center gap-4">
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-accent hover:border-accent/40 transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
              <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-1" />
              <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">Bangalore, India</p>
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Outer decorative ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-3xl" />

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-accent/20"
            />

            {/* Image container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
                {/* Glow */}
                <div className="absolute inset-2 rounded-full bg-accent/20 blur-2xl" />
                {/* Photo */}
                <div className="relative w-full h-full rounded-full border-2 border-accent/30 overflow-hidden shadow-2xl shadow-accent/20">
                  <img
                    src={profileImg}
                    alt="Sachin Devarajan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badge 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, type: 'spring' }}
                  className="absolute -right-4 top-8 glass-card rounded-2xl px-4 py-2.5 shadow-lg"
                >
                  <p className="font-mono text-xs text-accent font-bold">Power BI</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Dashboard Expert</p>
                </motion.div>

                {/* Floating badge 2 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1, type: 'spring' }}
                  className="absolute -left-6 bottom-12 glass-card rounded-2xl px-4 py-2.5 shadow-lg"
                >
                  <p className="font-mono text-xs text-emerald-400 font-bold">Python & SQL</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Data Engineering</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center">
              <p className="font-display text-3xl font-bold text-accent">{s.num}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
