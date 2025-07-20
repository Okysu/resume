import { BasicInfo, Experience, Award, Project, SkillCategory } from './types';

export const basicInfo: BasicInfo = {
  name: "Bryce Young",
  englishName: "Bryce Young",
  location: "Taizhou, Jiangsu, China",
  phone: "+86 18852920107",
  email: "yby@ecanse.com",
  description: "A passionate Full-Stack Developer and AI Application Explorer with a broad technical vision and solid engineering practices. <strong>Possesses a deep understanding of Vue.js reactivity principles and the ability to build complex systems from scratch.</strong> Demonstrates rapid learning and application capabilities, mastering Go to develop an award-winning project in a short timeframe. Proficient in a tech stack including Python, Golang, and Node.js, with expertise in databases like MySQL and Redis.",
  bioTags: ["Full-Stack Developer", "AI Application Developer", "Microsoft Student Ambassador", "HarmonyOS Developer"],
  links: {
    resume: "https://www.yby.zone",
    blog: "https://blog.yby.zone",
    github: "https://github.com/Okysu",
    linkedin: "https://www.linkedin.com/in/okysu"
  },
  school: "Suzhou Institute of Technology, Software Engineering, Class of 2021"
};

export const experiences: Experience[] = [
  {
    id: "msft-ambassador",
    title: "Gold Microsoft Learn Student Ambassador",
    role: "Technical Evangelist & Community Organizer",
    period: "Oct 2022 - Present",
    description: "Selected in October 2022, advanced to the Beta milestone by organizing a technical workshop on TypeScript and Azure OpenAI services. Promoted to Gold Ambassador in February 2024 for continuous technical contributions and community influence.",
    highlights: [
      {
        date: "Oct 2023",
        content: "Collaborated with Microsoft MVP Liang Tongming, author of 'ASP.NET Core in Depth', leading 6 of 7 modules in a C# livestream series."
      },
      {
        date: "Oct 2023",
        content: "Invited to a roundtable forum hosted by the Greater China MVP Program Lead, discussing the impact of AI on startups with several AI-focused MVPs."
      },
      {
        date: "Feb 2024",
        content: "Co-hosted a technical livestream on GPT-4 Prompt Engineering with Microsoft MVP and Suzhou Industrial Park Big Data Expert, Qiu Hua."
      },
      {
        date: "Jun 2024",
        content: "Partnered with Microsoft MVP/MCT Instructor Jiadong Chen to deliver an online tutorial on Microsoft Copilot Studio, a no-code AI tool."
      },
      {
        date: "Aug 2024",
        content: "Worked with Microsoft MVP/Regional Director Zhu Yiting to broadcast a tutorial on building Prompt Flow applications in Azure AI Studio."
      },
      {
        date: "Oct 2024",
        content: "Independently planned and presented a multi-platform livestream via the official Microsoft Reactor, sharing the principles and implementation of LangChain.js and RAG."
      }
    ]
  },
  {
    id: "lab-member",
    title: "University Innovation Lab",
    role: "Core Developer & Project Lead",
    period: "Jul 2021 - Present",
    description: "Joined the computer science innovation lab as a core member, leading the development of the 'Student Innovation and Entrepreneurship Management System.' The project secured a software copyright and was successfully promoted from a university-level initiative to a provincial key project."
  }
];

