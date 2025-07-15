"use client";

import React, { useState, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from "@/components/ui/Container";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import {
  BookOpen,
  Users,
  Code,
  Globe,
  ArrowRight,
  CheckCircle2,
  ArrowUpRight,
  Network,
  Calendar,
  ExternalLink,
  Plus,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PartnerForm, { PartnerFormData } from "@/components/common/PartnerForm";
import { PatternBackground } from "@/components/common/Highlight";

// Roadmap data
const roadmapData = [
  {
    title: "Q3 2024 - Project Ideation & Foundation",
    status: "completed",
    items: [
      "Beta version launched (app.neurolov.ai)",
      "Initial GPU Network Live with 200 GPUs onboarded",
      "Community Growth: 2,500+ registered users",
      "36,000+ total followers across social platforms",
    ],
  },
  {
    title: "Q4 2024 - Extended AI Model Ecosystem",
    status: "completed",
    items: [
      "Multiple AI Models Rolled Out",
      "Seed Round conculed for $200k",
      "New models: text-to-video, 3D, music generation",
      "Enhanced app performance and stability",
      "Swarm Network Developement started",
      "Early platform utility for BETA testnet users",
    ],
  },
  {
    title: "Q1 2025 -Technical Expansion ",
    status: "completed",
    items: [
      "All AI models live",
      "250+ GPUs Onboarded",
      
      "Production-level infrastructure",
    
      "Strategic marketing campaign",
    ],
  },
  {
    title: "Q2 2025 - Swarm",
    status: "completed",
    items: [
      "Swarm Launched beta",
      "Community members reaches 50k"
     
    ],
  },
  {
    title: "Q3 2025 -Token Launch ",
    status: "in-progress",
    items: [
      "Governance system launch for NLov holders",
      "On-chain forum proposals",
      "Core feature voting system",
      "$NLOV Token Presale",
      "Token Generation Event (TGE)",
      "Migration from testnet to mainnet"
    ],
  },
  {
    title: "Q4 2025 - Global Network Growth",
    status: "upcoming",
    items: [
      "DEX listings and liquidity pool setup",
      "Token allocation and vesting begins",
      "Cross-chain interoperability",
      "Advanced neural network deployment",
      "Distributed training optimization",
      "Enhanced privacy features"
   
    ],
  },
  {
    title: "Q1 2026 - DAO & Ecosystem",
    status: "upcoming",
    items: [
         
      "Scale to 10,000+ GPU contributors",
      "Launch of self-operating AI agents",
      "Expanded community and partner network",
      "Agentic AI infrastructure deployment",
      "Autonomous trading bots and AI workers",
      "Revenue-based token buyback & burn",
      "Decentralized community treasury",
      "$NLOV DAO ecosystem grants program"

    ],
  },
];

// Partner data
const partners = [
  { name: "Trade Flow", logo: "/partner/Trade Flow Logo Set-03.png" },
  { name: "Solpen", logo: "/partner/solpen_logo (1).jpg" },
  { name: "PropBlocc", logo: "/partner/PropBlocc New Logo FIX-04.png" },
  { name: "POPP", logo: "/partner/POPP LOGO.png" },
  { name: "Victus Global", logo: "/partner/Victus global LOGO.jpeg" },
  { name: "SoluAI", logo: "/partner/SoluAI logo.png" },
  { name: "PowerAI", logo: "/partner/PowerAI.jpg" },
  { name: "Rivalz Network", logo: "/partner/Rivalz Network.png" },
  { name: "Life's Meta", logo: "/partner/Life_s Meta.jpeg" },
  { name: "Orbler", logo: "/partner/Orbler.AVIF" },
  { name: "Kalp", logo: "/partner/Kalp.png" },
  { name: "Coin Avatar", logo: "/partner/Coin Avatar.JPG" },
  { name: "Megafin", logo: "/partner/Megafin.JPG" },
  { name: "Artboard", logo: "/partner/Artboard 4.png" },
  { name: "OpenLoop", logo: "/partner/OpenLoop.png" },
  { name: "AGI Open Network", logo: "/partner/AGI Open Network.png" },
  { name: "DMail.io", logo: "/partner/DMail.io.JPG" },
  { name: "Intract", logo: "/partner/Intract.JPG" },
  { name: "Bitgertbrise", logo: "/partner/Bitgertbrise.jpg" },
  { name: "CESS", logo: "/partner/CESS LOGO.png" },
];

export default function EcosystemPage() {
  const { tab = "roadmap" } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("roadmap");
  const [partnerFilter, setPartnerFilter] = useState("all");
  const [highlightGetStarted, setHighlightGetStarted] = useState(false);
  const filteredPartners = partners;
  const getStartedButtonRef = useRef(null);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);

  const handleTabChange = (value: string) => {
    navigate(`/ecosystem/${value}`);
  };

  const scrollToGetStarted = () => {
    setHighlightGetStarted(true);
    // Scroll to the Get Started section if in partners tab
    if (getStartedButtonRef.current) {
      getStartedButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
    // Reset highlight after animation
    setTimeout(() => setHighlightGetStarted(false), 2000);
  };

  return (
    <PatternBackground>
      <PageLayout
        title="Ecosystem"
        subtitle="The growing Neurolov network of partners, integrations, and development milestones"
      >
        <SectionContainer className="pb-8">
          <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-20 md:mb-10">
              <TabsList className="grid grid-cols-2 md:grid-cols-2 gap-5 border p-3 md:p-0 border-[#0361DA] hover:border-[#0361DA]/50 shadow-md transition-all duration-300  hover:shadow-lg">
                <TabsTrigger value="roadmap" className="px-6">
                  <Calendar className="mr-2 h-4 w-4" /> Roadmap
                </TabsTrigger>
                <TabsTrigger value="partners" className="px-6">
                  <Users className="mr-2 h-4 w-4" /> Partners
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Roadmap Tab */}
            <TabsContent value="roadmap" className="space-y-8">
              <div>
                <SectionHeading
                  title="Development Roadmap"
                  subtitle="Our journey to build the decentralized AI compute network of the future"
                />

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[26px] top-0 bottom-0 w-px bg-[#0361DA]/20 md:hidden"></div>

                  <div className="space-y-8">
                    {roadmapData.map((phase, index) => (
                      <div
                        key={index}
                        className="glass-card rounded-xl border border-[#0361DA]/10 overflow-hidden"
                      >
                        <div
                          className={`py-4 px-6 ${
                            phase.status === "completed"
                              ? "bg-green-500/10"
                              : phase.status === "in-progress"
                              ? "bg-amber-500/10"
                              : "bg-blue-500/10"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold">{phase.title}</h3>
                            <div
                              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                phase.status === "completed"
                                  ? "bg-green-500/20 text-green-500"
                                  : phase.status === "in-progress"
                                  ? "bg-amber-500/20 text-amber-500"
                                  : "bg-blue-500/20 text-blue-500"
                              }`}
                            >
                              {phase.status === "completed" ? (
                                <>
                                  <CheckCircle2 className="mr-2 h-4 w-4" />
                                  <span>Completed</span>
                                </>
                              ) : phase.status === "in-progress" ? (
                                <>
                                  <div className="w-3 h-3 rounded-full bg-amber-500 mr-2 animate-pulse"></div>
                                  <span>In Progress</span>
                                </>
                              ) : (
                                <>
                                  <ArrowUpRight className="mr-2 h-4 w-4" />
                                  <span>Upcoming</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phase.items.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <div
                                  className={`flex-shrink-0 p-1 mr-3 mt-1 rounded-full ${
                                    phase.status === "completed"
                                      ? "bg-green-500/10 text-green-500"
                                      : phase.status === "in-progress"
                                      ? "bg-amber-500/10 text-amber-500"
                                      : "bg-blue-500/10 text-blue-500"
                                  }`}
                                >
                                  {phase.status === "completed" ? (
                                    <CheckCircle2 className="h-3 w-3" />
                                  ) : phase.status === "in-progress" ? (
                                    <div className="w-3 h-3 rounded-full bg-amber-500/60"></div>
                                  ) : (
                                    <ArrowUpRight className="h-3 w-3" />
                                  )}
                                </div>
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Partners Tab */}
            <TabsContent value="partners" className="space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                {filteredPartners.map((partner, index) => (
                  <div
                    key={`${partner.name}-${index}`}
                    className="flex-shrink-0 w-full max-w-36 md:max-w-44 mt-10 aspect-square bg-[#0361DA]/90  rounded-lg p-4 border border-[#0361DA]/60 hover:border-[#0361DA]/70 transition-all duration-300 flex items-center justify-center"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className=" max-h-[70%] max-w-[70%] md:max-h-[80%] md:max-w-[80%] object-contain opacity-100  transition-all hover:scale-105 "
                    />
                  </div>
                ))}
                <div
                  className="flex-shrink-0 w-full max-w-36 md:max-w-44 mt-10 aspect-square bg-[#0361DA]/90 rounded-lg p-4 border border-[#0361DA]/60 hover:border-[#0361DA]/70 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group"
                  onClick={scrollToGetStarted}
                >
                  <Plus className="w-10 h-10 group-hover:text-white/75 text-white mb-3" />
                  <p className="text-sm font-medium text-center group-hover:text-white/75 text-white ">
                    Next could be you
                  </p>
                </div>
              </div>

              <SectionContainer className="py-16 bg-gradient-to-b from-background to-muted/30 relative">
                <div className="absolute inset-0 -z-10">
                  <div className="absolute inset-0 bg-dots-light bg-[size:20px_20px] opacity-20"></div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2 flex flex-col">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#0361DA]/10 text-[#0361DA] text-sm font-medium mb-4 md:self-start self-center">
                      <span>Join the Revolution</span>
                    </div>

                    <SectionHeading
                      title=" Become Part of the Neurolov Ecosystem"
                      subtitle="Whether you're a developer looking to build on our platform, a GPU owner wanting to earn tokens, or an investor interested in the future of decentralized AI compute, there's a place for you in the Neurolov ecosystem."
                      align={useIsMobile() ? "center" : "left"}
                    />

                    <div className="space-y-4 mb-8 md:ml-0 ml-5">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#0361DA]/10 rounded-full flex items-center justify-center text-[#0361DA] mr-3">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium">Join our community</h4>
                          <p className="text-sm text-muted-foreground">
                            Connect with like-minded developers and enthusiasts
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#0361DA]/10 rounded-full flex items-center justify-center text-[#0361DA] mr-3">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Participate in token presale
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Get NLOV tokens at the best possible price
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#0361DA]/10 rounded-full flex items-center justify-center text-[#0361DA] mr-3">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Share your compute resources
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Earn NLOV by contributing to the network
                          </p>
                        </div>
                      </div>
                    </div>

                    <Dialog
                      open={isPartnerFormOpen}
                      onOpenChange={setIsPartnerFormOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="neon"
                          className={`self-center md:self-start transition-all duration-500 ${
                            highlightGetStarted
                              ? "animate-pulse shadow-lg shadow-[#0361DA]/50 scale-105"
                              : ""
                          }`}
                          size="lg"
                          ref={getStartedButtonRef}
                        >
                          Get Started
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-[#0361DA] border-white/10 md:max-w-[400px] p-6 [&>button]:text-white [&>button]:hover:bg-white/10">
                        <DialogHeader>
                          <DialogTitle className="text-xl text-white">
                            Become a Partner
                          </DialogTitle>
                          <DialogDescription className="text-white/80">
                            Fill out the form below to join the Neurolov
                            ecosystem.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4">
                          <PartnerForm
                            setIsDialogOpen={setIsPartnerFormOpen}
                            onSubmit={async (data: PartnerFormData) => {}}
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="md:w-1/2">
                    <div className="relative">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0361DA]/30 rounded-full blur-3xl opacity-40"></div>
                      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl opacity-40"></div>

                      <img
                        src="/partner.png"
                        alt="Neurolov Community"
                        className="rounded-xl shadow-xl"
                      />

                      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                        <div className="text-lg font-bold mb-1">
                          Global Community
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Join thousands of developers, researchers, and
                          enthusiasts building the future of AI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionContainer>
            </TabsContent>
          </Tabs>
        </SectionContainer>
      </PageLayout>
    </PatternBackground>
  );
}
