/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CareerTimeline } from './components/CareerTimeline';
import { SkillsSection } from './components/SkillsSection';
import { TechRadar } from './components/TechRadar';
import { NetworkStackMap } from './components/NetworkStackMap';
import { ArchitecturePlayground } from './components/ArchitecturePlayground';
import { HomelabRack } from './components/HomelabRack';
import { AILabSection } from './components/AILabSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CommandPalette } from './components/CommandPalette';

const MainLayout: React.FC = () => {
  const { lang, theme } = useApp();

  return (
    <div
      dir={lang === 'fa' ? 'rtl' : 'ltr'}
      className={`min-h-screen app-container bg-[#070a12] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans transition-colors duration-200 ${
        lang === 'fa' ? 'font-vazir' : ''
      }`}
    >
      <Navbar />
      
      <main className="relative">
        <Hero />
        
        <AboutSection />
        
        {/* Container for Career Timeline & Tech Radar & Mindmap */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <CareerTimeline />
        </div>

        <SkillsSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-[#070a12]">
          <TechRadar />
          <NetworkStackMap />
        </div>

        <ArchitecturePlayground />
        
        <HomelabRack />
        
        <AILabSection />
        
        <CaseStudiesSection />
        
        <CertificationsSection />
        
        <BlogSection />
        
        <ContactSection />
      </main>

      <Footer />

      {/* Global Modals & Overlays */}
      <ResumeModal />
      <CommandPalette />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}

