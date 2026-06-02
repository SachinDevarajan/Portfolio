import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-balance leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="w-12 h-0.5 bg-accent/40 rounded-full" />
        <div className="w-3 h-3 rounded-full bg-accent" />
        <div className="w-12 h-0.5 bg-accent/40 rounded-full" />
      </div>
    </motion.div>
  )
}
