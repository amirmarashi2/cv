import {
  CaseStudy,
  Certification,
  DomainExpertise,
  PlaygroundArchitecture,
  RackUnit,
  SkillItem,
  TechRadarItem,
  BlogPost,
  ServiceOffering
} from '../types';

export const PERSONAL_INFO = {
  fullNameEn: 'Seyed Amirhossein Marashi',
  fullNameFa: 'سید امیرحسین مرعشی',
  shortNameEn: 'Amir Marashi',
  shortNameFa: 'امیر مرعشی',
  brand: 'NetMinds',
  domain: 'netminds.ir',
  email: 'amirmarashi2013@gmail.com',
  phone: '+98 937 400 9044',
  telegram: 'https://t.me/Amir_Marashi_0',
  github: 'https://github.com/amirmarashi',
  linkedin: 'https://linkedin.com/in/amir-marashi',
  locationEn: 'Tehran, Iran / Open to Global Remote & Relocation',
  locationFa: 'تهران، ایران / آماده برای همکاری بین‌المللی و دورکاری',
  taglineEn: "I don't just deploy infrastructure. I engineer it.",
  taglineFa: 'زیرساخت را فقط راه‌اندازی نمی‌کنم. مهندسی‌اش می‌کنم.',
  titleEn: 'Network & Infrastructure Engineer',
  titleFa: 'مهندس شبکه و زیرساخت',
  subtitleEn: 'Enterprise Networking × Linux & Systems × VoIP × AI-driven Network Automation',
  subtitleFa: 'مهندسی شبکه سازمانی × لینوکس و سیستم‌ها × ویپ × اتوماسیون هوشمند شبکه',
  futureRoleEn: 'AI Solution Architect',
  futureRoleFa: 'معمار راهکارهای هوش مصنوعی',
  bioEn: 'Infrastructure engineer with 5+ years of practical hands-on experience designing, deploying, securing, and maintaining enterprise networks, Linux servers, VoIP systems, and virtualization clusters across healthcare, hospitals, factories, hotels, and SMBs. Currently evolving traditional network engineering toward AI-driven network automation and intelligent infrastructure observability.',
  bioFa: 'مهندس زیرساخت و شبکه با بیش از ۵ سال تجربه عملی در طراحی، پیاده‌سازی، امنیت و عیب‌یابی شبکه‌های سازمانی، سرورهای لینوکس، سیستم‌های VoIP و کلاسترهای مجازی‌سازی در مراکز درمانی، بیمارستان‌ها، کارخانجات، هتل‌ها و کسب‌وکارهای متوسط. در حال گسترش مرزهای مهندسی شبکه به سمت اتوماسیون مبتنی بر هوش مصنوعی (AI-driven Network Automation).',
  quoteEn: 'My objective is to build infrastructure that does not just work—it must be reliable, scalable, observable, and automatable.',
  quoteFa: 'هدف من ساختن زیرساختی است که فقط کار نکند؛ قابل اتکا، قابل توسعه، قابل مشاهده و قابل اتوماسیون باشد.',
  experienceYears: '5+',
  statusEn: 'AVAILABLE FOR CONSULTING & GLOBAL OPPORTUNITIES',
  statusFa: 'آماده همکاری مشاوره‌ای و فرصت‌های بین‌المللی',
};

export const PHILOSOPHY_PRINCIPLES = [
  {
    titleEn: 'Reliability',
    titleFa: 'قابلیت اطمینان (Reliability)',
    descEn: 'Systems must remain resilient and deterministic under unpredictable real-world stress and failovers.',
    descFa: 'سیستم باید در شرایط پرفشار و سناریوهای خرابی در دنیای واقعی کاملاً پایدار و قابل اتکا عمل کند.',
    icon: 'ShieldCheck',
  },
  {
    titleEn: 'Simplicity',
    titleFa: 'سادگی ساختار (Simplicity)',
    descEn: 'Unnecessary architectural complexity is the primary enemy of maintainability and uptime.',
    descFa: 'پیچیدگی غیرضروری دشمن اصلی پایداری زیرساخت و نگهداری آسان در بلندمدت است.',
    icon: 'Layers',
  },
  {
    titleEn: 'Observability',
    titleFa: 'دیده‌پذیری (Observability)',
    descEn: 'What cannot be measured and visualized cannot be reliably diagnosed or improved.',
    descFa: 'سیستمی که تله‌متری و لاگ‌های شفاف ندارد، به‌درستی قابل عیب‌یابی و بهینه‌سازی نخواهد بود.',
    icon: 'Activity',
  },
  {
    titleEn: 'Automation',
    titleFa: 'اتوماسیون (Automation)',
    descEn: 'Repetitive configuration workflows belong to code and automated orchestration pipelines.',
    descFa: 'عملیات و پیکربندی‌های تکراری باید به اسکریپت‌ها و پایپ‌لاین‌های خودکار واگذار شوند.',
    icon: 'Cpu',
  },
  {
    titleEn: 'Security by Design',
    titleFa: 'امنیت ذاتی (Security by Design)',
    descEn: 'Network hardening, AAA, and segmentation are architectural baselines, never an afterthought.',
    descFa: 'امنیت، تفکیک VLANها و مکانیزم‌های احراز هویت باید از ابتدا در ذات معماری قرار گیرند.',
    icon: 'Lock',
  },
];

export const PROBLEMS_I_SOLVE = [
  {
    id: 'unstable-networks',
    titleEn: 'Unstable & Fragile Networks',
    titleFa: 'شبکه‌های ناپایدار و پرتکرار قطعی',
    descEn: 'Deep-dive L2/L3 packet analysis, STP loop mitigation, routing convergence optimization, and hardware bottleneck diagnosis.',
    descFa: 'تحلیل عمیق ترافیک در لایه‌های ۲ و ۳، رفع لوپ‌های STP، همگرایی روتینگ و رفع گلوگاه‌های سخت‌افزاری شبکه.',
    icon: 'AlertTriangle',
  },
  {
    id: 'complex-infrastructure',
    titleEn: 'Infrastructure Sprawl & Silos',
    titleFa: 'زیرساخت‌های پراکنده و بدون مستندات',
    descEn: 'Unifying fragmented physical switching, hypervisors, and storage into clean, segmented, fully documented topologies.',
    descFa: 'یکپارچه‌سازی سوئیچ‌های فیزیکی، سرورهای مجازی و ذخیره‌سازها در قالب یک معماری منظم با مستندات شفاف.',
    icon: 'Network',
  },
  {
    id: 'manual-operations',
    titleEn: 'Error-Prone Manual Operations',
    titleFa: 'عملیات دستی و خطای انسانی در تغییرات',
    descEn: 'Replacing repetitive CLI configuration drifts with structured Ansible playbooks, API integrations, and validation checks.',
    descFa: 'حذف خطاهای انسانی در پیکربندی تجهیزات با استفاده از Ansible Playbookها و ارتباط با APIهای شبکه.',
    icon: 'Terminal',
  },
  {
    id: 'legacy-telephony',
    titleEn: 'Legacy PBX & Voice Isolation',
    titleFa: 'مهاجرت تلفن‌های سنتی به VoIP یکپارچه',
    descEn: 'Migrating legacy analog lines to modern Issabel/Asterisk SIP systems with custom IVR trees, FXO/FXS gateways, and high audio clarity.',
    descFa: 'مهاجرت خطوط آنالوگ سنتی به سیستم‌های مدرن VoIP/SIP مانند Issabel، با طراحی درخت IVR و گیت‌وی‌های FXO/FXS.',
    icon: 'PhoneCall',
  },
  {
    id: 'unauthorized-access',
    titleEn: 'Decentralized & Weak Access Control',
    titleFa: 'عدم تمرکز در دسترسی و امنیت ضعیف',
    descEn: 'Enforcing centralized AAA with Cisco switches and FreeRADIUS/Linux backend for granular 802.1X and admin audit logs.',
    descFa: 'پیاده‌سازی احراز هویت متمرکز AAA با ترکیب Cisco و FreeRADIUS لینوکس برای حسابرسی دقیق و ورود امن.',
    icon: 'KeyRound',
  },
];

export const SKILL_ITEMS: SkillItem[] = [
  // Advanced / Production Experience
  {
    name: 'Cisco Routing & Switching',
    category: 'networking',
    level: 'advanced',
    tags: ['VLAN', 'Trunking', 'STP', 'Inter-VLAN', 'OSPF', 'BGP', 'ACL', 'NAT', 'DHCP', 'SNMP', 'Multicast'],
    descriptionEn: 'Expert design and CLI deployment of Catalyst/Nexus switches, ISR routers, high-availability FHRP (HSRP/VRRP), dynamic routing, and IGMP multicast distribution.',
    descriptionFa: 'طراحی تخصصی و پیکربندی سوئیچ‌ها و روترهای سیسکو، پروتکل‌های روتینگ پویا، VLAN، ترانک، STP و توزیع مالتی‌کست.',
    highlight: true,
  },
  {
    name: 'MikroTik RouterOS',
    category: 'networking',
    level: 'advanced',
    tags: ['Routing', 'Firewall/NAT', 'Mangle', 'VLAN', 'WireGuard', 'IPsec', 'Hotspot', 'PCC Load Balancing', 'Failover'],
    descriptionEn: 'Advanced multi-WAN PCC load balancing, stateful firewall filters, policy routing, site-to-site tunnels, bandwidth queueing, and CAPsMAN wireless management.',
    descriptionFa: 'پیکربندی پیشرفته روتربردهای میکروتیک، لود بالانسینگ PCC، فایروال منگل، تانل‌های امن، QoS و مدیریت بی‌سیم.',
    highlight: true,
  },
  {
    name: 'Network Troubleshooting & Packet Analysis',
    category: 'networking',
    level: 'advanced',
    tags: ['Wireshark', 'TCP/IP', 'ICMP', 'STP Diagnosis', 'MTU Issues', 'Packet Capture', 'Syslog Analysis'],
    descriptionEn: 'Rapid root-cause isolation across L1-L7: latency spikes, broadcast storms, asymmetric routing, MTU black holes, and packet drops.',
    descriptionFa: 'عیب‌یابی سریع و ریشه‌ای مشکلات شبکه، تحلیل بسته‌های ترافیکی با Wireshark، رفع لوپ‌ها و بهینه‌سازی تاخیر.',
    highlight: true,
  },
  // Strong Practical Experience
  {
    name: 'Linux Server Administration & Hardening',
    category: 'linux',
    level: 'practical',
    tags: ['Ubuntu', 'Debian', 'Rocky Linux', 'Alpine', 'SSH Hardening', 'Fail2ban', 'UFW/Iptables', 'Systemd'],
    descriptionEn: 'Deploying and tuning enterprise Linux servers, daemon management, user access control, automated backups, and kernel network parameter tuning.',
    descriptionFa: 'مدیریت و امن‌سازی سرورهای لینوکسی دبیان، اوبونتو و راکی لینوکس، تنظیمات فایروال و سرویس‌های سیستمی.',
    highlight: true,
  },
  {
    name: 'VoIP & Unified Communications',
    category: 'voip',
    level: 'practical',
    tags: ['Issabel', 'Asterisk', 'SIP', 'IVR Trees', 'FXO/FXS Gateways', 'Grandstream', 'Yealink', 'Call Routing'],
    descriptionEn: 'End-to-end IP telephony deployments for clinics, pharmacies, and SMBs; gateway voice codec optimization, SIP trunking, and interactive voice response.',
    descriptionFa: 'راه‌اندازی کامل مراکز تلفنی VoIP بر پایه Issabel/Asterisk، اتصال خطوط شهری با گیت‌وی FXO/FXS و پیاده‌سازی IVR.',
    highlight: true,
  },
  {
    name: 'Virtualization & Hypervisors',
    category: 'virtualization',
    level: 'practical',
    tags: ['VMware ESXi', 'Proxmox VE', 'KVM', 'vSwitch', 'VLAN Bridging', 'Storage Pools', 'GNS3/EVE-NG Labs'],
    descriptionEn: 'Provisioning multi-node Proxmox and ESXi hypervisors, software-defined virtual networking, VM templates, high-availability storage, and virtual network labs.',
    descriptionFa: 'استقرار کلاسترهای مجازی‌سازی Proxmox و VMware ESXi، شبکه‌بندی مجازی، سوییچ‌های مجازی و راه‌اندازی لب‌های شبکه.',
    highlight: true,
  },
  {
    name: 'Network Security & AAA',
    category: 'security',
    level: 'practical',
    tags: ['FreeRADIUS', 'Cisco AAA', '802.1X', 'WireGuard', 'IPsec', 'Network Segmentation', 'SNMPv3'],
    descriptionEn: 'Centralized network access control linking Cisco switches with FreeRADIUS on Linux; end-to-end cryptographic VPN mesh and defense-in-depth segmentation.',
    descriptionFa: 'پیاده‌سازی احراز هویت متمرکز شبکه (AAA) با FreeRADIUS، تانل‌های امن WireGuard و تفکیک زون‌های امنیتی.',
    highlight: true,
  },
  // Working Knowledge
  {
    name: 'Docker & Self-Hosted Infrastructure',
    category: 'linux',
    level: 'working',
    tags: ['Docker Compose', 'Nextcloud', 'Jitsi', 'ERPNext', 'Reverse Proxy', 'Volume Management'],
    descriptionEn: 'Containerizing core business and collaboration workloads with Docker Compose, persistent volumes, and secure reverse proxy routing.',
    descriptionFa: 'کانتینرسازی سرویس‌های سازمانی با داکر کامپوز، مدیریت پورت‌ها، ولوم‌ها و سرویس‌های سلف‌هاستد.',
  },
  {
    name: 'Ansible & Infrastructure Automation',
    category: 'automation',
    level: 'working',
    tags: ['Ansible Playbooks', 'Jinja2 Templates', 'Cisco IOS Modules', 'MikroTik API', 'YAML'],
    descriptionEn: 'Automating multi-switch VLAN configurations, password rollouts, backup automation, and compliance auditing with idempotent playbooks.',
    descriptionFa: 'اتوماسیون تنظیمات تجهیزات شبکه با پلی‌بوک‌های Ansible، قالب‌های Jinja2 و اعمال یکپارچه کانفیگ‌ها.',
  },
  {
    name: 'IPTV & Multicast Streaming',
    category: 'networking',
    level: 'working',
    tags: ['IGMP Snooping', 'IGMP Querier', 'PIM-SM', 'Cisco Multicast', 'VLAN Isolation', 'Hotel IPTV'],
    descriptionEn: 'Designing zero-packet-drop multicast distribution trees for hospitality IPTV networks, preventing broadcast storm leakage across guest VLANs.',
    descriptionFa: 'طراحی زیرساخت توزیع مالتی‌کست IPTV در هتل‌ها و مراکز اقامتی با تنظیم دقیق IGMP Snooping و Querier.',
  },
  // Currently Expanding
  {
    name: 'Python for Network Engineers',
    category: 'automation',
    level: 'expanding',
    tags: ['Netmiko', 'Paramiko', 'REST APIs', 'FastAPI/Flask', 'JSON/YAML Parsing'],
    descriptionEn: 'Writing programmatic scripts to query device telemetry, parse structured CLI outputs, and orchestrate network change workflows.',
    descriptionFa: 'برنامه‌نویسی پایتون جهت خودکارسازی دریافت اطلاعات تجهیزات شبکه، کار با APIها و ساخت وب‌سرویس‌های عملیاتی.',
  },
  {
    name: 'AI-driven Network Automation & Agents',
    category: 'ai',
    level: 'expanding',
    tags: ['LLM Orchestration', 'Natural Language to CLI', 'AI Log Analysis', 'Automated Verification'],
    descriptionEn: 'Architecting intelligent middleware that translates high-level natural language intent into validated Ansible tasks and verifies post-change telemetry.',
    descriptionFa: 'طراحی سیستم‌های واسط مبتنی بر هوش مصنوعی برای تبدیل درخواست‌های متنی به دستورات استاندارد شبکه و تحلیل لاگ‌ها.',
    highlight: true,
  },
  {
    name: 'AI Solution Architecture',
    category: 'ai',
    level: 'expanding',
    tags: ['Enterprise AI Pipelines', 'Edge Infrastructure', 'Scalable Inference Stacks'],
    descriptionEn: 'Long-term professional vector: Designing robust enterprise infrastructure architectures tailored for AI workloads, edge compute, and hybrid intelligence.',
    descriptionFa: 'افق و مسیر حرفه‌ای آینده: معماری زیرساخت‌های مقیاس‌پذیر و پایدار برای اجرای مدل‌های هوش مصنوعی سازمانی.',
    highlight: true,
  },
];

