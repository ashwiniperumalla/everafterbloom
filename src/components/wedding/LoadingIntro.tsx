import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { weddingConfig } from "@/lib/wedding-config";
import corridor from "@/assets/floral-corridor.jpg";

export function LoadingIntro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1700); // "An Invitation to Forever"
    const t2 = setTimeout(() => setPhase(2), 3300); // sentence + underline
    const t3 = setTimeout(() => setPhase(3), 5400); // corridor fades in
    const t4 = setTimeout(() => setVisible(false), 7200); // dissolve
    const t5 = setTimeout(() => onDone(), 8400); // unmount
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout);
  }, [onDone]);

  const initials = `${weddingConfig.groomName[0]}&${weddingConfig.brideName[0]}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden"
          style={{ backgroundColor: "#FAF7F2" }}
        >
          {/* Floral corridor soft fade-in */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: phase >= 3 ? 0.75 : 0, scale: phase >= 3 ? 1.03 : 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage: `url(${corridor})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
            }}
          />
          {/* Ivory wash + bloom */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 45% at 50% 50%, rgba(255,253,247,0.35) 0%, rgba(250,247,242,0.75) 55%, rgba(250,247,242,0.95) 100%)",
            }}
          />

          {/* Floating gold dust */}
          <IntroParticles />

          {/* Center content */}
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-bold tracking-[0.14em]"
              style={{
                color: "var(--gold)",
                fontSize: "clamp(3.5rem, 9vw, 6.5rem)",
                textShadow:
                  "0 0 24px rgba(201,165,92,0.35), 0 0 60px rgba(201,165,92,0.22), 0 1px 0 rgba(47,43,40,0.06)",
                lineHeight: 1,
              }}
            >
              {initials}
            </motion.div>

            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex items-center gap-2"
            >
              <span className="block h-px w-12 bg-gradient-to-r from-transparent to-[color:var(--gold)]" />
              <span className="block h-1 w-1 rotate-45 bg-[color:var(--gold)]" />
              <span className="block h-px w-12 bg-gradient-to-l from-transparent to-[color:var(--gold)]" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 10 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-eyebrow"
              style={{ letterSpacing: "0.45em" }}
            >
              An Invitation to Forever
            </motion.p>

            <div className="relative mt-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif italic text-[color:var(--charcoal)]"
                style={{ fontSize: "clamp(1.05rem, 2vw, 1.35rem)", opacity: 0.85 }}
              >
                Every beautiful journey begins with one moment.
              </motion.p>
              {/* Handwritten underline */}
              <motion.svg
                viewBox="0 0 300 12"
                className="mx-auto mt-2 block"
                width="240"
                height="10"
                fill="none"
              >
                <motion.path
                  d="M4 7 C 60 1, 130 12, 180 5 S 280 3, 296 7"
                  stroke="var(--gold)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: phase >= 2 ? 1 : 0,
                    opacity: phase >= 2 ? 0.9 : 0,
                  }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                />
              </motion.svg>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function IntroParticles() {
  const particles = Array.from({ length: 40 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {particles.map((_, i) => {
        const size = 1.5 + Math.random() * 3.5;
        const left = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 14 + Math.random() * 16;
        const opacity = 0.2 + Math.random() * 0.5;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              bottom: "-12px",
              width: `${size}px`,
              height: `${size}px`,
              background:
                "radial-gradient(circle at 30% 30%, #F3E2B8, #C9A55C 60%, transparent 70%)",
              filter: "blur(0.4px)",
              opacity,
              animation: `floatParticle ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}