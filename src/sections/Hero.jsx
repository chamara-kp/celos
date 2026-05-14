import { useEffect, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const stats = [
  { num: "30+", label: "Monthly creatives planned" },
  { num: "3+", label: "Years marketing experience" },
  { num: "24/7", label: "Fast WhatsApp support" },
];

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

  ctx.fillStyle = "#25D366";
  ctx.beginPath();
  ctx.moveTo(x - s * 0.25, y + s * 0.45);
  ctx.lineTo(x - s * 0.55, y + s * 0.68);
  ctx.lineTo(x - s * 0.05, y + s * 0.52);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#fff";
  ctx.lineWidth = s * 0.15;
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
  ctx.font = `900 ${Math.round(s * 0.88)}px Arial, sans-serif`;
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

const drawMeta = (ctx, x, y, s) => {
  ctx.fillStyle = "#0082FB";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();

  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = s * 0.2;
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
  );
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(
    s * 0.28,
    0,
    s * 0.19,
    s * 0.36,
    0.22,
    -Math.PI * 0.45,
    Math.PI * 1.45,
  );
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(-s * 0.09, -s * 0.28);
  ctx.bezierCurveTo(0, -s * 0.48, 0, -s * 0.48, s * 0.09, -s * 0.28);
  ctx.stroke();

  ctx.restore();
};

const drawGoogle = (ctx, x, y, s) => {
  ctx.fillStyle = "#fff";
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.fill();

  ctx.strokeStyle = "#e8e7e5";
  ctx.lineWidth = 1;
  roundRect(ctx, x - s, y - s, s * 2, s * 2, s * 0.42);
  ctx.stroke();

  const R = s * 0.52;
  const segs = [
    { start: -Math.PI * 0.08, end: Math.PI * 0.42, color: "#4285F4" },
    { start: Math.PI * 0.42, end: Math.PI * 0.92, color: "#34A853" },
    { start: Math.PI * 0.92, end: Math.PI * 1.42, color: "#FBBC05" },
    { start: Math.PI * 1.42, end: Math.PI * 1.92, color: "#EA4335" },
  ];

  ctx.lineWidth = s * 0.2;
  segs.forEach((seg) => {
    ctx.strokeStyle = seg.color;
    ctx.beginPath();
    ctx.arc(x, y, R, seg.start, seg.end);
    ctx.stroke();
  });

  ctx.strokeStyle = "#4285F4";
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x + s * 0.01, y);
  ctx.lineTo(x + R + s * 0.04, y);
  ctx.stroke();
};

const ICONS = [
  { orbit: 145, angle: 0, dir: 1, fn: drawInstagram },
  { orbit: 145, angle: (Math.PI * 2) / 3, dir: 1, fn: drawFacebook },
  { orbit: 145, angle: (Math.PI * 4) / 3, dir: 1, fn: drawTikTok },
  { orbit: 215, angle: Math.PI / 6, dir: -1, fn: drawWhatsApp },
  { orbit: 215, angle: (Math.PI * 3) / 4, dir: -1, fn: drawLinkedIn },
  { orbit: 215, angle: (Math.PI * 5) / 4, dir: -1, fn: drawYouTube },
  { orbit: 215, angle: (Math.PI * 11) / 6, dir: -1, fn: drawMeta },
  { orbit: 215, angle: (Math.PI * 7) / 4 + 0.6, dir: -1, fn: drawGoogle },
];

