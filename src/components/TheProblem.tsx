import { MessageSquareOff, HeartHandshake, MicOff, Activity, CalendarClock, ShieldAlert } from 'lucide-react';

export function TheProblem() {
  const problems = [
    {
      number: '01',
      title: 'Communication Barriers',
      icon: MessageSquareOff,
      description:
        'When the physical ability to articulate speech is lost, daily conversations, expressing urgent personal needs, and maintaining natural connection with loved ones often become exhausting and fragmented.'
    },
    {
      number: '02',
      title: 'Loss of Vocal Identity',
      icon: HeartHandshake,
      description:
        'A person’s voice is an acoustic fingerprint of their individuality, carrying warmth, humor, and familiarity. Losing speech is not merely an operational inconvenience; it is often experienced as a profound loss of self-expression.'
    },
    {
      number: '03',
      title: 'Limitations of Generic Speech',
      icon: MicOff,
      description:
        'Standard off-the-shelf text-to-speech tools rely on robotic, impersonal, or generic synthetic voices. They fail to reflect the user’s original timbre, characteristic cadence, familiar phrasing, or emotional nuances.'
    },
    {
      number: '04',
      title: 'Assistive Communication Needs',
      icon: Activity,
      description:
        'Individuals need communication systems that are lightweight, socially non-stigmatizing, rapid enough for fluid conversation, and practical for continuous use throughout daily life.'
    },
    {
      number: '05',
      title: 'Planning for Future Voice Loss',
      icon: CalendarClock,
      description:
        'People anticipating upcoming vocal surgery (such as a total laryngectomy) or navigating progressive neurological conditions often seek proactive audio-banking pathways before their natural speech diminishes.'
    }
  ];

  return (
    <section id="the-problem" className="py-20 md:py-28 bg-[#0b0f19] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-mono text-sky-400">01. THE HUMAN CHALLENGE</div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Why Vocal Identity Matters
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Speech is both an operational tool and an emotional bridge. When medical circumstances alter vocal cords, current assistive options often force individuals to choose between silence and an unfamiliar mechanical sound.
          </p>
        </div>

        {/* 5 Distinct Asymmetric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 0 || idx === 3;
            return (
              <div
                key={item.number}
                className={`p-6 sm:p-8 rounded-xl bg-white/[0.02] border border-white/10 hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-500">{item.number}</span>
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}

          {/* Context Card: Clinical & Empathetic Framing */}
          <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-indigo-950/20 to-sky-950/20 border border-sky-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-4">
                <ShieldAlert className="w-4 h-4" />
                <span>Empathetic Design Commitment</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Respectful Autonomy</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                MYVOICE acknowledges that vocal needs differ across medical journeys. Our research respects user agency: no person is portrayed as helpless, and every individual retains sovereign control over if, how, and when their vocal identity is recreated.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-slate-400">
              Research framework informed by speech pathology literature and assistive technology ethics.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
