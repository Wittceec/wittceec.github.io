"use client";

import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 lg:w-[84%]",
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1061_15"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

interface SpotlightCardProps {
  className?: string;
  size?: number;
}

export const SpotlightCard = ({ className, size = 320 }: SpotlightCardProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const spotlightLeft = useMotionValue(0);
  const spotlightTop = useMotionValue(0);

  React.useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const handleMove = (event: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      spotlightLeft.set(event.clientX - rect.left - size / 2);
      spotlightTop.set(event.clientY - rect.top - size / 2);
    };
    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    parent.addEventListener("mousemove", handleMove);
    parent.addEventListener("mouseenter", handleEnter);
    parent.addEventListener("mouseleave", handleLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMove);
      parent.removeEventListener("mouseenter", handleEnter);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, [size, spotlightLeft, spotlightTop]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200",
        "from-zinc-50 via-zinc-100 to-zinc-200",
        isHovered ? "opacity-100" : "opacity-0",
        className,
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
};
