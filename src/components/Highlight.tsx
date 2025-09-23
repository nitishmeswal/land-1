"use client";
import React, { useEffect, useState, useRef } from "react";
import { HighlightCard } from "./HighlightCard";

import { useScroll } from "framer-motion";

export function Highlight() {
  const container = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: isMounted ? container : undefined,
    offset: ["start start", "end end"],
  });

  const highlights = [
    {
      img: "/highlight/1.png",
      title: "GPU Compute",
      description:
        "Rent GPUs for AI training and inference. Affordable, scalable compute power for all. Why it matters: Access high- performance GPUs on demand, no need to own expensive hardware. Ideal for researchers, startups, and creators who need flexible, affordable compute resources.",
      cta: { label: "LEARN MORE", href: "https://app.neurolov.ai/gpu-marketplace" },
      align: "start",
    },
    {
      img: "/highlight/2.png",
      title: "AI Models",
      description:
        "Generate images, text, audio, code, and video with ease. Unleash creativity with Neurolov. Who it's for: Artists, developers, and businesses looking to integrate state-of-the-art AI into their workflows, no technical barriers, just results.",
      cta: { label: "LEARN MORE", href: "https://app.neurolov.ai/ai-models" },
      align: "start",
    },
    {
      img: "/highlight/3.png",
      title: "Swarm Network",
      description:
        "Connect devices, solve compute tasks, and earn NLOV. Turn idle hardware into income. Why it matters: Anyone can contribute their device's unused power to the network and earn rewards, making advanced AI accessible and affordable for all.",
      cta: { label: "LEARN MORE", href: "https://swarm.neurolov.ai" },
      align: "start",
    },
    {
      img: "/highlight/4.png",
      title: "AI Agents",
      description:
        "Autonomous AI solutions for decentralized apps. The future of blockchain automation. Who it's for: Web3 builders and enterprises seeking autonomous, intelligent agents to power next-gen dApps and automate complex workflows.",
      cta: { label: "LEARN MORE", href: "https://app.neurolov.ai" },
      align: "start",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="mt-8">
        <div className="text-center mb-12">
          <h2 className="text-[#AED5FF] font-normal text-3xl mb-2">
            Product Highlights
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 w-full card-container">
          {highlights.map((_, index) => (
            <div
              key={index}
              className="h-64 bg-blue-900/20 rounded-3xl animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={container} className="mt-16 mb-8">
      <div className="w-full text-center mb-12 lg:mb-16 px-4 z-10">
        <h1 className="text-5xl tracking-tight mb-4 lg:mb-6">
          <span className="text-[#ACD2FF]">
            Product <span className="font-bold">Highlights</span>
          </span>
        </h1>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4 card-container">
        {highlights.map((h, index) => (
          <HighlightCard
            key={index}
            image={h.img}
            title={h.title}
            description={h.description}
            cta={h.cta}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}
