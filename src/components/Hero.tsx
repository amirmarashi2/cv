import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PERSONAL_INFO } from '../data/content';
import { NetworkTopologyVisualizer } from './NetworkTopologyVisualizer';
import { InteractiveTerminal } from './InteractiveTerminal';
import { 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Network, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  Layers
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang, setIsResumeOpen, scrollToSection } = useApp();
  const [heroTab, setHeroTab] = useState<'topology' | 'terminal'>('topology');

  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-16 md:pb-24 overflow-hidden tech-dots">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold uppercase tracking-wider">
              {lang === 'fa' ? 'تمرکز فعلی: مهندسی شبکه × اتوماسیون هوش مصنوعی' : 'CURRENT FOCUS: AI × INFRASTRUCTURE & NETWORK AUTOMATION'}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            <span>5+ Years Production Experience</span>
          </div>
        </div>

        {/* Hero Main Grid: Left copy, Right interactive viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Positioning */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                <span>{PERSONAL_INFO.fullNameEn}</span>
                <span className="text-slate-600">/</span>
                <span className="text-emerald-400 font-bold">{PERSONAL_INFO.brand}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.25]">
                {lang === 'fa' ? (
                  <>
                    زیرساخت را فقط راه‌اندازی نمی‌کنم؛ <br />
                    <span className="text-emerald-400 font-black">
                      مهندسی‌اش می‌کنم.
                    </span>
                  </>
                ) : (
                  <>
                    I don't just deploy infrastructure. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400">
                      I engineer it.
                    </span>
                  </>
                )}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
                {lang === 'fa'
                  ? 'من سید امیرحسین مرعشی هستم؛ مهندس شبکه و زیرساخت با تخصص عمیق در سوئیچینگ و روتینگ سازمانی سیسکو و میکروتیک، سرورهای لینوکس، مجازی‌سازی Proxmox، مراکز تلفن VoIP و هدایت زیرساخت به سمت اتوماسیون هوشمند با Ansible و هوش مصنوعی.'
                  : 'Infrastructure Engineer with deep networking expertise across Cisco & MikroTik, hardened Linux systems, Proxmox virtualization, unified VoIP telephony, and modern AI-driven network automation.'}
              </p>
            </div>

            {/* End-to-End Infrastructure Chain Pill */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 space-y-1.5">
              <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'fa' ? 'نگاه جامع و سرتاسری به زیرساخت (End-to-End)' : 'END-TO-END INFRASTRUCTURE THINKING'}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-slate-400 rtl:space-x-reverse">
                <span className="text-slate-200">Physical Core</span>
                <span className="rtl:rotate-180">→</span>
                <span className="text-slate-200">L2/L3 Network</span>
                <span className="rtl:rotate-180">→</span>
                <span className="text-slate-200">Linux & AAA</span>
                <span className="rtl:rotate-180">→</span>
                <span className="text-slate-200">VoIP & Services</span>
                <span className="rtl:rotate-180">→</span>
                <span className="text-emerald-300 font-bold">AI Automation</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-explore-work-btn"
                onClick={() => scrollToSection('projects')}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all cursor-pointer"
              >
                <span>{lang === 'fa' ? 'مشاهده پروژه‌ها و کیس استادی‌ها' : 'Explore My Work'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                id="hero-view-architecture-btn"
                onClick={() => scrollToSection('architecture')}
                className="px-5 py-3 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-blue-400" />
                <span>{lang === 'fa' ? 'معماری‌های تعاملی' : 'Architecture Playground'}</span>
              </button>

              <button
                id="hero-download-cv-btn"
                onClick={() => setIsResumeOpen(true)}
                className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-300 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>{lang === 'fa' ? 'دریافت رزومه' : 'View CV / Resume'}</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-bold font-mono text-white">5+</div>
                <div className="text-xs text-slate-400">{lang === 'fa' ? 'سال تجربه عملیاتی' : 'Years Experience'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
                <div className="text-xs text-slate-400">{lang === 'fa' ? 'طراحی مهندسی واقعی' : 'Production Architected'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-blue-400">L1 - L7</div>
                <div className="text-xs text-slate-400">{lang === 'fa' ? 'تسلط جامع بر لایه‌ها' : 'Full Stack Scope'}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Topology Visualizer & Terminal Toggle */}
          <div className="lg:col-span-6 space-y-3">
            
            {/* Toggle Header between Topology & Terminal */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
                <button
                  id="tab-btn-topology"
                  onClick={() => setHeroTab('topology')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                    heroTab === 'topology'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Network className="w-3.5 h-3.5" />
                  <span>Interactive Topology</span>
                </button>

                <button
                  id="tab-btn-terminal"
                  onClick={() => setHeroTab('terminal')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all ${
                    heroTab === 'terminal'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>Interactive CLI</span>
                </button>
              </div>

              <div className="text-[11px] font-mono text-slate-500 hidden sm:block">
                {heroTab === 'topology' ? 'CLICK ANY NODE TO INSPECT' : 'RUN REAL COMMANDS'}
              </div>
            </div>

            {/* Display Active Component */}
            <div className="transition-all duration-300">
              {heroTab === 'topology' ? (
                <NetworkTopologyVisualizer />
              ) : (
                <InteractiveTerminal />
              )}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-emerald-400 text-xs font-mono transition-colors group cursor-pointer"
          >
            <span>{lang === 'fa' ? 'کاوش عمیق‌تر در تخصص‌ها' : 'SCROLL TO EXPLORE'}</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
