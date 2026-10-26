import { IMAGES } from '../data/assets';
import { Radio, AlertOctagon, HelpCircle, Shield, Volume2, Sparkles, Feather, BellRing } from 'lucide-react';

export function HardwareSection() {
  const openQuestions = [
    {
      q: 'Acoustic Transducer Capability',
      desc: 'Which existing miniature acoustic or bone-conduction transducers, if any, can reproduce natural vocal formants without bulky enclosure mass or tinny resonance?'
    },
    {
      q: 'Live Call Microphone Injection',
      desc: 'Can the band deliver generated speech into the microphone path of an ordinary phone call without triggering OS feedback loops or baseband isolation errors?'
    },
    {
      q: 'Transmission Latency & Wireless Protocol',
      desc: 'What wireless connectivity standard (LE Audio, aptX Low Latency, or proprietary RF) provides the required sub-100ms packet delivery alongside all-day battery endurance?'
    },
    {
      q: 'Cryptographic Hardware Binding',
      desc: 'How can the wearable band be securely and non-transferably associated with its owner’s private voice profile to prevent unauthorized third-party playback?'
    },
    {
      q: 'Disconnection Safety Protocol',
      desc: 'How must the system behave when wireless connection drops mid-sentence to guarantee the user’s private typed thoughts are never inadvertently broadcast through the phone loudspeaker?'
    },
    {
      q: 'Long-Term Ergonomic Comfort',
      desc: 'Can the proposed ultra-lightweight collar form factor support hypoallergenic all-day contact against sensitive post-surgical neck and throat tissue?'
    }
  ];

  return (
    <section id="hardware" className="py-20 md:py-28 bg-[#0b0f1a] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-indigo-400">04. HARDWARE INVESTIGATION</div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              The Proposed MYVOICE Band
            </h2>
            <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
              Hardware Concept — Under Research
            </span>
          </div>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            The band is conceptualized as the physical speech output device. It is intended to emit speech directly from the wearer’s collar or neck region, shifting communication away from an impersonal handheld smartphone speaker.
          </p>
        </div>

        {/* Visual Showcase: 2 Concept Renders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          {/* Visual 1: Standalone Product Render */}
          <div className="lg:col-span-6 flex flex-col justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/10 group">
            <div className="relative rounded-xl overflow-hidden bg-slate-950">
              <img
                src={IMAGES.productRender}
                alt="Studio product render of the conceptual wearable speech band on neutral surface"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-black/85 backdrop-blur-md border border-white/15">
                <p className="text-[11px] font-semibold text-amber-400 tracking-wide uppercase">
                  Concept visual — not a real or finalized product
                </p>
                <p className="text-[10px] text-slate-300">
                  Industrial design exploration of contoured acoustic dispersion geometry.
                </p>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-base font-semibold text-white">Proposed Compact Collar Form</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prioritizes an ultra-lightweight, discreet band that can rest comfortably beneath or along casual clothing without drawing unwanted clinical attention.
              </p>
            </div>
          </div>

          {/* Visual 2: Lifestyle Context Render */}
          <div className="lg:col-span-6 flex flex-col justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/10 group">
            <div className="relative rounded-xl overflow-hidden bg-slate-950">
              <img
                src={IMAGES.lifestyleConcept}
                alt="Lifestyle portrait of an individual wearing the conceptual lightweight speech collar band"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded bg-black/85 backdrop-blur-md border border-white/15">
                <p className="text-[11px] font-semibold text-amber-400 tracking-wide uppercase">
                  Concept visual — not a real or finalized product
                </p>
                <p className="text-[10px] text-slate-300">
                  Lifestyle concept illustrating intended social presence and non-intrusive everyday wear.
                </p>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-base font-semibold text-white">Human Dignity in Daily Conversation</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                When speech emanates from the wearer rather than a hand-held phone screen, eye contact is preserved and conversations regain personal warmth.
              </p>
            </div>
          </div>
        </div>

        {/* Intended Purpose & Design Direction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 w-fit">
              <Feather className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Compact & Lightweight</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Design aspiration emphasizes minimal neck weight (&lt;65g), soft hypoallergenic contact materials, and low-profile dimensions suitable for everyday wear.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 w-fit">
              <Volume2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Natural Acoustic Dispersion</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Moving beyond harsh, monotone mechanical buzzing common in legacy electrolarynx devices toward natural acoustic speech reproduction.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 w-fit">
              <BellRing className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Disconnection Safety Rule</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The connected phone must NEVER silently divert speech to its phone speaker upon unexpected band disconnect. A strict confirmation alert is required.
            </p>
          </div>
        </div>

        {/* Proposed Operating Relationship */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-950/20 via-[#0d1222] to-sky-950/20 border border-white/15 mb-20 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
            <Radio className="w-4 h-4" />
            <span>OPERATING PROTOCOL SPECIFICATION</span>
          </div>
          <h3 className="text-2xl font-bold text-white">
            Intended Relationship: Phone & Wearable Band
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <span className="font-mono text-slate-400">01. Management</span>
              <p className="text-slate-300 leading-relaxed">
                The user types, organizes phrases, and adjusts settings entirely through the mobile software application.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <span className="font-mono text-slate-400">02. Encrypted Link</span>
              <p className="text-slate-300 leading-relaxed">
                Audio packets are transmitted wirelessly via an authenticated, low-latency secure channel to the paired band.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <span className="font-mono text-slate-400">03. Audible Output</span>
              <p className="text-slate-300 leading-relaxed">
                The band’s acoustic transducer projects speech audibly into the room from the user's upper chest or neck.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-amber-500/20 space-y-2">
              <span className="font-mono text-amber-300">04. Fail-Safe Gate</span>
              <p className="text-amber-200/90 leading-relaxed">
                If the link drops, transmission pauses instantly. Phone speaker remains silent until the user explicitly permits fallback.
              </p>
            </div>
          </div>
        </div>

        {/* Hardware Research Questions (Unresolved Inquiries) */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono text-amber-400 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>TRANSPARENCY IN HARDWARE R&D</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Active Hardware Research Questions</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We do not claim that these engineering challenges are resolved. Each question represents an active technical investigation:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {openQuestions.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-slate-500 mb-1">INQUIRY 0{idx + 1}</div>
                  <h4 className="text-sm font-semibold text-white mb-2">{item.q}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-amber-400">
                  Status: Open Engineering Investigation
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
