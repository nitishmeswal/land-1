import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from '@/components/ui/container';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import { Cpu, Code, Network, Bot, Server, Braces, Database, Terminal, Shield, Zap } from 'lucide-react';

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("compute");
  
  return (
    <PageLayout 
      title="Products & Services" 
      subtitle="Explore our suite of AI and compute solutions powering the decentralized future"
    >
      <SectionContainer className="pb-16">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="compute" className="px-6">
                <Cpu className="mr-2 h-4 w-4" /> Compute
              </TabsTrigger>
              <TabsTrigger value="ai-models" className="px-6">
                <Code className="mr-2 h-4 w-4" /> AI Models
              </TabsTrigger>
              <TabsTrigger value="swarm" className="px-6">
                <Network className="mr-2 h-4 w-4" /> Swarm Network
              </TabsTrigger>
              <TabsTrigger value="agents" className="px-6">
                <Bot className="mr-2 h-4 w-4" /> AI Agents
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Compute Tab */}
          <TabsContent value="compute" className="space-y-16">
            <div>
              <SectionHeading
                title="Decentralized Compute Infrastructure"
                subtitle="Access powerful GPU resources on demand for AI training, inference, and compute-intensive tasks"
                badge="GPU Compute"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="GPU Marketplace"
                  description="Rent GPUs from a global network of providers at competitive rates. Pay only for what you use with flexible pricing options."
                  icon={<Server className="h-6 w-6" />}
                  index={1}
                />
                <FeatureCard
                  title="Distributed Training"
                  description="Scale your AI model training across multiple nodes for faster results. Supports popular frameworks like PyTorch and TensorFlow."
                  icon={<Database className="h-6 w-6" />}
                  index={2}
                />
                <FeatureCard
                  title="Secure Containers"
                  description="Run your workloads in isolated, secure containers. Full control over your environment with custom dependencies."
                  icon={<Shield className="h-6 w-6" />}
                  index={3}
                />
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Become a Provider</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our network of GPU providers and earn NLOV tokens for sharing your compute resources. 
                    Our platform makes it easy to monetize your idle hardware.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="neon">Join Provider Network</Button>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                    alt="GPU Hardware" 
                    className="rounded-lg w-full h-64 object-cover shadow-lg" 
                  />
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                title="Technical Specifications"
                subtitle="Our compute platform supports a wide range of hardware configurations to meet your needs"
              />
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-6 text-left">GPU Type</th>
                      <th className="py-4 px-6 text-left">VRAM</th>
                      <th className="py-4 px-6 text-left">Performance</th>
                      <th className="py-4 px-6 text-left">Cost (NLOV/hr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">NVIDIA A100</td>
                      <td className="py-4 px-6">80GB</td>
                      <td className="py-4 px-6">High</td>
                      <td className="py-4 px-6">25 NLOV</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">NVIDIA H100</td>
                      <td className="py-4 px-6">80GB</td>
                      <td className="py-4 px-6">Ultra</td>
                      <td className="py-4 px-6">50 NLOV</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">NVIDIA L40</td>
                      <td className="py-4 px-6">48GB</td>
                      <td className="py-4 px-6">High</td>
                      <td className="py-4 px-6">20 NLOV</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">NVIDIA RTX 4090</td>
                      <td className="py-4 px-6">24GB</td>
                      <td className="py-4 px-6">Medium</td>
                      <td className="py-4 px-6">10 NLOV</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-4 px-6">AMD MI250</td>
                      <td className="py-4 px-6">128GB</td>
                      <td className="py-4 px-6">High</td>
                      <td className="py-4 px-6">30 NLOV</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* AI Models Tab */}
          <TabsContent value="ai-models" className="space-y-16">
            <div>
              <SectionHeading
                title="AI Models as a Service"
                subtitle="Access and deploy state-of-the-art AI models through our API and platform"
                badge="AI Solutions"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Text Generation"
                  description="Create content, answer questions, and have natural conversations with our advanced language models."
                  icon={<Braces className="h-6 w-6" />}
                  index={1}
                />
                <FeatureCard
                  title="Image Generation"
                  description="Generate stunning visuals, artwork, and graphics from text descriptions using diffusion models."
                  icon={<Terminal className="h-6 w-6" />}
                  index={2}
                />
                <FeatureCard
                  title="Audio & Video"
                  description="Create voiceovers, music, video clips, and animations with our multimodal AI systems."
                  icon={<Zap className="h-6 w-6" />}
                  index={3}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
                <h3 className="text-xl font-bold mb-4">Model Fine-tuning</h3>
                <p className="text-muted-foreground mb-6">
                  Customize our models to your specific domain or use case. Our fine-tuning service lets you create specialized AI models with your own data.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Upload your training data securely</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Choose parameters and training settings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm">Deploy and integrate with your systems</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Start Fine-tuning</Button>
              </div>
              
              <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
                <h3 className="text-xl font-bold mb-4">API Integration</h3>
                <p className="text-muted-foreground mb-6">
                  Seamlessly integrate our AI models into your applications with our developer-friendly API. Simple, powerful, and scalable.
                </p>
                <div className="bg-black/90 text-green-400 p-4 rounded-md text-sm font-mono mb-6 overflow-x-auto">
                  <pre>
{`// Sample API call
const response = await fetch('https://api.neurolov.ai/v1/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    model: 'neuro-text-v2',
    prompt: 'Write a creative story about AI',
    max_tokens: 500
  })
});`}
                  </pre>
                </div>
                <Button variant="outline" className="w-full">Get API Access</Button>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Available Models"
                subtitle="Choose from our growing library of AI models for different use cases"
              />
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-6 text-left">Model Name</th>
                      <th className="py-4 px-6 text-left">Type</th>
                      <th className="py-4 px-6 text-left">Size</th>
                      <th className="py-4 px-6 text-left">Use Case</th>
                      <th className="py-4 px-6 text-left">Cost (NLOV/1K tokens)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">Neuro-Text-S</td>
                      <td className="py-4 px-6">Language</td>
                      <td className="py-4 px-6">7B</td>
                      <td className="py-4 px-6">General text, chat</td>
                      <td className="py-4 px-6">0.1 NLOV</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">Neuro-Text-L</td>
                      <td className="py-4 px-6">Language</td>
                      <td className="py-4 px-6">70B</td>
                      <td className="py-4 px-6">Complex reasoning</td>
                      <td className="py-4 px-6">0.5 NLOV</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">Neuro-Image-2</td>
                      <td className="py-4 px-6">Diffusion</td>
                      <td className="py-4 px-6">2B</td>
                      <td className="py-4 px-6">Image generation</td>
                      <td className="py-4 px-6">2 NLOV</td>
                    </tr>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="py-4 px-6">Neuro-Audio</td>
                      <td className="py-4 px-6">Audio</td>
                      <td className="py-4 px-6">1.5B</td>
                      <td className="py-4 px-6">Speech, music</td>
                      <td className="py-4 px-6">3 NLOV</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="py-4 px-6">Neuro-Video</td>
                      <td className="py-4 px-6">Multi-modal</td>
                      <td className="py-4 px-6">5B</td>
                      <td className="py-4 px-6">Video generation</td>
                      <td className="py-4 px-6">10 NLOV</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Swarm Network Tab */}
          <TabsContent value="swarm" className="space-y-16">
            <div>
              <SectionHeading
                title="Decentralized Swarm Network"
                subtitle="Join our peer-to-peer network of compute providers and users"
                badge="Network Infrastructure"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Distributed Processing"
                  description="Break complex tasks into smaller units for parallel processing across the network, reducing time and cost."
                  icon={<Server className="h-6 w-6" />}
                  index={1}
                />
                <FeatureCard
                  title="Fault Tolerance"
                  description="Automatic node failover and task reassignment ensures your jobs complete even if individual nodes go offline."
                  icon={<Shield className="h-6 w-6" />}
                  index={2}
                />
                <FeatureCard
                  title="Resource Optimization"
                  description="Intelligent scheduling allocates tasks to the most suitable nodes based on hardware capabilities and load."
                  icon={<Zap className="h-6 w-6" />}
                  index={3}
                />
              </div>
            </div>
            
            <div className="relative py-16">
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-full max-w-4xl h-[500px] opacity-10">
                  <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#6366f1" stroke-width="2" fill="none">
                      <circle cx="400" cy="250" r="100" />
                      <circle cx="200" cy="150" r="50" />
                      <circle cx="600" cy="150" r="50" />
                      <circle cx="200" cy="350" r="50" />
                      <circle cx="600" cy="350" r="50" />
                      <line x1="400" y1="250" x2="200" y2="150" />
                      <line x1="400" y1="250" x2="600" y2="150" />
                      <line x1="400" y1="250" x2="200" y2="350" />
                      <line x1="400" y1="250" x2="600" y2="350" />
                      <line x1="200" y1="150" x2="600" y2="150" />
                      <line x1="200" y1="350" x2="600" y2="350" />
                    </g>
                  </svg>
                </div>
              </div>
              
              <div className="relative z-10 glass-card p-8 rounded-xl border border-neuro-500/10 max-w-lg mx-auto">
                <h3 className="text-2xl font-bold mb-4">Monetize Your Hardware</h3>
                <p className="text-muted-foreground mb-6">
                  Turn your idle computing resources into a passive income stream. Join our swarm network as a provider and earn NLOV tokens.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500">1</div>
                    <div>
                      <h4 className="font-medium">Install Node Software</h4>
                      <p className="text-sm text-muted-foreground">Simple setup on Windows, Mac, or Linux</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500">2</div>
                    <div>
                      <h4 className="font-medium">Configure Resources</h4>
                      <p className="text-sm text-muted-foreground">Choose what to share and when</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500">3</div>
                    <div>
                      <h4 className="font-medium">Earn NLOV Tokens</h4>
                      <p className="text-sm text-muted-foreground">Get paid automatically as you contribute</p>
                    </div>
                  </div>
                </div>
                <Button variant="neon" className="w-full">Join the Swarm</Button>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Network Statistics"
                subtitle="Live insights into our growing decentralized infrastructure"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 text-center">
                  <h4 className="text-muted-foreground mb-2">Active Nodes</h4>
                  <div className="text-4xl font-bold text-neuro-500">14,738</div>
                </div>
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 text-center">
                  <h4 className="text-muted-foreground mb-2">Countries</h4>
                  <div className="text-4xl font-bold text-neuro-500">97</div>
                </div>
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 text-center">
                  <h4 className="text-muted-foreground mb-2">Total GPUs</h4>
                  <div className="text-4xl font-bold text-neuro-500">35,412</div>
                </div>
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 text-center">
                  <h4 className="text-muted-foreground mb-2">NLOV Distributed</h4>
                  <div className="text-4xl font-bold text-neuro-500">3.4M</div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* AI Agents Tab */}
          <TabsContent value="agents" className="space-y-16">
            <div>
              <SectionHeading
                title="Autonomous AI Agents"
                subtitle="Deploy intelligent agents to automate tasks and workflows"
                badge="Automation"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Workflow Automation"
                  description="Build end-to-end process automation with AI agents that can handle complex decision trees and business logic."
                  icon={<Bot className="h-6 w-6" />}
                  index={1}
                />
                <FeatureCard
                  title="Data Analysis"
                  description="Deploy agents that continuously monitor data sources, generate insights, and alert you to important trends."
                  icon={<Database className="h-6 w-6" />}
                  index={2}
                />
                <FeatureCard
                  title="Smart Contracts"
                  description="Create AI-powered smart contracts that can make decisions based on real-world data and complex conditions."
                  icon={<Code className="h-6 w-6" />}
                  index={3}
                />
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                    alt="AI Robot" 
                    className="rounded-lg w-full h-64 object-cover shadow-lg" 
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">No-Code Agent Builder</h3>
                  <p className="text-muted-foreground mb-6">
                    Create sophisticated AI agents without writing a single line of code. Our visual builder lets you design, test, and deploy agents in minutes.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Drag-and-drop interface</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Pre-built templates for common use cases</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                        <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">Easy integration with APIs and data sources</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="neon">Try Agent Builder</Button>
                    <Button variant="outline">View Demo</Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Use Cases"
                subtitle="Discover how organizations are leveraging our AI agents"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h4 className="font-bold text-lg mb-3">Financial Services</h4>
                  <p className="text-muted-foreground mb-4">
                    AI agents continuously monitoring market conditions and executing trades based on predefined strategies. 
                    Algorithmic trading with the flexibility to adapt to changing conditions.
                  </p>
                  <Button variant="outline" size="sm">Read Case Study</Button>
                </div>
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h4 className="font-bold text-lg mb-3">Healthcare</h4>
                  <p className="text-muted-foreground mb-4">
                    Agents processing medical data and generating preliminary analyses to assist doctors. 
                    Automated scheduling and patient follow-up to improve care coordination.
                  </p>
                  <Button variant="outline" size="sm">Read Case Study</Button>
                </div>
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h4 className="font-bold text-lg mb-3">Supply Chain</h4>
                  <p className="text-muted-foreground mb-4">
                    Agents optimizing inventory management and logistics in real-time. 
                    Predictive maintenance scheduling to prevent equipment failures and downtime.
                  </p>
                  <Button variant="outline" size="sm">Read Case Study</Button>
                </div>
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h4 className="font-bold text-lg mb-3">Customer Service</h4>
                  <p className="text-muted-foreground mb-4">
                    Intelligent agents handling customer inquiries and routing complex cases to human agents.
                    Personalized recommendations and proactive support.
                  </p>
                  <Button variant="outline" size="sm">Read Case Study</Button>
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
        
        <div className="text-center mb-12">
          <SectionHeading
            title="Ready to Get Started?"
            subtitle="Choose the plan that's right for you and start building with Neurolov"
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1 glass-card p-8 rounded-xl border border-neuro-500/10 text-center">
              <h3 className="text-xl font-bold mb-2">Developer</h3>
              <div className="text-4xl font-bold mb-2">Free</div>
              <p className="text-muted-foreground mb-6">Perfect for exploration and small projects</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">100 NLOV tokens monthly</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Access to basic models</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-neuro-500/10 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Community support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Sign Up Free</Button>
            </div>
            
            <div className="flex-1 glass-card p-8 rounded-xl border border-neuro-500/20 bg-gradient-to-br from-neuro-500/5 to-blue-500/5 text-center relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 bg-neuro-500 text-white text-xs font-bold px-4 py-1">POPULAR</div>
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="text-4xl font-bold mb-2">$99<span className="text-lg">/mo</span></div>
              <p className="text-muted-foreground mb-6">For teams and professional applications</p>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-neuro-500/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">5,000 NLOV tokens monthly</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-neuro-500/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Access to all models</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-neuro-500/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-neuro-500/20 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-3 w-3 text-neuro-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Advanced agent features</span>
                </li>
              </ul>
              <Button variant="neon" className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
}
