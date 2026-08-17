import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Network, Server, PhoneCall, Cpu, Sparkles, ChevronRight, Check } from 'lucide-react';

interface StackBranch {
  id: string;
  nameEn: string;
  nameFa: string;
  icon: string;
  color: string;
  nodes: {
    name: string;
    detailsEn: string;
    detailsFa: string;
  }[];
}

const STACK_BRANCHES: StackBranch[] = [
  {
    id: 'network',
    nameEn: 'NETWORK',
    nameFa: 'شبکه و زیرساخت',
    icon: 'Network',
    color: '#38BDF8',
    nodes: [
      { name: 'Cisco Routing & Switching', detailsEn: 'Catalyst 3750/2960, L3 SVI, OSPF, BGP, MSTP, Inter-VLAN', detailsFa: 'سوئیچ‌های لایه ۳، پروتکل‌های OSPF و BGP، سوییچینگ پیشرفته' },
      { name: 'MikroTik RouterOS', detailsEn: 'PCC Multi-WAN load balancing, Mangle firewall, WireGuard tunnels', detailsFa: 'لود بالانسینگ چند اینترنت، فایروال منگل و تانل وایرگارد' },
      { name: 'Multicast & IPTV', detailsEn: 'IGMP Snooping, IGMP Querier, PIM-SM, zero-leak Wi-Fi isolation', detailsFa: 'توزیع استریم مالتی‌کست بدون افت سرعت شبکه بی‌سیم' },
      { name: 'Network Security & AAA', detailsEn: 'FreeRADIUS, 802.1X, DHCP Snooping, Dynamic ARP Inspection', detailsFa: 'احراز هویت متمرکز تجهیزات و امنیت پورت‌های سوئیچ' },
    ],
  },
  {
    id: 'system',
    nameEn: 'SYSTEM',
    nameFa: 'سیستم و مجازی‌سازی',
    icon: 'Server',
    color: '#A855F7',
    nodes: [
      { name: 'Linux Server Administration', detailsEn: 'Ubuntu, Debian, Rocky Linux, systemd, SSH hardening, UFW/Iptables', detailsFa: 'مدیریت و امن‌سازی سرورهای لینوکس، سرویس‌ها و فایروال' },
      { name: 'Virtualization & Hypervisors', detailsEn: 'Proxmox VE 8.x, VMware ESXi, ZFS storage pools, vSwitches', detailsFa: 'کلاسترهای هایپروایزر پرومکس و ESXi، استوریج ZFS' },
      { name: 'Docker & Microservices', detailsEn: 'Nextcloud, Jitsi, ERPNext, Vaultwarden, Nginx Proxy Manager', detailsFa: 'کانتینرهای داکر سازمانی و برنامه‌های سلف‌هاستد' },
    ],
  },
  {
    id: 'comm',
    nameEn: 'COMMUNICATION',
    nameFa: 'صوت و تلفن تحت شبکه',
    icon: 'PhoneCall',
    color: '#34D399',
    nodes: [
      { name: 'VoIP & Unified PBX', detailsEn: 'Issabel PBX, Asterisk Core, SIP trunking, multi-level IVR trees', detailsFa: 'مراکز تلفن تحت شبکه، تلفن گویای هوشمند و ترانک SIP' },
      { name: 'FXO / FXS Gateways', detailsEn: 'Grandstream GXW/HT series, disconnect tone tuning, analog fax bridging', detailsFa: 'اتصال خطوط آنالوگ شهری با گیت‌وی‌های گرنداستریم' },
      { name: 'Voice QoS Optimization', detailsEn: 'Dedicated Voice VLAN 50, DSCP EF tagging, RTP jitter buffers', detailsFa: 'اولویت‌بندی ترافیک صوت و تضمین شفافیت مکالمات' },
    ],
  },
  {
    id: 'auto',
    nameEn: 'AUTOMATION',
    nameFa: 'اتوماسیون و هوش مصنوعی',
    icon: 'Cpu',
    color: '#00F5A0',
    nodes: [
      { name: 'Ansible Playbooks', detailsEn: 'Automated multi-vendor VLAN rollouts, switch backups, drift validation', detailsFa: 'پلی‌بوک‌های انسیبل برای اعمال سریع کانفیگ‌ها و بک‌آپ' },
      { name: 'Python Network Scripting', detailsEn: 'FastAPI, Netmiko, Paramiko, structured JSON telemetry collectors', detailsFa: 'اسکریپت‌های پایتون و وب‌سرویس‌ها جهت ارتباط با سوئیچ‌ها' },
      { name: 'AI Network Agents', detailsEn: 'Natural language intent parsing to validated network actions', detailsFa: 'تبدیل متن محاوره‌ای به تغییرات کنترل‌شده شبکه' },
      { name: 'AI Solution Architecture', detailsEn: 'Designing scalable infrastructure for enterprise AI model workloads', detailsFa: 'معماری زیرساخت‌های پایدار برای مدل‌های هوش مصنوعی' },
    ],
  },
];

