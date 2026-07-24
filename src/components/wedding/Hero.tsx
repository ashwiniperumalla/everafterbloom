import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Sparkles, MapPin, Landmark } from "lucide-react";
import corridor from "@/assets/floral-corridor.jpg";
import { weddingConfig } from "@/lib/wedding-config";

export function Hero() {
  const [revealed, setRevealed] = useState(false);
  const [breaking, setBreaking] = useState(false);

  useEffect(() => {
    if (revealed || breaking) return;
    const t = setTimeout(() => triggerReveal(), 5000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revealed, breaking]);

  const triggerReveal = () => {
    if (revealed || breaking) return;
    setBreaking(true);
    setTimeout(() => setRevealed(true), 1200);
  };

  const info = [
    { icon: Calendar, label: "Wedding Date", value: weddingConfig.weddingDate },
    { icon: Clock, label: "Register Marriage", value: weddingConfig.marriageTime },
    { icon: Sparkles, label: "Reception", value: weddingConfig.receptionTime },
    { icon: MapPin, label: "Location", value: `${weddingConfig.city}, Telangana` },
    { icon: Landmark, label: "Venue", value: weddingConfig.venueName },
  ];

  return (
    <section id="home" className="relative">
      {/* Corridor stage */}
      <div className="relative isolate overflow-hidden">
        {/* Background image */}
        <motion.img
          src={corridor}
          alt=""
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Ivory gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,247,242,0.55) 0%, rgba(250,247,242,0.25) 30%, rgba(250,247,242,0.55) 70%, rgba(250,247,242,0.95) 100%)",
          }}
        />
        {/* Warm side wash */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 45%, transparent 40%, rgba(47,43,40,0.18) 100%)",
          }}
        />
        {/* Sun rays */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/2 h-[120%] w-[80%] -translate-x-1/2 mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 210deg at 50% 0%, transparent 0deg, rgba(255,236,190,0.35) 12deg, transparent 24deg, rgba(255,236,190,0.28) 40deg, transparent 60deg, rgba(255,236,190,0.32) 80deg, transparent 110deg)",
            filter: "blur(20px)",
            animation: "sunRayDrift 18s ease-in-out infinite",
          }}
        />
        <HeroParticles />

        {/* Hero content on top of image */}
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pt-36 pb-24 text-center md:px-10 md:pt-44 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-eyebrow text-[color:var(--charcoal)]/80"
          >
            An invitation to Ever After
          </motion.div>

          <AnimatePresence mode="wait">
            {!revealed ? (
              <motion.div
                key="pre"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1.1 }}
                className="mt-10 flex flex-col items-center"
              >
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 1.4, ease: "easeOut" }}
                  className="font-serif italic text-[color:var(--charcoal)] text-3xl md:text-5xl leading-[1.15] max-w-3xl"
                >
                  &ldquo;Every love story is beautiful,
                  <br className="hidden md:block" />
                  but ours is our favorite.&rdquo;
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 1 }}
                  className="divider-ornament mt-10"
                  aria-hidden
                />

                <WaxSeal breaking={breaking} onClick={triggerReveal} />

                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: breaking ? 0 : 0.9 }}
                  transition={{ delay: 3.2, duration: 1 }}
                  className="mt-6 text-eyebrow text-[color:var(--charcoal)]"
                >
                  Break the Seal
                </motion.span>
              </motion.div>
            ) : (
              <motion.div
                key="reveal"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col items-center"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-eyebrow text-[color:var(--charcoal)]"
                >
                  Together forever
                </motion.span>
                <h1 className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 font-serif tracking-[0.08em] text-[color:var(--charcoal)]">
                  <motion.span
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[3.2rem] md:text-[6.5rem] leading-[0.95] font-medium"
                    style={{ textShadow: "0 2px 24px rgba(250,247,242,0.6)" }}
                  >
                    {weddingConfig.groomName.toUpperCase()}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9, duration: 0.9 }}
                    className="font-script text-[color:var(--gold)] text-5xl md:text-7xl"
                  >
                    ♡
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[3.2rem] md:text-[6.5rem] leading-[0.95] font-medium"
                    style={{ textShadow: "0 2px 24px rgba(250,247,242,0.6)" }}
                  >
                    {weddingConfig.brideName.toUpperCase()}
                  </motion.span>
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="mt-8 font-serif italic text-[color:var(--warm-gray)] text-lg md:text-xl max-w-xl"
                >
                  A celebration of love, family, and forever &mdash; in {weddingConfig.city}.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.9 }}
                  className="mt-10 flex flex-wrap items-center justify-center gap-4"
                >
                  <PrimaryButton href="#celebration">Begin the Journey</PrimaryButton>
                  <SecondaryButton href="#story">Read Our Story</SecondaryButton>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: revealed ? 0.7 : 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-eyebrow text-[color:var(--charcoal)]/70"
          >
            Scroll to discover
          </motion.div>
        </div>
      </div>

      {/* Info card below the hero stage */}
      <div className="relative z-10 mx-auto -mt-20 max-w-3xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-[rgba(212,180,131,0.4)] bg-[rgba(255,253,248,0.85)] p-8 md:p-10 shadow-[0_50px_100px_-40px_rgba(47,43,40,0.35)]"
          style={{ backdropFilter: "blur(18px)" }}
        >
          <div className="text-center">
            <span className="text-eyebrow">Save the Date</span>
            <div className="divider-ornament mx-auto mt-4" aria-hidden />
          </div>
          <ul className="mt-6 divide-y divide-[rgba(212,180,131,0.25)]">
            {info.map(({ icon: Icon, label, value }) => (
              <li
                key={label}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[color:var(--champagne-soft)] text-[color:var(--charcoal)]">
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </span>
                <span className="text-eyebrow truncate">{label}</span>
                <span className="font-serif text-lg md:text-xl text-[color:var(--charcoal)] text-right truncate">
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function WaxSeal({ breaking, onClick }: { breaking: boolean; onClick: () => void }) {
  return (
    <div className="relative mt-10">
      {breaking && <BurstParticles />}
      <motion.button
        onClick={onClick}
        disabled={breaking}
        whileHover={{ scale: breaking ? 1 : 1.04 }}
        whileTap={{ scale: breaking ? 1 : 0.97 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        aria-label="Break the seal to reveal the couple"
        className="group relative grid h-32 w-32 md:h-40 md:w-40 place-items-center rounded-full text-[color:var(--cream)]"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #F3DFA8 0%, #E1BE74 30%, #C9A55C 55%, #8E6E38 90%)",
          boxShadow:
            "inset 0 -6px 14px rgba(90,60,20,0.55), inset 0 6px 12px rgba(255,240,200,0.55), 0 20px 45px -12px rgba(142,110,56,0.55), 0 4px 10px rgba(47,43,40,0.25)",
          animation: breaking ? "sealCrack 1.2s ease-out forwards" : "softPulse 3.6s ease-in-out infinite",
        }}
      >
        {/* subtle drip / edge irregularity */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 70% 75%, rgba(90,60,20,0.35), transparent 45%), radial-gradient(circle at 20% 80%, rgba(90,60,20,0.25), transparent 40%)",
            mixBlendMode: "multiply",
          }}
        />
        {/* grain */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.6  0 0 0 0 0.45  0 0 0 0 0.2  0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
        {/* inner ring */}
        <span className="absolute inset-3 rounded-full border border-[rgba(255,247,222,0.45)]" />
        {/* Monogram */}
        <span className="relative font-script text-4xl md:text-5xl leading-none drop-shadow-[0_2px_2px_rgba(70,45,15,0.55)]">
          {weddingConfig.groomName[0]}&amp;{weddingConfig.brideName[0]}
        </span>
        {/* highlight */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at 30% 22%, rgba(255,250,225,0.55), transparent 40%)",
          }}
        />
      </motion.button>
    </div>
  );
}

