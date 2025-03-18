
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from '@/components/ui/Container';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import { BookOpen, Users, Code, Globe, ArrowRight, CheckCircle2, ArrowUpRight, Network, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Roadmap data
const roadmapData = [
  {
    quarter: "Q1 2023",
    status: "completed",
    title: "Foundation Phase",
    milestones: [
      "Core team formation",
      "Initial concept development",
      "Angel investment round",
      "Whitepaper draft",
    ]
  },
  {
    quarter: "Q2 2023",
    status: "completed",
    title: "Development Kickoff",
    milestones: [
      "Prototype development",
      "Seed investment round",
      "Technical architecture design",
      "Partner outreach initiated",
    ]
  },
  {
    quarter: "Q3 2023",
    status: "completed",
    title: "Initial Infrastructure",
    milestones: [
      "Alpha version of compute platform",
      "Initial node network deployment",
      "Early partner integrations",
      "Security audits",
    ]
  },
  {
    quarter: "Q4 2023",
    status: "completed",
    title: "Private Network Launch",
    milestones: [
      "Beta launch to select partners",
      "Private token sale",
      "GPU marketplace MVP",
      "Core AI models integration",
    ]
  },
  {
    quarter: "Q1 2024",
    status: "in-progress",
    title: "Public Network Launch",
    milestones: [
      "NLOV token presale",
      "Public beta launch",
      "Full GPU marketplace",
      "Developer documentation release",
    ]
  },
  {
    quarter: "Q2 2024",
    status: "upcoming",
    title: "Ecosystem Expansion",
    milestones: [
      "Mobile app release",
      "Provider onboarding campaign",
      "Token exchange listings",
      "Community governance launch",
    ]
  },
  {
    quarter: "Q3 2024",
    status: "upcoming",
    title: "Advanced Features",
    milestones: [
      "AI agent marketplace",
      "Advanced model fine-tuning",
      "Cross-chain interoperability",
      "Enhanced staking mechanisms",
    ]
  },
  {
    quarter: "Q4 2024",
    status: "upcoming",
    title: "Enterprise Solutions",
    milestones: [
      "Enterprise SDK release",
      "Private cloud solutions",
      "Industry-specific AI models",
      "Premium service tiers",
    ]
  },
  {
    quarter: "2025+",
    status: "upcoming",
    title: "Future Innovation",
    milestones: [
      "Next-gen AI capabilities",
      "Global infrastructure expansion",
      "Research partnerships",
      "DAO-managed development",
    ]
  }
];

// Growth data for chart
const growthData = [
  { month: 'Jan', nodes: 1000, users: 5000, compute: 2500 },
  { month: 'Feb', nodes: 1800, users: 7500, compute: 4000 },
  { month: 'Mar', nodes: 3000, users: 12000, compute: 7500 },
  { month: 'Apr', nodes: 4200, users: 18000, compute: 12000 },
  { month: 'May', nodes: 6000, users: 25000, compute: 18000 },
  { month: 'Jun', nodes: 8500, users: 35000, compute: 27000 },
  { month: 'Jul', nodes: 12000, users: 48000, compute: 40000 },
  { month: 'Aug', nodes: 14000, users: 60000, compute: 55000 },
  { month: 'Sep', nodes: 16000, users: 75000, compute: 68000 },
];

// Partner data
const partners = [
  {
    name: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    description: "Blockchain partner providing the foundation for our token and smart contracts",
    category: "blockchain"
  },
  {
    name: "NVIDIA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/2560px-Nvidia_logo.svg.png",
    description: "Hardware partnership for GPU compute solutions and AI acceleration",
    category: "technology"
  },
  {
    name: "Lambda Labs",
    logo: "https://lambda-search-public.s3.us-west-2.amazonaws.com/assets/lambda-logo.png",
    description: "Strategic partnership for GPU infrastructure and cloud computing",
    category: "technology"
  },
  {
    name: "Hugging Face",
    logo: "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg",
    description: "Integration partner for AI models and research collaboration",
    category: "ai"
  },
  {
    name: "RunPod",
    logo: "https://assets-global.website-files.com/61fd4eb76a8d78bc0676b47d/62a191243b1bc46bda903e0d_runpod.svg",
    description: "Cloud GPU partner expanding our compute marketplace capabilities",
    category: "technology"
  },
  {
    name: "Scale AI",
    logo: "https://scale.com/file/general/Scale_Logo.png",
    description: "AI data labeling and training dataset partnership",
    category: "ai"
  },
  {
    name: "CoreWeave",
    logo: "https://assets.website-files.com/63f580596efa74629ceecdf5/646cd0619971b53448df3cea_Coreweave-logo.svg",
    description: "Infrastructure partner for high-performance computing solutions",
    category: "technology"
  },
  {
    name: "Anthropic",
    logo: "https://storage.googleapis.com/anthropic-website-assets/logo-light.svg",
    description: "AI research partnership for advanced model integration",
    category: "ai"
  },
  {
    name: "Chainlink",
    logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    description: "Oracle integration for decentralized data feeds",
    category: "blockchain"
  },
  {
    name: "Stability AI",
    logo: "https://stability.ai/assets/images/stability-ai-logo.svg",
    description: "Collaboration on image generation models and training",
    category: "ai"
  },
  {
    name: "Alchemy",
    logo: "https://www.alchemy.com/images/logo.svg",
    description: "Web3 infrastructure and development tools partner",
    category: "blockchain"
  },
  {
    name: "AMD",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/2560px-AMD_Logo.svg.png",
    description: "Hardware partner for MI-series GPU compute solutions",
    category: "technology"
  }
];

// Integration data
const integrations = [
  {
    name: "PyTorch",
    description: "Deep integration with PyTorch for model training and deployment",
    category: "development",
    icon: <Code className="h-6 w-6" />
  },
  {
    name: "TensorFlow",
    description: "Native support for TensorFlow models and workflows",
    category: "development",
    icon: <Code className="h-6 w-6" />
  },
  {
    name: "Docker",
    description: "Containerized workload management across the network",
    category: "infrastructure",
    icon: <Network className="h-6 w-6" />
  },
  {
    name: "Kubernetes",
    description: "Orchestration for distributed compute workloads",
    category: "infrastructure",
    icon: <Network className="h-6 w-6" />
  },
  {
    name: "GitHub",
    description: "CI/CD integration for automated model deployment",
    category: "development",
    icon: <Code className="h-6 w-6" />
  },
  {
    name: "Jupyter",
    description: "Interactive notebook support for model development",
    category: "development",
    icon: <Code className="h-6 w-6" />
  },
  {
    name: "Prometheus",
    description: "Monitoring and observability for compute nodes",
    category: "infrastructure",
    icon: <Network className="h-6 w-6" />
  },
  {
    name: "Grafana",
    description: "Visualization for network performance metrics",
    category: "infrastructure",
    icon: <Network className="h-6 w-6" />
  },
  {
    name: "Phantom Wallet",
    description: "Native integration with Phantom for Solana token management",
    category: "blockchain",
    icon: <Globe className="h-6 w-6" />
  },
  {
    name: "MetaMask",
    description: "Ethereum wallet support for cross-chain functionality",
    category: "blockchain",
    icon: <Globe className="h-6 w-6" />
  },
  {
    name: "AWS",
    description: "Cloud backup and failover capabilities",
    category: "infrastructure",
    icon: <Network className="h-6 w-6" />
  },
  {
    name: "Zapier",
    description: "Workflow automation with thousands of applications",
    category: "development",
    icon: <Code className="h-6 w-6" />
  }
];

// Events data
const events = [
  {
    name: "Neurolov Developer Conference",
    date: "June 15-17, 2024",
    location: "San Francisco, CA",
    description: "Our annual flagship conference for developers and partners",
    url: "#"
  },
  {
    name: "AI Summit London",
    date: "July 5-6, 2024",
    location: "London, UK",
    description: "Exhibiting our latest AI capabilities and network features",
    url: "#"
  },
  {
    name: "Solana Breakpoint",
    date: "August 12-14, 2024",
    location: "Singapore",
    description: "Presenting Neurolov's blockchain integration and token ecosystem",
    url: "#"
  },
  {
    name: "GPU Technology Conference",
    date: "September 22-24, 2024",
    location: "Tokyo, Japan",
    description: "Showcasing our distributed compute infrastructure",
    url: "#"
  },
  {
    name: "Web3 Innovation Summit",
    date: "October 10-11, 2024",
    location: "Berlin, Germany",
    description: "Panel discussions on decentralized AI infrastructure",
    url: "#"
  },
  {
    name: "Global AI Hackathon",
    date: "November 18-20, 2024",
    location: "Virtual Event",
    description: "Build applications on the Neurolov platform and win prizes",
    url: "#"
  }
];

export default function EcosystemPage() {
  const [activeTab, setActiveTab] = useState("roadmap");
  const [partnerFilter, setPartnerFilter] = useState("all");
  const [integrationFilter, setIntegrationFilter] = useState("all");
  
  const filteredPartners = partnerFilter === "all" 
    ? partners 
    : partners.filter(partner => partner.category === partnerFilter);
    
  const filteredIntegrations = integrationFilter === "all"
    ? integrations
    : integrations.filter(integration => integration.category === integrationFilter);
  
  return (
    <PageLayout 
      title="Ecosystem" 
      subtitle="The growing Neurolov network of partners, integrations, and development milestones"
    >
      <SectionContainer className="pb-16">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              <TabsTrigger value="roadmap" className="px-6">
                <BookOpen className="mr-2 h-4 w-4" /> Roadmap
              </TabsTrigger>
              <TabsTrigger value="partners" className="px-6">
                <Users className="mr-2 h-4 w-4" /> Partners
              </TabsTrigger>
              <TabsTrigger value="integrations" className="px-6">
                <Code className="mr-2 h-4 w-4" /> Integrations
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Roadmap Tab */}
          <TabsContent value="roadmap" className="space-y-16">
            <div>
              <SectionHeading
                title="Development Roadmap"
                subtitle="Our journey to build the decentralized AI compute network of the future"
                badge="Roadmap"
              />
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[26px] top-0 bottom-0 w-px bg-neuro-500/20 md:hidden"></div>
                
                <div className="space-y-12">
                  {roadmapData.map((phase, index) => (
                    <div key={index} className="glass-card rounded-xl border border-neuro-500/10 overflow-hidden">
                      <div className={`py-4 px-6 ${
                        phase.status === "completed" ? "bg-green-500/10" : 
                        phase.status === "in-progress" ? "bg-amber-500/10" :
                        "bg-blue-500/10"
                      }`}>
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold">{phase.quarter}: {phase.title}</h3>
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            phase.status === "completed" ? "bg-green-500/20 text-green-500" : 
                            phase.status === "in-progress" ? "bg-amber-500/20 text-amber-500" :
                            "bg-blue-500/20 text-blue-500"
                          }`}>
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
                          {phase.milestones.map((milestone, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className={`flex-shrink-0 p-1 mr-3 mt-1 rounded-full ${
                                phase.status === "completed" ? "bg-green-500/10 text-green-500" : 
                                phase.status === "in-progress" ? "bg-amber-500/10 text-amber-500" :
                                "bg-blue-500/10 text-blue-500"
                              }`}>
                                {phase.status === "completed" ? (
                                  <CheckCircle2 className="h-3 w-3" />
                                ) : phase.status === "in-progress" ? (
                                  <div className="w-3 h-3 rounded-full bg-amber-500/60"></div>
                                ) : (
                                  <ArrowUpRight className="h-3 w-3" />
                                )}
                              </div>
                              <span className="text-sm">{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <SectionHeading
                title="Network Growth"
                subtitle="The Neurolov ecosystem is expanding rapidly across all metrics"
              />
              
              <div className="aspect-[21/9] w-full mb-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={growthData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="nodes" name="Active Nodes" stroke="#6366f1" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="users" name="Platform Users" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="compute" name="Compute Hours (K)" stroke="#f59e0b" strokeWidth={2} activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-neuro-500 mb-2">16,000+</div>
                  <div className="text-lg font-medium mb-1">Active Nodes</div>
                  <div className="text-sm text-muted-foreground">Across 92 countries worldwide</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neuro-500 mb-2">75,000+</div>
                  <div className="text-lg font-medium mb-1">Platform Users</div>
                  <div className="text-sm text-muted-foreground">Building with Neurolov</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-neuro-500 mb-2">68,000+</div>
                  <div className="text-lg font-medium mb-1">Compute Hours</div>
                  <div className="text-sm text-muted-foreground">Thousands of GPUs contributing</div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Upcoming Events"
                subtitle="Meet the Neurolov team at these events"
                badge="Events"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                  <Card key={index} className="glass-card border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-bold mb-1">{event.name}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{event.date}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-6 flex-grow">
                          {event.description}
                        </p>
                        
                        <Button variant="outline" size="sm" className="mt-auto flex items-center w-full" asChild>
                          <a href={event.url}>
                            Event Details
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Partners Tab */}
          <TabsContent value="partners" className="space-y-16">
            <div>
              <SectionHeading
                title="Our Partners"
                subtitle="Strategic alliances powering the Neurolov ecosystem"
                badge="Partnerships"
              />
              
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center rounded-lg bg-muted p-1 text-muted-foreground">
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      partnerFilter === 'all' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setPartnerFilter('all')}
                  >
                    All Partners
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      partnerFilter === 'technology' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setPartnerFilter('technology')}
                  >
                    Technology
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      partnerFilter === 'ai' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setPartnerFilter('ai')}
                  >
                    AI Research
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      partnerFilter === 'blockchain' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setPartnerFilter('blockchain')}
                  >
                    Blockchain
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPartners.map((partner, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg group">
                    <div className="h-16 mb-4 flex items-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="h-full max-h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
                  <p className="text-muted-foreground mb-6">
                    Join the Neurolov ecosystem as a strategic partner and help shape the future of 
                    decentralized AI compute. We offer various partnership programs tailored to 
                    different organizations.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Technology Integration</h4>
                        <p className="text-sm text-muted-foreground">Integrate your technology with our platform</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Research Collaboration</h4>
                        <p className="text-sm text-muted-foreground">Joint research initiatives and knowledge sharing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Go-to-Market Strategy</h4>
                        <p className="text-sm text-muted-foreground">Co-marketing and joint customer acquisition</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Strategic Investment</h4>
                        <p className="text-sm text-muted-foreground">Investment opportunities in the Neurolov ecosystem</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="neon">Apply for Partnership</Button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <h4 className="text-lg font-bold mb-4">Partner Testimonials</h4>
                    
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="text-4xl text-neuro-500/20 absolute -top-2 -left-2">"</div>
                        <div className="pt-4 pl-4">
                          <p className="text-sm italic mb-4">
                            Neurolov's decentralized compute network has been a game-changer for our AI research. 
                            We've been able to scale our training workloads at a fraction of the cost of traditional cloud providers.
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-neuro-500/20 flex items-center justify-center text-neuro-500 font-bold mr-3">
                              AR
                            </div>
                            <div>
                              <div className="font-medium">Dr. Alexandra Reynolds</div>
                              <div className="text-sm text-muted-foreground">Research Director, Anthropic</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="text-4xl text-neuro-500/20 absolute -top-2 -left-2">"</div>
                        <div className="pt-4 pl-4">
                          <p className="text-sm italic mb-4">
                            The integration with Neurolov has opened up new possibilities for our developer community. 
                            Their token-based incentive model aligns perfectly with our vision for web3 infrastructure.
                          </p>
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-neuro-500/20 flex items-center justify-center text-neuro-500 font-bold mr-3">
                              JK
                            </div>
                            <div>
                              <div className="font-medium">Jared Koury</div>
                              <div className="text-sm text-muted-foreground">VP Partnerships, Solana Foundation</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Featured Customer Success Stories"
                subtitle="How organizations are leveraging the Neurolov ecosystem"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg">
                  <div className="h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="BioGen AI Research" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">BioGen AI Research</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Reduced model training costs by 68% while increasing throughput using Neurolov's distributed compute network.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Read Case Study</Button>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg">
                  <div className="h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                      alt="QuantumLeap Finance" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">QuantumLeap Finance</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Deployed AI trading algorithms that process market data 5x faster using Neurolov's low-latency compute network.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Read Case Study</Button>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg">
                  <div className="h-40 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                      alt="TechFusion Studios" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">TechFusion Studios</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scaled video rendering operations by tapping into Neurolov's global GPU network, cutting rendering time by 75%.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">Read Case Study</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-16">
            <div>
              <SectionHeading
                title="Platform Integrations"
                subtitle="Neurolov connects seamlessly with your favorite tools and frameworks"
                badge="Integrations"
              />
              
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center rounded-lg bg-muted p-1 text-muted-foreground">
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      integrationFilter === 'all' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setIntegrationFilter('all')}
                  >
                    All Integrations
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      integrationFilter === 'development' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setIntegrationFilter('development')}
                  >
                    Development
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      integrationFilter === 'infrastructure' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setIntegrationFilter('infrastructure')}
                  >
                    Infrastructure
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded-md text-sm transition-all ${
                      integrationFilter === 'blockchain' ? 'bg-background text-foreground shadow-sm' : ''
                    }`}
                    onClick={() => setIntegrationFilter('blockchain')}
                  >
                    Blockchain
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredIntegrations.map((integration, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-neuro-500/20 to-blue-500/10 text-neuro-500 mb-4">
                      {integration.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Developer Integration" 
                    className="rounded-xl shadow-xl" 
                  />
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Developer Resources</h3>
                  <p className="text-muted-foreground mb-6">
                    Everything you need to integrate your applications with the Neurolov ecosystem. 
                    Our comprehensive documentation, SDKs, and sample code make it easy to get started.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">API Documentation</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive API references with examples</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">SDK Libraries</h4>
                        <p className="text-sm text-muted-foreground">Client libraries in Python, JavaScript, Go, and more</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Sample Projects</h4>
                        <p className="text-sm text-muted-foreground">Example applications to jumpstart your development</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-neuro-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Developer Community</h4>
                        <p className="text-sm text-muted-foreground">Active forums and Discord for support and collaboration</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button variant="neon">
                      <Code className="mr-2 h-4 w-4" />
                      Developer Portal
                    </Button>
                    <Button variant="outline">
                      <Users className="mr-2 h-4 w-4" />
                      Join Discord
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Code Sample"
                subtitle="Getting started with Neurolov is simple"
              />
              
              <div className="glass-card p-6 rounded-xl border border-neuro-500/10 overflow-hidden">
                <div className="flex mb-4">
                  <div className="inline-flex items-center rounded-lg bg-muted p-1 text-muted-foreground">
                    <button className="px-3 py-1.5 rounded-md text-sm bg-background text-foreground shadow-sm">
                      Python
                    </button>
                    <button className="px-3 py-1.5 rounded-md text-sm">
                      JavaScript
                    </button>
                    <button className="px-3 py-1.5 rounded-md text-sm">
                      Go
                    </button>
                  </div>
                </div>
                
                <div className="bg-black/90 text-green-400 p-6 rounded-md text-sm font-mono overflow-x-auto">
                  <pre className="language-python">
{`# Install the SDK
# pip install neurolov-sdk

import neurolov
from neurolov.models import TextGeneration, ImageGeneration
from neurolov.compute import GPUNode

# Initialize client with your API key
client = neurolov.Client(api_key="YOUR_API_KEY")

# Find available GPU nodes
available_nodes = client.compute.find_nodes(
    gpu_type="NVIDIA_A100",
    vram_gb=80,
    count=4
)

# Start a compute job
job = client.compute.create_job(
    nodes=available_nodes,
    container="pytorch/pytorch:latest",
    command="python train.py --model gpt3 --dataset my_data.jsonl",
    input_data="s3://my-bucket/training-data/",
    output_path="s3://my-bucket/model-output/"
)

# Monitor job progress
job.wait()
print(f"Job completed with status: {job.status}")

# Or use the high-level AI models API
response = client.models.text.generate(
    model="neuro-text-l",
    prompt="Explain quantum computing in simple terms",
    max_tokens=500
)

print(response.text)

# Generate an image
image = client.models.image.generate(
    model="neuro-image-2",
    prompt="A futuristic city with flying cars and neon lights",
    size="1024x1024"
)

image.save("futuristic_city.png")`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>
      
      <SectionContainer className="py-16 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-dots-light bg-[size:20px_20px] opacity-20"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4">
              <span>Join the Revolution</span>
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Become Part of the Neurolov Ecosystem</h2>
            
            <p className="text-muted-foreground mb-6">
              Whether you're a developer looking to build on our platform, a GPU owner wanting to earn tokens, 
              or an investor interested in the future of decentralized AI compute, there's a place for you 
              in the Neurolov ecosystem.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">1</div>
                <div>
                  <h4 className="font-medium">Join our community</h4>
                  <p className="text-sm text-muted-foreground">Connect with like-minded developers and enthusiasts</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">2</div>
                <div>
                  <h4 className="font-medium">Participate in token presale</h4>
                  <p className="text-sm text-muted-foreground">Get NLOV tokens at the best possible price</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">3</div>
                <div>
                  <h4 className="font-medium">Build your first application</h4>
                  <p className="text-sm text-muted-foreground">Use our SDKs to integrate with your projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">4</div>
                <div>
                  <h4 className="font-medium">Share your compute resources</h4>
                  <p className="text-sm text-muted-foreground">Earn NLOV by contributing to the network</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="neon" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Join Discord
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-neuro-500/30 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl opacity-40"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="Neurolov Community" 
                className="rounded-xl shadow-xl" 
              />
              
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                <div className="text-lg font-bold mb-1">Global Community</div>
                <p className="text-sm text-muted-foreground">
                  Join thousands of developers, researchers, and enthusiasts building the future of AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
}