export const NetworkStackMap: React.FC = () => {
  const { lang } = useApp();
  const [selectedBranch, setSelectedBranch] = useState<string>('auto');

  const activeBranchData = STACK_BRANCHES.find((b) => b.id === selectedBranch) || STACK_BRANCHES[3];

  return (
    <div className="py-12 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <span className="text-emerald-400">#</span>
            <span>{lang === 'fa' ? 'کاوش در درخت مهارت‌های من (Explore My Stack)' : 'Explore My Stack — Interactive Mindmap'}</span>
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            {lang === 'fa'
              ? 'ارتباط ۴ ستون اصلی تخصص‌های امیر مرعشی از شبکه سنتی تا اتوماسیون هوش مصنوعی'
              : 'Interlocking technical pillars from Physical Networks to AI-driven Infrastructure.'}
          </p>
        </div>
        <span className="text-xs font-mono text-emerald-400 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
          4 PILLARS
        </span>
      </div>

      {/* Central Hub & 4 Branches Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Left Interactive Tree (7 cols) */}
        <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 relative space-y-6 tech-grid">
          
          {/* Central Hub */}
          <div className="flex justify-center">
            <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-blue-950 border-2 border-emerald-400 glow-accent shadow-xl text-center space-y-0.5">
              <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest">
                CORE HUB
              </div>
              <div className="text-base sm:text-lg font-bold font-mono text-white">
                AMIR MARASHI
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                NetMinds Infrastructure
              </div>
            </div>
          </div>

          {/* 4 Branch Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {STACK_BRANCHES.map((branch) => {
              const isSelected = selectedBranch === branch.id;
              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch.id)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between gap-3 font-mono cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/95 shadow-lg'
                      : 'bg-slate-950/70 hover:bg-slate-800/60 border-slate-800'
                  }`}
                  style={{
                    borderColor: isSelected ? branch.color : undefined,
                    boxShadow: isSelected ? `0 0 20px ${branch.color}25` : undefined,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: branch.color }}
                    >
                      {lang === 'fa' ? branch.nameFa : branch.nameEn}
                    </span>
                    <span className="text-[10px] text-slate-500">{branch.nodes.length} Elements</span>
                  </div>

                  <div className="space-y-1">
                    {branch.nodes.slice(0, 2).map((node, nIdx) => (
                      <div key={nIdx} className="text-xs text-slate-300 truncate flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: branch.color }} />
                        <span className="truncate">{node.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800">
                    <span>{isSelected ? 'ACTIVE VIEW' : 'Click to inspect'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Active Branch Deep Dive Drawer (5 cols) */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-[#0b121e] to-[#0e1726] border border-slate-700/80 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">BRANCH INSPECTOR</span>
              <h4 className="text-lg font-bold text-white font-mono" style={{ color: activeBranchData.color }}>
                {lang === 'fa' ? activeBranchData.nameFa : activeBranchData.nameEn}
              </h4>
            </div>
            <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center" style={{ color: activeBranchData.color }}>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-3">
            {activeBranchData.nodes.map((node, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1"
              >
                <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" style={{ color: activeBranchData.color }} />
                  <span>{node.name}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-5">
                  {lang === 'fa' ? node.detailsFa : node.detailsEn}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
