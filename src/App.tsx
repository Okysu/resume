import ResumeWebsite from './components/ResumeWebsite';
import { basicInfo, experiences, awards, projects, skillCategories } from './data';

export default function App() {
  return (
    <ResumeWebsite
      basicInfo={basicInfo}
      experiences={experiences}
      awards={awards}
      projects={projects}
      skillCategories={skillCategories}
    />
  );
}