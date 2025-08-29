"use client";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import AIModelsSection from "@/components/common/AIModelsSection";
import NlovTokenDashboard from "@/components/common/NlovTokenTeamDashboard";
import WhyNeurolov from "@/components/common/poweredby";
import ComputePowerSharing from "@/components/ComputePowerSharing";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030924]">
      <Navbar />
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

        {/* <ProductHighlights />
        <HowItWorks />
        <Tokenomics />
        <CallToAction /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Index;
