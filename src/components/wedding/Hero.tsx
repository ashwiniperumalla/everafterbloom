import { motion } from "framer-motion";
import { Calendar, Clock, Sparkles, MapPin, Landmark } from "lucide-react";
import heroImg from "@/assets/hero-couple.jpg";
import { weddingConfig } from "@/lib/wedding-config";

export function Hero() {
  const info = [
    { icon: Calendar, label: "Wedding Date", value: weddingConfig.weddingDate },
    { icon: Clock, label: "Register Marriage", value: weddingConfig.marriageTime },
    { icon: Sparkles, label: "Reception", value: weddingConfig.receptionTime },
    {
      icon: MapPin,
      label: "Location",
      value: `${weddingConfig.city}, Telangana`,
    },
    { icon: Landmark, label: "Venue", value: weddingConfig.venueName },
  ];

  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-14 md:gap-20 lg:grid-cols-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(47,43,40,0.35)]">
              <img
                src={heroImg}
                alt="A portrait of the couple"
                width={1408}
                height={1760}
                className="h-[62vh] md:h-[78vh] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(47,43,40,0.25)] via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 hidden md:flex items-center gap-2 rounded-full bg-[color:var(--cream)] px-5 py-3 border border-[rgba(212,180,131,0.35)] shadow-sm">
              <span className="text-eyebrow">Ever After</span>
            </div>
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-eyebrow"
            >
              A wedding invitation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-script text-[3.6rem] md:text-[6rem] leading-[0.95] text-[color:var(--charcoal)]"
            >
              {weddingConfig.groomName}
              <span className="mx-3 md:mx-5 text-[color:var(--gold)] text-[2.6rem] md:text-[4rem] align-middle">
                ♡
              </span>
              {weddingConfig.brideName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-8 max-w-md mx-auto lg:mx-0 text-[color:var(--warm-gray)] text-lg leading-relaxed font-serif italic"
            >
              A celebration of love, family, and forever.
            </motion.p>

            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-10 rounded-3xl border border-[rgba(212,180,131,0.35)] bg-[rgba(255,253,248,0.75)] backdrop-blur-sm p-6 md:p-8 shadow-[0_30px_60px_-30px_rgba(47,43,40,0.15)]"
            >
              <ul className="divide-y divide-[rgba(212,180,131,0.25)]">
                {info.map(({ icon: Icon, label, value }) => (
                  <li
                    key={label}
                    className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-3.5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--champagne-soft)] text-[color:var(--charcoal)]">
                      <Icon className="h-4 w-4" strokeWidth={1.4} />
                    </span>
                    <span className="text-eyebrow truncate">{label}</span>
                    <span className="font-serif text-lg text-[color:var(--charcoal)] text-right truncate">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <PrimaryButton href="#celebration">View Celebration</PrimaryButton>
              <SecondaryButton href="#story">Read Our Story</SecondaryButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
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
      className="inline-flex items-center justify-center rounded-full bg-[color:var(--champagne)] px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--cream)] shadow-[0_18px_40px_-18px_rgba(201,165,92,0.7)] transition-all duration-500 hover:-translate-y-[3px] hover:bg-[color:var(--gold)]"
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
      className="inline-flex items-center justify-center rounded-full border border-[rgba(212,180,131,0.55)] bg-[rgba(255,253,248,0.6)] px-8 py-3.5 text-[0.72rem] uppercase tracking-[0.32em] text-[color:var(--charcoal)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-[3px] hover:border-[color:var(--gold)]"
    >
      {children}
    </Cmp>
  );
}