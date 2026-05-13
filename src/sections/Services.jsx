import {
  ArrowRight,
  Check,
  Code2,
  Megaphone,
  Palette,
  Share2,
} from "lucide-react";

const services = [
  {
    id: "social-media-packages",
    icon: Share2,
    title: "Social Media Management",
    short:
      "Strategic content planning, creative designs, engaging captions, reel ideas, and steady page growth..",
    packages: [
      {
        name: "Basic Social Setup",
        price: "LKR 5000",
        tag: " Platform management with content provided by client.",
        items: [
          " 1 social media platform management",
          "Monthly content plan",
          "Post scheduling",
          "Caption writing",
          "Basic hashtag research",
          "1 Meta ad campaign setup",
          "Basic audience targeting",
          "Page optimization suggestions",
          "Monthly performance summary",
        ],
      },
      {
        name: "Growth Social",
        price: "LKR 15,000",
        tag: "All designs and editing handled by our team",
        featured: true,
        items: [
          "Management of 2 social media platforms",
          "5 custom post designs",
          "2 basic reels",
          "Monthly content plan",
          "Post scheduling",
          "Caption writing",
          "Basic hashtag research",
          "1 Meta ad campaign setup",
          "Basic audience targeting",
          "Page optimization suggestions",
          "Monthly performance summary",
        ],
      },
      {
        name: "Scale Social",
        price: "LKR 35,000",
        tag: "For active brands,All designs and editing handled by our team",
        items: [
          "Management of 2 social media platforms",
          "8 custom post designs",
          "4 professional reels",
          "2 Meta ad campaign setups",
          "Competitor analysis",
          "Monthly content plan",
          "Post scheduling",
          "Caption writing",
          "Basic hashtag research",
          "Basic audience targeting",
          "Page optimization suggestions",
          "Monthly performance summary",
        ],
      },
      {
        name: "Elite Brand Growth Package",
        price: "LKR 65,000",
        tag: "Complete multi-platform management with advanced advertising and premium content growth.",
        items: [
          "Management of 3 social media platforms",
          "14 premium post designs",
          "6 professional reels",
          "4 Meta ad campaign setups",
          "A/B testing for ad performance",
          "Competitor analysis",
          "Monthly content plan",
          "Post scheduling",
          "Caption writing",
          "Advanced hashtag research",
          "Audience targeting optimization",
          "Page optimization suggestions",
          "Monthly profile image updates",
          "Monthly cover page design updates",
          "Monthly performance analytics report",
          "Engagement growth strategy",
        ],
      },
      {
        name: "Ultimate Business Scaling Package",
        price: "LKR 110,000",
        tag: " Full-scale premium marketing management focused on aggressive brand growth and business scaling.",
        items: [
          "Management of 4 social media platforms",
          "20 premium custom post designs",
          "10 high-quality reels",
          "6 Meta ad campaign setups",
          "Advanced A/B testing",
          "Detailed competitor analysis",
          "Custom monthly content strategy",
          "Weekly content scheduling",
          "Professional caption writing",
          "Advanced hashtag research",
          "Audience targeting optimization",
          "Retargeting ad strategy",
          "Monthly profile and cover page updates",
          "Brand identity consistency management",
          "Community engagement management",
          "Monthly analytics and growth reports",
          "Creative campaign planning",
          "Seasonal promotional campaign designs",
          "Priority support and consultation",
        ],
      },
    ],
  },
  {
    id: "paid-ads-packages",
    icon: Megaphone,
    title: "Paid Media Campaigns",
    short:
      "Meta, Google, and TikTok ad setup with targeting, testing, and reporting.",
    packages: [
      {
        name: "Launch Ads",
        price: "LKR 5,000",
        tag: "For first campaign",
        items: [
          "1 campaign setup",
          "Audience research",
          "Ad copy support",
          "7-day optimization",
        ],
      },
      {
        name: "Lead Growth Ads",
        price: "LKR 9,000",
        tag: "Lead focused",
        featured: true,
        items: [
          "2 campaign setups",
          "A/B creative testing",
          "Retargeting audience setup",
          "Weekly result check",
          "Budget guidance",
        ],
      },
      {
        name: "Performance Ads",
        price: "LKR 25,000",
        tag: "For serious growth",
        items: [
          "3 campaign setups",
          "Full funnel structure",
          "Retargeting + lookalikes",
          "Conversion tracking support",
          "Detailed monthly report",
        ],
      },
    ],
  },
  {
    id: "branding-packages",
    icon: Palette,
    title: "Creative Design & Branding",
    short:
      "Creative logos, social templates, ad creatives, thumbnails, and powerful brand visuals.",
    packages: [
      {
        name: "Brand Starter",
        price: "LKR 30,000",
        tag: "Basic identity",
        items: [
          "Logo refinement",
          "Color palette",
          "Font pairing",
          "5 social templates",
          "Basic brand guide",
        ],
      },
      {
        name: "Visual Identity",
        price: "LKR 60,000",
        tag: "Professional look",
        featured: true,
        items: [
          "Logo concept direction",
          "10 social templates",
          "Ad creative style",
          "Highlight covers",
          "Mini brand guideline PDF",
        ],
      },
      {
        name: "Premium Brand Kit",
        price: "LKR 95,000",
        tag: "Complete design system",
        items: [
          "Full visual direction",
          "20 social templates",
          "Motion style guide",
          "Campaign creative set",
          "Complete brand guideline",
        ],
      },
    ],
  },
  {
    id: "web-tech-packages",
    icon: Code2,
    title: "Web, App & Business Tech",
    short:
      "Business websites,Mobile Apps, landing pages, contact flows, automation, and deployment support.",
    packages: [
      {
        name: "Landing Page",
        price: "LKR 45,000+",
        tag: "Fast launch",
        items: [
          "1-page responsive website",
          "Hero + services + contact",
          "WhatsApp CTA",
          "Basic SEO setup",
          "Vercel deployment guide",
        ],
      },
      {
        name: "Business Website",
        price: "LKR 90,000+",
        tag: "Most requested",
        featured: true,
        items: [
          "Up to 5 pages",
          "Modern responsive UI",
          "Contact/package inquiry form",
          "Animation + hover effects",
          "Speed optimization",
        ],
      },
      {
        name: "Custom Web System",
        price: "Custom quote",
        tag: "Advanced build",
        items: [
          "Dashboard/login option",
          "Backend/API support",
          "Database setup",
          "Admin management option",
          "Deployment + maintenance plan",
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="overflow-hidden bg-white section-soft">
      <div className="w-full mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto mb-10 text-center md:mb-12">
          <p className="justify-center section-tag">What we do</p>
          <h2 className="section-title">Choose a service and view packages</h2>
          <p className="mt-4 section-lead text-charcoal-600">
            Click any service card to jump directly to its package options. On
            mobile, packages can be side-scrolled.
          </p>
        </div>

        <div className="grid gap-4 mb-16 sm:grid-cols-2 lg:grid-cols-4 hover:shadow-orange-400">
          {services.map(({ id, icon: Icon, title, short }) => (
            <a
              key={id}
              href={`#${id}`}
              className="block p-5 border group bg-charcoal-100 border-charcoal-100 rounded-2xl hover:border-orange-300 hover:bg-white hover-lift hover:shadow-orange-400"
            >
              <div className="flex items-center justify-center mb-4 transition-colors bg-orange-100 w-11 h-11 rounded-xl group-hover:bg-orange-500">
                <Icon
                  size={20}
                  className="text-orange-500 transition-colors group-hover:text-white"
                />
              </div>
              <h3 className="mb-2 text-base font-bold font-display text-charcoal-900">
                {title}
              </h3>
              <p className="mb-5 text-xs leading-relaxed text-charcoal-600">
                {short}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600">
                View packages{" "}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-2"
                />
              </span>
            </a>
          ))}
        </div>

        <div className="space-y-12">
          {services.map(({ id, icon: Icon, title, packages }, index) => (
            <article
              key={id}
              id={id}
              className="scroll-mt-24 rounded-[2rem] border border-charcoal-100 bg-gradient-to-br from-charcoal-50 to-white p-5 md:p-7 hover:shadow-orange-400"
            >
              <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-end md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-orange-500 shadow-lg rounded-2xl shadow-orange-200">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-600">
                      Service 0{index + 1}
                    </p>
                    <h3 className="text-xl font-extrabold font-display md:text-2xl text-charcoal-900">
                      {title} Packages
                    </h3>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 text-sm font-bold text-white transition-all bg-charcoal-900 hover:bg-orange-500 rounded-xl md:w-auto hover:shadow-orange-400"
                >
                  Ask for custom quote <ArrowRight size={16} />
                </a>
              </div>

              <div className="px-1 pb-3 -mx-1 overflow-x-auto snap-x snap-mandatory package-scroll">
                <div className="flex min-w-full gap-4 md:grid md:grid-cols-3 md:gap-5">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`snap-start min-w-[82%] sm:min-w-[360px] md:min-w-0 rounded-3xl p-6 flex flex-col hover-lift ${
                        pkg.featured
                          ? "bg-charcoal-900 text-white border-2 border-orange-500"
                          : "bg-white border border-charcoal-100 hover:shadow-orange-500 mt-8"
                      }`}
                    >
                      <div
                        className={`inline-flex w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4 ${pkg.featured ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-600"}`}
                      >
                        {pkg.tag}
                      </div>
                      <h4
                        className={`font-display font-extrabold text-xl mb-2 ${pkg.featured ? "text-white" : "text-charcoal-900"}`}
                      >
                        {pkg.name}
                      </h4>
                      <div
                        className={`font-display font-extrabold text-2xl mb-5 ${pkg.featured ? "text-orange-400" : "text-orange-500"}`}
                      >
                        {pkg.price}
                      </div>
                      <ul className="flex-1 space-y-3">
                        {pkg.items.map((item) => (
                          <li
                            key={item}
                            className={`flex items-start gap-2 text-sm leading-relaxed ${pkg.featured ? "text-charcoal-200" : "text-charcoal-500"}`}
                          >
                            <Check
                              size={16}
                              className={`flex-shrink-0 mt-0.5 ${pkg.featured ? "text-orange-400" : "text-orange-500"}`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className={`mt-7 block text-center text-sm font-bold py-3 rounded-xl transition-colors ${
                          pkg.featured
                            ? "bg-orange-500 hover:bg-orange-600 text-white"
                            : "border border-orange-500 text-orange-500 hover:bg-orange-50"
                        }`}
                      >
                        Select package
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