export const awards: Award[] = [
    {
    id: "2023-comp-design",
    year: 2023,
    title: 'China Collegiate Computing Competition (National 3rd Prize)',
    level: 'Management Information Systems Track',
    certNumber: "JSJDS2023...",
    description: "As team lead, spearheaded the full-stack development of the 'Six Arts' campus energy-saving system using Golang, Vue.js, and Flutter."
  },
  {
    id: "2022-comp-design",
    year: 2022,
    title: "China Collegiate Computing Competition (Provincial 3rd Prize)",
    level: "Artificial Intelligence Challenge",
    certNumber: "2022-AI-00184",
    description: "Responsible for core algorithm implementation, utilizing Python, OpenCV, and YOLO for model training and hyperparameter tuning."
  },
  {
    id: "2024-software-copyright-4",
    year: 2024,
    title: "Electronic Copyright - Sea Music (Independent Developer)",
    level: "First Copyright Holder",
    certNumber: "2024SA0125819",
    description: "An independently developed music client for Harmony OS Next, demonstrating rapid productization and community management skills."
  },
  {
    id: "2023-software-copyright",
    year: 2023,
    title: "Software Copyright - Student Innovation Mgmt System",
    level: "First Inventor",
    certNumber: "2023SR0376575",
    description: "Led the project's architecture and backend development using SpringBoot, Redis, and MySQL."
  },
  {
    id: "2024-software-copyright-1",
    year: 2024,
    title: "Software Copyright - Online Examination System",
    level: "First Inventor",
    certNumber: "2024SR0426812",
    description: "Headed the development with a tech stack of Egg.js, Vue.js, PostgreSQL, and Redis."
  },
  {
    id: "2024-software-copyright-3",
    year: 2024,
    title: "Software Copyright - University Counselor Assessment System",
    level: "First Inventor",
    certNumber: "2024SR1857883",
    description: "Handled full-stack development using Vue.js, Golang, MySQL, and Redis."
  },
];


export const projects: Project[] = [
  {
    "id": "natural-language-query-language",
    "title": "NLQL-Python: A Natural Language Query Language",
    "description": "To address the precision limitations of RAG retrieval in LLM applications, I designed and implemented an innovative SQL-like query engine for natural language. This project showcases a rapid idea-to-implementation capability and a deep understanding of language parsing and information retrieval.",
    "techStack": "Python/AST/Language Parsing",
    "link": "https://github.com/natural-language-query-language/nlql-python"
  },
  {
    "id": "sea-music",
    "title": "Sea Music: A Harmony OS Next Music Client",
    "description": "Independently developed a third-party music client in under three days, achieving over 500 downloads on the first day and building a community of 500+ users. The project remains active, generating ~100GB of monthly traffic, validating my skills in rapid development, product delivery, and community management.",
    "techStack": "Harmony OS Next/ArkTS/Node.js",
    "link": "https://github.com/Okysu/harmony-next-music-sharing"
  },
  {
    "id": "1y-language",
    "title": "1y-Language: A Custom Programming Language Interpreter",
    "description": "Inspired by 'Writing an Interpreter in Go,' I independently designed and implemented an interpreter with modern language features. This project demonstrates a solid foundation in computer science fundamentals like compiler theory, lexical analysis, and parsing.",
    "techStack": "Golang/Interpreter/Compilers",
    "link": "https://github.com/Okysu/1y-Language"
  },
    {
    "id": "seaside-js",
    "title": "SeaSideJS: A Recreation of Vue.js Core Principles",
    "description": "A learning project inspired by 'The Design and Implementation of Vue.js' to explore and replicate its core ideas. This project involved in-depth research into frontend framework reactivity and DOM manipulation principles, showcasing a spirit of exploration for underlying framework mechanics.",
    "techStack": "JavaScript/TypeScript/Frontend-Frameworks",
    "link": "https://github.com/Okysu/SeaSideJS"
  },
  {
    "id": "chatgpt-web",
    "title": "Multi-User ChatGPT-Next-Web",
    "description": "Enhanced an existing open-source project by adding multi-user management, credit tracking, and history query features to facilitate shared access to Azure AI resources within a community. This project highlights my ability to understand, extend, and deploy existing codebases for practical applications.",
    "techStack": "React/Next.js/LangChain",
    "link": "https://github.com/Okysu/Chat-GPT-Next-Web-Multi-Users"
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Technologies",
    skills: [
      { name: "Vue.js / React", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Harmony OS Next", level: "intermediate" }
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Golang", level: "advanced" },
      { name: "Node.js / Python", level: "advanced" },
      { name: "Java / SpringBoot", level: "intermediate" }
    ]
  },
  {
    title: "Databases & Middleware",
    skills: [
      { name: "MySQL / PostgreSQL", level: "advanced" },
      { name: "Redis", level: "advanced" },
      { name: "MongoDB", level: "intermediate" }
    ]
  }
];