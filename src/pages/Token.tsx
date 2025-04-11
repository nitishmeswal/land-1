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

// Tokenomics data
const tokenDistributionData = [
  { name: "Seed Investors", value: 2.95, color: "#6366f1" },
  { name: "Private Investors", value: 2.95, color: "#f43f5e" },
  { name: "Liquidity Pool (DEX)", value: 30.45, color: "#10b981" },
  { name: "Team and Development", value: 12.45, color: "#8b5cf6" },
  { name: "Ecosystem and Rewards", value: 18.45, color: "#f59e0b" },
  { name: "Community and Marketing", value: 8.45, color: "#3b82f6" },
  { name: "Buyback and Burn Reserve", value: 8.95, color: "#3b82f6" },
  { name: "Strategic Reserve", value: 5.45, color: "#3b82f6" },
  { name: "DAO Treasury", value: 4.45, color: "#6366f1" },
  { name: "Foundation", value: 5.45, color: "#f43f5e" },
];

const tokenReleaseData = [
  {
    month: "TGE (May 2025)",
    "Seed Investors": 368.75,
    "Private Investors": 737.5,
    "Liquidity Pool": 5073.062,
    "Team and Development": 0,
    "Ecosystem and Rewards": 4612.5,
    "Community and Marketing": 2112,
    "Buyback and Burn": 0,
    "Strategic Reserve": 0,
    "DAO Treasury": 1112.5,
    "Foundation": 0
  },
  {
    month: "Jun 2025",
    "Seed Investors": 14381.25,
    "Private Investors": 14612.5,
    "Liquidity Pool": 147178.937,
    "Team and Development": 1779.47,
    "Ecosystem and Rewards": 87637.5,
    "Community and Marketing": 40137.5,
    "Buyback and Burn": "Dynamic",
    "Strategic Reserve": 0,
    "DAO Treasury": 21137.5,
    "Foundation": 757.639
  }
];