export const DOMAIN_EXPERTISE: DomainExpertise[] = [
  {
    id: 'networking',
    titleEn: 'Enterprise Networking',
    titleFa: 'مهندسی شبکه سازمانی',
    icon: 'Network',
    badge: 'CORE EXPERTISE',
    summaryEn: 'High-availability L2/L3 design, deterministic switching, scalable multi-WAN routing, and robust packet delivery.',
    summaryFa: 'طراحی لایه ۲ و ۳ با پایداری بالا، سوییچینگ دقیق، روتینگ مالتی‌ون و توزیع پایدار ترافیک.',
    technologies: ['Cisco IOS', 'MikroTik RouterOS', 'VLAN/Trunking', 'STP/RSTP', 'OSPF', 'BGP', 'Inter-VLAN Routing', 'NAT/PAT', 'ACL', 'DHCP Snooping', 'PCC Load Balancing'],
    capabilitiesEn: [
      'Zero-downtime multi-WAN failover & bandwidth bonding',
      'Campus-wide VLAN architecture with 802.1Q trunking',
      'Spanning Tree optimization (RSTP/MSTP) preventing bridging loops',
      'Subnetting, VRF segmentation, and policy-based routing',
      'QoS prioritizing mission-critical ERP, VoIP, and CCTV traffic',
    ],
    capabilitiesFa: [
      'پیاده‌سازی Failover بدون قطعی و لود بالانسینگ چند خط اینترنت',
      'معماری جامع VLAN در سطح سازمان با استاندارد 802.1Q',
      'بهینه‌سازی پروتکل‌های Spanning Tree جهت جلوگیری از لوپ‌های لایه ۲',
      'بخش‌بندی ترافیک و روتینگ مبتنی بر خط‌مشی (Policy Routing)',
      'تنظیمات QoS برای اولویت‌دهی ترافیک صوت VoIP، نرم‌افزارهای مالی و دوربین‌ها',
    ],
  },
  {
    id: 'security',
    titleEn: 'Network Security & Hardening',
    titleFa: 'امنیت و مقاوم‌سازی زیرساخت',
    icon: 'ShieldCheck',
    badge: 'ZERO TRUST PRINCIPLE',
    summaryEn: 'Granular perimeter firewalls, centralized authentication (AAA), cryptographic VPNs, and defense-in-depth isolation.',
    summaryFa: 'فایروال‌های لایه‌ای، احراز هویت متمرکز کاربران و تجهیزات، تانل‌های رمزنگاری‌شده و تفکیک زون‌های شبکه.',
    technologies: ['FreeRADIUS', 'Cisco AAA', 'WireGuard', 'IPsec', 'Stateful Firewalls', 'Fail2ban', 'SSH Hardening', 'SNMPv3', 'Port Security', '802.1X'],
    capabilitiesEn: [
      'Centralized admin authentication (AAA) across network infrastructure via FreeRADIUS',
      'Cryptographic site-to-site and remote access VPNs (WireGuard / IPsec)',
      'L2 switchport security: MAC limiting, DHCP Snooping, Dynamic ARP Inspection',
      'Linux server perimeter lockdown: UFW/Iptables, SSH key-only, Fail2ban',
      'Internal zero-trust segmentation isolating guest Wi-Fi, CCTV, servers, and staff',
    ],
    capabilitiesFa: [
      'احراز هویت متمرکز ادمین‌ها و کاربران روی تجهیزات سیسکو از طریق FreeRADIUS',
      'ایجاد تانل‌های امن شعبه به شعبه و دسترسی از راه دور (WireGuard / IPsec)',
      'امنیت لایه ۲ در سوئیچ‌ها: کنترل مک آدرس، DHCP Snooping و DAI',
      'مقاوم‌سازی سرورهای لینوکس: فایروال‌های محلی، بستن پورت‌ها و Fail2ban',
      'تفکیک دسترسی و ایزولاسیون شبکه میهمان، دوربین‌ها، پرسنل و سرورها',
    ],
  },
  {
    id: 'linux-systems',
    titleEn: 'Linux & Core Infrastructure Services',
    titleFa: 'سیستم‌های لینوکس و سرویس‌های پایه',
    icon: 'Terminal',
    badge: 'OPEN SOURCE BACKBONE',
    summaryEn: 'Rock-solid Linux distributions powering foundational enterprise directory, DNS, authentication, and application servers.',
    summaryFa: 'استفاده از توزیع‌های پایدار لینوکس برای ارائه سرویس‌های احراز هویت، وب، دیتابیس و برنامه‌های سازمانی.',
    technologies: ['Ubuntu Server', 'Debian', 'Rocky Linux', 'Alpine', 'Systemd', 'BIND DNS', 'Nginx Reverse Proxy', 'FreeRADIUS', 'Docker', 'SSH/Rsync'],
    capabilitiesEn: [
      'Production deployment and long-term maintenance of Debian & Rocky Linux servers',
      'Infrastructure services: Local DNS, DHCP relay, internal reverse proxy, NTP',
      'Automated remote backup pipelines with Rsync, Cron, and off-site snapshots',
      'Linux kernel network stack performance tuning and interface bonding',
      'Troubleshooting service failures, systemd unit crashes, and memory constraints',
    ],
    capabilitiesFa: [
      'نصب و مدیریت عملیاتی سرورهای لینوکسی پایدار در مقیاس سازمانی',
      'راه‌اندازی سرویس‌های زیرساختی: DNS محلی، پروکسی معکوس Nginx، زمان‌سنجی NTP',
      'پایپ‌لاین‌های خودکار بک‌آپ‌گیری با اسکریپت‌های Rsync و کران‌جاب‌ها',
      'تنظیمات بهینه کارت‌های شبکه، باندینگ پورت‌ها و پارامترهای کرنل',
      'تحلیل و رفع خطاهای سیستمی، سرویس‌های کرش‌کرده و بهینه‌سازی منابع',
    ],
  },
  {
    id: 'virtualization',
    titleEn: 'Virtualization & Private Cloud',
    titleFa: 'مجازی‌سازی و کلاسترینگ',
    icon: 'Layers',
    badge: 'RESOURCE CONSOLIDATION',
    summaryEn: 'Hypervisor clusters delivering high resource density, isolated virtual switching, snapshot protection, and staging labs.',
    summaryFa: 'کلاسترهای هایپروایزر برای تجمیع منابع، سوییچینگ مجازی ایزوله، بک‌آپ اسنپ‌شات و محیط‌های آزمایشگاهی.',
    technologies: ['Proxmox VE', 'VMware ESXi', 'KVM', 'Open vSwitch', 'NFS/iSCSI Storage', 'LXC Containers', 'GNS3 Virtual Labs', 'EVE-NG'],
    capabilitiesEn: [
      'Bare-metal Proxmox VE and ESXi cluster setup on enterprise rack servers (HP DL360)',
      'Virtual networking topologies connecting multi-VLAN VMs to physical switches',
      'High-availability storage mapping with ZFS pools and network-attached storage',
      'GNS3 / EVE-NG virtualized network testbeds for complex routing validation',
      'Zero-impact live VM migrations and rapid disaster recovery templates',
    ],
    capabilitiesFa: [
      'راه‌اندازی Proxmox VE و VMware ESXi روی سرورهای رکمونت HP DL360',
      'طراحی شبکه‌های مجازی با سوئیچ‌های مجازی متصل به ترانک‌های فیزیکی',
      'پیکربندی استوریج‌های پرسرعت ZFS و متصل به شبکه جهت نگهداری دیسک ماشین‌ها',
      'ایجاد محیط‌های تست مجازی شبکه با GNS3 و EVE-NG برای آزمودن سناریوها',
      'تعریف تمپلیت‌های آماده و راهکارهای بازگردانی سریع پس از خرابی (DR)',
    ],
  },
  {
    id: 'voip',
    titleEn: 'VoIP & Unified Communications',
    titleFa: 'سیستم‌های تلفنی VoIP و ویپ سازمانی',
    icon: 'PhoneCall',
    badge: 'REAL-TIME TELEPHONY',
    summaryEn: 'Crystal-clear digital voice systems, interactive auto-attendant menus, SIP gateway integration, and multi-extension routing.',
    summaryFa: 'مراکز تلفن تحت شبکه، منوهای هوشمند صوتی IVR، اتصال گیت‌وی‌های خطوط شهری و تفکیک ترانک‌های صوتی.',
    technologies: ['Issabel PBX', 'Asterisk Core', 'SIP Protocol', 'Grandstream Gateways', 'Yealink IP Phones', 'FXO / FXS', 'IVR Trees', 'Codec Negotiation (G.711/G.729)'],
    capabilitiesEn: [
      'Issabel/Asterisk PBX deployment with multi-level IVR routing trees',
      'FXO analog gateway provisioning to integrate traditional PSTN phone lines',
      'FXS gateway integration for analog fax machines and legacy warehouse handsets',
      'Dedicated voice VLAN segmentation with DSCP QoS tagging to eliminate jitter',
      'Custom call recording, extension queues, hunt groups, and scheduled night modes',
    ],
    capabilitiesFa: [
      'راه‌اندازی مراکز تلفن Issabel و Asterisk با سناریوهای پیچیده IVR',
      'تنظیم گیت‌وی‌های آنالوگ FXO برای اتصال خطوط تلفن ثابت شهری به بستر شبکه',
      'اتصال گیت‌وی‌های FXS جهت اتصال فکس‌های قدیمی و گوشی‌های سنتی',
      'تفکیک Voice VLAN با اولویت‌بندی کیفی QoS/DSCP برای حذف تاخیر و نویز',
      'صف‌های تماس، ضبط مکالمات، تعریف سناریوهای خارج از ساعات اداری و تلفن گویا',
    ],
  },
  {
    id: 'ai-automation',
    titleEn: 'AI + Network Automation',
    titleFa: 'اتوماسیون شبکه و هوش مصنوعی',
    icon: 'Cpu',
    badge: 'THE NEXT FRONTIER',
    summaryEn: 'Shifting from manual CLI typing to programmable workflows, Ansible playbooks, and AI-assisted network operations.',
    summaryFa: 'گذر از دستورات دستی CLI به سمت اتوماسیون برنامه‌پذیر، پلی‌بوک‌های انسیبل و دستیارهای هوشمند شبکه.',
    technologies: ['Ansible', 'Python (Netmiko/FastAPI)', 'AI Agents & LLMs', 'REST APIs', 'Jinja2 Templating', 'JSON/YAML', 'Telemetry Parsing'],
    capabilitiesEn: [
      'AI Agent for Network Operations: Natural language interface driving validated network changes',
      'Idempotent Ansible playbooks for automated VLAN, interface, and ACL rollouts',
      'Automated daily backup and configuration diff auditing across multi-vendor fleets',
      'AI-assisted syslog anomaly detection and root-cause correlation',
      'Self-documenting network topologies generated from live device data',
    ],
    capabilitiesFa: [
      'طراحی سیستم AI Agent برای دریافت درخواست متنی و اجرای امن عملیات شبکه',
      'پلی‌بوک‌های Ansible جهت اعمال همزمان VLAN و ACL روی ده‌ها سوئیچ',
      'بک‌آپ‌گیری خودکار روزانه از کانفیگ تجهیزات و ثبت تغییرات (Config Diff)',
      'تحلیل لاگ‌های سیستمی و کشف ناهنجاری‌ها به کمک مدل‌های زبانی',
      'تولید خودکار مستندات شبکه و نمودارهای توپولوژی بر اساس اطلاعات زنده تجهیزات',
    ],
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ai-network-agent',
    titleEn: 'AI Agent for Controlled Network Operations',
    titleFa: 'دستیار هوشمند اتوماسیون و عملیات شبکه (AI Network Agent)',
    category: 'Network Automation & AI',
    badge: 'SIGNATURE INNOVATION',
    clientTypeEn: 'NetMinds Research & Enterprise Lab',
    clientTypeFa: 'آزمایشگاه پژوهشی NetMinds و زیرساخت پایلوت',
    impactMetricEn: '85% Reduction in Routine Config Time with Automated Pre-checks',
    impactMetricFa: '۸۵٪ کاهش زمان اعمال کانفیگ‌های روتین با تایید خودکار',
    overviewEn: 'Designed and prototyped an end-to-end intelligent orchestration system where network administrators can issue high-level operational requests via a web UI. The AI logic layer validates syntax, safety rules, and generates execution plans executed via Ansible down to physical Cisco and MikroTik nodes.',
    overviewFa: 'طراحی و ساخت یک معماری جامع جهت دریافت دستورات سطح بالا از کاربر از طریق رابط وب، اعتبارسنجی قوانین ایمنی توسط هوش مصنوعی، و سپس تبدیل آن به کدهای استاندارد Ansible برای اجرا روی تجهیزات سیسکو و میکروتیک.',
    problemEn: 'Manual network changes across enterprise environments suffer from syntax errors, forgotten trunk allowances, configuration drift, and lack of immediate pre/post change validation.',
    problemFa: 'اعمال تغییرات دستی روی تجهیزات شبکه همیشه با ریسک خطای انسانی، فراموشی تنظیم ترانک‌ها و عدم بررسی وضعیت قبل و بعد از تغییر همراه است.',
    constraintsEn: [
      'Zero unauthorized configuration changes without explicit human validation summary',
      'Must support heterogeneous multi-vendor hardware (Cisco IOS & MikroTik RouterOS)',
      'Idempotent rollbacks if target device fails health verification after change',
    ],
    constraintsFa: [
      'عدم اعمال هرگونه تغییر پرخطر بدون تاییدیه ساختاریافته انسانی',
      'پشتیبانی از تجهیزات چندمنظوره سیسکو و میکروتیک',
      'قابلیت بازگردانی خودکار (Rollback) در صورت بروز خطا پس از اعمال کانفیگ',
    ],
    architectureSummaryEn: 'User (Web Interface) → AI / Logic Translation Layer → Flask REST API Middleware → Parameterized Ansible Playbooks → Physical & Virtual Network Devices (Cisco & MikroTik) → Telemetry Verification.',
    architectureSummaryFa: 'کاربر (رابط وب) ← لایه منطقی و هوش مصنوعی ← وب‌سرویس Flask REST API ← پلی‌بوک‌های Ansible ← تجهیزات فیزیکی و مجازی سیسکو و میکروتیک ← تاییدیه سلامت پس از تغییر.',
    technologies: ['React Web UI', 'Python Flask API', 'Ansible Core', 'Cisco IOS Modules', 'MikroTik API', 'YAML', 'GNS3 Testbed', 'Syslog Validator'],
    implementationStepsEn: [
      'Developed responsive UI with prompt guidance and parameter forms (VLAN ID, Subnet, Port Range)',
      'Built Flask REST API endpoints receiving structured requests with authentication tokens',
      'Created modular Ansible roles for Cisco Catalyst and MikroTik RouterOS with syntax linting',
      'Implemented automated pre-flight checks (verifying VLAN does not conflict, interface is reachable)',
      'Added automated post-change telemetry capture via SSH/SNMP to verify STP state and link upstatus',
    ],
    implementationStepsFa: [
      'طراحی رابط کاربری وب جهت دریافت مشخصات مانند شماره VLAN، رنج پورت و ساب‌نت',
      'توسعه وب‌سرویس پایتون Flask برای ارتباط امن و اعتبارسنجی ورودی‌ها',
      'نوشتن نقش‌ها و تسک‌های ماژولار انسیبل برای اعمال بدون خطای کانفیگ‌ها',
      'پیاده‌سازی اعتبارسنجی خودکار قبل از اجرا جهت جلوگیری از تداخل VLAN و خطاهای نامعتبر',
      'دریافت تله‌متری بعد از اجرا برای اطمینان از سلامت پورت‌ها و وضعیت STP',
    ],
    troubleshootingEn: 'Resolved device-locking race conditions during concurrent multi-switch playbook runs by implementing host grouping batch throttling and persistent SSH socket connection reuse.',
    troubleshootingFa: 'رفع مشکل قفل شدن سشن‌های SSH در حین اجرای همزمان روی چند سوئیچ با تنظیم Batch Size و استفاده از قابلیت SSH Multiplexing.',
    resultEn: 'Successful prototype capable of creating VLANs, configuring access/trunk switchports, and updating firewall address lists in seconds with zero manual CLI syntax errors.',
    resultFa: 'تست موفق در ایجاد VLANها، تنظیم پورت‌های ترانک و اکسس، و به‌روزرسانی لیست‌های فایروال در چند ثانیه بدون خطای نوشتاری.',
    lessonsLearnedEn: 'AI excels at intent parsing and boilerplate code generation, but strict deterministic Ansible boundary checks must remain the absolute gatekeeper before network execution.',
    lessonsLearnedFa: 'هوش مصنوعی در ترجمه اهداف عالی است، اما لایه اعتبارسنجی قطعی و خطاناپذیر انسیبل باید مرجع نهایی قبل از اعمال کانفیگ روی سوئیچ باشد.',
    diagramType: 'ai-agent',
  },
  {
    id: 'hotel-iptv-infrastructure',
    titleEn: 'Hotel Enterprise Network & IPTV Multicast Infrastructure',
    titleFa: 'زیرساخت یکپارچه شبکه، وای‌فای و IPTV هتل',
    category: 'Enterprise Networking & IPTV',
    badge: 'LARGE SCALE CASE STUDY',
    clientTypeEn: 'Hospitality & Luxury Hotel Property',
    clientTypeFa: 'مجموعه هتلداری و اقامتی بزرگ',
    impactMetricEn: '100% Guest Isolation + 0% Multicast Flooding on Wi-Fi',
    impactMetricFa: 'ایزولاسیون کامل ترافیک میهمانان و پخش بدون لگ شبکه‌های تلویزیونی',
    overviewEn: 'Engineered a resilient campus-wide infrastructure covering guest rooms, administrative offices, IPTV multicast headend, CCTV cameras, and public Wi-Fi zones with strict VLAN segmentation.',
    overviewFa: 'طراحی و پیاده‌سازی زیرساخت کامل شبکه در تمامی طبقات هتل شامل اتاق‌های مهمان، شبکه اداری، سیستم IPTV مالتی‌کست، دوربین‌های مداربسته و وای‌فای عمومی.',
    problemEn: 'Legacy flat network experienced severe broadcast storms caused by IPTV multicast video streams leaking into the Wi-Fi access points, causing guest connection dropouts and severe latency.',
    problemFa: 'شبکه سنتی تک‌لایه‌ای به دلیل نشت ترافیک پخش تلویزیونی (Multicast) به اکسس‌پوینت‌های وای‌فای، دچار فلادینگ شدید و افت مداوم اینترنت مهمانان شده بود.',
    constraintsEn: [
      'Zero downtime for front-desk reservation and billing systems during cutover',
      'High-bandwidth uncompressed IPTV streams must reach 100+ room set-top boxes simultaneously',
      'Strict legal compliance requiring guest Wi-Fi traffic isolation from internal PMS servers',
    ],
    constraintsFa: [
      'عدم قطعی سیستم پذیرش و حسابداری هتل در حین تغییر زیرساخت',
      'پخش روان و همزمان استریم‌های باکیفیت تلویزیونی روی بیش از ۱۰۰ گیرنده داخل اتاق‌ها',
      'ایزولاسیون کامل و ایزوله بودن دسترسی اینترنت مهمانان از سرورهای مالی و اداری',
    ],
    architectureSummaryEn: 'MikroTik Core Router (Multi-WAN & Hotspot) → Cisco Catalyst Core Switch (L3 Inter-VLAN Routing & Multicast Routing) → Distribution Switches (IGMP Snooping & Querier) → Access Layer (Guest VLAN, Admin VLAN, CCTV VLAN, IPTV VLAN).',
    architectureSummaryFa: 'روتر مرکزی میکروتیک (مدیریت اینترنت و هات‌اسپات) ← سوئیچ مرکزی سیسکو لایه ۳ ← سوئیچ‌های لایه دسترسی مجهز به IGMP Snooping ← تفکیک VLANهای اتاق، IPTV، دوربین و اداری.',
    technologies: ['Cisco Catalyst 3750/2960', 'MikroTik CCR/RB', 'IGMP Snooping & Querier', 'PIM-SM', '802.1Q VLANs', 'QoS DSCP', 'Wi-Fi Hotspot', 'Cat6/Fiber Backbones'],
    implementationStepsEn: [
      'Designed structured 8-VLAN architecture (Management, Admin, Guest, IPTV, CCTV, VoIP, Staff, IoT)',
      'Configured Cisco Core Switch as L3 Gateway with IGMP Querier and enabled IGMP Snooping across all edge switches',
      'Implemented MikroTik Hotspot gateway with bandwidth shaping and session timeouts for guests',
      'Configured port security and DHCP Snooping with Option 82 to prevent rogue DHCP server injections',
      'Performed packet captures verifying zero multicast packets leaked onto the Guest Wi-Fi SSID',
    ],
    implementationStepsFa: [
      'طراحی ساختار تفکیک‌شده ۸ شبکه مجازی (مدیریت، اداری، میهمان، IPTV، دوربین، تلفن، پرسنل و اینترنت اشیا)',
      'پیکربندی سوئیچ لایه ۳ سیسکو به عنوان Gateway و فعال‌سازی IGMP Querier و IGMP Snooping',
      'راه‌اندازی سامانه هات‌اسپات میکروتیک با مدیریت پهنای باند عادلانه برای کاربران',
      'امن‌سازی پورت‌ها با قابلیت‌های DHCP Snooping و Port Security برای جلوگیری از سرورهای غیرمجاز',
      'تحلیل بسته‌ها با وایرشارک برای اطمینان از مسدود بودن نشت ترافیک ویدیو به اکسس‌پوینت‌ها',
    ],
    troubleshootingEn: 'Identified set-top box stream drops caused by IGMP General Query timeout mismatches. Adjusted querier timer to 60s and enabled Fast-Leave on edge access ports to instantly free bandwidth when channels switch.',
    troubleshootingFa: 'رفع قطعی دوره‌ای کانال‌ها با تنظیم دقیق تایمرهای IGMP Querier روی ۶۰ ثانیه و فعال‌سازی Fast-Leave روی پورت‌های متصل به تلویزیون‌ها.',
    resultEn: 'Crystal-clear HD television streaming across all rooms with smooth Wi-Fi speeds, isolated guest privacy, and centralized NOC monitoring.',
    resultFa: 'پخش کاملاً روان و پایدار کانال‌های HD در تمام اتاق‌ها بدون کوچکترین اثر منفی روی سرعت اینترنت وای‌فای مهمانان.',
    lessonsLearnedEn: 'Multicast streaming without dedicated IGMP Snooping and Querier engineering will inevitably paralyze edge switching and wireless infrastructure.',
    lessonsLearnedFa: 'توزیع استریم مالتی‌کست بدون درک عمیق پروتکل‌های IGMP و تنظیمات Querier به سرعت باعث از کار افتادن سوئیچ‌ها و شبکه بی‌سیم می‌شود.',
    diagramType: 'hotel-iptv',
  },
  {
    id: 'freeradius-cisco-aaa',
    titleEn: 'Centralized Enterprise Network Authentication (Cisco + FreeRADIUS)',
    titleFa: 'احراز هویت متمرکز تجهیزات شبکه (Cisco AAA + FreeRADIUS)',
    category: 'Network Security & AAA',
    badge: 'SECURITY HARDENING',
    clientTypeEn: 'Enterprise Data Center & Branch Infrastructure',
    clientTypeFa: 'زیرساخت دیتاسنتر و شعب سازمانی',
    impactMetricEn: '100% Granular Audit Trail & Centralized Revocation',
    impactMetricFa: 'ثبت ۱۰۰٪ لاگ‌های دسترسی و حذف پسوردهای محلی روی سوئیچ‌ها',
    overviewEn: 'Engineered a centralized Authentication, Authorization, and Accounting (AAA) security architecture replacing fragile local switch passwords with an enterprise Linux FreeRADIUS cluster.',
    overviewFa: 'طراحی و پیاده‌سازی مکانیزم احراز هویت، تعیین سطح دسترسی و گزارش‌گیری متمرکز (AAA) برای مدیریت سوئیچ‌ها و روترهای سیسکو با استفاده از FreeRADIUS روی لینوکس.',
    problemEn: 'Administrators were using shared local enable passwords on dozens of switches. Password rotations took hours, there was zero individual accountability for CLI changes, and former staff retain access indefinitely.',
    problemFa: 'استفاده از پسوردهای مشترک محلی روی ده‌ها سوئیچ باعث شده بود تغییر رمز ساعت‌ها زمان ببرد و امکان ردیابی اینکه چه کسی چه دستوری وارد کرده وجود نداشته باشد.',
    constraintsEn: [
      'Failover resilience: If RADIUS server is temporarily unreachable, emergency local fallback credentials must activate safely',
      'Role-based privilege levels: Level 1 (monitoring only) vs Level 15 (full administrator)',
      'Complete accounting of every executed configuration command sent to centralized syslog',
    ],
    constraintsFa: [
      'قابلیت دسترسی اضطراری در صورت قطعی موقت سرور رادیوس',
      'تفکیک سطح دسترسی کارشناسان مانیتورینگ (Level 1) از ادمین‌های ارشد (Level 15)',
      'ثبت لاگ تمام دستورات وارد شده در محیط CLI در سرور لاگ متمرکز',
    ],
    architectureSummaryEn: 'Network Administrator → SSH Session → Cisco Catalyst Switch (AAA Client) → RADIUS Protocol (UDP 1812/1813) → Ubuntu Server running FreeRADIUS → SQL/File Auth Backend → Syslog Audit Trail.',
    architectureSummaryFa: 'کارشناس شبکه ← ارتباط امن SSH ← سوئیچ سیسکو (AAA Client) ← پروتکل RADIUS ← سرور اوبونتو مجهز به FreeRADIUS ← احراز هویت متمرکز و ثبت لاگ.',
    technologies: ['Cisco IOS AAA', 'Ubuntu Linux Server', 'FreeRADIUS 3.x', 'SSHv2 with RSA/ED25519', 'Syslog-ng', 'Wireshark RADIUS Protocol Inspection'],
    implementationStepsEn: [
      'Hardened Ubuntu server with dedicated FreeRADIUS daemon, strict firewall rules, and certificate generation',
      'Configured Cisco IOS AAA model: `aaa authentication login default group radius local`',
      'Defined privilege authorization: `aaa authorization exec default group radius local` and command accounting',
      'Configured shared secrets, dead-time timeouts, and fallback security boundaries',
      'Tested failure modes: Simulating RADIUS outage to guarantee automated graceful fallback to protected local fallback secret',
    ],
    implementationStepsFa: [
      'مقاوم‌سازی سرور اوبونتو و تنظیم سرویس FreeRADIUS با قوانین امنیتی فایروال',
      'پیکربندی مدل AAA روی سوئیچ‌های سیسکو برای ارجاع درخواست‌های لاگین به سرور رادیوس',
      'تنظیم سطوح دسترسی (Privilege Levels) و فعال‌سازی ثبت حسابرسی دستورات (Accounting)',
      'تعریف کلیدهای رمزنگاری Shared Secret و تایم‌اوت‌های شبکه',
      'تست سناریوهای خرابی سرور برای اطمینان از عملکرد صحیح پسورد اضطراری محلی',
    ],
    troubleshootingEn: 'Diagnosed authentication timeout issues caused by Cisco switch source-interface mismatch. Enforced explicit `ip radius source-interface Loopback0` to guarantee consistent egress packet routing.',
    troubleshootingFa: 'رفع مشکل عدم پاسخ سوئیچ به سرور با تنظیم صریح اینترفیس مبدا ارسال پکت‌های رادیوس (`ip radius source-interface Loopback0`).',
    resultEn: 'Zero shared credentials across the fleet. Every admin login is cryptographically validated and logged with timestamp, client IP, and privilege level.',
    resultFa: 'حذف کامل پسوردهای مشترک؛ ورود تمامی کارشناسان با نام کاربری اختصاصی، سطح دسترسی مشخص و ثبت لاگ دقیق انجام می‌پذیرد.',
    lessonsLearnedEn: 'Always rigorously test AAA fallback mechanisms in staging labs before deploying to remote core switches to prevent accidental lockout.',
    lessonsLearnedFa: 'همیشه مکانیزم‌های Fallback احراز هویت را پیش از اعمال روی سوئیچ‌های راه دور در محیط آزمایشگاهی تست کنید تا از قفل شدن دسترسی جلوگیری شود.',
    diagramType: 'freeradius',
  },
  {
    id: 'healthcare-voip-telephony',
    titleEn: 'Healthcare Clinic Unified IP Telephony & Multi-Branch PBX',
    titleFa: 'سیستم تلفنی VoIP و ویپ یکپارچه مرکز درمانی و داروخانه',
    category: 'VoIP & Unified Communications',
    badge: 'MISSION CRITICAL VOICE',
    clientTypeEn: 'Medical Clinic, Specialized Pharmacy & Diagnostic Center',
    clientTypeFa: 'کلینیک درمانی، داروخانه شبانه‌روزی و آزمایشگاه',
    impactMetricEn: 'Zero Missed Patient Calls & 100% Inter-Department Free Dialing',
    impactMetricFa: 'پاسخگویی هوشمند به بیماران و مکالمات داخلی کاملاً رایگان بین بخش‌ها',
    overviewEn: 'Deployed a comprehensive Issabel/Asterisk VoIP solution integrating PSTN telephone lines via Grandstream FXO/FXS gateways with digital IP phones across reception, doctors, laboratory, and pharmacy.',
    overviewFa: 'راه‌اندازی سیستم تلفن تحت شبکه بر پایه Issabel/Asterisk با اتصال خطوط آنالوگ شهری از طریق گیت‌وی‌های Grandstream FXO/FXS و تلفن‌های رومیزی IP در بخش‌های پذیرش، پزشکان، آزمایشگاه و داروخانه.',
    problemEn: 'Old analog phone wiring suffered from terrible static noise, busy lines during peak morning hours, no queue visibility, and staff running between physical departments to transfer calls.',
    problemFa: 'سیم‌کشی‌های فرسوده سنتی دارای نویز شدید بود؛ در ساعات شلوغی خطوط اشغال می‌شد و امکان صف‌بندی تماس بیماران یا انتقال تماس بین بخش‌ها وجود نداشت.',
    constraintsEn: [
      'Pharmacy and Emergency extensions must operate 24/7 without software hiccups',
      'Analog POS credit card terminals and fax machines had to be preserved via dedicated FXS ports',
      'Zero audio jitter or packet loss when staff are downloading medical imagery on the same physical cabling',
    ],
    constraintsFa: [
      'خطوط پذیرش و داروخانه باید بدون وقفه ۲۴ ساعته در دسترس باشند',
      'دستگاه‌های فکس و کارتخوان‌های قدیمی باید از طریق پورت‌های FXS حفظ شوند',
      'عدم افت کیفیت صدا و عدم وجود تاخیر حتی در حین دانلود تصاویر سنگین پزشکی در همان شبکه',
    ],
    architectureSummaryEn: 'PSTN Lines → Grandstream GXW FXO Gateway → SIP Trunk → Issabel PBX Server → Voice VLAN 50 (QoS CoS 5 / DSCP EF) → PoE Switches → Grandstream/Yealink IP Handsets & Softphones.',
    architectureSummaryFa: 'خطوط مخابراتی ← گیت‌وی FXO گرنداستریم ← ترانک SIP ← سرور تلفنی Issabel ← شبکه مجزای Voice VLAN با اولویت DSCP EF ← سوئیچ‌های PoE ← تلفن‌های IP پرسنل.',
    technologies: ['Issabel PBX', 'Asterisk', 'Grandstream GXW4108 FXO Gateway', 'Grandstream HT802 FXS', 'Yealink T21P / Grandstream GXP', 'Voice VLAN', 'SIP / RTP Protocols', 'G.711u / G.729 Codecs'],
    implementationStepsEn: [
      'Deployed dedicated Issabel Linux server with mirrored storage and automated scheduled backups',
      'Tuned FXO impedance and line voltage parameters to prevent echo and ensure instant hang-up detection',
      'Designed multi-level IVR (1: Reception & Booking, 2: Pharmacy, 3: Laboratory Results, 4: Management)',
      'Configured ring groups, call recording for quality assurance, and automated night-mode voice greetings',
      'Configured Voice VLAN with Cisco Auto-QoS setting high priority for RTP voice packets',
    ],
    implementationStepsFa: [
      'نصب و کانفیگ سرور لینوکسی Issabel با بک‌آپ‌گیری منظم خودکار',
      'تنظیم دقیق امپدانس و ولتاژ گیت‌وی FXO برای حذف اکو و تشخیص فوری قطع تماس (Disconnect Tone)',
      'طراحی تلفن گویای چندمرحله‌ای IVR (پذیرش، داروخانه، آزمایشگاه و مدیریت)',
      'تعریف صف‌های پاسخگویی، ضبط مکالمات و پیام‌های صوتی ساعات تعطیلی',
      'راه‌اندازی Voice VLAN و اولویت‌بندی بسته‌های RTP جهت تضمین بالاترین وضوح صدا',
    ],
    troubleshootingEn: 'Resolved one-way audio issues on remote branch softphones by adjusting Asterisk NAT configuration (`externip` and `localnet` declarations) and opening verified RTP UDP port ranges (10000-20000).',
    troubleshootingFa: 'رفع مشکل صدای یک‌طرفه در ارتباط شعب دوردست با تنظیم دقیق پارامترهای NAT سرور استریسک و باز کردن رنج پورت‌های RTP.',
    resultEn: 'Crystal-clear digital voice communication across all departments, automated patient queueing, detailed call analytics, and zero missed patient appointments.',
    resultFa: 'کیفیت صدای فوق‌العاده شفاف، کاهش زمان انتظار بیماران در صف تلفن، گزارش‌گیری دقیق از تماس‌ها و ارتباط رایگان شعب.',
    lessonsLearnedEn: 'Fine-tuning analog disconnect tones on FXO gateways is critical; generic default settings will leave trunks stuck in an open busy state.',
    lessonsLearnedFa: 'تنظیم دقیق فرکانس و ریتم بوق قطع مخابرات (Disconnect Tone) روی گیت‌وی‌های آنالوگ برای آزاد شدن به موقع خطوط حیاتی است.',
    diagramType: 'voip-pbx',
  },
];

