import { useState, useEffect } from 'react';

type SupportedLanguage = 'en' | 'zh';

export function useLanguageDetection(): SupportedLanguage {
  const [detectedLanguage, setDetectedLanguage] = useState<SupportedLanguage>('zh');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    
    if (browserLang.startsWith('zh')) {
      setDetectedLanguage('zh');
    } else {
      setDetectedLanguage('en');
    }
  }, []);

  return detectedLanguage;
}

export default useLanguageDetection;