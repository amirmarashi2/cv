import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check, CornerDownLeft } from 'lucide-react';

interface CommandOutput {
  id: string;
  command: string;
  output: string | React.ReactNode;
  timestamp: string;
}

export const InteractiveTerminal: React.FC = () => {
  const { lang, setIsResumeOpen, scrollToSection } = useApp();
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'whoami',
      output: 'Seyed Amirhossein Marashi (Amir) -> Network & Infrastructure Engineer [NetMinds]',
      timestamp: '12:00:01',
    },
    {
      id: 'init-2',
      command: 'primary_skills',
      output: 'Cisco IOS | MikroTik RouterOS | Linux (Debian/Ubuntu/Rocky) | VoIP & Issabel | Proxmox/VMware | AAA & FreeRADIUS',
      timestamp: '12:00:02',
    },
    {
      id: 'init-3',
      command: 'current_focus',
      output: 'AI-driven Network Automation | Ansible IaC | Observability & Telemetry Pipelines',
      timestamp: '12:00:03',
    },
    {
      id: 'init-4',
      command: 'future_role',
      output: 'AI Solution Architect (Scalable Enterprise Infrastructure for AI Workloads)',
      timestamp: '12:00:04',
    },
  ]);
  const [copied, setCopied] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickCommands = [
    'whoami',
    'primary_skills',
    'current_focus',
    'homelab_status',
    'ping 8.8.8.8',
    'show ip route',
    'ansible-playbook',
    'help',
  ];

  const handleRunCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: string | React.ReactNode = '';

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (trimmed === 'whoami') {
      response = 'Seyed Amirhossein Marashi (Amir) -> Network & Infrastructure Engineer [NetMinds]';
    } else if (trimmed === 'primary_skills' || trimmed === 'skills') {
      response = `[ADVANCED PRODUCTION]
- Cisco Routing & Switching (VLAN, STP, OSPF, BGP, Multicast, ACL, AAA)
- MikroTik RouterOS (PCC Load Balancing, WireGuard, Firewall, Mangle)
- Network Troubleshooting & Wireshark Packet Analysis

[STRONG PRACTICAL]
- Linux Administration (Debian, Ubuntu, Rocky Linux) & Hardening
- VoIP Telephony (Issabel PBX, Asterisk, Grandstream FXO/FXS, SIP/RTP)
- Virtualization (Proxmox VE, VMware ESXi, ZFS, GNS3 Labs)
- Network Security (FreeRADIUS, Cisco AAA, WireGuard, 802.1X)`;
    } else if (trimmed === 'current_focus') {
      response = 'AI-driven Network Automation | Ansible IaC | Python (FastAPI/Netmiko) | Observability';
    } else if (trimmed === 'future_role') {
      response = 'AI Solution Architect -> Designing resilient enterprise infrastructure for AI model orchestration.';
    } else if (trimmed === 'homelab_status' || trimmed === 'homelab') {
      response = `[42U NOC RACK TELEMETRY]
* Host: HP ProLiant DL360 Gen9 (28 Cores / 128GB ECC RAM) -> STATUS: ONLINE (Temp: 31°C)
* Hypervisor: Proxmox VE 8.x [ZFS Mirrored NVMe Pool: HEALTHY]
* Core Switch: Cisco Catalyst 3750G-24PS (L3 Active, IGMP Querier ON)
* Gateway: MikroTik CCR1009-7G (Multi-WAN PCC Load Balanced)
* Containers: Nextcloud, Jitsi, FreeRADIUS, ERPNext, AI Agent Runner`;
    } else if (trimmed.startsWith('ping')) {
      response = `PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=14.2 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=13.8 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=117 time=14.1 ms
64 bytes from 8.8.8.8: icmp_seq=4 ttl=117 time=13.9 ms
--- 8.8.8.8 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 13.8/14.0/14.2/0.18 ms [LINK STABLE]`;
    } else if (trimmed === 'show ip route' || trimmed === 'ip route') {
      response = `Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area

Gateway of last resort is 192.168.1.1 to network 0.0.0.0

S*    0.0.0.0/0 [1/0] via 192.168.1.1 (WAN-PCC-Bonded)
C     10.10.0.0/24 is directly connected, Vlan10 (Management)
C     10.20.0.0/24 is directly connected, Vlan20 (Servers-Proxmox)
C     10.50.0.0/24 is directly connected, Vlan50 (VoIP-SIP)
O     10.100.0.0/16 [110/2] via 10.10.0.254, GigabitEthernet1/0/1`;
    } else if (trimmed.startsWith('ansible-playbook') || trimmed === 'ansible') {
      response = `PLAY [Deploy Secure Isolated Guest VLAN 120] *************************************
TASK [Gathering Facts] *********************************************************
ok: [cisco-core-3750]
ok: [mikrotik-gateway-ccr]

TASK [cisco.ios : Create VLAN 120 & SVI] ***************************************
changed: [cisco-core-3750]

TASK [cisco.ios : Configure Trunk Allowed Lists] *******************************
changed: [cisco-core-3750]

TASK [mikrotik.routeros : Update DHCP Server Pool & Firewall Isolation] ********
changed: [mikrotik-gateway-ccr]

PLAY RECAP *********************************************************************
cisco-core-3750            : ok=3    changed=2    unreachable=0    failed=0
mikrotik-gateway-ccr       : ok=3    changed=1    unreachable=0    failed=0
STATUS: ZERO CONFIG DRIFT - ALL VERIFICATIONS PASSED (Elapsed: 2.84s)`;
    } else if (trimmed === 'cat resume' || trimmed === 'resume' || trimmed === 'cv') {
      setIsResumeOpen(true);
      response = 'Opening Interactive Resume & Curriculum Vitae Modal...';
    } else if (trimmed === 'projects' || trimmed === 'casestudies') {
      scrollToSection('projects');
      response = 'Navigating to Case Studies & Projects section...';
    } else if (trimmed === 'contact') {
      scrollToSection('contact');
      response = 'Navigating to Contact portal... (Email: amirmarashi2013@gmail.com)';
    } else if (trimmed === 'help') {
      response = `Available NetMinds CLI commands:
- whoami            : Identity and current role
- primary_skills    : Breakdown of technical expertise
- current_focus     : Active research in AI + Network Automation
- future_role       : Long-term engineering vision (AI Solution Architect)
- homelab_status    : Live 42U rack hardware & service telemetry
- ping 8.8.8.8      : Simulated low-latency network diagnostic
- show ip route     : Cisco/MikroTik routing table output
- ansible-playbook  : Simulated idempotent network change execution
- cat resume        : Open full resume modal (PDF ready)
- clear             : Clear terminal screen`;
    } else {
      response = `bash: command not found: ${trimmed}. Type 'help' for available commands.`;
    }

    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmd,
        output: response,
        timestamp: timeStr,
      },
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopy = () => {
    const raw = history.map((h) => `amir@netminds:~$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div dir="ltr" className="w-full rounded-2xl bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-slate-200">
      
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#060910] border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-slate-400 font-semibold text-[11px]">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>amir@netminds:~ (zsh)</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            title="Copy Terminal Session"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setHistory([])}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
            title="Clear Terminal"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Terminal Output Log Area */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="p-4 sm:p-5 max-h-[300px] sm:max-h-[360px] overflow-y-auto space-y-3 selection:bg-emerald-500/30 cursor-text"
      >
        <div className="text-[11px] text-slate-500 pb-1 border-b border-slate-800/60 flex items-center justify-between">
          <span>NetMinds Interactive Shell v2.6.4-prod (x86_64-linux-gnu)</span>
          <span>TTY: /dev/pts/0</span>
        </div>

        {history.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-emerald-400 font-bold">amir@netminds</span>
              <span className="text-slate-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-500">$</span>
              <span className="text-white font-semibold">{item.command}</span>
              <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
            </div>
            <pre className="text-slate-300 font-mono text-[11px] sm:text-xs whitespace-pre-wrap pl-3 border-l-2 border-slate-700/60 leading-relaxed">
              {item.output}
            </pre>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 pt-1 text-slate-400">
          <span className="text-emerald-400 font-bold">amir@netminds</span>
          <span className="text-slate-500">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-slate-500">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'homelab_status'..."
            className="flex-1 bg-transparent text-emerald-300 focus:outline-none placeholder:text-slate-600 text-xs font-mono caret-emerald-400"
          />
          <button
            onClick={() => handleRunCommand(inputVal)}
            className="p-1 rounded bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>

        <div ref={bottomRef} />
      </div>

      {/* Quick Suggestion Pills */}
      <div className="px-4 py-2.5 bg-[#070b12] border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto text-[11px]">
        <span className="text-slate-500 shrink-0 font-sans">{lang === 'fa' ? 'دستورات سریع:' : 'Quick Run:'}</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleRunCommand(cmd)}
            className="shrink-0 px-2 py-0.5 rounded bg-slate-800/70 hover:bg-emerald-500/20 hover:text-emerald-300 border border-slate-700/60 text-slate-300 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
