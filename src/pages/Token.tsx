"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from "@/components/ui/Container"; // Fixing case sensitivity in Container import
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import ResponsiveImage from "@/components/common/ResponsiveImage";
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
  AreaChart,
  Area,
  Legend,
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
import { useParams, useNavigate } from "react-router-dom";
import { PatternBackground } from "@/components/common/Highlight";

const tokenDistributionData = [
  { name: "Seed Investors", value: 2.95, color: "#6366f1" },
  { name: "Pre-sale Investors", value: 2.95, color: "#f43f5e" },
  { name: "Liquidity Pool (DEX)", value: 30.45, color: "#10b981" },
  { name: "Team and Development", value: 12.45, color: "#8b5cf6" },
  { name: "Ecosystem and Rewards", value: 18.45, color: "#f59e0b" },
  { name: "Community and Marketing", value: 8.45, color: "#3b82f6" },
  { name: "Buyback and Burn Reserve", value: 8.95, color: "#3b82f6" },
  { name: "Strategic Reserve", value: 5.45, color: "#3b82f6" },
  { name: "DAO Treasury", value: 4.45, color: "#6366f1" },
  { name: "Foundation", value: 5.45, color: "#f43f5e" },
];

const utilityData = [
  {
    title: "Platform Fee Utility",
    description:
      "NLOV tokens serve as the primary medium of exchange for all platform services, including GPU compute, AI model inference, and network resources. Users must hold and spend NLOV to access platform features.",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Staking Utility",
    description:
      "Stake NLOV tokens to earn passive rewards, secure network operations, and unlock premium platform features. Higher staking tiers provide increased benefits and voting power.",
    icon: <Coins className="h-6 w-6" />,
  },
  {
    title: "Governance Utility",
    description:
      "NLOV holders can participate in platform governance through proposal creation and voting. Shape the future of Neurolov by influencing key decisions and protocol upgrades.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Reward Utility",
    description:
      "Earn NLOV rewards for contributing compute resources, participating in network validation, and engaging in ecosystem activities. Dynamic reward mechanisms ensure sustainable token economics.",
    icon: <BadgeDollarSign className="h-6 w-6" />,
  },
];

const faqData = [
  {
    question: "What is Neurolov?",
    answer:
      "Neurolov is a browser-based platform providing decentralized GPU computing for AI, machine learning, and Web3 applications. Powered by the NLOV Token, it enables users to access high-performance computing resources efficiently and affordably.",
  },
  {
    question: "How can I purchase NLOV Tokens?",
    answer:
      "Presale: NLOV Tokens are available through our private, presale & public sale accessible directly via our website & partner launchpad.\n\nPost-Presale: After the presale, NLOV Tokens will be listed on major decentralized (e.g., Raydium) and centralized exchanges.\n\nPayment Methods: Accepted cryptocurrencies include SOL, USDT, and fiat via approved gateways, subject to KYC/AML verification",
  },
  {
    question: "Who can participate in the presale?",
    answer:
      "• Participants must be 18+.\n\n• Participation is restricted in jurisdictions where token sales are prohibited, including the North Korea, Iran, Syria, Cuba, Sudan, Venezuela.\n\n• Check [www.neurolov.ai](https://www.neurolov.ai) for eligibility and comply with local laws.",
  },
  {
    question: "How does Neurolov comply with regulations?",
    answer:
      "KYC/AML verification ensures adherence to the Prevention of Money Laundering Act.\n\nThe NLOV Token is a utility token, not a security, and is not marketed as an investment.",
  },
];

