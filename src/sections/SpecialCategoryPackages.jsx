import React, { useMemo, useRef, useState } from 'react';

const categories = [
  {
    id: 'restaurants',
    name: 'Restaurants & Cafes',
    subtitle: 'For food pages, cafes, hotels, and cloud kitchens',
    accent: 'from-orange-500 to-red-500',
    packages: [
      { name: 'Starter Taste', price: 'LKR 15,000', tag: 'Start online', features: ['8 social posts per month', '4 short food reels', 'Basic menu/post captions', 'Hashtag research', 'Monthly content calendar'] },
      { name: 'Food Growth', price: 'LKR 30,000', tag: 'Popular', features: ['12 posts + 6 reels', 'Facebook & Instagram management', 'Food offer campaigns', '1 Meta ad setup', 'Monthly insights report'] },
      { name: 'Dine Pro', price: 'LKR 50,000', tag: 'Best for busy brands', features: ['16 posts + 8 reels', 'Weekly offer creatives', 'Customer review posts', '2 Meta ad campaigns', 'Competitor content ideas'] },
      { name: 'Restaurant Premium', price: 'LKR 75,000', tag: 'Scale bookings', features: ['22 posts + 10 reels', 'Photo/video shoot guidance', 'Event & weekend campaigns', 'Advanced ad targeting', 'Full monthly performance report'] },
      { name: 'Food Brand Elite', price: 'LKR 100,000+', tag: 'Full management', features: ['Daily content strategy', 'Influencer collaboration plan', 'A/B tested ads', 'Offer funnel setup', 'Growth consultation call'] },
    ],
  },
  {
    id: 'tuition',
    name: 'Tuition Classes',
    subtitle: 'For teachers, institutes, online classes, and revision programs',
    accent: 'from-blue-500 to-indigo-600',
    packages: [
      { name: 'Class Starter', price: 'LKR 12,000', tag: 'Basic visibility', features: ['8 class promotion posts', 'Student-friendly captions', 'Timetable post designs', 'WhatsApp CTA setup', 'Basic page optimization'] },
      { name: 'Student Reach', price: 'LKR 25,000', tag: 'Lead focus', features: ['12 posts + 4 reels', 'Class intake campaign', '1 Meta lead ad setup', 'Parent/student targeting', 'Monthly inquiry summary'] },
      { name: 'Institute Growth', price: 'LKR 45,000', tag: 'For institutes', features: ['16 posts + 6 reels', 'Results/testimonial creatives', '2 ad campaigns', 'Landing/WhatsApp CTA plan', 'Competitor analysis'] },
      { name: 'Revision Pro', price: 'LKR 65,000', tag: 'Season campaigns', features: ['20 posts + 8 reels', 'Exam season campaigns', 'Lead follow-up content', 'Advanced audience testing', 'Weekly performance update'] },
      { name: 'Education Elite', price: 'LKR 90,000+', tag: 'Full growth system', features: ['Full monthly strategy', 'High-converting video scripts', 'Multiple class campaigns', 'Retargeting plan', 'Growth consultation'] },
    ],
  },
  {
    id: 'clothing',
    name: 'Clothing Businesses',
    subtitle: 'For boutiques, online fashion stores, and local clothing brands',
    accent: 'from-pink-500 to-purple-600',
    packages: [
      { name: 'Fashion Start', price: 'LKR 15,000', tag: 'Simple launch', features: ['8 product posts', '4 reels/story ideas', 'Caption writing', 'Basic hashtag set', 'Monthly posting plan'] },
      { name: 'Boutique Growth', price: 'LKR 35,000', tag: 'Popular', features: ['14 posts + 6 reels', 'Offer & new arrival posts', 'Facebook/Instagram management', '1 Meta ad campaign', 'Basic audience targeting'] },
      { name: 'Fashion Pro', price: 'LKR 55,000', tag: 'Sales focused', features: ['18 posts + 8 reels', 'Collection launch creatives', '2 Meta ads', 'Retargeting content ideas', 'Monthly sales content report'] },
      { name: 'Brand Premium', price: 'LKR 80,000', tag: 'Brand building', features: ['24 posts + 10 reels', 'Influencer content plan', 'Promo calendar', 'A/B testing for ads', 'Competitor style research'] },
      { name: 'Fashion Elite', price: 'LKR 120,000+', tag: 'Full campaign', features: ['Daily story/post direction', 'Seasonal campaign strategy', 'Ad funnel setup', 'UGC content plan', 'Monthly growth consultation'] },
    ],
  },
  {
    id: 'travel',
    name: 'Travel Agencies',
    subtitle: 'For tour operators, visa consultants, and hotel/travel services',
    accent: 'from-emerald-500 to-cyan-600',
    packages: [
      { name: 'Travel Starter', price: 'LKR 18,000', tag: 'Awareness', features: ['8 destination posts', '4 reels/story prompts', 'Package captions', 'Basic page optimization', 'Monthly content calendar'] },
      { name: 'Trip Leads', price: 'LKR 40,000', tag: 'Lead generation', features: ['14 posts + 6 reels', 'Tour package campaign', '1 lead ad setup', 'WhatsApp inquiry CTA', 'Monthly lead report'] },
      { name: 'Agency Growth', price: 'LKR 65,000', tag: 'More inquiries', features: ['18 posts + 8 reels', 'Seasonal travel offers', '2 Meta campaigns', 'Audience testing', 'Competitor package research'] },
      { name: 'Tour Premium', price: 'LKR 95,000', tag: 'Campaign scale', features: ['24 posts + 10 reels', 'Visa/tour content series', 'Retargeting plan', 'Offer funnel strategy', 'Weekly performance summary'] },
      { name: 'Travel Elite', price: 'LKR 140,000+', tag: 'Full growth', features: ['Full campaign management', 'Influencer/traveller content plan', 'Multi-package ad funnel', 'Advanced retargeting', 'Monthly strategy meeting'] },
    ],
  },
  {
    id: 'vehicles',
    name: 'Vehicle Sales',
    subtitle: 'For car dealers, bike shops, rentals, and vehicle importers',
    accent: 'from-slate-700 to-zinc-900',
    packages: [
      { name: 'Auto Starter', price: 'LKR 18,000', tag: 'Basic listings', features: ['10 vehicle listing posts', 'Simple captions/specs', 'Basic page optimization', 'Monthly content plan', 'Inquiry CTA setup'] },
      { name: 'Dealer Growth', price: 'LKR 40,000', tag: 'More inquiries', features: ['16 posts + 5 reels', 'Facebook/Instagram management', '1 Meta ad campaign', 'Targeted buyer audience', 'Monthly inquiry summary'] },
      { name: 'Auto Pro', price: 'LKR 65,000', tag: 'Sales focused', features: ['22 posts + 8 reels', 'Vehicle highlight videos', '2 ad campaigns', 'Retargeting content plan', 'Competitor price/content ideas'] },
      { name: 'Showroom Premium', price: 'LKR 95,000', tag: 'Dealer branding', features: ['30 posts + 10 reels', 'Offer & finance creatives', 'Advanced ad testing', 'Weekly performance update', 'Brand consistency system'] },
      { name: 'Auto Elite', price: 'LKR 150,000+', tag: 'Full system', features: ['Daily listing strategy', 'Lead funnel setup', 'A/B tested ads', 'Sales script support', 'Monthly growth consultation'] },
    ],
  },
];

