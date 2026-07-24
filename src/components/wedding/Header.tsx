import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music, VolumeX } from "lucide-react";
import { weddingConfig } from "@/lib/wedding-config";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Celebration", href: "#celebration" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blessings", href: "#blessings" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let audio: HTMLAudioElement | null = null;
    if (musicOn) {
      audio = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1a2b8f2f1d.mp3?filename=romantic-piano-ambient-110624.mp3"
      );
      audio.loop = true;
      audio.volume = 0.35;
      audio.play().catch(() => {});
    }
    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, [musicOn]);

  const Monogram = (
    <a href="#home" className="flex flex-col items-start gap-1.5 leading-none">
      <span
        className="font-serif font-bold tracking-[0.08em] text-[color:var(--gold)] leading-none"
        style={{
          fontSize: "clamp(1.85rem, 2.6vw, 2.4rem)",
          textShadow: "0 1px 0 rgba(201,165,92,0.15)",
        }}
      >
        {weddingConfig.groomName[0]}&amp;{weddingConfig.brideName[0]}
      </span>
      <span className="flex items-center gap-1.5 opacity-90">
        <span className="block h-px w-5 bg-gradient-to-r from-transparent to-[color:var(--gold)]" />
        <span className="block h-1 w-1 rotate-45 bg-[color:var(--gold)]" />
        <span className="block h-px w-5 bg-gradient-to-l from-transparent to-[color:var(--gold)]" />
      </span>
    </a>
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-2xl bg-[rgba(250,247,242,0.72)] border-b border-[rgba(212,180,131,0.32)] shadow-[0_8px_32px_-16px_rgba(47,43,40,0.22)]"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 md:px-10 transition-[padding] duration-500 ease-out ${
          scrolled ? "py-2 md:py-2.5" : "py-4 md:py-5"
        }`}
      >
        <div className="flex items-center">{Monogram}</div>

        <nav className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
          {NAV.map((n) => {
            const isActive = active === n.href;
            return (
              <a
                key={n.href}
                href={n.href}
                className="group relative text-eyebrow transition-colors duration-300 hover:text-[color:var(--gold)]"
                style={isActive ? { color: "var(--gold)" } : undefined}
              >
                {n.label}
                <span
                  className={`pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-2 flex items-center gap-1 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span
                    className={`block h-px bg-[color:var(--gold)] transition-all duration-500 ${
                      isActive ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                  <span className="block h-[3px] w-[3px] rotate-45 bg-[color:var(--gold)]" />
                  <span
                    className={`block h-px bg-[color:var(--gold)] transition-all duration-500 ${
                      isActive ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            aria-label={musicOn ? "Pause music" : "Play music"}
            onClick={() => setMusicOn((v) => !v)}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,165,92,0.4)] bg-[rgba(255,253,248,0.55)] backdrop-blur-md transition-all duration-300 hover:border-[color:var(--gold)] hover:bg-[rgba(255,253,248,0.9)] hover:shadow-[0_0_0_4px_rgba(201,165,92,0.12)]"
          >
            {musicOn ? (
              <Music className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={1.5} />
            ) : (
              <VolumeX className="h-4 w-4 text-[color:var(--warm-gray)] group-hover:text-[color:var(--gold)] transition-colors" strokeWidth={1.5} />
            )}
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="md:hidden text-[color:var(--charcoal)]"
          >
            <Menu className="h-5 w-5" strokeWidth={1.25} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[rgba(250,247,242,0.98)] backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-script text-2xl text-[color:var(--gold)]">
                {weddingConfig.groomName[0]} &amp; {weddingConfig.brideName[0]}
              </span>
              <button aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </div>
            <nav className="mt-16 flex flex-col items-center gap-8">
              {NAV.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="font-serif text-3xl text-[color:var(--charcoal)]"
                >
                  {n.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}