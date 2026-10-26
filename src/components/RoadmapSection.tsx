import { ROADMAP_PHASES } from '../data/content';
import { Calendar, CheckCircle2, Clock, Compass } from 'lucide-react';

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 md:py-28 bg-[#0b0f19] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">08. RESEARCH ROADMAP</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Phased Research & Development Path
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            MYVOICE follows a disciplined, multi-phase investigation strategy. Each stage resolves prerequisite scientific, algorithmic, and acoustic questions before proceeding to physical integration.
          </p>
        </div>

        {/* 4 Phases Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase, idx) => {
            const isCurrent = phase.status === 'Current Focus';
            return (
              <div
                key={phase.phase}
                className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-sky-500/10 border-sky-400/80 shadow-lg shadow-sky-950/50'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-sky-400 font-semibold">{phase.phase}</span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isCurrent
                          ? 'bg-sky-400 text-black font-semibold'
                          : 'bg-white/5 text-slate-400 border border-white/10'
                      }`}
                    >
                      {phase.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{phase.title}</h3>
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{phase.timeframe}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                      Key Milestones
                    </div>
                    {phase.milestones.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isCurrent ? 'text-sky-400' : 'text-slate-500'}`} />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                  {isCurrent ? 'Active workstream' : 'Scheduled sequence'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
