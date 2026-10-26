import { useState } from 'react';
import { SOFTWARE_FEATURES } from '../data/content';
import { IMAGES } from '../data/assets';
import { 
  Sparkles, 
  Volume2, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  PhoneCall, 
  Sliders, 
  HelpCircle,
  Play,
  RotateCcw
} from 'lucide-react';

export function SoftwareSection() {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeSimulatorTab, setActiveSimulatorTab] = useState<'banking' | 'phrases' | 'ai-gate' | 'calls'>('ai-gate');

  // Simulator states
  const [keywordInput, setKeywordInput] = useState('water glass cold');
  const [expandedText, setExpandedText] = useState('Could I please have a cold glass of water?');
  const [isApproved, setIsApproved] = useState(false);
  const [simulatedSpoken, setSimulatedSpoken] = useState(false);

  const [activePhraseCategory, setActivePhraseCategory] = useState<'daily' | 'medical' | 'family' | 'emergency'>('daily');
  const [selectedPhrase, setSelectedPhrase] = useState('');

  const phraseCategories = {
    daily: [
      'Good morning, how are you today?',
      'Could you please pass the water?',
      'I am ready to go when you are.',
      'Thank you so much for your help.'
    ],
    medical: [
      'I am feeling mild discomfort in my throat.',
      'Can you please check my medication schedule?',
      'I would like to sit up a bit more, please.',
      'Please call the nurse when they have a moment.'
    ],
    family: [
      'I love you and I am thinking of you.',
      'Tell the children I said hello.',
      'It is so wonderful to see you today.',
      'Can you tell me about your day?'
    ],
    emergency: [
      'I need urgent assistance right now.',
      'Please stay with me, I do not feel well.',
      'Please contact my emergency contact immediately.'
    ]
  };

  const handleCompose = (text: string) => {
    setKeywordInput(text);
    setIsApproved(false);
    setSimulatedSpoken(false);
    if (text.toLowerCase().includes('water')) {
      setExpandedText('Could I please have a cold glass of water?');
    } else if (text.toLowerCase().includes('doctor') || text.toLowerCase().includes('help')) {
      setExpandedText('I need medical assistance right away, please.');
    } else if (text.toLowerCase().includes('walk') || text.toLowerCase().includes('outside')) {
      setExpandedText('Would you like to take a short walk outside with me?');
    } else {
      setExpandedText(`I wanted to ask: "${text}". Could we discuss this?`);
    }
  };

  return (
    <section id="software" className="py-20 md:py-28 bg-[#080c14] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">03. PROPOSED SOFTWARE ECOSYSTEM</div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              MYVOICE Mobile Application
            </h2>
            <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Planned Concept · Not a Working Product
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The planned application is designed as an accessible communication hub, managing archival audio recordings, personalized vocal synthesis, message generation, and secure peripheral connections.
          </p>
        </div>

        {/* 8 Feature Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {SOFTWARE_FEATURES.map((feature, idx) => {
            const isSelected = activeFeatureIndex === idx;
            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeatureIndex(idx)}
                className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-sky-500/10 border-sky-400 shadow-md shadow-sky-950/40'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-slate-500">{feature.number}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] ${
                      feature.status === 'Proposed Requirement'
                        ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20'
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                    }`}>
                      {feature.status}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {feature.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-sky-400 font-medium">
                  <span>{isSelected ? 'Viewing Specification' : 'Inspect Details'}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive on Selected Feature */}
        <div className="p-8 rounded-2xl bg-[#0b0f1a] border border-white/15 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                  Feature {SOFTWARE_FEATURES[activeFeatureIndex].number}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Status: {SOFTWARE_FEATURES[activeFeatureIndex].status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {SOFTWARE_FEATURES[activeFeatureIndex].title}
              </h3>

              <p className="text-base text-slate-200 leading-relaxed">
                {SOFTWARE_FEATURES[activeFeatureIndex].summary}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Specification Details & Research Constraints
                </div>
                {SOFTWARE_FEATURES[activeFeatureIndex].details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <span className="text-sky-400 mt-0.5">·</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-amber-300">Feasibility Context: </span>
                  {SOFTWARE_FEATURES[activeFeatureIndex].feasibilityNote}
                </div>
              </div>
            </div>

            {/* Feature Visual / Mockup Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-xl group">
                <img
                  src={IMAGES.mobileAppConcept}
                  alt="Concept mobile software interface showing speech dashboard and audio wave curve"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-3 bg-black/80 backdrop-blur-sm border-t border-white/10 text-[11px] text-slate-300 flex items-center justify-between">
                  <span className="font-mono text-amber-400">Concept interface mockup</span>
                  <span className="text-slate-400">UI design study only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Software Concept Simulator */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0e1424] to-[#090d18] border border-white/15">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="text-xs font-mono text-sky-400">INTERACTIVE CONCEPT SIMULATOR</div>
            <h3 className="text-2xl font-bold text-white">Explore Proposed Application Workflows</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Test how specific proposed software workflows operate under strict safety, accessibility, and human-in-the-loop ethical rules.
            </p>
          </div>

          {/* Simulator Segmented Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-black/40 rounded-xl border border-white/10 mb-8 max-w-fit">
            <button
              onClick={() => setActiveSimulatorTab('ai-gate')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeSimulatorTab === 'ai-gate'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Composition & Human Review Gate
            </button>
            <button
              onClick={() => setActiveSimulatorTab('phrases')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeSimulatorTab === 'phrases'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Categorized Saved Phrases
            </button>
            <button
              onClick={() => setActiveSimulatorTab('banking')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeSimulatorTab === 'banking'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Audio Banking Suitability Check
            </button>
            <button
              onClick={() => setActiveSimulatorTab('calls')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeSimulatorTab === 'calls'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Live Phone Call Audio Routing
            </button>
          </div>

          {/* Tab 1: AI Composition with Human-in-the-Loop Gate */}
          {activeSimulatorTab === 'ai-gate' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                  <label className="text-xs font-mono text-slate-400 block">
                    Step 1: User Enters Keywords or Short Intent
                  </label>
                  <input
                    type="text"
                    value={keywordInput}
                    onChange={(e) => handleCompose(e.target.value)}
                    placeholder="Type keywords (e.g. water cold please)..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-white/15 text-sm text-white focus:outline-none focus:border-sky-400 font-sans"
                  />
                  <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                    <span>Try preset:</span>
                    <button
                      onClick={() => handleCompose('water glass cold')}
                      className="text-sky-400 hover:underline cursor-pointer"
                    >
                      "water glass cold"
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => handleCompose('walk outside sunny')}
                      className="text-sky-400 hover:underline cursor-pointer"
                    >
                      "walk outside sunny"
                    </button>
                    <span>·</span>
                    <button
                      onClick={() => handleCompose('doctor pain medicine')}
                      className="text-sky-400 hover:underline cursor-pointer"
                    >
                      "doctor pain medicine"
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Step 2: AI Expanded Sentence Suggestion</span>
                    <span className="text-sky-400">Subject to Review</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-sky-950/20 border border-sky-500/20 text-sm text-sky-100 font-medium">
                    "{expandedText}"
                  </div>
                  <p className="text-xs text-slate-400">
                    The user may edit, reject, or approve the sentence before any vocalization occurs.
                  </p>
                </div>
              </div>

              {/* Review & Speech Confirmation Box */}
              <div className="lg:col-span-6 p-6 rounded-xl bg-black/40 border border-white/15 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>MANDATORY SAFETY REVIEW GATE</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">User in Control</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Under MYVOICE specifications, AI-generated sentences never speak automatically. The system requires an affirmative human confirmation tap to prevent embarrassing or incorrect vocalizations.
                </p>

                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/10 space-y-3">
                  <div className="text-xs font-mono text-slate-400">Ready to Vocalize:</div>
                  <div className="text-base font-semibold text-white">
                    "{expandedText}"
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span>Routing:</span>
                    <span className="text-sky-300 font-mono">Wearable Voice Band (Connected)</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setIsApproved(true);
                      setSimulatedSpoken(true);
                    }}
                    className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
                      isApproved
                        ? 'bg-emerald-600 text-white'
                        : 'bg-sky-600 hover:bg-sky-500 text-white'
                    }`}
                  >
                    {isApproved ? <CheckCircle2 className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isApproved ? 'Approved & Spoken to Band' : 'Review & Approve Speech'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsApproved(false);
                      setSimulatedSpoken(false);
                      setKeywordInput('');
                      setExpandedText('');
                    }}
                    className="px-4 py-2.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white bg-white/5 border border-white/10 flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>

                {simulatedSpoken && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2 animate-fade-in">
                    <Volume2 className="w-4 h-4 shrink-0" />
                    <span>Simulated vocalization transmitted to wearable band acoustic transducer. Phone speaker suppressed.</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Categorized Phrase Board */}
          {activeSimulatorTab === 'phrases' && (
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {(['daily', 'medical', 'family', 'emergency'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActivePhraseCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                      activePhraseCategory === cat
                        ? cat === 'emergency'
                          ? 'bg-rose-600 text-white'
                          : 'bg-sky-600 text-white'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {cat === 'daily' && 'Daily Needs'}
                    {cat === 'medical' && 'Medical & Hospital'}
                    {cat === 'family' && 'Family & Friends'}
                    {cat === 'emergency' && 'Emergency Quick-Access'}
                  </button>
                ))}
              </div>

              {activePhraseCategory === 'emergency' && (
                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/25 text-xs text-rose-300 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>Safety Clarification:</strong> MYVOICE is not an emergency response service (e.g. 911/112). Emergency phrases are designed for rapid local room communication with nearby caregivers and require formal safety validation.
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phraseCategories[activePhraseCategory].map((phrase, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => setSelectedPhrase(phrase)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                      selectedPhrase === phrase
                        ? 'bg-sky-500/15 border-sky-400 text-white'
                        : 'bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <span className="text-sm font-medium">{phrase}</span>
                    <Volume2 className="w-4 h-4 text-sky-400 shrink-0 ml-3" />
                  </button>
                ))}
              </div>

              {selectedPhrase && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-slate-400">Selected for Vocalization:</span>
                    <p className="text-sm font-semibold text-white">"{selectedPhrase}"</p>
                  </div>
                  <button
                    onClick={() => alert(`Simulated speech generated for: "${selectedPhrase}"`)}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold cursor-pointer"
                  >
                    Speak via Band
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Audio Banking Suitability Check */}
          {activeSimulatorTab === 'banking' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="font-semibold text-white flex items-center justify-between">
                  <span>Pre-Loss Voice Memos</span>
                  <span className="text-emerald-400 font-mono">High Suitability</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Clear phone voicemails or voice memos recorded in quiet indoor environments provide clean isolated vocal formants.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 border-t border-white/5 space-y-1">
                  <div>Average SNR: &gt;24 dB</div>
                  <div>Frequency Bandwidth: 16 kHz</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="font-semibold text-white flex items-center justify-between">
                  <span>Archived Home Videos</span>
                  <span className="text-amber-400 font-mono">Moderate Suitability</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Family birthday videos or vacation footage often contain ambient laughter, background music, or reverberation that require spectral denoising.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 border-t border-white/5 space-y-1">
                  <div>Average SNR: 12–18 dB</div>
                  <div>Requires Pre-processing: Denoising</div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="font-semibold text-white flex items-center justify-between">
                  <span>Authorized Call Recordings</span>
                  <span className="text-rose-400 font-mono">Challenging Suitability</span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Standard cellular telephony codec compression (AMR-WB / G.711) cuts frequencies above 3.4–7 kHz, presenting missing harmonic challenges.
                </p>
                <div className="pt-2 text-[11px] text-slate-500 border-t border-white/5 space-y-1">
                  <div>Bandwidth: 8 kHz Telephony Codec</div>
                  <div>Requires: Spectral Inpainting</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Live Phone Call Audio Routing */}
          {activeSimulatorTab === 'calls' && (
            <div className="p-6 rounded-xl bg-black/40 border border-white/15 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <PhoneCall className="w-4 h-4" />
                <span>OPEN RESEARCH HURDLE: CELLULAR CALL AUDIO INJECTION</span>
              </div>
              <h4 className="text-lg font-bold text-white">
                Why Speaking During a Live Phone Call Remains an Unsolved Research Question
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                A critical distinction must be maintained: uploading an old recording of a past phone call to build a voice profile is fundamentally different from speaking with that recreated voice during a live two-way cellular telephone call.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="font-semibold text-slate-200">Mobile OS Sandboxing Constraints</div>
                  <p className="text-slate-400 leading-relaxed">
                    Both iOS and Android security sandboxes explicitly prevent third-party apps from injecting synthetic audio streams into the hardware telephony baseband microphone pipeline to prevent eavesdropping and call spoofing.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="font-semibold text-slate-200">Bluetooth Audio Profile Conflicts</div>
                  <p className="text-slate-400 leading-relaxed">
                    Standard Hands-Free Profile (HFP) switches Bluetooth audio to low-bandwidth 8kHz/16kHz mono, degrading acoustic fidelity. Bluetooth pairing alone does not provide a validated pathway to transmit generated speech into cellular calls.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
