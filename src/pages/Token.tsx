import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from '@/components/ui/Container';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import { Coins, BarChart3, Share2, HelpCircle, Users, CheckCircle2, Clock, Database, ArrowUpRight, BadgeDollarSign } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { PieChart, Pie, Cell, BarChart as RechartBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

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
                  <div className="
