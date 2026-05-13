import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { num: "30+", label: "Monthly creatives planned" },
  { num: "3+", label: "Years marketing experience" },
  { num: "24/7", label: "Fast WhatsApp support" },
];

// ── roundRect helper (path only, no fill/stroke) ─────────────────────────────
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ── Icon draw functions ───────────────────────────────────────────────────────
// Each receives (ctx, x, y, s) where s is half-size of the inner icon area.

const drawInstagram = (ctx, x, y, s) => {
  const g = ctx.createLinearGradient(x - s, y + s, x + s, y - s);
  g.addColorStop(0, "#f09433");
  g.addColorStop(0.25, "#e6683c");
  g.addColorStop(0.5, "#dc2743");
  g.addColorStop(0.75, "#cc2366");
  g.addColorStop(1, "#bc1888");
  ctx.fillStyle = g;
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = s * 0.14;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  roundRect(ctx, x - s * 0.52, y - s * 0.52, s * 1.04, s * 1.04, s * 0.28);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, s * 0.32, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(x + s * 0.37, y - s * 0.4, s * 0.1, 0, Math.PI * 2);
  ctx.fill();
};

const drawFacebook = (ctx, x, y, s) => {
  ctx.fillStyle = "#1877F2";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = `900 ${Math.round(s * 1.3)}px Georgia, serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("f", x + s * 0.08, y + s * 0.06);
};

const drawTikTok = (ctx, x, y, s) => {
  ctx.fillStyle = "#010101";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();
  const nr = s * 0.22;
  const tx = x - s * 0.1;
  const ty = y;
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = s * 0.15;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(tx + nr * 0.7, ty - s * 0.55);
  ctx.lineTo(tx + nr * 0.7, ty + nr * 0.4);
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(tx, ty + nr * 0.5, nr, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#69C9D0";
  ctx.lineWidth = s * 0.13;
  ctx.beginPath();
  ctx.arc(
    tx + nr * 0.7 + s * 0.18,
    ty - s * 0.55,
    s * 0.22,
    -Math.PI * 0.55,
    Math.PI * 0.55,
  );
  ctx.stroke();
  ctx.strokeStyle = "#EE1D52";
  ctx.lineWidth = s * 0.08;
  ctx.beginPath();
  ctx.arc(
    tx + nr * 0.7 + s * 0.22,
    ty - s * 0.55,
    s * 0.24,
    -Math.PI * 0.5,
    Math.PI * 0.6,
  );
  ctx.stroke();
};

const drawWhatsApp = (ctx, x, y, s) => {
  ctx.fillStyle = "#25D366";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = s * 0.14;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.arc(x, y, s * 0.52, 0, Math.PI * 2);
  ctx.stroke();
  // speech bubble tail
  ctx.fillStyle = "#25D366";
  ctx.beginPath();
  ctx.moveTo(x - s * 0.25, y + s * 0.45);
  ctx.lineTo(x - s * 0.55, y + s * 0.68);
  ctx.lineTo(x - s * 0.05, y + s * 0.52);
  ctx.closePath();
  ctx.fill();
  // phone icon inside
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = s * 0.15;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x - s * 0.28, y - s * 0.14);
  ctx.bezierCurveTo(
    x - s * 0.28,
    y - s * 0.36,
    x - s * 0.06,
    y - s * 0.42,
    x + s * 0.06,
    y - s * 0.28,
  );
  ctx.bezierCurveTo(
    x + s * 0.18,
    y - s * 0.14,
    x + s * 0.14,
    y + s * 0.06,
    x + s * 0.28,
    y + s * 0.16,
  );
  ctx.stroke();
};

const drawLinkedIn = (ctx, x, y, s) => {
  ctx.fillStyle = "#0A66C2";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.font = `900 ${Math.round(s * 0.88)}px 'DM Sans', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("in", x, y + s * 0.05);
};

const drawYouTube = (ctx, x, y, s) => {
  ctx.fillStyle = "#FF0000";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();
  ctx.fillStyle = "#fff";
  roundRect(ctx, x - s * 0.6, y - s * 0.38, s * 1.2, s * 0.76, s * 0.14);
  ctx.fill();
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(x - s * 0.2, y - s * 0.24);
  ctx.lineTo(x + s * 0.36, y);
  ctx.lineTo(x - s * 0.2, y + s * 0.24);
  ctx.closePath();
  ctx.fill();
};

