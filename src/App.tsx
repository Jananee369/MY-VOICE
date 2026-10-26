import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { TheSolution } from './components/TheSolution';
import { SoftwareSection } from './components/SoftwareSection';
import { HardwareSection } from './components/HardwareSection';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { ResearchSection } from './components/ResearchSection';
import { PrivacySection } from './components/PrivacySection';
import { RoadmapSection } from './components/RoadmapSection';
import { FaqSection } from './components/FaqSection';
import { AboutCreator } from './components/AboutCreator';
import { Footer } from './components/Footer';
import { ResearchBriefModal } from './components/ResearchBriefModal';

export default function App() {
  const [isBriefOpen, setIsBriefOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-sky-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Top Bar Header */}
      <Header onOpenBrief={() => setIsBriefOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 01. Overview Hero */}
        <Hero onOpenBrief={() => setIsBriefOpen(true)} />

        {/* 02. The Problem */}
        <TheProblem />

        {/* 03. The Proposed Ecosystem & Solution */}
        <TheSolution />

        {/* 04. Proposed Software (Mobile Application) */}
        <SoftwareSection />

        {/* 05. Proposed Hardware (Wearable Voice Band) */}
        <HardwareSection />

        {/* 06. App-to-Band Conceptual Architecture Diagram */}
        <ArchitectureDiagram />

        {/* 07. Research Objectives & Evaluation Matrix */}
        <ResearchSection />

        {/* 08. Privacy, Consent & Voice Ownership */}
        <PrivacySection />

        {/* 09. Research Roadmap */}
        <RoadmapSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. About the Creator (Final section immediately before footer) */}
        <AboutCreator onOpenBrief={() => setIsBriefOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenBrief={() => setIsBriefOpen(true)} />

      {/* Research Brief Specification Modal */}
      <ResearchBriefModal
        isOpen={isBriefOpen}
        onClose={() => setIsBriefOpen(false)}
      />
    </div>
  );
}
