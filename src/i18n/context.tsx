import { createContext, useContext, useState, type ReactNode } from 'react';
import { en } from './en';
import { fi } from './fi';
import { ru } from './ru';
import type { Translations } from './types';

export type Lang = 'en' | 'fi' | 'ru';
export type { Translations };

const dictionaries: Record<Lang, Translations> = { en, fi, ru };

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nCtx>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem('fixarivan_lang');
    return (stored === 'fi' || stored === 'ru') ? stored : 'en';
  });

  const setLang = (l: Lang) => {
    localStorage.setItem('fixarivan_lang', l);
    setLangState(l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
