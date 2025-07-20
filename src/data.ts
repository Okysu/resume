import { BasicInfo, Experience, Award, Project, SkillCategory } from './types';

export const basicInfo: BasicInfo = {
  name: "于柏杨",
  englishName: "Bryce Young",
  location: "江苏省, 泰州市",
  phone: "+86 18852920107",
  email: "yby@ecanse.com",
  description: "一名对技术充满热忱的全栈开发者与AI应用探索者，具备广阔的技术视野和扎实的工程实践能力。<strong>对Vue.js响应式原理有深入研究，并具备从零到一构建复杂系统的能力。</strong> 拥有在较短时间内掌握并应用Go语言完成获奖项目的快速学习与实践能力。技术栈涵盖Python、Golang及Node.js，并精通MySQL、Redis等数据库技术。",
  bioTags: ["全栈开发者", "AI 应用开发者", "微软学生大使", "鸿蒙开发者"],
  links: {
    resume: "https://www.yby.zone",
    blog: "https://blog.yby.zone",
    github: "https://github.com/Okysu",
    linkedin: "https://www.linkedin.com/in/okysu"
  },
  school:"苏州工学院 软件工程 21级"
};

export const experiences: Experience[] = [
  {
    id: "msft-ambassador",
    title: "金牌微软学生大使 (Gold Microsoft Learn Student Ambassador)",
    role: "技术布道者 & 活动组织者",
    period: "2022年10月 - 至今",
    description: "于2022年10月当选，因组织了关于TypeScript与Azure OpenAI服务的技术工坊而晋升至Beta里程碑。凭借持续的技术贡献和社区影响力，于2024年2月荣升为金牌大使。",
    highlights: [
      {
        date: "2023/10",
        content: "与《深入浅出 ASP.NET Core》作者、微软MVP梁桐铭合作，主导C#系列直播课程中6/7的模块教学。"
      },
      {
        date: "2023/10",
        content: "受邀参加由微软大中华区MVP项目负责人主持的圆桌论坛，与多位AI领域MVP共同探讨AI技术对初创企业的影响与机遇。"
      },
      {
        date: "2024/02",
        content: "与微软MVP、苏州工业园区大数据特聘专家仇华联合主讲GPT-4提示工程技术直播。"
      },
      {
        date: "2024/06",
        content: "与微软MVP/MCT讲师Jiadong Chen合作，进行Microsoft Copilot Studio无代码AI协作工具的在线教学。"
      },
      {
        date: "2024/08",
        content: "与微软MVP/微软技术社区区域总监朱一婷合作，直播教学Azure AI Studio中提示流应用的构建与实践。"
      },
      {
        date: "2024/10",
        content: "独立策划并主讲，通过微软官方平台Microsoft Reactor向全球多平台直播分享LangChain.js及RAG技术的原理与实现。"
      }
    ]
  },
  {
    id: "lab-member",
    title: "校级创新实验室",
    role: "核心开发者 & 项目负责人",
    period: "2021年7月 - 至今",
    description: "自2021年起，作为核心成员加入计算机学院创新实验室，主导“大学生创新创业管理系统”的研发。该项目不仅成功申请软件著作权，并由校级项目成功孵化为省级重点项目。"
  }
];

