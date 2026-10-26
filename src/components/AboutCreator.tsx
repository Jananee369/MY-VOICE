import { User, Sparkles, BookOpen, Layers, ExternalLink, HeartHandshake } from 'lucide-react';

interface AboutCreatorProps {
  onOpenBrief: () => void;
}

export function AboutCreator({ onOpenBrief }: AboutCreatorProps) {
  return (
    <section id="about-creator" className="py-20 md:py-28 bg-[#0b0f19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">10. PORTFOLIO & INITIATIVE</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About the Creator & Project Vision
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Voxera — MYVOICE is an independent product architecture portfolio and assistive technology research proposal focused on the intersection of human-computer interaction, ethical speech AI, and accessible industrial design.
          </p>
        </div>

        {/* Creator Portfolio Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#090d18] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                Initiative Architecture & Product Design
              </div>
              <h3 className="text-2xl font-bold text-white">
                Voxera Assistive Technologies Research
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                This project represents a conceptual exploration into how emerging generative acoustic technologies can be responsibly redirected toward profound human challenges. Rather than focusing on voice generation for entertainment or commercial advertising, MYVOICE investigates how personalized voice modeling could restore personal dignity, familial familiarity, and emotional agency to individuals affected by vocal loss.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span>Engineering Philosophy</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Technology should adapt to human needs rather than forcing humans to adapt to sterile machines. Dignity, aesthetic discretion, and user autonomy guide every specification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-sky-400" />
                  <span>Ethical Stewardship</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Voice data is inherently biometric and identity-defining. We advocate for sovereign user ownership, anti-cloning cryptographic vaults, and zero data monetization.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenBrief}
                className="px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-sm"
              >
                Read Concept & Research Whitepaper
              </button>

              <a
                href="#overview"
                className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium transition-all"
              >
                Back to Project Top
              </a>
            </div>
          </div>

          {/* Academic & Concept Status Aside */}
          <div className="lg:col-span-4 p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-4 text-xs">
            <div className="font-mono text-sky-400 text-[11px] uppercase tracking-wider">
              Project Parameters
            </div>
            <div className="space-y-3 divide-y divide-white/5">
              <div className="pt-2">
                <span className="text-slate-500 block font-mono text-[10px]">CURRENT PHASE</span>
                <span className="text-white font-medium">Concept & Requirements Definition</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 block font-mono text-[10px]">DOMAIN</span>
                <span className="text-white font-medium">Assistive Vocal AI, Wearable Audio & HCI</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 block font-mono text-[10px]">PROTOTYPE STATUS</span>
                <span className="text-amber-300 font-medium">Research specification only (No physical band)</span>
              </div>
              <div className="pt-2">
                <span className="text-slate-500 block font-mono text-[10px]">COLLABORATION GOAL</span>
                <span className="text-white font-medium">Speech-language pathologists, bioethicists & acoustic engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
