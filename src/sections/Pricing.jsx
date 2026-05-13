import { Check } from "lucide-react";

const packages = [
  {
    name: "Startup",
    price: "35,000",
    period: "per month",
    platforms: "Facebook & Instagram",
    desc: "Perfect for small businesses starting their digital journey.",
    featured: false,
    sections: [
      {
        label: "Content creation",
        items: [
          "8 branded posts per month",
          "4 short-form reels/videos",
          "Sinhala or English captions",
        ],
      },
      {
        label: "Advertising & growth",
        items: [
          "Meta ads management (budget excluded)",
          "Advance post boosting & testing",
          "Competitor content analysis",
        ],
      },
      {
        label: "Analysis & optimization",
        items: [
          "Monthly performance review",
          "Profile & cover optimization",
          "Audience insight analysis",
        ],
      },
    ],
  },
  {
    name: "Growth",
    price: "75,000",
    period: "per month",
    platforms: "TikTok · Facebook · Instagram",
    desc: "For brands aiming at consistency and measurable growth.",
    featured: true,
    sections: [
      {
        label: "Content creation",
        items: [
          "12 branded posts per month",
          "6 short-form reels/videos",
          "Sinhala or English captions",
          "Custom designed brand template",
        ],
      },
      {
        label: "Advertising & growth",
        items: [
          "2 paid ad setups (budget excluded)",
          "Advance post boosting & testing",
          "Competitor content analysis",
          "Grow brand awareness",
        ],
      },
      {
        label: "Analysis & optimization",
        items: [
          "Monthly performance insight",
          "A/B testing",
          "Audience insight analysis",
          "Strategic content roadmap",
        ],
      },
    ],
  },
  {
    name: "Scale",
    price: "111,000",
    period: "per month",
    platforms: "TikTok · Facebook · Instagram",
    desc: "For brands ready to dominate across all channels.",
    featured: false,
    sections: [
      {
        label: "Content creation",
        items: [
          "18 branded posts per month",
          "10 short-form reels/videos",
          "Sinhala or English captions",
          "Custom designed brand template",
          "Monthly cover pages update",
        ],
      },
      {
        label: "Advertising & growth",
        items: [
          "3 meta ad campaigns (budget excluded)",
          "Advance post boosting & testing",
          "Competitor content analysis",
          "Optimize targeting audience",
        ],
      },
      {
        label: "Analysis & optimization",
        items: [
          "Monthly performance review",
          "A/B testing",
          "Strategic content roadmap",
          "Next month strategic action plan",
        ],
      },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-full bg-charcoal-50">
      <div className="w-full mx-auto max-w-7xl">
        <div className="max-w-xl mx-auto text-center mb-14">
          <p className="section-tag">Social media growth framework</p>
          <h2 className="section-title">Choose the right package</h2>
        </div>

        <div className="grid items-start gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-7 flex flex-col ${
                pkg.featured
                  ? "bg-charcoal-900 text-white border-2 border-orange-500 hover-lift"
                  : "bg-white border border-charcoal-100 hover-lift"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </div>
              )}

              <div
                className={`text-xs font-bold tracking-widest uppercase mb-1 ${pkg.featured ? "text-orange-400" : "text-orange-500"}`}
              >
                {pkg.name}
              </div>
              <div
                className={`text-xs mb-4 leading-relaxed ${pkg.featured ? "text-charcoal-400" : "text-charcoal-400"}`}
              >
                {pkg.desc}
              </div>

              <div
                className={`font-display font-extrabold text-3xl mb-0.5 ${pkg.featured ? "text-white" : "text-charcoal-900"}`}
              >
                LKR {pkg.price}
              </div>
              <div
                className={`text-xs mb-1 ${pkg.featured ? "text-charcoal-400" : "text-charcoal-400"}`}
              >
                {pkg.period}
              </div>
              <div
                className={`text-xs font-medium mb-5 ${pkg.featured ? "text-orange-400" : "text-orange-500"}`}
              >
                {pkg.platforms}
              </div>

              <div
                className={`border-t mb-5 ${pkg.featured ? "border-charcoal-700" : "border-charcoal-100"}`}
              />

              <div className="flex flex-col flex-1 gap-5">
                {pkg.sections.map((sec) => (
                  <div key={sec.label}>
                    <div
                      className={`text-[10px] font-bold tracking-widest uppercase mb-2 ${pkg.featured ? "text-orange-400" : "text-orange-500"}`}
                    >
                      {sec.label}
                    </div>
                    <ul className="space-y-2">
                      {sec.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-2 text-xs leading-relaxed ${pkg.featured ? "text-charcoal-300" : "text-charcoal-500"}`}
                        >
                          <Check
                            size={13}
                            className={`flex-shrink-0 mt-0.5 ${pkg.featured ? "text-orange-400" : "text-orange-500"}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`mt-7 block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                  pkg.featured
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "border border-orange-500 text-orange-500 hover:bg-orange-50"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
