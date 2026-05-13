import { Target, Brush, LineChart, Smartphone } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Strategy first",
    desc: "Data-driven strategies that align with your goals and target market.",
  },
  {
    icon: Brush,
    title: "Creative excellence",
    desc: "High-quality content that resonates with your audience and builds identity.",
  },
  {
    icon: LineChart,
    title: "Measurable growth",
    desc: "Monthly reports and performance insights so you always know what is working.",
  },
  {
    icon: Smartphone,
    title: "Multi-platform",
    desc: "Facebook, Instagram, TikTok, LinkedIn, Pinterest and beyond.",
  },
];

const metrics = [
  { num: "5+", label: "Platforms managed" },
  { num: "ROI", label: "Performance focused" },
  { num: "30d", label: "Quotation valid" },
  { num: "1+3", label: "Revisions included" },
];

export default function About() {
  return (
    <section id="about" className="section-full bg-charcoal-100">
      <div className="grid items-center w-full gap-16 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left */}
        <div>
          <p className="section-tag">Who we are</p>
          <h2 className="mb-5 section-title">
            High-quality digital solutions, built for growth
          </h2>
          <p className="mb-8 leading-relaxed text-charcoal-800 ">
            Celos is a high-quality digital solutions agency providing complete
            marketing, creative, and technology services to strengthen brands
            and drive business growth.
          </p>
          <div className="grid grid-cols-2 gap-3 ">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 text-center bg-white border rounded-2xl border-charcoal-300 hover-lift hover:shadow-orange-400"
              >
                <div className="text-2xl font-extrabold text-orange-500 font-display">
                  {m.num}
                </div>
                <div className="mt-1 text-xs text-charcoal-600">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 transition-all transition duration-300 duration-500 bg-white border rounded-3xl border-charcoal-100 p-7 hover:scale-105 hover:-translate-y-2 hover:rotate-1 hover:shadow-lg hover:shadow-orange-400 ">
          {pillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex items-center justify-center flex-shrink-0 bg-orange-100 w-11 h-11 rounded-xl">
                <Icon size={20} className="text-orange-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal-900">
                  {title}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-charcoal-600">
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