export const HOMELAB_RACK: RackUnit[] = [
  {
    uSlot: 'U41-U42',
    name: 'CyberPower Smart UPS 2200VA',
    model: 'PR2200ELCD Rackmount',
    roleEn: 'Clean Power Delivery & Line Conditioning',
    roleFa: 'تغذیه بدون وقفه و محافظت ولتاژ رک',
    status: 'online',
    temperature: '26°C',
    powerDraw: '185W',
    specsEn: '2200VA / 1980W, Pure Sine Wave, SNMP RMCARD Network Card',
    specsFa: 'توان ۲۲۰۰ ولت‌آمپر / خروجی سینوسی خالص / کارت شبکه مانیتورینگ SNMP',
    services: [
      {
        name: 'NUT Server',
        type: 'service',
        purposeEn: 'Network UPS Tools daemon broadcasting power events to shut down VMs gracefully during extended outages',
        purposeFa: 'سیستم اطلاع‌رسانی قطعی برق به هایپروایزرها جهت خاموش‌سازی ایمن ماشین‌ها',
      },
    ],
  },
  {
    uSlot: 'U37-U38',
    name: 'HP ProLiant DL360 Gen9 Server',
    model: '1U Dual Intel Xeon E5-2680 v4 (28 Cores / 56 Threads)',
    roleEn: 'Primary Virtualization & Container Host',
    roleFa: 'سرور اصلی مجازی‌سازی و پردازش کانتینرها',
    status: 'active',
    temperature: '31°C',
    powerDraw: '128W',
    specsEn: '128GB DDR4 ECC RAM, 4x 1TB Enterprise NVMe/SSD ZFS Pool, Quad 1GbE + Dual 10GbE SFP+',
    specsFa: '۱۲۸ گیگابایت رم ECC / استوریج پرسرعت ZFS اینترپرایز / پورت‌های شبکه ۱۰ گیگابیت',
    services: [
      {
        name: 'Proxmox VE 8.x',
        type: 'baremetal',
        ip: '192.168.10.2',
        purposeEn: 'Enterprise Hypervisor managing production LXC containers and VMs with ZFS snapshots',
        purposeFa: 'هایپروایزر اصلی مدیریت ماشین‌های مجازی و کانتینرها',
      },
      {
        name: 'Docker Microservices Node',
        type: 'vm',
        ip: '192.168.10.15',
        purposeEn: 'Ubuntu VM hosting Nextcloud, Jitsi Meet, ERPNext, Vaultwarden, and Nginx Proxy Manager',
        purposeFa: 'میزبانی کانتینرهای داکر سازمانی مانند نکست‌کلود، جیتسی، پسورد منیجر و ERP',
      },
      {
        name: 'FreeRADIUS Authentication Server',
        type: 'container',
        ip: '192.168.10.20',
        purposeEn: 'Centralized AAA server authenticating Cisco switches and MikroTik wireless radius clients',
        purposeFa: 'سرور احراز هویت متمرکز تجهیزات شبکه و کاربران',
      },
      {
        name: 'Issabel VoIP PBX Sandbox',
        type: 'vm',
        ip: '192.168.50.10',
        purposeEn: 'Asterisk-based telephony lab testing SIP trunks, IVR routes, and WebRTC gateways',
        purposeFa: 'محیط تست و سناریونویسی سیستم‌های تلفنی تحت شبکه و ترانک‌های SIP',
      },
      {
        name: 'AI Agent & Automation Runner',
        type: 'container',
        ip: '192.168.10.50',
        purposeEn: 'Python Flask API & Ansible execution controller for network changes',
        purposeFa: 'سرور اجرای اسکریپت‌های اتوماسیون انسیبل و دستیار هوش مصنوعی شبکه',
      },
    ],
  },
  {
    uSlot: 'U35-U36',
    name: 'GNS3 & EVE-NG Network Emulation Node',
    model: 'HP ProLiant Secondary Compute Node (64GB RAM)',
    roleEn: 'Complex Network Topologies & Staging Labs',
    roleFa: 'سرور اختصاصی شبیه‌سازی و تست سناریوهای شبکه',
    status: 'online',
    temperature: '29°C',
    powerDraw: '84W',
    specsEn: '64GB RAM, Intel Xeon, Linux KVM with nested virtualization enabled',
    specsFa: '۶۴ گیگابایت رم جهت اجرای همزمان ده‌ها روتر و سوئیچ مجازی',
    services: [
      {
        name: 'GNS3 Server Core',
        type: 'baremetal',
        ip: '192.168.10.5',
        purposeEn: 'Running virtual Cisco IOS-XE, MikroTik CHR, and Arista vEOS topologies for architectural testing',
        purposeFa: 'محیط اجرای روترهای مجازی سیسکو و میکروتیک برای ارزیابی سناریوهای روتینگ پیچیده',
      },
      {
        name: 'WireGuard Mesh Hub',
        type: 'container',
        ip: '192.168.10.8',
        purposeEn: 'Encrypted overlay hub interconnecting remote lab nodes and secure developer tunnels',
        purposeFa: 'هاب تانل‌های رمزنگاری‌شده وایرگارد جهت دسترسی امن به لب از راه دور',
      },
    ],
  },
  {
    uSlot: 'U28',
    name: 'Cisco Catalyst 3750G-24PS Core Switch',
    model: '24-Port Gigabit PoE + 4 SFP L3 Switch',
    roleEn: 'Core Inter-VLAN Routing & Multicast Switch',
    roleFa: 'سوئیچ مرکزی سیسکو لایه ۳ و مسیریابی بین VLANها',
    status: 'online',
    temperature: '34°C',
    powerDraw: '45W',
    specsEn: 'Layer 3 Enhanced Image, 32 Gbps Switch Fabric, Hardware IP Routing, IGMP Querier',
    specsFa: 'سوئیچ لایه ۳ با توان سوییچینگ بالا، روتینگ سخت‌افزاری و تغذیه PoE پورت‌ها',
    services: [
      {
        name: 'VLAN 10: Management & Hypervisors',
        type: 'service',
        purposeEn: 'Out-of-band management and Proxmox/iLO control plane',
        purposeFa: 'شبکه مدیریت سرورها و اینترفیس‌های مدیریتی',
      },
      {
        name: 'VLAN 20: Servers & Storage',
        type: 'service',
        purposeEn: 'High-speed data transfer between VMs, NFS pools, and application services',
        purposeFa: 'ترافیک سرورها و انتقال داده‌های استوریج',
      },
      {
        name: 'VLAN 50: Voice & SIP Traffic',
        type: 'service',
        purposeEn: 'Dedicated voice VLAN with strict DSCP Expedited Forwarding (EF) QoS',
        purposeFa: 'شبکه اختصاصی صوت با اولویت‌بندی کیفی برای تلفن‌های VoIP',
      },
      {
        name: 'VLAN 90: Isolated IoT & Lab Sandbox',
        type: 'service',
        purposeEn: 'Quarantined network segment with zero access to internal hypervisors',
        purposeFa: 'شبکه ایزوله تست سناریوهای آزمایشی بدون دسترسی به سرورهای اصلی',
      },
    ],
  },
  {
    uSlot: 'U24',
    name: 'MikroTik CCR1009-7G-1C-1S+ Core Gateway',
    model: 'Cloud Core Router (9 Core 1.2GHz Tile CPU)',
    roleEn: 'Edge Routing, Multi-WAN Balancing & Firewall',
    roleFa: 'روتر مرکزی لبه شبکه، فایروال و اتصال اینترنت',
    status: 'online',
    temperature: '33°C',
    powerDraw: '32W',
    specsEn: 'RouterOS v7, SFP+ 10G uplink, Hardware FastPath, WireGuard / IPsec acceleration',
    specsFa: 'روتر پرسرعت میکروتیک با پردازنده ۹ هسته‌ای، شتاب‌دهنده سخت‌افزاری تانل‌ها و فایروال لایه‌ای',
    services: [
      {
        name: 'Multi-WAN PCC Load Balancing',
        type: 'service',
        purposeEn: 'Bonding and dynamic failover across multiple ISP connections',
        purposeFa: 'لود بالانسینگ و فیل‌اور بین چندین خط اینترنت',
      },
      {
        name: 'Stateful Layer 7 Firewall Filter',
        type: 'service',
        purposeEn: 'Dropping port scans, brute-force attempts, and isolating guest traffic',
        purposeFa: 'فایروال پیشرفته جهت جلوگیری از حملات Brute-Force و اسکن پورت‌ها',
      },
      {
        name: 'WireGuard Roadwarrior Endpoint',
        type: 'service',
        purposeEn: 'Ultra-low latency cryptographic remote access to internal homelab resources',
        purposeFa: 'دسترسی سریع و امن از بیرون به منابع داخلی آزمایشگاه',
      },
    ],
  },
  {
    uSlot: 'U16',
    name: '24-Port Cat6A Shielded Patch Panel',
    model: 'High-Density Keystone Patch Panel',
    roleEn: 'Structured Structured Cabling & Cable Management',
    roleFa: 'پچ پنل کابل‌کشی ساختاریافته شیلددار',
    status: 'online',
    temperature: 'Ambient',
    powerDraw: '0W',
    specsEn: '10 Gigabit Ethernet Certified, TIA-568-C.2 standard',
    specsFa: 'پشتیبانی از سرعت ۱۰ گیگابیت، تفکیک رنگی کابل‌های شبکه',
    services: [
      {
        name: 'Port Mapping & Cable Color Code',
        type: 'service',
        purposeEn: 'Blue: Infrastructure / Yellow: Voice / Red: Management & iLO / Purple: WAN',
        purposeFa: 'کدگذاری رنگی کابل‌ها جهت عیب‌یابی و نظم استاندارد',
      },
    ],
  },
];

