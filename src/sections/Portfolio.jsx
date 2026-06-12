import { useEffect, useRef, useState, useCallback } from "react";
import { ExternalLink, Layers, Globe, Monitor } from "lucide-react";
import im2 from "../assests/im2.jpeg";
import im3 from "../assests/im3.jpg";
import im4 from "../assests/im4.jpeg";
import im5 from "../assests/im5.jpeg";
import im6 from "../assests/im6.jpg";
import im7 from "../assests/im10.jpeg";
import im8 from "../assests/im8.jpeg";
import im9 from "../assests/im9.jpeg";

const designCards = [
  {
    title: "Social Media Design",
    category: "fb & instagram Post",
    image: im2,
    accent: "#f97316",
    pattern: "circles",
  },
  {
    title: "Brand Identity",
    category: "fb & instagram Post",
    image: im9,
    accent: "#fb8c3b",
    pattern: "grid",
  },
  {
    title: "Facebook Ad Creative",
    category: "fb & instagram Post",
    image: im3,
    accent: "#ffc9a0",
    pattern: "waves",
  },
  {
    title: "Story Template",
    category: "fb & instagram Post",
    image: im4,
    accent: "#f97316",
    pattern: "dots",
  },
  {
    title: "Promotional Banner",
    category: "fb & instagram Post",
    image: im5,
    accent: "#ffe6d3",
    pattern: "lines",
  },
  {
    title: "Product Showcase",
    category: "fb & instagram Post",
    image: im6,
    accent: "#ffc9a0",
    pattern: "circles",
  },
  {
    title: "YouTube Thumbnail",
    category: "fb & instagram Post",
    image: im7,
    accent: "#fb8c3b",
    pattern: "grid",
  },
  {
    title: "LinkedIn Graphic",
    category: "fb & instagram Post",
    image: im8,
    accent: "#fff4ed",
    pattern: "waves",
  },
  {
    title: "LinkedIn Graphic",
    category: "fb & instagram Postt",
    image: im9,
    accent: "#fff4ed",
    pattern: "waves",
  },
];

/* ── SVG pattern generators (used as fallback when no image is set) ── */
function PatternCircles({ accent }) {
  return (
    <>
      <circle cx="160" cy="100" r="90" fill={accent} opacity="0.15" />
      <circle cx="160" cy="100" r="55" fill={accent} opacity="0.18" />
      <circle cx="260" cy="30" r="40" fill={accent} opacity="0.1" />
      <circle cx="40" cy="340" r="60" fill={accent} opacity="0.12" />
    </>
  );
}
function PatternGrid({ accent }) {
  return (
    <>
      {[0, 1, 2, 3, 4].map((col) =>
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={col * 64}
            y={row * 50}
            width="52"
            height="38"
            rx="6"
            fill={accent}
            opacity="0.07"
          />
        )),
      )}
    </>
  );
}
function PatternDots({ accent }) {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6].map((col) =>
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row) => (
          <circle
            key={`${col}-${row}`}
            cx={col * 50 + 10}
            cy={row * 50 + 10}
            r="4"
            fill={accent}
            opacity="0.2"
          />
        )),
      )}
    </>
  );
}
function PatternWaves({ accent }) {
  return (
    <path
      d="M0 60 Q80 20 160 60 T320 60 M0 120 Q80 80 160 120 T320 120 M0 180 Q80 140 160 180 T320 180 M0 240 Q80 200 160 240 T320 240 M0 300 Q80 260 160 300 T320 300 M0 360 Q80 320 160 360 T320 360"
      stroke={accent}
      strokeWidth="2"
      fill="none"
      opacity="0.2"
    />
  );
}
function PatternLines({ accent }) {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <line
          key={i}
          x1={i * 35}
          y1="0"
          x2={i * 35 + 160}
          y2="400"
          stroke={accent}
          strokeWidth="1.5"
          opacity="0.15"
        />
      ))}
    </>
  );
}

