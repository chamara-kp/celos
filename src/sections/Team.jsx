import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const team = [
  {
    name: "Pathum Chamara",
    role: " Founder / Digital Strategist",
    image: "/team/pathum.svg",
  },
  {
    name: "Shehan Viduranaga",
    role: "Graphic Designer",
    image: "/team/shehan.svg",
  },
  {
    name: "Nadeera Shashika",
    role: " Graphic Designer",
    image: "/team/nadeera.svg",
  },
  {
    name: "Yushan Aththanayaka",
    role: " Project Manager & Video Editor",
    image: "/team/yushan.svg",
  },
  {
    name: "Abisheka gunawardhana",
    role: " Mobile & Web Developer",
    image: "/team/member5.svg",
  },
  {
    name: "Dilshan Kavinda",
    role: " Mobile & Web Developer",
    image: "/team/dilshan.svg",
  },
];

export default function Team() {
  const scroller = useRef(null);

  function scrollBy(direction = 1) {
    const el = scroller.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section id="team" className="bg-white section-soft">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="justify-center section-tag">Our team</p>
          <h2 className="section-title">
            We create impactful digital products through creativity, teamwork,
            and technology.{" "}
          </h2>
          <p className="mt-5 leading-relaxed text-charcoal-500">
            Turning ideas into digital reality
          </p>
        </div>

        <div className="relative">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="absolute left-0 z-20 items-center justify-center hidden -translate-y-1/2 bg-white rounded-full shadow-md md:flex w-14 h-14 top-1/2"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            ref={scroller}
            className="flex gap-6 px-4 py-6 overflow-x-auto snap-x snap-mandatory touch-pan-x scrollbar-hide"
          >
            {team.map(({ name, role, image }) => (
              <article
                key={name}
                className="min-w-[260px] max-w-xs snap-start bg-charcoal-50 border border-charcoal-100 rounded-3xl p-6 flex-shrink-0"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={image}
                    alt={name}
                    className="object-cover w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold font-display text-charcoal-900">
                      {name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-orange-600">
                      {role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-500"></p>
                Computer Science undergraduate focused on practical solutions
                and collaboration.
                <div className="flex items-center gap-2 mt-4 text-xs font-bold text-charcoal-600">
                  <BadgeCheck size={16} className="text-orange-500" />{" "}
                  Team-oriented
                </div>
              </article>
            ))}
          </div>

          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="absolute right-0 z-20 items-center justify-center hidden -translate-y-1/2 bg-white rounded-full shadow-md md:flex w-14 h-14 top-1/2"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex justify-between px-4 mt-4 md:hidden">
            <button
              aria-label="Prev"
              onClick={() => scrollBy(-1)}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              aria-label="Next"
              onClick={() => scrollBy(1)}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
