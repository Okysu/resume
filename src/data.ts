import { BasicInfo, Experience, Award, Project, SkillCategory } from './types';

export const basicInfo: BasicInfo = {
  name: "于柏杨",
  englishName: "Bryce Young",
  location: "泰兴市, 泰州市, 江苏省",
  phone: "+86 18852920107",
  email: "yby@ecanse.com",
  description: "具备广阔的前后端技术视野，深入研究过Vue.js代码，注重代码细节，积极参与开源社区活动。具有前后端专业开发知识的组织型、分析型开发人员，具有主人翁意识的团队协作组织者。拥有极强的学习能力，<strong>在学习Go到使用Go编写后端参赛获奖只花1周时间。</strong>使用Python、Java、Golang等后端语言开发过项目，熟练运用MySQL、MongoDB、Redis等数据库。",
  links: {
    resume: "https://www.yby.zone",
    blog: "https://blog.yby.zone",
    github: "https://github.com/Okysu",
    linkedin: "https://www.linkedin.com/in/okysu"
  },
  school:"苏州工学院 软件工程21级"
};

export const experiences: Experience[] = [
  {
    id: "msft-ambassador",
    title: "金牌微软学生大使",
    role: "Microsoft Learn Student Ambassador",
    period: "2022年至今",
    description: "在2022年10月成功当选大中华区微软学生大使之一，在一年内通过举办使用Typescript创建HTTP服务器并访问Azure OpenAI服务这一活动晋升为Beta里程碑，在2024年2月晋升为Gold金牌大使。",
    highlights: [
      {
        date: "2023/10/12",
        content: "与微软MVP老师(梁桐铭，《深入浅出 ASP.NET Core》作者)一起直播教学C#，负责7个模块中的6个模块。"
      },
      {
        date: "2023/10/17",
        content: "与微软大中华区MVP项目负责人梁迪老师与众多AI领域的MVP专家老师们共同参会讨论人工智能对初创企业带来的机遇和影响。"
      },
      {
        date: "2024/02/27",
        content: "与微软最有价值专家/苏州工业园区大数据特聘专家仇华老师进行直播教学GPT4提示工程。"
      },
      {
        date: "2024/06/18",
        content: "与微软最有价值专家/微软MCT讲师Jiadong Chen老师合作直播教学无代码AI协作工具Microsoft Copilot Studio。"
      },
      {
        date: "2024/08/27",
        content: "与微软最有价值专家/微软技术社区区域总监朱一婷老师合作直播教学Azure AI Studio的提示流应用的创建。"
      },
      {
        date: "2024/10/15",
        content: "借助微软Reactor平台，以我为主的直播教学活动！向多个平台直播教学LangChain.js和RAG技术的原理和使用。"
      }
    ]
  },
  {
    id: "lab-member",
    title: "学校实验室成员",
    role: "主要负责人",
    period: "2021年至今",
    description: "在2021年7月加入学校计算机学院的创新实验室，并负责大学生双创管理系统的开发，获得软件著作权证书，并从校级项目核审升级为江苏省重点项目。"
  }
];

export const awards: Award[] = [
  {
    id: "2022-comp-design",
    year: 2022,
    title: "第十五届中国大学生计算机设计大赛人工智能挑战赛",
    level: "省级 三等奖",
    certNumber: "2022-AI-00184",
    description: "模型训练和超参数调整；Yolo、Python、OpenCV"
  },
  {
    id: "2023-software-copyright",
    year: 2023,
    title: "计算机软件著作权登记证书-大学生双创管理系统",
    level: "第一发明人",
    certNumber: "2023SR0376575",
    description: "项目主负责人；SpringBoot、Redis、MySQL、Mybatis-Plus"
  },
  {
    id: "2023-comp-design",
    year: 2023,
    title: '第十六届中国大学生计算机设计大赛 管理系统赛道',
    level: '"六艺"校园节能控制系统 国家级 三等奖',
    certNumber: "JSJDS202300532023018646000360915327",
    description: "带队队长；MySQL、Redis、Vue.js、Golang、Flutter"
  },
  {
    id: "2024-software-copyright-1",
    year: 2024,
    title: "计算机软件著作权登记证书-在线考试系统",
    level: "第一发明人",
    certNumber: "2024SR0426812",
    description: "项目主负责人；Egg.js、Vue.js、Postgres、Redis"
  },
  {
    id: "2024-software-copyright-2",
    year: 2024,
    title: "计算机软件著作权登记证书-大学生就业智能分析系统",
    level: "项目组成员",
    certNumber: "2024SR0600131",
    description: "后端及人工智能；LLM、RAG、Python、MySQL"
  },
  {
    id: "2024-software-copyright-3",
    year: 2024,
    title: "计算机软件著作权登记证书-高校辅导员考核系统",
    level: "第一发明人",
    certNumber: "2024SR1857883",
    description: "前后端；Vue.js、Golanfg、MySQL、Redis"
  },
  {
    id: "2024-software-copyright-4",
    year: 2024,
    title: "电子版权认证证书-云享社",
    level: "第一发明人及著作权人",
    certNumber: "2024SA0125819",
    description: "华为Harmony OS Next; ArkTS, Node.js"
  }
];

