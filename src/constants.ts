/**
 * Portfolio Data Constants
 */

export const PERSONAL_INFO = {
  name: "Wajid Hussain",
  title: "Data & AI Engineer",
  tagline:
    "Helping businesses automate data workflows and unlock real-time insights using scalable data engineering and AI systems.",
  heroHook:
    "I build production-grade data pipelines and AI systems that reduce manual effort, automate workflows, and deliver real-time insights.",
  bio:
    "Data Engineer with hands-on experience in real-time data processing, ETL pipeline development, and AI-powered automation in the banking sector. Skilled in Kafka, Spark, Airflow, and cloud platforms (AWS & GCP). Passionate about solving real-world data problems and building scalable, efficient, and intelligent systems.",

  email: "engrwajid940@gmail.com",
  phone: "+923003239940",
  whatsapp: "https://wa.me/923003239940",
  linkedin: "https://www.linkedin.com/in/wajidhussainabro",
  github: "https://github.com/wajethedataguy",
  upwork: "https://www.upwork.com/freelancers/~0173013fbff3f419cb",
  fiverr: "https://www.fiverr.com/sellers/wajeabro/edit",

  // ✅ FINAL FIX (Vercel-safe)
  profileImage: "/images/profile.png",

  availability: "Available for Freelance Projects",
};

export const SERVICES = [
  {
    title: "Real-Time Data Pipelines",
    description: "Developing scalable streaming systems for low-latency data processing.",
    tools: ["Kafka", "Spark Streaming", "Flink", "Pub/Sub"],
  },
  {
    title: "ETL / ELT Automation",
    description: "Orchestrating complex workflows to automate data movement and transformation.",
    tools: ["Airflow", "dbt", "AWS Glue", "Azure Data Factory"],
  },
  {
    title: "AI & NLP Solutions",
    description: "Building intelligent systems for document processing, classification, and automation.",
    tools: ["Hugging Face", "LLMs", "FAISS", "LangChain"],
  },
  {
    title: "Modern Data Warehousing",
    description: "Architecting central data repositories for high-performance analytics.",
    tools: ["BigQuery", "Redshift", "Snowflake", "Databricks"],
  },
  {
    title: "Data Cleaning & Preprocessing",
    description: "Ensuring high-quality data through automated cleaning and feature engineering.",
    tools: ["Pandas", "PySpark", "Scikit-learn", "Regex"],
  },
];

export const SKILLS = [
  {
    category: "Data Engineering",
    items: ["Apache Kafka", "Apache Spark (PySpark)", "Hadoop", "Airflow", "Kafka Streams"],
  },
  {
    category: "Cloud & Warehousing",
    items: [
      "AWS (S3, EMR, EC2, Lambda, Glue, SNS, SQS)",
      "GCP (Pub/Sub, Dataflow, Composer, GCS)",
      "Azure (Power BI, Databricks)",
      "Hive",
      "BigQuery",
      "Redshift",
      "Databricks",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "MongoDB", "Cassandra", "Impala", "PostgreSQL"],
  },
  {
    category: "Programming & Tools",
    items: ["Python", "C++", "C", "Docker", "Git", "Power BI", "CloudWatch", "Terraform"],
  },
];

export const AI_ML_SKILLS = [
  {
    group: "NLP & Transformers",
    items: ["BERT", "Flan-T5", "DistilGPT2", "Hugging Face"],
  },
  {
    group: "Vector Search",
    items: ["FAISS", "Semantic Search", "ChromaDB"],
  },
  {
    group: "ML Pipelines",
    items: ["Scikit-learn", "Pandas/Numpy Preprocessing", "Regex Feature Engineering"],
  },
  {
    group: "AI Automation",
    items: ["LLMs", "Chatbots", "Multilingual AI (English/Urdu)", "AI in ETL"],
  },
];

export const STATS = [
  { label: "Data Projects Delivered", value: "20+" },
  { label: "Real-Time & Batch Pipelines", value: "15+" },
  { label: "Years Experience", value: "3+" },
  { label: "Client Satisfaction", value: "100%" },
];

