import { BasicInfo, Experience, Award, Project, SkillCategory } from './types';

export const basicInfo: BasicInfo = {
  name: "于柏杨",
  englishName: "Bryce Young",
  location: "Taixing, Taizhou, Jiangsu Province",
  phone: "+86 18852920107",
  email: "yby@ecanse.com",
  description: "Software engineer with a broad technical vision in both frontend and backend development. Studied Vue.js source code in depth, pays attention to code details, and actively participates in open source community activities. A team-oriented developer with analytical skills and ownership mindset. Possesses exceptional learning abilities, <strong>taking only one week to learn Go and use it to develop an award-winning backend project.</strong> Developed projects using Python, Java, Golang, and other backend languages, and is proficient with MySQL, MongoDB, Redis, and other databases.",
  links: {
    resume: "https://www.yby.zone",
    blog: "https://blog.yby.zone",
    github: "https://github.com/Okysu",
    linkedin: "https://www.linkedin.com/in/okysu"
  },
  school: "Suzhou University of Technology, Software Engineering (Class of 2021)"
};

export const experiences: Experience[] = [
  {
    id: "msft-ambassador",
    title: "Gold Microsoft Learn Student Ambassador",
    role: "Microsoft Learn Student Ambassador",
    period: "2022 - Present",
    description: "Selected as a Microsoft Student Ambassador for Greater China in October 2022. Advanced to Beta milestone within a year by hosting an event on creating HTTP servers with TypeScript and accessing Azure OpenAI services. Promoted to Gold Ambassador in February 2024.",
    highlights: [
      {
        date: "2023/10/12",
        content: "Co-hosted a C# teaching livestream with Microsoft MVP Tongming Liang (author of 'ASP.NET Core in Depth'), responsible for 6 out of 7 modules."
      },
      {
        date: "2023/10/17",
        content: "Participated in a discussion panel with Greater China MVP Program Lead Di Liang and AI domain MVP experts on AI opportunities and impacts for startups."
      },
      {
        date: "2024/02/27",
        content: "Conducted a livestream tutorial on GPT-4 prompt engineering with Microsoft MVP/Suzhou Industrial Park Big Data Special Expert Hua Qiu."
      },
      {
        date: "2024/06/18",
        content: "Collaborated with Microsoft MVP/MCT Instructor Jiadong Chen on a livestream teaching no-code AI collaboration tool Microsoft Copilot Studio."
      },
      {
        date: "2024/08/27",
        content: "Partnered with Microsoft MVP/Microsoft Technical Community Regional Director Yiting Zhu to deliver a livestream tutorial on creating prompt flow applications in Azure AI Studio."
      },
      {
        date: "2024/10/15",
        content: "Led a multi-platform livestream tutorial on the principles and implementation of LangChain.js and RAG technology via Microsoft Reactor platform."
      }
    ]
  },
  {
    id: "lab-member",
    title: "University Lab Member",
    role: "Lead Developer",
    period: "2021 - Present",
    description: "Joined the Innovation Laboratory of the School of Computer Science in July 2021. Responsible for developing the University Student Innovation and Entrepreneurship Management System, which earned software copyright certification and was upgraded from a university-level project to a key provincial project in Jiangsu."
  }
];

