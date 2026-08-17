import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PERSONAL_INFO } from '../data/content';
import { 
  Network, 
  Terminal, 
  Layers, 
  Cpu, 
  Server, 
  Award, 
  BookOpen, 
  Mail, 
  Search, 
  Moon, 
  Sun, 
  Globe, 
  Menu, 
  X, 
  FileText,
  Activity
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang, theme, toggleTheme, setIsCmdOpen, setIsResumeOpen, scrollToSection } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'expertise', 'architecture', 'homelab', 'ailab', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', labelEn: 'About', labelFa: 'درباره من' },
    { id: 'expertise', labelEn: 'Expertise', labelFa: 'تخصص‌ها' },
    { id: 'architecture', labelEn: 'Architecture', labelFa: 'معماری‌ها' },
    { id: 'homelab', labelEn: 'Homelab', labelFa: 'هوم‌لب' },
    { id: 'ailab', labelEn: 'AI Lab', labelFa: 'آزمایشگاه AI' },
    { id: 'projects', labelEn: 'Case Studies', labelFa: 'پروژه‌ها' },
    { id: 'certifications', labelEn: 'Credentials', labelFa: 'مدارک' },
    { id: 'contact', labelEn: 'Contact', labelFa: 'تماس' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0f17]/90 dark:bg-[#0c0f17]/90 light:bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          id="navbar-brand-btn"
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-emerald-500/30 flex items-center justify-center group-hover:border-emerald-400/70 transition-colors shadow-inner">
            <Network className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                {PERSONAL_INFO.shortNameEn}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {PERSONAL_INFO.brand}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-wider">
              {lang === 'fa' ? 'مهندسی شبکه و زیرساخت' : 'NETWORKS × INFRA × AI'}
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {lang === 'fa' ? link.labelFa : link.labelEn}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Command Palette, Resume, Lang, Theme */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick Command Palette Button */}
          <button
            id="nav-cmd-palette-btn"
            onClick={() => setIsCmdOpen(true)}
            className="hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 hover:border-emerald-500/40 text-slate-400 hover:text-slate-200 text-xs font-mono transition-all"
            title={lang === 'fa' ? 'جستجوی سریع (Ctrl+K)' : 'Command Palette (Ctrl+K)'}
          >
            <Search className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden md:inline">{lang === 'fa' ? 'جستجو...' : 'Quick Menu'}</span>
            <kbd className="text-[10px] px-1 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-400">
              Ctrl K
            </kbd>
          </button>

          {/* Resume Modal Button */}
          <button
            id="nav-resume-btn"
            onClick={() => setIsResumeOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'fa' ? 'رزومه' : 'CV'}</span>
          </button>

          {/* Language Toggle (FA / EN) */}
          <button
            id="nav-lang-toggle-btn"
            onClick={toggleLang}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-xs font-mono transition-colors"
            title={lang === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
          >
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold">{lang === 'en' ? 'FA' : 'EN'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            id="nav-theme-toggle-btn"
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f17]/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 pt-1 border-b border-slate-800">
            <button
              onClick={() => {
                setIsCmdOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono"
            >
              <Search className="w-3.5 h-3.5 text-emerald-400" />
              <span>Command Palette</span>
            </button>
            <button
              onClick={() => {
                setIsResumeOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'fa' ? 'مشاهده و دانلود رزومه' : 'View Resume / CV'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-1.5 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left px-3 py-2 text-xs font-medium rounded-lg text-slate-200 hover:bg-slate-800 hover:text-emerald-400 transition-colors"
              >
                {lang === 'fa' ? link.labelFa : link.labelEn}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