export const projects: Project[] = [
  {
    "id": "seaside-js",
    "title": "SeaSideJS",
    "description": "受《Vue.js的设计与实现》一书启发，这是我尝试复现Vue.js核心原理的学习仓库。与Vue不同的是，该项目没有使用VNode，而是简单地依赖DOM操作，主要因为当时我还不熟悉AST。",
    "techStack": "JavaScript/TypeScript",
    "link": "https://github.com/Okysu/SeaSideJS"
  },
  {
    "id": "1y-language",
    "title": "1y-Language",
    "description": "SeaSideJS的探索激发了我对编写自定义解释器的兴趣。阅读了Thorsten Ball的《用Go语言自制解释器》后，我用Go语言编写了这个自定义解释器，并添加了现代语言特性。",
    "techStack": "Golang",
    "link": "https://github.com/Okysu/1y-Language"
  },
  {
    "id": "natural-language-query-language",
    "title": "NLQL-Python",
    "description": "像使用SQL一样查询自然语言——SELECT SENTENCE WHERE CONTAINS('example')！在反思LLM应用开发中使用RAG的挑战时，我意识到检索是最关键的部分。受到SQL的启发，我想如果能用类似SQL的语句来查询自然语言，是否可以实现更灵活和精准的信息检索？感谢SeaSideJS和1y-Language的学习基础，让我从想法到实现仅用了一个晚上。",
    "techStack": "Python",
    "link": "https://github.com/natural-language-query-language/nlql-python"
  },
  {
    "id": "chatgpt-web",
    "title": "Chat-GPT-Next-Web-Multi-Users",
    "description": "一个支持私有化部署的GPT网页应用，支持多用户登录。作为学校计算机协会会长和微软学生大使，我计划利用多余的Azure Credit供同学们学习AI。该项目基于Hk-Gosuto/ChatGPT-Next-Web-LangChain，添加了积分和历史记录查询等功能，以防止滥用导致预算超支。",
    "techStack": "React/Next.js/LangChain",
    "link": "https://github.com/Okysu/Chat-GPT-Next-Web-Multi-Users"
  },
  {
    "id": "sea-music",
    "title": "云享社",
    "description": "这是一个基于Harmony OS Next API 12版本开发的网易云音乐第三方客户端，支持多种登录方式和核心音乐功能，如歌单管理、歌曲搜索和私人FM。额外功能包括定时关闭、深色模式和自定义字体。开发周期不到三天，第一天下载量超过500，社群人数超过500。至今仍有用户通过侧载方式安装，每月大约100GB流量。",
    "techStack": "Harmony OS Next/ArkTS/Node.js",
    "link": "https://github.com/Okysu/harmony-next-music-sharing"
  }
]


export const skillCategories: SkillCategory[] = [
  {
    title: "前端开发",
    skills: [
      { name: "Vue.js", level: "advanced" },
      { name: "React", level: "intermediate" },
      { name: "TypeScript", level: "advanced" }
    ]
  },
  {
    title: "后端开发",
    skills: [
      { name: "Python", level: "intermediate" },
      { name: "Golang", level: "intermediate" },
      { name: "Node", level: "advanced" }
    ]
  },
  {
    title: "数据库",
    skills: [
      { name: "MySQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
      { name: "Redis", level: "advanced" }
    ]
  }
];