// META – blue background, white M-lemniscate mark
const drawMeta = (ctx, x, y, s) => {
  // background
  ctx.fillStyle = "#0082FB";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();

  // Meta wordmark: two ellipses forming the ∞-loop shape
  ctx.save();
  ctx.translate(x, y);
  const lw = s * 0.2;

  // left lobe
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = lw;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.ellipse(
    -s * 0.28,
    0,
    s * 0.19,
    s * 0.36,
    -0.22,
    Math.PI * 0.55,
    Math.PI * 2.45,
    false,
  );
  ctx.stroke();

  // right lobe (wider + taller on top)
  ctx.beginPath();
  ctx.ellipse(
    s * 0.28,
    0,
    s * 0.19,
    s * 0.36,
    0.22,
    -Math.PI * 0.45,
    Math.PI * 1.45,
    false,
  );
  ctx.stroke();

  // connecting arch at top
  ctx.beginPath();
  ctx.moveTo(-s * 0.09, -s * 0.28);
  ctx.bezierCurveTo(0, -s * 0.48, 0, -s * 0.48, s * 0.09, -s * 0.28);
  ctx.stroke();

  ctx.restore();
};

// GOOGLE – white background, multicolour G ring + crossbar
const drawGoogle = (ctx, x, y, s) => {
  // white card
  ctx.fillStyle = "#fff";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();
  ctx.strokeStyle = "#e8e7e5";
  ctx.lineWidth = 0.8;
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.stroke();

  const R = s * 0.52;
  const segs = [
    { start: -Math.PI * 0.08, end: Math.PI * 0.42, color: "#4285F4" }, // blue
    { start: Math.PI * 0.42, end: Math.PI * 0.92, color: "#34A853" }, // green
    { start: Math.PI * 0.92, end: Math.PI * 1.42, color: "#FBBC05" }, // yellow
    { start: Math.PI * 1.42, end: Math.PI * 1.92, color: "#EA4335" }, // red
  ];
  ctx.lineWidth = s * 0.2;
  ctx.lineCap = "butt";
  segs.forEach((seg) => {
    ctx.strokeStyle = seg.color;
    ctx.beginPath();
    ctx.arc(x, y, R, seg.start, seg.end);
    ctx.stroke();
  });
  // crossbar
  ctx.strokeStyle = "#4285F4";
  ctx.lineWidth = s * 0.2;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x + s * 0.01, y);
  ctx.lineTo(x + R + s * 0.04, y);
  ctx.stroke();
};

