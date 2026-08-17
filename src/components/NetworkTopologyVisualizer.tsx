import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Network, 
  Cpu, 
  Server, 
  ShieldCheck, 
  Terminal, 
  PhoneCall, 
  Layers, 
  Activity,
  Zap,
  Radio,
  Share2
} from 'lucide-react';

interface NodeData {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  icon: string;
  color: string;
  protocol: string;
  status: string;
  descriptionEn: string;
  descriptionFa: string;
}

const NODES: NodeData[] = [
  {
    id: 'center',
    name: 'NETWORK + AI',
    category: 'Core Hub',
    x: 50,
    y: 50,
    icon: 'Cpu',
    color: '#00F5A0',
    protocol: 'Neural Orchestrator',
    status: 'OPTIMAL / ONLINE',
    descriptionEn: 'Intelligent synthesis of deterministic network engineering and autonomous AI automation.',
    descriptionFa: 'تلفیق هوشمند مهندسی شبکه قطعی با اتوماسیون هوش مصنوعی و پایپ‌لاین‌های خودکار.',
  },
  {
    id: 'cisco',
    name: 'Cisco IOS',
    category: 'Enterprise Switching',
    x: 22,
    y: 28,
    icon: 'Network',
    color: '#38BDF8',
    protocol: 'OSPF / BGP / STP / AAA',
    status: 'Active L3 Core',
    descriptionEn: 'Campus switching, VLAN segmentation, IGMP Multicast, and secure AAA access.',
    descriptionFa: 'سوئیچینگ سازمانی، تفکیک VLANها، مالتی‌کست و احراز هویت متمرکز.',
  },
  {
    id: 'mikrotik',
    name: 'MikroTik',
    category: 'Edge & Routing',
    x: 78,
    y: 26,
    icon: 'Radio',
    color: '#F59E0B',
    protocol: 'RouterOS v7 / PCC / Mangle',
    status: 'Multi-WAN Gateway',
    descriptionEn: 'Multi-ISP PCC load balancing, stateful firewall, and WireGuard tunnels.',
    descriptionFa: 'لود بالانسینگ چند خط اینترنت، فایروال لایه ۷ و تانل‌های رمزنگاری.',
  },
  {
    id: 'linux',
    name: 'Linux Systems',
    category: 'Infrastructure OS',
    x: 18,
    y: 68,
    icon: 'Terminal',
    color: '#A78BFA',
    protocol: 'Debian / Ubuntu / Rocky',
    status: 'Systemd Core Active',
    descriptionEn: 'Hardened servers, FreeRADIUS AAA, DNS/DHCP, and automated disaster recovery.',
    descriptionFa: 'سرورهای لینوکس، احراز هویت FreeRADIUS، سرویس‌های DNS و بک‌آپ خودکار.',
  },
  {
    id: 'ansible',
    name: 'Ansible',
    category: 'IaC & Automation',
    x: 82,
    y: 65,
    icon: 'Zap',
    color: '#EF4444',
    protocol: 'YAML / Playbooks / SSH',
    status: 'Idempotent Engine',
    descriptionEn: 'Automated mass VLAN deployment, password rotation, and compliance auditing.',
    descriptionFa: 'اعمال دسته‌جمعی کانفیگ‌ها، چرخش پسورد و بررسی عدم انحراف تنظیمات.',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Containers',
    x: 35,
    y: 86,
    icon: 'Layers',
    color: '#60A5FA',
    protocol: 'Compose / Overlays',
    status: '18 Containers Active',
    descriptionEn: 'Nextcloud, Jitsi, ERPNext, Vaultwarden, and isolated microservices.',
    descriptionFa: 'کانتینرهای سازمانی، نکست‌کلود، پسورد منیجر و پروکسی معکوس.',
  },
  {
    id: 'voip',
    name: 'VoIP / Issabel',
    category: 'Telephony',
    x: 65,
    y: 86,
    icon: 'PhoneCall',
    color: '#34D399',
    protocol: 'SIP / RTP / FXO / IVR',
    status: 'Asterisk Trunk Up',
    descriptionEn: 'Unified IP communications, multi-branch SIP trunks, and IVR routing trees.',
    descriptionFa: 'مراکز تلفن تحت شبکه، ترانک‌های SIP، تلفن گویا و گیت‌وی FXO/FXS.',
  },
  {
    id: 'virt',
    name: 'Virtualization',
    category: 'Hypervisors',
    x: 14,
    y: 48,
    icon: 'Server',
    color: '#F472B6',
    protocol: 'Proxmox VE / ESXi',
    status: 'ZFS Pool Healthy',
    descriptionEn: 'High-density VM virtualization, virtual networking, and GNS3 lab environments.',
    descriptionFa: 'کلاسترهای Proxmox و ESXi، سوییچینگ مجازی و محیط‌های تست GNS3.',
  },
  {
    id: 'security',
    name: 'Zero Trust & AAA',
    category: 'Hardening',
    x: 86,
    y: 46,
    icon: 'ShieldCheck',
    color: '#10B981',
    protocol: 'WireGuard / 802.1X / RADIUS',
    status: 'Encrypted Perimeter',
    descriptionEn: 'Cryptographic overlay networks, switchport 802.1X, and Fail2ban protection.',
    descriptionFa: 'تانل‌های رمزنگاری‌شده، امنیت پورت‌های شبکه و فایروال لایه‌ای.',
  },
  {
    id: 'python',
    name: 'Python & APIs',
    category: 'Network Programmability',
    x: 35,
    y: 14,
    icon: 'Terminal',
    color: '#FBBF24',
    protocol: 'FastAPI / Netmiko / REST',
    status: 'API Controller Ready',
    descriptionEn: 'Custom telemetry collectors, REST API handlers, and AI middleware.',
    descriptionFa: 'اسکریپت‌های پایتون جهت جمع‌آوری تله‌متری و ارتباط با وب‌سرویس‌ها.',
  },
  {
    id: 'aiagents',
    name: 'AI Agents',
    category: 'Intelligent Ops',
    x: 65,
    y: 14,
    icon: 'Cpu',
    color: '#00F5A0',
    protocol: 'LLM Intent Parsing',
    status: 'Evaluating Intent',
    descriptionEn: 'Validating natural language changes and predicting telemetry anomalies.',
    descriptionFa: 'تبدیل درخواست‌های زبانی به تسک‌های انسیبل و تحلیل هوشمند لاگ‌ها.',
  },
];

