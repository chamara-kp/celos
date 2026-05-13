const addons = [
  { emoji: '🎨', name: 'Graphics design',  price: 'LKR 1,000 – 4,000' },
  { emoji: '🎬', name: 'Short videos',      price: 'LKR 5,000 – 8,000' },
  { emoji: '📸', name: 'Photography',       price: 'LKR 40,000' },
  { emoji: '📊', name: 'Social media audit',price: 'LKR 15,000' },
]

export default function Addons() {
  return (
    <section id="addons" className="section-full bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="section-tag">Add-on rate card</p>
          <h2 className="section-title">Enhance your package</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {addons.map(a => (
            <div
              key={a.name}
              className="bg-charcoal-50 border border-charcoal-100 rounded-3xl p-7 text-center hover:border-orange-300 hover-lift"
            >
              <div className="text-4xl mb-4">{a.emoji}</div>
              <div className="font-semibold text-charcoal-900 text-sm mb-2">{a.name}</div>
              <div className="font-display font-bold text-orange-500 text-base">{a.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