/* SVG placeholder used when card.image is null */
function DesignCardVisual({ card }) {
  const patternMap = {
    circles: <PatternCircles accent={card.accent} />,
    grid: <PatternGrid accent={card.accent} />,
    dots: <PatternDots accent={card.accent} />,
    waves: <PatternWaves accent={card.accent} />,
    lines: <PatternLines accent={card.accent} />,
  };

  return (
    <svg
      viewBox="0 0 320 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient
          id={`grad-${card.title.replace(/\s/g, "")}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={card.accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1a1815" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect
        width="320"
        height="400"
        fill={`url(#grad-${card.title.replace(/\s/g, "")})`}
      />
      {patternMap[card.pattern]}
      <text
        x="160"
        y="185"
        textAnchor="middle"
        fontSize="36"
        fontWeight="800"
        fill="white"
        opacity="0.18"
        fontFamily="sans-serif"
        letterSpacing="8"
      >
        CELOS
      </text>
      <rect
        x="20"
        y="20"
        width={card.category.length * 8 + 20}
        height="26"
        rx="13"
        fill="white"
        opacity="0.2"
      />
      <text
        x="30"
        y="37"
        fontSize="11"
        fill="white"
        fontFamily="sans-serif"
        fontWeight="600"
        opacity="0.9"
      >
        {card.category}
      </text>
      <rect x="0" y="320" width="320" height="80" fill="black" opacity="0.45" />
      <text
        x="20"
        y="350"
        fontSize="15"
        fontWeight="700"
        fill="white"
        fontFamily="sans-serif"
        opacity="0.95"
      >
        {card.title}
      </text>
      <text
        x="20"
        y="371"
        fontSize="11"
        fill={card.accent}
        fontFamily="sans-serif"
        opacity="0.85"
      >
        {card.category}
      </text>
    </svg>
  );
}

/* ── Card visual: real image OR SVG fallback ── */
function CardMedia({ card }) {
  const [imgError, setImgError] = useState(false);
  const showImage = card.image && !imgError;

  if (showImage) {
    return (
      <div className="relative w-full h-full">
        <img
          src={card.image}
          alt={card.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          onError={() => setImgError(true)}
          draggable={false}
        />
        {/* Bottom label overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3"
          style={{
            background: "linear-gradient(transparent, rgba(0,0,0,0.65))",
          }}
        >
          <p className="text-sm font-bold leading-tight text-white">
            {card.title}
          </p>
          <p className="text-xs mt-0.5" style={{ color: card.accent }}>
            {card.category}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
      <DesignCardVisual card={card} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   WEB PROJECTS DATA
   Add an `image` path to show a screenshot instead
   of the browser mockup placeholder.
   Example:  image: "/src/assets/projects/celos.png"
───────────────────────────────────────────── */
const webProjects = [
  {
    name: "Celos Agency Website",
    description:
      "Modern agency website designed for showcasing digital services and lead generation.",
    technologies: ["React", "Tailwind CSS", "Vercel"],
    icon: "🚀",
    accent: "#f97316",
    image: null, // ← e.g. "/src/assets/projects/celos-agency.png"
  },
  {
    name: "SME Marketing Planner",
    description:
      "Web-based decision support system helping SMEs generate digital marketing plans.",
    technologies: ["MERN Stack", "MongoDB", "Express"],
    icon: "📊",
    accent: "#fb8c3b",
    image: null,
  },
  {
    name: "Vehicle Sales Platform",
    description:
      "Responsive vehicle listing platform with modern UI and filtering features.",
    technologies: ["React", "Node.js", "MongoDB"],
    icon: "🚗",
    accent: "#ea6b0a",
    image: null,
  },
];

const techColors = {
  React: "bg-blue-50 text-blue-600 border-blue-100",
  "Tailwind CSS": "bg-teal-50 text-teal-600 border-teal-100",
  Vercel: "bg-charcoal-100 text-charcoal-700 border-charcoal-200",
  "MERN Stack": "bg-green-50 text-green-600 border-green-100",
  MongoDB: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Express: "bg-gray-50 text-gray-600 border-gray-200",
  "Node.js": "bg-lime-50 text-lime-700 border-lime-100",
};

/* ─────────────────────────────────────────────
   useDragScroll — enables click-and-drag on a
   scrollable container while also pausing the
   auto-scroll during the drag.
───────────────────────────────────────────── */
function useDragScroll(scrollerRef, setPaused) {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const onMouseDown = useCallback(
    (e) => {
      isDragging.current = true;
      startX.current = e.pageX - scrollerRef.current.offsetLeft;
      startScrollLeft.current = scrollerRef.current.scrollLeft;
      scrollerRef.current.style.cursor = "grabbing";
      setPaused(true);
    },
    [scrollerRef, setPaused],
  );

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollerRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5; // multiplier for feel
      scrollerRef.current.scrollLeft = startScrollLeft.current - walk;
    },
    [scrollerRef],
  );

  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (scrollerRef.current) scrollerRef.current.style.cursor = "grab";
    // Resume auto-scroll after a short pause so it doesn't snap immediately
    setTimeout(() => setPaused(false), 1200);
  }, [scrollerRef, setPaused]);

  const onMouseLeave = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      if (scrollerRef.current) scrollerRef.current.style.cursor = "grab";
      setTimeout(() => setPaused(false), 1200);
    }
  }, [scrollerRef, setPaused]);

  return { onMouseDown, onMouseMove, onMouseUp, onMouseLeave };
}

