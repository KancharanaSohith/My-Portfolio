import { PortfolioConfig } from './types';

const projectImage = (fileName: string) => `/images/projects/${fileName}`;

export const INITIAL_PORTFOLIO_DATA: PortfolioConfig = {
  accent: 'hogwarts',
  layout: 'parchment',
  personal: {
    name: 'Sohith Kancharana',
    title: 'AI Systems Engineer | Agentic AI & Voice Bots',
    bio: 'AI Systems Engineer with 3+ years of expertise building agentic AI platforms, conversational systems, and intelligent automation at scale.',
    longBio:
      'Specialized in agentic AI, voice agents, and customer-facing chatbots — from LLM orchestration and RAG pipelines to platform debugging and production-ready agent logic using MCP (Model Context Protocol). Experienced across text and voice modalities, deploying scalable solutions on cloud platforms with memory-aware, context-driven systems that serve real end users — plus analytics dashboards to track and improve agent performance over time.',
    email: 'sohithkancharana@gmail.com',
    phone: '+91 9381536325',
    location: 'India',
    avatarUrl: '/images/sohith-profile.png',
    resumeUrl: 'resume/Sohith_Kancharana_Resume.pdf',
    github: 'https://github.com/KancharanaSohith',
    linkedin: 'https://www.linkedin.com/in/kancharana-sohith-5b17461a0',
  },
  stats: [
    { label: 'Years Experience', value: '3+', description: 'Building AI & chatbot systems' },
    { label: 'Projects Delivered', value: '13+', description: 'Work, personal, and freelance builds' },
    { label: 'Hackathon Winner', value: '1st', description: 'Hack the Future 2.0 — Infoverse assistant' },
    { label: 'Cloud Certified', value: 'AWS', description: 'AWS Cloud Practitioner certified' },
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'Hack the Future 2.0',
      description: "First prize in LTIMindtree's Hackathon for developing Smart Virtual Assistant \"Infoverse\"",
      icon: 'trophy',
    },
    {
      id: 'ach-2',
      title: 'I Win Spot Awards',
      description: 'Recognized as a better coach and team player in 2023',
      icon: 'award',
    },
    {
      id: 'ach-3',
      title: 'AWS Cloud Practitioner',
      description: 'Certified in AWS Cloud services and architecture',
      icon: 'certificate',
    },
    {
      id: 'ach-4',
      title: 'Oracle Java SE11',
      description: 'Oracle certified Java programmer',
      icon: 'certificate',
    },
  ],
  projects: [
    {
      id: 'proj-nova-voice',
      title: 'Agentic Voice Bots (Nova Platform)',
      description:
        'Production voice agents on the Nova agentic platform — conversation logic, LLM orchestration, and RAG-powered flows for direct end customers.',
      longDescription:
        'Building production voice agents on the Nova agentic platform at RingCentral. Designing conversation logic, LLM orchestration, and RAG-powered flows that serve direct end customers. Includes platform debugging and iterative refinement of voice bot behavior at scale.',
      imageUrl: projectImage('nova-voice-bots.jpg'),
      tags: ['Agentic AI', 'Voice Agents', 'RAG', 'LLM Orchestration', 'Python', 'JavaScript'],
      source: 'Work',
      category: 'AI/ML',
      featured: true,
    },
    {
      id: 'proj-nova-qa',
      title: 'Nova QA Dashboard',
      description:
        'QA dashboard to track voice bot performance, measure improvements over time, and surface actionable insights for the Nova platform.',
      longDescription:
        'Designing a QA dashboard to track voice bot performance, measure improvements over time, and surface actionable insights for the Nova platform. Enables data-driven iteration on agent quality and reliability using React and analytics tooling.',
      imageUrl: projectImage('nova-qa-dashboard.jpg'),
      tags: ['React', 'Analytics', 'Voice Agents', 'QA', 'Dashboard'],
      source: 'Work',
      category: 'Frontend',
      featured: true,
    },
    {
      id: 'proj-rag-bot',
      title: 'RAG-powered Conversational Bot',
      description:
        'Chatbot integrating MCP Agent, memory maps, and RAG pipelines for intelligent knowledge retrieval with source-linked answers on GCP.',
      longDescription:
        'Built chatbot integrating MCP Agent, memory maps, and RAG pipelines for intelligent knowledge retrieval. Enabled retrieval of relevant documents with source-links and contextual answers. Deployed on Google Cloud with Gemini API for LLM-powered responses.',
      imageUrl: projectImage('rag-conversational-bot.jpg'),
      tags: ['MCP', 'RAG', 'Gemini LLM', 'GCP', 'Python'],
      source: 'Work',
      category: 'AI/ML',
      featured: true,
    },
    {
      id: 'proj-job-posting',
      title: 'Job Posting Automation Plugin',
      description:
        'HR-gated hiring lifecycle engine syncing Teams to careers portal and LinkedIn with per-opening IDs and smart close on hire.',
      longDescription:
        'HR-gated hiring lifecycle engine that syncs intent from Teams to a company careers portal and LinkedIn. One form creates multiple openings with unique IDs, HR approval gates before publish, smart per-opening close on hire, and LinkedIn stays live until all seats are filled. Full backend MVP with state machine orchestration.',
      imageUrl: projectImage('job-posting-automation.jpg'),
      tags: ['TypeScript', 'Express', 'Prisma', 'Microsoft Teams', 'HR Tech', 'Automation'],
      source: 'Personal',
      category: 'Fullstack',
      githubUrl: 'https://github.com/KancharanaSohith/Job-Posting-Automation-Plugin',
      featured: true,
    },
    {
      id: 'proj-chatbot-lti',
      title: 'Chatbot Development',
      description:
        'Kore.ai and Dialogflow chatbots automating ticket generation, server upgrades, and support workflows across enterprise domains.',
      longDescription:
        'Developed and deployed Kore.ai and Dialogflow-based chatbots to automate ticket generation, server upgrades, and support workflows. Designed robust conversation flows, entities, and context logic to manage dynamic user queries across multiple domains.',
      imageUrl: projectImage('chatbot-development.jpg'),
      tags: ['Kore.ai', 'Dialogflow', 'NLP', 'JavaScript'],
      source: 'Work',
      category: 'AI/ML',
      featured: false,
    },
    {
      id: 'proj-topic-modelling',
      title: 'Topic Modelling',
      description:
        'Python topic modelling to classify and prioritize IT support tickets — 25% faster resolution and 2x SLA adherence.',
      longDescription:
        'Built Python-based topic modelling solution to classify and prioritize IT support tickets using TF-IDF, LDA, and keyword extraction. Led to 25% reduction in resolution time and 2x increase in SLA adherence.',
      imageUrl: projectImage('topic-modelling.jpg'),
      tags: ['Python', 'TF-IDF', 'LDA', 'NLP'],
      source: 'Work',
      category: 'AI/ML',
      featured: false,
    },
    {
      id: 'proj-server-automation',
      title: 'Server Automation',
      description:
        'Ansible playbooks for server upgrades and patch deployments integrated with chatbot flows — 70% of repetitive tasks automated.',
      longDescription:
        'Developed Ansible playbooks for server upgrades, log cleanups, and patch deployments, integrated with chatbot flows. Reduced downtime risk and increased release velocity by automating 70% of repetitive server-side tasks.',
      imageUrl: projectImage('server-automation.jpg'),
      tags: ['Ansible', 'Python', 'DevOps', 'Automation'],
      source: 'Work',
      category: 'Backend',
      featured: false,
    },
    {
      id: 'proj-support-dashboard',
      title: 'Support Ticket Automation Dashboard',
      description:
        'Power BI-style dashboard for support ticket metrics, automation ROI, resolution time comparison, and trend analysis.',
      longDescription:
        'Power BI-style dashboard for analyzing support ticket metrics, automation usage, ROI calculations, and trend analysis. Features automation tool breakdown, resolution time comparison, and opportunity predictions. Built with Flask, Chart.js and Python.',
      imageUrl: projectImage('support-ticket-dashboard.jpg'),
      tags: ['Flask', 'Python', 'Chart.js', 'Analytics', 'Spacy'],
      source: 'Personal',
      category: 'Fullstack',
      githubUrl: 'https://github.com/KancharanaSohith/SupportTicketDashboard',
      featured: false,
    },
    {
      id: 'proj-mock-test',
      title: 'AI Mock Test Generator',
      description:
        'Mock exam platform for UPSC Prelims and SSC-CGL using Gemini AI and OpenAI with timed exams and automatic scoring.',
      longDescription:
        'Comprehensive platform for generating mock exam papers for UPSC Prelims and SSC-CGL exams using Gemini AI and OpenAI. Features built-in exam taking interface with timer, automatic scoring, PDF download, persona system for practice sessions, and rate limiting (2 papers/day per exam type).',
      imageUrl: projectImage('ai-mock-test-generator.jpg'),
      tags: ['FastAPI', 'Gemini AI', 'OpenAI', 'Python', 'SQLite'],
      source: 'Personal',
      category: 'AI/ML',
      githubUrl: 'https://github.com/KancharanaSohith/Mock-Test-Generator',
      featured: false,
    },
    {
      id: 'proj-grocery',
      title: 'Smart Grocery Reorder Assistant',
      description:
        'AI grocery management with ML consumption prediction, grace periods, and smart ordering for quick-commerce users.',
      longDescription:
        'AI-powered grocery management solving real-world challenges for Zepto/Blinkit users. Features ML-based consumption prediction (Random Forest), grace period management, smart ordering system, seasonal recommendations, and adaptive learning from order history.',
      imageUrl: projectImage('smart-grocery-assistant.jpg'),
      tags: ['FastAPI', 'Machine Learning', 'SQLite', 'AI', 'Python'],
      source: 'Personal',
      category: 'AI/ML',
      githubUrl: 'https://github.com/KancharanaSohith/SmartGroceryAssistant',
      featured: false,
    },
    {
      id: 'proj-price-tracker',
      title: 'Price Drop Tracker',
      description:
        'Price comparison tool scraping Amazon India, Flipkart, Myntra, and Ajio with real-time discount tracking in INR.',
      longDescription:
        'Price comparison tool that scrapes deals from 4 major Indian e-commerce sites (Amazon India, Flipkart, Myntra, Ajio). Real-time price tracking with category filtering, discount tracking in ₹ (INR), and a modern responsive UI. Built with Flask, BeautifulSoup, Requests, and Selenium.',
      imageUrl: projectImage('price-drop-tracker.jpg'),
      tags: ['Flask', 'Python', 'Web Scraping', 'Selenium', 'BeautifulSoup'],
      source: 'Personal',
      category: 'Fullstack',
      githubUrl: 'https://github.com/KancharanaSohith/PriceDropTracker',
      featured: false,
    },
    {
      id: 'proj-namma-ooru',
      title: 'Namma Ooru Ruchulu',
      description:
        'E-commerce website for South Indian food products with WhatsApp integration, product catalog, and order management.',
      longDescription:
        'E-commerce website for South Indian food products with WhatsApp integration, product catalog, and order management system. Live freelance deployment serving real customers.',
      imageUrl: projectImage('namma-ooru-ruchulu.jpg'),
      tags: ['HTML/CSS', 'JavaScript', 'E-commerce', 'WhatsApp API'],
      source: 'Freelance',
      category: 'Design',
      demoUrl: 'https://namma-ooru-ruchulu.vercel.app/',
      featured: false,
    },
    {
      id: 'proj-pootharekulu',
      title: "Achan's Pootharekulu & Chandini Stitches",
      description:
        'Dual-business website for traditional sweets and tailoring with online ordering, gallery, and contact forms.',
      longDescription:
        'Dual-business website featuring traditional sweet shop and tailoring services with online ordering, gallery, and contact forms. Live freelance deployment for local businesses.',
      imageUrl: projectImage('pootharekulu-stitches.jpg'),
      tags: ['HTML/CSS', 'JavaScript', 'Responsive Design', 'Multi-vendor'],
      source: 'Freelance',
      category: 'Design',
      demoUrl: 'https://bellam-pootharekulu-website.vercel.app/',
      featured: false,
    },
  ],
  skills: [
    {
      title: 'AI & Chatbots',
      skills: [
        { name: 'Agentic AI', level: 5 },
        { name: 'Voice Agents', level: 5 },
        { name: 'LLM Orchestration', level: 5 },
        { name: 'RAG Systems', level: 5 },
        { name: 'Dialogflow CX', level: 4 },
        { name: 'Kore.ai', level: 4 },
        { name: 'MCP', level: 5 },
        { name: 'NLP', level: 4 },
        { name: 'Gemini LLM', level: 4 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Cloud Platforms', level: 4 },
        { name: 'GCP', level: 4 },
        { name: 'AWS', level: 4 },
        { name: 'CI/CD', level: 4 },
        { name: 'Ansible', level: 4 },
        { name: 'Git', level: 5 },
        { name: 'Bitbucket', level: 4 },
      ],
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Python', level: 5 },
        { name: 'JavaScript', level: 5 },
        { name: 'React', level: 4 },
        { name: 'TypeScript', level: 4 },
        { name: 'HTML/CSS', level: 4 },
        { name: 'SQL', level: 4 },
        { name: 'REST API', level: 5 },
      ],
    },
    {
      title: 'Analytics & Tools',
      skills: [
        { name: 'Power BI', level: 4 },
        { name: 'Splunk', level: 3 },
        { name: 'ServiceNow', level: 3 },
        { name: 'Excel', level: 4 },
      ],
    },
  ],
  experience: [
    {
      id: 'exp-ringcentral',
      role: 'AI Systems Engineer',
      company: 'RingCentral',
      period: 'April 27, 2026 – Present',
      description: [
        'Building agentic platforms and customer-facing voice agents on the Nova platform',
        'Developing conversation logic and orchestration for production voice bots',
        'Implementing RAG pipelines and LLM orchestration for intelligent agent responses',
        'Debugging and stabilizing the Nova agentic platform for voice agent deployment',
        'Planning a QA dashboard to track voice bot performance and continuous improvements',
      ],
      skills: ['Agentic AI', 'Voice Agents', 'RAG', 'LLM Orchestration', 'Python', 'JavaScript', 'React'],
    },
    {
      id: 'exp-programming',
      role: 'AI Engineer',
      company: 'Programming.com',
      period: 'June 2025 – April 2026',
      description: [
        'Developed customer-facing chatbot using Google Dialogflow CX',
        'Built MCP (Model Context Protocol) Agents and Server for Agentic AI',
        'Implemented RAG pipelines for contextual knowledge retrieval',
        'Designed memory maps for context retention',
        'Leveraged GCP and Gemini LLM API',
      ],
      skills: ['Dialogflow CX', 'MCP', 'RAG', 'GCP', 'Gemini LLM', 'Python'],
    },
    {
      id: 'exp-lti',
      role: 'Senior Software Engineer',
      company: 'LTIMindtree',
      period: 'August 2022 – May 2025',
      description: [
        'Developed and deployed chatbots using Kore.ai and Dialogflow',
        'Integrated bots with REST APIs and enterprise systems',
        'Built Ansible playbooks for server automation',
        'Implemented CI/CD pipelines',
        'Conducted bot performance reviews with analytics',
      ],
      skills: ['Kore.ai', 'Dialogflow', 'Ansible', 'CI/CD', 'REST API', 'JavaScript'],
    },
  ],
  education: [
    {
      id: 'edu-btech',
      degree: 'Bachelor of Technology — Production Engineering',
      school: 'NIT Trichy',
      period: '2018 – 2022',
      description: 'CGPA: 8.84',
    },
    {
      id: 'edu-intermediate',
      degree: 'Intermediate (12th) — MPC',
      school: 'Chaitanya Junior College',
      period: '2016 – 2018',
      description: 'Score: 98.1%',
    },
  ],
};