export const awards: Award[] = [
  {
    id: "2022-comp-design",
    year: 2022,
    title: "15th China Collegiate Computing Competition AI Challenge",
    level: "Provincial Third Prize",
    certNumber: "2022-AI-00184",
    description: "Model training and hyperparameter tuning; Yolo, Python, OpenCV"
  },
  {
    id: "2023-software-copyright",
    year: 2023,
    title: "Computer Software Copyright Registration - Student Innovation Management System",
    level: "First Inventor",
    certNumber: "2023SR0376575",
    description: "Project lead; SpringBoot, Redis, MySQL, Mybatis-Plus"
  },
  {
    id: "2023-comp-design",
    year: 2023,
    title: '16th China Collegiate Computing Competition Management System Track',
    level: '"Six Arts" Campus Energy Conservation System - National Third Prize',
    certNumber: "JSJDS202300532023018646000360915327",
    description: "Team leader; MySQL, Redis, Vue.js, Golang, Flutter"
  },
  {
    id: "2024-software-copyright-1",
    year: 2024,
    title: "Computer Software Copyright Registration - Online Examination System",
    level: "First Inventor",
    certNumber: "2024SR0426812",
    description: "Project lead; Egg.js, Vue.js, Postgres, Redis"
  },
  {
    id: "2024-software-copyright-2",
    year: 2024,
    title: "Computer Software Copyright Registration - College Student Employment Analysis System",
    level: "Project Team Member",
    certNumber: "2024SR0600131",
    description: "Backend and AI; LLM, RAG, Python, MySQL"
  },
  {
    id: "2024-software-copyright-3",
    year: 2024,
    title: "Computer Software Copyright Registration - University Counselor Assessment System",
    level: "First Inventor",
    certNumber: "2024SR1857883",
    description: "Full-stack; Vue.js, Golang, MySQL, Redis"
  },
  {
    id: "2024-software-copyright-4",
    year: 2024,
    title: "Electronic Copyright Certification - Sea Music",
    level: "First Inventor and Copyright Owner",
    certNumber: "2024SA0125819",
    description: "Huawei Harmony OS Next; ArkTS, Node.js"
  }
];

export const projects: Project[] = [
  {
    "id": "seaside-js",
    "title": "SeaSideJS",
    "description": "Inspired by the book 'Design and Implementation of Vue.js', this is my learning repository attempting to recreate the core principles of Vue.js. Unlike Vue, this project doesn't use VNode but relies on simple DOM operations because I wasn't familiar with AST at the time.",
    "techStack": "JavaScript/TypeScript",
    "link": "https://github.com/Okysu/SeaSideJS"
  },
  {
    "id": "1y-language",
    "title": "1y-Language",
    "description": "My exploration of SeaSideJS sparked my interest in writing custom interpreters. After reading Thorsten Ball's 'Writing an Interpreter in Go', I wrote this custom interpreter in Go and added modern language features.",
    "techStack": "Golang",
    "link": "https://github.com/Okysu/1y-Language"
  },
  {
    "id": "natural-language-query-language",
    "title": "NLQL-Python",
    "description": "Query natural language like SQL—SELECT SENTENCE WHERE CONTAINS('example')! While reflecting on the challenges of using RAG in LLM application development, I realized retrieval is the most critical part. Inspired by SQL, I wondered if using SQL-like statements to query natural language could enable more flexible and precise information retrieval. Thanks to my foundational learning from SeaSideJS and 1y-Language, I was able to go from idea to implementation in just one evening.",
    "techStack": "Python",
    "link": "https://github.com/natural-language-query-language/nlql-python"
  },
  {
    "id": "chatgpt-web",
    "title": "Chat-GPT-Next-Web-Multi-Users",
    "description": "A deployable GPT web application with multi-user login support. As both the president of my university's computer association and a Microsoft Student Ambassador, I planned to use excess Azure Credit to help fellow students learn about AI. This project, based on Hk-Gosuto/ChatGPT-Next-Web-LangChain, adds features like credit tracking and history query to prevent overuse and budget overruns.",
    "techStack": "React/Next.js/LangChain",
    "link": "https://github.com/Okysu/Chat-GPT-Next-Web-Multi-Users"
  },
  {
    "id": "sea-music",
    "title": "Sea Music",
    "description": "A third-party NetEase Cloud Music client developed using Harmony OS Next API 12. It supports multiple login methods and core music features such as playlist management, song search, and personal FM. Additional features include timer shutdown, dark mode, and custom fonts. Developed in less than three days, it reached 500+ downloads on the first day and has a community of over 500 users. Users still sideload it, generating about 100GB of traffic monthly.",
    "techStack": "Harmony OS Next/ArkTS/Node.js",
    "link": "https://github.com/Okysu/harmony-next-music-sharing"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Vue.js", level: "advanced" },
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "advanced" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Python", level: "intermediate" },
      { name: "Golang", level: "intermediate" },
      { name: "Node", level: "advanced" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "Redis", level: "advanced" }
    ]
  }
];