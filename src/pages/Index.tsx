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
    <PatternBackground>
      <Navbar />
      <main>
        <Hero />

        <AIModelsSection />

        <NlovTokenDashboard />

        <ProductHighlights />
        <HowItWorks />
        <Tokenomics />
        <CallToAction />
      </main>
      <Footer />
    </PatternBackground>
  );
};

export default Index;
