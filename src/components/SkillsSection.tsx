import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SKILL_ITEMS, DOMAIN_EXPERTISE } from '../data/content';
import { SkillLevel } from '../types';
import { 
  Network, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  PhoneCall, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  Filter
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { lang } = useApp();
  const [selectedDomain, setSelectedDomain] = useState<string>('networking');
  const [levelFilter, setLevelFilter] = useState<SkillLevel | 'all'>('all');

  const domainIcons: Record<string, React.ReactNode> = {
    networking: <Network className="w-5 h-5 text-sky-400" />,
    security: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    'linux-systems': <Terminal className="w-5 h-5 text-purple-400" />,
    virtualization: <Layers className="w-5 h-5 text-pink-400" />,
    voip: <PhoneCall className="w-5 h-5 text-teal-400" />,
    'ai-automation': <Cpu className="w-5 h-5 text-amber-400" />,
  };

  const skillTiers: { level: SkillLevel; titleEn: string; titleFa: string; badgeColor: string; descEn: string; descFa: string }[] = [
    {
      level: 'advanced',
      titleEn: 'Advanced / Production Experience',
      titleFa: 'تجربه عمیق و عملیاتی پیشرفته',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      descEn: 'Proven daily architectural design, complex troubleshooting, and mission-critical production maintenance.',
      descFa: 'طراحی معماری، پیکربندی حرفه‌ای و نگهداری زیرساخت‌های پرترافیک و حیاتی در محیط‌های واقعی.',
    },
    {
      level: 'practical',
      titleEn: 'Strong Practical Experience',
      titleFa: 'تجربه کاربردی و استقرار عملیاتی قوی',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      descEn: 'Hands-on enterprise setups, server hardening, PBX rollouts, and hypervisor virtualization clusters.',
      descFa: 'استقرار کامل در سازمان‌ها، امن‌سازی سرورها، راه‌اندازی مراکز تلفن و کلاسترهای مجازی‌سازی.',
    },
    {
      level: 'working',
      titleEn: 'Working Knowledge & IaC',
      titleFa: 'دانش کاربردی و زیرساخت به عنوان کد',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      descEn: 'Active container orchestration, Ansible playbooks, multicast TV distribution, and automation workflows.',
      descFa: 'مدیریت کانتینرها، ساخت پلی‌بوک‌های انسیبل، توزیع مالتی‌کست و اتوماسیون وظایف تکراری.',
    },
    {
      level: 'expanding',
      titleEn: 'Currently Expanding & R&D',
      titleFa: 'در حال توسعه فعال و پژوهش‌های آینده',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      descEn: 'Python API integrations, AI Network Agents, telemetry correlation, and AI Solution Architecture.',
      descFa: 'توسعه اسکریپت‌های پایتون، عامل‌های هوشمند شبکه، تحلیل لاگ‌ها و معماری هوش مصنوعی سازمانی.',
    },
  ];

  const currentDomainData = DOMAIN_EXPERTISE.find((d) => d.id === selectedDomain) || DOMAIN_EXPERTISE[0];

  const filteredSkills = levelFilter === 'all'
    ? SKILL_ITEMS
    : SKILL_ITEMS.filter((s) => s.level === levelFilter);

  return (
    <section id="expertise" className="py-20 bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <span>02 / TECHNICAL EXPERTISE & DOMAINS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'ماتریس جامع تخصص‌ها و حوزه‌های فنی' : 'Technical Proficiency & Domain Matrix'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'نمایش واقع‌گرایانه و صادقانه تخصص‌ها بر اساس سطوح واقعی تسلط و تجربه در پروژه‌های عملیاتی، بدون درصدهای ساختگی.'
              : 'Senior engineering tiering categorized by real-world operational mastery, from core L2/L3 routing to Linux systems and AI automation.'}
          </p>
        </div>

        {/* Domain Deep Dive Selector & Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
              <span className="text-emerald-400">#</span>
              <span>{lang === 'fa' ? 'حوزه‌های ۶ گانه تخصصی' : 'Core Engineering Domains'}</span>
            </h3>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">SELECT A DOMAIN TO EXPAND</span>
          </div>

          {/* Domain Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {DOMAIN_EXPERTISE.map((domain) => {
              const isSelected = selectedDomain === domain.id;
              return (
                <button
                  key={domain.id}
                  id={`domain-tab-${domain.id}`}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`p-3 rounded-xl border text-left font-mono transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-emerald-500/60 shadow-lg shadow-emerald-950/30'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700">
                      {domainIcons[domain.id]}
                    </div>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                  </div>
                  <div className="text-xs font-bold text-white line-clamp-1">
                    {lang === 'fa' ? domain.titleFa : domain.titleEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Domain Panel */}
          {currentDomainData && (
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                      {currentDomainData.badge}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold text-white font-mono flex items-center gap-3">
                    {domainIcons[currentDomainData.id]}
                    <span>{lang === 'fa' ? currentDomainData.titleFa : currentDomainData.titleEn}</span>
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  {lang === 'fa' ? currentDomainData.summaryFa : currentDomainData.summaryEn}
                </p>
              </div>

              {/* Technologies List */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase font-semibold">
                  {lang === 'fa' ? 'تکنولوژی‌ها و پروتکل‌های این حوزه:' : 'Key Technologies & Protocols:'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentDomainData.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverable Capabilities */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                  {lang === 'fa' ? 'قابلیت‌های عملیاتی پیاده‌سازی‌شده:' : 'Engineered Operational Capabilities:'}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {(lang === 'fa' ? currentDomainData.capabilitiesFa : currentDomainData.capabilitiesEn).map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Senior Skill Matrix Tiering (No fake % bars) */}
        <div className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
                <span className="text-emerald-400">#</span>
                <span>{lang === 'fa' ? 'سطح‌بندی مهارت‌ها (Skill Matrix)' : 'Skill Proficiency Tiers'}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {lang === 'fa' ? 'دسته‌بندی شفاف بر مبنای توانایی حل مسئله و پیاده‌سازی' : 'Honest, battle-tested classification based on real infrastructure delivery'}
              </p>
            </div>

            {/* Level Filter Chips */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto text-xs font-mono">
              <button
                onClick={() => setLevelFilter('all')}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  levelFilter === 'all' ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Skills
              </button>
              {skillTiers.map((tier) => (
                <button
                  key={tier.level}
                  onClick={() => setLevelFilter(tier.level)}
                  className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    levelFilter === tier.level ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tier.level.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Tier Cards Grid */}
          <div className="space-y-8">
            {skillTiers
              .filter((tier) => levelFilter === 'all' || levelFilter === tier.level)
              .map((tier) => {
                const skillsInTier = SKILL_ITEMS.filter((s) => s.level === tier.level);
                return (
                  <div key={tier.level} className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold border ${tier.badgeColor}`}>
                          {tier.level.toUpperCase()}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-white font-mono">
                          {lang === 'fa' ? tier.titleFa : tier.titleEn}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 italic">
                        {lang === 'fa' ? tier.descFa : tier.descEn}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {skillsInTier.map((skill, idx) => (
                        <div
                          key={idx}
                          className={`p-4 rounded-xl bg-slate-900/80 border transition-all space-y-3 ${
                            skill.highlight
                              ? 'border-emerald-500/40 shadow-md shadow-emerald-950/20'
                              : 'border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h5 className="font-bold text-white text-sm font-mono flex items-center gap-1.5">
                              {skill.highlight && <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                              <span>{skill.name}</span>
                            </h5>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed">
                            {lang === 'fa' ? skill.descriptionFa : skill.descriptionEn}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {skill.tags.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700/60 text-slate-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

      </div>
    </section>
  );
};
