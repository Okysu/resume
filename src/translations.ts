import { LanguageStrings } from './types';

export const translations: Record<string, LanguageStrings> = {
  en: {
    navItems: {
      experience: 'Experience',
      awards: 'Awards',
      projects: 'Projects',
      skills: 'Skills'
    },
    skillLevels: {
      advanced: 'Advanced',
      intermediate: 'Intermediate',
      beginner: 'Beginner'
    },
    highlights: 'Highlights:',
    certificateNumber: 'Certificate No:',
    viewSource: 'View Source',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode'
  },
  zh: {
    navItems: {
      experience: '学习经历',
      awards: '荣誉情况',
      projects: '开源项目',
      skills: '技能栈'
    },
    skillLevels: {
      advanced: '精通',
      intermediate: '熟练',
      beginner: '了解'
    },
    highlights: '活动亮点:',
    certificateNumber: '证书编号:',
    viewSource: '查看源码',
    darkMode: '暗色模式',
    lightMode: '亮色模式'
  }
};