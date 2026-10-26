import { useState } from 'react';
import { X, Copy, Check, Download, FileText, Shield, Sparkles } from 'lucide-react';

interface ResearchBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResearchBriefModal({ isOpen, onClose }: ResearchBriefModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const briefText = `VOXERA — MYVOICE RESEARCH & CONCEPT SPECIFICATION
Stage: Concept development, requirements definition, and feasibility research
Status: No working product prototype or physical band available.

1. CORE CONCEPT & PURPOSE
MYVOICE is a proposed assistive communication system for individuals who are losing or have lost their voice, including post-laryngectomy patients and individuals preparing for future voice loss.
Central Message: "Your voice is more than sound. It is part of your identity."
Vision: Exploring a future where losing the ability to articulate speech does not necessitate losing connection to one's recognizable vocal identity.

2. PROPOSED ECOSYSTEM
- Software: Mobile application managing archival audio, personalized voice models, text entry, categorized phrase banks, and hardware security.
- Hardware: A proposed lightweight wearable voice band designed to emit speech directly from the wearer's person rather than through a smartphone speaker.

3. RESEARCH CONSTRAINTS & ACCURACY
- Research Stage Concept: All features are proposed, not completed.
- The 95% voice similarity target is a long-term engineering aspiration only, not a measured result or guarantee.
- Phone Call Routing: Injecting generated speech into live two-way cellular calls remains an unresolved OS sandboxing and latency challenge.
- Safety: Automatic fallback to phone speaker upon band disconnection is prohibited without explicit user confirmation.

4. ETHICS & PRIVACY
- Sovereign user ownership: Voice biometric profiles are private by default.
- Zero commercialization: Acoustic data will never be monetized, shared, or used for advertising.
- Permanent deletion and cross-device recovery guaranteed by architecture.`;

    navigator.clipboard.writeText(briefText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101c] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between gap-4 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-sky-400" />
            <div>
              <h3 className="text-base font-bold text-white">
                Voxera MYVOICE Research Brief & Specification
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Document Revision: 2026.1 · Concept & Architectural Scope
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Brief' : 'Copy Text'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/20 space-y-2">
            <div className="flex items-center gap-2 font-mono text-sky-400 text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>EXECUTIVE RESEARCH SUMMARY</span>
            </div>
            <p className="text-slate-200">
              MYVOICE is an exploratory assistive technology concept investigating how artificial intelligence could assist individuals who have lost their voice—or anticipate vocal loss—in preserving and recreating their personal vocal identity. The system proposes a mobile software console coordinating with a body-worn acoustic band.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              1. Project Classification & Status
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong>Stage:</strong> Concept development, requirements definition, and feasibility research.</li>
              <li><strong>Current Implementation:</strong> No working product prototype, mobile software binary, or physical wearable band is available for testing or clinical use.</li>
              <li><strong>Non-Clinical Notice:</strong> This project is not a certified medical device and has not undergone clinical trials.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              2. Core Principles & The 95% Aspiration
            </h4>
            <p>
              The project's central thesis is that a person's voice is part of their identity. The long-term ambition of 95% voice similarity is an engineering design aspiration, not a validated achievement, measured accuracy, or promise. Achievable vocal naturalness and emotional nuance remain active open research questions.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              3. Proposed Software Architecture
            </h4>
            <p>
              The planned mobile application comprises 8 defined functional modules:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">01. Personalized Voice Profile:</span>
                Audio banking scanner for pre-loss audio, home videos, and authorized calls.
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">02. Original & Alternative Voices:</span>
                Recreated voice alongside customizable baseline voices for users without past audio.
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">03. Text-to-Speech Engine:</span>
                Cadence, natural pause modeling, and multilingual phoneme transfer under research.
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">04. Saved Phrases & Emergency Access:</span>
                Categorized boards with explicit notice that MYVOICE is not an emergency service.
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">05. AI Composition Review Gate:</span>
                Mandatory human review gate before synthetic speech generation is triggered.
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">06. Accessibility Foundation:</span>
                High contrast, large touch targets, motor switch input adaptability.
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">07. Live Call Routing Research:</span>
                Routing synthetic audio into live phone calls is an unresolved OS sandboxing challenge.
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-semibold text-white block">08. Account Sovereignty:</span>
                Cross-device profile migration without retraining; unconditional deletion rights.
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              4. Wearable Voice Band Hardware Concept
            </h4>
            <p>
              The band is envisioned as an acoustic speaker collar designed to emanate speech from the wearer. Key operating safety rule: the connected smartphone must never silently divert speech to its loudspeaker if the band disconnects; an explicit prompt is mandatory.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              5. Privacy & Ethics Charter
            </h4>
            <p>
              Voice biometric data is strictly private by default. Under no circumstances will personal vocal models be monetized, sold, or incorporated into commercial advertising.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between text-xs text-slate-400">
          <span>Voxera Research Portfolio · MYVOICE Specification</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
}
