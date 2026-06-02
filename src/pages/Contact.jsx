import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'

const contactInfo = [
  {
    icon: <FiMail size={20} />,
    label: 'Email',
    value: 'sachindevarajan7@gmail.com',
    href: 'mailto:sachindevarajan7@gmail.com',
    color: 'text-accent border-accent/20 bg-accent/10',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Phone',
    value: '+91 82202 26139',
    href: 'tel:+918220226139',
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
  },
  {
    icon: <FiMapPin size={20} />,
    label: 'Location',
    value: 'Bangalore, Karnataka, India',
    href: null,
    color: 'text-blue-400 border-blue-500/20 bg-blue-500/10',
  },
]

const socials = [
  {
    icon: <FiGithub size={18} />,
    label: 'GitHub',
    username: 'SachinDevarajan',
    href: 'https://github.com/SachinDevarajan',
  },
  {
    icon: <FiLinkedin size={18} />,
    label: 'LinkedIn',
    username: 'sachindevarajan',
    href: 'https://linkedin.com/in/sachindevarajan',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1400))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Let's connect"
          title="Get In Touch"
          subtitle="Whether you have a job opportunity, a project to discuss, or just want to say hello — I'd love to hear from you."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5 flex items-start gap-4"
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${item.color} shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm font-medium text-gray-800 dark:text-gray-200">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div className="glass-card rounded-2xl p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">Social Profiles</p>
              <div className="flex flex-col gap-3">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-500 dark:text-gray-400 group-hover:text-accent group-hover:border-accent/40 transition-all">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">{s.label}</p>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-accent transition-colors">
                        @{s.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Job Opportunity / Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-widest text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Sachin, I'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 text-sm placeholder-gray-400 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-body font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300
                    ${sent
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                      : 'btn-primary w-full justify-center'
                    }`}
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <FiCheck size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  I typically respond within 24 hours.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
