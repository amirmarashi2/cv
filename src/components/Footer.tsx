import React from 'react';
import { useApp } from '../context/AppContext';
import { PERSONAL_INFO } from '../data/content';
import { 
  Network, 
  Terminal, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Activity, 
  Heart,
  FileText,
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, scrollToSection, setIsResumeOpen } = useApp();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070c] border-t border-slate-800/80 pt-16 pb-12 text-xs font-mono text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-wide">
                  {PERSONAL_INFO.brand}
                </div>
                <div className="text-[10px] text-slate-500">
                  {PERSONAL_INFO.fullNameEn}
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-sans text-xs max-w-sm">
              {lang === 'fa'
                ? 'مهندسی زیرساخت‌های پایدار شبکه، لینوکس، مجازی‌سازی و مراکز تلفن VoIP با نگاه به آینده اتوماسیون هوش مصنوعی.'
                : 'Architecting resilient enterprise networks, hardened Linux systems, unified VoIP, and autonomous AI infrastructure.'}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-bold text-[11px]">
                NOC TELEMETRY: ALL SERVICES OPERATIONAL
              </span>
            </div>
          </div>

          {/* Col 3: Architecture & Engineering */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">
              {lang === 'fa' ? 'کاوش معماری' : 'Architecture'}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('architecture')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {lang === 'fa' ? 'زمین بازی معماری' : 'Architecture Playground'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('homelab')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {lang === 'fa' ? 'رک هوم‌لب ۴۲ یونیت' : '42U NOC Homelab'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('ai-lab')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {lang === 'fa' ? 'آزمایشگاه هوش مصنوعی' : 'AI Automation Lab'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('expertise')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {lang === 'fa' ? 'ماتریس مهارت‌ها' : 'Technical Skill Matrix'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Deliverables & Knowledge */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">
              {lang === 'fa' ? 'پروژه‌ها و مقالات' : 'Knowledge & Work'}
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {lang === 'fa' ? 'کیس استادی‌ها' : 'Enterprise Case Studies'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('certifications')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {lang === 'fa' ? 'مدارک و دوره‌ها' : 'Certifications Path'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="hover:text-emerald-400 transition-colors text-left"
                >
                  {lang === 'fa' ? 'مقالات تخصصی' : 'Technical Articles'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="hover:text-emerald-400 transition-colors text-left flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{lang === 'fa' ? 'رزومه تعاملی' : 'Interactive Resume'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Channels */}
          <div className="space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-xs">
              {lang === 'fa' ? 'راه‌های ارتباطی' : 'Direct Channels'}
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-emerald-400 transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  GitHub / seyed-amirhossein-marashi
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  LinkedIn / amir-marashi
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors block"
                >
                  Telegram / @Amir_Marashi_0
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="pt-8 border-t border-slate-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Seyed Amirhossein Marashi (Amir). NetMinds Brand. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
            <button
              onClick={handleScrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors cursor-pointer"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
