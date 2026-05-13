import { useState } from 'react'
import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', package: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const waLink = `https://wa.me/94769918162?text=${encodeURIComponent("Hi Celos! I'm interested in your services.")}`

  return (
    <section id="contact" className="section-full bg-charcoal-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="section-tag">Get in touch</p>
          <h2 className="section-title">Let's create what's next, together</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="flex flex-col gap-6">
            <p className="text-charcoal-500 leading-relaxed">
              Partner with Celos and let's build your brand's digital future. Reach out via WhatsApp for the fastest response.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-charcoal-400">Phone / WhatsApp</div>
                  <a href="tel:+94769918162" className="font-semibold text-charcoal-900 hover:text-orange-500 transition-colors">
                    +94 76 991 8162
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-xs text-charcoal-400">Email</div>
                  <a href="mailto:kchamara1017@gmail.com" className="font-semibold text-charcoal-900 hover:text-orange-500 transition-colors text-sm">
                    kchamara1017@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1ebe59] text-white font-semibold px-6 py-4 rounded-xl transition-colors text-sm"
            >
              <MessageCircle size={20} />
              Chat with us on WhatsApp
            </a>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                { icon: Facebook,  href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin,  href: '#', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl border border-charcoal-100 p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                  <MessageCircle size={28} className="text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-xl text-charcoal-900">Message sent!</h3>
                <p className="text-charcoal-400 text-sm">We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-charcoal-500">Your name</label>
                    <input
                      type="text"
                      placeholder="Kasun Perera"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="border border-charcoal-100 rounded-lg px-3 py-2.5 text-sm text-charcoal-900 outline-none focus:border-orange-400 bg-charcoal-50"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-charcoal-500">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="border border-charcoal-100 rounded-lg px-3 py-2.5 text-sm text-charcoal-900 outline-none focus:border-orange-400 bg-charcoal-50"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-charcoal-500">Package interested in</label>
                  <select
                    value={form.package}
                    onChange={e => setForm({ ...form, package: e.target.value })}
                    className="border border-charcoal-100 rounded-lg px-3 py-2.5 text-sm text-charcoal-900 outline-none focus:border-orange-400 bg-charcoal-50"
                  >
                    <option value="">Select a package...</option>
                    <option>Startup — LKR 35,000/mo</option>
                    <option>Growth — LKR 75,000/mo</option>
                    <option>Scale — LKR 111,000/mo</option>
                    <option>Custom / Add-on inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-charcoal-500">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand and goals..."
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="border border-charcoal-100 rounded-lg px-3 py-2.5 text-sm text-charcoal-900 outline-none focus:border-orange-400 bg-charcoal-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
