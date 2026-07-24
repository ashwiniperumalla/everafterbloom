import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import corridor from "@/assets/floral-corridor.jpg";
import { weddingConfig } from "@/lib/wedding-config";

type Stage = "corridor" | "seal-broken" | "revealed";

export function OpeningExperience({ onEnter }: { onEnter: () => void }) {
  const [stage, setStage] = useState<Stage>("corridor");
  const [autoRevealed, setAutoRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (stage === "corridor") setAutoRevealed(true);
    }, 5000);
    return () => clearTimeout(t);
  }, [stage]);

  useEffect(() => {
    if (autoRevealed && stage === "corridor") {
      setStage("seal-broken");
      const t = setTimeout(() => setStage("revealed"), 1200);
      return () => clearTimeout(t);
    }
  }, [autoRevealed, stage]);

  const breakSeal = () => {
    if (stage === "corridor") {
      setStage("seal-broken");
      setTimeout(() => setStage("revealed"), 1400);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] overflow-hidden"
    >
      {/* Fade in from white */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 bg-[#FFFDF8] z-30 pointer-events-none"
      />

      {/* Corridor image */}
      <motion.img
        src={corridor}
        alt=""
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(250,247,242,0.35)] via-transparent to-[rgba(250,247,242,0.7)]" />

      {/* Particles */}
      <OpeningParticles />

      <div className="relative z-20 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <AnimatePresence mode="wait">
          {stage === "corridor" && (
            <motion.div
              key="quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ delay: 1.4, duration: 1.4, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="font-serif italic text-[color:var(--charcoal)] text-2xl md:text-4xl leading-snug">
                “Every love story is beautiful,
                <br />
                but ours is our favorite.”
              </p>

              <motion.button
                onClick={breakSeal}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 1, ease: "easeOut" }}
                className="group mt-14 inline-flex flex-col items-center gap-4"
                aria-label="Break the seal"
              >
                <span
                  className="relative grid h-28 w-28 place-items-center rounded-full text-[color:var(--cream)] shadow-[0_20px_60px_-20px_rgba(201,165,92,0.6)] transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background:
                      "radial-gradient(circle at 35% 30%, #E7C989, #C9A55C 55%, #8E6E38 100%)",
                    animation: "softPulse 3.4s ease-in-out infinite",
                  }}
                >
                  <span className="font-script text-4xl leading-none drop-shadow-sm">
                    {weddingConfig.groomName[0]}&amp;{weddingConfig.brideName[0]}
                  </span>
                  <span className="absolute inset-2 rounded-full border border-[rgba(255,253,248,0.35)]" />
                </span>
                <span className="text-eyebrow text-[color:var(--charcoal)]">
                  Break the Seal
                </span>
              </motion.button>
            </motion.div>
          )}

          {stage === "seal-broken" && (
            <motion.div
              key="crack"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >
              <BurstParticles />
              <span className="font-script text-6xl md:text-8xl text-[color:var(--gold)]">
                {weddingConfig.groomName[0]} &amp; {weddingConfig.brideName[0]}
              </span>
            </motion.div>
          )}

          {stage === "revealed" && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex flex-col items-center gap-8"
            >
              <span className="text-eyebrow">Together forever</span>
              <h1 className="font-script text-5xl md:text-7xl text-[color:var(--charcoal)] leading-[1]">
                {weddingConfig.groomName}
                <span className="mx-4 text-[color:var(--gold)]">&amp;</span>
                {weddingConfig.brideName}
              </h1>
              <motion.button
                onClick={onEnter}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="mt-4 rounded-full bg-[color:var(--champagne)] px-10 py-4 text-[0.72rem] uppercase tracking-[0.35em] text-[color:var(--cream)] shadow-[0_18px_40px_-18px_rgba(201,165,92,0.7)] transition-colors hover:bg-[color:var(--gold)]"
              >
                Begin the Journey
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function OpeningParticles() {
  return (
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 30 }).map((_, i) => {
        const size = 1.5 + Math.random() * 3.5;
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 18 + Math.random() * 18;
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
    <div className="pointer-events-none absolute inset-0">
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const distance = 60 + Math.random() * 120;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        return (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x, y, opacity: [0, 1, 0] }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
            style={{
              background:
                "radial-gradient(circle, #F1DBA6, #C9A55C 70%, transparent)",
            }}
          />
        );
      })}
    </div>
  );
}