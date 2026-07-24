import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(250,247,242,0.72)] border-b border-[rgba(212,180,131,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="font-script text-2xl text-[color:var(--gold)] leading-none">
            {weddingConfig.groomName[0]}&nbsp;&amp;&nbsp;{weddingConfig.brideName[0]}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-eyebrow hover:text-[color:var(--gold)] transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-[color:var(--charcoal)]"
        >
          <Menu className="h-5 w-5" strokeWidth={1.25} />
        </button>
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