/* ─────────────────────────────────────────────
   TrustedBy.jsx
   Small "Brands that trusted us" strip.
   → Replace the placeholder SVG logos with
     real <img> tags once you have the files.
     e.g.  <img src="/brands/logo.png" alt="Brand" className="h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity" />
───────────────────────────────────────────── */

import { useEffect, useRef, useState } from "react";

/* ── Brand data ─────────────────────────────
   Each entry has a `name` and an inline SVG
   `logo` as a placeholder.
   Swap logo with a real <img> whenever ready.
─────────────────────────────────────────── */
const brands = [
  {
    name: "Mathugama Bike House",
    logo: (
      <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="2" y="10" width="22" height="20" rx="4" fill="currentColor" opacity="0.85"/>
        <circle cx="13" cy="20" r="6" fill="none" stroke="white" strokeWidth="1.5"/>
        <text x="30" y="25" fontSize="11" fontWeight="700" fill="currentColor" fontFamily="sans-serif">BIKE HOUSE</text>
      </svg>
    ),
  },
  {
    name: "Hemsy by NM",
    logo: (
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M8 10 L8 30 M8 20 L20 20 M20 10 L20 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <text x="28" y="25" fontSize="12" fontWeight="800" fill="currentColor" fontFamily="sans-serif" letterSpacing="1">HEMSY</text>
      </svg>
    ),
  },
  {
    name: "Brand Three",
    logo: (
      <svg viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <polygon points="20,8 32,30 8,30" fill="currentColor" opacity="0.85"/>
        <text x="40" y="25" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="sans-serif">BRAND CO</text>
      </svg>
    ),
  },
  {
    name: "Brand Four",
    logo: (
      <svg viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="20" cy="20" r="12" fill="currentColor" opacity="0.85"/>
        <circle cx="20" cy="20" r="6" fill="white" opacity="0.9"/>
        <text x="38" y="25" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="sans-serif">NEXALAB</text>
      </svg>
    ),
  },
  {
    name: "Brand Five",
    logo: (
      <svg viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="6" y="12" width="26" height="16" rx="3" fill="currentColor" opacity="0.85"/>
        <rect x="10" y="16" width="18" height="8" rx="1.5" fill="white" opacity="0.8"/>
        <text x="38" y="25" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="sans-serif">SQUARELY</text>
      </svg>
    ),
  },
  {
    name: "Brand Six",
    logo: (
      <svg viewBox="0 0 110 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M8 20 Q14 8 20 20 Q26 32 32 20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <text x="40" y="25" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="sans-serif">WAVEMARK</text>
      </svg>
    ),
  },
];

export default function TrustedBy() {
  const scrollerRef = useRef(null);
  const animRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const allBrands = [...brands, ...brands]; // duplicate for seamless loop

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let last = performance.now();
    const speed = 28; // slow & gentle

    const tick = (now) => {
      const dt = now - last;
      last = now;
      if (!paused) {
        el.scrollLeft += (speed * dt) / 1000;
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [paused]);

  return (
    <section
      id="trusted-by"
      aria-label="Brands that trusted us"
      className="py-10 border-y bg-charcoal-50 border-charcoal-100 md:py-12"
    >
      <div className="w-full mx-auto max-w-7xl px-5 sm:px-6">
        {/* Label */}
        <p className="mb-6 text-center text-[11px] font-bold tracking-[0.22em] uppercase text-charcoal-400">
          Brands that trusted us
        </p>

        {/* Scrolling strip */}
        <div className="relative">
          {/* Edge fades */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none bg-gradient-to-r from-charcoal-50 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 z-10 pointer-events-none bg-gradient-to-l from-charcoal-50 to-transparent" />

          <div
            ref={scrollerRef}
            className="flex items-center gap-10 sm:gap-14 overflow-x-auto no-tb-scrollbar"
            style={{ scrollBehavior: "auto", cursor: "default" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setTimeout(() => setPaused(false), 1500)}
          >
            {allBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center text-charcoal-400 hover:text-orange-500 transition-colors duration-300"
                title={brand.name}
              >
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-tb-scrollbar::-webkit-scrollbar { display: none; }
        .no-tb-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
