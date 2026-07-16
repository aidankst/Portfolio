export interface Profile {
  name: string
  role: string
  eyebrow: string
  headline: string
  introduction: string
  location: string
  github: string
  linkedin: string
}

export interface Metric {
  value: string
  label: string
  note: string
}

export interface ResearchItem {
  type: string
  title: string
  summary: string
  venue: string
  year: string
  tags: string[]
  href?: string
  linkLabel?: string
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  location: string
  type: string
  summary: string
  skills: string[]
}

export interface ProjectItem {
  title: string
  category: string
  summary: string
  technologies: string[]
  href?: string
  featured?: boolean
}

export interface PublicationItem {
  title: string
  authors: string
  venue: string
  year: string
  summary: string
  tags: string[]
  href: string
  featured?: boolean
}

export interface CredentialItem {
  title: string
  issuer: 'Google' | 'IBM' | 'Cisco'
  issued: string
  id: string
  href: string
  tags: string[]
  featured?: boolean
}

export interface Skill {
  name: string
  proficiency: number
  detail: string
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

export interface Education {
  institution: string
  degree: string
  location: string
  period: string
  focus: string
  gpa: string
  dissertationGrade: string
  dissertation: string
}

export const profile: Profile = {
  name: 'Kaung Sithu',
  role: 'Machine Learning Researcher',
  eyebrow: 'Computer vision · Event-based sensing · Data reliability',
  headline: 'Building perception systems that see faster—and data pipelines we can trust.',
  introduction:
    'I work at the intersection of machine learning, autonomous systems, and data quality. My research compares event-based and conventional vision while turning complex datasets into dependable evidence.',
  location: 'Kraków, Poland',
  github: 'https://github.com/aidankst/',
  linkedin: 'https://www.linkedin.com/in/aidankst/',
}

export const metrics: Metric[] = [
  { value: '05', label: 'Publications', note: 'Research outputs since 2025' },
  { value: '05', label: 'Projects', note: 'Research and engineering' },
  { value: '4.5/5', label: 'GPA', note: 'B.Sc. Computer Science' },
  { value: '5.0/5', label: 'Dissertation', note: 'Final thesis grade' },
]

export const research: ResearchItem[] = [
  {
    type: 'Peer-reviewed paper',
    title: 'Cyberattack resilience of autonomous-vehicle sensor systems',
    summary:
      'Compared RGB and Dynamic Vision Sensor pipelines under cyberattack scenarios in CARLA to understand how sensing choices shape system resilience.',
    venue: 'Applied Sciences, 15(13), 7493',
    year: '2025',
    tags: ['Autonomous vehicles', 'Cybersecurity', 'CARLA'],
    href: 'https://doi.org/10.3390/app15137493',
    linkLabel: 'Read the paper',
  },
  {
    type: 'Dataset paper',
    title: 'DVS-PedX: synthetic-and-real event-based pedestrian data',
    summary:
      'Built a combined synthetic and real event-camera dataset for pedestrian detection and tracking, connecting simulation with practical event-based perception.',
    venue: 'Scientific Data, 13, 614',
    year: '2026',
    tags: ['DVS', 'Datasets', 'Pedestrian detection'],
    href: 'https://doi.org/10.1038/s41597-026-06969-y',
    linkLabel: 'Read the paper',
  },
  {
    type: 'Dissertation research',
    title: 'Low-latency object detection for autonomous vehicles',
    summary:
      'Generated synthetic AEDAT data with v2e and assessed DVS/RGB quality through MSE, SSIM, polarity accuracy, and temporal precision.',
    venue: 'AGH University of Science and Technology',
    year: '2025',
    tags: ['Computer vision', 'Event cameras', 'Data quality'],
  },
]

export const experience: ExperienceItem[] = [
  {
    role: 'Machine Learning Research',
    organization: 'AGH University of Science and Technology',
    period: 'June 2024 — Present',
    location: 'Kraków, Poland',
    type: 'Intern',
    summary:
      'Researching perception for autonomous systems, with a focus on DVS and RGB data, synthetic datasets, and automated quality-assessment pipelines.',
    skills: ['Python', 'Machine Learning', 'Computer Vision', 'Quality Assessment'],
  },
  {
    role: 'Data Analyst',
    organization: 'Haine Food Production Co., Ltd',
    period: 'December 2023 — February 2025',
    location: 'Yangon, Myanmar',
    type: 'Full-time',
    summary:
      'Used SQL and Python to turn operational and supply-chain data into predictive analysis, decision-ready dashboards, and clearer business reporting.',
    skills: ['SQL', 'Python', 'Predictive Modeling', 'Dashboard Development'],
  },
  {
    role: 'Data Analyst',
    organization: 'Haine Food Production Co., Ltd',
    period: 'June 2023 — December 2023',
    location: 'Yangon, Myanmar',
    type: 'Intern',
    summary:
      'Cleaned, structured, and visualized inventory data to support more consistent reporting and day-to-day operational decisions.',
    skills: ['Excel', 'Python', 'Matplotlib', 'Inventory Management'],
  },
  {
    role: 'Admin Staff',
    organization: 'Oriental Apex Company Limited',
    period: 'March 2021 — July 2021',
    location: 'Yangon, Myanmar',
    type: 'On-the-job training',
    summary:
      'Supported administrative workflows and customer communication while developing a disciplined approach to organization and delivery.',
    skills: ['Communication', 'Time Management', 'Organization', 'Customer Service'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Low-Latency Object Detection in Autonomous Vehicles',
    category: 'Research',
    summary:
      'Evaluated synthetic event-camera data and conventional RGB data with image, polarity, and temporal quality metrics for low-latency perception.',
    technologies: ['Python', 'Computer Vision', 'Machine Learning', 'v2e'],
    featured: true,
  },
  {
    title: 'Database Project',
    category: 'Data systems',
    summary:
      'Built a PostgreSQL taxonomy manager with Python utilities for traversing hierarchies, renaming nodes, importing CSV data, and finding roots—improving query efficiency by 20%.',
    technologies: ['Python', 'PostgreSQL', 'Database Design'],
    href: 'https://github.com/aidankst/DBProject',
  },
  {
    title: 'Education Agency Management App',
    category: 'Workflow platform',
    summary:
      'Centralized client management, invoicing, email notifications, and information tracking in a Flask application, reducing administrative workload by 30%.',
    technologies: ['Python', 'Flask', 'PostgreSQL'],
    href: 'https://github.com/aidankst/Education_Agency_Management_App',
  },
  {
    title: 'School Management System',
    category: 'Education platform',
    summary:
      'Streamlined student, course, and payment management, reducing administrative errors by 15% and improving the user experience by 20%.',
    technologies: ['Flask', 'PostgreSQL', 'HTML5', 'CSS'],
    href: 'https://github.com/aidankst/School_Management_Web_App',
  },
  {
    title: 'QR Code Attendance System',
    category: 'Applied systems',
    summary:
      'Collaborated on secure QR attendance tracking with employee records, Firebase Realtime Database, SQL, and flexible cloud or web deployment.',
    technologies: ['Python', 'Flask', 'Firebase', 'SQL'],
    href: 'https://github.com/aidankst/qr_code_attendance_system',
  },
]

export const publications: PublicationItem[] = [
  {
    title: 'Cyberattack Resilience of Autonomous Vehicle Sensor Systems: Evaluating RGB vs. Dynamic Vision Sensors in CARLA',
    authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Maciej Wielgosz',
    venue: 'Applied Sciences, 15(13), 7493 · DOI 10.3390/app15137493',
    year: '2025',
    summary:
      'An evaluation of autonomous-vehicle sensor resilience under cyberattack, comparing RGB and DVS perception in CARLA.',
    tags: ['Autonomous Vehicles', 'Cybersecurity', 'Dynamic Vision Sensors'],
    href: 'https://doi.org/10.3390/app15137493',
    featured: true,
  },
  {
    title: 'DVS-PedX: Synthetic-and-Real Event-Based Pedestrian Dataset',
    authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Maciej Wielgosz',
    venue: 'Scientific Data, 13, 614 · DOI 10.1038/s41597-026-06969-y',
    year: '2026',
    summary:
      'A combined synthetic-and-real dataset for pedestrian detection and tracking with Dynamic Vision Sensors.',
    tags: ['Event-Based Vision', 'Dataset', 'Pedestrian Detection'],
    href: 'https://doi.org/10.1038/s41597-026-06969-y',
  },
  {
    title: 'InterFuserDVS: Event-Enhanced Sensor Fusion for Safe RL-Based Decision Making',
    authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Maciej Wielgosz',
    venue: 'arXiv preprint arXiv:2605.04355',
    year: '2026',
    summary:
      'A DVS-enhanced transformer that fuses event data with RGB and LiDAR for robust autonomous-driving decisions in CARLA.',
    tags: ['Autonomous Driving', 'Sensor Fusion', 'Transformers'],
    href: 'https://arxiv.org/abs/2605.04355',
  },
  {
    title: 'Evaluating Synthetic vs. Real Dynamic Vision Sensor Data for SNN-Based Object Classification',
    authors: 'Mustafa Sakhai, Kaung Sithu, Min Khant Soe Oke, Szymon Mazurek, Maciej Wielgosz',
    venue: 'KU KDM 2025 Conference · Proceedings, pp. 51–52',
    year: '2025',
    summary:
      'A comparison of synthetic and real DVS data with RGB imagery, focused on detection performance and latency.',
    tags: ['Dynamic Vision Sensors', 'Spiking Neural Networks', 'Low-Latency Perception'],
    href: 'https://events.plgrid.pl/event/70/attachments/143/364/PROCEEDINGS%202025_na%20www%20bez%20notatek.pdf',
  },
  {
    title: 'Microseconds Matter: Temporal and Perceptual Metrics for Synthetic Event Streams and Spiking Neural Networks',
    authors: 'Mustafa Sakhai, Min Khant Soe Oke, Kaung Sithu, Maciej Wielgosz',
    venue: 'Available at SSRN 6442903',
    year: '2026',
    summary:
      'A quality-verification framework for benchmarking the temporal precision and perceptual fidelity of synthetic event streams.',
    tags: ['Event-Stream Quality', 'Synthetic Data', 'Spiking Neural Networks'],
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6442903',
  },
]

export const credentials: CredentialItem[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    issued: 'April 2025',
    id: 'JS5MOS9SOV3D',
    href: 'https://www.coursera.org/account/accomplishments/verify/JS5MOS9SOV3D',
    tags: ['Data Analysis', 'SQL', 'Spreadsheets'],
    featured: true,
  },
  {
    title: 'Introduction to Software Engineering',
    issuer: 'IBM',
    issued: 'April 2025',
    id: 'ZFYVMCALGRSR',
    href: 'https://www.coursera.org/account/accomplishments/verify/ZFYVMCALGRSR',
    tags: ['Software Architecture', 'Agile', 'Programming'],
    featured: true,
  },
  {
    title: 'Exploratory Data Analysis for Machine Learning',
    issuer: 'IBM',
    issued: 'December 2024',
    id: 'KNYHNHNCTUQ4',
    href: 'https://www.coursera.org/account/accomplishments/verify/KNYHNHNCTUQ4',
    tags: ['Machine Learning', 'Feature Engineering', 'EDA'],
    featured: true,
  },
  {
    title: 'Introduction to Cyber Security',
    issuer: 'Cisco',
    issued: '16 February 2025',
    id: 'Credly verified',
    href: 'https://www.credly.com/badges/4aa8a6c5-4846-489b-8ffa-890b1fb4dfd1',
    tags: ['Cybersecurity', 'Network Vulnerabilities', 'Best Practices'],
    featured: true,
  },
  {
    title: 'Data Analysis with R Programming',
    issuer: 'Google',
    issued: 'April 2025',
    id: '8OJSFHYC6HHW',
    href: 'https://www.coursera.org/account/accomplishments/verify/8OJSFHYC6HHW',
    tags: ['R', 'R Markdown', 'Visualization'],
  },
  {
    title: 'Share Data Through the Art of Visualization',
    issuer: 'Google',
    issued: 'February 2025',
    id: '67JLUGMS70F8',
    href: 'https://www.coursera.org/account/accomplishments/verify/67JLUGMS70F8',
    tags: ['Tableau', 'Data Visualization'],
  },
  {
    title: 'Analyze Data to Answer Questions',
    issuer: 'Google',
    issued: 'February 2025',
    id: 'E71T9UJOR0T8',
    href: 'https://www.coursera.org/account/accomplishments/verify/E71T9UJOR0T8',
    tags: ['Data Aggregation', 'Spreadsheets'],
  },
  {
    title: 'Process Data from Dirty to Clean',
    issuer: 'Google',
    issued: 'January 2025',
    id: 'TMHFH9OBG1A7',
    href: 'https://www.coursera.org/account/accomplishments/verify/TMHFH9OBG1A7',
    tags: ['Data Cleaning', 'Data Quality'],
  },
  {
    title: 'Prepare Data for Exploration',
    issuer: 'Google',
    issued: 'January 2025',
    id: 'TJBBCL8WEPS9',
    href: 'https://www.coursera.org/account/accomplishments/verify/TJBBCL8WEPS9',
    tags: ['Decision-Making', 'Spreadsheets'],
  },
  {
    title: 'Ask Questions to Make Data-Driven Decisions',
    issuer: 'Google',
    issued: 'January 2025',
    id: 'TQOL78EMFEQ0',
    href: 'https://www.coursera.org/account/accomplishments/verify/TQOL78EMFEQ0',
    tags: ['Decision-Making', 'Data Analysis'],
  },
  {
    title: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google',
    issued: 'December 2024',
    id: '8MG2THRLCNHB',
    href: 'https://www.coursera.org/account/accomplishments/verify/8MG2THRLCNHB',
    tags: ['Spreadsheets', 'SQL', 'Data Analysis'],
  },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming & Technical',
    skills: [
      { name: 'Python', proficiency: 95, detail: 'NumPy, Pandas, TensorFlow, Scikit-learn' },
      { name: 'SQL', proficiency: 90, detail: 'PostgreSQL, query optimization' },
      { name: 'NoSQL', proficiency: 80, detail: 'Firebase, document databases' },
      { name: 'R', proficiency: 75, detail: 'Statistical analysis, data mining' },
      { name: 'Flask', proficiency: 85, detail: 'Web development, API design' },
      { name: 'Git', proficiency: 90, detail: 'Version control, collaboration' },
    ],
  },
  {
    title: 'Data Analysis & Visualization',
    skills: [
      { name: 'Data Cleaning', proficiency: 95, detail: 'ETL processes, data quality' },
      { name: 'Machine Learning', proficiency: 90, detail: 'Supervised and unsupervised learning' },
      { name: 'Tableau', proficiency: 80, detail: 'Interactive dashboards' },
      { name: 'Matplotlib', proficiency: 85, detail: 'Data visualization and plotting' },
      { name: 'Excel', proficiency: 90, detail: 'Advanced functions, pivot tables' },
      { name: 'BigQuery', proficiency: 75, detail: 'Large-scale data analysis' },
    ],
  },
  {
    title: 'Software Development & IT',
    skills: [
      { name: 'Web Development', proficiency: 85, detail: 'Full-stack applications' },
      { name: 'Database Design', proficiency: 90, detail: 'Schema design, optimization' },
      { name: 'Data Modeling', proficiency: 85, detail: 'Conceptual and logical models' },
      { name: 'Automation', proficiency: 80, detail: 'Workflow optimization' },
      { name: 'Jupyter Notebook', proficiency: 90, detail: 'Interactive development' },
      { name: 'Jira & Confluence', proficiency: 75, detail: 'Project management' },
    ],
  },
  {
    title: 'Research Problem-Solving',
    skills: [
      { name: 'System Optimization', proficiency: 85, detail: 'Performance improvement' },
      { name: 'Object Detection', proficiency: 80, detail: 'Computer vision, ML models' },
      { name: 'Low-Latency Solutions', proficiency: 75, detail: 'Real-time processing' },
      { name: 'Taxonomy Management', proficiency: 90, detail: 'Hierarchical data systems' },
      { name: 'Workflow Automation', proficiency: 85, detail: 'Process optimization' },
      { name: 'Quality Assessment', proficiency: 95, detail: 'Dataset validation and metrics' },
    ],
  },
  {
    title: 'Collaboration',
    skills: [
      { name: 'Problem Solving', proficiency: 95, detail: 'Analytical thinking' },
      { name: 'Decision Making', proficiency: 90, detail: 'Data-driven decisions' },
      { name: 'Collaboration', proficiency: 90, detail: 'Team leadership' },
      { name: 'Time Management', proficiency: 85, detail: 'Project delivery' },
      { name: 'Adaptability', proficiency: 90, detail: 'Learning agility' },
      { name: 'Communication', proficiency: 85, detail: 'Technical documentation' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Burmese', proficiency: 100, detail: 'Native speaker' },
      { name: 'English', proficiency: 95, detail: 'Fluent, professional' },
      { name: 'Polish', proficiency: 30, detail: 'Beginner, learning' },
      { name: 'Chinese', proficiency: 25, detail: 'Beginner, basic' },
    ],
  },
]

export const education: Education = {
  institution: 'AGH University of Science and Technology',
  degree: 'B.Sc. Computer Science',
  location: 'Kraków, Poland',
  period: '2021 — 2025',
  focus: 'Software engineering, data structures, and machine learning',
  gpa: '4.5/5.0',
  dissertationGrade: '5.0/5.0',
  dissertation: 'Low-Latency Object Detection in Autonomous Vehicles',
}
