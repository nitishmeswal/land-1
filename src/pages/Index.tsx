"use client";
import { useEffect, useState, Suspense, lazy } from "react";
import Hero from "@/components/home/Hero";
import Header from "@/components/Header";
import BottomLineFix from "@/components/BottomLineFix";

const AIModelsSection = lazy(
  () => import("@/components/common/AIModelsSection")
);
const NlovTokenDashboard = lazy(
  () => import("@/components/common/NlovTokenTeamDashboard")
);
const WhyNeurolov = lazy(() => import("@/components/common/poweredby"));
const ComputePowerSharing = lazy(
  () => import("@/components/ComputePowerSharing")
);
const LandingWithMarquee = lazy(
  () => import("@/components/InfiniteSlidingHeader")
);
const NeurolovFooter = lazy(() => import("@/components/common/Footer"));
const LatestUpdates = lazy(() => import("@/components/common/LatestUpdates"));
const Team = lazy(() => import("@/components/common/Team"));
const Highlight = lazy(() => import("@/components/Highlight"));

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
      <Suspense fallback={<div />}>
        <LandingWithMarquee />
      </Suspense>
      <Header />
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
          <Suspense fallback={<div />}>
            <WhyNeurolov />
          </Suspense>
        </div>
        <div className="mt-20 ">
          <Suspense fallback={<div />}>
            <ComputePowerSharing />
          </Suspense>
        </div>
        <div className="mt-20">
          <Suspense fallback={<div />}>
            <Highlight />
          </Suspense>
        </div>
        <div className="mt-20 ">
          <Suspense fallback={<div />}>
            <AIModelsSection />
          </Suspense>
        </div>
        <div className="mt-20 bg-[url('/token/bg.png')] bg-fill">
          <Suspense fallback={<div />}>
            <NlovTokenDashboard />
          </Suspense>
        </div>
        <div className="mt-20 bg-[url('/updates/star-bg.png')] bg-cover bg-center bg-no-repeat">
          <Suspense fallback={<div />}>
            <Team />
          </Suspense>
          <Suspense fallback={<div />}>
            <LatestUpdates />
          </Suspense>
        </div>
      </main>
      <div className="py-10">
        <Suspense fallback={<div />}>
          <NeurolovFooter />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
