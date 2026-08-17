import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Search, 
  Terminal, 
  Layers, 
  Server, 
  Cpu, 
  Briefcase, 
  Award, 
  BookOpen, 
  Mail, 
  FileText, 
  Globe, 
  Moon, 
  Sun,
  X,
  CornerDownLeft,
  ArrowRight
} from 'lucide-react';

export const CommandPalette: React.FC = () => {
  const { 
    isCommandPaletteOpen, 
    setIsCommandPaletteOpen, 
    lang, 
    toggleLang, 
    theme, 
    toggleTheme, 
    setIsResumeOpen, 
    scrollToSection 
  } = useApp();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandItems = [
    {
      id: 'sec-hero',
      titleEn: 'Overview & Interactive Topology',
      titleFa: 'صفحه اصلی و توپولوژی تعاملی',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      action: () => {
        scrollToSection('hero');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-about',
      titleEn: 'About & Engineering Philosophy',
      titleFa: 'داستان حرفه‌ای و اصول مهندسی',
      category: 'Navigation',
      icon: <Terminal className="w-4 h-4 text-blue-400" />,
      action: () => {
        scrollToSection('about');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-expertise',
      titleEn: 'Technical Skills & Domains',
      titleFa: 'ماتریس مهارت‌ها و حوزه‌های فنی',
      category: 'Navigation',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      action: () => {
        scrollToSection('expertise');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-architecture',
      titleEn: 'Architecture Playground & Simulator',
      titleFa: 'زمین بازی معماری شبکه و شبیه‌ساز',
      category: 'Interactive',
      icon: <Layers className="w-4 h-4 text-amber-400" />,
      action: () => {
        scrollToSection('architecture');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-homelab',
      titleEn: "Amir's 42U NOC Homelab Rack",
      titleFa: 'رک ۴۲ یونیت هوم‌لب امیر',
      category: 'Hardware & Systems',
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      action: () => {
        scrollToSection('homelab');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-ai-lab',
      titleEn: 'AI × Network Automation Lab',
      titleFa: 'آزمایشگاه اتوماسیون هوش مصنوعی',
      category: 'AI & IaC',
      icon: <Cpu className="w-4 h-4 text-teal-400" />,
      action: () => {
        scrollToSection('ai-lab');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-projects',
      titleEn: 'Production Case Studies & Deliverables',
      titleFa: 'کیس‌استادی‌ها و پروژه‌ها',
      category: 'Deliverables',
      icon: <Briefcase className="w-4 h-4 text-sky-400" />,
      action: () => {
        scrollToSection('projects');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-certifications',
      titleEn: 'Certifications & Learning Path',
      titleFa: 'مدارک و دوره‌های تخصصی',
      category: 'Credentials',
      icon: <Award className="w-4 h-4 text-rose-400" />,
      action: () => {
        scrollToSection('certifications');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-blog',
      titleEn: 'Technical Articles & Postmortems',
      titleFa: 'مقالات و تحلیل‌های تخصصی',
      category: 'Knowledge',
      icon: <BookOpen className="w-4 h-4 text-indigo-400" />,
      action: () => {
        scrollToSection('blog');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'sec-contact',
      titleEn: 'Contact & Project Consultation',
      titleFa: 'ارتباط کاری و مشاوره',
      category: 'Channels',
      icon: <Mail className="w-4 h-4 text-emerald-400" />,
      action: () => {
        scrollToSection('contact');
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-resume',
      titleEn: 'View Full CV / Resume (PDF Ready)',
      titleFa: 'مشاهده و دانلود رزومه (PDF)',
      category: 'Action',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        setIsResumeOpen(true);
        setIsCommandPaletteOpen(false);
      },
    },
    {
      id: 'cmd-lang',
      titleEn: `Switch Language (${lang === 'en' ? 'فارسی' : 'English'})`,
      titleFa: `تغییر زبان (${lang === 'en' ? 'فارسی' : 'English'})`,
      category: 'Action',
      icon: <Globe className="w-4 h-4 text-blue-400" />,
      action: () => {
        toggleLang();
        setIsCommandPaletteOpen(false);
      },
    },
  ];

  const filtered = commandItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.titleEn.toLowerCase().includes(q) ||
      item.titleFa.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isCommandPaletteOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      setIsCommandPaletteOpen(false);
    }
  };

  if (!isCommandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => setIsCommandPaletteOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/90 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 bg-slate-950 border-b border-slate-800">
          <Search className="w-4 h-4 text-emerald-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder={lang === 'fa' ? 'دستور یا بخشی از سایت را جستجو کنید (مانند: homelab, voip, cisco, cv)...' : 'Type a command or jump to section (e.g. topology, homelab, ansible, resume)...'}
            className="flex-1 bg-transparent text-white placeholder:text-slate-500 focus:outline-none text-xs"
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
          {filtered.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={item.id}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full p-2.5 rounded-xl text-left rtl:text-right transition-colors flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-300 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-slate-950 border border-slate-800">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-xs">
                      {lang === 'fa' ? item.titleFa : item.titleEn}
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase">
                      {item.category}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                    <span>Execute</span>
                    <CornerDownLeft className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            );
          })}

          {filtered.length === 0 && (
            <div className="p-6 text-center text-slate-500">
              No matching commands found for "{query}".
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[10px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>NetMinds CLI Hub</span>
        </div>
      </div>
    </div>
  );
};
