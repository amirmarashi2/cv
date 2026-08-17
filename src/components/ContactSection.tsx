import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PERSONAL_INFO } from '../data/content';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  FileText 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang, setIsResumeOpen } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectType: 'enterprise_network',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate sending email / opening mailto
    const subject = encodeURIComponent(`[Inquiry] ${formData.projectType.toUpperCase()} - ${formData.organization || formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`);
    
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <Mail className="w-3.5 h-3.5" />
            <span>09 / GET IN TOUCH & CONSULTATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'ارتباط کاری، مشاوره و همکاری' : 'Start an Engineering Consultation'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'آماده همکاری در پروژه‌های طراحی و عیب‌یابی شبکه سازمانی، راه‌اندازی مراکز تلفن VoIP، امن‌سازی سوئیچ‌ها و پیاده‌سازی پایپ‌لاین‌های خودکارسازی.'
              : 'Available for enterprise infrastructure audits, multi-vendor network architecture, VoIP migrations, and AI automation consulting.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Telemetry Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Availability Status Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {lang === 'fa' ? 'وضعیت کاری: آماده همکاری و مشاوره' : 'STATUS: OPEN FOR SELECT CONSULTING'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'fa'
                  ? 'پذیرش پروژه‌های مشاوره‌ای، طراحی و بازطراحی زیرساخت، رفع اشکال فوری شبکه‌های سازمانی و استقرار اتوماسیون.'
                  : 'Open to enterprise advisory roles, network stabilization audits, and remote/on-site infrastructure deployments.'}
              </p>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Response Time: &lt; 12 Hours</span>
                </span>
                <span>Timezone: UTC+3:30</span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">DIRECT EMAIL</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">PHONE / TELEGRAM</div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] transition-colors"
                >
                  Telegram
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">LOCATION & SCOPE</div>
                  <div className="font-bold text-white">
                    {lang === 'fa' ? PERSONAL_INFO.locationFa : PERSONAL_INFO.locationEn}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-mono text-slate-200 hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-mono text-slate-200 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Download CV CTA */}
            <button
              onClick={() => setIsResumeOpen(true)}
              className="w-full p-3.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'fa' ? 'مشاهده و دانلود رزومه کامل (PDF)' : 'View & Download Full Resume (PDF Ready)'}</span>
            </button>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
            
            <div className="space-y-1 pb-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'fa' ? 'ارسال درخواست مشاوره یا پروژه' : 'Direct Project Inquiry Form'}</span>
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'fa'
                  ? 'جزئیات زیرساخت، تعداد نودها و اهداف پروژه خود را بنویسید.'
                  : 'Describe your current infrastructure bottlenecks, node counts, or automation requirements.'}
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-4 animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white font-mono">
                  {lang === 'fa' ? 'پیام شما با موفقیت ثبت شد' : 'Consultation Request Dispatched'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {lang === 'fa'
                    ? 'از ارتباط شما سپاسگزارم. پس از بررسی نیازمندی‌های فنی، در کمتر از ۱۲ ساعت پاسخ ارسال خواهد شد.'
                    : 'Thank you for reaching out. I will review your requirements and respond with a structured technical proposal shortly.'}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'fa' ? 'ارسال پیام دیگر' : 'Send Another Inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-semibold flex items-center justify-between">
                      <span>{lang === 'fa' ? 'نام و نام خانوادگی' : 'Full Name'} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 text-white placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-semibold flex items-center justify-between">
                      <span>{lang === 'fa' ? 'آدرس ایمیل' : 'Work Email'} *</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 text-white placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-semibold">
                      {lang === 'fa' ? 'نام سازمان / شرکت' : 'Organization / Company'}
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Healthcare Corp"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 text-white placeholder:text-slate-600 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-slate-400 font-semibold">
                      {lang === 'fa' ? 'موضوع و حوزه پروژه' : 'Project Domain'}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 text-white focus:outline-none cursor-pointer"
                    >
                      <option value="enterprise_network">Enterprise Network Architecture (Cisco/MikroTik)</option>
                      <option value="voip_migration">Unified VoIP & PBX Migration (Issabel/Asterisk)</option>
                      <option value="security_aaa">Security Hardening & 802.1X FreeRADIUS</option>
                      <option value="ai_automation">AI-Driven Automation & Ansible Pipelines</option>
                      <option value="virtualization">Proxmox / Hypervisor Private Cloud</option>
                      <option value="general_audit">Full Infrastructure Health Audit</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-400 font-semibold">
                    {lang === 'fa' ? 'توضیحات و نیازمندی‌های پروژه' : 'Project Scope & Requirements'} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'fa' ? 'درباره معماری فعلی، تعداد نودها، مشکلات پایداری یا اهداف اتوماسیون بنویسید...' : 'Detail your network topology, current pain points, device models, or automation goals...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-emerald-500 text-white placeholder:text-slate-600 focus:outline-none font-sans text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'fa' ? 'ثبت و ارسال پیام مشاوره' : 'Submit Consultation Request'}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
