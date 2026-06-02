import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiArrowRight } from 'react-icons/hi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative glass-card rounded-3xl p-7 flex flex-col h-full overflow-hidden transition-all duration-300 hover:border-accent/40"
    >
      {/* Gradient glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex items-start justify-between mb-5 relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-xl font-display font-bold border border-accent/20">
          {project.icon}
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-accent transition-colors"
              aria-label="Live Demo"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mb-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent/80">
            {project.year}
          </span>
        </div>
        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tools.map(t => (
            <span key={t} className="skill-tag text-[10px]">{t}</span>
          ))}
        </div>

        {/* CTA */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-accent hover:gap-3 transition-all duration-200 group/link"
          >
            View on GitHub <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </motion.article>
  )
}
