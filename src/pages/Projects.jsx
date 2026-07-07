import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'
import agNews from "../assets/projects/agnews.png";
import imdb from "../assets/projects/imdb.png";
import fakeNews from "../assets/projects/fakenews.png";
import blinkit from "../assets/projects/blinkit.png";
import carMarket from "../assets/projects/carmarket.png";
import amazon from "../assets/projects/amazon.png";
import globalStore from "../assets/projects/global-store.png";
import bmw from "../assets/projects/bmw.png";
import firstcry from "../assets/projects/firstcry.png";

const projects = [
  {
    id: 1,
    featured: true,
    category: "NLP",
    image: agNews,

    title: "AG News Text Classification",

    year: "2026",

    problem:
      "Automatically classify thousands of news articles into Business, Sports, Science & Technology, and World categories using Natural Language Processing.",

    solution:
      "Developed a complete NLP pipeline by cleaning text, removing stopwords, applying TF-IDF vectorization, and training multiple machine learning models for multi-class text classification.",

    results: {
      dataset: "120K News Articles",
      algorithm: "Logistic Regression",
      task: "Multi-Class Classification"
    },

    features: [
      "Text Cleaning",
      "Tokenization",
      "Stopword Removal",
      "TF-IDF Vectorization",
      "Model Training",
      "Performance Evaluation",
      "Prediction System"
    ],

    tools: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TF-IDF",
      "Machine Learning"
    ],

    github: "https://github.com/SachinDevarajan/AG_News_Analysis",
    demo: null
  },

  {
    id: 2,
    featured: true,
    category: "NLP",

    image: imdb,
    title: "IMDb Movie Review Sentiment Analysis",

    year: "2026",

    problem:
      "Determine whether a movie review expresses positive or negative sentiment using Natural Language Processing.",

    solution:
      "Built a complete sentiment analysis pipeline using text preprocessing, TF-IDF feature extraction, and supervised machine learning algorithms.",

    results: {
      dataset: "50K Movie Reviews",
      algorithm: "Logistic Regression",
      task: "Binary Classification"
    },

    features: [
      "Text Preprocessing",
      "Tokenization",
      "Stopword Removal",
      "TF-IDF",
      "Sentiment Prediction",
      "Model Evaluation"
    ],

    tools: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TF-IDF",
      "Machine Learning"
    ],

    github:
      "https://github.com/SachinDevarajan/IMDB_Review_Analysis",

    demo: null
  },

  {
    id: 3,
    featured: true,

    category: "NLP",

    image: fakeNews,

    title: "Fake News Detection",

    year: "2026",

    problem:
      "Identify whether an online news article is genuine or fake using Natural Language Processing.",

    solution:
      "Designed an NLP-based fake news classification model using TF-IDF vectorization and supervised machine learning to improve news credibility detection.",

    results: {
      dataset: "44K News Articles",
      algorithm: "Passive Aggressive Classifier",
      task: "Binary Classification"
    },

    features: [
      "Text Cleaning",
      "Feature Extraction",
      "TF-IDF",
      "Classification",
      "Confusion Matrix",
      "Prediction System"
    ],

    tools: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "TF-IDF",
      "Machine Learning"
    ],

    github:
      "https://github.com/SachinDevarajan/Fake_News_Analysis",

    demo: null
  },

  {
    id: 4,

    featured: true,

    category: "Power BI",

    image: blinkit,

    title: "Blinkit Sales Analytics Dashboard",

    year: "2026",

    problem:
      "Analyze Blinkit's sales performance, customer behavior, inventory, and marketing effectiveness to support business decisions.",

    solution:
      "Created an enterprise-level Power BI solution using Python for preprocessing, Power Query for transformation, DAX measures, star schema modeling, and interactive dashboards.",

    results: {
      dashboard: "6 Pages",
      model: "Star Schema",
      tool: "Power BI + DAX"
    },

    features: [
      "Executive Dashboard",
      "Customer Analytics",
      "Product Analytics",
      "Marketing Analytics",
      "Delivery Analytics",
      "Interactive Filters",
      "Dynamic KPIs"
    ],

    tools: [
      "Power BI",
      "Python",
      "Power Query",
      "DAX",
      "Data Modeling"
    ],

    github:
      "https://github.com/SachinDevarajan/Blinkit.git",

    demo: null
  },

  {
    id: 5,

    category: "EDA",

    image: carMarket,

    title: "Car Market Data Analysis",

    year: "2026",

    problem:
      "Analyze vehicle market trends, pricing behavior, and consumer preferences using exploratory data analysis.",

    solution:
      "Performed end-to-end data cleaning, feature engineering, visualization, and business analysis on 11,000+ vehicle records.",

    results: {
      dataset: "11K Cars",
      charts: "8+ Charts",
      questions: "11 Business Questions"
    },

    features: [
      "EDA",
      "Data Cleaning",
      "Feature Engineering",
      "Visualization",
      "Business Insights"
    ],

    tools: [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn"
    ],

    github:
      "https://github.com/SachinDevarajan/Car-Sales-Analysis.git",

    demo: null
  },

  {
    id: 6,

    category: "Power BI",

    image: amazon,

    title: "Amazon Sales Dashboard",

    year: "2026",

    problem:
      "Monitor sales, profit, product performance, and customer trends through an interactive business intelligence dashboard.",

    solution:
      "Developed a Power BI dashboard using a star schema model and DAX calculations to analyze revenue, profitability, and order performance.",

    results: {
      dashboard: "5 Pages",
      model: "Star Schema",
      tool: "Power BI"
    },

    features: [
      "Sales Dashboard",
      "Profit Analysis",
      "Order Funnel",
      "Category Insights",
      "Dynamic KPIs"
    ],

    tools: [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling"
    ],

    github:
      "https://github.com/SachinDevarajan/amazon_sales.git",

    demo: null
  },

  {
    id: 7,

    category: "Excel",

    image: globalStore,

    title: "Global Super Store Dashboard",

    year: "2026",

    problem:
      "Analyze regional sales performance and product profitability using Microsoft Excel dashboards.",

    solution:
      "Created an interactive Excel dashboard using Pivot Tables, Pivot Charts, and slicers to visualize business performance.",

    results: {
      dataset: "51K Orders",
      charts: "6 Charts",
      tool: "Microsoft Excel"
    },

    features: [
      "Pivot Tables",
      "Pivot Charts",
      "Slicers",
      "Sales Trends",
      "Profit Analysis"
    ],

    tools: [
      "Excel",
      "Pivot Tables",
      "Charts",
      "Data Cleaning"
    ],

    github:
      "https://github.com/SachinDevarajan/global_super_store.git",

    demo: null
  },

  {
    id: 8,

    category: "Excel",

    image: bmw,

    title: "BMW Car Sales Analysis",

    year: "2026",

    problem:
      "Explore BMW vehicle sales data to understand pricing trends and regional market performance.",

    solution:
      "Performed data cleaning and created Excel dashboards to analyze sales trends, fuel types, and model performance.",

    results: {
      dataset: "9K Vehicles",
      countries: "8+ Countries",
      tool: "Microsoft Excel"
    },

    features: [
      "Data Cleaning",
      "Pivot Tables",
      "Pricing Analysis",
      "Regional Insights"
    ],

    tools: [
      "Excel",
      "Pivot Tables",
      "Charts"
    ],

    github:
      "https://github.com/SachinDevarajan/bmw_sales.git",

    demo: null
  },

  {
    id: 9,

    category: "Power BI",

    image: firstcry,

    title: "FirstCry Sales Dashboard",

    year: "2026",

    problem:
      "Analyze sales performance, customer behavior, and product trends to improve business decisions.",

    solution:
      "Built a Power BI dashboard with DAX measures and Power Query transformations for sales and customer analytics.",

    results: {
      dashboard: "Interactive",
      tool: "Power BI",
      kpis: "Dynamic KPIs"
    },

    features: [
      "Revenue Analysis",
      "Customer Insights",
      "Category Analysis",
      "Power Query",
      "DAX"
    ],

    tools: [
      "Power BI",
      "DAX",
      "Power Query"
    ],

    github:
      "https://github.com/SachinDevarajan/firstcry.git",

    demo: null
  }
]



export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A collection of real-world Data Analytics, Machine Learning, NLP, Power BI, and Excel projects showcasing business problem-solving, predictive modeling, interactive dashboards, and data-driven decision making."
        />

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="flex justify-center mt-14">
          <a
            href="https://github.com/SachinDevarajan"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-3"
          >
            View All Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}