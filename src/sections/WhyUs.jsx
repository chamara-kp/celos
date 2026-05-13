const reasons = [
  {
    num: '01',
    title: 'Clarity-first approach',
    desc: 'We build strong digital ecosystems that bring clarity and build brand authority for every client we partner with.',
  },
  {
    num: '02',
    title: 'Results you can measure',
    desc: 'Every package includes performance reports, A/B testing, and strategic roadmaps — so you always know what\'s working.',
  },
  {
    num: '03',
    title: 'Client-approved always',
    desc: 'All designs, videos, and captions go through your approval before publishing. Each asset includes 1 main + 3 minor revisions.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="section-full bg-charcoal-900">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-3">Why Celos</p>
          <h2 className="font-display font-extrabold leading-tight tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            We don't follow trends —<br />we shape them
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map(r => (
            <div key={r.num} className="bg-charcoal-800 border border-charcoal-700 rounded-3xl p-8 hover:-translate-y-2 hover:border-orange-500/60 transition-all duration-300">
              <div className="font-display font-extrabold text-5xl text-charcoal-700 leading-none mb-5">{r.num}</div>
              <div className="font-semibold text-white text-base mb-3">{r.title}</div>
              <div className="text-charcoal-400 text-sm leading-relaxed">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
