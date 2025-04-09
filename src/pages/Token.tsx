"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from "@/components/ui/Container"; // Fixing case sensitivity in Container import
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  BarChart as RechartBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import {
  Coins,
  BarChart3,
  Share2,
  HelpCircle,
  Users,
  CheckCircle2,
  Clock,
  Database,
  ArrowUpRight,
  BadgeDollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

// Tokenomics data
const tokenDistributionData = [
  { name: "Public Sale", value: 20, color: "#6366f1" },
  { name: "Ecosystem Growth", value: 25, color: "#f43f5e" },
  { name: "Development", value: 15, color: "#10b981" },
  { name: "Team & Advisors", value: 15, color: "#f59e0b" },
  { name: "Community Rewards", value: 20, color: "#8b5cf6" },
  { name: "Reserve", value: 5, color: "#3b82f6" },
];

const tokenReleaseData = [
  {
    month: "Initial",
    Community: 10,
    Team: 0,
    Development: 5,
    Ecosystem: 5,
    Public: 20,
  },
  {
    month: "Month 3",
    Community: 12,
    Team: 3,
    Development: 6,
    Ecosystem: 8,
    Public: 20,
  },
  {
    month: "Month 6",
    Community: 14,
    Team: 5,
    Development: 8,
    Ecosystem: 10,
    Public: 20,
  },
  {
    month: "Month 9",
    Community: 16,
    Team: 8,
    Development: 9,
    Ecosystem: 13,
    Public: 20,
  },
  {
    month: "Month 12",
    Community: 18,
    Team: 10,
    Development: 11,
    Ecosystem: 15,
    Public: 20,
  },
  {
    month: "Month 15",
    Community: 19,
    Team: 12,
    Development: 12,
    Ecosystem: 18,
    Public: 20,
  },
  {
    month: "Month 18",
    Community: 20,
    Team: 15,
    Development: 15,
    Ecosystem: 25,
    Public: 20,
  },
];

const utilityData = [
  {
    title: "Network Usage",
    description:
      "Pay for compute resources, AI model inference, and other network services using NLOV tokens.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Node Operation",
    description:
      "Stake NLOV tokens to operate network nodes and earn rewards for supporting the infrastructure.",
    icon: <Coins className="h-6 w-6" />,
  },
  {
    title: "Governance",
    description:
      "Participate in network governance decisions by voting with your NLOV tokens.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Fee Discounts",
    description:
      "Hold NLOV tokens to receive discounts on platform fees and premium features.",
    icon: <BadgeDollarSign className="h-6 w-6" />,
  },
];

const pricePredictionData = [
  { month: "Launch", price: 0.1 },
  { month: "Month 3", price: 0.15 },
  { month: "Month 6", price: 0.25 },
  { month: "Month 9", price: 0.4 },
  { month: "Month 12", price: 0.6 },
  { month: "Month 15", price: 0.85 },
  { month: "Month 18", price: 1.2 },
  { month: "Month 21", price: 1.6 },
  { month: "Month 24", price: 2.0 },
];

const faqData = [
  {
    question: "What is the NLOV token?",
    answer:
      "NLOV is the native utility token that powers the entire Neurolov ecosystem. It's used for paying for services, governance voting, staking, and earning rewards from contributing resources to the network.",
  },
  {
    question: "How can I purchase NLOV tokens?",
    answer:
      "NLOV tokens will initially be available through our presale events. After the presale period, NLOV will be listed on major decentralized and centralized exchanges. Join our whitelist to get early access.",
  },
  {
    question: "What is the total supply of NLOV?",
    answer:
      "The total supply of NLOV is capped at 1 billion tokens. No additional tokens will be minted after reaching this cap, making NLOV a deflationary asset over time.",
  },
  {
    question: "Is NLOV compatible with existing wallets?",
    answer:
      "Yes, NLOV is built on the Solana blockchain as an SPL token, making it compatible with most Solana-compatible wallets like Phantom, Solflare, and others.",
  },
  {
    question: "How can I stake NLOV tokens?",
    answer:
      "You can stake your NLOV tokens through our platform to earn rewards, contribute to network security, and participate in governance. Stakers receive additional benefits like fee discounts and premium features.",
  },
  {
    question: "When will NLOV be listed on exchanges?",
    answer:
      "NLOV will be listed on exchanges approximately 2-4 weeks after the conclusion of our presale events. We'll announce specific exchange listings through our official channels.",
  },
];

export default function TokenPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [daysLeft, setDaysLeft] = useState(14);
  const [hoursLeft, setHoursLeft] = useState(22);
  const [minutesLeft, setMinutesLeft] = useState(45);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [amountToInvest, setAmountToInvest] = useState(1000);
  const [estimatedTokens, setEstimatedTokens] = useState(10000);
  const isMobile = useIsMobile();

  // Calculate presale progress
  const presaleProgress = 72; // 72% of presale target reached
  const presaleGoal = 25000000; // 25M USDC
  const presaleRaised = presaleGoal * (presaleProgress / 100);

  const presalePrice = 0.1; // $0.10 per token

  // Update estimated tokens when amount changes
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value) || 0;
    setAmountToInvest(amount);
    setEstimatedTokens(amount / presalePrice);
  };

  return (
    <PageLayout
      title="$NLOV Token"
      subtitle="The utility token powering the Neurolov ecosystem"
    >
      <SectionContainer className="pb-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-16 md:mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <TabsTrigger
                value="overview"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                <BarChart3 className="mr-2 h-4 w-4" /> Overview
              </TabsTrigger>
              <TabsTrigger
                value="tokenomics"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                <Coins className="mr-2 h-4 w-4" /> Tokenomics
              </TabsTrigger>
              <TabsTrigger
                value="utility"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                <Share2 className="mr-2 h-4 w-4" /> Utility
              </TabsTrigger>
              <TabsTrigger
                value="faq"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                <HelpCircle className="mr-2 h-4 w-4" /> FAQ
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-20">
            <div className="flex flex-col md:flex-row gap-16 items-center  my-12">
              <div className="md:w-1/2 flex flex-col items-center justify-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4">
                  <Coins className="mr-2 h-4 w-4" />
                  <span>NLOV Token</span>
                </div>
                <SectionHeading
                  title={"The Fuel for Decentralized AI Computing"}
                  subtitle="NLOV is the native utility token that powers the entire
                  Neurolov ecosystem. It enables a seamless experience across
                  our decentralized compute infrastructure, AI services, and
                  community governance."
                />

                <div className="space-y-4 mb-8 ml-4">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Network Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Pay for compute resources, AI services, and other
                        network capabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Provider Rewards</h4>
                      <p className="text-sm text-muted-foreground">
                        Earn tokens by contributing compute resources to the
                        network
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Governance Rights</h4>
                      <p className="text-sm text-muted-foreground">
                        Shape the future of the platform through DAO voting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Staking Benefits</h4>
                      <p className="text-sm text-muted-foreground">
                        Stake tokens to secure the network and earn passive
                        income
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="neon">Pre Sale Coming Soon</Button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full transform scale-90"></div>
                <img
                  src="/nlov-coin.png"
                  alt="NLOV Token"
                  className="w-[32rem] h-[32rem] object-cover relative z-10"
                />
              </div>
            </div>

            <div>
              <SectionHeading
                title="Token Launch Timeline"
                subtitle="Key milestones in the NLOV token journey"
                className="mb-12"
              />

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neuro-500/20"></div>

                {/* Timeline items */}
                <div className="space-y-16">
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Seed Round</h3>
                      <p className="text-muted-foreground">
                        Initial funding round with strategic partners and early
                        supporters
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-background z-10">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q4 2023
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Testnet Launch</h3>
                      <p className="text-muted-foreground">
                        Public testnet deployment with initial network features
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-background z-10">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q1 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>In Progress</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Public Presale</h3>
                      <p className="text-muted-foreground">
                        Community token sale with tiered allocation system
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q1 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Token Generation Event
                      </h3>
                      <p className="text-muted-foreground">
                        Official $NLOV token launch and distribution to
                        participants
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q2 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Staking Launch</h3>
                      <p className="text-muted-foreground">
                        Staking program activation with rewards distribution
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q2 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">DEX Liquidity</h3>
                      <p className="text-muted-foreground">
                        Liquidity provision on major decentralized exchanges
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q2 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Governance Launch
                      </h3>
                      <p className="text-muted-foreground">
                        Community governance system activation with proposal
                        voting
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q3 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tokenomics Tab */}
          <TabsContent value="tokenomics" className="space-y-20">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/2 w-full">
                <SectionHeading
                  title="NLOV Tokenomics"
                  subtitle="A sustainable and fair token economy designed for long-term growth"
                  align={isMobile ? "center" : "left"}
                />
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">
                        Total Supply: 1,000,000,000 NLOV
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Fixed supply with no inflation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">
                        Initial Circulating Supply: 50,000,000 NLOV
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        5% of total supply at TGE (Token Generation Event)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">
                        Token Standard: Solana SPL
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Built on Solana for fast and low-cost transactions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Deflationary Mechanism</h4>
                      <p className="text-sm text-muted-foreground">
                        30% of platform fees used for token buyback and burn
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 w-full">
                <div className="glass-card p-5 md:p-12 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                  <h3 className="text-xl font-bold mb-3 md:mb-5">
                    Token Distribution
                  </h3>
                  <div className="aspect-square w-full max-w-md mx-auto mb-3 md:mb-5">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={tokenDistributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          fill="#8884d8"
                          paddingAngle={2}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {tokenDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {tokenDistributionData.map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div
                          className="w-3 h-3 rounded-sm mr-2"
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span>
                          {item.name}: {item.value}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <SectionHeading
                title="Token Release Schedule"
                subtitle="Structured vesting ensures market stability and long-term alignment"
                className="mb-12"
              />
              <div className="glass-card p-5 md:p-12 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                <div className="h-[350px] md:h-[400px] w-full mb-3 md:mb-5">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartBarChart
                      data={tokenReleaseData}
                      margin={{ top: 20, right: 30, left: 0, bottom: 15 }}
                    >
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="Public" stackId="a" fill="#6366f1" />
                      <Bar dataKey="Community" stackId="a" fill="#8b5cf6" />
                      <Bar dataKey="Team" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="Development" stackId="a" fill="#10b981" />
                      <Bar dataKey="Ecosystem" stackId="a" fill="#f43f5e" />
                    </RechartBarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold mb-2">Public Sale (20%)</h4>
                    <p className="text-muted-foreground">
                      25% unlocked at TGE, remaining 75% vested linearly over 6
                      months.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Team & Advisors (15%)</h4>
                    <p className="text-muted-foreground">
                      12-month cliff, then 24-month linear vesting. Demonstrates
                      long-term commitment from the team.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Development Fund (15%)</h4>
                    <p className="text-muted-foreground">
                      6-month cliff, then 18-month linear vesting. Used for
                      ongoing platform development.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Ecosystem Growth (25%)</h4>
                    <p className="text-muted-foreground">
                      3-month cliff, then 24-month linear vesting. Used for
                      partnerships, marketing, and ecosystem expansion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Community Rewards (20%)</h4>
                    <p className="text-muted-foreground">
                      10% unlocked at TGE for initial staking rewards, remaining
                      90% released over 36 months.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Reserve (5%)</h4>
                    <p className="text-muted-foreground">
                      12-month cliff, then release as needed for unforeseen
                      expenses, subject to DAO approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="glass-card p-5 md:p-10 rounded-xl border border-neuro-500/10 h-full">
                  <h3 className="text-xl font-bold mb-6">Price Potential</h3>
                  <div className="aspect-[16/9] w-full mb-3 md:mb-5">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={pricePredictionData}
                        margin={{ top: 5, right: 30, left: 0, bottom: 15 }}
                      >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value}`} />
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="#6366f1"
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Note:</strong> This projection is based on
                    conservative estimates and market conditions. Actual
                    performance may vary based on adoption, market conditions,
                    and development milestones.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">
                        Presale Price
                      </div>
                      <div className="font-medium">$0.10</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">
                        Initial Market Cap
                      </div>
                      <div className="font-medium">$5,000,000</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="glass-card p-8 rounded-xl border border-neuro-500/10 h-full">
                  <h3 className="text-xl font-bold mb-6">
                    Token Utility & Value Drivers
                  </h3>
                  <div className="space-y-6 ml-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Network Usage</h4>
                        <p className="text-sm text-muted-foreground">
                          NLOV is required to access compute resources, AI model
                          inference, and other network services.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Fee Discounts</h4>
                        <p className="text-sm text-muted-foreground">
                          Token holders receive discounts on platform fees, up
                          to 50% based on holding amount.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-center md:text-start">
                          Staking Rewards
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Earn passive income by staking NLOV, with initial APY
                          of 15-20%.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Governance Rights</h4>
                        <p className="text-sm text-muted-foreground">
                          Token holders can vote on platform upgrades, fee
                          structures, and treasury allocations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Deflationary Mechanism</h4>
                        <p className="text-sm text-muted-foreground">
                          Regular token burns reduce supply over time, creating
                          deflationary pressure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Utility Tab */}
          <TabsContent value="utility" className="space-y-20">
            <div>
              <SectionHeading
                title="NLOV Token Utility"
                subtitle="A multi-purpose utility token powering the entire Neurolov ecosystem"
                className="mb-12"
                align="center"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {utilityData.map((item, index) => (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                {/* <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="Token Utility Visualization"
                  className="rounded-xl shadow-xl"
                /> */}
                <img
                  src="/ai-bg.jpg"
                  alt="Token Utility Visualization"
                  className="rounded-xl shadow-xl"
                />
              </div>

              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">
                  Platform Fee Structure
                </h3>
                <p className="text-muted-foreground mb-6">
                  NLOV tokens are used for all transactions on the Neurolov
                  platform, creating consistent utility and demand.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between pb-2 border-b border-neuro-500/10">
                    <div className="font-medium">Service</div>
                    <div className="font-medium">Fee (NLOV)</div>
                  </div>
                  <div className="flex justify-between">
                    <div>GPU Compute (per hour)</div>
                    <div>10-50 NLOV</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Text Generation (1K tokens)</div>
                    <div>0.1-0.5 NLOV</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Image Generation (per image)</div>
                    <div>2-5 NLOV</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Video Generation (per second)</div>
                    <div>10-20 NLOV</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Agent Deployment (monthly)</div>
                    <div>100-500 NLOV</div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                  <h4 className="font-bold mb-2">Token Holder Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between pb-2 border-b border-neuro-500/10">
                      <div className="font-medium">NLOV Holdings</div>
                      <div className="font-medium">Fee Discount</div>
                    </div>
                    <div className="flex justify-between">
                      <div>1,000 - 9,999 NLOV</div>
                      <div className="text-neuro-500">10%</div>
                    </div>
                    <div className="flex justify-between">
                      <div>10,000 - 49,999 NLOV</div>
                      <div className="text-neuro-500">20%</div>
                    </div>
                    <div className="flex justify-between">
                      <div>50,000 - 99,999 NLOV</div>
                      <div className="text-neuro-500">35%</div>
                    </div>
                    <div className="flex justify-between">
                      <div>100,000+ NLOV</div>
                      <div className="text-neuro-500">50%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2 flex flex-col ">
                  <h3 className="text-2xl font-bold mb-4 text-center md:text-start">
                    Staking Rewards
                  </h3>
                  <p className="text-muted-foreground mb-6 text-center md:text-start">
                    Stake your NLOV tokens to earn passive income while helping
                    secure the network.
                  </p>

                  <div className="space-y-4 mb-8 ml-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Initial APY: 15-20%</h4>
                        <p className="text-sm text-muted-foreground">
                          Variable rate based on total tokens staked
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">
                          Minimum Stake: 1,000 NLOV
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          No maximum limit on staking
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">
                          Staking Periods: 30, 90, 180, 365 days
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Longer periods offer higher rewards
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">
                          Early Unstaking Fee: 10%
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Fee goes to remaining stakers
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="neon" className="self-center md:self-start">
                    Join Staking Waitlist
                  </Button>
                </div>

                <div className="md:w-1/2 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-center md:text-start">
                    Governance Participation
                  </h3>
                  <p className="text-muted-foreground mb-6 text-center md:text-start">
                    NLOV token holders can vote on key platform decisions
                    through our DAO governance system.
                  </p>

                  <div className="space-y-4 mb-8 ml-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">1 NLOV = 1 Vote</h4>
                        <p className="text-sm text-muted-foreground">
                          Quadratic voting system to prevent whale dominance
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">
                          Proposal Threshold: 100,000 NLOV
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Required to submit governance proposals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Voting on:</h4>
                        <p className="text-sm text-muted-foreground">
                          Protocol updates, fee structures, treasury
                          allocations, and more
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Delegation Available</h4>
                        <p className="text-sm text-muted-foreground">
                          Delegate your votes to trusted community members
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="self-center md:self-start"
                  >
                    Learn About Governance
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative">
              <SectionHeading
                title="Token Utility Roadmap"
                subtitle="Expanding use cases and utility over time"
                className="mb-16"
              />

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neuro-500/20"></div>

                {/* Timeline items */}
                <div className="space-y-16">
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Phase 1: Core Utilities
                      </h3>
                      <p className="text-muted-foreground">
                        Initial token utilities including platform payments, fee
                        discounts, and basic governance.
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-background">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q4 2023
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>In Progress</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Phase 2: Enhanced Staking
                      </h3>
                      <p className="text-muted-foreground">
                        Advanced staking options with variable lock periods and
                        boosted rewards for long-term holders.
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q1 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Q3 2024</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Phase 3: Governance DAO
                      </h3>
                      <p className="text-muted-foreground">
                        Full-featured governance system with proposal creation,
                        voting, and delegation capabilities.
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background">
                        <ArrowUpRight className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q2 2024
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Q4 2024</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Phase 4: NFT Integration
                      </h3>
                      <p className="text-muted-foreground">
                        Expanded utility through NFT membership tiers, providing
                        exclusive access to premium features and resources.
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background">
                        <ArrowUpRight className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q1 2025
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Q1 2025</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Phase 5: Cross-Chain Bridges
                      </h3>
                      <p className="text-muted-foreground">
                        Expand NLOV utility to multiple blockchains through
                        secure bridge protocols, increasing accessibility.
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background">
                        <ArrowUpRight className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q2 2025
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Q2 2025</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        Phase 6: NFT Marketplace
                      </h3>
                      <p className="text-muted-foreground">
                        Launch of the NLOV NFT marketplace, enabling token
                        trading and liquidity.
                      </p>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background">
                        <ArrowUpRight className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q3 2025
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-20">
            <div>
              <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Answers to common questions about the NLOV token"
                className="mb-12"
              />

              <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
                {faqData.map((item, index) => (
                  <Card
                    key={index}
                    className="glass-card border border-neuro-500/10"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-start">
                        <HelpCircle className="h-5 w-5 text-neuro-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item.question}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="glass-card p-12 rounded-xl border border-neuro-500/10 max-w-3xl mx-auto">
              <SectionHeading
                title="Still Have Questions?"
                subtitle="Our support team is here to help"
              />

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
                      fill="currentColor"
                    />
                  </svg>
                  Join Facebook Community
                </Button>
                <Button variant="outline" className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.05 1.87988C21.88 1.77988 21.68 1.76988 21.5 1.85988L2.5 11.8599C2.31 11.9499 2.19 12.1399 2.17 12.3499C2.15 12.5599 2.24 12.7599 2.4 12.8699L7 15.8699V20.9999C7 21.2099 7.12 21.4099 7.32 21.5199C7.43 21.5799 7.56 21.5999 7.69 21.5999C7.8 21.5999 7.91 21.5699 8.01 21.5199L11.37 19.5199L14.5 21.8699C14.62 21.9599 14.76 21.9999 14.9 21.9999C14.99 21.9999 15.08 21.9799 15.16 21.9499C15.36 21.8599 15.5 21.6699 15.51 21.4599L17.96 2.45988C17.98 2.23988 17.88 2.02988 17.7 1.89988C17.53 1.75988 17.29 1.72988 17.09 1.80988L22.05 1.87988ZM14.5 19.8999L11.2 17.4599C11.08 17.3699 10.94 17.3299 10.8 17.3299C10.65 17.3299 10.51 17.3699 10.39 17.4599L7.99 18.9699V16.0999L14.98 17.9999L14.5 19.8999ZM15.02 16.0999L7 13.8999L16.1 7.99988L9 13.9999L4.79 11.2899L16.57 4.77988L15.02 16.0999Z"
                      fill="currentColor"
                    />
                  </svg>
                  Telegram Support Group
                </Button>
                <Button variant="outline" className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.9999 3.99988C21.0999 3.99988 21.9999 4.89988 21.9999 5.99988V17.9999C21.9999 19.0999 21.0999 19.9999 19.9999 19.9999H3.99994C2.89994 19.9999 1.99994 19.0999 1.99994 17.9999V5.99988C1.99994 4.89988 2.89994 3.99988 3.99994 3.99988H19.9999ZM19.9999 5.99988H3.99994V17.9999H19.9999V5.99988ZM11.9999 10.9999H16.9999V12.9999H11.9999V10.9999ZM11.9999 6.99988H16.9999V8.99988H11.9999V6.99988ZM11.9999 14.9999H16.9999V16.9999H11.9999V14.9999ZM6.99994 6.99988H9.99994V9.99988H6.99994V6.99988ZM6.99994 11.9999H9.99994V14.9999H6.99994V11.9999Z"
                      fill="currentColor"
                    />
                  </svg>
                  Read Documentation
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Or send an email to our dedicated support team:
                </p>
                <a
                  href="mailto:support@neurolov.ai"
                  className="text-neuro-500 font-medium"
                >
                  support@neurolov.ai
                </a>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </PageLayout>
  );
}
