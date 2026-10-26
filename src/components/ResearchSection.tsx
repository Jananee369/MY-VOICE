import { useState } from 'react';
import { EVALUATION_DIMENSIONS } from '../data/content';
import { 
  Sparkles, 
  FlaskConical, 
  Scale, 
  CheckCircle, 
  AlertCircle, 
  Search, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

export function ResearchSection() {
  const [filterQuery, setFilterQuery] = useState('');

  const objectives = [
    { title: 'Personalized Voice Recreation', desc: 'Synthesizing identifiable timbre from limited legacy audio recordings.' },
    { title: 'Acoustic Consistency', desc: 'Preserving vocal identity stably across diverse phrase structures and registers.' },
    { title: 'Pronunciation & Pacing', desc: 'Accurately reproducing phonetic cadences and conversational pauses.' },
    { title: 'Emotional Nuance & Inflection', desc: 'Investigating intonation mapping for warmth, questions, and emphasis.' },
    { title: 'Resilience to Audio Quality', desc: 'Evaluating voice reconstruction from degraded, reverberant home audio.' },
    { title: 'Multilingual Generalization', desc: 'Exploring cross-lingual phoneme transfer while maintaining personal identity.' },
    { title: 'Inference Latency Reduction', desc: 'Targeting end-to-end response times under 300ms for fluid dialogue.' },
    { title: 'Privacy-Preserving Computation', desc: 'Designing zero-knowledge encryption and on-device processing options.' },
    { title: 'Cryptographic Voice Sovereignty', desc: 'Developing non-fungible biometric access controls preventing voice cloning.' },
    { title: 'Call Routing & Peripheral Integration', desc: 'Investigating operating system audio injection pathways for phone calls.' },
  ];

  const filteredDimensions = EVALUATION_DIMENSIONS.filter(
    (dim) =>
      dim.area.toLowerCase().includes(filterQuery.toLowerCase()) ||
      dim.investigationScope.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="research" className="py-20 md:py-28 bg-[#0b0f19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">06. INVESTIGATION & EVALUATION</div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Research Direction & Methodology
            </h2>
            <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded border border-indigo-500/20">
              Academic & Technical Feasibility
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Assistive vocal preservation requires scientific rigor. MYVOICE grounds its roadmap in transparent research inquiries rather than unsubstantiated claims or premature benchmarks.
          </p>
        </div>

        {/* The 95% Aspiration Framing Box (Explicitly Contextualized) */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-amber-950/20 via-[#15120f] to-amber-950/20 border border-amber-500/30 mb-20 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>CRITICAL RESEARCH CLARIFICATION</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            The 95% Voice Similarity Long-Term Aspiration
          </h3>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-4xl">
            “95% voice similarity is a long-term aspiration, not a validated result. The evaluation method, measurement criteria, and achievable performance remain to be established through research.”
          </p>
          <div className="pt-2 text-xs text-slate-400 leading-relaxed max-w-4xl border-t border-white/10">
            AI-generated speech is not yet indistinguishable from a person’s natural voice across spontaneous conversation. In this portfolio, the 95% figure represents an engineering compass guiding research into formant preservation, pitch stability, and subjective family recognition trials—not an achieved metric or clinical guarantee.
          </div>
        </div>

        {/* 10 Research Objectives */}
        <div className="mb-20 space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono text-sky-400">CORE SCOPE</div>
            <h3 className="text-2xl font-bold text-white">10 Planned Research Objectives</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Specific technical, acoustic, and ethical frontiers actively investigated during concept development:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {objectives.map((obj, oIdx) => (
              <div
                key={oIdx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-slate-500">
                    {oIdx + 1 < 10 ? `0${oIdx + 1}` : oIdx + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-white mt-2 mb-1.5">{obj.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proposed Evaluation Framework Matrix */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-sky-400">EVALUATION SPECIFICATION</div>
              <h3 className="text-2xl font-bold text-white">Planned Evaluation Framework</h3>
              <p className="text-xs text-slate-400 mt-1">
                Proposed experimental dimensions designed to test future system iterations against rigorous standards.
              </p>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter dimensions..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-sky-400"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="rounded-xl border border-white/10 overflow-hidden bg-black/30">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03] text-slate-300 font-mono">
                    <th className="py-3.5 px-4 font-medium">Evaluation Area</th>
                    <th className="py-3.5 px-4 font-medium">Investigation Scope</th>
                    <th className="py-3.5 px-4 font-medium">Proposed Methodology</th>
                    <th className="py-3.5 px-4 font-medium whitespace-nowrap">Current Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredDimensions.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-4 font-semibold text-white whitespace-nowrap">
                        {row.area}
                      </td>
                      <td className="py-4 px-4 text-slate-300 max-w-xs leading-relaxed">
                        {row.investigationScope}
                      </td>
                      <td className="py-4 px-4 text-slate-400 max-w-sm leading-relaxed">
                        {row.methodology}
                      </td>
                      <td className="py-4 px-4 text-amber-300/90 whitespace-nowrap font-mono text-[11px]">
                        {row.currentStatus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-[11px] text-slate-400 italic">
            Note: All items represent proposed evaluation methodologies. No clinical trials or patient studies have been performed.
          </div>
        </div>
      </div>
    </section>
  );
}
