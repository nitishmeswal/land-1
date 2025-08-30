"use client";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
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

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030924]">
      {/* <Navbar /> */}

      <LandingWithMarquee />
      <Header logoSrc="header/logo.png" />
      <BottomLineFix />
      <main>
        <div
          className="bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/hero/bg.png)" }}
        >
          <Hero />
        </div>

        <div>
          <WhyNeurolov />
        </div>

        <div
          className="mt-20 bg-[url('/compute/wave.gif')]  w-full bg-cover bg-center bg-no-repeat"
          style={{ mixBlendMode: "color-dodge" }}
        >
          <ComputePowerSharing />
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
        {" "}
        <NeurolovFooter />
      </div>
    </div>
  );
};

export default Index;
