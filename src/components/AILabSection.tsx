import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { AI_AUTOMATION_PIPELINE } from '../data/content';
import { 
  Cpu, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Copy, 
  Check, 
  Layers, 
  Activity,
  Zap,
  Play
} from 'lucide-react';

export const AILabSection: React.FC = () => {
  const { lang } = useApp();
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [copiedTask, setCopiedTask] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);

  const presets = [
    {
      promptEn: 'Create isolated Guest VLAN 150 with DHCP pool 10.150.0.0/24 and block inter-VLAN routing to Server VLAN 20.',
      promptFa: 'یک VLAN مهمان ایزوله به شماره ۱۵۰ با ساب‌نت 10.150.0.0/24 بساز و دسترسی آن به VLAN سرورها (20) را مسدود کن.',
      intent: {
        action: 'CREATE_ISOLATED_VLAN',
        vlan_id: 150,
        name: 'Guest-Secure-VLAN',
        dhcp_range: '10.150.0.10 - 10.150.0.250',
        gateway: '10.150.0.1/24',
        isolation_policy: 'DENY_INTER_VLAN_TO_VLAN20',
      },
      ansibleTask: `- name: Deploy Guest VLAN 150 on Cisco Core
  cisco.ios.ios_vlans:
    config:
      - vlan_id: 150
        name: Guest-Secure-VLAN
        state: active

- name: Apply Strict ACL to Prevent Server VLAN Leakage
  cisco.ios.ios_acls:
    config:
      - name: GUEST_ISOLATION_ACL
        standard: false
        aces:
          - sequence: 10
            grant: deny
            protocol: ip
            source: 10.150.0.0 0.0.0.255
            destination: 10.20.0.0 0.0.0.255
          - sequence: 20
            grant: permit
            protocol: ip
            source: any
            destination: any`,
    },
    {
      promptEn: 'Rotate SSH AAA credentials across all 12 edge switches and verify zero config drift.',
      promptFa: 'پسورد و احراز هویت SSH روی تمام ۱۲ سوئیچ لبه را روتِیت کن و از عدم انحراف کانفیگ مطمئن شو.',
      intent: {
        action: 'ROTATE_CREDENTIALS_AND_AUDIT',
        target_group: 'edge_switches',
        method: 'TACACS_PLUS_WITH_RADIUS_FALLBACK',
        drift_check: true,
      },
      ansibleTask: `- name: Rotate AAA Secret Credentials
  cisco.ios.ios_config:
    lines:
      - aaa authentication login default group rad_tac local
      - enable secret 9 $9$mZ7X$k0p9...
  loop: "{{ groups['edge_switches'] }}"

- name: Perform Post-Change Drift Audit
  cisco.ios.ios_command:
    commands:
      - show running-config | include aaa
  register: post_audit
  failed_when: "'group rad_tac' not in post_audit.stdout[0]"`,
    },
    {
      promptEn: 'Detect abnormal packet bursts on VoIP VLAN 50 and tune QoS queue priority.',
      promptFa: 'ترافیک غیرعادی روی VLAN ۵۰ صوت را شناسایی کن و اولویت صف QoS را برای جلوگیری از تاخیر صدا ارتقا بده.',
      intent: {
        action: 'AUTO_TUNE_VOICE_QOS',
        vlan_id: 50,
        dscp_target: 'EF (46)',
        queue_strategy: 'STRICT_PRIORITY_P1',
      },
      ansibleTask: `- name: Ensure DSCP EF Priority on Switchports
  cisco.ios.ios_config:
    lines:
      - class-map match-any VOICE_TRAFFIC
      - match ip dscp ef
      - policy-map WAN_QOS_POLICY
      - class VOICE_TRAFFIC
      - priority percent 30
      - class class-default
      - fair-queue`,
    },
  ];

  const currentPreset = presets[selectedPreset];

  const handleSimulateRun = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
    }, 1200);
  };

  const handleCopyAnsible = () => {
    navigator.clipboard.writeText(currentPreset.ansibleTask);
    setCopiedTask(true);
    setTimeout(() => setCopiedTask(false), 2000);
  };

  return (
    <section id="ai-lab" className="py-20 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>05 / AI × NETWORK AUTOMATION & LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'آزمایشگاه اتوماسیون شبکه و هوش مصنوعی' : 'The AI & Automation Laboratory'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'چگونه هوش مصنوعی، خطاهای انسانی را در مدیریت زیرساخت به صفر می‌رساند: از ترجمه قصد طبیعی (Intent) به تسک‌های انسیبل تا راستی‌آزمایی خودکار وضعیت شبکه.'
              : 'Bridging deterministic network engineering with autonomous AI: Intent-based translation, automated validation, and self-healing infrastructure.'}
          </p>
        </div>

        {/* 4-Step Pipeline Visualizer */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span className="text-emerald-400">#</span>
              <span>{lang === 'fa' ? 'پایپ‌لاین ۴ مرحله‌ای اتوماسیون شبکه با هوش مصنوعی' : 'Autonomous 4-Stage Network Change Pipeline'}</span>
            </h3>
            <span className="text-xs font-mono text-slate-500 hidden sm:inline">ZERO-DRIFT GUARANTEE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {AI_AUTOMATION_PIPELINE.map((stage) => (
              <div
                key={stage.step}
                className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all space-y-3 relative overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-mono text-xs font-bold">
                    0{stage.step}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">STAGE {stage.step}</span>
                </div>

                <h4 className="text-sm font-bold text-white font-mono group-hover:text-emerald-300 transition-colors">
                  {lang === 'fa' ? stage.titleFa : stage.titleEn}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'fa' ? stage.descFa : stage.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Interactive Intent-to-Ansible Simulator */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'fa' ? 'شبیه‌ساز تعاملی ترجمه قصد (Intent-Based Network Simulator)' : 'Interactive Natural Language Intent Simulator'}</span>
            </h3>
            <span className="text-xs font-mono text-emerald-400">TRY PRESET SCENARIOS</span>
          </div>

          {/* Preset Prompts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {presets.map((p, idx) => {
              const isSelected = selectedPreset === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedPreset(idx)}
                  className={`p-3.5 rounded-xl border text-left rtl:text-right transition-all font-mono text-xs cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800 border-emerald-500 text-white shadow-lg'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="text-[10px] text-emerald-400 font-bold mb-1">
                    INTENT SCENARIO 0{idx + 1}
                  </div>
                  <div className="text-slate-200 font-sans line-clamp-2 leading-relaxed">
                    {lang === 'fa' ? p.promptFa : p.promptEn}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage Result Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
            
            {/* Left: Input Prompt & JSON Parse (5 cols) */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase font-bold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>STEP 1: NATURAL LANGUAGE INPUT</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 leading-relaxed font-sans">
                  "{lang === 'fa' ? currentPreset.promptFa : currentPreset.promptEn}"
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase font-bold flex items-center gap-2 pt-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>STEP 2: PARSED STRUCTURAL JSON INTENT</span>
                </div>
                <pre className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                  {JSON.stringify(currentPreset.intent, null, 2)}
                </pre>
              </div>

              <button
                onClick={handleSimulateRun}
                disabled={isExecuting}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                {isExecuting ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                    <span>VALIDATING & EXECUTING PLAYBOOK...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>TRIGGER IDEMPOTENT ANSIBLE RUN</span>
                  </>
                )}
              </button>
            </div>

            {/* Right: Generated Ansible Task & CLI Output (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#060910] border border-slate-800 overflow-hidden font-mono text-xs space-y-0">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 font-bold text-[11px]">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>GENERATED ANSIBLE PLAYBOOK (IDEMPOTENT & AUDITED)</span>
                </div>
                <button
                  onClick={handleCopyAnsible}
                  className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Copy Playbook"
                >
                  {copiedTask ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <pre className="p-4 sm:p-5 text-[11px] sm:text-xs text-slate-200 overflow-x-auto leading-relaxed max-h-[340px]">
                {currentPreset.ansibleTask}
              </pre>

              <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Syntax Check: PASS | Safety Gate: PASS</span>
                </span>
                <span className="text-slate-500">Engine: Ansible Core 2.16</span>
              </div>
            </div>

          </div>
        </div>

        {/* Future Vision: AI Solution Architect Block */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-[#101424] to-[#1a1438] border border-purple-500/30 space-y-4 relative overflow-hidden">
          <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>THE STRATEGIC VECTOR & FUTURE ROLE</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'معمار راهکارهای هوش مصنوعی (AI Solution Architect)' : 'Architecting Infrastructure for the AI Workload Era'}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            {lang === 'fa'
              ? 'مدل‌های هوش مصنوعی و پردازش‌های سنگین داده نیازمند شبکه‌هایی با تاخیر نزدیک به صفر، پروتکل‌های RoCEv2، ایزولاسیون سخت‌گیرانه، استوریج‌های پرسرعت NVMe-oF و خطوط لوله استقرار خودکار هستند. تخصص من در نقطه تلاقی فیزیک شبکه، هایپروایزرها و هوش مصنوعی قرار دارد تا سازمان‌ها زیرساختی آماده آینده داشته باشند.'
              : 'Enterprise AI is not just about LLM prompts; it is fundamentally about network throughput, RoCEv2 low-latency fabrics, GPU cluster interconnects, hardened tenant isolation, and autonomous drift correction. My trajectory as an AI Solution Architect unites foundational networking with modern machine intelligence.'}
          </p>
        </div>

      </div>
    </section>
  );
};
