import { Quote, Star } from 'lucide-react'

const feedback = [
  { name: 'Local business owner', text: 'Celos gave our page a professional look and helped us understand what type of content our audience actually needs.' },
  { name: 'Startup founder', text: 'The strategy was clear, the designs were clean, and the communication was fast. It felt like working with a real growth partner.' },
  { name: 'Service brand manager', text: 'From captions to campaign ideas, everything was organized and easy to approve. The monthly plan saved us a lot of time.' },
]

export default function Testimonials() {
  return (
    <section id="feedback" className="section-soft bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.22),transparent_35%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange-400 mb-4">Customer feedback</p>
          <h2 className="font-display font-extrabold leading-tight tracking-[-0.04em] text-white" style={{ fontSize: 'clamp(2.1rem, 4.5vw, 3.5rem)' }}>Built to make clients feel confident</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {feedback.map(item => (
            <div key={item.name} className="bg-white/10 border border-white/10 backdrop-blur rounded-3xl p-7 hover:bg-white/[0.14] hover:-translate-y-2 transition-all duration-300">
              <Quote className="text-orange-400 mb-5" size={30} />
              <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={15} className="text-orange-400 fill-current" />)}</div>
              <p className="text-charcoal-100 leading-relaxed text-sm">“{item.text}”</p>
              <p className="text-white font-bold mt-6">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
