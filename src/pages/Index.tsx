"use client";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductHighlights from "@/components/home/ProductHighlights";
import HowItWorks from "@/components/home/HowItWorks";
import Tokenomics from "@/components/home/Tokenomics";
import CallToAction from "@/components/home/CallToAction";
import { PatternBackground } from "@/components/common/Highlight";
import AIModelsSection from "@/components/common/AIModelsSection";
import NlovTokenDashboard from "@/components/common/NlovTokenTeamDashboard";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#030924]">
      <Navbar />
      <main>
        <Hero />

        <AIModelsSection />

        <div className="mt-20 bg-[url('/token/bg.png')] bg-fill">
          <NlovTokenDashboard />
        </div>

        <ProductHighlights />
        <HowItWorks />
        <Tokenomics />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