const vestingScheduleData = [
  {
    category: "Seed Investors",
    allocation: "14,750,000 NLOV (2.95%)",
    tgeUnlock: "368,750 (2.5%)",
    lockPeriod: "24 months",
    vestingStart: "June 20, 2025",
    monthlyVesting: "598,485/month",
    details: "Rewards early backers",
  },
  {
    category: "Private Investors",
    allocation: "14,750,000 NLOV (2.95%)",
    tgeUnlock: "737,500 (5%)",
    lockPeriod: "18 months",
    vestingStart: "June 20, 2025",
    monthlyVesting: "778,472/month",
    details: "Soft/hard cap range",
  },
  {
    category: "Liquidity Pool (DEX)",
    allocation: "152,250,000 NLOV (30.45%)",
    tgeUnlock: "5,071,062.5 (3.33%)",
    lockPeriod: "12 months",
    vestingStart: "June 20, 2025",
    monthlyVesting: "6,132,456/month",
    details: "DEX liquidity",
  },
  {
    category: "Team and Development",
    allocation: "62,250,000 NLOV (12.45%)",
    tgeUnlock: "0 NLOV",
    lockPeriod: "18 months cliff, 36 months vesting",
    vestingStart: "Dec 20, 2026",
    monthlyVesting: "1,779,470/month",
    details: "Long-term alignment",
  },
  {
    category: "Ecosystem and Rewards",
    allocation: "92,250,000 NLOV (18.45%)",
    tgeUnlock: "4,612,500 (5%)",
    lockPeriod: "36 months",
    vestingStart: "June 20, 2025",
    monthlyVesting: "2,434,375/month",
    details: "Connect to Earn, airdrops, rewards",
  },
  {
    category: "Community and Marketing",
    allocation: "42,250,000 NLOV (8.45%)",
    tgeUnlock: "2,112,500 (5%)",
    lockPeriod: "24 months",
    vestingStart: "June 20, 2025",
    monthlyVesting: "1,672,396/month",
    details: "Airdrops, partnerships, web growth",
  },
  {
    category: "Buyback and Burn Reserve",
    allocation: "44,750,000 NLOV (8.95%)",
    tgeUnlock: "0 NLOV",
    lockPeriod: "Dynamic",
    vestingStart: "Post-TGE",
    monthlyVesting: "Dynamic buyback (0-25% revenue)",
    details: "Reduces supply to enhance value",
  },
  {
    category: "Strategic Reserve",
    allocation: "27,250,000 NLOV (5.45%)",
    tgeUnlock: "0 NLOV",
    lockPeriod: "24-month lock, released for stabilization",
    vestingStart: "May 20, 2027",
    monthlyVesting: "Dynamic",
    details: "Market volatility buffer",
  },
  {
    category: "DAO Treasury",
    allocation: "22,250,000 NLOV (4.45%)",
    tgeUnlock: "1,112,500 (5%)",
    lockPeriod: "36 months",
    vestingStart: "June 20, 2025",
    monthlyVesting: "587,153/month",
    details: "Community-driven development, governance",
  },
  {
    category: "Foundation",
    allocation: "27,250,000 NLOV (5.45%)",
    tgeUnlock: "0 NLOV",
    lockPeriod: "12-month cliff, 36-month vesting",
    vestingStart: "June 20, 2026",
    monthlyVesting: "757,639/month",
    details: "Backup for unsold presale, strategic support",
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

const cumulativeVestingData = [
  {
    month: "May '25 (TGE)",
    "Liquidity Pool (DEX)": 5.07,
    "Team & Advisors": 0,
    "Airdrops & Rewards": 4.61,
    "Marketing & KOLs": 2.11,
    "Foundation": 0,
    "Strategic Reserve": 0,
    "DAO Treasury": 1.11,
    "Buyback & Burn": 0,
    "Seed Investors": 0.37,
    "Private Investors": 0.74
  },
  {
    month: "Jun '25",
    "Liquidity Pool (DEX)": 60.9,
    "Team & Advisors": 0,
    "Airdrops & Rewards": 32.29,
    "Marketing & KOLs": 14.79,
    "Foundation": 0,
    "Strategic Reserve": 0,
    "DAO Treasury": 7.78,
    "Buyback & Burn": 4.47,
    "Seed Investors": 5.9,
    "Private Investors": 5.9
  },
  {
    month: "Dec '25",
    "Liquidity Pool (DEX)": 106.58,
    "Team & Advisors": 0,
    "Airdrops & Rewards": 59.96,
    "Marketing & KOLs": 27.46,
    "Foundation": 0,
    "Strategic Reserve": 0,
    "DAO Treasury": 14.46,
    "Buyback & Burn": 11.19,
    "Seed Investors": 10.33,
    "Private Investors": 10.33
  },
  {
    month: "Jun '26",
    "Liquidity Pool (DEX)": 152.25,
    "Team & Advisors": 18.68,
    "Airdrops & Rewards": 78.41,
    "Marketing & KOLs": 35.91,
    "Foundation": 8.18,
    "Strategic Reserve": 0,
    "DAO Treasury": 18.91,
    "Buyback & Burn": 22.38,
    "Seed Investors": 14.75,
    "Private Investors": 14.75
  },
  {
    month: "Dec '26",
    "Liquidity Pool (DEX)": 152.25,
    "Team & Advisors": 40.46,
    "Airdrops & Rewards": 92.25,
    "Marketing & KOLs": 42.25,
    "Foundation": 17.71,
    "Strategic Reserve": 0,
    "DAO Treasury": 22.25,
    "Buyback & Burn": 33.56,
    "Seed Investors": 14.75,
    "Private Investors": 14.75
  },
  {
    month: "May '27",
    "Liquidity Pool (DEX)": 152.25,
    "Team & Advisors": 62.25,
    "Airdrops & Rewards": 92.25,
    "Marketing & KOLs": 42.25,
    "Foundation": 27.25,
    "Strategic Reserve": 27.25,
    "DAO Treasury": 22.25,
    "Buyback & Burn": 44.75,
    "Seed Investors": 14.75,
    "Private Investors": 14.75
  }
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
      <SectionContainer className="pb-8">
        <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
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
                <ResponsiveImage
                  src="/nlov-coin.png"
                  alt="NLOV Token"
                  desktopSize={{ width: 500, height: 500 }}
                  tabletRatio={0.75}
                  mobileRatio={0.5}
                  className="rounded-xl shadow-xl"
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
                        Q4 2024
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
                        Q1 2025
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
                        Q1 2025
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
                        Q2 2025
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
                        Q2 2025
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
                        Q2 2025
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
                        Q3 2025
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
                      <h4 className="font-medium">
                        Total Supply: 500,000,000 NLOV
                      </h4>
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
                </div>
              </div>

              <div className="md:w-[60%] w-full">
                <div className="glass-card p-5 md:p- md:flex-none flex flex-col items-center justify-center rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                  <h3 className="text-xl font-bold mb-3">Token Distribution</h3>
                  <div className="aspect-square md:aspect-video flex md:w-full w-[105%] justify-center mx-auto mb-3 md:mb-5">
                    <ResponsiveContainer width={"100%"} height="100%">
                      <PieChart>
                        <Pie
                          data={tokenDistributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={useIsMobile() ? 40 : 50}
                          outerRadius={useIsMobile() ? 50 : 80}
                          fill="#8884d8"
                          paddingAngle={2}
                          fontSize={useIsMobile() ? 7 : 14}
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
                <div className="w-full">
                  <div className="glass-card p-5 md:p-8 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                    <h3 className="text-xl font-bold mb-3">
                      Cumulative Vesting Schedule
                    </h3>
                    <div className="w-full h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={cumulativeVestingData}
                          margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                          }}
                        >
                          <XAxis dataKey="month" />
                          <YAxis
                            tickFormatter={(value) => `${value}M`}
                            domain={[0, 500]}
                            ticks={[0, 100, 200, 300, 400, 500]}
                          />
                          <Tooltip formatter={(value, name) => [`${value}M`, name]} />
                          <Legend />
                          <Area
                            type="monotone"
                            dataKey="Liquidity Pool (DEX)"
                            stackId="1"
                            stroke="#6366f1"
                            fill="#6366f1"
                            name="Liquidity Pool (DEX) - 152.25M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Team & Advisors"
                            stackId="1"
                            stroke="#10b981"
                            fill="#10b981"
                            name="Team & Advisors - 62.25M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Airdrops & Rewards"
                            stackId="1"
                            stroke="#8b5cf6"
                            fill="#8b5cf6"
                            name="Airdrops & Rewards - 92.25M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Marketing & KOLs"
                            stackId="1"
                            stroke="#f59e0b"
                            fill="#f59e0b"
                            name="Marketing & KOLs - 42.25M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Foundation"
                            stackId="1"
                            stroke="#3b82f6"
                            fill="#3b82f6"
                            name="Foundation - 27.25M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Strategic Reserve"
                            stackId="1"
                            stroke="#3b82f6"
                            fill="#3b82f6"
                            name="Strategic Reserve - 27.25M"
                          />
                          <Area
                            type="monotone"
                            dataKey="DAO Treasury"
                            stackId="1"
                            stroke="#6366f1"
                            fill="#6366f1"
                            name="DAO Treasury - 22.25M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Buyback & Burn"
                            stackId="1"
                            stroke="#f43f5e"
                            fill="#f43f5e"
                            name="Buyback & Burn - 44.75M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Seed Investors"
                            stackId="1"
                            stroke="#f43f5e"
                            fill="#f43f5e"
                            name="Seed Investors - 14.75M"
                          />
                          <Area
                            type="monotone"
                            dataKey="Private Investors"
                            stackId="1"
                            stroke="#f43f5e"
                            fill="#f43f5e"
                            name="Private Investors - 14.75M"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
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
                subtitle="Our support team is here to help Or send an email to our dedicated support team:"
              />
              <div className="mt-8 text-center">
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
