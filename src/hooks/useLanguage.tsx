import { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'IT' | 'EN';

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (it: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('IT');
  const t = (it: string, en: string) => (lang === 'IT' ? it : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