export const NetworkTopologyVisualizer: React.FC = () => {
  const { lang } = useApp();
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(NODES[0]);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activePackets, setActivePackets] = useState<{ id: number; fromX: number; fromY: number; toX: number; toY: number; progress: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move handler for 3D parallax/gravitational effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Packet simulation loop
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick random peripheral node and send packet to center or vice versa
      const targetIdx = Math.floor(Math.random() * (NODES.length - 1)) + 1;
      const targetNode = NODES[targetIdx];
      const centerNode = NODES[0];

      const fromCenter = Math.random() > 0.5;
      const newPacket = {
        id: Date.now() + Math.random(),
        fromX: fromCenter ? centerNode.x : targetNode.x,
        fromY: fromCenter ? centerNode.y : targetNode.y,
        toX: fromCenter ? targetNode.x : centerNode.x,
        toY: fromCenter ? targetNode.y : centerNode.y,
        progress: 0,
      };

      setActivePackets((prev) => [...prev.slice(-8), newPacket]);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  // Update packet progression
  useEffect(() => {
    const anim = setInterval(() => {
      setActivePackets((prev) =>
        prev
          .map((p) => ({ ...p, progress: p.progress + 0.05 }))
          .filter((p) => p.progress < 1)
      );
    }, 40);
    return () => clearInterval(anim);
  }, []);

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0f172a]/90 via-[#090d16]/95 to-[#06080e] border border-slate-800/80 p-4 sm:p-6 shadow-2xl overflow-hidden tech-grid">
      
      {/* Top Telemetry Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wider uppercase">
            LIVE NOC TOPOLOGY & NEURAL MAP
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>NODES: 11 / ALL PASSING</span>
          </span>
          <span className="hidden sm:inline-block text-slate-600">|</span>
          <span className="hidden sm:inline-block text-slate-400">LATENCY: &lt; 0.8ms</span>
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full h-[380px] sm:h-[480px] md:h-[520px] rounded-xl bg-[#080c14]/80 border border-slate-800/50 overflow-hidden cursor-crosshair select-none"
      >
        {/* SVG Network Edges & Signal Pulses */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Lines connecting each node to Center Hub */}
          {NODES.slice(1).map((node) => {
            const isHighlighted = selectedNode?.id === node.id || selectedNode?.id === 'center';
            return (
              <g key={`edge-${node.id}`}>
                <line
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2="50%"
                  y2="50%"
                  stroke={isHighlighted ? node.color : 'rgba(71, 85, 105, 0.4)'}
                  strokeWidth={isHighlighted ? '1.75' : '1'}
                  strokeDasharray={isHighlighted ? '4,4' : 'none'}
                  className={isHighlighted ? 'animate-signal' : ''}
                />
              </g>
            );
          })}

          {/* Inter-domain secondary mesh links */}
          <line x1="22%" y1="28%" x2="78%" y2="26%" stroke="rgba(56, 189, 248, 0.25)" strokeWidth="1" strokeDasharray="2,4" />
          <line x1="18%" y1="68%" x2="35%" y2="86%" stroke="rgba(167, 139, 250, 0.25)" strokeWidth="1" strokeDasharray="2,4" />
          <line x1="65%" y1="86%" x2="82%" y2="65%" stroke="rgba(52, 211, 153, 0.25)" strokeWidth="1" strokeDasharray="2,4" />
          <line x1="35%" y1="14%" x2="65%" y2="14%" stroke="rgba(0, 245, 160, 0.25)" strokeWidth="1" strokeDasharray="2,4" />

          {/* Live Dynamic Telemetry Packets */}
          {activePackets.map((pkt) => {
            const curX = pkt.fromX + (pkt.toX - pkt.fromX) * pkt.progress;
            const curY = pkt.fromY + (pkt.toY - pkt.fromY) * pkt.progress;
            return (
              <circle
                key={pkt.id}
                cx={`${curX}%`}
                cy={`${curY}%`}
                r="3.5"
                fill="#00F5A0"
                filter="url(#glow-filter)"
                className="opacity-90"
              />
            );
          })}
        </svg>

        {/* Render Interactive Nodes */}
        {NODES.map((node) => {
          const isCenter = node.id === 'center';
          const isSelected = selectedNode?.id === node.id;

          // Parallax offset computation
          const offsetX = (mouseOffset.x * (isCenter ? 0.3 : 1)).toFixed(1);
          const offsetY = (mouseOffset.y * (isCenter ? 0.3 : 1)).toFixed(1);

          return (
            <button
              key={node.id}
              id={`topo-node-${node.id}`}
              onClick={() => setSelectedNode(node)}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
              }}
              className={`absolute group flex flex-col items-center justify-center transition-transform duration-200 focus:outline-none z-10 ${
                isCenter ? 'scale-110 sm:scale-125' : 'hover:scale-110'
              }`}
            >
              {/* Node Outer Halo / Pulsing ring */}
              <div
                className={`relative flex items-center justify-center rounded-xl transition-all duration-300 ${
                  isCenter
                    ? 'w-16 h-16 sm:w-20 sm:h-20 bg-emerald-950/80 border-2 border-emerald-400 glow-accent shadow-2xl'
                    : isSelected
                    ? 'w-11 h-11 sm:w-13 sm:h-13 bg-slate-800/95 border-2 shadow-lg'
                    : 'w-10 h-10 sm:w-12 sm:h-12 bg-slate-900/90 border border-slate-700/80 hover:border-slate-400'
                }`}
                style={{
                  borderColor: isSelected && !isCenter ? node.color : undefined,
                  boxShadow: isSelected ? `0 0 20px ${node.color}40` : undefined,
                }}
              >
                {/* Node Icon */}
                {isCenter ? (
                  <div className="flex flex-col items-center">
                    <Cpu className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-300 animate-pulse" />
                    <span className="text-[9px] font-mono font-bold text-emerald-300 tracking-tighter mt-0.5">
                      CORE
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center" style={{ color: node.color }}>
                    {node.icon === 'Network' && <Network className="w-5 h-5" />}
                    {node.icon === 'Radio' && <Radio className="w-5 h-5" />}
                    {node.icon === 'Terminal' && <Terminal className="w-5 h-5" />}
                    {node.icon === 'Zap' && <Zap className="w-5 h-5" />}
                    {node.icon === 'Layers' && <Layers className="w-5 h-5" />}
                    {node.icon === 'PhoneCall' && <PhoneCall className="w-5 h-5" />}
                    {node.icon === 'Server' && <Server className="w-5 h-5" />}
                    {node.icon === 'ShieldCheck' && <ShieldCheck className="w-5 h-5" />}
                    {node.icon === 'Cpu' && <Cpu className="w-5 h-5" />}
                  </div>
                )}

                {/* Subtle pulse indicator */}
                <span
                  className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border border-slate-900"
                  style={{ backgroundColor: node.color }}
                />
              </div>

              {/* Node Label Below */}
              <div className="mt-1.5 px-2 py-0.5 rounded-md bg-slate-900/90 border border-slate-800 backdrop-blur-sm shadow-md whitespace-nowrap">
                <span
                  className={`text-[11px] sm:text-xs font-mono font-bold tracking-tight ${
                    isCenter ? 'text-emerald-300' : isSelected ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {node.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Inspected Node Telemetry Drawer */}
      {selectedNode && (
        <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase font-bold">
                {selectedNode.category}
              </span>
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <span>{selectedNode.name}</span>
                <span className="text-xs text-slate-400 font-normal">({selectedNode.protocol})</span>
              </h4>
            </div>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              {lang === 'fa' ? selectedNode.descriptionFa : selectedNode.descriptionEn}
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs shrink-0 self-end md:self-center">
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase">TELEMETRY STATUS</div>
              <div className="text-emerald-400 font-bold flex items-center gap-1 justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{selectedNode.status}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
