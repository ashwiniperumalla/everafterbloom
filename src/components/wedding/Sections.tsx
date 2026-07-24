import { motion } from "framer-motion";
import { Heart, Sparkles, Music2, MapPin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PrimaryButton, SecondaryButton } from "./Hero";
import { weddingConfig } from "@/lib/wedding-config";

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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
      icon: Sparkles,
      title: "Mehendi & Sangeet",
      time: "An evening of henna, music, and laughter",
      body: "Soft candlelight, family songs, and the first quiet celebrations before the vows.",
    },
    {
      icon: Heart,
      title: "The Wedding",
      time: weddingConfig.weddingDate,
      body: `A traditional ceremony marking a lifetime of togetherness in ${weddingConfig.city}, Telangana.`,
    },
    {
      icon: Music2,
      title: "The Reception",
      time: weddingConfig.receptionTime,
      body: "An intimate evening of feasting, blessings, and dancing under warm gold light.",
    },
  ];

  return (
    <section id="celebration" className="relative py-28 md:py-40 bg-[rgba(244,239,231,0.4)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="The Celebration"
          title="Three days of quiet joy"
          subtitle="A gathering of the people we love, held close through every ritual and every dance."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {events.map((e, i) => (
            <motion.article
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-[rgba(212,180,131,0.3)] bg-[rgba(255,253,248,0.75)] backdrop-blur-sm p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--gold)] hover:shadow-[0_40px_80px_-40px_rgba(47,43,40,0.25)]"
            >
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
        </div>
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
              className={`group relative overflow-hidden rounded-2xl border border-[rgba(212,180,131,0.25)] ${t.cls}`}
              style={{ background: t.tone }}
            >
              <div className="absolute inset-0 grid place-items-center opacity-40 transition-opacity duration-500 group-hover:opacity-70">
                <span className="font-script text-3xl text-[color:var(--charcoal)]">
                  {weddingConfig.groomName[0]} &amp; {weddingConfig.brideName[0]}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(47,43,40,0.15)] to-transparent" />
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
              className="relative rounded-3xl border border-[rgba(212,180,131,0.3)] bg-[rgba(255,253,248,0.8)] p-8 md:p-10"
            >
              <span className="absolute -top-4 left-8 font-serif text-6xl text-[color:var(--champagne)] leading-none">
                “
              </span>
              <p className="font-serif italic text-lg leading-relaxed text-[color:var(--charcoal)]">
                {n.body}
              </p>
              <footer className="mt-6 text-eyebrow">— {n.from}</footer>
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
          <PrimaryButton href="#home">RSVP with Joy</PrimaryButton>
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