export default function Hero() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;
    let W = 0;
    let H = 0;
    let cx = 0;
    let cy = 0;

    const particles = Array.from({ length: 75 }, () => ({
      angle: Math.random() * Math.PI * 2,
      orbitR: Math.random() * 155 + 35,
      speed: (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      r: Math.random() * 1.8 + 0.5,
      color: Math.random() > 0.5 ? "#f97316" : "#78716c",
      alpha: Math.random() * 0.45 + 0.15,
      off: Math.random() * Math.PI * 2,
    }));

    const stars = Array.from({ length: 32 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.35 + 0.1,
      speed: Math.random() * 0.004 + 0.002,
    }));

    const pulses = [];
    const spawnPulse = () => pulses.push({ r: 45, alpha: 0.42, speed: 1.25 });
    spawnPulse();

    const pulseTimer = setInterval(spawnPulse, 1800);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cx = W / 2;
      cy = H / 2;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 28;
      mouseRef.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 28;
    };

    const handleMouseLeave = () => {
      mouseRef.current.tx = 0;
      mouseRef.current.ty = 0;
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const drawCenter = (mx, my) => {
      const x = cx + mx * 0.35;
      const y = cy + my * 0.35;
      const r = 58;

      const glow = ctx.createRadialGradient(x, y, 0, x, y, r * 3.2);
      glow.addColorStop(0, "rgba(249,115,22,0.34)");
      glow.addColorStop(0.42, "rgba(249,115,22,0.1)");
      glow.addColorStop(1, "transparent");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, r * 3.2, 0, Math.PI * 2);
      ctx.fill();

      const g = ctx.createLinearGradient(x - r, y - r, x + r, y + r);
      g.addColorStop(0, "#292524");
      g.addColorStop(0.55, "#1c1917");
      g.addColorStop(1, "#0c0a09");

      ctx.save();
      ctx.shadowColor = "rgba(249,115,22,0.42)";
      ctx.shadowBlur = 32;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(t * 0.32);
      ctx.strokeStyle = "rgba(249,115,22,0.38)";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 10]);
      ctx.beginPath();
      ctx.arc(0, 0, r + 11, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      ctx.fillStyle = "#fff";
      ctx.font = "900 21px Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("CELOS", x, y - 7);

      ctx.font = "700 9px Arial, sans-serif";
      ctx.fillStyle = "#fb923c";
      ctx.fillText("DIGITAL", x, y + 12);
    };

    const draw = () => {
      t += 0.012;

      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.06;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, W, H);

      const bg = ctx.createRadialGradient(
        cx,
        cy,
        30,
        cx,
        cy,
        Math.min(W, H) * 0.6,
      );
      bg.addColorStop(0, "rgba(249,115,22,0.12)");
      bg.addColorStop(0.45, "rgba(255,255,255,0.15)");
      bg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      stars.forEach((s) => {
        s.y += s.speed * 0.08;
        if (s.y > 1) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x * W + mx * 0.1, s.y * H + my * 0.1, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${s.alpha * (0.6 + 0.4 * Math.sin(t + s.x * 8))})`;
        ctx.fill();
      });

      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];

        ctx.beginPath();
        ctx.arc(cx + mx * 0.22, cy + my * 0.22, p.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(249,115,22,${p.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        p.r += p.speed;
        p.alpha -= 0.0028;

        if (p.alpha <= 0) pulses.splice(i, 1);
      }

      const rings = [
        { r: 82, dash: [4, 10], alpha: 0.18, speed: 0.4 },
        { r: 145, dash: [3, 15], alpha: 0.14, speed: -0.32 },
        { r: 215, dash: [8, 13], alpha: 0.11, speed: 0.22 },
        { r: 282, dash: [2, 24], alpha: 0.08, speed: -0.18 },
      ];

      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(cx + mx * 0.18, cy + my * 0.18);
        ctx.rotate(t * ring.speed);
        ctx.strokeStyle = `rgba(120,113,108,${ring.alpha})`;
        ctx.lineWidth = 1;
        ctx.setLineDash(ring.dash);
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      particles.forEach((p) => {
        p.angle += p.speed;

        const px =
          cx +
          mx * 0.25 +
          Math.cos(p.angle) * p.orbitR +
          Math.sin(p.angle * 0.8) * 17;

        const py =
          cy +
          my * 0.25 +
          Math.sin(p.angle) * p.orbitR * 0.47 +
          Math.cos(p.angle * 1.2) * 10;

        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.65 + 0.35 * Math.sin(t * 1.4 + p.off));
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      const positions = ICONS.map((item, idx) => {
        const ang = item.angle + t * 0.24 * item.dir;
        const vMult = item.orbit === 145 ? 0.5 : 0.46;

        return {
          ...item,
          idx,
          x: cx + mx * 0.42 + Math.cos(ang) * item.orbit,
          y: cy + my * 0.42 + Math.sin(ang) * item.orbit * vMult,
          ang,
        };
      });

      positions.forEach((p) => {
        ctx.beginPath();
        ctx.moveTo(cx + mx * 0.25, cy + my * 0.25);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(249,115,22,${p.orbit === 145 ? 0.08 : 0.045})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      positions.forEach((p) => {
        const scale = 0.84 + 0.08 * Math.sin(t * 1.5 + p.idx);
        const s = 25 * scale;

        ctx.save();
        ctx.shadowColor = "rgba(0,0,0,0.18)";
        ctx.shadowBlur = 16;
        ctx.shadowOffsetY = 7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, s * 1.18, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.96)";
        ctx.fill();
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, s * 1.28, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(249,115,22,0.16)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();

        p.fn(ctx, p.x, p.y, s * 0.73);
      });

      drawCenter(mx, my);

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(pulseTimer);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
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

        {/* Right — improved canvas animation */}
        <div className="relative items-center justify-center hidden h-screen lg:flex">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
      </div>
    </section>
  );
}
