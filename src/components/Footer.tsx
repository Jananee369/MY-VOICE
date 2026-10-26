import { Shield, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBrief: () => void;
}

export function Footer({ onOpenBrief }: FooterProps) {
  return (
    <footer className="bg-[#060910] border-t border-white/10 text-slate-400 py-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-3">
            <a href="#overview" className="text-lg font-bold text-white tracking-tight">
              Voxera <span className="text-sky-400 text-sm font-semibold">MYVOICE</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              An exploratory research portfolio for assistive vocal identity recreation and compatible wearable voice band technology.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-500">
              Research-Stage Concept · No Working Prototype Available
            </div>
          </div>

          {/* Navigation Mirror */}
          <div className="md:col-span-4 space-y-2">
            <div className="font-mono text-white text-xs uppercase tracking-wider mb-3">
              Portfolio Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-slate-400">
              <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              <a href="#the-problem" className="hover:text-white transition-colors">The Problem</a>
              <a href="#solution" className="hover:text-white transition-colors">The Solution</a>
              <a href="#software" className="hover:text-white transition-colors">Software</a>
              <a href="#hardware" className="hover:text-white transition-colors">Hardware</a>
              <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
              <a href="#research" className="hover:text-white transition-colors">Research</a>
              <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#about-creator" className="hover:text-white transition-colors">About Creator</a>
            </div>
          </div>

          {/* Research Document Link */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-white text-xs uppercase tracking-wider mb-3">
              Documentation
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Access the complete concept requirements definition and architectural specification.
            </p>
            <button
              onClick={onOpenBrief}
              className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all cursor-pointer"
            >
              Open Research Brief
            </button>
          </div>
        </div>

        {/* Regulatory & Medical Disclaimer */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-[11px] leading-relaxed text-slate-500">
          <div className="flex items-center gap-2 text-slate-400 font-semibold">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Essential Project Disclaimer & Research Notice</span>
          </div>
          <p>
            Voxera MYVOICE is an exploratory concept and research design proposal. It is not an approved medical device, clinically validated treatment, or emergency service. All software interfaces, hardware collar models, and device renders shown on this website are conceptual illustrations for research evaluation, not real or finalized products. No working physical band prototype or functional application currently exists.
          </p>
        </div>

        {/* Copyright strip */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Voxera Initiative. Conceptual assistive technology portfolio.
          </div>
          <div className="flex items-center gap-4">
            <span>Assistive AI Research</span>
            <span>·</span>
            <span>Biometric Privacy by Design</span>
            <span>·</span>
            <span>HCI Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
