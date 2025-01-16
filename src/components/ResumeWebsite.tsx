import React, { useState, useEffect } from 'react';
import { Award, Book, Briefcase, Code, Github, Linkedin, Mail, MapPin, Phone, Moon, Sun, Globe } from 'lucide-react';
import type { BasicInfo, Experience, Award as AwardType, Project, SkillCategory } from '../types';

interface ResumeProps {
  basicInfo: BasicInfo;
  experiences: Experience[];
  awards: AwardType[];
  projects: Project[];
  skillCategories: SkillCategory[];
}

const ResumeWebsite: React.FC<ResumeProps> = ({
  basicInfo,
  experiences,
  awards,
  projects,
  skillCategories
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<AwardType | null>(null);

  useEffect(() => {
    setIsVisible(true);
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-50'
      }`}>
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
                {basicInfo.name}
                <span className="text-2xl md:text-3xl text-gray-500 ml-4">{basicInfo.englishName}</span>
              </h1>
              <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {basicInfo.location}
                </div>
                <a href={`tel:${basicInfo.phone}`} className="flex items-center hover:text-blue-600 transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  {basicInfo.phone}
                </a>
                <a href={`mailto:${basicInfo.email}`} className="flex items-center hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  {basicInfo.email}
                </a>
              </div>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                <div dangerouslySetInnerHTML={{ __html: basicInfo.description }}></div>
              </p>
              <div className="flex flex-wrap gap-4">
                {Object.entries(basicInfo.links).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {key === 'github' ? <Github className="w-5 h-5 mr-2" /> :
                      key === 'linkedin' ? <Linkedin className="w-5 h-5 mr-2" /> :
                        <Globe className="w-5 h-5 mr-2" />}
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Experience Section */}
        <section className={`mb-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
            学习经历
          </h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`border-l-4 border-blue-600 pl-4 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} 
                  transition-all duration-300 transform hover:translate-x-2 rounded-r-lg p-4`}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.period}</span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.description}
                </p>
                {exp.highlights && (
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} 
                          transform transition-all duration-300 hover:translate-x-2`}
                      >
                        <span className="font-semibold">{highlight.date}:</span> {highlight.content}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section className={`mb-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Award className="w-6 h-6 mr-2 text-blue-600" />
            荣誉情况
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <div
                key={award.id}
                className={`p-4 rounded-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} 
          transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {award.title}
                  </h3>
                  <span className="text-blue-600 font-medium">{award.year}</span>
                </div>
                <p className={`mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{award.level}</p>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                  证书编号: {award.certNumber}
                </div>
                <div className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'} mt-2 font-medium`}>
                  {award.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section with Optional Link */}
        <section className={`mb-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Code className="w-6 h-6 mr-2 text-blue-600" />
            开源项目
          </h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`transform transition-all duration-300 hover:scale-102 
          ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} rounded-lg p-4`}
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {project.title}
                  </h3>
                  <span className="text-blue-600 text-sm font-medium">{project.techStack}</span>
                </div>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    查看源码
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className={`mb-12 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
          <h2 className={`text-2xl font-bold mb-6 flex items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            <Book className="w-6 h-6 mr-2 text-blue-600" />
            技能栈
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center p-2 rounded-lg transition-all duration-300 
                        ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}
                    >
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {skill.name}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < (skill.level === 'advanced' ? 3 : skill.level === 'intermediate' ? 2 : 1)
                              ? (darkMode ? 'bg-blue-400' : 'bg-blue-600')
                              : (darkMode ? 'bg-gray-600' : 'bg-gray-300')
                              }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificate Modal */}
        {selectedCertificate && selectedCertificate.certificate && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCertificate(null)}
          >
            <div
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg max-w-3xl w-full p-6 relative`}
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span className="text-2xl">&times;</span>
              </button>
              <img
                src={selectedCertificate.certificate}
                alt={`${selectedCertificate.title} 证书`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </main>

      <footer className={`w-full py-6 mt-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="container mx-auto px-4 text-center">
          <a
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm ${darkMode
                ? 'text-gray-400 hover:text-gray-300'
                : 'text-gray-600 hover:text-gray-800'
              } transition-colors duration-300`}
          >
            苏ICP备2025154522号
          </a>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;