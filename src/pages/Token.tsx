import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from '@/components/ui/container';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart as RechartBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Coins, BarChart3, Share2, HelpCircle, Users, CheckCircle2, Clock, Database, ArrowUpRight, BadgeDollarSign } from 'lucide-react';

// Tokenomics data
const tokenDistributionData = [
  { name: 'Public Sale', value: 20, color: '#6366f1' },
  { name: 'Ecosystem Growth', value: 25, color: '#f43f5e' },
  { name: 'Development', value: 15, color: '#10b981' },
  { name: 'Team & Advisors', value: 15, color: '#f59e0b' },
  { name: 'Community Rewards', value: 20, color: '#8b5cf6' },
  { name: 'Reserve', value: 5, color: '#3b82f6' }
];

const tokenReleaseData = [
  { month: 'Initial', Community: 10, Team: 0, Development: 5, Ecosystem: 5, Public: 20 },
  { month: 'Month 3', Community: 12, Team: 3, Development: 6, Ecosystem: 8, Public: 20 },
  { month: 'Month 6', Community: 14, Team: 5, Development: 8, Ecosystem: 10, Public: 20 },
  { month: 'Month 9', Community: 16, Team: 8, Development: 9, Ecosystem: 13, Public: 20 },
  { month: 'Month 12', Community: 18, Team: 10, Development: 11, Ecosystem: 15, Public: 20 },
  { month: 'Month 15', Community: 19, Team: 12, Development: 12, Ecosystem: 18, Public: 20 },
  { month: 'Month 18', Community: 20, Team: 15, Development: 15, Ecosystem: 25, Public: 20 },
];

const utilityData = [
  { 
    title: "Network Usage", 
    description: "Pay for compute resources, AI model inference, and other network services using NLOV tokens.", 
    icon: <Database className="h-6 w-6" />,
  },
  { 
    title: "Node Operation", 
    description: "Stake NLOV tokens to operate network nodes and earn rewards for supporting the infrastructure.", 
    icon: <Coins className="h-6 w-6" />,
  },
  { 
    title: "Governance", 
    description: "Participate in network governance decisions by voting with your NLOV tokens.", 
    icon: <Users className="h-6 w-6" />,
  },
  { 
    title: "Fee Discounts", 
    description: "Hold NLOV tokens to receive discounts on platform fees and premium features.", 
    icon: <BadgeDollarSign className="h-6 w-6" />,
  }
];

const pricePredictionData = [
  { month: 'Launch', price: 0.10 },
  { month: 'Month 3', price: 0.15 },
  { month: 'Month 6', price: 0.25 },
  { month: 'Month 9', price: 0.40 },
  { month: 'Month 12', price: 0.60 },
  { month: 'Month 15', price: 0.85 },
  { month: 'Month 18', price: 1.20 },
  { month: 'Month 21', price: 1.60 },
  { month: 'Month 24', price: 2.00 },
];

const faqData = [
  {
    question: "What is the NLOV token?",
    answer: "NLOV is the native utility token of the Neurolov ecosystem. It's used for paying for services, governance voting, staking, and earning rewards from contributing resources to the network."
  },
  {
    question: "How can I purchase NLOV tokens?",
    answer: "NLOV tokens will initially be available through our presale events. After the presale period, NLOV will be listed on major decentralized and centralized exchanges. Join our whitelist to get early access."
  },
  {
    question: "What is the total supply of NLOV?",
    answer: "The total supply of NLOV is capped at 1 billion tokens. No additional tokens will be minted after reaching this cap, making NLOV a deflationary asset over time."
  },
  {
    question: "Is NLOV compatible with existing wallets?",
    answer: "Yes, NLOV is built on the Solana blockchain as an SPL token, making it compatible with most Solana-compatible wallets like Phantom, Solflare, and others."
  },
  {
    question: "How can I stake NLOV tokens?",
    answer: "You can stake your NLOV tokens through our platform to earn rewards, contribute to network security, and participate in governance. Stakers receive additional benefits like fee discounts and premium features."
  },
  {
    question: "When will NLOV be listed on exchanges?",
    answer: "NLOV will be listed on exchanges approximately 2-4 weeks after the conclusion of our presale events. We'll announce specific exchange listings through our official channels."
  }
];

