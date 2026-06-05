import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    icon: '🚗',
    title: 'Car Market Data Analysis',
    year: '2026',
    description: 'End-to-end exploratory data analysis on 11,000+ car market records uncovering brand trends, pricing patterns, and consumer behavior insights.',
    highlights: [
      'Data cleaning: handled missing values, removed duplicates, standardized columns',
      'Engineered features like avg_mpg and price_category',
      'Answered 11+ business questions on brand popularity, MSRP, fuel types',
      'Built 8+ visualizations: bar charts, scatter plots, pie charts, box plots',
    ],
    tools: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA'],
    github: 'https://github.com/SachinDevarajan/Car-Sales-Analysis.git',
    demo: null,
  },
  {
    icon: '📦',
    title: 'Amazon Sales Dashboard',
    year: '2026',
    description: 'Interactive Power BI dashboard with star schema data model revealing \
                  revenue-driving categories and profit trends across product lines.',
    highlights: [
      'Created star schema using Fact and Dimension tables (Sales, Product, Customer, Orders, Calendar)',
      'Built Yearly Sales Trend, Sales vs Profit by Category, and Order Funnel',
      'Improved decision-making by highlighting key revenue drivers',
      'Used DAX measures for dynamic KPI calculations',
    ],
    tools: ['Power BI', 'DAX', 'Data Modeling', 'Star Schema'],
    github: 'https://github.com/SachinDevarajan/amazon_sales.git',
    demo: null,
  },
  {
    icon: '🌍',
    title: 'Global Super Store Dashboard',
    year: '2026',
    description: 'Excel-based sales performance dashboard analyzing 51,290 orders across multiple regions, segments, and product categories.',
    highlights: [
      'Analyzed 51,290+ orders across multiple regions and segments',
      'Created 6 interactive charts: Category Sales & Profit, Monthly & Yearly Trends',
      'Identified Technology and Phones as top revenue drivers',
      'Labels and Paper identified as least profitable sub-categories',
    ],
    tools: ['Microsoft Excel', 'Pivot Tables', 'Slicers', 'Data Visualization'],
    github: 'https://github.com/SachinDevarajan/global_super_store.git',
    demo: null,
  },
  {
    icon: '🚙',
    title: 'BMW Car Data Cleaning & Analysis',
    year: '2026',
    description: 'Comprehensive Excel analysis of 9,082 BMW vehicle records across 8+ countries with pricing and sales trend insights.',
    highlights: [
      'Analyzed 9,082 BMW vehicle records spanning 8+ countries',
      'Cleaned data: removed duplicates, handled missing values, corrected formats',
      'Built Pivot Tables to identify pricing and sales trends by model and fuel type',
      'Generated actionable insights on regional market performance',
    ],
    tools: ['Microsoft Excel', 'Pivot Tables', 'Slicers', 'Data Cleaning'],
    github: 'https://github.com/SachinDevarajan/bmw_sales.git',
    demo: null,
  },
  {
  icon: '🛒',
  title: 'FirstCry Sales Analysis Dashboard',
  year: '2026',
  description: 'Interactive Power BI dashboard analyzing FirstCry sales performance, customer purchasing behavior, and product category trends to uncover key business insights.',
  highlights: [
    'Cleaned and transformed raw sales data using Power Query',
    'Built interactive dashboards with category, revenue, and order analysis',
    'Created KPI cards, sales trends, and customer insights visualizations',
    'Used DAX measures for dynamic calculations and performance tracking',
  ],
  tools: ['Power BI', 'DAX', 'Power Query', 'Data Visualization'],
  github: 'https://github.com/SachinDevarajan/firstcry.git',
  demo: null,
},
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="My work"
          title="Featured Projects"
          subtitle="Real-world data projects spanning EDA, Business Intelligence dashboards, and Excel analytics — each solving a unique business problem."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/SachinDevarajan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
