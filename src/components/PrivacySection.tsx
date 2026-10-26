import { Shield, Lock, EyeOff, Trash2, KeyRound, UserCheck } from 'lucide-react';

export function PrivacySection() {
  const principles = [
    {
      icon: UserCheck,
      title: 'Sovereign Ownership & Control',
      summary: 'Your vocal identity belongs solely to you.',
      details: 'A user’s personal voice profile is private by default and remains under their exclusive ownership. No secondary rights, transfer of copyright, or sub-licensing are required or asserted.'
    },
    {
      icon: KeyRound,
      title: 'Explicit, Granular Consent',
      summary: 'No audio is ingested or processed without clear affirmative permission.',
      details: 'Users maintain transparent visibility into which files are uploaded, how they are analyzed, and have the right to revoke processing permissions at any time.'
    },
    {
      icon: EyeOff,
      title: 'Zero Commercialization & Advertising Ban',
      summary: 'Voice biometric data is strictly excluded from commercial data mining.',
      details: 'Under no circumstances will voice recordings or synthetic profiles be monetized, sold to third parties, used for ad targeting, or merged into public training corpuses.'
    },
    {
      icon: Lock,
      title: 'Cryptographic Anti-Spoofing Defenses',
      summary: 'Hardened safeguards preventing unauthorized voice cloning.',
      details: 'Personal voice models are encrypted with private keys tied to verified user credentials and paired hardware peripherals, defending against deepfake misuse.'
    },
    {
      icon: Trash2,
      title: 'Permanent Deletion & Data Portability',
      summary: 'Unconditional right to remove all acoustic data.',
      details: 'A single command in the proposed account settings triggers irreversible cryptographic deletion of both raw reference audio and trained neural weights across all storage layers.'
    },
    {
      icon: Shield,
      title: 'Secure Device Recovery & Migration',
      summary: 'Losing a phone should never mean losing your preserved voice.',
      details: 'If a smartphone is lost or damaged, the user can restore their voice profile onto a replacement phone using verified multi-factor recovery without needing to rebuild or re-record.'
    }
  ];

  return (
    <section id="privacy" className="py-20 md:py-28 relative bg-[#080c14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">07. ETHICS, CONSENT & SECURITY</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Voice Data Is Deeply Personal
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A voice is not merely acoustic frequency data; it is an intimate expression of human dignity and identity. The MYVOICE ethical framework establishes uncompromising biometric security and privacy safeguards.
          </p>
        </div>

        {/* 6 Core Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 w-fit mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1.5">{p.title}</h3>
                  <div className="text-xs font-medium text-sky-300/90 mb-3">{p.summary}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ethical Commitment Banner */}
        <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-sky-950/20 via-black/40 to-indigo-950/20 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base font-semibold text-white">Ethical Review & Research Transparency</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Any future real-world evaluation involving individuals experiencing voice loss will be submitted for institutional ethical review (IRB/REC) to ensure psychological well-being, dignity, and participant protection.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 border border-white/10 px-4 py-2 rounded-lg bg-white/[0.02] shrink-0">
            Governed by Assistive Technology Ethics Charter
          </div>
        </div>
      </div>
    </section>
  );
}