const cumulativeVestingData = [
  {
    month: "May '25 (TGE)",
    "Liquidity Pool (DEX)": 5.07,
    "Team & Advisors": 0,
    "Airdrops & Rewards": 4.61,
    "Marketing & KOLs": 2.11,
    Foundation: 0,
    "Strategic Reserve": 0,
    "DAO Treasury": 1.11,
    "Buyback & Burn": 0,
    "Seed Investors": 0.37,
    "Pre-sale Investors": 0.74,
  },
  {
    month: "Jun '25",
    "Liquidity Pool (DEX)": 60.9,
    "Team & Advisors": 0,
    "Airdrops & Rewards": 32.29,
    "Marketing & KOLs": 14.79,
    Foundation: 0,
    "Strategic Reserve": 0,
    "DAO Treasury": 7.78,
    "Buyback & Burn": 4.47,
    "Seed Investors": 5.9,
    "Pre-sale Investors": 5.9,
  },
  {
    month: "Dec '25",
    "Liquidity Pool (DEX)": 106.58,
    "Team & Advisors": 0,
    "Airdrops & Rewards": 59.96,
    "Marketing & KOLs": 27.46,
    Foundation: 0,
    "Strategic Reserve": 0,
    "DAO Treasury": 14.46,
    "Buyback & Burn": 11.19,
    "Seed Investors": 10.33,
    "Pre-sale Investors": 10.33,
  },
  {
    month: "Jun '26",
    "Liquidity Pool (DEX)": 152.25,
    "Team & Advisors": 18.68,
    "Airdrops & Rewards": 78.41,
    "Marketing & KOLs": 35.91,
    Foundation: 8.18,
    "Strategic Reserve": 0,
    "DAO Treasury": 18.91,
    "Buyback & Burn": 22.38,
    "Seed Investors": 14.75,
    "Pre-sale Investors": 14.75,
  },
  {
    month: "Dec '26",
    "Liquidity Pool (DEX)": 152.25,
    "Team & Advisors": 40.46,
    "Airdrops & Rewards": 92.25,
    "Marketing & KOLs": 42.25,
    Foundation: 17.71,
    "Strategic Reserve": 0,
    "DAO Treasury": 22.25,
    "Buyback & Burn": 33.56,
    "Seed Investors": 14.75,
    "Pre-sale Investors": 14.75,
  },
  {
    month: "May '27",
    "Liquidity Pool (DEX)": 152.25,
    "Team & Advisors": 62.25,
    "Airdrops & Rewards": 92.25,
    "Marketing & KOLs": 42.25,
    Foundation: 27.25,
    "Strategic Reserve": 27.25,
    "DAO Treasury": 22.25,
    "Buyback & Burn": 44.75,
    "Seed Investors": 14.75,
    "Pre-sale Investors": 14.75,
  },
];

