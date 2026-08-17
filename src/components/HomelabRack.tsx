import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { HOMELAB_RACK } from '../data/content';
import { RackUnit } from '../types';
import { 
  Server, 
  Activity, 
  Zap, 
  Thermometer, 
  Cpu, 
  HardDrive, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Radio, 
  Network,
  ShieldCheck
} from 'lucide-react';

export const HomelabRack: React.FC = () => {
  const { lang } = useApp();
  const [selectedUnit, setSelectedUnit] = useState<RackUnit>(HOMELAB_RACK[1]); // DL360 selected by default

  const getUnitIcon = (unit: RackUnit) => {
    if (unit.name.includes('UPS')) return <Zap className="w-4 h-4 text-amber-400" />;
    if (unit.name.includes('HP ProLiant')) return <Server className="w-4 h-4 text-emerald-400" />;
    if (unit.name.includes('Cisco')) return <Network className="w-4 h-4 text-sky-400" />;
    if (unit.name.includes('MikroTik')) return <Radio className="w-4 h-4 text-orange-400" />;
    if (unit.name.includes('Patch')) return <Layers className="w-4 h-4 text-slate-400" />;
    return <Server className="w-4 h-4 text-purple-400" />;
  };

  return (
    <section id="homelab" className="py-20 bg-[#070a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
            <span>04 / LIVE PRODUCTION SANDBOX & LAB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'fa' ? 'زیرساخت آزمایشگاهی و هوم‌لب امیر (Homelab 42U)' : "Amir's Production Homelab & NOC Rack"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'fa'
              ? 'رک اختصاصی برای تست سناریوهای شبکه سازمانی، مجازی‌سازی Proxmox، سرورهای لینوکس، مراکز تلفن VoIP و پایپ‌لاین‌های خودکارسازی.'
              : 'Interactive 42U server rack hosting live enterprise hypervisors, Cisco L3 switching, MikroTik gateways, and AI automation runners.'}
          </p>
        </div>

        {/* Rack & Inspector Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 42U Server Rack Graphic (6 cols) */}
          <div className="lg:col-span-6 p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#0b101c] to-[#06080e] border-2 border-slate-800 shadow-2xl space-y-4">
            
            {/* Rack Header */}
            <div className="flex items-center justify-between px-2 pb-3 border-b border-slate-800 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold text-white">NETMINDS-RACK-01 (42U)</span>
              </div>
              <span className="text-emerald-400 font-bold">ONLINE (230V / 50Hz)</span>
            </div>

            {/* Visual Chassis Stack */}
            <div className="space-y-2 font-mono">
              {HOMELAB_RACK.map((unit) => {
                const isSelected = selectedUnit.uSlot === unit.uSlot;
                return (
                  <button
                    key={unit.uSlot}
                    id={`rack-unit-${unit.uSlot}`}
                    onClick={() => setSelectedUnit(unit)}
                    className={`w-full p-3 rounded-xl border text-left rtl:text-right transition-all flex items-center justify-between gap-3 group cursor-pointer ${
                      isSelected
                        ? 'bg-slate-800/90 border-emerald-500 shadow-lg shadow-emerald-950/40 scale-[1.01]'
                        : 'bg-slate-900/80 border-slate-800/80 hover:border-slate-600 hover:bg-slate-850'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="px-2 py-1 rounded bg-slate-950 border border-slate-800 text-[10px] text-slate-400 font-bold">
                        {unit.uSlot}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                          {getUnitIcon(unit)}
                          <span>{unit.name}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 truncate max-w-[200px] sm:max-w-xs">
                          {lang === 'fa' ? unit.roleFa : unit.roleEn}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 text-[10px]">
                      <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-emerald-400">
                        {unit.temperature}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Empty U Slots Indicator */}
            <div className="p-2.5 rounded-lg bg-slate-950/60 border border-dashed border-slate-800 text-center font-mono text-[11px] text-slate-600">
              U1 - U15 RESERVED FOR EXPANSION STORAGE SHELF
            </div>
          </div>

          {/* Right: Telemetry & Running Services Inspector (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Unit Specs Card */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-2xl space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                      {selectedUnit.uSlot}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      STATUS: {selectedUnit.status.toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                    {getUnitIcon(selectedUnit)}
                    <span>{selectedUnit.name}</span>
                  </h3>
                </div>
              </div>

              {/* Hardware Specs */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs space-y-1.5">
                <div className="text-slate-500 text-[10px] uppercase font-bold">HARDWARE PROFILE & SPECS</div>
                <div className="text-slate-200">
                  {lang === 'fa' ? selectedUnit.specsFa : selectedUnit.specsEn}
                </div>
                <div className="text-slate-400 text-[11px] italic">
                  Model: {selectedUnit.model}
                </div>
              </div>

              {/* Live Telemetry Meters */}
              <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-slate-500 text-[10px] flex items-center gap-1">
                    <Thermometer className="w-3 h-3 text-rose-400" />
                    <span>TEMP</span>
                  </div>
                  <div className="text-sm font-bold text-white">{selectedUnit.temperature}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-slate-500 text-[10px] flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>POWER</span>
                  </div>
                  <div className="text-sm font-bold text-white">{selectedUnit.powerDraw}</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-slate-500 text-[10px] flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>HEALTH</span>
                  </div>
                  <div className="text-sm font-bold text-emerald-400">OPTIMAL</div>
                </div>
              </div>

              {/* Hosted VMs, Containers & Services */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-emerald-400 font-semibold uppercase flex items-center justify-between">
                  <span>{lang === 'fa' ? 'سرویس‌ها و ماشین‌های فعال روی این یونیت:' : 'Active Hosted Services & Virtual Machines:'}</span>
                  <span className="text-[10px] text-slate-500 font-normal">{selectedUnit.services.length} Instances</span>
                </div>

                <div className="space-y-2">
                  {selectedUnit.services.map((svc, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 space-y-1 font-mono text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{svc.name}</span>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 uppercase">
                          {svc.type}
                        </span>
                      </div>

                      {svc.ip && (
                        <div className="text-[11px] text-emerald-400">
                          IP: {svc.ip}
                        </div>
                      )}

                      <p className="text-slate-300 font-sans text-xs pt-1">
                        {lang === 'fa' ? svc.purposeFa : svc.purposeEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