export const awards: Award[] = [
  {
    id: "2023-comp-design",
    year: 2023,
    title: '中国大学生计算机设计大赛 (国家级三等奖)',
    level: '管理信息系统赛道',
    certNumber: "JSJDS2023...",
    description: "作为团队负责人，主导“六艺”校园节能控制系统的全栈开发，技术栈涵盖Golang, Vue.js及Flutter。"
  },
  {
    id: "2022-comp-design",
    year: 2022,
    title: "中国大学生计算机设计大赛 (省级三等奖)",
    level: "人工智能挑战赛",
    certNumber: "2022-AI-00184",
    description: "负责核心算法实现，利用Python、OpenCV及YOLO进行模型训练与超参数调优。"
  },
  {
    id: "2024-software-copyright-4",
    year: 2024,
    title: "电子版权认证 - 云享社 (独立开发者)",
    level: "第一著作权人",
    certNumber: "2024SA0125819",
    description: "基于Harmony OS Next独立开发的音乐客户端，展现了快速产品化和社区运营能力。"
  },
  {
    id: "2023-software-copyright",
    year: 2023,
    title: "软件著作权 - 大学生双创管理系统",
    level: "第一发明人",
    certNumber: "2023SR0376575",
    description: "负责项目整体架构与后端开发，采用SpringBoot, Redis, MySQL等技术。"
  },
  {
    id: "2024-software-copyright-1",
    year: 2024,
    title: "软件著作权 - 在线考试系统",
    level: "第一发明人",
    certNumber: "2024SR0426812",
    description: "主导项目开发，技术选型为Egg.js, Vue.js, PostgreSQL, Redis。"
  },
  {
    id: "2024-software-copyright-3",
    year: 2024,
    title: "软件著作权 - 高校辅导员考核系统",
    level: "第一发明人",
    certNumber: "2024SR1857883",
    description: "负责前后端整体开发，技术栈包括Vue.js, Golang, MySQL, Redis。"
  },
];

export const projects: Project[] = [
  {
    "id": "natural-language-query-language",
    "title": "NLQL-Python: 自然语言查询语言",
    "description": "为解决LLM应用中RAG检索精度不足的痛点，创新性地设计并实现了一套类SQL的自然语言查询引擎。此项目展现了从理论到实践的快速转化能力，以及对语言解析和信息检索领域的深刻理解。",
    "techStack": "Python/AST/Language Parsing",
    "link": "https://github.com/natural-language-query-language/nlql-python"
  },
  {
    "id": "sea-music",
    "title": "云享社: Harmony OS Next 音乐客户端",
    "description": "在三天内独立完成开发的第三方音乐客户端，首日下载量即突破500，并建立了超500人的社群。项目至今仍保持活跃，月均数据流量约100GB，验证了个人的快速开发、产品交付和社区运营能力。",
    "techStack": "Harmony OS Next/ArkTS/Node.js",
    "link": "https://github.com/Okysu/harmony-next-music-sharing"
  },
  {
    "id": "1y-language",
    "title": "1y-Language: 自定义编程语言解释器",
    "description": "在《Writing an Interpreter in Go》的启发下，独立设计并实现了一款包含现代语言特性的解释器。此项目证明了在编译原理、词法与语法分析等计算机科学基础领域的扎实功底。",
    "techStack": "Golang/Interpreter/Compilers",
    "link": "https://github.com/Okysu/1y-Language"
  },
  {
    "id": "seaside-js",
    "title": "SeaSideJS: Vue.js核心原理复现",
    "description": "受《Vue.js的设计与实现》启发，对Vue的核心思想进行探索和复刻的学习型项目。该项目深入研究了前端框架的响应式设计与DOM操作原理，展现了对框架底层实现的探索精神。",
    "techStack": "JavaScript/TypeScript/Frontend-Frameworks",
    "link": "https://github.com/Okysu/SeaSideJS"
  },
  {
    "id": "chatgpt-web",
    "title": "多用户版ChatGPT-Next-Web",
    "description": "对现有开源项目进行二次开发，增加了多用户管理、计费与历史查询功能，以支持在社群内共享Azure AI资源。该项目体现了对现有代码的理解、扩展及在实际场景中部署应用的能力。",
    "techStack": "React/Next.js/LangChain",
    "link": "https://github.com/Okysu/Chat-GPT-Next-Web-Multi-Users"
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: "前端技术",
    skills: [
      { name: "Vue.js / React", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "Harmony OS Next", level: "intermediate" }
    ]
  },
  {
    title: "后端技术",
    skills: [
      { name: "Golang", level: "advanced" },
      { name: "Node.js / Python", level: "advanced" },
      { name: "Java / SpringBoot", level: "intermediate" }
    ]
  },
  {
    title: "数据库与中间件",
    skills: [
      { name: "MySQL / PostgreSQL", level: "advanced" },
      { name: "Redis", level: "advanced" },
      { name: "MongoDB", level: "intermediate" }
    ]
  }
];