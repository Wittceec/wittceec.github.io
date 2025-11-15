"use client";

import { BadgeCheck, Database, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";

const highlights = [
  {
    icon: BadgeCheck,
    title: "Interactive story",
    detail: "Pair 3D motion with your resume narrative so recruiters remember the wow factor.",
  },
  {
    icon: Database,
    title: "Ops ready",
    detail: "Showcase infrastructure blueprints, racks, or dashboards directly inside the hero block.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted stack",
    detail: "Drop the section into any shadcn layout—Tailwind and TypeScript already wired up.",
  },
];

export function Interactive3DDemo() {
  return (
    <section className="flex flex-col gap-10 px-4 pb-24 md:px-12">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Interactive 3D</p>
      <Card className="relative h-[520px] overflow-hidden border-white/20 bg-black/80">
        <Spotlight className="-top-32 left-0 md:-top-40 md:left-32" fill="#7dd3fc" />
        <div className="relative z-10 flex h-full flex-col gap-8 py-10 md:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-6 px-8">
            <div>
              <p className="text-base uppercase tracking-[0.4em] text-canvas-accent">Spline powered</p>
              <h2 className="text-3xl font-bold md:text-5xl">Immerse visitors in your lab.</h2>
            </div>
            <p className="text-white/80">
              Embed a live 3D scene that responds to mouse movement. Perfect for highlighting automation pipelines or data
              center fly-throughs without leaving the page.
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <item.icon className="mt-0.5 h-4 w-4 text-canvas-accent" />
                  <span>
                    <strong className="block text-white">{item.title}</strong>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-1">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
