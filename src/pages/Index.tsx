"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import AIModelsSection from "@/components/common/AIModelsSection";
import NlovTokenDashboard from "@/components/common/NlovTokenTeamDashboard";
import WhyNeurolov from "@/components/common/poweredby";
import ComputePowerSharing from "@/components/ComputePowerSharing";
import LandingWithMarquee from "@/components/InfiniteSlidingHeader";
import Header from "@/components/Header";
import BottomLineFix from "@/components/BottomLineFix";
import NeurolovFooter from "@/components/common/Footer";
import LatestUpdates from "@/components/common/LatestUpdates";
import Team from "@/components/common/Team";
import Highlight from "@/components/Highlight";

const Index = () => {
  const [showBg2, setShowBg2] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setShowBg2((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#030924]">
      <LandingWithMarquee />
      <Header logoSrc="header/logo.png" />
      <BottomLineFix />
      <main>
        <div
          className="bg-cover bg-center bg-no-repeat relative overflow-hidden"
          style={{ backgroundImage: "url(/hero/bg.png)" }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 h-full bg-contain bg-bottom bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: "url(/hero/bg-2.png)",
              opacity: showBg2 ? 1 : 0,
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
            }}
          />

          <div
            className="absolute rotate-180 top-0 left-0 right-0 h-full bg-contain bg-bottom bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: "url(/hero/bg-2.png)",
              opacity: showBg2 ? 1 : 0,
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.0) 70%, rgba(0,0,0,1) 100%)",
            }}
          />
          <Hero />
        </div>
        <div>
          <WhyNeurolov />
        </div>
        <div className="mt-20 ">
          <ComputePowerSharing />
        </div>
        <div className="mt-20">
          <Highlight />
        </div>
        <div className="mt-20 ">
          <AIModelsSection />
        </div>
        <div className="mt-20 bg-[url('/token/bg.png')] bg-fill">
          <NlovTokenDashboard />
        </div>
        <div className="mt-20 bg-[url('/updates/star-bg.png')] bg-cover bg-center bg-no-repeat">
          <Team />
          <LatestUpdates />
        </div>
      </main>
      <div className="py-10">
        <NeurolovFooter />
      </div>
    </div>
  );
};

export default Index;
