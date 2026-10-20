import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { en } from '../content/en';
import { ru } from '../content/ru';
import type { Content, Lang } from '../content/types';

type LanguageContextValue = {
  lang: Lang;
  content: Content;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ru';

  const query = new URLSearchParams(window.location.search).get('lang');
  if (query === 'en' || query === 'ru') return query;

  const stored = window.localStorage.getItem('lang');
  if (stored === 'en' || stored === 'ru') return stored;

  return 'ru';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem('lang', next);

    const url = new URL(window.location.href);
    if (next === 'ru') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', next);
    }
    window.history.replaceState({}, '', url);
  };

  const content = lang === 'ru' ? ru : en;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = content.meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', content.meta.description);
    }
  }, [lang, content]);

  const value = useMemo(
    () => ({
      lang,
      content,
      setLang,
      toggleLang: () => setLang(lang === 'ru' ? 'en' : 'ru'),
    }),
    [lang, content],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
