import { createFileRoute } from "@tanstack/react-router";
import { BackgroundLayers } from "@/components/wedding/BackgroundLayers";
import { Header } from "@/components/wedding/Header";
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
  return (
    <div className="relative min-h-screen text-[color:var(--charcoal)]">
      <BackgroundLayers />
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
