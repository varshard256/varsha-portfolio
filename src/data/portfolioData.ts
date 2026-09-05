import {
  Project,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SkillGroup,
  ResearchItem,
} from '../types';

export const personalInfo = {
  name: 'Varsha R D',
  initials: 'VRD',
  primaryRole: 'Full Stack Developer | Software Developer',
  secondaryInterests: 'Data Science | Machine Learning | Cloud Computing',
  location: 'Bengaluru, Karnataka, India',
  phone: '+91-8497804622',
  email: 'varshard256@gmail.com',
  github: 'https://github.com/varshard256',
  linkedin: 'https://www.linkedin.com/in/varsha-r-d-5b8a71291',
  resumePath: '/Varsha_RD_Resume.pdf',
  badgeText: 'Open to Software Development Opportunities',
  heroTagline:
    'Full Stack Developer building scalable web applications and intelligent data-driven solutions.',
  heroDescription:
    'MCA graduate with hands-on experience in React.js, Node.js, Express.js, PostgreSQL, Python, Flask, Data Science and Machine Learning.',
  aboutDescription:
    'I am an MCA graduate and aspiring Software Developer with hands-on experience in Full Stack Development. I enjoy building responsive web applications, RESTful APIs, database-driven systems, and intelligent solutions using Data Science and Machine Learning.',
  interests: [
    'Full Stack Development',
    'Software Engineering',
    'Data Science',
    'Machine Learning',
    'Cloud Computing',
  ],
  personaCards: [
    {
      title: 'Developer',
      description: 'Architecting robust web applications, RESTful backends, and responsive user interfaces.',
      icon: 'Code',
    },
    {
      title: 'Problem Solver',
      description: 'Approaching computational challenges with structured algorithms, database design, and logic.',
      icon: 'Cpu',
    },
    {
      title: 'Data Enthusiast',
      description: 'Extracting actionable signals and training predictive models using Python and ML frameworks.',
      icon: 'Database',
    },
    {
      title: 'Continuous Learner',
      description: 'Constantly expanding practical knowledge across modern web standards and emerging cloud tech.',
      icon: 'GraduationCap',
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    iconName: 'Terminal',
    skills: ['Java', 'Python', 'C', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frontend',
    iconName: 'Layout',
    skills: ['React.js', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'Flask', 'PHP', 'Django REST Framework'],
  },
  {
    category: 'Databases',
    iconName: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Data Science & Machine Learning',
    iconName: 'Sparkles',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter Notebook'],
  },
  {
    category: 'Data Visualization',
    iconName: 'BarChart3',
    skills: ['Tableau', 'Power BI', 'Advanced Excel'],
  },
  {
    category: 'Tools & Concepts',
    iconName: 'Wrench',
    skills: ['Git', 'GitHub', 'REST APIs', 'JWT Authentication', 'XAMPP'],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer Intern',
    company: 'Web Digital Mantra IT Services',
    period: 'May 2026 – July 2026',
    responsibilities: [
      'Developed responsive web applications using React.js for frontend development and Node.js/Express.js for backend services.',
      'Built and optimized RESTful APIs for frontend-backend communication.',
      'Integrated PostgreSQL for database-driven application functionality.',
      'Implemented JWT authentication and role-based access control.',
      'Debugged and tested application features to improve reliability.',
      'Worked with Git and GitHub for version control.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JavaScript',
      'HTML',
      'CSS',
      'Git',
      'GitHub',
      'JWT',
    ],
    isCurrent: true,
  },
  {
    id: 'exp-2',
    role: 'Data Science Intern',
    company: 'Skyllx Technologies Pvt Ltd',
    period: 'January 2026 – May 2026',
    responsibilities: [
      'Completed a Data Science internship, applying data science concepts and Python-based tools in practical work.',
    ],
    technologies: ['Python', 'Data Science', 'Data Analysis'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-cloud-cost',
    title: 'Cloud Cost Optimization & Resource Prediction Dashboard',
    shortDescription:
      'Dashboard for monitoring cloud resources and analyzing cloud costs, with machine learning capabilities for predicting resource usage and supporting cost optimization.',
    fullDescription:
      'A comprehensive monitoring and predictive dashboard engineered to visualize computing infrastructure workloads, monitor expenditure trends, and forecast computing consumption using Machine Learning regression algorithms.',
    technologies: ['Python', 'Flask', 'SQLite', 'Machine Learning'],
    categories: ['Full Stack', 'Machine Learning', 'Data Science'],
    highlights: [
      'Cloud resource monitoring',
      'Cost analytics',
      'Resource prediction',
      'Flask backend',
      'Machine Learning',
      'Data visualization',
    ],
    githubUrl: 'https://github.com/varshard256',
    featured: true,
    features: [
      'Interactive resource metric visualizers for CPU, RAM, and storage utilization',
      'Expenditure pattern analysis with projected budget alerts',
      'Trained predictive ML models for prospective resource load forecasting',
      'RESTful lightweight Flask backend architecture backed by SQLite persistence',
    ],
    architectureNote:
      'Modular architecture combining Python data science libraries for predictive compute modelling with Flask microservice endpoints supplying telemetry telemetry feeds to the client interface.',
  },
  {
    id: 'proj-job-portal',
    title: 'Web Digital Job Portal',
    shortDescription:
      'Full-stack job portal designed for recruiters and candidates, providing role-based functionality, job management, candidate interaction, and database-driven workflows.',
    fullDescription:
      'A robust enterprise recruitment application providing secure separation between employer and applicant workflows, enabling posting management, application review, and relational profile storage.',
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js'],
    categories: ['Full Stack'],
    highlights: [
      'React frontend',
      'Node.js backend',
      'REST APIs',
      'PostgreSQL',
      'Role-based functionality',
    ],
    githubUrl: 'https://github.com/varshard256',
    features: [
      'Dual-role authentication and role-based access control (Candidates & Recruiters)',
      'Job listing creation, editing, status tracking, and candidate discovery pipeline',
      'Optimized relational PostgreSQL schema for resumes, listings, and application history',
      'High-performance REST API services built with Node.js and Express.js',
    ],
    architectureNote:
      'Client-server model pairing React responsive UI with Node.js/Express API layer connecting to a normalized PostgreSQL database.',
  },
  {
    id: 'proj-fraud-detection',
    title: 'Credit Card Fraud Detection Using Unsupervised Machine Learning',
    shortDescription:
      'Unsupervised machine learning project focused on identifying anomalous credit-card transactions without relying on labeled fraud data.',
    fullDescription:
      'A specialized cybersecurity and financial intelligence framework engineered to detect suspicious credit card transaction outliers using unsupervised anomaly detection techniques.',
    technologies: ['Python', 'MATLAB GUI'],
    categories: ['Machine Learning', 'Data Science', 'Security'],
    highlights: [
      'Anomaly detection',
      'Unsupervised Machine Learning',
      'Python',
      'Fraud pattern identification',
    ],
    githubUrl: 'https://github.com/varshard256',
    features: [
      'Clustering and distance-based outlier scoring for unlabeled high-dimensional datasets',
      'Feature normalization and variance scaling for transaction distributions',
      'Interactive MATLAB GUI interface for data ingestion, visualization, and anomaly flagging',
      'Python data processing pipelines for feature engineering and statistical modeling',
    ],
    architectureNote:
      'Analytical pipeline executing statistical outlier scoring on skewed financial datasets paired with visualization tooling.',
  },
  {
    id: 'proj-facebook-malicious',
    title: 'Detecting Malicious Facebook Applications',
    shortDescription:
      'Java-based system designed to identify potentially malicious Facebook applications by analyzing permissions and suspicious data-access behavior.',
    fullDescription:
      'An application security analysis framework developed in Java that evaluates third-party social application requests, flag anomalous permission grants, and safeguards privacy profiles.',
    technologies: ['Java', 'MySQL'],
    categories: ['Security', 'Full Stack'],
    highlights: ['Java', 'MySQL', 'Security analysis', 'Permission analysis'],
    githubUrl: 'https://github.com/varshard256',
    features: [
      'Permission profile parser analyzing requested authorization scopes against security baselines',
      'Relational tracking of app identity, privacy metadata, and risk ratings via MySQL',
      'Rule-based heuristic engine assessing data-access patterns for privacy risk flags',
      'Structured reporting interface detailing potentially intrusive software behavior',
    ],
    architectureNote:
      'Object-oriented Java backend logic coupled with structured relational storage in MySQL for app metadata and risk evaluations.',
  },
  {
    id: 'proj-tourism-management',
    title: 'Tourism Management System',
    shortDescription:
      'Web-based tourism management application supporting travel bookings and accommodation-related management through a centralized database-driven system.',
    fullDescription:
      'A full-featured tourism portal facilitating travel booking management, holiday package cataloging, customer reservations, and administrative accommodation control.',
    technologies: ['PHP', 'MySQL'],
    categories: ['Full Stack'],
    highlights: ['PHP', 'MySQL', 'Centralized database', 'Booking workflows'],
    githubUrl: 'https://github.com/varshard256',
    features: [
      'Interactive package catalog with detailed itineraries and pricing breakdowns',
      'Relational customer booking and accommodation reservation management system',
      'Centralized MySQL database ensuring transactional booking records and user profiles',
      'Administrative back-office panel to manage destinations, slots, and inquiries',
    ],
    architectureNote:
      'Database-driven PHP application interfacing with centralized MySQL tables for transactional integrity.',
  },
];

export const researchData: ResearchItem[] = [
  {
    id: 'research-1',
    title:
      'Neuro Cloud: An AI-Driven Framework for Intelligent Anomaly Detection and Performance Monitoring in a Cloud Environment',
    type: 'Research Publication / Framework',
    description:
      'A scholarly research framework investigating AI-driven telemetry analysis, intelligent anomaly detection algorithms, and automated performance tracking across cloud computing infrastructures.',
    tags: ['Cloud Computing', 'Anomaly Detection', 'AI Framework', 'Performance Monitoring'],
  },
];

export const educationData: EducationItem[] = [
  {
    id: 'edu-mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Surana College Autonomous, Bengaluru',
    period: '2024 – 2026',
    cgpa: '8.5',
    details: 'Advanced computer applications curriculum with focus on software engineering, web architectures, algorithms, and applied data systems.',
  },
  {
    id: 'edu-bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Government First Grade College, Bengaluru',
    period: '2020 – 2023',
    cgpa: '8.75',
    details: 'Graduated with Distinction (CGPA: 8.75). Rigorous foundations in computer science, database management, software development, and programming languages.',
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'AWS Data Engineering Virtual Internship',
    issuer: 'AWS',
    type: 'virtual_internship',
  },
  {
    id: 'cert-2',
    title: 'AICTE Android Developer Virtual Internship',
    issuer: 'AICTE',
    type: 'virtual_internship',
  },
  {
    id: 'cert-3',
    title: 'AICTE AI-ML Virtual Internship',
    issuer: 'AICTE',
    type: 'virtual_internship',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];
