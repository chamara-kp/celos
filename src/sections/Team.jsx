import { BadgeCheck, Camera, Code2, Megaphone } from 'lucide-react'

const team = [
  { name: 'Pathum Chamara', role: 'Founder / Digital Strategist', icon: Megaphone, desc: 'Plans campaigns, brand direction, content strategy, and client growth systems.' },
  { name: 'Creative Designer', role: 'Brand & Social Designer', icon: Camera, desc: 'Creates scroll-stopping post designs, reels concepts, and brand visuals.' },
  { name: 'Web Developer', role: 'Frontend & Website Specialist', icon: Code2, desc: 'Builds modern, responsive business websites focused on speed and conversions.' },
]

export default function Team() {
  return (
    <section id="team" className="section-soft bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-tag justify-center">Our team</p>
          <h2 className="section-title">A focused team for content, campaigns, and websites</h2>
          <p className="text-charcoal-500 mt-5 leading-relaxed">Celos combines strategy, creative design, and development support so your brand looks professional and grows consistently.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map(({ name, role, icon: Icon, desc }) => (
            <article key={name} className="group bg-charcoal-50 border border-charcoal-100 rounded-3xl p-7 hover-lift overflow-hidden relative">
              <div className="absolute -right-10 -top-10 w-28 h-28 rounded-full bg-orange-200/50 group-hover:scale-125 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Icon size={28} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal-900">{name}</h3>
                <p className="text-orange-600 font-bold text-sm mt-1">{role}</p>
                <p className="text-charcoal-500 text-sm leading-relaxed mt-4">{desc}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-charcoal-600 mt-6">
                  <BadgeCheck size={16} className="text-orange-500" /> Client-focused workflow
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
