import ResumeWebsite from './components/ResumeWebsite';
import useLanguageDetection from './useLanguageDetection';

function App() {
  const detectedLanguage = useLanguageDetection();
  
  return (
    <ResumeWebsite initialLanguage={detectedLanguage} />
  );
}

export default App;