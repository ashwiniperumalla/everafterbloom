import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      {eyebrow && <div className="text-eyebrow mb-6">{eyebrow}</div>}
      <h2 className="font-serif text-4xl md:text-6xl text-[color:var(--charcoal)] leading-[1.05]">
        {title}
      </h2>
      <div className="divider-ornament mx-auto mt-6" aria-hidden />
      {subtitle && (
        <p className="mt-6 text-[color:var(--warm-gray)] max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}