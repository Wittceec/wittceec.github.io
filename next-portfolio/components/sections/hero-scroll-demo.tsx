"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Activity, Sparkles, Timer } from "lucide-react";

const insights = [
  {
    title: "Reliable automations",
    description: "Highlight the resilient runbooks you've built for data centers.",
    icon: Activity,
  },
  {
    title: "Faster hand-offs",
    description: "Guide recruiters through the story while they scroll.",
    icon: Timer,
  },
  {
    title: "Memorable polish",
    description: "Drop this hero block into any shadcn layout for instant motion.",
    icon: Sparkles,
  },
];

export function HeroScrollDemo() {
  return (
    <section className="flex flex-col gap-16 px-4 pb-32 pt-12 md:px-12">
      <div className="text-sm uppercase tracking-[0.3em] text-white/60">Experimental hero</div>
      <ContainerScroll
        titleComponent={
          <div className="space-y-6">
            <p className="text-base font-medium text-white/70">Christopher Wittman · Automation Lead</p>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Scroll to explore <span className="text-canvas-accent">motion</span> that mirrors
              <br className="hidden md:block" /> your infrastructure story.
            </h1>
            <p className="text-lg text-white/70">
              Spotlight complex projects with a tactile, scroll-driven frame that keeps attention on your visuals and
              metrics.
            </p>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80"
          alt="Data center dashboard"
          height={800}
          width={1600}
          className="mx-auto h-full w-full rounded-2xl object-cover object-center"
          priority
        />
      </ContainerScroll>
      <ul className="grid gap-6 md:grid-cols-3">
        {insights.map((item) => (
          <li key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <item.icon className="mb-4 h-10 w-10 text-canvas-accent" />
            <p className="text-xl font-semibold">{item.title}</p>
            <p className="mt-2 text-sm text-white/70">{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
