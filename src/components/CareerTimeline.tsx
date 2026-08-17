import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CAREER_TIMELINE } from '../data/content';
import { Sparkles, Calendar, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';

export const CareerTimeline: React.FC = () => {
  const { lang } = useApp();
  const [activeIndex, setActiveIndex] = useState<number>(3); // default to current phase

  return (
    <div className="py-12 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            <span>{lang === 'fa' ? 'مسیر تکامل و پیشرفت حرفه‌ای' : 'Career Evolution & Roadmap'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'fa'
              ? 'از مبانی مهندسی کامپیوتر و شبکه‌های سازمانی تا اتوماسیون هوشمند و معماری راهکارهای AI'
              : 'From fundamental Computer Engineering to Enterprise Networking, Systems, and AI Solution Architecture.'}
          </p>
        </div>
        <span className="text-xs font-mono text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
          5 PHASES OF GROWTH
        </span>
      </div>

      {/* Interactive Phase Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {CAREER_TIMELINE.map((item, idx) => {
          const isSelected = activeIndex === idx;
          const isFuture = idx === CAREER_TIMELINE.length - 1;
          return (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`p-3 rounded-xl border text-left font-mono transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                isSelected
                  ? isFuture
                    ? 'bg-purple-950/40 border-purple-500/50 shadow-lg shadow-purple-900/20'
                    : 'bg-emerald-950/40 border-emerald-500/50 shadow-lg shadow-emerald-900/20'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-[10px] font-bold ${isFuture ? 'text-purple-400' : 'text-emerald-400'}`}>
                  PHASE 0{idx + 1}
                </span>
                {isSelected && (
                  <span className={`w-2 h-2 rounded-full ${isFuture ? 'bg-purple-400' : 'bg-emerald-400'} animate-ping`} />
                )}
              </div>
              <div>
                <div className="text-[11px] text-slate-400">{item.period}</div>
                <div className="text-xs font-bold text-white line-clamp-1">
                  {lang === 'fa' ? item.titleFa : item.titleEn}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      {activeIndex !== null && (
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0a101d] to-[#0d1627] border border-slate-700/80 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  {CAREER_TIMELINE[activeIndex].period}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {lang === 'fa' ? CAREER_TIMELINE[activeIndex].roleFa : CAREER_TIMELINE[activeIndex].roleEn}
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-mono">
                {lang === 'fa' ? CAREER_TIMELINE[activeIndex].titleFa : CAREER_TIMELINE[activeIndex].titleEn}
              </h4>
            </div>

            {activeIndex === 4 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>LONG-TERM STRATEGIC VECTOR</span>
              </div>
            )}
          </div>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-4xl">
            {lang === 'fa'
              ? CAREER_TIMELINE[activeIndex].descriptionFa
              : CAREER_TIMELINE[activeIndex].descriptionEn}
          </p>

          <div className="space-y-2 pt-2">
            <div className="text-xs font-mono text-slate-400 font-semibold uppercase">
              {lang === 'fa' ? 'تمرکز تکنولوژیکی این دوره:' : 'Technological Focus:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {CAREER_TIMELINE[activeIndex].skills.map((s, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-300 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>{s}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
