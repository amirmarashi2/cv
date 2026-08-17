import React from 'react';
import { useApp } from '../context/AppContext';
import { PERSONAL_INFO, PHILOSOPHY_PRINCIPLES, PROBLEMS_I_SOLVE } from '../data/content';
import { 
  ShieldCheck, 
  Layers, 
  Activity, 
  Cpu, 
  Lock, 
  AlertTriangle, 
  Network, 
  Terminal, 
  PhoneCall, 
  KeyRound,
  CheckCircle2,
  Building2,
  Stethoscope,
  Factory,
  Hotel,
  Briefcase
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { lang, scrollToSection } = useApp();

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-amber-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Lock': return <Lock className="w-5 h-5 text-teal-400" />;
      case 'AlertTriangle': return <AlertTriangle className="w-5 h-5 text-rose-400" />;
      case 'Network': return <Network className="w-5 h-5 text-sky-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-indigo-400" />;
      case 'PhoneCall': return <PhoneCall className="w-5 h-5 text-emerald-400" />;
      case 'KeyRound': return <KeyRound className="w-5 h-5 text-amber-400" />;
      default: return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const environments = [
    { icon: <Stethoscope className="w-4 h-4 text-rose-400" />, labelEn: 'Hospitals & Medical Clinics', labelFa: 'بیمارستان‌ها و کلینیک‌های درمانی' },
    { icon: <Hotel className="w-4 h-4 text-amber-400" />, labelEn: 'Hotels & Hospitality Resorts', labelFa: 'هتل‌ها و مجتمع‌های اقامتی' },
    { icon: <Factory className="w-4 h-4 text-blue-400" />, labelEn: 'Industrial Plants & Factories', labelFa: 'کارخانجات و مراکز صنعتی' },
    { icon: <Building2 className="w-4 h-4 text-emerald-400" />, labelEn: 'Enterprise Headquarters & SMBs', labelFa: 'دفاتر مرکزی شرکت‌ها و کسب‌وکارهای متوسط' },
  ];

  return (
    <section id="about" className="py-20 bg-[#090d16]/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <span>01 / PROFESSIONAL IDENTITY & STORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'داستان حرفه‌ای و تفکر معماری' : 'The Engineer Behind the Infrastructure'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa' ? PERSONAL_INFO.bioFa : PERSONAL_INFO.bioEn}
          </p>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                <span className="text-emerald-400">#</span>
                <span>{lang === 'fa' ? 'تعهد به زیرساخت‌های پایدار و مهندسی‌شده' : 'End-to-End Infrastructure Mindset'}</span>
              </h3>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {lang === 'fa'
                  ? 'بسیاری از سازمان‌ها شبکه، سرور، تلفن گویا، امنیت و مانیتورینگ را جزیره‌های جداگانه می‌بینند. من این بخش‌ها را به عنوان یک کل به‌هم‌پیوسته مهندسی می‌کنم. از انتخاب ترانک‌های فیبر و کانفیگ سوئیچ‌های لایه ۳ سیسکو و میکروتیک، تا سیستم‌های عامل لینوکس، مجازی‌سازی Proxmox، احراز هویت FreeRADIUS، مراکز تلفن VoIP و در نهایت اتوماسیون با Ansible.'
                  : 'Rather than treating networking, Linux servers, VoIP, security, and virtualization as disconnected silos, my practice is rooted in End-to-End Infrastructure Thinking. Every switchport setting, VLAN boundary, hypervisor virtual switch, and authentication daemon is designed to interlock cleanly.'}
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                {lang === 'fa'
                  ? 'طی بیش از ۵ سال تجربه در محیط‌های واقعی با چالش‌های متنوعی چون نشت ترافیک مالتی‌کست در هتل‌ها، قطعی‌های ناشی از لوپ‌های STP، مهاجرت خطوط فرسوده تلفن به VoIP و امن‌سازی سرورهای حساس در برابر نفوذ مواجه شده و آن‌ها را حل کرده‌ام.'
                  : 'Having worked across diverse live operating environments, I have resolved real-world broadcast storms, designed multi-WAN load balancers with zero-drop failover, centralized AAA switch logins, and migrated legacy telephone lines to crystal-clear digital SIP PBXs.'}
              </p>
            </div>

            {/* Live Environments Deployed */}
            <div className="space-y-2 pt-4 border-t border-slate-800">
              <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                {lang === 'fa' ? 'محیط‌های واقعی تجربه شده:' : 'Proven Production Environments:'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {environments.map((env, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200">
                    {env.icon}
                    <span>{lang === 'fa' ? env.labelFa : env.labelEn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote & Philosophy Highlight Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0a1120] to-[#0d1b2a] border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-mono text-xl font-bold">
                “
              </div>
              <blockquote className="text-lg sm:text-xl font-medium text-slate-100 leading-relaxed italic">
                {lang === 'fa' ? PERSONAL_INFO.quoteFa : PERSONAL_INFO.quoteEn}
              </blockquote>
              <div className="font-mono text-xs text-emerald-400 font-bold tracking-wider">
                — {PERSONAL_INFO.fullNameEn} ({PERSONAL_INFO.shortNameEn})
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-4 border-t border-slate-800/80 relative z-10">
              <button
                onClick={() => scrollToSection('expertise')}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{lang === 'fa' ? 'مشاهده ماتریس مهارت‌ها' : 'Explore Technical Skill Matrix'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <h3 className="text-xl font-bold text-white font-mono">
              {lang === 'fa' ? 'اصول و فلسفه مهندسی من' : 'Core Engineering Principles'}
            </h3>
            <span className="text-xs font-mono text-slate-500">
              DETERMINISTIC × OBSERVABLE × SECURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PHILOSOPHY_PRINCIPLES.map((principle, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all space-y-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(principle.icon)}
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                  {lang === 'fa' ? principle.titleFa : principle.titleEn}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'fa' ? principle.descFa : principle.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Problems I Solve Cards */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div>
              <h3 className="text-xl font-bold text-white font-mono">
                {lang === 'fa' ? 'مسائلی که حل می‌کنم (Problems I Solve)' : 'Real-World Infrastructure Problems I Solve'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'fa' ? 'رویکرد حل مسئله به جای صرفاً لیست ابزارها' : 'Outcome-driven engineering rather than passive tool checklists'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
              PRODUCTION SOLVER
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROBLEMS_I_SOLVE.map((prob) => (
              <div
                key={prob.id}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 space-y-3 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center">
                    {getIcon(prob.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">SOLVED ARCHITECTURE</span>
                </div>
                <h4 className="text-base font-bold text-white font-mono group-hover:text-emerald-400 transition-colors">
                  {lang === 'fa' ? prob.titleFa : prob.titleEn}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'fa' ? prob.descFa : prob.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
