import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { BackgroundLayers } from "@/components/wedding/BackgroundLayers";
import { Header } from "@/components/wedding/Header";
import { OpeningExperience } from "@/components/wedding/OpeningExperience";
import { Hero } from "@/components/wedding/Hero";
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
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    if (showOpening) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOpening]);

  return (
    <div className="relative min-h-screen text-[color:var(--charcoal)]">
      <BackgroundLayers />
      <AnimatePresence>
        {showOpening && (
          <OpeningExperience onEnter={() => setShowOpening(false)} />
        )}
      </AnimatePresence>

      <Header />
      <main>
        <Hero />
        <StorySection />
        <CelebrationSection />
        <GallerySection />
        <BlessingsSection />
        <ContactSection />
      </main>
    </div>
  );
}