function PackageCard({ pack, accent }) {
  return (
    <article className="snap-center shrink-0 w-full sm:w-[360px] lg:w-[380px] rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-orange-300">{pack.tag}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{pack.name}</h3>
        </div>
        <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${accent} shadow-lg`} />
      </div>

      <p className="mt-5 text-3xl font-extrabold text-white">{pack.price}</p>
      <p className="mt-1 text-sm text-white/55">Monthly package</p>

      <ul className="mt-6 space-y-3">
        {pack.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-6 text-white/80">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a href="#contact" className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-orange-400 hover:text-white">
        Get This Package
      </a>
    </article>
  );
}

export default function SpecialCategoryPackages() {
  const [active, setActive] = useState(categories[0].id);
  const scrollRef = useRef(null);
  const category = useMemo(() => categories.find((item) => item.id === active) || categories[0], [active]);

  const scrollPackages = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth < 640 ? el.clientWidth : 400;
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="special-packages" className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-orange-400">Special Business Packages</p>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Trending Sri Lankan Business Growth Plans</h2>
          <p className="mt-5 text-base leading-8 text-white/65">
            Choose your business category and explore ready-made social media marketing packages built for real local business needs.
          </p>
        </div>

        <div className="mt-10 flex gap-3 overflow-x-auto pb-3 scrollbar-hide sm:flex-wrap sm:justify-center sm:overflow-visible">
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`shrink-0 rounded-full border px-5 py-3 text-sm font-bold transition ${active === item.id ? 'border-orange-400 bg-orange-400 text-white shadow-lg shadow-orange-500/25' : 'border-white/10 bg-white/5 text-white/75 hover:border-orange-300 hover:text-white'}`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-black text-white sm:text-3xl">{category.name}</h3>
            <p className="mt-2 text-white/60">{category.subtitle}</p>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => scrollPackages(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition hover:bg-orange-400" aria-label="Previous package">‹</button>
            <button type="button" onClick={() => scrollPackages(1)} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition hover:bg-orange-400" aria-label="Next package">›</button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="mt-8 flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
        >
          {category.packages.map((pack) => (
            <PackageCard key={pack.name} pack={pack} accent={category.accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