function HeroParticles() {
  const particles = Array.from({ length: 26 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {particles.map((_, i) => {
        const size = 1.5 + Math.random() * 3.5;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 22 + Math.random() * 18;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: `-8px`,
              width: `${size}px`,
              height: `${size}px`,
              background:
                "radial-gradient(circle at 30% 30%, #FFF2CC, #D4B483 60%, transparent 70%)",
              opacity: 0.7,
              animation: `floatParticle ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function BurstParticles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {Array.from({ length: 26 }).map((_, i) => {
        const angle = (i / 26) * Math.PI * 2;
        const distance = 70 + Math.random() * 140;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.6 }}
            animate={{ x, y, opacity: [0, 1, 0], scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #FFF2CC, #C9A55C 70%, transparent)",
              filter: "blur(0.4px)",
            }}
          />
        );
      })}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const Cmp: React.ElementType = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--champagne)] px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--cream)] shadow-[0_10px_28px_-14px_rgba(201,165,92,0.55)] transition-all duration-[350ms] ease-out hover:-translate-y-[3px] hover:bg-[color:var(--gold)] hover:shadow-[0_22px_44px_-18px_rgba(201,165,92,0.75),0_0_0_6px_rgba(201,165,92,0.12)]"
    >
      {children}
    </Cmp>
  );
}

export function SecondaryButton({
  href,
  children,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const Cmp: React.ElementType = href ? "a" : "button";
  return (
    <Cmp
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full border border-[rgba(212,180,131,0.55)] bg-[rgba(255,253,248,0.6)] px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--charcoal)] backdrop-blur-sm transition-all duration-[350ms] ease-out hover:-translate-y-[3px] hover:border-[color:var(--gold)] hover:bg-[rgba(255,253,248,0.9)] hover:shadow-[0_18px_38px_-18px_rgba(201,165,92,0.5),0_0_0_5px_rgba(201,165,92,0.1)]"
    >
      {children}
    </Cmp>
  );
}