import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';
import { 
  Briefcase, 
  Filter, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Layers, 
  Activity, 
  X, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Terminal
} from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { lang, selectedCaseStudy, setSelectedCaseStudy } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelEn: 'All Case Studies', labelFa: 'همه پروژه‌ها' },
    { id: 'Hospitality & Entertainment', labelEn: 'Hospitality & IPTV', labelFa: 'هتل و IPTV' },
    { id: 'Healthcare & Clinical', labelEn: 'Healthcare & Clinics', labelFa: 'مراکز درمانی و کلینیک' },
    { id: 'Enterprise Security & AAA', labelEn: 'Security & AAA', labelFa: 'امنیت و احراز هویت' },
    { id: 'AI & Automation Engineering', labelEn: 'AI & Automation', labelFa: 'اتوماسیون هوش مصنوعی' },
  ];

  const filteredStudies = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category.includes(activeCategory) || c.badge.includes(activeCategory));

  return (
    <section id="projects" className="py-20 bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>06 / PRODUCTION CASE STUDIES & DELIVERABLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'کیس‌استادی‌ها و مستندات معماری پروژه‌ها' : 'Enterprise Case Studies & Retrospectives'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'مستندات واقعی از حل چالش‌های پیچیده در محیط‌های سازمانی؛ همراه با تحلیل ریشه مشکل (Root Cause)، معماری راه‌حل و نتایج کمی قابل‌اندازه‌گیری.'
              : 'Real-world infrastructure retrospectives detailing the exact challenge, engineering diagnosis, and measurable production outcomes.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs font-mono">
          <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-bold shadow'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {lang === 'fa' ? cat.labelFa : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-${study.id}`}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-5 group shadow-xl"
            >
              <div className="space-y-4">
                {/* Header Tags */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                    {study.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{study.category}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-slate-400">
                    {lang === 'fa' ? study.clientTypeFa : study.clientTypeEn}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug font-mono">
                    {lang === 'fa' ? study.titleFa : study.titleEn}
                  </h3>
                </div>

                {/* Problem Preview */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                  <div className="text-[10px] font-mono text-rose-400 font-bold uppercase flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    <span>CHALLENGE</span>
                  </div>
                  <p className="line-clamp-2 leading-relaxed">
                    {lang === 'fa' ? study.problemFa : study.problemEn}
                  </p>
                </div>

                {/* Measurable Outcome */}
                <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 font-mono flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{lang === 'fa' ? study.impactMetricFa : study.impactMetricEn}</span>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-500">
                      +{study.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom CTA to open full retrospective modal */}
              <div className="pt-4 border-t border-slate-800">
                <button
                  id={`open-modal-${study.id}`}
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-300 border border-slate-700 hover:border-emerald-500/30 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{lang === 'fa' ? 'مشاهده معماری و گزارش کامل' : 'Full Architecture & Retrospective'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Retrospective Modal */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                    {selectedCaseStudy.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {selectedCaseStudy.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {lang === 'fa' ? selectedCaseStudy.titleFa : selectedCaseStudy.titleEn}
                </h3>
                <div className="text-xs font-mono text-emerald-400">
                  {lang === 'fa' ? selectedCaseStudy.clientTypeFa : selectedCaseStudy.clientTypeEn}
                </div>
              </div>

              <button
                id="close-case-modal"
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
              
              {/* Problem Statement */}
              <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/20 space-y-2">
                <div className="text-xs font-mono text-rose-400 font-bold uppercase flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'چالش و وضعیت اولیه زیرساخت' : 'Initial Problem & Infrastructure Bottleneck'}</span>
                </div>
                <p className="text-slate-300">
                  {lang === 'fa' ? selectedCaseStudy.problemFa : selectedCaseStudy.problemEn}
                </p>
              </div>

              {/* Architecture Summary */}
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/20 space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                  <Layers className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'معماری راه‌حل مهندسی‌شده' : 'Engineered Solution & Architecture'}</span>
                </div>
                <p className="text-slate-300">
                  {lang === 'fa' ? selectedCaseStudy.architectureSummaryFa : selectedCaseStudy.architectureSummaryEn}
                </p>
              </div>

              {/* Troubleshooting Deep Dive */}
              <div className="p-4 rounded-xl bg-slate-950 border border-blue-500/20 space-y-2">
                <div className="text-xs font-mono text-blue-400 font-bold uppercase flex items-center gap-1.5">
                  <Terminal className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'تشخیص فنی و عیب‌یابی عمیق (Root Cause Diagnosis)' : 'Technical Diagnosis & Root Cause Troubleshooting'}</span>
                </div>
                <p className="text-slate-300">
                  {lang === 'fa' ? selectedCaseStudy.troubleshootingFa : selectedCaseStudy.troubleshootingEn}
                </p>
              </div>

              {/* Implementation Steps */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase">
                  {lang === 'fa' ? 'مراحل اجرایی پیاده‌سازی' : 'Implementation Methodology Steps'}
                </div>
                <ul className="space-y-1.5 text-slate-300 font-mono text-xs">
                  {(lang === 'fa' ? selectedCaseStudy.implementationStepsFa : selectedCaseStudy.implementationStepsEn).map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantifiable Results */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 space-y-2">
                <div className="text-xs font-mono text-emerald-300 font-bold uppercase flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'نتایج نهایی و دستاوردهای کمی' : 'Quantifiable Business & Performance Outcomes'}</span>
                </div>
                <p className="text-emerald-200">
                  {lang === 'fa' ? selectedCaseStudy.resultFa : selectedCaseStudy.resultEn}
                </p>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase">
                  {lang === 'fa' ? 'تکنولوژی‌های به‌کاررفته' : 'Technologies Deployed'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
