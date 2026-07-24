import botanical from "@/assets/botanical-illustration.png";

export function BackgroundLayers() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 — warm ivory paper */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 800px at 20% 10%, #FFFDF7 0%, transparent 60%), radial-gradient(900px 700px at 90% 90%, #F1E9D9 0%, transparent 65%), #FAF7F2",
        }}
      />
      {/* Layer 2 — soft silk texture */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='420' height='420'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.83  0 0 0 0 0.75  0 0 0 0 0.6  0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* Layer 3 — subtle botanical illustrations */}
      <img
        src={botanical}
        alt=""
        className="absolute -left-24 top-24 w-[520px] opacity-[0.06] rotate-[-8deg]"
      />
      <img
        src={botanical}
        alt=""
        className="absolute -right-32 top-[70vh] w-[620px] opacity-[0.05] rotate-[18deg]"
      />
      <img
        src={botanical}
        alt=""
        className="absolute left-1/3 top-[160vh] w-[480px] opacity-[0.04] rotate-[6deg]"
      />
      {/* Layer 4 — floating gold particles */}
      <Particles />
      {/* Soft vignette to keep depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 50%, transparent 55%, rgba(47,43,40,0.06) 100%)",
        }}
      />
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 34 });
  return (
    <div className="absolute inset-0">
      {particles.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 22 + Math.random() * 22;
        const opacity = 0.25 + Math.random() * 0.45;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-10px`,
              width: `${size}px`,
              height: `${size}px`,
              background:
                "radial-gradient(circle at 30% 30%, #F3E2B8, #C9A55C 60%, transparent 70%)",
              filter: "blur(0.3px)",
              opacity,
              animation: `floatParticle ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}