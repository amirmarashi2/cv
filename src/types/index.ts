export type Language = 'en' | 'fa';

export type Theme = 'dark' | 'light';

export interface NavItem {
  id: string;
  labelEn: string;
  labelFa: string;
  icon: string;
}

export type SkillLevel = 'advanced' | 'practical' | 'working' | 'expanding';

export interface SkillItem {
  name: string;
  category: 'networking' | 'linux' | 'security' | 'virtualization' | 'voip' | 'automation' | 'ai';
  level: SkillLevel;
  tags: string[];
  descriptionEn: string;
  descriptionFa: string;
  highlight?: boolean;
}

export interface DomainExpertise {
  id: string;
  titleEn: string;
  titleFa: string;
  icon: string;
  badge: string;
  summaryEn: string;
  summaryFa: string;
  technologies: string[];
  capabilitiesEn: string[];
  capabilitiesFa: string[];
}

export interface CaseStudy {
  id: string;
  titleEn: string;
  titleFa: string;
  category: string;
  badge: string;
  clientTypeEn: string;
  clientTypeFa: string;
  impactMetricEn: string;
  impactMetricFa: string;
  overviewEn: string;
  overviewFa: string;
  problemEn: string;
  problemFa: string;
  constraintsEn: string[];
  constraintsFa: string[];
  architectureSummaryEn: string;
  architectureSummaryFa: string;
  technologies: string[];
  implementationStepsEn: string[];
  implementationStepsFa: string[];
  troubleshootingEn: string;
  troubleshootingFa: string;
  resultEn: string;
  resultFa: string;
  lessonsLearnedEn: string;
  lessonsLearnedFa: string;
  diagramType: 'ai-agent' | 'hotel-iptv' | 'freeradius' | 'voip-pbx' | 'wireguard-mesh';
}

export interface RackUnit {
  uSlot: string; // e.g. "U40-U41"
  name: string;
  model: string;
  roleEn: string;
  roleFa: string;
  status: 'online' | 'standby' | 'active';
  temperature: string;
  powerDraw: string;
  specsEn: string;
  specsFa: string;
  services: {
    name: string;
    type: 'vm' | 'container' | 'baremetal' | 'service';
    ip?: string;
    purposeEn: string;
    purposeFa: string;
  }[];
}

export interface PlaygroundArchitecture {
  id: string;
  titleEn: string;
  titleFa: string;
  taglineEn: string;
  taglineFa: string;
  nodes: {
    id: string;
    label: string;
    type: 'source' | 'router' | 'switch' | 'server' | 'endpoint' | 'ai';
    x: number;
    y: number;
    descriptionEn: string;
    descriptionFa: string;
    ip?: string;
  }[];
  edges: {
    from: string;
    to: string;
    label: string;
    protocol: string;
  }[];
  flowDescriptionEn: string[];
  flowDescriptionFa: string[];
  cliSample?: string;
}

export interface TechRadarItem {
  name: string;
  quadrant: 'networking' | 'systems' | 'automation' | 'ai';
  ring: 'core' | 'production' | 'expanding' | 'exploring';
  descriptionEn: string;
  descriptionFa: string;
}

export interface Certification {
  id: string;
  title: string;
  vendor: 'Cisco' | 'MikroTik' | 'Linux' | 'Microsoft' | 'Academic';
  code: string;
  category: string;
  issued: string;
  status?: string;
  descriptionEn: string;
  descriptionFa: string;
  skills: string[];
}


export interface BlogPost {
  id: string;
  titleEn: string;
  titleFa: string;
  date: string;
  readTimeEn: string;
  readTimeFa: string;
  category: string;
  excerptEn: string;
  excerptFa: string;
  contentEn: string;
  contentFa: string;
  tags: string[];
}

export interface ServiceOffering {
  id: string;
  titleEn: string;
  titleFa: string;
  icon: string;
  descriptionEn: string;
  descriptionFa: string;
  deliverablesEn: string[];
  deliverablesFa: string[];
}
