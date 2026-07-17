import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import {
  FiCode, FiDatabase, FiBarChart2, FiCpu, FiTool, FiBookOpen, FiAward, FiUser
} from 'react-icons/fi'

const skillCategories = [
  {
    icon: <FiCode size={18} />,
    label: 'Languages',
    color: 'from-blue-500/10 to-blue-500/5',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    skills: ['Python','SQL']
  },
  {
    icon: <FiBarChart2 size={18} />,
    label: 'Data Analytics',
    color: 'from-accent/10 to-accent/5',
    border: 'border-accent/20',
    accent: 'text-accent',
    skills: ['Excel', 'Advanced Excel', 'Power BI', 'Data Cleaning', 'EDA', 'Data Visualization', 'VLOOKUP', 'Pivot Tables','Hadoop','PySpark']
  },
  {
    icon: <FiDatabase size={18} />,
    label: 'SQL Skills',
    color: 'from-emerald-500/10 to-emerald-500/5',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    skills: ['Joins', 'Window Functions', 'CRUD Operations', 'GROUP BY', 'Subqueries', 'Aggregate Functions', 'CTE', 'Query Optimization','SnowFlake']
  },
  {
    icon: <FiCpu size={18} />,
    label: 'Machine Learning',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    skills: ['Linear Regression', 'Logistic Regression', 'Decision Tree','KNN', 'KMeans', 'Clustering', 'Model Evaluation', 'Confusion Matrix','Over Sampling','SMOTE','Under Sampling']
  },
  {
    icon: <FiCpu size={18} />,
    label: 'Generative AI',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'border-purple-500/20',
    accent: 'text-purple-500',
    skills: ['RAG', 'NLP', 'Semantic Search', 'FAISS', 'Sentence Transformers', 'Vector Databases', 'Prompt Engineering', 'LLMs']
  },
  {
    icon: <FiCode size={18} />,
    label: 'Libraries',
    color: 'from-orange-500/10 to-orange-500/5',
    border: 'border-orange-500/20',
    accent: 'text-orange-400',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn', 'imb-learn',]
  },
  {
    icon: <FiTool size={18} />,
    label: 'Tools',
    color: 'from-pink-500/10 to-pink-500/5',
    border: 'border-pink-500/20',
    accent: 'text-pink-400',
    skills: ['VS Code', 'SQL Plus', 'Power BI', 'Microsoft Excel', 'Git', 'GitHub']
  },
]

const softSkills = [
  'Analytical Thinking', 'Problem Solving', 'Data Storytelling',
  'Team Collaboration', 'Communication',
  'Business Acumen', 'Continuous Learning'
]

const education = [
  {
    degree: 'M.Sc. Information Technology',
    school: 'Rathinam College of Arts and Science',
    location: 'Coimbatore',
    year: '2022 – 2024',
    cgpa: '6.80',
    icon: '🎓',
  },
  {
    degree: 'B.Sc. Computer Science',
    school: 'J.J College of Arts and Science',
    location: 'Pudukkottai',
    year: '2019 – 2022',
    cgpa: '7.44',
    icon: '📚',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* BG blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Get to know me"
          title="About Me"
          subtitle="Passionate about turning complex data into clear, impactful stories that drive smarter business decisions."
        />

        {/* About + Career Objective */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                <FiUser size={18} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Who I Am</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              I'm <span className="text-accent font-semibold">Sachin Devarajan</span>, a Data Analyst based in Bangalore with a strong foundation in Python, SQL, Excel, and Power BI. 
              I specialize in data cleaning, exploratory data analysis, dashboard development, feature engineering, and business reporting. 
              My goal is to bridge the gap between raw data and meaningful insights that help organizations make smarter decisions.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mt-4">
              With hands-on project experience analyzing over 50,000+ real-world records, I've developed a deep appreciation for data quality 
              and the power of visual storytelling in driving business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <FiBookOpen size={18} />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Career Objective</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              To secure a challenging role as a <span className="text-accent font-semibold">Data Analyst</span> where I can leverage my technical expertise 
              in Python, SQL, Power BI, and Machine Learning to deliver impactful data-driven solutions. 
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mt-4">
              I aim to contribute to a forward-thinking organization that values analytical rigor, continuous learning, 
              and the power of data in solving complex business problems — while growing into a 
              Business Intelligence or ML Engineering role over time.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['Data Analysis', 'Business Intelligence', 'ML Engineering'].map(tag => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
              <FiCode size={18} />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Technical Skills</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`glass-card rounded-2xl p-5 border ${cat.border} bg-gradient-to-br ${cat.color}`}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={cat.accent}>{cat.icon}</span>
                  <h4 className={`font-body font-semibold text-sm ${cat.accent}`}>{cat.label}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white/20 dark:bg-white/10 text-gray-700 dark:text-gray-300 border border-white/30 dark:border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-gold/10 flex items-center justify-center text-gold border border-gold/20">
              <FiAward size={18} />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="font-body text-sm px-5 py-2.5 rounded-full glass-card text-gray-700 dark:text-gray-300 border border-gold/20 hover:border-gold/50 hover:text-gold transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <FiBookOpen size={18} />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block" />

            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 w-10 h-10 rounded-full bg-accent/10 border-2 border-accent items-center justify-center text-lg">
                    {edu.icon}
                  </div>

                  <div className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div>
                        <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-accent font-medium text-sm mt-1">{edu.school}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{edu.location}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                          {edu.year}
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          CGPA: <span className="text-gray-700 dark:text-gray-300 font-semibold">{edu.cgpa}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