/* ─────────────────────────────────────────────
   MAIN PORTFOLIO COMPONENT
───────────────────────────────────────────── */
export default function Portfolio() {
  // ── Design carousel
  const scrollerRef = useRef(null);
  const animRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // ── Web projects carousel
  const webScrollerRef = useRef(null);
  const webAnimRef = useRef(null);
  const [webPaused, setWebPaused] = useState(false);

  /* Infinite auto-scroll — design cards (left) */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let last = performance.now();
    const speed = 38;
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

  /* Infinite auto-scroll — web projects (right-to-left) */
  useEffect(() => {
    const el = webScrollerRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 2;
    let last = performance.now();
    const speed = 32;
    const tick = (now) => {
      const dt = now - last;
      last = now;
      if (!webPaused) {
        el.scrollLeft -= (speed * dt) / 1000;
        if (el.scrollLeft <= 0) el.scrollLeft = el.scrollWidth / 2;
      }
      webAnimRef.current = requestAnimationFrame(tick);
    };
    webAnimRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(webAnimRef.current);
  }, [webPaused]);

  /* Touch helpers */
  const handleTouchStart = (setter) => () => setter(true);
  const handleTouchEnd = (setter) => () =>
    setTimeout(() => setter(false), 2000);

  /* Drag handlers */
  const designDrag = useDragScroll(scrollerRef, setPaused);
  const webDrag = useDragScroll(webScrollerRef, setWebPaused);

  const allCards = [...designCards, ...designCards];
  const allWebProjects = [
    ...webProjects,
    ...webProjects,
    ...webProjects,
    ...webProjects,
  ];

  return (
    <section
      id="portfolio"
      className="overflow-hidden bg-white section-soft"
      aria-label="Our Portfolio"
    >
      <div className="w-full mx-auto max-w-7xl">
        {/* ── Section header ── */}
        <div className="max-w-2xl mx-auto mb-10 text-center md:mb-14">
          <p className="justify-center section-tag">Our Work</p>
          <h2 className="section-title">Our Portfolio</h2>
          <p className="mt-4 section-lead text-charcoal-600">
            A curated look at the creative work, campaigns, and digital products
            we've crafted for brands and businesses.
          </p>
        </div>

        {/* ══════════════════════════════════
            PART 1 — Design Carousel
        ══════════════════════════════════ */}
        <div className="mb-16 md:mb-20">
          <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-extrabold font-display text-charcoal-900 md:text-2xl">
                Creative Designs &amp; Marketing Campaigns
              </h3>
              <p className="mt-1 text-sm text-charcoal-500 max-w-[520px]">
                Social media creatives, branding projects, advertisements, and
                visual content produced by the Celos team.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 whitespace-nowrap">
              <Layers size={13} /> Drag or hover to pause
            </span>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 z-10 w-12 pointer-events-none sm:w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 z-10 w-12 pointer-events-none sm:w-20 bg-gradient-to-l from-white to-transparent" />

            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto select-none sm:gap-5 no-scrollbar"
              style={{ scrollBehavior: "auto", cursor: "grab" }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={(e) => {
                setPaused(false);
                designDrag.onMouseLeave(e);
              }}
              onMouseDown={designDrag.onMouseDown}
              onMouseMove={designDrag.onMouseMove}
              onMouseUp={designDrag.onMouseUp}
              onTouchStart={handleTouchStart(setPaused)}
              onTouchEnd={handleTouchEnd(setPaused)}
            >
              {allCards.map((card, i) => (
                <article
                  key={`${card.title}-${i}`}
                  className="relative flex-shrink-0 overflow-hidden shadow-md group rounded-2xl"
                  style={{
                    width: "clamp(240px, 30vw, 320px)",
                    height: "clamp(300px, 40vw, 400px)",
                  }}
                >
                  <CardMedia card={card} />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 opacity-0 pointer-events-none bg-charcoal-900/70 group-hover:opacity-100 backdrop-blur-sm">
                    <span className="px-4 py-2 text-sm font-bold text-white bg-orange-500 rounded-xl">
                      {card.title}
                    </span>
                    <span className="text-xs text-charcoal-200">
                      {card.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════
            PART 2 — Web Projects Carousel
        ══════════════════════════════════ */}
        <div>
          <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-xl font-extrabold font-display text-charcoal-900 md:text-2xl">
                Website Development Projects
              </h3>
              <p className="mt-1 text-sm text-charcoal-500">
                Modern, responsive, and performance-focused websites developed
                by the Celos team.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 whitespace-nowrap">
              <Monitor size={13} /> Drag or hover to pause
            </span>
          </div>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-0 z-10 w-12 pointer-events-none sm:w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 z-10 w-12 pointer-events-none sm:w-20 bg-gradient-to-l from-white to-transparent" />

            <div
              ref={webScrollerRef}
              className="flex gap-5 overflow-x-auto select-none no-scrollbar"
              style={{ scrollBehavior: "auto", cursor: "grab" }}
              onMouseEnter={() => setWebPaused(true)}
              onMouseLeave={(e) => {
                setWebPaused(false);
                webDrag.onMouseLeave(e);
              }}
              onMouseDown={webDrag.onMouseDown}
              onMouseMove={webDrag.onMouseMove}
              onMouseUp={webDrag.onMouseUp}
              onTouchStart={handleTouchStart(setWebPaused)}
              onTouchEnd={handleTouchEnd(setWebPaused)}
            >
              {allWebProjects.map((project, i) => (
                <article
                  key={`${project.name}-${i}`}
                  className="flex-shrink-0 flex flex-col overflow-hidden transition-all duration-300 bg-white border border-charcoal-100 rounded-2xl shadow-sm hover:shadow-[0_20px_45px_rgba(26,24,21,0.13)] hover:-translate-y-2"
                  style={{ width: "clamp(280px, 32vw, 380px)" }}
                >
                  {/* Project top visual */}
                  <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-50 to-orange-50 h-44">
                    {project.image ? (
                      /* Real screenshot */
                      <img
                        src={project.image}
                        alt={project.name}
                        className="object-cover w-full h-full"
                        draggable={false}
                      />
                    ) : (
                      /* Browser mockup placeholder */
                      <>
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              "linear-gradient(#e8e7e5 1px, transparent 1px), linear-gradient(90deg, #e8e7e5 1px, transparent 1px)",
                            backgroundSize: "28px 28px",
                          }}
                        />
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            background: `radial-gradient(circle at 60% 40%, ${project.accent}, transparent 65%)`,
                          }}
                        />
                        <div className="relative z-10 w-[78%] max-w-[240px] bg-white rounded-xl shadow-xl overflow-hidden border border-charcoal-100">
                          <div className="flex items-center gap-1.5 px-3 py-2 bg-charcoal-50 border-b border-charcoal-100">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                            <div className="flex-1 mx-2 h-3.5 bg-charcoal-100 rounded-full" />
                          </div>
                          <div className="p-3 space-y-1.5">
                            <div
                              className="w-3/4 h-5 rounded-md"
                              style={{
                                backgroundColor: project.accent,
                                opacity: 0.85,
                              }}
                            />
                            <div className="w-full h-2 rounded-full bg-charcoal-100" />
                            <div className="w-5/6 h-2 rounded-full bg-charcoal-100" />
                            <div className="flex gap-1.5 mt-2">
                              <div className="flex-1 h-10 border rounded-lg bg-charcoal-50 border-charcoal-100" />
                              <div className="flex-1 h-10 border rounded-lg bg-charcoal-50 border-charcoal-100" />
                              <div className="flex-1 h-10 border rounded-lg bg-charcoal-50 border-charcoal-100" />
                            </div>
                          </div>
                        </div>
                        <span className="absolute text-2xl bottom-3 right-4 opacity-60">
                          {project.icon}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Card content */}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-base font-extrabold leading-snug font-display text-charcoal-900">
                        {project.name}
                      </h4>
                      <Globe
                        size={15}
                        className="mt-0.5 shrink-0 text-charcoal-400"
                      />
                    </div>

                    <p className="flex-1 mb-4 text-sm leading-relaxed text-charcoal-500">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                            techColors[tech] ??
                            "bg-orange-50 text-orange-600 border-orange-100"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white transition-colors bg-charcoal-900 rounded-xl hover:bg-orange-500 group/btn"
                    >
                      Request Similar Project
                      <ExternalLink
                        size={13}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