export default function TokenPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [daysLeft, setDaysLeft] = useState(14);
  const [hoursLeft, setHoursLeft] = useState(22);
  const [minutesLeft, setMinutesLeft] = useState(45);
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [amountToInvest, setAmountToInvest] = useState(1000);
  const [estimatedTokens, setEstimatedTokens] = useState(10000);
  
  // Calculate presale progress
  const presaleProgress = 72; // 72% of presale target reached
  const presaleGoal = 25000000; // 25M USDC
  const presaleRaised = presaleGoal * (presaleProgress / 100);
  
  const presalePrice = 0.10; // $0.10 per token
  
  // Update estimated tokens when amount changes
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value) || 0;
    setAmountToInvest(amount);
    setEstimatedTokens(amount / presalePrice);
  };
  
  return (
    <PageLayout 
      title="NLOV Token" 
      subtitle="The utility token powering the Neurolov ecosystem"
    >
      <SectionContainer className="pb-16">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              <TabsTrigger value="overview" className="px-4">
                <Coins className="mr-2 h-4 w-4" /> Overview
              </TabsTrigger>
              <TabsTrigger value="presale" className="px-4">
                <BarChart3 className="mr-2 h-4 w-4" /> Presale
              </TabsTrigger>
              <TabsTrigger value="tokenomics" className="px-4">
                <BarChart3 className="mr-2 h-4 w-4" /> Tokenomics
              </TabsTrigger>
              <TabsTrigger value="utility" className="px-4">
                <Share2 className="mr-2 h-4 w-4" /> Utility
              </TabsTrigger>
              <TabsTrigger value="faq" className="px-4">
                <HelpCircle className="mr-2 h-4 w-4" /> FAQ
              </TabsTrigger>
              <TabsTrigger value="governance" className="px-4">
                <Users className="mr-2 h-4 w-4" /> Governance
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4">
                  <Coins className="mr-2 h-4 w-4" />
                  <span>NLOV Token</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">The Fuel for Decentralized AI Computing</h2>
                <p className="text-muted-foreground mb-6">
                  NLOV is the native utility token that powers the entire Neurolov ecosystem. 
                  It enables a seamless experience across our decentralized compute infrastructure, 
                  AI services, and community governance.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Network Access</h4>
                      <p className="text-sm text-muted-foreground">Pay for compute resources, AI services, and other network capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Provider Rewards</h4>
                      <p className="text-sm text-muted-foreground">Earn tokens by contributing compute resources to the network</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Governance Rights</h4>
                      <p className="text-sm text-muted-foreground">Shape the future of the platform through DAO voting</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Staking Benefits</h4>
                      <p className="text-sm text-muted-foreground">Stake tokens to secure the network and earn passive income</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="neon">Join Presale</Button>
                  <Button variant="outline">Read Whitepaper</Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="glass-card p-8 rounded-xl border border-neuro-500/20 bg-gradient-to-br from-neuro-500/5 to-blue-500/5 relative">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-neuro-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-neuro-500 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Token Name</div>
                      <div className="font-medium">Neurolov (NLOV)</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Token Type</div>
                      <div className="font-medium">Solana SPL</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Total Supply</div>
                      <div className="font-medium">1,000,000,000</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Initial Price</div>
                      <div className="font-medium">$0.10</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm font-medium mb-2">Token Distribution</div>
                    <div className="aspect-[16/9] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={tokenDistributionData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
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
                  
                  <div className="text-center">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/token#tokenomics">
                        View Detailed Tokenomics <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Token Launch Timeline"
                subtitle="Key milestones in the NLOV token journey"
              />
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neuro-500/20"></div>
                
                {/* Timeline items */}
                <div className="space-y-12 relative">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Seed Round</h3>
                      <p className="text-muted-foreground">
                        Initial funding round with strategic investors to support early development
                      </p>
                    </div>
                    <div className="relative md:w-0 flex justify-center order-1 md:order-2">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-background z-10">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 order-3">
                      <div className="text-xl font-bold text-neuro-500">Q2 2023</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 order-2 md:order-1">
                      <div className="text-xl font-bold text-neuro-500">Q4 2023</div>
                    </div>
                    <div className="relative md:w-0 flex justify-center order-1 md:order-2">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-background z-10">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:text-left order-3">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Private Sale</h3>
                      <p className="text-muted-foreground">
                        Private token sale to accredited investors and partners
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>In Progress</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Public Presale</h3>
                      <p className="text-muted-foreground">
                        Community token sale with tiered structure and bonuses
                      </p>
                    </div>
                    <div className="relative md:w-0 flex justify-center order-1 md:order-2">
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                        <Clock className="h-6 w-6 text-amber-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 order-3">
                      <div className="text-xl font-bold text-neuro-500">Q1 2024</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 order-2 md:order-1">
                      <div className="text-xl font-bold text-neuro-500">Q2 2024</div>
                    </div>
                    <div className="relative md:w-0 flex justify-center order-1 md:order-2">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background z-10">
                        <ArrowUpRight className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 md:text-left order-3">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Upcoming</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Exchange Listing</h3>
                      <p className="text-muted-foreground">
                        NLOV listed on major centralized and decentralized exchanges
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Upcoming</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Staking Launch</h3>
                      <p className="text-muted-foreground">
                        NLOV staking program begins with annual rewards
                      </p>
                    </div>
                    <div className="relative md:w-0 flex justify-center order-1 md:order-2">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background z-10">
                        <ArrowUpRight className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="md:w-1/2 order-3">
                      <div className="text-xl font-bold text-neuro-500">Q3 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Presale Tab */}
          <TabsContent value="presale" className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <SectionHeading
                  title="Join the NLOV Presale"
                  subtitle="Secure your tokens early at the best possible price"
                  badge="Limited Time"
                  align="left"
                />
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Presale Price: $0.10</h4>
                      <p className="text-sm text-muted-foreground">Expected listing price: $0.20 (100% potential upside)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Presale Allocation: 200,000,000 NLOV</h4>
                      <p className="text-sm text-muted-foreground">20% of total token supply</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Presale Goal: $20,000,000</h4>
                      <p className="text-sm text-muted-foreground">Funds will be used for development, marketing, and infrastructure</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Accepted Payment Methods</h4>
                      <p className="text-sm text-muted-foreground">USDT, USDC, ETH, SOL, BTC</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 mb-8">
                  <h3 className="text-lg font-bold mb-4">Presale Bonus Structure</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-neuro-500/10">
                      <div className="font-medium">Investment Amount</div>
                      <div className="font-medium">Bonus</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>$100 - $999</div>
                      <div className="text-neuro-500">5%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>$1,000 - $4,999</div>
                      <div className="text-neuro-500">10%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>$5,000 - $9,999</div>
                      <div className="text-neuro-500">15%</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>$10,000+</div>
                      <div className="text-neuro-500">25%</div>
                    </div>
                  </div>
                </div>
                
                <Button variant="neon" size="lg" className="w-full">Connect Wallet to Participate</Button>
              </div>
              
              <div className="md:w-1/2">
                <div className="glass-card p-8 rounded-xl border border-neuro-500/20 bg-gradient-to-br from-neuro-500/5 to-blue-500/5 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Presale Ends In</h3>
                  
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                      <div className="text-3xl font-bold text-neuro-500 mb-1">{daysLeft}</div>
                      <div className="text-xs text-muted-foreground">Days</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                      <div className="text-3xl font-bold text-neuro-500 mb-1">{hoursLeft}</div>
                      <div className="text-xs text-muted-foreground">Hours</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                      <div className="text-3xl font-bold text-neuro-500 mb-1">{minutesLeft}</div>
                      <div className="text-xs text-muted-foreground">Minutes</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center">
                      <div className="text-3xl font-bold text-neuro-500 mb-1">{secondsLeft}</div>
                      <div className="text-xs text-muted-foreground">Seconds</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span className="font-medium">{presaleProgress}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full"
                        style={{ width: `${presaleProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span>${new Intl.NumberFormat().format(presaleRaised)} raised</span>
                      <span>${new Intl.NumberFormat().format(presaleGoal)} goal</span>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-medium mb-4">Calculate Your Investment</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm mb-1 block">Amount to Invest (USD)</label>
                        <input
                          type="number"
                          value={amountToInvest}
                          onChange={handleAmountChange}
                          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neuro-500"
                        />
                      </div>
                      <div>
                        <label className="text-sm mb-1 block">Estimated NLOV Tokens</label>
                        <div className="w-full p-3 rounded-lg bg-white/5 border border-white/10 font-medium text-neuro-500">
                          {new Intl.NumberFormat().format(estimatedTokens)}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm mb-1 block">Potential Bonus Tokens</label>
                        <div className="w-full p-3 rounded-lg bg-white/5 border border-white/10 font-medium text-neuro-500">
                          {amountToInvest >= 10000 ? "+ " + new Intl.NumberFormat().format(estimatedTokens * 0.25) : 
                           amountToInvest >= 5000 ? "+ " + new Intl.NumberFormat().format(estimatedTokens * 0.15) :
                           amountToInvest >= 1000 ? "+ " + new Intl.NumberFormat().format(estimatedTokens * 0.10) :
                           amountToInvest >= 100 ? "+ " + new Intl.NumberFormat().format(estimatedTokens * 0.05) : "0"}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center space-y-4">
                    <Button variant="outline" className="w-full">View Presale Contract</Button>
                    <div className="text-xs text-muted-foreground">
                      Presale Contract Address: 0x8e7A5E8F...[verified on Solscan]
                    </div>
                  </div>
                </div>
                
                <div className="bg-neuro-500/5 border border-neuro-500/10 rounded-xl p-6">
                  <h4 className="font-bold flex items-center mb-2">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Need Help?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're experiencing any issues with the presale process, please contact our support team via any of these channels:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>📧 Email: presale@neurolov.ai</div>
                    <div>💬 Telegram: @NeurolovSupport</div>
                    <div>🌐 Discord: discord.gg/neurolov</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Common questions about the NLOV presale"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-2">When will tokens be distributed?</h4>
                  <p className="text-muted-foreground">
                    Tokens will be distributed to presale participants within 48 hours after the presale ends. You'll be able to claim them by connecting your wallet to our platform.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Is there a minimum or maximum investment?</h4>
                  <p className="text-muted-foreground">
                    The minimum investment is $100 equivalent in any accepted cryptocurrency. There is no maximum limit per individual, but large investments may require KYC verification.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Is there a vesting period?</h4>
                  <p className="text-muted-foreground">
                    Presale participants will receive 25% of their tokens immediately after distribution, with the remaining 75% vested linearly over 6 months to ensure market stability.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">What happens if the presale doesn't reach its goal?</h4>
                  <p className="text-muted-foreground">
                    If the presale doesn't reach its full target, we'll still proceed with the token launch and adjust our development timeline accordingly. There's no scenario where funds will be returned.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tokenomics Tab */}
          <TabsContent value="tokenomics" className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <SectionHeading
                  title="NLOV Tokenomics"
                  subtitle="A sustainable and fair token economy designed for long-term growth"
                  badge="Tokenomics"
                  align="left"
                />
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Total Supply: 1,000,000,000 NLOV</h4>
                      <p className="text-sm text-muted-foreground">Fixed supply with no inflation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Initial Circulating Supply: 50,000,000 NLOV</h4>
                      <p className="text-sm text-muted-foreground">5% of total supply at TGE (Token Generation Event)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Token Standard: Solana SPL</h4>
                      <p className="text-sm text-muted-foreground">Built on Solana for fast and low-cost transactions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Deflationary Mechanism</h4>
                      <p className="text-sm text-muted-foreground">30% of platform fees used for token buyback and burn</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="glass-card p-8 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                  <h3 className="text-xl font-bold mb-6">Token Distribution</h3>
                  <div className="aspect-square mb-6">
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
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {tokenDistributionData.map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: item.color }}></div>
                        <span>{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Token Release Schedule"
                subtitle="Structured vesting ensures market stability and long-term alignment"
              />
              
              <div className="glass-card p-8 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                <div className="aspect-[21/9] w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartBarChart
                      data={tokenReleaseData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
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
                      25% unlocked at TGE, remaining 75% vested linearly over 6 months.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Team & Advisors (15%)</h4>
                    <p className="text-muted-foreground">
                      12-month cliff, then 24-month linear vesting. Demonstrates long-term commitment from the team.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Development Fund (15%)</h4>
                    <p className="text-muted-foreground">
                      6-month cliff, then 18-month linear vesting. Used for ongoing platform development.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Ecosystem Growth (25%)</h4>
                    <p className="text-muted-foreground">
                      3-month cliff, then 24-month linear vesting. Used for partnerships, marketing, and ecosystem expansion.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Community Rewards (20%)</h4>
                    <p className="text-muted-foreground">
                      10% unlocked at TGE for initial staking rewards, remaining 90% released over 36 months.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Reserve (5%)</h4>
                    <p className="text-muted-foreground">
                      12-month cliff, then release as needed for unforeseen expenses, subject to DAO approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="glass-card p-8 rounded-xl border border-neuro-500/10 h-full">
                  <h3 className="text-xl font-bold mb-6">Price Potential</h3>
                  <div className="aspect-[16/9] w-full mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={pricePredictionData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => `$${value}`} />
                        <Line type="monotone" dataKey="price" stroke="#6366f1" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    <strong>Note:</strong> This projection is based on conservative estimates and market conditions. 
                    Actual performance may vary based on adoption, market conditions, and development milestones.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Presale Price</div>
                      <div className="font-medium">$0.10</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Initial Market Cap</div>
                      <div className="font-medium">$5,000,000</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="glass-card p-8 rounded-xl border border-neuro-500/10 h-full">
                  <h3 className="text-xl font-bold mb-6">Token Utility & Value Drivers</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Network Usage</h4>
                        <p className="text-sm text-muted-foreground">
                          NLOV is required to access compute resources, AI model inference, and other network services.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Fee Discounts</h4>
                        <p className="text-sm text-muted-foreground">
                          Token holders receive discounts on platform fees, up to 50% based on holding amount.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Staking Rewards</h4>
                        <p className="text-sm text-muted-foreground">
                          Earn passive income by staking NLOV, with initial APY of 15-20%.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Governance Rights</h4>
                        <p className="text-sm text-muted-foreground">
                          Token holders can vote on platform upgrades, fee structures, and treasury allocations.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Deflationary Mechanism</h4>
                        <p className="text-sm text-muted-foreground">
                          Regular token burns reduce supply over time, creating deflationary pressure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Utility Tab */}
          <TabsContent value="utility" className="space-y-16">
            <div>
              <SectionHeading
                title="NLOV Token Utility"
                subtitle="A multi-purpose utility token powering the entire Neurolov ecosystem"
                badge="Token Utility"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Token Utility Visualization" 
                  className="rounded-xl shadow-xl"
                />
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Platform Fee Structure</h3>
                <p className="text-muted-foreground mb-6">
                  NLOV tokens are used for all transactions on the Neurolov platform, creating consistent utility and demand.
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
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Staking Rewards</h3>
                  <p className="text-muted-foreground mb-6">
                    Stake your NLOV tokens to earn passive income while helping secure the network.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Initial APY: 15-20%</h4>
                        <p className="text-sm text-muted-foreground">Variable rate based on total tokens staked</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Minimum Stake: 1,000 NLOV</h4>
                        <p className="text-sm text-muted-foreground">No maximum limit on staking</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Staking Periods: 30, 90, 180, 365 days</h4>
                        <p className="text-sm text-muted-foreground">Longer periods offer higher rewards</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Early Unstaking Fee: 10%</h4>
                        <p className="text-sm text-muted-foreground">Fee goes to remaining stakers</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="neon">Join Staking Waitlist</Button>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Governance Participation</h3>
                  <p className="text-muted-foreground mb-6">
                    NLOV token holders can vote on key platform decisions through our DAO governance system.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">1 NLOV = 1 Vote</h4>
                        <p className="text-sm text-muted-foreground">Quadratic voting system to prevent whale dominance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Proposal Threshold: 100,000 NLOV</h4>
                        <p className="text-sm text-muted-foreground">Required to submit governance proposals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Voting on:</h4>
                        <p className="text-sm text-muted-foreground">Protocol updates, fee structures, treasury allocations, and more</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Delegation Available</h4>
                        <p className="text-sm text-muted-foreground">Delegate your votes to trusted community members</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline">Learn About Governance</Button>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Token Utility Roadmap"
                subtitle="Expanding use cases and utility over time"
              />
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-neuro-500/20 ml-6 md:ml-0 md:left-1/2 md:-translate-x-1/2"></div>
                
                {/* Timeline items */}
                <div className="space-y-12 relative">
                  <div className="flex flex-col md:flex-row gap-8 pl-16 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border-4 border-background z-10">
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-2">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>Completed</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Phase 1: Core Utilities</h3>
                      <p className="text-muted-foreground">
                        Initial token utilities including platform payments, fee discounts, and basic governance.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 pl-16 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border-4 border-background z-10">
                      <Clock className="h-6 w-6 text-amber-500" />
                    </div>
                    <div className="md:w-1/2 md:text-right md:pr-12 hidden md:block"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-sm font-medium mb-2">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>In Progress</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Phase 2: Enhanced Staking</h3>
                      <p className="text-muted-foreground">
                        Advanced staking options with variable lock periods and boosted rewards for long-term holders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 pl-16 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background z-10">
                      <ArrowUpRight className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Q3 2024</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Phase 3: Governance DAO</h3>
                      <p className="text-muted-foreground">
                        Full-featured governance system with proposal creation, voting, and delegation capabilities.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 pl-16 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background z-10">
                      <ArrowUpRight className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="md:w-1/2 md:text-right md:pr-12 hidden md:block"></div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Q4 2024</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Phase 4: NFT Integration</h3>
                      <p className="text-muted-foreground">
                        Expanded utility through NFT membership tiers, providing exclusive access to premium features and resources.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 pl-16 md:pl-0">
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border-4 border-background z-10">
                      <ArrowUpRight className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="md:w-1/2 md:text-right md:pr-12">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium mb-2">
                        <ArrowUpRight className="mr-2 h-4 w-4" />
                        <span>Q1 2025</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">Phase 5: Cross-Chain Bridges</h3>
                      <p className="text-muted-foreground">
                        Expand NLOV utility to multiple blockchains through secure bridge protocols, increasing accessibility.
                      </p>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* FAQ Tab */}
          <TabsContent value="faq" className="space-y-16">
            <div>
              <SectionHeading
                title="Frequently Asked Questions"
                subtitle="Answers to common questions about the NLOV token"
                badge="FAQ"
              />
              
              <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
                {faqData.map((item, index) => (
                  <Card key={index} className="glass-card border border-neuro-500/10">
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
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10 max-w-3xl mx-auto">
              <SectionHeading
                title="Still Have Questions?"
                subtitle="Our support team is here to help"
              />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="flex items-center">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor" />
                  </svg>
                  Join Facebook Community
                </Button>
                <Button variant="outline" className="flex items-center">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.05 1.87988C21.88 1.77988 21.68 1.76988 21.5 1.85988L2.5 11.8599C2.31 11.9499 2.19 12.1399 2.17 12.3499C2.15 12.5599 2.24 12.7599 2.4 12.8699L7 15.8699V20.9999C7 21.2099 7.12 21.4099 7.32 21.5199C7.43 21.5799 7.56 21.5999 7.69 21.5999C7.8 21.5999 7.91 21.5699 8.01 21.5199L11.37 19.5199L14.5 21.8699C14.62 21.9599 14.76 21.9999 14.9 21.9999C14.99 21.9999 15.08 21.9799 15.16 21.9499C15.36 21.8599 15.5 21.6699 15.51 21.4599L17.96 2.45988C17.98 2.23988 17.88 2.02988 17.7 1.89988C17.53 1.75988 17.29 1.72988 17.09 1.80988L22.05 1.87988ZM14.5 19.8999L11.2 17.4599C11.08 17.3699 10.94 17.3299 10.8 17.3299C10.65 17.3299 10.51 17.3699 10.39 17.4599L7.99 18.9699V16.0999L14.98 17.9999L14.5 19.8999ZM15.02 16.0999L7 13.8999L16.1 7.99988L9 13.9999L4.79 11.2899L16.57 4.77988L15.02 16.0999Z" fill="currentColor" />
                  </svg>
                  Telegram Support Group
                </Button>
                <Button variant="outline" className="flex items-center">
                  <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.9999 3.99988C21.0999 3.99988 21.9999 4.89988 21.9999 5.99988V17.9999C21.9999 19.0999 21.0999 19.9999 19.9999 19.9999H3.99994C2.89994 19.9999 1.99994 19.0999 1.99994 17.9999V5.99988C1.99994 4.89988 2.89994 3.99988 3.99994 3.99988H19.9999ZM19.9999 5.99988H3.99994V17.9999H19.9999V5.99988ZM11.9999 10.9999H16.9999V12.9999H11.9999V10.9999ZM11.9999 6.99988H16.9999V8.99988H11.9999V6.99988ZM11.9999 14.9999H16.9999V16.9999H11.9999V14.9999ZM6.99994 6.99988H9.99994V9.99988H6.99994V6.99988ZM6.99994 11.9999H9.99994V14.9999H6.99994V11.9999Z" fill="currentColor" />
                  </svg>
                  Read Documentation
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Or send an email to our dedicated support team:
                </p>
                <a href="mailto:support@neurolov.ai" className="text-neuro-500 font-medium">
                  support@neurolov.ai
                </a>
              </div>
            </div>
          </TabsContent>

          {/* Governance Tab */}
          <TabsContent value="governance" className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <SectionHeading
                  title="NLOV Governance"
                  subtitle="Community-driven decision making through the NLOV DAO"
                  badge="Governance"
                  align="left"
                />
                
                <p className="text-muted-foreground mb-6">
                  The Neurolov DAO enables token holders to participate in platform governance, 
                  voting on key decisions that shape the future of the ecosystem. By staking NLOV 
                  tokens, you gain voting rights proportional to your holdings.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Protocol Upgrades</h4>
                      <p className="text-sm text-muted-foreground">Vote on technical improvements and new features</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Fee Structures</h4>
                      <p className="text-sm text-muted-foreground">Determine platform fee levels and token burn rates</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Treasury Allocation</h4>
                      <p className="text-sm text-muted-foreground">Decide how community funds are spent</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Grants and Partnerships</h4>
                      <p className="text-sm text-muted-foreground">Approve funding for ecosystem growth initiatives</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="neon">Enter DAO Portal</Button>
              </div>
              
              <div className="md:w-1/2">
                <div className="glass-card p-8 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
                  <h3 className="text-xl font-bold mb-6">Active Proposals</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">NIP-23: Add New GPU Types</h4>
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                          <span>Voting Active</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Proposal to add support for AMD MI300 and NVIDIA H200 GPUs to the network.</p>
                      <div className="flex justify-between text-sm">
                        <span>57% Yes / 23% No</span>
                        <span>Ends in 3 days</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">NIP-24: Reduce Staking Minimum</h4>
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                          <span>Voting Active</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Reduce minimum staking requirement from 1,000 NLOV to 500 NLOV.</p>
                      <div className="flex justify-between text-sm">
                        <span>78% Yes / 12% No</span>
                        <span>Ends in 5 days</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">NIP-22: Community Fund</h4>
                        <div className="inline-flex items-center px-2 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium">
                          <span>Passed</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">Allocate 500,000 NLOV to community education and developer grants.</p>
                      <div className="flex justify-between text-sm">
                        <span>82% Yes / 18% No</span>
                        <span>Implemented</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Governance Process"
                subtitle="How the Neurolov DAO makes decisions"
              />
              
              <div className="relative">
                {/* Process steps */}
                <div className="absolute left-[26px] md:left-1/2 top-0 bottom-0 w-px bg-neuro-500/20 md:-translate-x-1/2"></div>
                
                <div className="space-y-16">
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex md:w-1/2 md:justify-end md:pr-12 mb-6 md:mb-0">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-neuro-500/10 text-neuro-500 border-4 border-background mr-4 md:mr-0">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <div className="pt-2 md:hidden">
                        <h3 className="text-xl font-bold mb-2">Proposal Creation</h3>
                        <p className="text-muted-foreground">
                          Any community member holding at least 100,000 NLOV tokens can submit a proposal. 
                          Proposals must include a detailed description, rationale, and implementation plan.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block">
                      <h3 className="text-xl font-bold mb-2">Proposal Creation</h3>
                      <p className="text-muted-foreground">
                        Any community member holding at least 100,000 NLOV tokens can submit a proposal. 
                        Proposals must include a detailed description, rationale, and implementation plan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex md:w-1/2 md:justify-end md:pr-12 mb-6 md:mb-0 md:order-last">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-neuro-500/10 text-neuro-500 border-4 border-background mr-4 md:ml-4 md:mr-0">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <div className="pt-2 md:hidden">
                        <h3 className="text-xl font-bold mb-2">Discussion Period</h3>
                        <p className="text-muted-foreground">
                          Proposals undergo a 7-day discussion period where community members can ask questions, 
                          suggest improvements, and debate the merits of the proposal.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pr-12 hidden md:block">
                      <h3 className="text-xl font-bold mb-2">Discussion Period</h3>
                      <p className="text-muted-foreground">
                        Proposals undergo a 7-day discussion period where community members can ask questions, 
                        suggest improvements, and debate the merits of the proposal.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex md:w-1/2 md:justify-end md:pr-12 mb-6 md:mb-0">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-neuro-500/10 text-neuro-500 border-4 border-background mr-4 md:mr-0">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <div className="pt-2 md:hidden">
                        <h3 className="text-xl font-bold mb-2">Voting Period</h3>
                        <p className="text-muted-foreground">
                          After the discussion period, proposals move to a 5-day voting period. 
                          Staked NLOV tokens serve as voting power, with 1 NLOV = 1 vote.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pl-12 hidden md:block">
                      <h3 className="text-xl font-bold mb-2">Voting Period</h3>
                      <p className="text-muted-foreground">
                        After the discussion period, proposals move to a 5-day voting period. 
                        Staked NLOV tokens serve as voting power, with 1 NLOV = 1 vote.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-start">
                    <div className="flex md:w-1/2 md:justify-end md:pr-12 mb-6 md:mb-0 md:order-last">
                      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-neuro-500/10 text-neuro-500 border-4 border-background mr-4 md:ml-4 md:mr-0">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <div className="pt-2 md:hidden">
                        <h3 className="text-xl font-bold mb-2">Implementation</h3>
                        <p className="text-muted-foreground">
                          If a proposal receives majority approval ({'>'}50% of votes) with a quorum of at least 10% of 
                          staked tokens participating, it moves to implementation by the core team.
                        </p>
                      </div>
                    </div>
                    <div className="md:w-1/2 md:pr-12 hidden md:block">
                      <h3 className="text-xl font-bold mb-2">Implementation</h3>
                      <p className="text-muted-foreground">
                        If a proposal receives majority approval ({'>'}50% of votes) with a quorum of at least 10% of 
                        staked tokens participating, it moves to implementation by the core team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Governance Parameters</h3>
                  <p className="text-muted-foreground mb-6">
                    Current governance parameters, which can themselves be modified through governance proposals.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between pb-2 border-b border-neuro-500/10">
                      <div className="font-medium">Parameter</div>
                      <div className="font-medium">Value</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Proposal Threshold</div>
                      <div>100,000 NLOV</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Discussion Period</div>
                      <div>7 days</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Voting Period</div>
                      <div>5 days</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Approval Threshold</div>
                      <div>{'>'}50% Yes</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Quorum Requirement</div>
                      <div>10% of staked tokens</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Implementation Delay</div>
                      <div>48 hours</div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">DAO Treasury</h3>
                  <p className="text-muted-foreground mb-6">
                    The DAO treasury is funded by network fees and is used to support ecosystem development.
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                      <div className="text-sm text-muted-foreground mb-1">Current Treasury Balance</div>
                      <div className="text-2xl font-bold text-neuro-500">12,450,000 NLOV</div>
                      <div className="text-sm text-muted-foreground">≈ $1,245,000 USD</div>
                    </div>
                    
                    <div>
                      <div className="text-lg font-medium mb-3">Allocation Breakdown</div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Development Grants</span>
                            <span>40%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-neuro-500/60 rounded-full" style={{ width: '40%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Marketing & Growth</span>
                            <span>30%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-neuro-500/60 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Community Incentives</span>
                            <span>20%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-neuro-500/60 rounded-full" style={{ width: '20%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Emergency Reserve</span>
                            <span>10%</span>
                          </div>
                          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-neuro-500/60 rounded-full" style={{ width: '10%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline">View Treasury Dashboard</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </PageLayout>
  );
}
