import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundLayers } from "@/components/wedding/BackgroundLayers";
import { Header } from "@/components/wedding/Header";
import { Hero } from "@/components/wedding/Hero";
import { LoadingIntro } from "@/components/wedding/LoadingIntro";
import {
  StorySection,
  CelebrationSection,
  GallerySection,
  BlessingsSection,
  ContactSection,
} from "@/components/wedding/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("everafter_intro_seen")) {
      setShowIntro(false);
      setIntroDone(true);
    }
  }, []);

  return (
    <div className="relative min-h-screen text-[color:var(--charcoal)]">
      {showIntro && (
        <LoadingIntro
          onDone={() => {
            sessionStorage.setItem("everafter_intro_seen", "1");
            setShowIntro(false);
            setIntroDone(true);
          }}
        />
      )}
      <BackgroundLayers />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: introDone || !showIntro ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hero />
        <StorySection />
        <CelebrationSection />
        <GallerySection />
        <BlessingsSection />
        <ContactSection />
      </motion.main>
    </div>
  );
}