export default function TokenPage() {
  const { tab = "" } = useParams();
  const navigate = useNavigate();
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

  const handleTabChange = (value: string) => {
    navigate(`/token/${value}`);
  };

  return (
    <PageLayout
      title="$NLOV Token"
      subtitle="The utility token powering the Neurolov ecosystem"
    >
      <SectionContainer className="pb-8 ">
        <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-20 md:mb-10">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-5 h-auto p-3 md:p-0 border border-[#0361DA] hover:border-[#0361DA]/50 shadow-md transition-all duration-300  hover:shadow-lg">
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
                <div className="inline-flex items-center px-3 py-1 rounded-full text-neuro-500 text-sm font-medium mb-4">
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
                      <h4 className="font-medium text-white">Network Access</h4>
                      <p className="text-sm text-muted">
                        Pay for compute resources, AI services, and other
                        network capabilities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">
                        Provider Rewards
                      </h4>
                      <p className="text-sm text-muted">
                        Earn tokens by contributing compute resources to the
                        network
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">
                        Governance Rights
                      </h4>
                      <p className="text-sm text-muted">
                        Shape the future of the platform through DAO voting
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">
                        Staking Benefits
                      </h4>
                      <p className="text-sm text-muted">
                        Stake tokens to secure the network and earn passive
                        income
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mb-16">
                  <button
                    onClick={() => {
                      window.open('https://forms.gle/awCVM6xa9hUFQv926', '_blank', 'noopener,noreferrer');
                    }}
                    className="w-full max-w-[300px] relative px-6 md:px-8 py-3 md:py-4 rounded-xl text-black font-semibold text-base md:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
                  >
                    <div className="absolute inset-0">
                      <img
                        src="/landing-ai-model/button-bg.png"
                        alt="Button Background"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <span className="relative z-10">Pre Sale Coming Soon</span>
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center relative">
                {/* Floating coin with shadow and glow */}
                <div className="animate-float-coin relative">
                  {/* Shadow - moves with the coin */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-35px] w-64 h-20  rounded-full blur-3xl animate-shadow-stretch"></div>

                  {/* Coin image */}
                  <ResponsiveImage
                    src="/NeurolovCoin.png"
                    alt="NLOV Token"
                    desktopSize={{ width: 300, height: 300 }}
                    className="relative z-10"
                  />
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                title="Token Launch Timeline"
                subtitle="Key milestones in the NLOV token journey"
                className="mb-12"
              />

              <div className="relative">
                {/* Timeline line */}{" "}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neuro-500/20"></div>
                {/* Timeline items */}{" "}
                <div className="space-y-16">
                  {/* Seed Round */}{" "}
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        Seed Round
                      </h3>

                      <p className="text-muted">
                        Initial funding round with strategic partners and early
                        supporters
                      </p>
                    </div>

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-background z-10">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />     
                         {" "}
                      </div>
                    </div>

                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q4 2024
                      </div>
                    </div>
                  </div>
                  {/* NeuroSwarm Launch */}
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        NeuroSwarm Launch
                      </h3>

                      <p className="text-muted">
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
                        Q3 2025
                      </div>
                    </div>
                  </div>
                  {/* Private Round */}
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        Private Round
                      </h3>

                      <p className="text-muted">
                        Exclusive token sale for strategic partners and early
                        backers
                      </p>
                    </div>

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>

                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q3 2025
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        Presale Round
                      </h3>

                      <p className="text-muted">
                        Early access token sale with limited allocation before
                        public launch
                      </p>
                    </div>

                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>

                    <div className="md:w-1/2 md:pl-16">
                      <div className="text-xl font-bold text-neuro-500">
                        Q4 2025
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        Public Round
                      </h3>

                      <p className="text-muted">
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
                        Q4 2025
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>
                      <h3 className="text-xl text-white font-bold mb-2">
                        Token Generation Event
                      </h3>
                      <p className="text-muted">
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
                        Q1 2026
                      </div>
                    </div>
                  </div>
                  {/* Staking Launch */}
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        Staking Launch
                      </h3>

                      <p className="text-muted">
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
                        Q1 2026
                      </div>
                    </div>
                  </div>
                  {/* Liquidity */}
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        Liquidity
                      </h3>

                      <p className="text-muted">
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
                        Q1 2026
                      </div>
                    </div>
                  </div>
                  {/* Governance Launch */}
                  <div className="flex flex-col md:flex-row items-center gap-8 relative">
                    <div className="md:w-1/2 md:text-right md:pr-16">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>Coming Soon</span>
                      </div>

                      <h3 className="text-xl text-white font-bold mb-2">
                        Governance Launch
                      </h3>
                      <p className="text-muted">
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
                        Q2 2026
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
              <div className="md:w-[40%] w-full">
                <SectionHeading
                  title="NLOV Tokenomics"
                  subtitle="A sustainable and fair token economy designed for long-term growth"
                  align={isMobile ? "center" : "left"}
                />
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">
                        Total Supply: 500,000,000 NLOV
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">
                        Token Standard: Solana SPL
                      </h4>
                      <p className="text-sm text-muted">
                        Built on Solana for fast and low-cost transactions
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-[60%] w-full">
                <img src="/token/graph.png" alt="Token Allocation" />
              </div>
            </div>

            <div className="mt-20 mb-16">
              <SectionHeading
                title="Token Release Schedule"
                subtitle="Structured vesting ensures market stability and long-term alignment"
                className="mb-12"
              />

              <div className="glass-card p-8 bg-transparent rounded-xl border border-white/10 mt-16">
                <h3 className="text-2xl font-bold mb-8 text-[#D4DFFF]">
                  Token Distribution & Vesting Schedule
                </h3>
                <div className="relative">
                  {/* Graph Container */}
                  <div className="w-full h-[400px] mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={cumulativeVestingData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <XAxis
                          dataKey="month"
                          stroke="#D4DFFF"
                          tick={{ fill: "#D4DFFF" }}
                        />
                        <YAxis
                          domain={[0, 500]}
                          ticks={[0, 100, 200, 300, 400, 500]}
                          tickFormatter={(value) => `${value}M`}
                          stroke="#D4DFFF"
                          tick={{ fill: "#D4DFFF" }}
                        />
                        <Tooltip
                          formatter={(value, name) => [`${value}M`, name]}
                          wrapperStyle={{ outline: "none" }}
                          contentStyle={{
                            background: "#000E1E",
                            border: "1px solid #D4DFFF",
                            color: "#D4DFFF",
                          }}
                          labelStyle={{ color: "#D4DFFF" }}
                          itemStyle={{ color: "#D4DFFF" }}
                        />
                        <Area
                          type="monotone"
                          dataKey="Liquidity Pool (DEX)"
                          stackId="1"
                          stroke="#1D4ED8"
                          fill="#1D4ED8"
                        />
                        <Area
                          type="monotone"
                          dataKey="Team & Advisors"
                          stackId="1"
                          stroke="#091B42"
                          fill="#091B42"
                        />
                        <Area
                          type="monotone"
                          dataKey="Airdrops & Rewards"
                          stackId="1"
                          stroke="#003385"
                          fill="#003385"
                        />
                        <Area
                          type="monotone"
                          dataKey="Marketing & KOLs"
                          stackId="1"
                          stroke="#9CCBFF"
                          fill="#9CCBFF"
                        />
                        <Area
                          type="monotone"
                          dataKey="Foundation"
                          stackId="1"
                          stroke="#0093AF"
                          fill="#0093AF"
                        />
                        <Area
                          type="monotone"
                          dataKey="Strategic Reserve"
                          stackId="1"
                          stroke="#00D7D9"
                          fill="#00D7D9"
                        />
                        <Area
                          type="monotone"
                          dataKey="DAO Treasury"
                          stackId="1"
                          stroke="#3D3D9F"
                          fill="#3D3D9F"
                        />
                        <Area
                          type="monotone"
                          dataKey="Buyback & Burn"
                          stackId="1"
                          stroke="#FFFFFF"
                          fill="#FFFFFF"
                        />
                        <Area
                          type="monotone"
                          dataKey="Seed Investors"
                          stackId="1"
                          stroke="#7285A5"
                          fill="#7285A5"
                        />
                        <Area
                          type="monotone"
                          dataKey="Pre-sale Investors"
                          stackId="1"
                          stroke="#0016A2"
                          fill="#0016A2"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Legends Container */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#1D4ED8] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Liquidity Pool (DEX) - 152.25M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#091B42] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Team & Advisors - 62.25M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#003385] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Airdrops & Rewards - 92.25M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#9CCBFF] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Marketing & KOLs - 42.25M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#0093AF] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Foundation - 27.25M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#00D7D9] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Strategic Reserve - 27.25M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#3D3D9F] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        DAO Treasury - 22.25M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#FFFFFF] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Buyback & Burn - 44.75M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#7285A5] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Seed Investors - 14.75M
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-[#0016A2] rounded-sm"></div>
                      <span className="text-sm text-[#D4DFFF]">
                        Pre-sale Investors - 14.75M
                      </span>
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
                    hideLearnMore={true}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img
                  src="/ai-bg.jpg"
                  alt="Token Utility Visualization"
                  className="rounded-xl shadow-xl"
                />
              </div>

              <div className="md:w-1/2 w-full text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Platform Fee Structure
                </h3>
                <p className="                                       mb-6">
                  NLOV tokens are used for all transactions on the Neurolov
                  platform, creating consistent utility and demand.
                </p>

                <div className="space-y-4 mb-8 w-full overflow-x-auto">
                  <div className="flex justify-between pb-2 border-b border-neuro-500/10 min-w-[300px]">
                    <div className="font-medium text-sm md:text-base">
                      Service
                    </div>
                    <div className="font-medium text-sm md:text-base">
                      Fee (NLOV)
                    </div>
                  </div>
                  <div className="flex justify-between min-w-[300px]">
                    <div className="text-sm md:text-base">
                      GPU Compute (per hour)
                    </div>
                    <div className="text-sm md:text-base">3.13 - 10 $NLOV</div>
                  </div>
                  <div className="flex justify-between min-w-[300px]">
                    <div className="text-sm md:text-base">
                      Text Generation (1K tokens)
                    </div>
                    <div className="text-sm md:text-base">
                      0.025 - 0.125 $NLOV
                    </div>
                  </div>
                  <div className="flex justify-between min-w-[300px]">
                    <div className="text-sm md:text-base">
                      Image Generation (per image)
                    </div>
                    <div className="text-sm md:text-base">
                      0.125 - 1.25 $NLOV
                    </div>
                  </div>
                  <div className="flex justify-between min-w-[300px]">
                    <div className="text-sm md:text-base">
                      Video Generation (per second)
                    </div>
                    <div className="text-sm md:text-base">
                      0.25 - 1.25 $NLOV
                    </div>
                  </div>
                  <div className="flex justify-between min-w-[300px]">
                    <div className="text-sm md:text-base">
                      Agent Deployment (monthly)
                    </div>
                    <div className="text-sm md:text-base">125 - 1238 $NLOV</div>
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
                {faqData.map((faq, index) => (
                  <Card
                    key={index}
                    className="glass-card border border-neuro-500/10"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-start">
                        <HelpCircle className="h-5 w-5 text-neuro-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{faq.question}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {faq.answer.includes("•") ? (
                        <ul className="text-black list-none space-y-2">
                          {faq.answer
                            .split("•")
                            .filter((item) => item.trim() !== "")
                            .map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{item.trim()}</span>
                              </li>
                            ))}
                        </ul>
                      ) : (
                        <p className="text-black">{faq.answer}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="glass-card p-12 rounded-xl border border-neuro-500/10 max-w-3xl mx-auto">
              <SectionHeading
                title="Still Have Questions?"
                subtitle="Our support team is here to help Or send an email to our dedicated support team:"
              />
              <div className="mt-8 text-center">
                <Button
                  variant="outline"
                  className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white hover:text-white"
                  onClick={() => window.open("mailto:support@neurolov.ai")}
                >
                  support@neurolov.ai
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </PageLayout>
  );
}
