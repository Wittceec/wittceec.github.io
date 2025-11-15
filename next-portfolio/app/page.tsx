import { HeroScrollDemo } from "@/components/sections/hero-scroll-demo";
import { Interactive3DDemo } from "@/components/sections/interactive-3d-demo";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[-1] h-[500px] bg-gradient-to-b from-canvas-accent/20 to-transparent blur-3xl" />
      <HeroScrollDemo />
      <Interactive3DDemo />
    </main>
  );
}