export const PLAYGROUND_ARCHITECTURES: PlaygroundArchitecture[] = [
  {
    id: 'ai-agent-ops',
    titleEn: 'AI Agent for Network Operations (NetMinds Architecture)',
    titleFa: 'معماری دستیار هوشمند اتوماسیون شبکه (AI Network Agent)',
    taglineEn: 'Natural language intent transformed into validated, idempotent network configurations.',
    taglineFa: 'تبدیل درخواست‌های زبانی کاربر به کانفیگ‌های اعتبارسنجی‌شده و اجرای خودکار با Ansible.',
    nodes: [
      { id: 'usr', label: 'Network Engineer (Web UI)', type: 'source', x: 80, y: 180, descriptionEn: 'Enters operational intent (e.g., "Deploy isolated VLAN 120 on Switch-02 ports 5-10")', descriptionFa: 'ورود درخواست عملیاتی توسط ادمین در پنل وب', ip: 'Web Client' },
      { id: 'ai', label: 'AI Validation & Logic Layer', type: 'ai', x: 260, y: 180, descriptionEn: 'Parses intent, checks safety constraints, verifies parameter boundaries, generates YAML payload', descriptionFa: 'تحلیل متن، بررسی تداخل نداشتن با سایر VLANها و ساخت ساختار YAML', ip: 'LLM Orchestrator' },
      { id: 'api', label: 'Flask REST API Controller', type: 'server', x: 440, y: 180, descriptionEn: 'Validates bearer token, writes state audit log, triggers background Ansible runner', descriptionFa: 'وب‌سرویس کنترلر پایتون برای مدیریت اجرا و ثبت لاگ', ip: '192.168.10.50' },
      { id: 'ans', label: 'Ansible Playbook Engine', type: 'server', x: 620, y: 180, descriptionEn: 'Executes idempotent Cisco IOS / RouterOS modules over SSH with connection retry', descriptionFa: 'موتور اجرای انسیبل با ارتباط امن SSH به تجهیزات', ip: 'Ansible Core' },
      { id: 'sw1', label: 'Cisco Catalyst Core (L3)', type: 'switch', x: 800, y: 100, descriptionEn: 'Receives SVI configuration & 802.1Q trunk port membership', descriptionFa: 'سوئیچ لایه ۳ سیسکو جهت تعریف اینترفیس VLAN و ترانک‌ها', ip: '10.0.0.1' },
      { id: 'rt1', label: 'MikroTik Edge Router', type: 'router', x: 800, y: 260, descriptionEn: 'Updates firewall address lists and DHCP server pools for new subnet', descriptionFa: 'روتر میکروتیک جهت ایجاد رنج DHCP و قوانین فایروال', ip: '10.0.0.254' },
    ],
    edges: [
      { from: 'usr', to: 'ai', label: 'Natural Language Intent', protocol: 'HTTPS JSON' },
      { from: 'ai', to: 'api', label: 'Structured Action Plan', protocol: 'REST POST' },
      { from: 'api', to: 'ans', label: 'Trigger Playbook Run', protocol: 'Subprocess/Celery' },
      { from: 'ans', to: 'sw1', label: 'Push Cisco Config', protocol: 'SSH / CLI Netmiko' },
      { from: 'ans', to: 'rt1', label: 'Push MikroTik Config', protocol: 'SSH / RouterOS API' },
    ],
    flowDescriptionEn: [
      '1. Admin submits operational change request via clean UI.',
      '2. AI validates safety rules: confirms VLAN 120 is unallocated, checks port ranges, and formats structured JSON.',
      '3. Flask API verifies authentication token and writes audit log to PostgreSQL database.',
      '4. Ansible executes idempotent tasks on targeted hardware, ensuring zero config drift.',
      '5. Automated post-verification confirms interface upstatus and returns real-time feedback to UI.',
    ],
    flowDescriptionFa: [
      '۱. کارشناس شبکه درخواست مورد نظر را در رابط کاربری وارد می‌کند.',
      '۲. هوش مصنوعی قوانین ایمنی را بررسی کرده و اطمینان حاصل می‌کند تداخلی وجود ندارد.',
      '۳. وب‌سرویس Flask درخواست را تایید و لاگ آن را ذخیره می‌کند.',
      '۴. موتور انسیبل دستورات استاندارد را از طریق SSH روی تجهیزات سیسکو و میکروتیک اعمال می‌کند.',
      '۵. سیستم بلافاصله پس از اجرا، وضعیت سلامت پورت‌ها را تست کرده و نتیجه را نمایش می‌دهد.',
    ],
    cliSample: `---
- name: Deploy Secure Isolated VLAN
  hosts: cisco_switches
  gather_facts: no
  tasks:
    - name: Create VLAN
      cisco.ios.ios_vlans:
        config:
          - vlan_id: 120
            name: "GUEST_DEPT_SECURE"
            state: active
    - name: Set Switchport Access Range
      cisco.ios.ios_interfaces:
        config:
          - name: GigabitEthernet1/0/5
            description: "AI-AUTOMATED-ENDPOINT"`,
  },
  {
    id: 'hotel-iptv-arch',
    titleEn: 'Hotel Enterprise Network & IPTV Multicast Architecture',
    titleFa: 'معماری شبکه یکپارچه هتل و توزیع مالتی‌کست IPTV',
    taglineEn: 'Zero packet loss IPTV multicast distribution combined with isolated guest Wi-Fi and admin networks.',
    taglineFa: 'توزیع بدون لگ شبکه‌های تلویزیونی IPTV همزمان با ایزولاسیون کامل اینترنت مهمانان و شبکه اداری.',
    nodes: [
      { id: 'isp', label: 'Dual ISP Uplinks', type: 'source', x: 80, y: 180, descriptionEn: 'Fiber Internet + Dedicated Satellite IPTV Multicast Feed', descriptionFa: 'خطوط فیبر نوری اینترنت و ورودی اختصاصی استریم‌های تلویزیونی', ip: 'WAN Uplinks' },
      { id: 'cr', label: 'MikroTik Core (PCC & Hotspot)', type: 'router', x: 260, y: 180, descriptionEn: 'Bandwidth management, captive portal, and NAT routing', descriptionFa: 'مدیریت پهنای باند کاربران، درگاه هات‌اسپات و فایروال اصلی', ip: '172.16.0.1' },
      { id: 'swc', label: 'Cisco 3750 L3 Core Switch', type: 'switch', x: 460, y: 180, descriptionEn: 'L3 Inter-VLAN Routing, IGMP Querier, and PIM Multicast Master', descriptionFa: 'سوئیچ لایه ۳، مدیریت روتینگ داخلی و توزیع مالتی‌کست IGMP Querier', ip: '172.16.1.1' },
      { id: 'iptv', label: 'VLAN 40: IPTV Stream Receivers', type: 'endpoint', x: 700, y: 80, descriptionEn: 'Set-top boxes receiving crystal-clear IGMP multicast streams', descriptionFa: 'گیرنده‌های تلویزیونی داخل اتاق‌ها مجهز به IGMP Snooping', ip: '172.16.40.0/24' },
      { id: 'wifi', label: 'VLAN 30: Guest Wi-Fi APs', type: 'endpoint', x: 700, y: 180, descriptionEn: 'Isolated wireless access points with zero multicast bleed', descriptionFa: 'اکسس‌پوینت‌های وای‌فای مهمانان بدون کوچکترین نشت ترافیک تلویزیون', ip: '172.16.30.0/22' },
      { id: 'adm', label: 'VLAN 10: Admin & Front Desk PMS', type: 'endpoint', x: 700, y: 280, descriptionEn: 'Hotel management software, billing, and surveillance CCTV', descriptionFa: 'شبکه اداری، سیستم پذیرش و دوربین‌های امنیتی مداربسته', ip: '172.16.10.0/24' },
    ],
    edges: [
      { from: 'isp', to: 'cr', label: 'Fiber / Satellite', protocol: 'BGP / Static' },
      { from: 'cr', to: 'swc', label: '10G Trunk Uplink', protocol: '802.1Q Trunk' },
      { from: 'swc', to: 'iptv', label: 'Multicast Video Streams', protocol: 'IGMPv2/v3 Snooping' },
      { from: 'swc', to: 'wifi', label: 'Guest Internet Access', protocol: 'Isolated VLAN 30' },
      { from: 'swc', to: 'adm', label: 'Protected PMS Database', protocol: 'Restricted ACL VLAN 10' },
    ],
    flowDescriptionEn: [
      '1. Satellite receiver feeds uncompressed multicast video stream into Core switch.',
      '2. Cisco Core Switch acts as IGMP Querier, routing multicast exclusively to requested switchports.',
      '3. IGMP Snooping prevents multicast packets from flooding into Guest Wi-Fi access points.',
      '4. Strict firewall ACLs on MikroTik router isolate guest traffic from hotel administrative databases.',
    ],
    flowDescriptionFa: [
      '۱. استریم‌های باکیفیت تلویزیون از رسیور مرکزی وارد سوئیچ لایه ۳ سیسکو می‌شوند.',
      '۲. سوئیچ سیسکو با قابلیت IGMP Querier بسته‌ها را فقط به پورت‌هایی که کانال را تقاضا کرده‌اند ارسال می‌کند.',
      '۳. فعال بودن IGMP Snooping مانع از نشت بسته‌های سنگین ویدیو به اکسس‌پوینت‌های وای‌فای می‌شود.',
      '۴. فایروال لایه‌ای دسترسی مهمانان را از سرورهای پذیرش و حسابداری هتل کاملاً مسدود می‌کند.',
    ],
    cliSample: `! Cisco Catalyst Multicast Optimization
ip multicast-routing
ip igmp snooping
ip igmp snooping querier
!
interface Vlan40
 description IPTV_MULTICAST_DISTRIBUTION
 ip address 172.16.40.1 255.255.255.0
 ip pim sparse-dense-mode
 ip igmp version 3`,
  },
  {
    id: 'freeradius-aaa-arch',
    titleEn: 'Centralized Cisco AAA + Linux FreeRADIUS Architecture',
    titleFa: 'معماری احراز هویت متمرکز تجهیزات شبکه با Cisco AAA و FreeRADIUS',
    taglineEn: 'Zero shared passwords: every CLI command authenticated, audited, and logged.',
    taglineFa: 'حذف کامل پسوردهای مشترک؛ ثبت و حسابرسی دقیق تمام دستورات واردشده در سوئیچ‌ها.',
    nodes: [
      { id: 'admin', label: 'Network Engineer (SSH)', type: 'source', x: 80, y: 180, descriptionEn: 'Connects to switch console via SSH using personal credentials', descriptionFa: 'ورود کارشناس شبکه با نام کاربری اختصاصی از طریق SSH', ip: 'Admin Workstation' },
      { id: 'sw', label: 'Cisco Switch (AAA Client)', type: 'switch', x: 340, y: 180, descriptionEn: 'Intercepts login, queries RADIUS server, falls back to local on timeout', descriptionFa: 'سوئیچ سیسکو جهت ارجاع درخواست لاگین به سرور احراز هویت', ip: '10.10.0.15' },
      { id: 'rad', label: 'FreeRADIUS Daemon (Ubuntu)', type: 'server', x: 600, y: 180, descriptionEn: 'Validates credentials, assigns Privilege Level (1 vs 15), starts accounting session', descriptionFa: 'سرور لینوکسی رادیوس جهت اعتبارسنجی رمز و تعیین سطح دسترسی', ip: '10.10.0.2' },
      { id: 'sys', label: 'Centralized Syslog Audit Server', type: 'server', x: 820, y: 180, descriptionEn: 'Stores tamper-proof audit trail of all commands entered by each engineer', descriptionFa: 'سرور ثبت لاگ متمرکز جهت نگهداری گزارش کلیه تغییرات اعمال‌شده', ip: '10.10.0.5' },
    ],
    edges: [
      { from: 'admin', to: 'sw', label: 'SSHv2 Connection', protocol: 'TCP 22' },
      { from: 'sw', to: 'rad', label: 'RADIUS Auth & Accounting', protocol: 'UDP 1812 / 1813' },
      { from: 'rad', to: 'sys', label: 'Audit Log Stream', protocol: 'Syslog UDP 514' },
    ],
    flowDescriptionEn: [
      '1. Engineer opens SSH session to Cisco switch and enters personal username.',
      '2. Switch forwards cryptographic RADIUS authentication request to FreeRADIUS server.',
      '3. FreeRADIUS verifies credentials and returns Access-Accept with Cisco-AVPair privilege level.',
      '4. Switch begins AAA accounting session, logging every command executed in CLI directly to Syslog.',
    ],
    flowDescriptionFa: [
      '۱. مهندس شبکه با اطلاعات اختصاصی خود به سوئیچ سیسکو متصل می‌شود.',
      '۲. سوئیچ درخواست احراز هویت را در قالب پکت‌های رمزنگاری‌شده به سرور FreeRADIUS ارسال می‌کند.',
      '۳. سرور رادیوس صحت هویت را تایید کرده و سطح دسترسی (Privilege Level) را بازمی‌گرداند.',
      '۴. سوئیچ بلافاصله سشن حسابرسی را فعال کرده و تک‌تک دستورات واردشده را به سرور لاگ می‌فرستد.',
    ],
    cliSample: `! Cisco AAA Configuration
aaa new-model
radius server RADIUS-PROD-01
 address ipv4 10.10.0.2 auth-port 1812 acct-port 1813
 key 7 StrictSecretKey2026!
!
aaa authentication login default group radius local
aaa authorization exec default group radius local
aaa accounting commands 15 default start-stop group radius`,
  },
  {
    id: 'voip-pbx-arch',
    titleEn: 'Enterprise VoIP & Multi-Branch Telephony Architecture',
    titleFa: 'معماری سیستم تلفن تحت شبکه VoIP سازمانی و کلینیک',
    taglineEn: 'Reliable PSTN integration via Grandstream FXO gateways with smart multi-level IVR routing.',
    taglineFa: 'اتصال خطوط شهری با گیت‌وی FXO گرنداستریم و تلفن گویای هوشمند چندمرحله‌ای.',
    nodes: [
      { id: 'pstn', label: 'PSTN Telecom Lines', type: 'source', x: 80, y: 180, descriptionEn: 'Physical copper analog phone lines from telecom provider', descriptionFa: 'خطوط آنالوگ مخابراتی ثابت شهری', ip: 'PSTN Lines' },
      { id: 'fxo', label: 'Grandstream FXO Gateway', type: 'server', x: 260, y: 180, descriptionEn: 'Digitizes analog voice lines into SIP trunk signaling with echo cancellation', descriptionFa: 'تبدیل سیگنال آنالوگ به دیجیتال با گیت‌وی FXO گرنداستریم', ip: '192.168.50.2' },
      { id: 'pbx', label: 'Issabel PBX Server Core', type: 'server', x: 460, y: 180, descriptionEn: 'Asterisk engine running IVR trees, ring groups, call queues, and recording', descriptionFa: 'سرور اصلی Issabel/Asterisk جهت مدیریت داخلی‌ها، صف‌ها و تلفن گویا', ip: '192.168.50.10' },
      { id: 'ip1', label: 'Doctor & Clinic Extensions', type: 'endpoint', x: 740, y: 80, descriptionEn: 'Desktop Yealink IP phones with BLF status keys and crystal audio', descriptionFa: 'تلفن‌های رومیزی IP در اتاق پزشکان و بخش پذیرش', ip: 'Ext 101-110' },
      { id: 'ip2', label: 'Pharmacy & Warehouse Softphones', type: 'endpoint', x: 740, y: 280, descriptionEn: 'Wireless SIP handsets and PC softphones for mobile pharmacy staff', descriptionFa: 'گوشی‌های بی‌سیم تحت شبکه و سافت‌فون در داروخانه و انبار', ip: 'Ext 201-208' },
    ],
    edges: [
      { from: 'pstn', to: 'fxo', label: 'Analog FXO Inbound', protocol: 'RJ11 Copper' },
      { from: 'fxo', to: 'pbx', label: 'SIP Trunk Registration', protocol: 'SIP UDP 5060' },
      { from: 'pbx', to: 'ip1', label: 'Voice VLAN 50 Stream', protocol: 'RTP Audio (G.711u)' },
      { from: 'pbx', to: 'ip2', label: 'Wireless SIP Extension', protocol: 'RTP Audio (G.729)' },
    ],
    flowDescriptionEn: [
      '1. Patient calls clinic phone number; FXO gateway detects voltage change and answers.',
      '2. Gateway bridges voice call to Issabel PBX over authenticated SIP Trunk.',
      '3. PBX plays high-definition IVR audio greeting and routes call to appropriate queue.',
      '4. Voice RTP packets travel across dedicated Voice VLAN with highest QoS priority.',
    ],
    flowDescriptionFa: [
      '۱. بیمار با شماره مرکز تماس می‌گیرد؛ گیت‌وی FXO تماس را به دیجیتال تبدیل می‌کند.',
      '۲. گیت‌وی تماس را از طریق ترانک امن SIP به سرور تلفنی Issabel منتقل می‌کند.',
      '۳. سیستم تلفن گویای IVR پیام خوش‌آمدگویی را پخش کرده و تماس را به صف هدایت می‌کند.',
      '۴. بسته‌های صوتی RTP در بستر شبکه اختصاصی Voice VLAN با بالاترین اولویت صوتی منتقل می‌شوند.',
    ],
    cliSample: `; Asterisk SIP Trunk to Grandstream FXO
[grandstream-fxo]
type=friend
host=192.168.50.2
port=5060
context=from-pstn
insecure=port,invite
disallow=all
allow=ulaw
allow=alaw
qualify=yes`,
  },
];

