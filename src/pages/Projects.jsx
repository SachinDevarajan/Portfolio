import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
  icon: '📰',
  title: 'AG News Text Classification',
  year: '2026',
  description: 'Machine Learning based NLP project that automatically classifies news articles into four categories using Natural Language Processing and supervised learning algorithms.',
  highlights: [
    'Built an end-to-end text classification pipeline using NLP preprocessing techniques',
    'Performed text cleaning, tokenization, stopword removal, and stemming',
    'Converted text into numerical features using TF-IDF Vectorization',
    'Trained and evaluated multiple Machine Learning classification models',
    'Compared model performance using Accuracy, Precision, Recall, and F1-Score',
    'Developed an automated news category prediction system for unseen articles'
  ],
  tools: [
    'Python',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'TF-IDF',
    'Machine Learning'
  ],
  github: 'https://github.com/SachinDevarajan/AG_News_Analysis',
  demo: null,
  },
  {
  icon: '🎬',
  title: 'IMDb Movie Review Sentiment Analysis',
  year: '2026',
  description: 'Natural Language Processing project that predicts whether movie reviews express Positive or Negative sentiment using Machine Learning algorithms.',
  highlights: [
    'Implemented an end-to-end sentiment analysis pipeline using NLP techniques',
    'Preprocessed movie review text through tokenization, stemming, and stopword removal',
    'Generated TF-IDF feature vectors for machine learning model training',
    'Built and evaluated sentiment classification models on IMDb review dataset',
    'Measured performance using Accuracy, Precision, Recall, and F1-Score',
    'Enabled automatic sentiment prediction for new movie reviews'
  ],
  tools: [
    'Python',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'TF-IDF',
    'Machine Learning'
  ],
  github: 'https://github.com/SachinDevarajan/IMDB_Review_Analysis',
  demo: null,
  },
  {
  icon: '🛡️',
  title: 'Fake News Detection using NLP',
  year: '2026',
  description: 'Machine Learning based Fake News Detection system that identifies whether a news article is Real or Fake using Natural Language Processing techniques.',
  highlights: [
    'Developed a complete NLP pipeline for fake news classification',
    'Performed data preprocessing including text normalization and stopword removal',
    'Extracted text features using TF-IDF Vectorizer',
    'Trained Machine Learning models to classify fake and genuine news articles',
    'Evaluated model performance using Confusion Matrix and Classification Report',
    'Created an intelligent prediction system for real-time news credibility analysis'
  ],
  tools: [
    'Python',
    'Scikit-learn',
    'Pandas',
    'NumPy',
    'TF-IDF',
    'Machine Learning'
  ],
  github: 'https://github.com/SachinDevarajan/Fake_News_Analysis',
  demo: null,
  },
  {
    icon: '📦',
    title: 'Blinkit Sales Analytics Dashboard',
    year: '2026',
    description: 'Comprehensive Power BI dashboard that transforms Blinkit operational and sales data into actionable insights across customer behavior, product performance, delivery efficiency, and business growth metrics.',
    highlights: [
      'Developed an end-to-end sales analytics dashboard using Power BI and DAX',
      'Analyzed revenue, orders, customer trends, and product category performance',
      'Built interactive KPI cards, filters, and drill-through reports for deeper analysis',
      'Created Executive Overview, Customer Analytics, Product Analytics, Delivery Analytics, and Marketing Analytics pages',
      'Used DAX measures and calculated columns for dynamic business metrics',
      'Enabled data-driven decision-making through visual storytelling and trend analysis',
    ],
    tools: ['Power BI', 'DAX', 'Power Query', 'Python', 'Data Visualization'],
    github: 'https://github.com/SachinDevarajan/Blinkit.git',
    demo: null,
  },
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
