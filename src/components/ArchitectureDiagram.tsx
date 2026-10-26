import { useState } from 'react';
import { 
  User, 
  Smartphone, 
  Cpu, 
  Radio, 
  Volume2, 
  Mic, 
  Keyboard, 
  Lock, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';

export function ArchitectureDiagram() {
  const [selectedNode, setSelectedNode] = useState<'input' | 'security' | 'app' | 'synthesis' | 'wireless' | 'band' | 'audio'>('synthesis');

  const nodeDetails = {
    input: {
      title: 'User Input & Audio Archives',
      type: 'Data Ingestion Layer',
      description: 'Historical voice memos, old family videos, typed conversational text, and structured quick-access phrase selections provided directly by the user.',
      constraints: 'Requires verified user authorization and clear signal quality screening.'
    },
    security: {
      title: 'Identity & Pairing Authorization',
      type: 'Cryptographic Gate',
      description: 'Governs account sign-in, user biometric profile ownership, cryptographic session tokens, and one-to-one wireless hardware binding.',
      constraints: 'Prevents unauthorized third-party access or voice cloning.'
    },
    app: {
      title: 'MYVOICE Mobile Application',
      type: 'User Interface & Control Plane',
      description: 'Central interface managing phrase banks, emergency shortcuts, text input composition, audio suitability metrics, and audio routing rules.',
      constraints: 'Subject to standard mobile OS sandboxing and background processing budgets.'
    },
    synthesis: {
      title: 'Personalized Voice Processing',
      type: 'Acoustic Synthesis Pipeline',
      description: 'Translates phonemes, applies user-specific vocal timbre characteristics, models cadence and natural conversational pauses.',
      constraints: 'Investigating low-latency inference (&lt;300ms) and natural emotional inflection.'
    },
    wireless: {
      title: 'Secure Wireless Audio Bridge',
      type: 'Encrypted Low-Latency Transport',
      description: 'Carries compressed or raw audio packets from the smartphone application directly to the wearable hardware receiver.',
      constraints: 'Requires fail-safe disconnection handling to protect user privacy.'
    },
    band: {
      title: 'Compatible Wearable Voice Band',
      type: 'Hardware Acoustic Output',
      description: 'Physical body-worn band housing digital-to-analog converter, miniature amplifier, and acoustic or micro-transducer elements.',
      constraints: 'Under hardware feasibility research; no physical prototype exists.'
    },
    audio: {
      title: 'Audible Speech Output',
      type: 'Acoustic Sound Wave In Room',
      description: 'Speech emerges from the wearer’s person at conversational loudness (60–70 dB SPL), enabling face-to-face communication.',
      constraints: 'Designed for natural intelligibility and personal vocal identity preservation.'
    }
  };

  return (
    <section id="architecture" className="py-20 md:py-28 relative bg-[#080c14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">05. SYSTEM SCHEMATIC</div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              App-to-Band System Flow
            </h2>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded border border-white/10">
              Conceptual Flow · No Specific Model or Hardware Finalized
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The conceptual flow maps how personal voice recordings, typed messages, and authorization tokens traverse the software application to reach the wearable acoustic band.
          </p>
        </div>

        {/* Conceptual Diagram Container */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#090e1a] border border-white/10 space-y-8">
          {/* Main Horizontal Pipeline (Flow from Left to Right) */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {/* Node 1: User */}
              <button
                onClick={() => setSelectedNode('input')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedNode === 'input'
                    ? 'bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-950/50'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <User className="w-5 h-5 text-sky-400" />
                  <span className="text-[10px] font-mono text-slate-500">START</span>
                </div>
                <div className="text-xs font-mono text-sky-300">01. User Input</div>
                <div className="text-sm font-semibold text-white mt-1">Recordings & Text</div>
                <div className="text-[11px] text-slate-400 mt-2">Personal audio + typed phrases</div>
              </button>

              {/* Node 2: Mobile App */}
              <button
                onClick={() => setSelectedNode('app')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedNode === 'app'
                    ? 'bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-950/50'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Smartphone className="w-5 h-5 text-sky-400" />
                  <span className="text-[10px] font-mono text-slate-500">CONTROL</span>
                </div>
                <div className="text-xs font-mono text-sky-300">02. Mobile App</div>
                <div className="text-sm font-semibold text-white mt-1">MYVOICE Console</div>
                <div className="text-[11px] text-slate-400 mt-2">Manages phrases & settings</div>
              </button>

              {/* Node 3: Synthesis Engine */}
              <button
                onClick={() => setSelectedNode('synthesis')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedNode === 'synthesis'
                    ? 'bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-950/50'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  <span className="text-[10px] font-mono text-slate-500">CORE</span>
                </div>
                <div className="text-xs font-mono text-indigo-300">03. Voice Synthesis</div>
                <div className="text-sm font-semibold text-white mt-1">Personal Model</div>
                <div className="text-[11px] text-slate-400 mt-2">Recreates personal timbre</div>
              </button>

              {/* Node 4: Voice Band */}
              <button
                onClick={() => setSelectedNode('band')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedNode === 'band'
                    ? 'bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-950/50'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Radio className="w-5 h-5 text-indigo-400" />
                  <span className="text-[10px] font-mono text-slate-500">HARDWARE</span>
                </div>
                <div className="text-xs font-mono text-indigo-300">04. Wearable Band</div>
                <div className="text-sm font-semibold text-white mt-1">Acoustic Collar</div>
                <div className="text-[11px] text-slate-400 mt-2">Body-worn transducer</div>
              </button>

              {/* Node 5: Output */}
              <button
                onClick={() => setSelectedNode('audio')}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedNode === 'audio'
                    ? 'bg-sky-500/15 border-sky-400 text-white shadow-lg shadow-sky-950/50'
                    : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Volume2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-[10px] font-mono text-slate-500">OUTPUT</span>
                </div>
                <div className="text-xs font-mono text-emerald-300">05. Audible Voice</div>
                <div className="text-sm font-semibold text-white mt-1">Room Speech</div>
                <div className="text-[11px] text-slate-400 mt-2">Natural social sound</div>
              </button>
            </div>
          </div>

          {/* Sub-layers and Security Governance Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <button
              onClick={() => setSelectedNode('security')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                selectedNode === 'security'
                  ? 'bg-amber-500/15 border-amber-400 text-white'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-amber-300">Security & Governance Layer</div>
                <div className="text-sm font-semibold text-white">Account Authentication & Pairing Authorization</div>
                <p className="text-xs text-slate-400 mt-1">
                  Enforces non-transferable voice ownership and safeguards against unauthorized peripheral pairing.
                </p>
              </div>
            </button>

            <button
              onClick={() => setSelectedNode('wireless')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                selectedNode === 'wireless'
                  ? 'bg-sky-500/15 border-sky-400 text-white'
                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Radio className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-mono text-sky-300">Transmission Safeguard</div>
                <div className="text-sm font-semibold text-white">Encrypted Transport & Silent Disconnect Gate</div>
                <p className="text-xs text-slate-400 mt-1">
                  Prevents automatic phone speaker spillover if the physical connection drops unexpectedly.
                </p>
              </div>
            </button>
          </div>

          {/* Interactive Inspection Card */}
          <div className="p-6 rounded-xl bg-black/50 border border-white/15 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-wide">
                Inspecting: {nodeDetails[selectedNode].title}
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Layer: {nodeDetails[selectedNode].type}
              </span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed">
              {nodeDetails[selectedNode].description}
            </p>
            <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 flex items-start gap-2">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Technical Consideration: </span>
                {nodeDetails[selectedNode].constraints}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
