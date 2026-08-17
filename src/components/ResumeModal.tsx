import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PERSONAL_INFO, SKILL_ITEMS, CAREER_TIMELINE, CERTIFICATIONS } from '../data/content';
import { 
  X, 
  Printer, 
  Download, 
  Check, 
  Copy, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ShieldCheck, 
  Network, 
  Terminal, 
  Cpu, 
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const ResumeModal: React.FC = () => {
  const { lang, isResumeOpen, setIsResumeOpen } = useApp();
  const [copied, setCopied] = useState(false);

  if (!isResumeOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyAll = () => {
    const text = `Seyed Amirhossein Marashi (Amir)
Network & Infrastructure Engineer | NetMinds
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.locationEn}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY:
${PERSONAL_INFO.bioEn}

CORE EXPERTISE:
- Cisco Enterprise Routing & Switching (VLAN, STP, OSPF, BGP, Multicast, AAA)
- MikroTik RouterOS (PCC Load Balancing, WireGuard, Firewall, Mangle)
- Linux Systems (Debian, Ubuntu, Rocky Linux, systemd, hardening)
- VoIP Telephony (Issabel PBX, Asterisk Core, SIP/RTP QoS)
- Virtualization (Proxmox VE, VMware ESXi, ZFS Pools)
- Network Automation (Ansible, Python, AI-driven intent validation)

CERTIFICATIONS:
${CERTIFICATIONS.map((c) => `- ${c.title} (${c.vendor}) [${c.issued}]`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white print:static">
      
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-y-auto print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Floating Action Controls (Hidden on Print) */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-3 bg-slate-950/95 border-b border-slate-800 backdrop-blur-md print:hidden">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-bold">CURRICULUM VITAE — SEYED AMIRHOSSEIN MARASHI</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy Text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={() => setIsResumeOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Canvas */}
        <div className="p-6 sm:p-10 space-y-8 print:p-0 print:text-black">
          
          {/* Header */}
          <div className="space-y-4 pb-6 border-b border-slate-800 print:border-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black font-mono tracking-tight">
                  {lang === 'fa' ? PERSONAL_INFO.fullNameFa : PERSONAL_INFO.fullNameEn}
                </h1>
                <div className="text-sm font-mono text-emerald-400 print:text-emerald-700 font-bold mt-1">
                  {lang === 'fa' ? PERSONAL_INFO.titleFa : PERSONAL_INFO.titleEn}
                </div>
              </div>

              <div className="text-xs font-mono text-slate-300 print:text-slate-700 space-y-1 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{PERSONAL_INFO.locationEn}</span>
                </div>
              </div>
            </div>

            {/* Executive Bio */}
            <p className="text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed font-sans">
              {lang === 'fa' ? PERSONAL_INFO.bioFa : PERSONAL_INFO.bioEn}
            </p>
          </div>

          {/* Technical Skills Categorized */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold font-mono text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 print:border-slate-300 pb-1">
              {lang === 'fa' ? 'ماتریس مهارت‌های فنی' : 'Technical Competency Matrix'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-slate-950 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-1">
                <div className="font-bold text-white print:text-black">Enterprise Networking & Routing:</div>
                <div className="text-slate-300 print:text-slate-700">
                  Cisco IOS (Catalyst 3750/2960), MikroTik RouterOS v7, OSPF, BGP, VLANs, MSTP, IGMP Snooping, Multi-WAN PCC.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-1">
                <div className="font-bold text-white print:text-black">Linux, Security & Virtualization:</div>
                <div className="text-slate-300 print:text-slate-700">
                  Debian/Ubuntu/Rocky, FreeRADIUS 802.1X AAA, WireGuard VPN, Proxmox VE, VMware ESXi, ZFS Storage, Docker.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-1">
                <div className="font-bold text-white print:text-black">VoIP & Unified Telephony:</div>
                <div className="text-slate-300 print:text-slate-700">
                  Issabel PBX, Asterisk Core, SIP Trunks, Grandstream FXO/FXS Gateways, IVR Trees, Voice QoS (DSCP EF).
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 print:bg-slate-50 border border-slate-800 print:border-slate-200 space-y-1">
                <div className="font-bold text-white print:text-black">Automation & AI Solutions:</div>
                <div className="text-slate-300 print:text-slate-700">
                  Ansible IaC Playbooks, Python (Netmiko/FastAPI), Intent-based AI Agents, Zero-drift State Verification.
                </div>
              </div>
            </div>
          </div>

          {/* Professional Progression & Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold font-mono text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 print:border-slate-300 pb-1">
              {lang === 'fa' ? 'سوابق و تکامل حرفه‌ای' : 'Professional Progression & Engineering Experience'}
            </h2>
            <div className="space-y-4 text-xs font-mono">
              {CAREER_TIMELINE.slice(0, 4).map((phase, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-slate-400">
                    <span className="font-bold text-white print:text-black text-sm">
                      {lang === 'fa' ? phase.titleFa : phase.titleEn}
                    </span>
                    <span>{phase.period}</span>
                  </div>
                  <div className="text-emerald-400 print:text-emerald-700 text-[11px]">
                    {lang === 'fa' ? phase.roleFa : phase.roleEn}
                  </div>
                  <p className="text-slate-300 print:text-slate-700 font-sans text-xs leading-relaxed">
                    {lang === 'fa' ? phase.descriptionFa : phase.descriptionEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Credentials */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold font-mono text-emerald-400 print:text-emerald-800 uppercase tracking-wider border-b border-slate-800 print:border-slate-300 pb-1">
              {lang === 'fa' ? 'مدارک و دوره‌های تخصصی' : 'Certifications & Accreditations'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-2 rounded bg-slate-950 print:bg-white border border-slate-800 print:border-slate-300 flex items-center justify-between"
                >
                  <div>
                    <div className="font-bold text-white print:text-black">{cert.title}</div>
                    <div className="text-[11px] text-slate-400 print:text-slate-600">{cert.vendor} • {cert.code}</div>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 print:bg-slate-200 text-emerald-400 print:text-emerald-800 uppercase font-bold">
                    {cert.issued}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Language */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800 print:border-slate-300 text-xs font-mono">
            <div className="space-y-1">
              <div className="font-bold text-emerald-400 print:text-emerald-800 uppercase">EDUCATION</div>
              <div className="text-white print:text-black font-bold">B.Sc. in Computer Engineering</div>
              <div className="text-slate-400 print:text-slate-600">Islamic Azad University, Shiraz Branch</div>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-emerald-400 print:text-emerald-800 uppercase">LANGUAGES</div>
              <div className="text-white print:text-black">Persian (Native) | English (Professional Working Proficiency)</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
