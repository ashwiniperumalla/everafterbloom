import { motion, type Variants } from "framer-motion";
import { Heart, Sparkles, Music2, MapPin, Mail, Phone, ScrollText, Flower2, Landmark } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PrimaryButton, SecondaryButton } from "./Hero";
import { weddingConfig } from "@/lib/wedding-config";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StorySection() {
  const chapters = [
    {
      year: "The Beginning",
      title: "Two families, one destiny",
      body:
        "Introduced by families who had known each other for years, Anil and Susmitha met over quiet chai and long conversations — the kind that turn strangers into a whole future.",
    },
    {
      year: "The Promise",
      title: "A quiet yes",
      body:
        "Under warm evening lamps and the blessings of parents, they exchanged a soft promise — to walk together through every season with grace, patience, and love.",
    },
    {
      year: "Ever After",
      title: "A celebration to remember",
      body:
        "Now, surrounded by the people who shaped them, they invite you to witness the beginning of a life woven from the finest of traditions and the tenderest of dreams.",
    },
  ];

  return (
    <section id="story" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Our Story"
          title="A love written in soft light"
          subtitle="Every chapter of us — held gently, remembered always."
        />

        <div className="mt-20 space-y-16 md:space-y-24">
          {chapters.map((c, i) => (
            <motion.div
              key={c.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid gap-8 md:grid-cols-12 md:gap-12 ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-4">
                <div className="text-eyebrow">Chapter {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 font-script text-4xl text-[color:var(--gold)]">
                  {c.year}
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-serif text-3xl md:text-4xl text-[color:var(--charcoal)] leading-tight">
                  {c.title}
                </h3>
                <p className="mt-5 text-[color:var(--warm-gray)] leading-[1.9] text-lg font-light">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CelebrationSection() {
  const events = [
    {
      icon: ScrollText,
      title: "Marriage Registration",
      time: "Date to be Announced",
      body: "The formal beginning — vows witnessed and sealed in the presence of family.",
    },
    {
      icon: Sparkles,
      title: "Reception Celebration",
      time: "Immediately Following the Registration Ceremony",
      body: "An evening of blessings, feasting and warm gold light with the ones we love.",
    },
    {
      icon: Flower2,
      title: "Bride's Reception",
      time: "The Following Day",
      body: "A softer, intimate gathering to welcome the bride into her new family.",
    },
    {
      icon: MapPin,
      title: "Location",
      time: `${weddingConfig.city}, Telangana`,
      body: "The celebrations unfold in the heart of Mahabubabad, surrounded by family.",
    },
    {
      icon: Landmark,
      title: "Venue",
      time: "To Be Announced",
      body: "Details of the venue will be shared closer to the celebration.",
    },
  ];

  return (
    <section id="celebration" className="relative py-28 md:py-40 bg-[rgba(244,239,231,0.4)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Celebration"
          title="Celebration Timeline"
          subtitle="A gathering of the people we love, held close through every ritual and every dance."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-3xl border border-[rgba(212,180,131,0.3)] bg-[rgba(255,253,248,0.75)] backdrop-blur-sm p-8 md:p-10 transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:border-[color:var(--gold)] hover:bg-[rgba(255,253,248,0.92)] hover:shadow-[0_30px_60px_-30px_rgba(201,165,92,0.4),0_0_0_1px_rgba(201,165,92,0.25)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  boxShadow: "inset 0 0 40px rgba(201,165,92,0.12)",
                }}
              />
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--champagne-soft)] text-[color:var(--charcoal)]">
                <e.icon className="h-5 w-5" strokeWidth={1.3} />
              </span>
              <h3 className="mt-8 font-serif text-2xl md:text-3xl text-[color:var(--charcoal)]">
                {e.title}
              </h3>
              <div className="mt-2 text-eyebrow">{e.time}</div>
              <p className="mt-5 text-[color:var(--warm-gray)] leading-relaxed font-light">
                {e.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function GallerySection() {
  const tiles = [
    { cls: "md:col-span-2 md:row-span-2 aspect-square", tone: "linear-gradient(135deg, #F4EFE7, #E7D7B5)" },
    { cls: "aspect-square", tone: "linear-gradient(160deg, #E7D7B5, #D4B483)" },
    { cls: "aspect-square", tone: "linear-gradient(160deg, #F4EFE7, #A8B59A)" },
    { cls: "md:col-span-2 aspect-[2/1]", tone: "linear-gradient(135deg, #FAF7F2, #D4B483)" },
    { cls: "aspect-square", tone: "linear-gradient(135deg, #A8B59A, #F4EFE7)" },
    { cls: "aspect-square", tone: "linear-gradient(135deg, #E7D7B5, #FAF7F2)" },
  ];

  return (
    <section id="gallery" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Gallery"
          title="Moments, softly kept"
          subtitle="A quiet collection of the frames we return to — a soon-to-grow keepsake of us."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {tiles.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06, duration: 0.9 }}
              className={`group relative overflow-hidden rounded-2xl border border-[rgba(212,180,131,0.5)] shadow-[0_18px_40px_-24px_rgba(47,43,40,0.35)] transition-all duration-[500ms] ease-out hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-[0_36px_70px_-28px_rgba(201,165,92,0.5)] ${t.cls}`}
              style={{ background: `${t.tone}, #FAF7F2` }}
            >
              {/* Warm ivory wash */}
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                style={{
                  background:
                    "radial-gradient(120% 90% at 30% 20%, rgba(255,253,248,0.55), transparent 60%), " + t.tone,
                }}
              />
              {/* Subtle floral texture */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-[0.18] mix-blend-multiply transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240' viewBox='0 0 240 240'><g fill='none' stroke='%23C9A55C' stroke-width='0.7' opacity='0.55'><circle cx='60' cy='60' r='22'/><circle cx='60' cy='60' r='10'/><path d='M60 20 Q70 45 60 60 Q50 45 60 20 Z'/><path d='M60 100 Q70 75 60 60 Q50 75 60 100 Z'/><path d='M20 60 Q45 70 60 60 Q45 50 20 60 Z'/><path d='M100 60 Q75 70 60 60 Q75 50 100 60 Z'/><circle cx='180' cy='170' r='16'/><path d='M180 140 Q188 158 180 170 Q172 158 180 140 Z'/><path d='M180 200 Q188 182 180 170 Q172 182 180 200 Z'/></g></svg>\")",
                  backgroundSize: "220px",
                }}
              />
              <div className="relative z-10 grid h-full w-full place-items-center opacity-40 transition-opacity duration-500 group-hover:opacity-75">
                <span className="font-script text-3xl text-[color:var(--charcoal)]">
                  {weddingConfig.groomName[0]} &amp; {weddingConfig.brideName[0]}
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(47,43,40,0.15)] to-transparent" />
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-eyebrow">
          Full gallery revealed after the celebration
        </p>
      </div>
    </section>
  );
}

export function BlessingsSection() {
  const notes = [
    {
      from: "Amma",
      body:
        "May your home be filled with laughter as bright as morning sun, and love as deep as the oldest well.",
    },
    {
      from: "Naanna",
      body:
        "Walk gently with each other. In every season, choose kindness first — everything else will follow.",
    },
    {
      from: "The Family",
      body:
        "You carry the prayers of many hearts. May every step forward be blessed with grace.",
    },
  ];

  return (
    <section id="blessings" className="relative py-28 md:py-40 bg-[rgba(244,239,231,0.5)]">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Blessings"
          title="Words held close"
          subtitle="A garland of wishes from the ones who shaped us."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {notes.map((n, i) => (
            <motion.blockquote
              key={n.from}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.9 }}
              className="group relative rounded-3xl border border-[rgba(212,180,131,0.3)] bg-[rgba(255,253,248,0.8)] p-8 md:p-10 transition-all duration-[400ms] ease-out hover:-translate-y-1.5 hover:border-[color:var(--gold)] hover:shadow-[0_30px_60px_-30px_rgba(201,165,92,0.4)]"
            >
              <span className="absolute -top-6 left-6 font-serif text-8xl text-[color:var(--champagne)] leading-none drop-shadow-[0_2px_6px_rgba(201,165,92,0.25)]">
                “
              </span>
              <p className="relative font-serif italic text-lg leading-relaxed text-[color:var(--charcoal)]">
                {n.body}
              </p>
              <footer className="mt-6 text-eyebrow">— {n.from}</footer>
              <span className="absolute -bottom-10 right-6 font-serif text-8xl text-[color:var(--champagne)] leading-none opacity-60">
                ”
              </span>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <SectionHeading
          eyebrow="With Love"
          title="Be with us"
          subtitle="Your presence is the finest gift we could ask for. Reach out with any question or blessing."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <ContactCard icon={MapPin} label="Venue" value={`${weddingConfig.city}, Telangana`} />
          <ContactCard icon={Mail} label="Email" value="hello@everafter.love" />
          <ContactCard icon={Phone} label="Call" value="On request" />
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <PrimaryButton href="#home">Celebrate With Us</PrimaryButton>
          <SecondaryButton href="#story">Read Our Story</SecondaryButton>
        </div>

        <div className="mt-24 flex flex-col items-center gap-4">
          <span className="divider-ornament" aria-hidden />
          <p className="font-script text-3xl text-[color:var(--gold)]">
            {weddingConfig.groomName} &amp; {weddingConfig.brideName}
          </p>
          <p className="text-eyebrow">Ever After · {weddingConfig.city}</p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-[rgba(212,180,131,0.3)] bg-[rgba(255,253,248,0.7)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)]">
      <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-[color:var(--champagne-soft)]">
        <Icon className="h-4 w-4" strokeWidth={1.4} />
      </span>
      <div className="mt-4 text-eyebrow">{label}</div>
      <div className="mt-2 font-serif text-lg text-[color:var(--charcoal)]">{value}</div>
    </div>
  );
}