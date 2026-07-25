import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { weddingConfig } from "@/lib/wedding-config";

export function LetterReveal() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    // Soft page-turn sound (base64 subtle paper rustle) — only after user click
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio(
          "data:audio/wav;base64,UklGRhwAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
        );
        audioRef.current.volume = 0.35;
      }
      audioRef.current.play().catch(() => {});
    } catch {}
  };

  return (
    <section id="letter" className="relative py-28 md:py-40 overflow-hidden">
      {/* Corner botanicals */}
      <CornerBotanical className="absolute top-8 left-6 w-40 md:w-56 opacity-40 rotate-[-8deg]" />
      <CornerBotanical className="absolute top-8 right-6 w-40 md:w-56 opacity-40 scale-x-[-1] rotate-[8deg]" />
      <CornerBotanical className="absolute bottom-8 left-6 w-40 md:w-56 opacity-40 scale-y-[-1] rotate-[8deg]" />
      <CornerBotanical className="absolute bottom-8 right-6 w-40 md:w-56 opacity-40 scale-x-[-1] scale-y-[-1] rotate-[-8deg]" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <SectionHeading
          eyebrow="A Letter For You"
          title="A note, sealed with love"
          subtitle="Press the seal to open our letter."
        />

        <div className="relative mt-20 flex items-center justify-center min-h-[560px] md:min-h-[640px]">
          {/* Blur backdrop when opened */}
          <motion.div
            aria-hidden
            initial={false}
            animate={{ opacity: opened ? 1 : 0 }}
            transition={{ duration: 0.9 }}
            className="pointer-events-none absolute inset-0 backdrop-blur-[3px]"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(250,247,242,0.6), rgba(250,247,242,0.1) 70%, transparent)",
            }}
          />

          {/* Envelope */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: opened ? -20 : [0, -8, 0] }}
            transition={
              opened
                ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                : { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative w-[min(92vw,520px)] aspect-[3/2]"
            style={{ perspective: 1400 }}
          >
            {/* Envelope back / body */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                background:
                  "linear-gradient(160deg, #F6EEDF 0%, #EFE3CB 55%, #E7D5AE 100%)",
                boxShadow:
                  "0 40px 80px -30px rgba(120,90,40,0.35), inset 0 0 0 1px rgba(201,165,92,0.55), inset 0 0 60px rgba(201,165,92,0.12)",
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence baseFrequency='0.85' numOctaves='2' seed='7'/><feColorMatrix values='0 0 0 0 0.85  0 0 0 0 0.75  0 0 0 0 0.55  0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\"), linear-gradient(160deg, #F6EEDF 0%, #EFE3CB 55%, #E7D5AE 100%)",
                backgroundBlendMode: "multiply, normal",
              }}
            />
            {/* Inner gold border */}
            <div className="absolute inset-3 rounded-sm border border-[color:var(--gold)]/50" />

            {/* Letter — slides up from envelope */}
            <AnimatePresence>
              {opened && (
                <motion.div
                  key="letter"
                  initial={{ y: 0, opacity: 0, scaleY: 0.35 }}
                  animate={{ y: "-72%", opacity: 1, scaleY: 1 }}
                  transition={{
                    y: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
                    opacity: { duration: 0.6, delay: 0.4 },
                    scaleY: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 },
                  }}
                  style={{ transformOrigin: "bottom center" }}
                  className="absolute inset-x-6 bottom-6 z-10 origin-bottom"
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="relative rounded-sm p-8 md:p-12 text-center"
                    style={{
                      background:
                        "linear-gradient(180deg, #FFFDF8 0%, #FBF5EA 100%)",
                      boxShadow:
                        "0 30px 60px -20px rgba(80,60,30,0.35), inset 0 0 0 1px rgba(201,165,92,0.35)",
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='p'><feTurbulence baseFrequency='0.9' numOctaves='2' seed='3'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.82  0 0 0 0 0.65  0 0 0 0.12 0'/></filter><rect width='100%' height='100%' filter='url(%23p)'/></svg>\"), linear-gradient(180deg, #FFFDF8 0%, #FBF5EA 100%)",
                      backgroundBlendMode: "multiply, normal",
                    }}
                  >
                    <div className="mx-auto flex flex-col items-center gap-3">
                      <span className="divider-ornament" aria-hidden />
                      <p className="text-eyebrow">A Letter From Us</p>
                    </div>

                    <h3 className="mt-6 font-serif text-2xl md:text-3xl text-[color:var(--charcoal)]">
                      Dear Family &amp; Friends,
                    </h3>

                    <div className="mt-6 space-y-4 text-[color:var(--warm-gray)] font-light leading-[1.9] text-base md:text-lg max-w-xl mx-auto">
                      <p>
                        Thank you for being part of one of the most meaningful days of our lives.
                      </p>
                      <p>
                        Your love, blessings, laughter and presence make this celebration truly unforgettable.
                      </p>
                      <p>
                        As we begin this beautiful new chapter together, we carry your wishes in our hearts.
                      </p>
                    </div>

                    <div className="mt-8">
                      <p className="text-eyebrow">With Love,</p>
                      <p className="mt-3 font-script text-4xl md:text-5xl text-[color:var(--gold)]">
                        {weddingConfig.groomName} &amp; {weddingConfig.brideName}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Envelope flap (top triangle) */}
            <motion.div
              initial={false}
              animate={{ rotateX: opened ? -180 : 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 h-1/2 origin-top z-20"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #F0E2C4 0%, #E4D0A6 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  boxShadow: "inset 0 -1px 0 rgba(201,165,92,0.6)",
                  backfaceVisibility: "hidden",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(0deg, #F6EEDF 0%, #EFE3CB 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  transform: "rotateX(180deg)",
                  backfaceVisibility: "hidden",
                }}
              />
            </motion.div>

            {/* Wax Seal */}
            <button
              type="button"
              onClick={handleOpen}
              disabled={opened}
              aria-label="Open the letter"
              className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{ transform: "translate(-50%, -20%)" }}
            >
              <motion.span
                initial={false}
                animate={
                  opened
                    ? { scale: [1, 1.15, 0.9, 1.4], opacity: [1, 1, 0.7, 0], rotate: [0, -3, 2, 0] }
                    : { scale: [1, 1.04, 1] }
                }
                transition={
                  opened
                    ? { duration: 1, ease: "easeOut" }
                    : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
                }
                className="relative grid h-24 w-24 md:h-28 md:w-28 place-items-center rounded-full font-serif text-2xl md:text-3xl font-semibold text-[#5a2a1a] cursor-pointer"
                style={{
                  background:
                    "radial-gradient(circle at 32% 28%, #b8442f 0%, #8a2a1a 55%, #5a180d 100%)",
                  boxShadow:
                    "0 12px 24px -8px rgba(90,20,10,0.6), inset 0 2px 6px rgba(255,220,200,0.35), inset 0 -6px 12px rgba(0,0,0,0.35)",
                  textShadow: "0 1px 0 rgba(255,220,200,0.25), 0 -1px 1px rgba(0,0,0,0.4)",
                }}
              >
                <span className="tracking-wider">A&amp;S</span>
                {/* wax edge irregularity */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 75%, transparent 55%, rgba(0,0,0,0.25) 62%, transparent 68%)",
                    mixBlendMode: "multiply",
                  }}
                />
              </motion.span>
            </button>

            {/* Golden particles when opened */}
            {opened && (
              <div className="pointer-events-none absolute inset-0 z-40 overflow-visible">
                {Array.from({ length: 18 }).map((_, i) => (
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
                      delay: 0.6 + Math.random() * 1.2,
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
          </motion.div>

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
        </div>
      </div>
    </section>
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