export const TECH_RADAR_ITEMS: TechRadarItem[] = [
  // CORE (Proven daily production mastery)
  { name: 'Cisco Routing & Switching', quadrant: 'networking', ring: 'core', descriptionEn: 'L2/L3 architecture, VLANs, STP, OSPF, ACLs, NAT', descriptionFa: 'طراحی سوئیچینگ و روتینگ لایه ۲ و ۳، OSPF و فایروال' },
  { name: 'MikroTik RouterOS', quadrant: 'networking', ring: 'core', descriptionEn: 'PCC Load balancing, Mangle, WireGuard, Firewall, Hotspot', descriptionFa: 'لود بالانسینگ، فایروال، وایرگارد و تانل‌های امن' },
  { name: 'Linux Administration (Ubuntu/Debian)', quadrant: 'systems', ring: 'core', descriptionEn: 'Enterprise server setup, systemd, hardening, storage', descriptionFa: 'مدیریت حرفه‌ای سرورهای لینوکس، امن‌سازی و سرویس‌ها' },
  { name: 'Network Troubleshooting & Wireshark', quadrant: 'networking', ring: 'core', descriptionEn: 'Deep packet inspection, latency & drop analysis', descriptionFa: 'تحلیل دقیق بسته‌های شبکه با Wireshark و رفع اختلالات' },

  // PRODUCTION (Strong practical deployments in live environments)
  { name: 'FreeRADIUS & Cisco AAA', quadrant: 'systems', ring: 'production', descriptionEn: 'Centralized network access authentication & accounting', descriptionFa: 'احراز هویت متمرکز و حسابرسی دسترسی به تجهیزات' },
  { name: 'Issabel / Asterisk VoIP', quadrant: 'systems', ring: 'production', descriptionEn: 'SIP Trunks, multi-level IVR, FXO/FXS gateways', descriptionFa: 'راه‌اندازی مراکز تلفن تحت شبکه، گیت‌وی‌ها و IVR' },
  { name: 'Proxmox VE & VMware ESXi', quadrant: 'systems', ring: 'production', descriptionEn: 'Hypervisor clusters, virtual networking, snapshot DR', descriptionFa: 'کلاسترهای مجازی‌سازی، سوئیچ‌های مجازی و بک‌آپ' },
  { name: 'IPTV & Multicast (IGMP Snooping)', quadrant: 'networking', ring: 'production', descriptionEn: 'Zero-drop video streaming for hospitality networks', descriptionFa: 'توزیع استریم‌های تلویزیونی بدون افت سرعت وای‌فای' },

  // EXPANDING (Active implementation & automation projects)
  { name: 'Ansible for Networking', quadrant: 'automation', ring: 'expanding', descriptionEn: 'Automated multi-switch configuration playbooks', descriptionFa: 'اتوماسیون تنظیمات تجهیزات شبکه با پلی‌بوک‌های انسیبل' },
  { name: 'Docker & Docker Compose', quadrant: 'systems', ring: 'expanding', descriptionEn: 'Self-hosted microservices, Nextcloud, Jitsi, reverse proxies', descriptionFa: 'کانتینرسازی سرویس‌های سازمانی و پروکسی معکوس' },
  { name: 'Python Network Scripting', quadrant: 'automation', ring: 'expanding', descriptionEn: 'Netmiko, REST APIs, config validation scripts', descriptionFa: 'اسکریپت‌نویسی پایتون جهت ارتباط با APIها و تجهیزات' },
  { name: 'WireGuard Mesh Networking', quadrant: 'networking', ring: 'expanding', descriptionEn: 'High-performance cryptographic multi-site overlays', descriptionFa: 'ایجاد تانل‌های پرسرعت رمزنگاری‌شده بین شعب' },

  // EXPLORING (Future technological frontier)
  { name: 'AI Network Agents (LLM + CLI)', quadrant: 'ai', ring: 'exploring', descriptionEn: 'Natural language intent orchestration for network changes', descriptionFa: 'دستیارهای هوش مصنوعی برای مدیریت و پیکربندی شبکه' },
  { name: 'AI-assisted Syslog Anomaly Detection', quadrant: 'ai', ring: 'exploring', descriptionEn: 'Correlating log patterns to predict infrastructure failures', descriptionFa: 'کشف هوشمند ناهنجاری‌ها و پیش‌بینی خرابی با تحلیل لاگ' },
  { name: 'AI Solution Architecture', quadrant: 'ai', ring: 'exploring', descriptionEn: 'Enterprise infrastructure design for scalable AI workloads', descriptionFa: 'معماری زیرساخت‌های مقیاس‌پذیر برای بارهای کاری هوش مصنوعی' },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ccna',
    title: 'Cisco Certified Network Associate (CCNA)',
    vendor: 'Cisco',
    code: '200-301',
    category: 'Enterprise Networking',
    issued: 'Enterprise Verified Knowledge',
    descriptionEn: 'Network fundamentals, network access, IP connectivity, IP services, security fundamentals, and automation and programmability.',
    descriptionFa: 'مفاهیم پایه شبکه، اتصال و سرویس‌های IP، سوئیچینگ، روتینگ، امنیت پایه و اتوماسیون تجهیزات سیسکو.',
    skills: ['Cisco IOS', 'VLANs', 'Trunking', 'OSPFv2', 'ACLs', 'NAT/PAT', 'DHCP Snooping', 'STP'],
  },
  {
    id: 'ccnp-rs',
    title: 'Cisco Certified Network Professional (CCNP R&S)',
    vendor: 'Cisco',
    code: '300-101 / 300-115',
    category: 'Advanced Enterprise Infrastructure',
    issued: 'Advanced Enterprise Curriculum',
    descriptionEn: 'Advanced enterprise routing (EIGRP, OSPF, BGP, Path Control), campus switching (MSTP, Private VLANs, FHRP, Port Security), and structured troubleshooting methodology.',
    descriptionFa: 'روتینگ پیشرفته سازمانی، پروتکل‌های OSPF و BGP، سوییچینگ پیشرفته، افزونگی FHRP، امنیت پورت‌ها و متدولوژی عیب‌یابی.',
    skills: ['BGP', 'OSPF Multi-Area', 'MSTP', 'HSRP/VRRP', 'Inter-VLAN', 'Advanced QoS', 'Switch Security'],
  },
  {
    id: 'mtcna',
    title: 'MikroTik Certified Network Associate (MTCNA)',
    vendor: 'MikroTik',
    code: 'RouterOS MTCNA',
    category: 'RouterOS Fundamentals & Security',
    issued: 'Official MikroTik Curriculum',
    descriptionEn: 'RouterOS installation, firewall filters, NAT, queue bandwidth management, wireless access, bridging, and tunneling.',
    descriptionFa: 'نصب و راه‌اندازی RouterOS، فایروال لایه‌ای، NAT، مدیریت پهنای باند، وایرلس، بریجینگ و تانل‌ها.',
    skills: ['RouterOS v7', 'Firewall Filter', 'NAT', 'Simple Queues', 'Wireless', 'PPPoE', 'EoIP'],
  },
  {
    id: 'mtcre',
    title: 'MikroTik Certified Routing Engineer (MTCRE)',
    vendor: 'MikroTik',
    code: 'RouterOS MTCRE',
    category: 'Advanced Routing & VPNs',
    issued: 'Official MikroTik Curriculum',
    descriptionEn: 'Static routing, policy-based routing, OSPF point-to-point & broadcast networks, recursive routing, and point-to-point tunneling (IPIP, GRE, EoIP).',
    descriptionFa: 'روتینگ استاتیک و داینامیک، پالیسی روتینگ، پروتکل OSPF، روتینگ بازگشتی و انواع تانل‌های نقطه به نقطه.',
    skills: ['OSPF', 'Policy Routing', 'Recursive Routes', 'IPIP/GRE Tunnels', 'Multi-WAN Balancing'],
  },
  {
    id: 'mtcse',
    title: 'MikroTik Certified Security Engineer (MTCSE)',
    vendor: 'MikroTik',
    code: 'RouterOS MTCSE',
    category: 'Network Hardening & Cryptography',
    issued: 'Official MikroTik Curriculum',
    descriptionEn: 'Device hardening, attack mitigation (brute-force, port scan, SYN flood), Layer 7 filters, IPsec IKEv2, and secure remote management.',
    descriptionFa: 'مقاوم‌سازی روتر، مقابله با حملات Brute-Force و اسکن پورت، فیلتر لایه ۷، تانل‌های IPsec IKEv2 و مدیریت امن.',
    skills: ['IPsec IKEv2', 'L7 Filtering', 'Stateful Firewall', 'Hardening', 'Port Knocking', 'FastTrack Bypass'],
  },
  {
    id: 'mtcine',
    title: 'MikroTik Certified Inter-Networking Engineer (MTCINE)',
    vendor: 'MikroTik',
    code: 'RouterOS MTCINE',
    category: 'Service Provider & Core Routing',
    issued: 'Official MikroTik Curriculum',
    descriptionEn: 'BGP (iBGP, eBGP, Route Reflectors, Communities), MPLS, VPLS, and Traffic Engineering across large-scale networks.',
    descriptionFa: 'مفاهیم BGP سازمانی، ترافیک اینجینیرینگ، MPLS و VPLS در شبکه‌های ارائه‌دهنده سرویس.',
    skills: ['BGP Peering', 'MPLS', 'VPLS', 'Traffic Engineering', 'Route Filtering'],
  },
  {
    id: 'mtcwe',
    title: 'MikroTik Certified Wireless Engineer (MTCWE)',
    vendor: 'MikroTik',
    code: 'RouterOS MTCWE',
    category: 'Wireless Engineering & CAPsMAN',
    issued: 'Official MikroTik Curriculum',
    descriptionEn: '802.11a/b/g/n/ac wireless protocols, frequency planning, antenna polarization, link budgets, and CAPsMAN centralized AP controller.',
    descriptionFa: 'استانداردهای وایرلس، محاسبات لینک و آنتن، مدیریت متمرکز اکسس‌پوینت‌ها با سامانه CAPsMAN.',
    skills: ['CAPsMAN', '802.11ac', 'Wireless Security', 'Frequency Planning', 'WDS Mesh'],
  },
  {
    id: 'lpic',
    title: 'Linux Professional Institute (LPIC-1 & LPIC-2 Curriculum)',
    vendor: 'Linux',
    code: 'LPIC-1 / LPIC-2',
    category: 'Linux Systems & Network Services',
    issued: 'Advanced Practical Administration',
    descriptionEn: 'System architecture, package management, GNU/Unix commands, devices, Linux filesystems, kernel components, storage management, networking services, and security.',
    descriptionFa: 'معماری سیستم لینوکس، پکیج منیجرها، فایل‌سیستم‌ها، کرنل، پیکربندی کارت‌های شبکه، سرویس‌های سیستمی و امنیت.',
    skills: ['Linux Kernel', 'Systemd', 'Storage/LVM', 'Iptables/UFW', 'Nginx/Apache', 'DNS (BIND)', 'Samba/NFS'],
  },
  {
    id: 'mcse',
    title: 'Microsoft Certified Systems Engineer / MCSA Studies',
    vendor: 'Microsoft',
    code: 'Windows Server & Active Directory',
    category: 'Directory Services & Enterprise Domain',
    issued: 'Enterprise Systems Administration',
    descriptionEn: 'Active Directory Domain Services (AD DS), Group Policy Objects (GPOs), DNS, DHCP, and Windows Server infrastructure integration with Linux/Cisco networks.',
    descriptionFa: 'اکتیو دایرکتوری، گروپ پالیسی (GPO)، مدیریت دسترسی کاربران و یکپارچه‌سازی ویندوز سرور با زیرساخت لینوکس.',
    skills: ['Active Directory', 'Group Policy', 'DNS/DHCP', 'Domain Controllers', 'Windows Server'],
  },
  {
    id: 'degree',
    title: 'Bachelor of Science in Computer Engineering',
    vendor: 'Academic',
    code: 'B.Sc. Degree',
    category: 'University Degree',
    issued: 'Academic Degree',
    descriptionEn: 'Core foundations in computer systems architecture, operating systems, data communications, algorithms, and distributed computing.',
    descriptionFa: 'کارشناسی مهندسی کامپیوتر با تمرکز بر معماری سیستم‌ها، سیستم‌های عامل، شبکه‌های کامپیوتری و محاسبات توزیع‌شده.',
    skills: ['Computer Architecture', 'Operating Systems', 'Algorithms', 'Data Communications'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-network-automation-2026',
    titleEn: 'Beyond the Hype: How AI Actually Transforms Network Operations in 2026',
    titleFa: 'فراتر از شعار: هوش مصنوعی چگونه عملیات مهندسی شبکه را متحول می‌کند؟',
    date: 'August 2026',
    readTimeEn: '6 min read',
    readTimeFa: '۶ دقیقه مطالعه',
    category: 'AI × Network Automation',
    excerptEn: 'Why LLMs cannot be trusted directly with raw device CLIs, and how structured orchestration layers (Ansible + REST APIs) make AI safely usable on production infrastructure.',
    excerptFa: 'چرا نباید مدل‌های هوش مصنوعی را مستقیماً به CLI روتر متصل کرد و چگونه پایپ‌لاین‌های اعتبارسنجی (Ansible + API) اجرای تغییرات را ایمن می‌سازند.',
    contentEn: `When engineers discuss "AI for Networking", the misconception is that an LLM directly connects to a switch terminal and writes raw commands. In mission-critical environments, this is a recipe for catastrophic outages.

The true architecture of AI-assisted infrastructure relies on a three-tier validation model:
1. **Natural Language Intent Parsing**: The AI extracts parameters (VLAN IDs, interface lists, ACL rules) and formats them into a strict schema.
2. **Deterministic Pre-flight Gatekeeper**: Code-driven logic (Python/FastAPI) verifies against the existing network state—checking for overlapping subnets or STP priority clashes.
3. **Idempotent Execution Engine**: Ansible executes the change using verified vendor modules, followed by immediate post-change telemetry capture.

This ensures zero hallucinations reach the production control plane.`,
    contentFa: `هنگامی که از «هوش مصنوعی در مهندسی شبکه» صحبت می‌شود، تصور اشتباه این است که یک مدل زبانی مستقیماً به ترمینال سوئیچ وصل شده و دستور تایپ کند. در محیط‌های واقعی سازمانی، این کار فاجعه‌آفرین است.

معماری واقعی اتوماسیون هوشمند شبکه بر پایه سه لایه استوار است:
۱. **ترجمه قصد کاربر**: هوش مصنوعی پارامترها (مانند شماره VLAN، رنج پورت و ساب‌نت) را به یک ساختار استاندارد JSON تبدیل می‌کند.
۲. **اعتبارسنجی قطعی و خطاناپذیر**: وب‌سرویس پایتون تداخل نداشتن کانفیگ جدید با وضعیت فعلی شبکه را بررسی می‌کند.
۳. **موتور اجرای انسیبل**: تسک‌های انسیبل با ماژول‌های رسمی تغییرات را اعمال کرده و تله‌متری سلامت شبکه را پس از اجرا می‌سنجند.

با این روش، هیچ خطای احتمالی یا توهمی به سطح تجهیزات عملیاتی راه پیدا نخواهد کرد.`,
    tags: ['AI Agents', 'Ansible', 'Python', 'Network Automation', 'Cisco'],
  },
  {
    id: 'freeradius-cisco-hardening-guide',
    titleEn: 'Step-by-Step: Centralizing Cisco Switch AAA with FreeRADIUS on Linux',
    titleFa: 'راهنمای گام به گام: احراز هویت متمرکز سوئیچ‌های سیسکو با FreeRADIUS لینوکس',
    date: 'July 2026',
    readTimeEn: '8 min read',
    readTimeFa: '۸ دقیقه مطالعه',
    category: 'Network Security',
    excerptEn: 'A deep-dive technical guide to eradicating shared switch credentials, setting up FreeRADIUS on Ubuntu, configuring Cisco IOS AAA, and securing fallback access.',
    excerptFa: 'بررسی فنی حذف پسوردهای مشترک روی سوئیچ‌ها، کانفیگ FreeRADIUS روی اوبونتو و تنظیم مدل AAA سیسکو به همراه مکانیزم دسترسی اضطراری.',
    contentEn: `Shared enable passwords on enterprise switches create severe security vulnerabilities and audit failures. By deploying FreeRADIUS on an Ubuntu Linux server, every engineer logs in with an individual account and receives role-based privilege levels.

Key takeaways from production deployments:
- Always define an explicit source interface using \`ip radius source-interface\` to prevent routing mismatches.
- Ensure the fallback local account is protected with strong secret hashing in case the RADIUS server is temporarily unreachable.
- Enable command accounting (\`aaa accounting commands 15\`) to feed all executed CLI syntax directly into your central security logging repository.`,
    contentFa: `استفاده از پسوردهای مشترک روی سوئیچ‌های سازمانی یک ریسک امنیتی جدی و مغایر با استانداردهای حسابرسی است. با راه‌اندازی FreeRADIUS روی سرور لینوکس، هر کارشناس با حساب کاربری مجزا وارد شده و سطح دسترسی مشخص دریافت می‌کند.

نکات کلیدی تجربیات عملیاتی:
- همیشه اینترفیس مبدا پکت‌های رادیوس را با دستور \`ip radius source-interface\` به طور صریح مشخص کنید.
- مکانیزم دسترسی محلی اضطراری (Fallback) را با رمز قوی تنظیم کنید تا در صورت قطعی شبکه سرور رادیوس، دسترسی ادمین قطع نشود.
- قابلیت Command Accounting را فعال نمایید تا تمامی دستورات وارد شده در ترمینال مستقیماً در سرور لاگ ثبت شوند.`,
    tags: ['FreeRADIUS', 'Cisco AAA', 'Linux Hardening', 'Security', 'Syslog'],
  },
  {
    id: 'hotel-iptv-multicast-mastery',
    titleEn: 'Engineering Multicast IPTV: Preventing Wi-Fi Floods with IGMP Snooping',
    titleFa: 'مهندسی توزیع مالتی‌کست IPTV: جلوگیری از افت سرعت وای‌فای با IGMP Snooping',
    date: 'June 2026',
    readTimeEn: '7 min read',
    readTimeFa: '۷ دقیقه مطالعه',
    category: 'Enterprise Networking',
    excerptEn: 'How unmanaged multicast streams can paralyze wireless access points in hotels, and how proper L2/L3 IGMP Querier engineering solves it permanently.',
    excerptFa: 'چرا عدم مدیریت ترافیک مالتی‌کست ویدیو باعث فلادینگ و قطع وای‌فای هتل می‌شود و چگونه تنظیم IGMP Querier روی سوئیچ لایه ۳ مشکل را برای همیشه حل می‌کند.',
    contentEn: `In hotel networks, high-definition IPTV streams utilize UDP multicast (e.g. 239.255.x.x). Because standard L2 switches treat unknown multicast as broadcast, streams flood every single connected port—instantly saturating Wi-Fi access points and dropping guest connections.

The permanent architectural solution:
1. Isolate IPTV streams into a dedicated VLAN (e.g., VLAN 40).
2. Enable \`ip igmp snooping\` across all access layer switches.
3. Configure the Core L3 switch as the active \`ip igmp snooping querier\`.
4. Enable \`fast-leave\` on set-top box access ports so bandwidth is released the instant a guest switches channels.`,
    contentFa: `در شبکه‌های هتل، استریم‌های کیفیت بالای تلویزیونی از پروتکل مالتی‌کست UDP استفاده می‌کنند. از آنجا که سوئیچ‌های لایه ۲ به صورت پیش‌فرض با مالتی‌کست ناشناخته مانند برودکست رفتار می‌کنند، ترافیک ویدیو به تمام پورت‌ها ارسال شده و باعث اشباع شدن کامل اکسس‌پوینت‌های وای‌فای می‌گردد.

راهکار مهندسی پایدار:
۱. تفکیک کامل استریم‌های IPTV در یک VLAN اختصاصی.
۲. فعال‌سازی IGMP Snooping روی تمامی سوئیچ‌های لایه دسترسی.
۳. تعریف سوئیچ لایه ۳ به عنوان IGMP Querier فعال در شبکه.
۴. فعال‌سازی قابلیت Fast-Leave روی پورت‌های متصل به گیرنده‌ها جهت آزادسازی سریع پهنای باند هنگام تعویض کانال.`,
    tags: ['IPTV', 'Multicast', 'Cisco Catalyst', 'IGMP Snooping', 'VLANs'],
  },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'enterprise-network-design',
    titleEn: 'Enterprise Network Architecture & Redesign',
    titleFa: 'طراحی و بهینه‌سازی معماری شبکه سازمانی',
    icon: 'Network',
    descriptionEn: 'Designing scalable, redundant, multi-VLAN campus networks with Cisco and MikroTik, zero-downtime failover, and hardware QoS prioritization.',
    descriptionFa: 'طراحی شبکه‌های پایدار و ماژولار سازمانی، تفکیک VLANها، روتینگ پیشرفته، افزونگی کامل خطوط و اولویت‌بندی ترافیک.',
    deliverablesEn: [
      'Comprehensive L2/L3 topology diagrams (SVG/Visio)',
      'Subnetting, VLAN numbering & IP allocation schema',
      'Multi-WAN PCC load balancing & instant failover scripts',
      'Spanning Tree & Loop prevention configuration',
      'QoS policies prioritizing ERP, database, and voice traffic',
    ],
    deliverablesFa: [
      'مستندات و نقشه‌های کامل توپولوژی لایه ۲ و ۳',
      'طرح جامع ساب‌نتینگ، شماره‌گذاری VLANها و آدرس‌دهی IP',
      'کانفیگ لود بالانسینگ و فیل‌اور بدون قطعی چند خط اینترنت',
      'تنظیمات Spanning Tree جهت جلوگیری از لوپ‌های شبکه',
      'تعریف خط‌مشی‌های QoS برای اولویت‌دهی نرم‌افزارهای حیاتی و صوت',
    ],
  },
  {
    id: 'troubleshooting-audit',
    titleEn: 'Network Troubleshooting & Infrastructure Audit',
    titleFa: 'عیب‌یابی تخصصی، رفع اختلال و ممیزی زیرساخت',
    icon: 'Activity',
    descriptionEn: 'Pinpointing root causes of persistent network drops, latency spikes, broadcast storms, packet leaks, and configuration drifts across multi-vendor fleets.',
    descriptionFa: 'شناسایی و رفع ریشه‌ای قطعی‌های مداوم شبکه، کندی سرعت، لوپ‌های لایه ۲، نشت ترافیک و خطاهای پیکربندی تجهیزات.',
    deliverablesEn: [
      'Wireshark packet capture & protocol anomaly reports',
      'Physical & virtual cabling / switchport health audit',
      'MTU mismatch & asymmetric routing resolution',
      'Comprehensive remediation plan with step-by-step execution',
      'Post-fix validation telemetry and monitoring baseline',
    ],
    deliverablesFa: [
      'تحلیل عمیق ترافیک با وایرشارک و گزارش عیب‌یابی پروتکل‌ها',
      'بررسی سلامت فیزیکی و منطقی پورت‌های سوئیچ و اتصالات',
      'رفع مغایرت‌های MTU و تصحیح روتینگ‌های نامتقارن',
      'ارائه نقشه راه گام به گام رفع مشکلات زیرساختی',
      'تست و مانیتورینگ نهایی جهت تایید پایداری کامل سیستم',
    ],
  },
  {
    id: 'voip-telephony',
    titleEn: 'Unified VoIP Telephony & PBX Migration',
    titleFa: 'راه‌اندازی مراکز تلفن VoIP و مهاجرت از خطوط سنتی',
    icon: 'PhoneCall',
    descriptionEn: 'Deploying Issabel/Asterisk PBX systems, multi-level IVR interactive voice menus, FXO/FXS gateways, and voice VLAN optimization.',
    descriptionFa: 'راه‌اندازی کامل مراکز تلفن تحت شبکه، تلفن گویای هوشمند، اتصال خطوط آنالوگ مخابرات با گیت‌وی‌های FXO/FXS و بهینه‌سازی Voice VLAN.',
    deliverablesEn: [
      'Issabel/Asterisk PBX server deployment with automated backups',
      'Grandstream FXO gateway configuration with echo cancellation',
      'Multi-level IVR tree design & professional call routing',
      'Extension provisioning on Yealink & Grandstream IP phones',
      'Dedicated Voice VLAN with DSCP QoS ensuring crystal audio',
    ],
    deliverablesFa: [
      'نصب سرور پایدار Issabel با سیستم بک‌آپ‌گیری خودکار',
      'تنظیم دقیق گیت‌وی‌های FXO جهت اتصال بی‌نقص خطوط شهری',
      'طراحی درخت منوی صوتی تلفن گویا (IVR) و صف‌های پاسخگویی',
      'تعریف و پیکربندی داخلی‌های تلفن رومیزی و نرم‌افزاری',
      'راه‌اندازی شبکه مجزای Voice VLAN جهت تضمین بالاترین کیفیت صدا',
    ],
  },
  {
    id: 'linux-virtualization',
    titleEn: 'Linux Servers & Hypervisor Infrastructure',
    titleFa: 'سرورهای لینوکس، مجازی‌سازی و سرویس‌های پایه',
    icon: 'Terminal',
    descriptionEn: 'Production Proxmox/ESXi hypervisor clustering, enterprise Linux server hardening, DNS/DHCP infrastructure, and Docker container hosting.',
    descriptionFa: 'راه‌اندازی کلاسترهای مجازی‌سازی Proxmox و ESXi، مقاوم‌سازی سرورهای لینوکسی، سرویس‌های DNS/DHCP و کانتینرهای داکر.',
    deliverablesEn: [
      'Bare-metal Proxmox VE / ESXi hypervisor deployment',
      'Enterprise Linux hardening (SSH, UFW, Fail2ban, PAM)',
      'FreeRADIUS centralized AAA integration for network devices',
      'Internal DNS (BIND/Dnsmasq) and Nginx reverse proxy stacks',
      'Automated disaster recovery snapshot & remote backup pipelines',
    ],
    deliverablesFa: [
      'نصب هایپروایزرهای Proxmox VE و ESXi روی سرورهای فیزیکی',
      'مقاوم‌سازی امنیتی سرورهای لینوکس (فایروال، کلید SSH، Fail2ban)',
      'راه‌اندازی سرور احراز هویت متمرکز FreeRADIUS برای تجهیزات شبکه',
      'پیکربندی DNS محلی و وب‌سرورهای پروکسی معکوس Nginx',
      'ایجاد سیستم بک‌آپ‌گیری خودکار اسنپ‌شات برای بازگردانی سریع در شرایط بحران',
    ],
  },
  {
    id: 'network-automation',
    titleEn: 'Network Automation & AI-Assisted Workflows',
    titleFa: 'اتوماسیون شبکه و پایپ‌لاین‌های هوشمند',
    icon: 'Cpu',
    descriptionEn: 'Modernizing repetitive CLI configuration tasks with idempotent Ansible playbooks, Python scripts, API integrations, and AI workflow pilots.',
    descriptionFa: 'حذف کارهای تکراری و خطاهای دستی با ساخت پلی‌بوک‌های Ansible، اسکریپت‌های پایتون و پیاده‌سازی دستیارهای هوش مصنوعی.',
    deliverablesEn: [
      'Ansible playbooks for mass VLAN, interface, and ACL rollouts',
      'Automated daily configuration backup & git diff auditing',
      'Python REST API middleware connecting web forms to network gear',
      'Pilot AI Agent interface for validated natural-language changes',
      'Automated network change verification and reporting',
    ],
    deliverablesFa: [
      'نوشتن پلی‌بوک‌های انسیبل جهت اعمال همزمان تنظیمات روی چندین سوئیچ',
      'سیستم بک‌آپ‌گیری خودکار روزانه از کانفیگ‌ها و ثبت تغییرات در Git',
      'ساخت وب‌سرویس پایتون جهت اتصال فرم‌های وب به تجهیزات شبکه',
      'راه‌اندازی پایلوت دستیار هوش مصنوعی برای مدیریت کنترل‌شده تغییرات',
      'تاییدیه خودکار سلامت شبکه پس از هر تغییر پیکربندی',
    ],
  },
];

