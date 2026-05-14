import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "wayne0819",
    country: "United Kingdom",
    rating: 5,
    text: "Great work! Very professional service and clear communication.",
  },
  {
    name: "optimworld",
    country: "United States",
    rating: 5,
    text: "Great working with him. Smooth process and excellent final result.",
  },
  {
    name: "kzrprop",
    country: "Canada",
    rating: 5,
    text: "Great work. Delivered quality service exactly as described.",
  },
  {
    name: "milgrom",
    country: "Germany",
    rating: 5,
    text: "Very nice seller, keen to help. Good communication and nice work.",
  },
  {
    name: "colleensalmo225",
    country: "United States",
    rating: 4.7,
    text: "Great to work with. Does a fabulous job and communicates well.",
  },
  {
    name: "chino_chasin98",
    country: "Canada",
    rating: 5,
    text: "Delivered a great product with fast turnaround and an affordable price.",
  },
  {
    name: "sagibs10",
    country: "United Kingdom",
    rating: 5,
    text: "Great work. Very satisfied with the final delivery.",
  },
  {
    name: "anais91",
    country: "Germany",
    rating: 5,
    text: "Good job and helpful with revisions. The project improved nicely.",
  },
  {
    name: "fitnrsscoach",
    country: "United States",
    rating: 5,
    text: "The videos met my expectations and all revisions were completed promptly.",
  },
  {
    name: "amo2016",
    country: "Canada",
    rating: 5,
    text: "Good job, great work. Professional delivery and smooth experience.",
  },
  {
    name: "Mathugama Bike House",
    country: "Sri Lanka",
    rating: 5,
    text: "Excellent creative support for our bike business. The designs were attractive, professional, and helped us present our brand better online.",
  },
  {
    name: "Hemsy by NM",
    country: "Sri Lanka",
    rating: 5,
    text: "Very satisfied with the service. The content and designs matched our brand style and were delivered with good quality and care.",
  },
];

const avatarColors = [
  "bg-orange-400",
  "bg-indigo-500",
  "bg-emerald-400",
  "bg-pink-400",
  "bg-amber-400",
  "bg-violet-400",
];

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const scroller = useRef(null);
  const animationRef = useRef(null);
  const timeoutRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    let lastTime = performance.now();
    const speed = 28;

    const animate = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      if (!paused) {
        el.scrollLeft += (speed * deltaTime) / 1000;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [paused]);

  const handleScroll = (direction) => {
    const el = scroller.current;
    if (!el) return;

    setPaused(true);
    clearTimeout(timeoutRef.current);

    el.scrollBy({
      left: direction * Math.round(el.clientWidth * 0.85),
      behavior: "smooth",
    });

    timeoutRef.current = setTimeout(() => {
      setPaused(false);
    }, 2000);
  };

  return (
    <section
      id="feedback"
      className="relative px-5 py-20 overflow-hidden bg-charcoal-900 sm:px-6 lg:px-16"
    >
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.14),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] uppercase text-orange-400">
            Client Reviews
          </p>

          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white font-display sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-sm leading-relaxed text-charcoal-300 sm:text-base">
            Trusted by international clients and local Sri Lankan businesses.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => handleScroll(-1)}
            className="absolute z-20 items-center justify-center hidden w-12 h-12 transition -translate-y-1/2 bg-white rounded-full shadow-lg left-2 top-1/2 text-charcoal-900 hover:scale-110 md:flex"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scroller}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex gap-6 px-2 py-6 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <article
                key={`${review.name}-${index}`}
                className="min-w-[280px] sm:min-w-[340px] lg:min-w-[380px]"
              >
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/[0.09]">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-bold text-white ${
                        avatarColors[index % avatarColors.length]
                      }`}
                    >
                      {initials(review.name)}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {review.name}
                      </h3>

                      <p className="mt-1 text-xs text-charcoal-300">
                        {review.country}
                      </p>

                      <div className="flex gap-1 mt-2">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={14}
                            className="text-orange-400 fill-orange-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-charcoal-100">
                    “{review.text}”
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => handleScroll(1)}
            className="absolute z-20 items-center justify-center hidden w-12 h-12 transition -translate-y-1/2 bg-white rounded-full shadow-lg right-2 top-1/2 text-charcoal-900 hover:scale-110 md:flex"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-4 mt-5 md:hidden">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => handleScroll(-1)}
              className="flex items-center justify-center bg-white rounded-full shadow-md h-11 w-11 text-charcoal-900"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => handleScroll(1)}
              className="flex items-center justify-center bg-white rounded-full shadow-md h-11 w-11 text-charcoal-900"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
