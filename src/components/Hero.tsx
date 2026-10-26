import { IMAGES } from '../data/assets';
import { ArrowDown, Sparkles, Shield, Cpu, Info } from 'lucide-react';

interface HeroProps {
  onOpenBrief: () => void;
}

export function Hero({ onOpenBrief }: HeroProps) {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top editorial context indicator (clean unboxed text, no pills) */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <span className="text-sky-400 font-medium">Voxera Research Portfolio</span>
          <span aria-hidden="true">·</span>
          <span>Assistive Voice Preservation</span>
          <span aria-hidden="true">·</span>
          <span className="text-amber-400/90 font-medium">Research-Stage Concept</span>
          <span aria-hidden="true">·</span>
          <span>No Working Prototype Available</span>
        </div>

        {/* 2-Column Desktop Grid: Left content, Right concept render */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Your Voice.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-100 to-indigo-300">
                Your Identity.
              </span>{' '}
              Your Way.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              MYVOICE is an assistive technology concept exploring how AI could help people preserve and recreate their original voice using personal recordings, personalized voice modelling, and a compatible wearable voice band.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 max-w-2xl">
              <div className="text-sm font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Central Philosophy</span>
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                “Your voice is more than sound. It is part of your identity.”
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                MYVOICE explores a future in which losing the ability to speak does not necessarily mean losing the connection to one’s familiar voice. This website presents a vision, not a promise of a proven clinical outcome.
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#the-problem"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-all shadow-md shadow-sky-950/50 cursor-pointer"
              >
                <span>Explore the Project</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#solution"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all cursor-pointer"
              >
                <span>Discover How It Works</span>
              </a>

              <button
                onClick={onOpenBrief}
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-mono text-slate-400 hover:text-sky-300 transition-colors"
              >
                <Info className="w-3.5 h-3.5" />
                <span>View Full Research Scope</span>
              </button>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl shadow-black/80 group">
              <img
                src={IMAGES.heroBand}
                alt="Concept industrial design render of the proposed lightweight wearable voice band collar"
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] sm:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle vignette scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-black/20 pointer-events-none" />

              {/* Mandatory clear disclaimer overlay tag */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black/85 backdrop-blur-md border border-white/15">
                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
                      Concept visual — not a real or finalized product
                    </p>
                    <p className="text-[11px] text-slate-300 leading-tight mt-0.5">
                      Wearable voice band collar design study. No physical band prototype has been manufactured or tested.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Research Reality & Transparency Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span>Project Stage</span>
            </div>
            <p className="text-sm font-semibold text-white">Concept & Requirements</p>
            <p className="text-xs text-slate-400 leading-normal">
              Defining ethical constraints, acoustic specifications, and system architecture.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Voice Similarity</span>
            </div>
            <p className="text-sm font-semibold text-white">95% Long-Term Aspiration</p>
            <p className="text-xs text-slate-400 leading-normal">
              An engineering ambition only. Not a measured result, benchmark, or guarantee.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" />
              <span>Hardware Band</span>
            </div>
            <p className="text-sm font-semibold text-white">Under Feasibility Study</p>
            <p className="text-xs text-slate-400 leading-normal">
              Acoustic dispersion, battery weight, and call routing remain active research questions.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-emerald-400" />
              <span>Validation Status</span>
            </div>
            <p className="text-sm font-semibold text-white">Non-Clinical & Unreleased</p>
            <p className="text-xs text-slate-400 leading-normal">
              Not a certified medical device; no clinical trials or patient studies completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