export const CAREER_TIMELINE = [
  {
    period: '2019 - 2021',
    titleEn: 'Computer Engineering & Foundational Systems',
    titleFa: 'پایه‌های مهندسی کامپیوتر و سیستم‌ها',
    roleEn: 'Academic Foundations & Junior Infrastructure',
    roleFa: 'مبانی آکادمیک و شروع کار عملی با زیرساخت',
    descriptionEn: 'Completed B.Sc. in Computer Engineering. Built deep foundational knowledge in operating system internals, Linux kernel architecture, data networking, and socket communications.',
    descriptionFa: 'تحصیل در رشته مهندسی کامپیوتر؛ تسلط بر مبانی سیستم‌های عامل، معماری کرنل لینوکس، مفاهیم عمیق شبکه‌های کامپیوتری و برنامه‌نویسی.',
    skills: ['Computer Architecture', 'Linux Basics', 'Networking Fundamentals', 'C/Python'],
  },
  {
    period: '2021 - 2023',
    titleEn: 'Enterprise Networking & Multi-Vendor Infrastructure',
    titleFa: 'مهندسی شبکه‌های سازمانی و تجهیزات سیسکو و میکروتیک',
    roleEn: 'Network & Infrastructure Engineer',
    roleFa: 'مهندس شبکه و زیرساخت',
    descriptionEn: 'Engineered hands-on campus networks for clinics, factories, and SMBs. Mastered Cisco IOS switching/routing, MikroTik RouterOS multi-WAN configurations, firewall filters, and secure VPNs.',
    descriptionFa: 'طراحی و پیاده‌سازی شبکه‌های سازمانی در مراکز درمانی، کارخانجات و شرکت‌ها؛ تسلط بر سوئیچ‌ها و روترهای سیسکو و میکروتیک، روتینگ، فایروال و تانل‌های امن.',
    skills: ['Cisco IOS', 'MikroTik RouterOS', 'VLANs', 'OSPF', 'Firewalling', 'WireGuard', 'PCC Load Balancing'],
  },
  {
    period: '2023 - 2025',
    titleEn: 'Systems, VoIP, Virtualization & Hospitality Networks',
    titleFa: 'مجازی‌سازی، سیستم‌های لینوکس، VoIP و IPTV',
    roleEn: 'Senior Infrastructure & VoIP Specialist',
    roleFa: 'متخصص زیرساخت، لینوکس و مراکز تلفن تحت شبکه',
    descriptionEn: 'Expanded end-to-end scope: deployed Proxmox/ESXi virtualization clusters, Issabel VoIP phone systems with Grandstream FXO gateways, FreeRADIUS centralized AAA, and hotel IPTV multicast infrastructure.',
    descriptionFa: 'گسترش تخصص جامع: استقرار کلاسترهای مجازی‌سازی Proxmox و ESXi، مراکز تلفن Issabel با گیت‌وی‌های گرنداستریم، احراز هویت متمرکز FreeRADIUS و زیرساخت IPTV هتل.',
    skills: ['Proxmox VE', 'VMware ESXi', 'FreeRADIUS', 'Issabel VoIP', 'Grandstream FXO', 'IGMP Multicast', 'Docker'],
  },
  {
    period: '2025 - Present',
    titleEn: 'Network Automation & AI-Assisted Operations',
    titleFa: 'اتوماسیون شبکه و دستیارهای هوش مصنوعی',
    roleEn: 'Network Automation & AI Enthusiast (NetMinds)',
    roleFa: 'متخصص اتوماسیون شبکه و توسعه‌دهنده NetMinds',
    descriptionEn: 'Pioneering programmable infrastructure: building Ansible automation playbooks, Python API integrations, and the NetMinds AI Network Agent for controlled, natural-language network operations.',
    descriptionFa: 'توسعه زیرساخت‌های خودکار: طراحی پلی‌بوک‌های Ansible، ساخت وب‌سرویس‌های پایتون و توسعه دستیار هوش مصنوعی برای کنترل و اجرای امن دستورات شبکه.',
    skills: ['Ansible', 'Python (FastAPI/Netmiko)', 'AI Network Agent', 'Telemetry Auditing', 'Infrastructure as Code'],
  },
  {
    period: 'Future Vision',
    titleEn: 'AI Solution Architecture',
    titleFa: 'معماری راهکارهای هوش مصنوعی سازمانی',
    roleEn: 'AI Solution Architect',
    roleFa: 'معمار راهکارهای هوش مصنوعی',
    descriptionEn: 'Architecting scalable, resilient, end-to-end infrastructure specifically engineered for enterprise AI workloads, edge inferencing, autonomous network healing, and hybrid intelligence.',
    descriptionFa: 'افق و چشم‌انداز آینده: معماری زیرساخت‌های مقیاس‌پذیر و پایدار برای اجرای سیستم‌های هوش مصنوعی سازمانی و شبکه‌های خودترمیم‌شونده.',
    skills: ['Enterprise AI Pipelines', 'Edge Compute', 'Autonomous Healing', 'Large-Scale Systems'],
  },
];