export const EXPERIENCE = [
  {
    role: "Data Analytic Engineer",
    company: "Bank Alfalah Limited",
    period: "2025 – Present",
    highlights: [
      "Designed and monitored high-throughput ETL pipelines for audit analytics.",
      "Automated complex exception reporting workflows reducing manual effort by 90%.",
      "Built ML-based automation for anomaly detection and classification of audit cases.",
      "Delivered real-time insights and dashboards using Hadoop and SQL Server.",
    ],
    tools: ["Python", "Hadoop", "Impala", "SQL Server", "Airflow"],
  },
  {
    role: "Data Engineer",
    company: "Taj Gasoline",
    period: "2023 – 2024",
    highlights: [
      "Developed end-to-end ETL pipelines using Airflow and AWS Glue.",
      "Integrated complex ERP systems into a centralized AWS-based data warehouse.",
      "Optimized SQL queries and AWS infrastructure performance for faster reporting.",
    ],
    tools: ["AWS Glue", "S3", "Airflow", "Redshift", "Python"],
  },
  {
    role: "IT Engineer",
    company: "Lucky Knits",
    period: "2022 – 2023",
    highlights: [
      "Managed critical infrastructure, databases, and enterprise systems.",
      "Optimized enterprise system network and database performance.",
    ],
    tools: ["SQL Server", "AD", "Networking", "Oracle"],
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "Banking Policies Chatbot",
    subtitle: "AI-Driven Compliance Assistant",
    problem:
      "Bank employees struggled to find specific policies in 1000+ page PDF documents manually.",
    solution:
      "Developed an AI-powered RAG system using FAISS for semantic search and Flan-T5 for answering.",
    description:
      "AI-powered offline chatbot answering banking policy queries directly from PDF documents.",
    tech: ["Python", "Hugging Face", "FAISS", "Tkinter", "Pandas"],
    impact: "95% reduction in compliance lookup time; 100% offline security.",
    image: "/images/projects/chatbot.png",
    contributions: [
      "FAISS vector search for semantic retrieval.",
      "Flan-T5 transformer for question answering.",
      "Tkinter desktop UI with multilingual support.",
    ],
  },
  {
    title: "Daily KRI’s Email Pipeline",
    subtitle: "UI-Driven ETL Workflow",
    problem:
      "Auditors spent hours manually extracting and mailing KRI reports daily.",
    solution:
      "Built a UI-driven automation tool that handles extraction, validation, and mailing via Outlook.",
    description:
      "UI-based ETL automation replacing manual audit workflows and reporting.",
    tech: ["Python", "Pandas", "Tkinter", "Outlook COM API"],
    impact: "Reduced reporting time from 4 hours to 5 minutes daily.",
    image: "/images/projects/etl.png",
    contributions: [
      "Automated Outlook COM integration for direct reporting.",
      "Built Tkinter UI for one-click job execution.",
      "Implemented comprehensive logging and validation.",
    ],
  },
];

export const LATEST_PROJECTS = [
  {
    title: "Audit Exceptional Cases Classification",
    impact: "Automated classification of audit responses using BERT.",
    tech: ["Python", "BERT", "Scikit-Learn"],
  },
  {
    title: "KYC Audit Analyzer",
    impact: "Processed millions of records with 100+ audit rules.",
    tech: ["Python", "Pandas", "ETL", "Tkinter"],
  },
  {
    title: "Real-Time Cricket Data Pipeline (GCP)",
    impact: "Live analytics using Airflow + BigQuery.",
    tech: ["Python", "GCP", "APIs"],
  },
  {
    title: "End-to-End ELT Pipeline (GCP)",
    impact: "Enriched datasets with BigQuery dashboards.",
    tech: ["Cloud Composer", "BigQuery"],
  },
  {
    title: "Email Automation for Exceptions",
    impact: "Automated branch-level reporting via Outlook API.",
    tech: ["Python", "Outlook API"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "Oracle Cloud Infrastructure 2025 Data Science Professional",
    issuer: "Oracle",
    image: "/images/certifications/oracle.png",
    link: "...",
  },
  {
    title: "Google Cloud Professional Data Engineer",
    issuer: "Udemy",
    image: "/images/certifications/gcp.png",
    link: "...",
  },
  {
    title: "AWS Certified Data Engineer – Associate",
    issuer: "Udemy",
    image: "/images/certifications/aws.png",
    link: "...",
  },
];

export const EDUCATION = [
  { degree: "MS Data Science", period: "2024 – Present" },
  { degree: "B.E Computer Systems Engineering", period: "2017 – 2021" },
];

export const LANGUAGES = ["English (Fluent)", "Urdu (Fluent)"];

export const SOFT_SKILLS = [
  "Teamwork",
  "Leadership",
  "Communication",
  "Problem Solving",
  "Critical Thinking",
];