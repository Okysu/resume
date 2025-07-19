// src/components/ResumeWebsite.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Award, Code, Github, Linkedin, Mail, Languages, Menu, X, Phone, School, Globe } from 'lucide-react';
import * as zhData from '../data';
import * as enData from '../data.en';
import { translations } from '../translations';
import '../App.css';

const useDynamicText = (tags: string[], typeSpeed = 150, deleteSpeed = 75, delay = 2000) => {
    const [tagIndex, setTagIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentTag = tags[tagIndex];
            const updatedText = isDeleting
                ? currentTag.substring(0, text.length - 1)
                : currentTag.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === currentTag) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setTagIndex((prevIndex) => (prevIndex + 1) % tags.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, tags, tagIndex, typeSpeed, deleteSpeed, delay]);

    return text;
};


interface ResumeProps {
  initialLanguage?: 'en' | 'zh';
}

const ResumeWebsite: React.FC<ResumeProps> = ({ initialLanguage = 'zh' }) => {
    const [language, setLanguage] = useState<'en' | 'zh'>(initialLanguage);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const getData = () => (language === 'zh' ? zhData : enData);
    const t = translations[language];
    const { basicInfo, experiences, awards, projects, skillCategories } = getData();
    
    // --- 使用动态文本Hook ---
    const bioTags = language === 'zh' 
        ? ["全栈开发者", "AI 应用开发者", "微软学生大使", "HarmonyOS 开发者"]
        : ["Full-Stack Developer", "AI Application Developer", "Microsoft Student Ambassador", "HarmonyOS Developer"];
    const dynamicBio = useDynamicText(bioTags);

    const sectionsRef = useRef<Map<string, HTMLElement | null>>(new Map());

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );
        
        sectionsRef.current.forEach((el) => {
          if(el) observer.observe(el);
        });
    
        return () => observer.disconnect();
    }, [language]);

    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setMobileMenuOpen(false);
    }
  
    const NavMenu = () => (
        <>
            <button onClick={() => scrollTo('experience')} className="nav-item">/experience</button>
            <button onClick={() => scrollTo('awards')} className="nav-item">/awards</button>
            <button onClick={() => scrollTo('projects')} className="nav-item">/projects</button>
            <button onClick={() => scrollTo('skills')} className="nav-item">/skills</button>
        </>
    );

    return (
        <div className="bg-black min-h-screen">
            <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
                <header className="flex justify-between items-center mb-16 fade-in-up is-visible">
                    <a href="/" className="text-2xl glitch">{basicInfo.englishName.toUpperCase()}</a>
                    <nav className="hidden md:flex items-center space-x-2 border border-slate-700 p-1">
                        <NavMenu />
                        <button onClick={() => setLanguage(lang => lang === 'zh' ? 'en' : 'zh')} className="p-1.5 text-slate-400 hover:bg-[#39FF14] hover:text-black transition-colors">
                            <Languages className="w-4 h-4" />
                        </button>
                    </nav>
                    <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-6 h-6 glitch"/> : <Menu className="w-6 h-6 glitch"/>}
                    </button>
                </header>
        
                {mobileMenuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black/90 z-40 flex items-center justify-center">
                        <nav className="flex flex-col items-center space-y-4 border border-slate-700 bg-black p-8">
                            <NavMenu />
                            <button onClick={() => setLanguage(lang => lang === 'zh' ? 'en' : 'zh')} className="nav-item">{language === 'zh' ? 'EN' : '中文'}</button>
                        </nav>
                    </div>
                )}

                <section className="mb-20 md:mb-24 fade-in-up" ref={el => sectionsRef.current.set('hero', el)}>
                    <div className="mb-4">
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-100 inline-block mr-3">{basicInfo.name}</h1>
                        <div className="dynamic-text-container">
                            <span className="text-2xl md:text-4xl text-[#39FF14] dynamic-text">{dynamicBio}</span>
                        </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: basicInfo.description }}/>
                    
                    <div className="terminal-card p-4 text-sm">
                        <p className="command-prompt mb-2">$ cat /etc/contact.info</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-400">
                            <p><School className="inline w-4 h-4 mr-2 text-slate-600"/>{basicInfo.school}</p>
                            <a href={`tel:${basicInfo.phone}`} className="hover-bright"><Phone className="inline w-4 h-4 mr-2 text-slate-600"/>{basicInfo.phone}</a>
                            <a href={`mailto:${basicInfo.email}`} className="hover-bright"><Mail className="inline w-4 h-4 mr-2 text-slate-600"/>{basicInfo.email}</a>
                            <a href={basicInfo.links.resume} target="_blank" rel="noopener noreferrer" className="hover-bright"><Globe className="inline w-4 h-4 mr-2 text-slate-600"/>{basicInfo.links.resume}</a>
                            <a href={basicInfo.links.github} target="_blank" rel="noopener noreferrer" className="hover-bright"><Github className="inline w-4 h-4 mr-2 text-slate-600"/>GitHub</a>
                            <a href={basicInfo.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover-bright"><Linkedin className="inline w-4 h-4 mr-2 text-slate-600"/>LinkedIn</a>
                        </div>
                    </div>
                </section>

                <section id="experience" className="mb-20 md:mb-24 fade-in-up" ref={el => sectionsRef.current.set('experience', el)}>
                    <h2 className="text-xl md:text-2xl mb-6 command-prompt">
                        $&nbsp;<span>./run --section </span><span className="section-title hover-bright">{t.navItems.experience}</span>
                    </h2>
                    {experiences.map(exp => (
                        <div key={exp.id} className="terminal-card p-4 md:p-6 mb-6">
                            <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-2">
                                <h3 className="text-lg text-slate-200 hover-bright cursor-pointer">{exp.title}</h3>
                                <p className="text-xs text-slate-500 flex-shrink-0 mt-1 sm:mt-0 sm:ml-4">{exp.period}</p>
                            </div>
                            <p className="text-sm text-[#39FF14] mb-4">{exp.role}</p>
                            <p className="text-sm text-slate-400 mb-4">{exp.description}</p>
                            {exp.highlights && exp.highlights.length > 0 && (
                                <div className="border-t border-slate-700 pt-4 mt-4">
                                    <p className="text-sm text-slate-200 mb-2">{t.highlights}</p>
                                    <div className="space-y-2 text-sm text-slate-400">
                                        {exp.highlights.map((highlight, index) => (
                                            <p key={index}><span className="text-slate-600 mr-2">[LOG]</span><span className="text-[#39FF14] mr-2">{highlight.date}:</span>{highlight.content}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </section>

                {/* 其他板块保持不变... */}
                <section id="awards" className="mb-20 md:mb-24 fade-in-up" ref={el => sectionsRef.current.set('awards', el)}>
                    <h2 className="text-xl md:text-2xl mb-6 command-prompt">$&nbsp;<span>./run --section </span><span className="section-title hover-bright">{t.navItems.awards}</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {awards.map(award => (
                            <div key={award.id} className="terminal-card p-4 flex flex-col">
                                <div className="flex justify-between items-start"><Award className="w-8 h-8 text-[#39FF14] mb-4" /><span className="text-slate-500">{award.year}</span></div>
                                <h3 className="text-base text-slate-200 flex-grow">{award.title}</h3>
                                <p className="text-sm text-slate-400 mt-2">{award.level}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="projects" className="mb-20 md:mb-24 fade-in-up" ref={el => sectionsRef.current.set('projects', el)}>
                    <h2 className="text-xl md:text-2xl mb-6 command-prompt">$&nbsp;<span>./run --section </span><span className="section-title hover-bright">{t.navItems.projects}</span></h2>
                    <div className="space-y-6">
                        {projects.map(project => (
                            <div key={project.id} className="terminal-card p-4 md:p-6">
                                <div className="flex justify-between items-center"><h3 className="text-lg text-slate-200 hover-bright cursor-pointer flex items-center"><Code className="w-5 h-5 mr-3 text-[#39FF14]"/>{project.title}</h3>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#39FF14]"><Github className="w-5 h-5"/></a>}</div>
                                <p className="text-sm text-slate-400 my-3">{project.description}</p>
                                <div>{project.techStack.split('/').map(tech => <span key={tech} className="tech-tag-terminal">{tech.trim()}</span>)}</div>
                            </div>
                        ))}
                    </div>
                </section>
                <section id="skills" className="mb-20 md:mb-24 fade-in-up" ref={el => sectionsRef.current.set('skills', el)}>
                    <h2 className="text-xl md:text-2xl mb-6 command-prompt">$&nbsp;<span>./list --skills --all</span></h2>
                    <div className="terminal-card p-4 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skillCategories.map(category => (
                            <div key={category.title}>
                                <h3 className="text-base text-slate-200 border-b border-slate-700 pb-2 mb-2">{category.title}</h3>
                                <ul className="space-y-1">{category.skills.map(skill => (<li key={skill.name} className="text-slate-400 hover-bright text-sm"><span className="text-[#39FF14] mr-2">&gt;</span>{skill.name}</li>))}</ul>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="text-center text-xs text-slate-600 pb-8">
                    <p><a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" className="hover:text-[#39FF14]">苏ICP备2025154522号</a></p>
                    <p className="mt-1">session ended at {new Date().toLocaleTimeString()}</p>
                </footer>
            </div>
        </div>
    );
};

export default ResumeWebsite;