export const AI_AUTOMATION_PIPELINE = [
  {
    step: 1,
    titleEn: 'Natural Language Intent Parsing',
    titleFa: 'تحلیل قصد و زبان طبیعی (Intent Parsing)',
    descEn: 'Translates human engineer prompts into strictly validated structural JSON declarations, ensuring no destructive commands slip through.',
    descFa: 'تبدیل دستورات زبانی به ساختار فرمت‌شده JSON با اعتبارسنجی دقیق پارامترها جهت جلوگیری از دستورات مخرب.',
  },
  {
    step: 2,
    titleEn: 'Idempotent Playbook Synthesis',
    titleFa: 'تولید پلی‌بوک‌های تغییرناپذیر Ansible',
    descEn: 'Generates hardened multi-vendor Ansible tasks (Cisco IOS, MikroTik RouterOS) ensuring configuration consistency across fleets.',
    descFa: 'تولید تسک‌های استاندارد Ansible برای تجهیزات سیسکو و میکروتیک جهت اعمال یکنواخت و هماهنگ تنظیمات.',
  },
  {
    step: 3,
    titleEn: 'Dry-Run & Safety Gateway',
    titleFa: 'تست درای‌ران و گیت‌های امنیتی',
    descEn: 'Simulates configuration application in an isolated sandbox and validates syntax, VLAN IDs, and ACL hierarchy before live execution.',
    descFa: 'اجرای شبیه‌سازی‌شده تغییرات در محیط امن و تایید سینتکس، ساب‌نت‌ها و عدم ایجاد تداخل قبل از ارسال به شبکه زنده.',
  },
  {
    step: 4,
    titleEn: 'Automated Drift Audit & Telemetry Verification',
    titleFa: 'راستی‌آزمایی تله‌متری و اطمینان از سلامت شبکه',
    descEn: 'Gathers operational telemetry post-deployment (ping latencies, route table convergence, port statuses) confirming zero unexpected downtime.',
    descFa: 'جمع‌آوری تله‌متری پورت‌ها و جداول روتینگ بلافاصله پس از اجرا برای اطمینان ۱۰۰٪ از کارکرد صحیح و گزارش نتیجه.',
  },
];