// ── Icon list: inner ring (orbit 145) + outer ring (orbit 210) ───────────────
const ICONS = [
  { orbit: 145, angle: 0, dir: 1, fn: drawInstagram },
  { orbit: 145, angle: (Math.PI * 2) / 3, dir: 1, fn: drawFacebook },
  { orbit: 145, angle: (Math.PI * 4) / 3, dir: 1, fn: drawTikTok },
  { orbit: 210, angle: (Math.PI * 1) / 6, dir: -1, fn: drawWhatsApp },
  { orbit: 210, angle: (Math.PI * 3) / 4, dir: -1, fn: drawLinkedIn },
  { orbit: 210, angle: (Math.PI * 5) / 4, dir: -1, fn: drawYouTube },
  { orbit: 210, angle: (Math.PI * 11) / 6, dir: -1, fn: drawMeta },
  { orbit: 210, angle: (Math.PI * 7) / 4 + 0.6, dir: -1, fn: drawGoogle },
];

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    // particles
    const particles = Array.from({ length: 52 }, () => ({
      angle: Math.random() * Math.PI * 2,
      orbitR: Math.random() * 110 + 28,
      speed: (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      r: Math.random() * 2.0 + 0.5,
      color: Math.random() > 0.55 ? "#f97316" : "#d6d3d1",
      alpha: Math.random() * 0.55 + 0.22,
      tOff: Math.random() * Math.PI * 2,
    }));

    // pulse rings
    const pulses = [];
    const spawnPulse = () => pulses.push({ r: 38, alpha: 0.4, speed: 1.1 });
    spawnPulse();
    const pulseTimer = setInterval(spawnPulse, 2000);

    // orbit ring definitions
    const rings = [
      { r: 78, dash: [5, 9], alpha: 0.13, rotSpeed: 0.00035 },
      { r: 145, dash: [3, 14], alpha: 0.1, rotSpeed: -0.00025 },
      { r: 210, dash: [8, 12], alpha: 0.08, rotSpeed: 0.00018 },
      { r: 272, dash: [2, 22], alpha: 0.05, rotSpeed: -0.00015 },
    ];

    let W, H, cx, cy;
    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * devicePixelRatio;
      canvas.height = H * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      cx = W / 2;
      cy = H / 2;
    };
    resize();
    window.addEventListener("resize", resize);

    const drawCenter = () => {
      const r = 52;
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 2.4);
      glow.addColorStop(0, "rgba(249,115,22,0.22)");
      glow.addColorStop(0.5, "rgba(249,115,22,0.06)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 2.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = "#1a1815";
      ctx.shadowColor = "rgba(249,115,22,0.38)";
      ctx.shadowBlur = 26;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.28);
      ctx.beginPath();
      ctx.arc(0, 0, r + 7, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(249,115,22,0.30)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 9]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      ctx.fillStyle = "#fff";
      ctx.font = "800 20px 'Syne', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("CELOS", cx, cy - 6);
      ctx.font = "500 9px 'DM Sans', sans-serif";
      ctx.fillStyle = "#fb923c";
      ctx.fillText("DIGITAL", cx, cy + 11);
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      // pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        ctx.beginPath();
        ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(249,115,22,${p.alpha.toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        p.r += p.speed;
        p.alpha -= 0.0025;
        if (p.alpha <= 0) pulses.splice(i, 1);
      }

      // orbit rings
      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * ring.rotSpeed * 80);
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(120,113,108,${ring.alpha})`;
        ctx.lineWidth = 0.8;
        ctx.setLineDash(ring.dash);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const px =
          cx + Math.cos(p.angle) * p.orbitR + Math.sin(p.angle * 0.8) * 14;
        const py =
          cy +
          Math.sin(p.angle) * p.orbitR * 0.46 +
          Math.cos(p.angle * 1.2) * 9;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.65 + 0.35 * Math.sin(t * 1.1 + p.tOff));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // icon bubbles
      ICONS.forEach((item, idx) => {
        const ang = item.angle + t * 0.22 * item.dir;
        const vMult = item.orbit === 145 ? 0.5 : 0.46;
        const ix = cx + Math.cos(ang) * item.orbit;
        const iy = cy + Math.sin(ang) * item.orbit * vMult;
        const scale = 0.76 + 0.07 * Math.sin(t * 1.3 + idx);
        const s = 22 * scale;

        // drop shadow bubble
        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.12)";
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 3;
        ctx.beginPath();
        ctx.arc(ix, iy, s * 1.06, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.restore();

        // icon
        item.fn(ctx, ix, iy, s * 0.72);
      });

      drawCenter();
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(pulseTimer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center min-h-screen px-5 overflow-hidden pt-14 pb-14 sm:px-6 md:px-12 lg:px-16 bg-gradient-to-br from-white via-orange-50/50 to-stone-100"
    >
      <div className="absolute -top-30 -right-40 w-[520px] h-[520px] rounded-full bg-orange-300/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-stone-400/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid items-center w-full gap-12 mx-auto max-w-7xl lg:grid-cols-2">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-wide text-orange-700 uppercase bg-white border border-orange-200 rounded-full shadow-sm">
            <Sparkles size={14} />
            Next-Level Digital Marketing Solutions
          </div>

          <h1 className="mb-6 font-extrabold leading-[1.02] tracking-tight text-charcoal-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Build a brand
            <br />
            people remember.
          </h1>

          <p className="max-w-xl text-base leading-relaxed mb-7 text-charcoal-800 sm:text-sm md:text-l">
            We help businesses grow with powerful content, paid ads, brand
            design, and conversion-focused websites — all planned with strategy,
            not guesswork.
          </p>

          <div className="flex flex-col gap-3 mb-8 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 py-4 font-bold text-white transition-all duration-300 shadow-xl px-7 group bg-charcoal-900 hover:bg-orange-500 rounded-2xl hover:-translate-y-1"
            >
              Start your project
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 py-4 font-bold transition-all duration-300 bg-white border shadow-sm px-7 hover:bg-orange-100 text-charcoal-800 border-charcoal-200 rounded-2xl hover:-translate-y-1"
            >
              Explore services
            </a>
          </div>

          <div className="grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="p-4 bg-white border border-white shadow-sm rounded-2xl"
              >
                <div className="text-2xl font-extrabold md:text-3xl text-charcoal-900">
                  {s.num}
                </div>
                <div className="mt-1 text-sm leading-snug text-charcoal-500">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — canvas */}
        <div className="relative items-center justify-center hidden h-screen lg:flex">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    </section>
  );
}
