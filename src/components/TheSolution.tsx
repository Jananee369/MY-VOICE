import { useState } from 'react';
import { USER_JOURNEY_STEPS } from '../data/content';
import { Smartphone, Radio, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';

export function TheSolution() {
  const [activeStepId, setActiveStepId] = useState(1);
  const activeStep = USER_JOURNEY_STEPS.find((s) => s.id === activeStepId) || USER_JOURNEY_STEPS[0];

  return (
    <section id="solution" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">02. THE PROPOSED ECOSYSTEM</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Dual-Component Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            MYVOICE is envisioned as a synchronized system comprising an intelligent mobile software application paired with a dedicated wearable acoustic band on the body.
          </p>
        </div>

        {/* 2 Ecosystem Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Component A */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-sky-400">COMPONENT A · MOBILE APPLICATION</span>
              <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                <Smartphone className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">MYVOICE Software</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              The proposed mobile application serves as the user’s personal communication console. It manages historical audio ingestion, voice profile synthesis, message composition, categorized phrase banks, and hardware security authorizations.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Audio suitability scanning for historical recordings and home videos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Text-to-speech with customizable pacing, pauses, and tone</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>AI-assisted text expansion with mandatory human-in-the-loop review</span>
              </li>
            </ul>
          </div>

          {/* Component B */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-indigo-400">COMPONENT B · HARDWARE WEARABLE</span>
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Radio className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Compatible Wearable Voice Band</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              A future body-worn hardware concept envisioned to emit speech audibly from the user’s neck/collar region, restoring natural physical presence to conversations rather than broadcasting from a hand-held phone speaker.
            </p>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Compact, lightweight ergonomic collar design for continuous wear</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Natural acoustic dispersion instead of harsh mechanical vibration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Cryptographic one-to-one wireless pairing with authorized phone account</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Intended User Journey (Interactive Step Walkthrough) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#090d18] border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-sky-400">INTERACTIVE CONCEPT WALKTHROUGH</span>
              <h3 className="text-2xl font-bold text-white mt-1">Proposed User Journey</h3>
            </div>
            <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Under Feasibility & Design Evaluation
            </span>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {USER_JOURNEY_STEPS.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={`p-3 text-left rounded-lg transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-sky-500/15 border-sky-400 text-white shadow-sm'
                      : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="text-[10px] font-mono opacity-60">STEP 0{step.id}</div>
                  <div className="text-xs font-medium truncate mt-0.5">{step.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                Phase 0{activeStep.id} of 07
              </span>
              <h4 className="text-xl font-bold text-white">{activeStep.title}</h4>
            </div>

            <p className="text-base text-slate-200 leading-relaxed max-w-3xl">
              {activeStep.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
              <div className="space-y-1.5 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
                  <span>User Action</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{activeStep.userAction}</p>
              </div>

              <div className="space-y-1.5 p-4 rounded-lg bg-white/[0.02] border border-white/5">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>System Processing</span>
                </div>
                <p className="text-slate-400 leading-relaxed">{activeStep.systemProcessing}</p>
              </div>

              <div className="space-y-1.5 p-4 rounded-lg bg-amber-500/[0.04] border border-amber-500/20">
                <div className="font-semibold text-amber-300 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Open Research Question</span>
                </div>
                <p className="text-amber-200/80 leading-relaxed">{activeStep.researchQuestion}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
