import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CERTIFICATIONS } from '../data/content';
import { Certification } from '../types';
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  BookOpen, 
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const { lang } = useApp();
  const [selectedVendor, setSelectedVendor] = useState<'all' | 'Cisco' | 'MikroTik' | 'Linux' | 'Microsoft' | 'Academic'>('all');

  const filteredCerts = selectedVendor === 'all'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.vendor === selectedVendor);

  const vendorBadges: Record<string, string> = {
    Cisco: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
    MikroTik: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
    Linux: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
    Microsoft: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
    Academic: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  };

  return (
    <section id="certifications" className="py-20 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>07 / ACCREDITATION & CURRICULUM ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'مدارک تخصصی، سرفصل‌ها و استانداردهای مهندسی' : 'Certifications & Continuous Learning Path'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'تعهد عملیاتی به رعایت استانداردهای بین‌المللی شبکه‌های سیسکو، میکروتیک، لینوکس و مبانی مهندسی کامپیوتر با شفافیت کامل در سرفصل‌ها.'
              : 'Verifiable curriculum mastery across enterprise routing, security hardening, Linux systems administration, and university academic engineering.'}
          </p>
        </div>

        {/* Vendor Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 text-xs font-mono">
          {(['all', 'Cisco', 'MikroTik', 'Linux', 'Microsoft', 'Academic'] as const).map((vendor) => (
            <button
              key={vendor}
              onClick={() => setSelectedVendor(vendor)}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer capitalize ${
                selectedVendor === vendor
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {vendor === 'all' ? `All Certifications (${CERTIFICATIONS.length})` : vendor}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => {
            const badgeClass = vendorBadges[cert.vendor] || 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border ${badgeClass}`}>
                      {cert.vendor}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {cert.code}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="text-[11px] font-mono text-emerald-400 font-semibold">
                    {cert.category}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {lang === 'fa' ? cert.descriptionFa : cert.descriptionEn}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 text-[10px] font-mono border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-[11px]">
                    {lang === 'fa' ? `اعتبار: ${cert.issued}` : `Status: ${cert.issued}`}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
