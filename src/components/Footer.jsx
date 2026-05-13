export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-extrabold text-xl">
            <span className="text-orange-500">CE</span>LOS
          </div>
          <div className="text-charcoal-500 text-xs mt-1">Next-Level Digital Marketing Solutions</div>
        </div>

        <div className="flex gap-6 text-sm text-charcoal-400">
          {['About', 'Services', 'Pricing', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-orange-400 transition-colors">{l}</a>
          ))}
        </div>

        <div className="text-charcoal-600 text-xs">© 2025 Celos. All rights reserved.</div>
      </div>
    </footer>
  )
}
