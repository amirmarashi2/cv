import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PLAYGROUND_ARCHITECTURES } from '../data/content';
import { PlaygroundArchitecture } from '../types';
import { 
  Layers, 
  Play, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  Check, 
  Cpu, 
  Network, 
  Server, 
  Radio, 
  PhoneCall, 
  ShieldCheck 
} from 'lucide-react';

export const ArchitecturePlayground: React.FC = () => {
  const { lang } = useApp();
  const [selectedArchId, setSelectedArchId] = useState<string>('ai-agent-ops');
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [copiedCli, setCopiedCli] = useState(false);
  const [isSimulating, setIsSimulating] = useState(true);

  const currentArch: PlaygroundArchitecture =
    PLAYGROUND_ARCHITECTURES.find((a) => a.id === selectedArchId) ||
    PLAYGROUND_ARCHITECTURES[0];

  const selectedNode = currentArch.nodes.find((n) => n.id === activeNodeId) || currentArch.nodes[0];

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'source': return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'ai': return <Cpu className="w-4 h-4 text-emerald-300 animate-pulse" />;
      case 'router': return <Radio className="w-4 h-4 text-amber-400" />;
      case 'switch': return <Network className="w-4 h-4 text-sky-400" />;
      case 'server': return <Server className="w-4 h-4 text-purple-400" />;
      case 'endpoint': return <PhoneCall className="w-4 h-4 text-teal-400" />;
      default: return <Server className="w-4 h-4 text-slate-400" />;
    }
  };

  const handleCopyCli = () => {
    if (currentArch.cliSample) {
      navigator.clipboard.writeText(currentArch.cliSample);
      setCopiedCli(true);
      setTimeout(() => setCopiedCli(false), 2000);
    }
  };

  return (
    <section id="architecture" className="py-20 bg-[#090d16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <span>03 / SIGNATURE INTERACTIVE FEATURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'شبیه‌ساز و زمین بازی معماری شبکه' : 'Infrastructure Architecture Playground'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'معماری‌های واقعی پیاده‌سازی‌شده را انتخاب کنید؛ مسیر جریان داده‌ها، ایزولاسیون امنیتی و دستورات پیکربندی تجهیزات را مشاهده نمایید.'
              : 'Select a real-world deployed topology to explore packet flow, security boundaries, and production configuration recipes.'}
          </p>
        </div>

        {/* Architecture Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PLAYGROUND_ARCHITECTURES.map((arch) => {
            const isSelected = arch.id === selectedArchId;
            return (
              <button
                key={arch.id}
                id={`arch-tab-${arch.id}`}
                onClick={() => {
                  setSelectedArchId(arch.id);
                  setActiveNodeId(null);
                }}
                className={`p-4 rounded-xl border text-left rtl:text-right font-mono transition-all flex flex-col justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-800 border-emerald-500 text-white shadow-xl shadow-emerald-950/30'
                    : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase">
                    ARCH #{arch.id.slice(0, 5)}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                  {lang === 'fa' ? arch.titleFa : arch.titleEn}
                </div>
              </button>
            );
          })}
        </div>

        {/* Playground Stage & Interactive Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Main Visual Diagram Canvas (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl bg-gradient-to-b from-[#0c1220] via-[#090d16] to-[#06080e] border border-slate-700/80 p-5 sm:p-6 space-y-4 shadow-2xl relative overflow-hidden tech-grid">
            
            {/* Header controls inside canvas */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="space-y-0.5">
                <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'fa' ? currentArch.titleFa : currentArch.titleEn}</span>
                </h4>
                <p className="text-xs text-slate-400">
                  {lang === 'fa' ? currentArch.taglineFa : currentArch.taglineEn}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isSimulating
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Play className="w-3 h-3" />
                  <span>{isSimulating ? 'SIMULATION ACTIVE' : 'PAUSED'}</span>
                </button>
              </div>
            </div>

            {/* Interactive SVG / Nodes Layout */}
            <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl bg-[#060910]/90 border border-slate-800/80 overflow-hidden">
              
              {/* SVG Edges */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#10B981" />
                  </marker>
                </defs>

                {currentArch.edges.map((edge, eIdx) => {
                  const fromNode = currentArch.nodes.find((n) => n.id === edge.from);
                  const toNode = currentArch.nodes.find((n) => n.id === edge.to);
                  if (!fromNode || !toNode) return null;

                  const x1 = `${(fromNode.x / 900) * 100}%`;
                  const y1 = `${(fromNode.y / 360) * 100}%`;
                  const x2 = `${(toNode.x / 900) * 100}%`;
                  const y2 = `${(toNode.y / 360) * 100}%`;

                  return (
                    <g key={`edge-${eIdx}`}>
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#334155"
                        strokeWidth="2"
                        strokeDasharray={isSimulating ? '4,4' : 'none'}
                        className={isSimulating ? 'animate-signal' : ''}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Render Nodes */}
              {currentArch.nodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const leftPct = (node.x / 900) * 100;
                const topPct = (node.y / 360) * 100;

                return (
                  <button
                    key={node.id}
                    id={`arch-node-${node.id}`}
                    onClick={() => setActiveNodeId(node.id)}
                    style={{
                      left: `${leftPct}%`,
                      top: `${topPct}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center justify-center transition-all duration-200 focus:outline-none z-10 cursor-pointer ${
                      isSelected ? 'scale-110' : 'hover:scale-105'
                    }`}
                  >
                    <div
                      className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-emerald-950 border-2 border-emerald-400 glow-accent shadow-xl'
                          : 'bg-slate-900/90 border border-slate-700/80 hover:border-slate-500'
                      }`}
                    >
                      {getNodeIcon(node.type)}
                    </div>

                    <div className="mt-1 px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-[10px] sm:text-xs font-mono font-bold text-slate-200 whitespace-nowrap shadow-md">
                      {node.label}
                    </div>

                    {node.ip && (
                      <span className="text-[9px] font-mono text-emerald-400">
                        {node.ip}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Step-by-Step Flow Breakdown */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono text-emerald-400 font-semibold uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === 'fa' ? 'مراحل عبور ترافیک و اعتبارسنجی:' : 'Traffic Execution & Validation Sequence:'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(lang === 'fa' ? currentArch.flowDescriptionFa : currentArch.flowDescriptionEn).map((step, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Inspector & Production CLI Card (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Inspected Node Card */}
            {selectedNode && (
              <div className="p-5 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold uppercase">
                    NODE INSPECTOR
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    {selectedNode.type}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white font-mono flex items-center gap-2">
                  {getNodeIcon(selectedNode.type)}
                  <span>{selectedNode.label}</span>
                </h4>

                {selectedNode.ip && (
                  <div className="text-xs font-mono text-emerald-400">
                    Host / Segment: {selectedNode.ip}
                  </div>
                )}

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800">
                  {lang === 'fa' ? selectedNode.descriptionFa : selectedNode.descriptionEn}
                </p>
              </div>
            )}

            {/* Production Configuration / CLI Recipe Card */}
            {currentArch.cliSample && (
              <div className="rounded-2xl bg-[#060910] border border-slate-800 overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300 font-bold text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    <span>PRODUCTION CONFIG / PLAYBOOK</span>
                  </div>
                  <button
                    onClick={handleCopyCli}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Copy Config Recipe"
                  >
                    {copiedCli ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="p-4 text-[11px] text-slate-300 overflow-x-auto leading-relaxed max-h-[220px]">
                  {currentArch.cliSample}
                </pre>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
