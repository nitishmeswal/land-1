"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from "@/components/ui/Container";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import FeatureCard from "@/components/common/FeatureCard";
import ResponsiveImage from "@/components/common/ResponsiveImage";
import {
  Cpu,
  Code,
  Network,
  Bot,
  Server,
  Braces,
  Database,
  Terminal,
  Shield,
  Zap,
  Image,
  Music,
  Video,
  Box,
  UserSquare2,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import AIModelCard from "@/components/common/AIModelCard";

export default function ProductsPage() {
  const { tab = "compute" } = useParams();
  const navigate = useNavigate();

  const handleTabChange = (value: string) => {
    navigate(`/products/${value}`);
  };

  return (
    <PageLayout
      title="Products & Services"
      subtitle="Explore our suite of AI and compute solutions powering the decentralized future"
    >
      <SectionContainer className="pb-16">
        <Tabs value={tab} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-16 md:mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <TabsTrigger value="compute" className="px-6">
                <Cpu className="mr-2 h-4 w-4" /> Compute
              </TabsTrigger>
              <TabsTrigger value="ai-models" className="px-6">
                <Code className="mr-2 h-4 w-4" /> AI Models
              </TabsTrigger>
              <TabsTrigger value="swarm" className="px-6">
                <Network className="mr-2 h-4 w-4" /> Neuro Swarm
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
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  onLearnMoreClick={() => {
                    window.open(
                      "https://neurolov.medium.com/neurolov-gpu-compute-platform-beta-launch-powering-the-future-of-ai-with-scalable-gpu-compute-cef5bf5193b0"
                    );
                  }}
                  title="GPU Marketplace"
                  description="Rent GPUs from a global network of providers at competitive rates. Pay only for what you use with flexible pricing options."
                  icon={<Server className="h-6 w-6" />}
                  index={1}
                  alwaysActive={true}
                />
                <FeatureCard
                  title="Distributed Training"
                  description="Scale your AI model training across multiple nodes for faster results. Supports popular frameworks like PyTorch and TensorFlow."
                  icon={<Database className="h-6 w-6" />}
                  index={2}
                  alwaysActive={true}
                />
                <FeatureCard
                  title="Models Bag"
                  description="Run your Models in isolated, secure containers. Full control over your environment with custom dependencies."
                  icon={<Shield className="h-6 w-6" />}
                  index={3}
                  alwaysActive={true}
                />
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl border border-#0361DA/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Become a Provider</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our network of GPU providers and earn NLOV tokens for
                    sharing your compute resources. Our platform makes it easy
                    to monetize your idle hardware.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      variant="neon"
                      onClick={() =>
                        window.open(
                          "https://app.neurolov.ai/gpu-marketplace",
                          "_blank"
                        )
                      }
                    >
                      Join Compute Network
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <ResponsiveImage
                    src="/compute.png"
                    alt="GPU Computing Infrastructure"
                    desktopSize={{ width: 600, height: 400 }}
                    tabletRatio={0.75}
                    mobileRatio={0.5}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl border border-#0361DA/10">
              <h3 className="text-2xl font-bold mb-6">
                Available GPU Specifications
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-6 text-left">GPU Model</th>
                      <th className="py-4 px-6 text-left">Memory</th>
                      <th className="py-4 px-6 text-left">CUDA Cores</th>
                      <th className="py-4 px-6 text-left">Tensor Cores</th>
                      <th className="py-4 px-6 text-left">Price (NLOV/hr)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6">NVIDIA H100</td>
                      <td className="py-4 px-6">80GB HBM3</td>
                      <td className="py-4 px-6">18,432</td>
                      <td className="py-4 px-6">576</td>
                      <td className="py-4 px-6">50 NLOV</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NVIDIA GeForce RTX 4090</td>
                      <td className="py-4 px-6">24GB GDDR6X</td>
                      <td className="py-4 px-6">16,384</td>
                      <td className="py-4 px-6">512</td>
                      <td className="py-4 px-6">20 NLOV</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NVIDIA RTX 3090 Ti</td>
                      <td className="py-4 px-6">24GB GDDR6X</td>
                      <td className="py-4 px-6">10,752</td>
                      <td className="py-4 px-6">336</td>
                      <td className="py-4 px-6">10 NLOV</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NVIDIA A6000</td>
                      <td className="py-4 px-6">48GB GDDR6</td>
                      <td className="py-4 px-6">10,752</td>
                      <td className="py-4 px-6">336</td>
                      <td className="py-4 px-6">30 NLOV</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NVIDIA A5000</td>
                      <td className="py-4 px-6">24GB GDDR6</td>
                      <td className="py-4 px-6">8,192</td>
                      <td className="py-4 px-6">256</td>
                      <td className="py-4 px-6">25 NLOV</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">NVIDIA A4000</td>
                      <td className="py-4 px-6">16GB GDDR6</td>
                      <td className="py-4 px-6">6,144</td>
                      <td className="py-4 px-6">192</td>
                      <td className="py-4 px-6">15 NLOV</td>
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
                title="AI Model Categories"
                subtitle="Explore our comprehensive suite of AI models for various creative and technical applications"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AIModelCard
                  id="neurolov-image"
                  name="Neuro Image Gen"
                  description="Advanced AI image generation. Create stunning visuals with our cutting-edge technology. Faster, Smarter and Limitless"
                  features={[
                    "Hyper-realistic Quality",
                    "Stunning HD Quality",
                    "Unlimited & Free",
                    "100% Ad-Free",
                  ]}
                  isNew
                  isBeta
                  redirectedPage="neurolov-image"
                />
                <AIModelCard
                  id="freedom-ai"
                  name="Freedom-AI"
                  description="Engage in unrestricted conversations without any censorship or limitations. Dive in with your thoughts. Ask anything and get unfiltered responses."
                  features={[
                    "Unrestricted conversations",
                    "No topic limitations",
                    "Unfiltered responses",
                    "Advanced context understanding",
                  ]}
                  isNew
                  isBeta
                  redirectedPage="ai-models/freedom-ai"
                />
                <AIModelCard
                  id="text-to-3d"
                  name="3D Creator Pro"
                  description="Transform text descriptions into stunning 3D models. Create detailed meshes, sculptures, and objects using advanced AI technology."
                  features={[
                    "Text to 3D model generation",
                    "Multiple output formats",
                    "NeRF video rendering",
                    "Advanced mesh controls",
                  ]}
                  isNew
                  isBeta
                  redirectedPage="ai-models/text-to-3d"
                />
                <AIModelCard
                  id="text-to-video"
                  name="AI Video Generator"
                  description="Create stunning videos from text descriptions or transform existing videos with AI-powered effects and enhancements."
                  features={[
                    "Text to video generation",
                    "Video enhancement & upscaling",
                    "Style transfer & effects",
                    "Multiple output formats",
                  ]}
                  isNew
                  isBeta
                  redirectedPage="ai-models/video"
                />
                <AIModelCard
                  id="music-ai"
                  name="AI Music Studio"
                  description="Create original music, generate melodies, and produce professional-grade audio with our AI-powered music studio."
                  features={[
                    "Text to music generation",
                    "Music style transfer",
                    "Multi-instrument composition",
                    "Professional audio quality",
                  ]}
                  isNew
                  isBeta
                  redirectedPage="ai-models/music-ai"
                />
                <AIModelCard
                  id="deepfake"
                  name="AI Deepfake Studio"
                  description="Create stunning face swaps in images and videos using advanced AI technology."
                  features={[
                    "Single face swap in images",
                    "Multiple face swap in images",
                    "Face swap in videos",
                    "High-quality results",
                  ]}
                  isNew
                  isBeta
                  redirectedPage="ai-models/deepfake"
                />
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl border border-#0361DA/10">
              <h3 className="text-2xl font-bold mb-6">Model Specifications</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-6 text-left">Model Name</th>
                      <th className="py-4 px-6 text-left">Category</th>
                      <th className="py-4 px-6 text-left">Parameters</th>
                      <th className="py-4 px-6 text-left">Context Window</th>
                      <th className="py-4 px-6 text-left">Use Cases</th>
                      <th className="py-4 px-6 text-left">Cost (NLOV)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4 px-6">NeuralText-70B</td>
                      <td className="py-4 px-6">Text/Code</td>
                      <td className="py-4 px-6">70B</td>
                      <td className="py-4 px-6">128K</td>
                      <td className="py-4 px-6">Text, Code, Analysis</td>
                      <td className="py-4 px-6">0.5/1K tokens</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NeuroVision-XL</td>
                      <td className="py-4 px-6">Image</td>
                      <td className="py-4 px-6">3.5B</td>
                      <td className="py-4 px-6">2048x2048</td>
                      <td className="py-4 px-6">Generation, Editing</td>
                      <td className="py-4 px-6">2.0/image</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NeuroVoice-Pro</td>
                      <td className="py-4 px-6">Audio</td>
                      <td className="py-4 px-6">1.2B</td>
                      <td className="py-4 px-6">30s clips</td>
                      <td className="py-4 px-6">TTS, Music</td>
                      <td className="py-4 px-6">1.0/minute</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NeuroMotion-4K</td>
                      <td className="py-4 px-6">Video</td>
                      <td className="py-4 px-6">5.5B</td>
                      <td className="py-4 px-6">4K/60fps</td>
                      <td className="py-4 px-6">Animation, Effects</td>
                      <td className="py-4 px-6">5.0/minute</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-4 px-6">NeuroAvatar-HD</td>
                      <td className="py-4 px-6">Synthetic</td>
                      <td className="py-4 px-6">2.8B</td>
                      <td className="py-4 px-6">1080p</td>
                      <td className="py-4 px-6">Face Synthesis</td>
                      <td className="py-4 px-6">3.0/render</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">Neuro3D-Pro</td>
                      <td className="py-4 px-6">3D/XR</td>
                      <td className="py-4 px-6">2.1B</td>
                      <td className="py-4 px-6">High-poly</td>
                      <td className="py-4 px-6">3D Generation</td>
                      <td className="py-4 px-6">4.0/model</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Swarm Network Tab */}
          <TabsContent value="swarm" className="space-y-4">
            <div>
              <SectionHeading
                title="Decentralized Neuro Swarm"
                subtitle="Join our peer-to-peer network of compute providers and users"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Distributed Processing"
                  description="Break complex tasks into smaller units for parallel processing across the network, reducing time and cost."
                  icon={<Server className="h-6 w-6" />}
                  index={1}
                  alwaysActive={true}
                />
                <FeatureCard
                  title="Fault Tolerance"
                  description="Automatic node failover and task reassignment ensures your jobs complete even if individual nodes go offline."
                  icon={<Shield className="h-6 w-6" />}
                  index={2}
                  alwaysActive={true}
                />
                <FeatureCard
                  title="Resource Optimization"
                  description="Intelligent scheduling allocates tasks to the most suitable nodes based on hardware capabilities and load."
                  icon={<Zap className="h-6 w-6" />}
                  index={3}
                  alwaysActive={true}
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

              <div className="relative z-10 glass-card p-8 rounded-xl border border-#0361DA/10 max-w-lg mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Monetize Your Hardware
                </h3>
                <p className="text-muted-foreground mb-6">
                  Turn your idle computing resources into a passive income
                  stream. Join our swarm network as a provider and earn NLOV
                  tokens.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-#0361DA/10 rounded-full flex items-center justify-center text-#0361DA">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Install Node Software</h4>
                      <p className="text-sm text-muted-foreground">
                        Simple setup on Windows, Mac, or Linux
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-#0361DA/10 rounded-full flex items-center justify-center text-#0361DA">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Configure Resources</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose what to share and when
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-#0361DA/10 rounded-full flex items-center justify-center text-#0361DA">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Earn NLOV Tokens</h4>
                      <p className="text-sm text-muted-foreground">
                        Get paid automatically as you contribute
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button
                    variant="neon"
                    size="lg"
                    onClick={() => {
                      window.open(
                        "http://swarm.neurolov.ai",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    Join the Swarm
                  </Button>
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
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Workflow Automation"
                  description="Build end-to-end process automation with AI agents that can handle complex decision trees and business logic."
                  icon={<Bot className="h-6 w-6" />}
                  index={1}
                  alwaysActive={true}
                />
                <FeatureCard
                  title="Data Analysis"
                  description="Deploy agents that continuously monitor data sources, generate insights, and alert you to important trends."
                  icon={<Database className="h-6 w-6" />}
                  index={2}
                  alwaysActive={true}
                />
                <FeatureCard
                  title="Smart Contracts"
                  description="Create AI-powered smart contracts that can make decisions based on real-world data and complex conditions."
                  icon={<Code className="h-6 w-6" />}
                  index={3}
                  alwaysActive={true}
                />
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl border border-#0361DA/10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                    alt="AI Robot"
                    className="rounded-lg w-full h-64 object-cover shadow-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">
                    No-Code Agent Builder
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Create sophisticated AI agents without writing a single line
                    of code. Our visual builder lets you design, test, and
                    deploy agents in minutes.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-#0361DA/10 rounded-full p-1 mr-3 mt-1">
                        <svg
                          className="h-3 w-3 text-#0361DA"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">User Friendly</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-#0361DA/10 rounded-full p-1 mr-3 mt-1">
                        <svg
                          className="h-3 w-3 text-#0361DA"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">
                        Pre-built templates for common use cases
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 bg-#0361DA/10 rounded-full p-1 mr-3 mt-1">
                        <svg
                          className="h-3 w-3 text-#0361DA"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm">Easy integration</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="neon">AI-Agents coming soon</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </PageLayout>
  );
}
