import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { TECH_RADAR_ITEMS } from '../data/content';
import { TechRadarItem } from '../types';
import { Radar, Target, Filter, Info, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechRadar: React.FC = () => {
  const { lang } = useApp();
  const [activeRing, setActiveRing] = useState<'all' | 'core' | 'production' | 'expanding' | 'exploring'>('all');
  const [selectedItem, setSelectedItem] = useState<TechRadarItem | null>(TECH_RADAR_ITEMS[0]);

  const rings: { id: 'core' | 'production' | 'expanding' | 'exploring'; labelEn: string; labelFa: string; color: string; descEn: string; descFa: string }[] = [
    {
      id: 'core',
      labelEn: '1. CORE',
      labelFa: '۱. هسته اصلی (Core)',
      color: '#10B981',
      descEn: 'Proven daily architectural mastery in enterprise production.',
      descFa: 'تسلط عمیق روزمره در محیط‌های عملیاتی سازمانی.',
    },
    {
      id: 'production',
      labelEn: '2. PRODUCTION',
      labelFa: '۲. محیط عملیاتی (Production)',
      color: '#3B82F6',
      descEn: 'Strong practical deployments with proven reliability.',
      descFa: 'استقرار موفق با قابلیت اطمینان بالا در پروژه‌ها.',
    },
    {
      id: 'expanding',
      labelEn: '3. EXPANDING',
      labelFa: '۳. در حال توسعه (Expanding)',
      color: '#A855F7',
      descEn: 'Active automation scripts and containerized infrastructure.',
      descFa: 'اسکریپت‌های اتوماسیون فعال و زیرساخت کانتینری.',
    },
    {
      id: 'exploring',
      labelEn: '4. EXPLORING',
      labelFa: '۴. افق آینده (Exploring)',
      color: '#F59E0B',
      descEn: 'Next frontier: AI agents, log correlation, and AI solutions.',
      descFa: 'مرزهای آینده: عامل‌های هوش مصنوعی و تحلیل لاگ.',
    },
  ];

  const quadrants: { id: 'networking' | 'systems' | 'automation' | 'ai'; labelEn: string; labelFa: string }[] = [
    { id: 'networking', labelEn: 'Networking & Routing', labelFa: 'شبکه و روتینگ' },
    { id: 'systems', labelEn: 'Systems & Virtualization', labelFa: 'سیستم‌ها و مجازی‌سازی' },
    { id: 'automation', labelEn: 'Automation & IaC', labelFa: 'اتوماسیون و کدنویسی' },
    { id: 'ai', labelEn: 'AI & Architecture', labelFa: 'هوش مصنوعی و معماری' },
  ];

  const filteredItems = activeRing === 'all'
    ? TECH_RADAR_ITEMS
    : TECH_RADAR_ITEMS.filter((item) => item.ring === activeRing);

  return (
    <div className="py-12 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <Target className="w-5 h-5 text-emerald-400" />
            <span>{lang === 'fa' ? 'رادار تکنولوژی زیرساخت (Tech Radar)' : 'Infrastructure Technology Radar'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'fa'
              ? 'ماتریس طبقه‌بندی تکنولوژی‌ها بر اساس بلوغ استفاده از Core تا Exploring'
              : 'Classifying technology adoption from Core daily production to the AI Automation frontier.'}
          </p>
        </div>

        {/* Ring Filter Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveRing('all')}
            className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
              activeRing === 'all' ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            All Rings
          </button>
          {rings.map((r) => (
            <button
              key={r.id}
              onClick={() => setActiveRing(r.id)}
              className={`px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeRing === r.id ? 'bg-emerald-500/20 text-emerald-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {lang === 'fa' ? r.labelFa.split(' ')[1] : r.labelEn.split(' ')[1]}
            </button>
          ))}
        </div>
      </div>

      {/* Radar Matrix Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Quadrants Grid (8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {quadrants.map((quad) => {
            const itemsInQuad = filteredItems.filter((i) => i.quadrant === quad.id);
            return (
              <div
                key={quad.id}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <span className="font-mono text-xs font-bold text-slate-200">
                    {lang === 'fa' ? quad.labelFa : quad.labelEn}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    {itemsInQuad.length} Techs
                  </span>
                </div>

                <div className="space-y-1.5">
                  {itemsInQuad.map((item, idx) => {
                    const isSelected = selectedItem?.name === item.name;
                    const ringConfig = rings.find((r) => r.id === item.ring);
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedItem(item)}
                        className={`w-full p-2 rounded-lg text-left transition-all flex items-center justify-between gap-2 text-xs font-mono cursor-pointer ${
                          isSelected
                            ? 'bg-slate-800 border border-emerald-500/50 text-white shadow'
                            : 'bg-slate-950/60 hover:bg-slate-800/60 border border-transparent text-slate-300'
                        }`}
                      >
                        <span className="truncate">{item.name}</span>
                        <span
                          className="text-[10px] px-1.5 py-0.5 rounded uppercase font-bold shrink-0"
                          style={{
                            backgroundColor: `${ringConfig?.color}20`,
                            color: ringConfig?.color,
                            border: `1px solid ${ringConfig?.color}40`,
                          }}
                        >
                          {item.ring}
                        </span>
                      </button>
                    );
                  })}
                  {itemsInQuad.length === 0 && (
                    <div className="text-xs text-slate-600 font-mono py-2 text-center">
                      No items in this ring
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Inspected Technology Card & Ring Guide (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          {selectedItem && (
            <div className="p-5 rounded-xl bg-slate-900 border border-emerald-500/30 shadow-xl space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold uppercase">
                  RADAR INSPECTOR
                </span>
                <span className="text-xs font-mono text-slate-500 uppercase">
                  {selectedItem.quadrant}
                </span>
              </div>

              <h4 className="text-base font-bold text-white font-mono">
                {selectedItem.name}
              </h4>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span>Maturity Ring:</span>
                <span className="font-bold text-emerald-400 uppercase">{selectedItem.ring}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1 border-t border-slate-800">
                {lang === 'fa' ? selectedItem.descriptionFa : selectedItem.descriptionEn}
              </p>
            </div>
          )}

          {/* Ring Legend & Philosophy */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono font-bold text-slate-300 uppercase">
              {lang === 'fa' ? 'راهنمای حلقه‌های رادار:' : 'Radar Rings Legend:'}
            </div>
            {rings.map((ring) => (
              <div key={ring.id} className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold" style={{ color: ring.color }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ring.color }} />
                  <span>{lang === 'fa' ? ring.labelFa : ring.labelEn}</span>
                </div>
                <p className="text-[11px] text-slate-400 pl-4">
                  {lang === 'fa' ? ring.descFa : ring.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
