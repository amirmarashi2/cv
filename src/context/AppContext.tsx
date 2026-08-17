import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CaseStudy, BlogPost, Language, Theme } from '../types';

interface AppContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isCmdOpen: boolean;
  setIsCmdOpen: (open: boolean) => void;
  isCommandPaletteOpen: boolean;
  setIsCommandPaletteOpen: (open: boolean) => void;
  selectedCaseStudy: CaseStudy | null;
  setSelectedCaseStudy: (study: CaseStudy | null) => void;
  selectedProjectModal: CaseStudy | null;
  setSelectedProjectModal: (study: CaseStudy | null) => void;
  isResumeOpen: boolean;
  setIsResumeOpen: (open: boolean) => void;
  selectedBlog: BlogPost | null;
  setSelectedBlog: (post: BlogPost | null) => void;
  selectedArticleModal: BlogPost | null;
  setSelectedArticleModal: (post: BlogPost | null) => void;
  scrollToSection: (id: string) => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('amir_lang');
    return saved === 'fa' || saved === 'en' ? saved : 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('amir_theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('amir_lang', newLang);
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'fa' : 'en');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('amir_theme', newTheme);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Sync RTL/LTR and language attributes on HTML
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
  }, [lang]);

  // Sync Dark/Light class on HTML
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Global keyboard shortcut for Command Palette (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCmdOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsCmdOpen(false);
        setSelectedCaseStudy(null);
        setIsResumeOpen(false);
        setSelectedBlog(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        theme,
        setTheme,
        toggleTheme,
        isCmdOpen,
        setIsCmdOpen,
        isCommandPaletteOpen: isCmdOpen,
        setIsCommandPaletteOpen: setIsCmdOpen,
        selectedCaseStudy,
        setSelectedCaseStudy,
        selectedProjectModal: selectedCaseStudy,
        setSelectedProjectModal: setSelectedCaseStudy,
        isResumeOpen,
        setIsResumeOpen,
        selectedBlog,
        setSelectedBlog,
        selectedArticleModal: selectedBlog,
        setSelectedArticleModal: setSelectedBlog,
        scrollToSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
