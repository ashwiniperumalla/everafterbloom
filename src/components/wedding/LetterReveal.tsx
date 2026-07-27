import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { weddingConfig } from "@/lib/wedding-config";

const paperGrain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='p'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0.86  0 0 0 0 0.76  0 0 0 0 0.58  0 0 0 0.13 0'/></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\")";

const envelopeGrain =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' seed='7'/><feColorMatrix values='0 0 0 0 0.82  0 0 0 0 0.71  0 0 0 0 0.5  0 0 0 0.2 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

export function LetterReveal() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(
          "data:audio/wav;base64,UklGRhwAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
        );
        audioRef.current.volume = 0.35;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {}
  };

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    playSound();
  };

  const handleClose = () => {
    if (!opened) return;
    setOpened(false);
    playSound();
  };

  return (
    <section id="letter" className="relative py-28 md:py-40 overflow-hidden">
      <CornerBotanical className="absolute top-8 left-6 w-40 md:w-56 opacity-40 rotate-[-8deg]" />
      <CornerBotanical className="absolute top-8 right-6 w-40 md:w-56 opacity-40 scale-x-[-1] rotate-[8deg]" />
      <CornerBotanical className="absolute bottom-8 left-6 w-40 md:w-56 opacity-40 scale-y-[-1] rotate-[8deg]" />
      <CornerBotanical className="absolute bottom-8 right-6 w-40 md:w-56 opacity-40 scale-x-[-1] scale-y-[-1] rotate-[-8deg]" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          eyebrow="A Letter For You"
          title="A note, sealed with love"
          subtitle="Press the seal to open our letter."
        />

        <div
          className="relative mt-20 flex items-center justify-center min-h-[560px] md:min-h-[680px]"
          style={{ perspective: 1800 }}
        >
          <motion.div
            aria-hidden
            initial={false}
            animate={{ opacity: opened ? 1 : 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -inset-x-20 -inset-y-16"
            style={{
              backdropFilter: "blur(6px)",
              background:
                "radial-gradient(65% 55% at 50% 50%, rgba(47,43,40,0.16), rgba(47,43,40,0.26) 70%, rgba(47,43,40,0.34))",
            }}
          />

          <div
            className="relative w-[min(94vw,640px)] aspect-[3/2]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Envelope body — fixed, always visible */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                backgroundImage: `${envelopeGrain}, linear-gradient(160deg, #F6EEDF 0%, #EFE3CB 55%, #E7D5AE 100%)`,
                backgroundBlendMode: "multiply, normal",
                boxShadow:
                  "0 50px 90px -32px rgba(90,60,20,0.42), 0 18px 30px -18px rgba(90,60,20,0.28), inset 0 0 0 1px rgba(201,165,92,0.7), inset 0 0 70px rgba(201,165,92,0.14)",
              }}
            />
            <div className="pointer-events-none absolute inset-[6px] rounded-sm border border-[color:var(--gold)]/60" />
            <div className="pointer-events-none absolute inset-[10px] rounded-sm border border-[color:var(--gold)]/25" />

            {/* Envelope front pocket lip (below card) */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-md z-30"
              style={{
                backgroundImage: `${envelopeGrain}, linear-gradient(180deg, #EFE0BE 0%, #E4D0A6 100%)`,
                backgroundBlendMode: "multiply, normal",
                clipPath: "polygon(0 40%, 100% 40%, 100% 100%, 0 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(201,165,92,0.6), 0 -6px 12px -8px rgba(80,55,20,0.25)",
              }}
            />

            {/* Invitation card — slides forward on Z-axis, stays within envelope frame */}
            <AnimatePresence>
              {opened && (
                <motion.div
                  key="invitation"
                  initial={{ z: 0, y: 0, opacity: 0, scale: 0.96 }}
                  animate={{ z: 90, y: -18, opacity: 1, scale: 1.04 }}
                  exit={{ z: 0, y: 0, opacity: 0, scale: 0.96 }}
                  transition={{ delay: 0.9, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-[6%] top-[10%] bottom-[10%] z-20"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="relative w-full h-full rounded-xl overflow-hidden"
                    style={{
                      backgroundImage: `${paperGrain}, linear-gradient(180deg, #FFFDF6 0%, #FBF4E5 100%)`,
                      backgroundBlendMode: "multiply, normal",
                      boxShadow:
                        "0 55px 90px -30px rgba(60,40,15,0.55), 0 20px 40px -20px rgba(60,40,15,0.35), inset 0 0 0 1px rgba(201,165,92,0.55)",
                    }}
                  >
                    <div className="pointer-events-none absolute inset-3 rounded-lg border border-[color:var(--gold)]/40" />
                    <div className="pointer-events-none absolute inset-4 rounded-md border border-[color:var(--gold)]/15" />

                    {/* Embossed watermark */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 grid place-items-center select-none"
                    >
                      <span
                        className="font-serif font-semibold tracking-[0.18em]"
                        style={{
                          fontSize: "clamp(7rem, 18vw, 13rem)",
                          color: "transparent",
                          background:
                            "linear-gradient(180deg, rgba(201,165,92,0.13), rgba(201,165,92,0.04))",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          textShadow:
                            "0 1px 0 rgba(255,253,246,0.9), 0 -1px 0 rgba(120,90,40,0.06)",
                        }}
                      >
                        A&amp;S
                      </span>
                    </div>

                    <div className="relative h-full flex flex-col items-center justify-center text-center px-6 md:px-14 py-6 md:py-10">
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 0.9 }}
                        className="font-serif text-xl md:text-2xl font-semibold tracking-[0.28em] text-[color:var(--gold)]"
                      >
                        A&amp;S
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0, duration: 0.9 }}
                        className="mt-2 md:mt-3 flex items-center justify-center"
                      >
                        <BotanicalDivider />
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2, duration: 0.9 }}
                        className="mt-3 md:mt-4 font-serif text-lg md:text-2xl text-[color:var(--charcoal)]"
                      >
                        Dear Family &amp; Friends,
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="mt-3 md:mt-5 space-y-2 md:space-y-3 text-[color:var(--warm-gray)] font-light leading-[1.8] text-[0.78rem] md:text-base max-w-2xl"
                      >
                        <p>
                          Thank you for celebrating one of the happiest moments of our lives.
                        </p>
                        <p>
                          Your love, blessings and presence mean more to us than words can express.
                        </p>
                        <p>
                          We are truly grateful to begin this beautiful journey surrounded by the people we cherish most.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3.0, duration: 1 }}
                        className="mt-4 md:mt-6"
                      >
                        <p className="text-eyebrow">With Love,</p>
                        <p className="mt-1 md:mt-2 font-script text-3xl md:text-5xl text-[color:var(--gold)]">
                          {weddingConfig.groomName} &amp; {weddingConfig.brideName}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Envelope flap */}
            <motion.div
              initial={false}
              animate={{ rotateX: opened ? -172 : 0 }}
              transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: opened ? 0.35 : 0.6 }}
              className="absolute inset-x-0 top-0 h-1/2 origin-top z-10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `${envelopeGrain}, linear-gradient(180deg, #F0E2C4 0%, #E4D0A6 100%)`,
                  backgroundBlendMode: "multiply, normal",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  boxShadow: "inset 0 -1px 0 rgba(201,165,92,0.7)",
                  backfaceVisibility: "hidden",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `${envelopeGrain}, linear-gradient(0deg, #F6EEDF 0%, #EFE3CB 100%)`,
                  backgroundBlendMode: "multiply, normal",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                }}
              />
            </motion.div>

            {/* Wax seal */}
            <button
              type="button"
              onClick={handleOpen}
              disabled={opened}
              aria-label="Open the letter"
              className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{ transform: "translate(-50%, -20%)" }}
            >
              <motion.span
                initial={false}
                animate={
                  opened
                    ? {
                        scale: [1, 0.95, 1.02, 1.06],
                        opacity: [1, 1, 0.9, 0],
                        rotate: [0, -1.2, 1, 0],
                        y: [0, 1, -1, -4],
                      }
                    : { scale: [1, 1.03, 1] }
                }
                transition={
                  opened
                    ? { duration: 1.2, ease: [0.22, 1, 0.36, 1], times: [0, 0.2, 0.55, 1] }
                    : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }
                className="relative grid h-24 w-24 md:h-28 md:w-28 place-items-center rounded-full font-serif text-2xl md:text-3xl font-semibold cursor-pointer overflow-hidden"
                style={{
                  background:
                    "radial-gradient(circle at 32% 28%, #c04a34 0%, #8a2a1a 55%, #4d140a 100%)",
                  boxShadow:
                    "0 14px 26px -8px rgba(90,20,10,0.6), inset 0 2px 6px rgba(255,220,200,0.4), inset 0 -8px 14px rgba(0,0,0,0.4)",
                }}
              >
                <span
                  className="relative tracking-wider z-10"
                  style={{
                    color: "#3a0d05",
                    textShadow:
                      "0 1px 0 rgba(255,220,200,0.55), 0 -1px 1px rgba(0,0,0,0.55), 0 0 10px rgba(0,0,0,0.25)",
                  }}
                >
                  A&amp;S
                </span>

                <motion.span
                  aria-hidden
                  className="absolute -inset-2"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 40%, rgba(255,235,210,0.35) 50%, transparent 60%)",
                    mixBlendMode: "screen",
                  }}
                  animate={{ x: ["-60%", "60%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Subtle crack that appears on open */}
                <motion.span
                  aria-hidden
                  initial={{ opacity: 0 }}
                  animate={{ opacity: opened ? [0, 0.9, 0.9, 0] : 0 }}
                  transition={{ duration: 1.2, times: [0, 0.25, 0.6, 1] }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                    <path
                      d="M50 8 L48 28 L54 40 L46 55 L52 72 L48 92"
                      stroke="rgba(30,6,2,0.55)"
                      strokeWidth="1.2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>

                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 75%, transparent 55%, rgba(0,0,0,0.28) 62%, transparent 68%)",
                    mixBlendMode: "multiply",
                  }}
                />
              </motion.span>
            </button>

            {opened && (
              <div className="pointer-events-none absolute inset-0 z-40 overflow-visible">
                {Array.from({ length: 16 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{
                      x: `${45 + Math.random() * 10}%`,
                      y: `${45 + Math.random() * 10}%`,
                      opacity: 0,
                      scale: 0.4,
                    }}
                    animate={{
                      x: `${Math.random() * 100}%`,
                      y: `${-20 + Math.random() * 60}%`,
                      opacity: [0, 0.9, 0],
                      scale: [0.4, 1, 0.6],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      delay: 0.8 + Math.random() * 1.4,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="absolute h-1.5 w-1.5 rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, #F2D48A 0%, rgba(201,165,92,0) 70%)",
                      boxShadow: "0 0 8px rgba(201,165,92,0.7)",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {!opened && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 text-eyebrow"
            >
              Click the seal to open
            </motion.p>
          )}

          <AnimatePresence>
            {opened && (
              <motion.button
                key="close-invitation"
                type="button"
                onClick={handleClose}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ delay: 2.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 px-6 py-2.5 rounded-full font-serif text-sm tracking-[0.22em] uppercase text-[color:var(--charcoal)] border border-[color:var(--gold)]/60 bg-[#FBF4E5]/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(201,165,92,0.7)] hover:border-[color:var(--gold)]"
              >
                Close Invitation
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function BotanicalDivider() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 140 16"
      className="h-4 w-32"
      fill="none"
      stroke="#C9A55C"
      strokeWidth="0.8"
      strokeLinecap="round"
    >
      <path d="M2 8 H55" />
      <path d="M138 8 H85" />
      <circle cx="70" cy="8" r="2.2" fill="#C9A55C" stroke="none" />
      <path d="M63 8 q3 -5 7 -5" />
      <path d="M77 8 q-3 5 -7 5" />
      <path d="M63 8 q3 5 7 5" opacity="0.6" />
      <path d="M77 8 q-3 -5 -7 -5" opacity="0.6" />
    </svg>
  );
}

function CornerBotanical({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="#C9A55C"
      strokeWidth="0.8"
      strokeLinecap="round"
    >
      <path d="M20 180 Q60 140 90 100 Q115 65 130 30" opacity="0.9" />
      <g opacity="0.8">
        <path d="M40 160 Q28 152 30 138" />
        <path d="M40 160 Q52 152 50 138" />
        <path d="M60 135 Q48 128 50 114" />
        <path d="M60 135 Q72 128 70 114" />
        <path d="M82 108 Q70 100 72 86" />
        <path d="M82 108 Q94 100 92 86" />
        <path d="M105 78 Q94 70 96 56" />
        <path d="M105 78 Q116 70 114 56" />
      </g>
      <g fill="#C9A55C" opacity="0.5">
        <circle cx="128" cy="34" r="2.2" />
        <circle cx="120" cy="46" r="1.6" />
        <circle cx="136" cy="46" r="1.6" />
      </g>
    </svg>
  );
}