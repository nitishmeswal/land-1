
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from '@/components/ui/Container';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import { Users, BookOpen, Github, Linkedin, Twitter, Globe, Mail, ArrowUpRight } from 'lucide-react';

// Team data
const teamMembers = [
  {
    name: "Dr. Elena Zhang",
    role: "CEO & Co-Founder",
    bio: "Former research lead at OpenAI with 15+ years of experience in AI and distributed systems. PhD in Computer Science from Stanford University.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Alexander Morgan",
    role: "CTO & Co-Founder",
    bio: "Previously led engineering at NVIDIA's AI research division. Expert in GPU optimization and high-performance computing. MIT Computer Science graduate.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Sophia Chen",
    role: "Chief Product Officer",
    bio: "Former product lead at Google AI and Meta Reality Labs. Specializes in AI product development and user experience. MBA from Harvard Business School.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Daniel Williams",
    role: "Head of Blockchain",
    bio: "Blockchain architect with experience at Solana Foundation and Ethereum. Expert in token economics and decentralized governance systems.",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Olivia Rodriguez",
    role: "Chief Research Officer",
    bio: "Leading AI researcher with focus on multi-modal models and distributed learning. Previously at DeepMind. PhD in Machine Learning from UC Berkeley.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "James Kim",
    role: "VP of Business Development",
    bio: "Former partnership lead at NVIDIA and AWS. Expert in strategic alliances and enterprise sales. MBA from Wharton School of Business.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  }
];

// Advisor data
const advisors = [
  {
    name: "Dr. Michael Reynolds",
    role: "Technical Advisor",
    bio: "Professor of Computer Science at MIT specializing in distributed systems and blockchain technology. Published over 100 research papers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    name: "Sarah Johnson",
    role: "AI Ethics Advisor",
    bio: "Leading expert on AI ethics and policy. Former advisor to UN AI initiatives and technology policy consultant for multiple governments.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "Richard Chan",
    role: "Business Advisor",
    bio: "Seasoned venture capitalist with over 20 years of experience. Partner at Sequoia Capital with focus on AI and blockchain investments.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
  }
];

// Company milestones
const milestones = [
  {
    year: "2022",
    title: "Inception",
    description: "Neurolov founded with the vision of democratizing access to AI compute resources."
  },
  {
    year: "2023",
    title: "Seed Funding",
    description: "Raised $5M in seed funding from leading VCs to develop the initial platform."
  },
  {
    year: "2023",
    title: "Alpha Launch",
    description: "Released alpha version to select partners, achieving 100+ node network."
  },
  {
    year: "2024",
    title: "Public Beta",
    description: "Public beta launch with over 1000 GPU nodes and 5000 users."
  },
  {
    year: "2024",
    title: "Token Launch",
    description: "NLOV token deployed with successful presale and initial exchange listings."
  }
];

// Core values
const coreValues = [
  {
    title: "Decentralization",
    description: "We believe in removing central points of control to create a more resilient and democratized AI ecosystem."
  },
  {
    title: "Accessibility",
    description: "Making advanced AI capabilities accessible to everyone, not just large corporations with vast resources."
  },
  {
    title: "Sustainability",
    description: "Building a network that efficiently utilizes computing resources to minimize environmental impact."
  },
  {
    title: "Community",
    description: "Fostering a vibrant community of developers, providers, and users who collectively shape the platform's future."
  },
  {
    title: "Innovation",
    description: "Continuously pushing the boundaries of what's possible at the intersection of AI and blockchain technology."
  },
  {
    title: "Transparency",
    description: "Operating with openness in our governance, development, and business practices."
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("team");
  
  return (
    <PageLayout 
      title="About Neurolov" 
      subtitle="Our team, mission, and vision for the future of AI computing"
    >
      <SectionContainer className="pb-16">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-12">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <TabsTrigger value="team" className="px-6">
                <Users className="mr-2 h-4 w-4" /> Team
              </TabsTrigger>
              <TabsTrigger value="mission" className="px-6">
                <BookOpen className="mr-2 h-4 w-4" /> Mission
              </TabsTrigger>
              <TabsTrigger value="vision" className="px-6">
                <Globe className="mr-2 h-4 w-4" /> Vision
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-16">
            <div>
              <SectionHeading
                title="Our Leadership Team"
                subtitle="Meet the experts building the future of decentralized AI"
                badge="Core Team"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg group">
                    <div className="mb-4 flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-neuro-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-neuro-500 text-sm">{member.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    
                    <div className="flex space-x-2">
                      {member.social.twitter && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Our Advisors"
                subtitle="Industry experts guiding our strategic direction"
                badge="Advisors"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {advisors.map((advisor, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg group">
                    <div className="mb-4 flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={advisor.image} 
                          alt={advisor.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{advisor.name}</h3>
                        <p className="text-neuro-500 text-sm">{advisor.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{advisor.bio}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-neuro-500/30 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl opacity-40"></div>
              
              <div className="relative z-10">
                <SectionHeading
                  title="Join Our Team"
                  subtitle="Build the future of decentralized AI with us"
                />
                
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-muted-foreground mb-6">
                    We're looking for passionate people who want to help us build the infrastructure 
                    for the next generation of AI applications. If you're excited about AI, blockchain, 
                    and decentralized systems, we'd love to hear from you.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <div className="glass-card p-5 rounded-lg border border-neuro-500/10 w-64">
                      <h4 className="font-bold mb-2">Engineering</h4>
                      <ul className="text-sm text-muted-foreground text-left space-y-1">
                        <li>• Senior Blockchain Engineer</li>
                        <li>• AI Infrastructure Lead</li>
                        <li>• Full-Stack Developer</li>
                        <li>• DevOps Engineer</li>
                      </ul>
                    </div>
                    <div className="glass-card p-5 rounded-lg border border-neuro-500/10 w-64">
                      <h4 className="font-bold mb-2">Product & Design</h4>
                      <ul className="text-sm text-muted-foreground text-left space-y-1">
                        <li>• Product Manager</li>
                        <li>• UX/UI Designer</li>
                        <li>• Technical Writer</li>
                      </ul>
                    </div>
                    <div className="glass-card p-5 rounded-lg border border-neuro-500/10 w-64">
                      <h4 className="font-bold mb-2">Business & Operations</h4>
                      <ul className="text-sm text-muted-foreground text-left space-y-1">
                        <li>• Business Development</li>
                        <li>• Community Manager</li>
                        <li>• Marketing Specialist</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button variant="neon">
                      View Open Positions
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      careers@neurolov.ai
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Our Journey"
                subtitle="Key milestones in the Neurolov story"
                badge="Timeline"
              />
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[26px] top-0 bottom-0 w-px bg-neuro-500/20 md:hidden"></div>
                <div className="hidden md:block absolute left-0 top-1/2 w-full h-px bg-neuro-500/20"></div>
                
                <div className="md:grid md:grid-cols-5 gap-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative mb-12 md:mb-0">
                      {/* Mobile timeline node */}
                      <div className="md:hidden absolute left-0 top-0 w-12 h-12 rounded-full bg-neuro-500/10 flex items-center justify-center border-4 border-background z-10">
                        <span className="font-bold">{milestone.year}</span>
                      </div>
                      
                      {/* Desktop timeline node */}
                      <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-neuro-500/10 flex items-center justify-center border-4 border-background z-10">
                        <span className="font-bold">{milestone.year}</span>
                      </div>
                      
                      <div className="pl-20 md:pl-0 md:mt-8">
                        <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Mission Tab */}
          <TabsContent value="mission" className="space-y-16">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <SectionHeading
                  title="Our Mission"
                  subtitle="Democratizing access to AI compute and capabilities"
                  badge="Mission"
                  align="left"
                />
                
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5 mb-6">
                  <p className="text-xl italic text-center">
                    "To create a decentralized network that makes AI computing accessible to everyone, 
                    empowering innovation while maximizing efficiency of global compute resources."
                  </p>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  At Neurolov, we believe that the future of AI should be open, accessible, and equitable. 
                  Our mission is to break down the barriers that currently restrict access to AI compute 
                  resources and ensure that the benefits of artificial intelligence can be realized by 
                  innovators and creators of all sizes, not just large corporations.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  By building a decentralized network that connects GPU providers with AI users, we're 
                  creating a more efficient ecosystem where unused compute resources can be shared and 
                  utilized to their full potential, reducing waste and democratizing access.
                </p>
                
                <p className="text-muted-foreground">
                  We're committed to an open, transparent approach to development, with a strong focus 
                  on building a sustainable community-governed platform where all stakeholders have a voice.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-neuro-500/30 rounded-full blur-3xl opacity-40"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl opacity-40"></div>
                  
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                    alt="Neurolov Team Collaboration" 
                    className="rounded-xl shadow-xl" 
                  />
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="Core Values"
                subtitle="The principles that guide everything we do"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-neuro-500/20 to-blue-500/10 text-neuro-500 mb-4">
                      <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">How We Work</h3>
                  <p className="text-muted-foreground mb-6">
                    Neurolov operates as a distributed team across the globe, embracing remote work 
                    and asynchronous collaboration. Our culture reflects our product: decentralized, 
                    efficient, and accessible.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">1</div>
                      <div>
                        <h4 className="font-medium">Open Source Collaboration</h4>
                        <p className="text-sm text-muted-foreground">Many of our core components are developed in the open, with community contributions.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">2</div>
                      <div>
                        <h4 className="font-medium">Agile Development</h4>
                        <p className="text-sm text-muted-foreground">Two-week sprint cycles with regular public releases and transparent roadmap.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">3</div>
                      <div>
                        <h4 className="font-medium">Community-First</h4>
                        <p className="text-sm text-muted-foreground">Our development priorities are shaped by the needs of our community and network participants.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">4</div>
                      <div>
                        <h4 className="font-medium">Research-Driven</h4>
                        <p className="text-sm text-muted-foreground">Continuous innovation backed by rigorous research and testing.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <div className="aspect-video relative">
                    <iframe 
                      className="absolute w-full h-full rounded-xl shadow-lg" 
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
                      title="Neurolov Company Culture" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                <h3 className="text-xl font-bold mb-4">Social Impact</h3>
                <p className="text-muted-foreground mb-4">
                  We're committed to ensuring that AI advancement benefits humanity. 
                  Our Neurolov Foundation allocates 2% of all network fees to support 
                  AI education and research in underserved communities.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Foundation Initiatives
                </Button>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-muted-foreground mb-4">
                  Our network is designed to optimize resource utilization, reducing 
                  energy waste. We also prioritize integrating with providers that use 
                  renewable energy sources to power their hardware.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Environmental Impact
                </Button>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                <h3 className="text-xl font-bold mb-4">Ethics & Governance</h3>
                <p className="text-muted-foreground mb-4">
                  We maintain high ethical standards through our AI Ethics Committee and 
                  community governance processes, ensuring our technology is used responsibly.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ethics Framework
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* Vision Tab */}
          <TabsContent value="vision" className="space-y-16">
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-neuro-500/30 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl opacity-40"></div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4">
                  <span>Our Vision</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  A World Where AI Compute is as <span className="hero-text-gradient">Accessible as Electricity</span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8">
                  We envision a future where anyone with an idea can access the computing 
                  power needed to build advanced AI solutions, creating a more innovative, 
                  equitable, and prosperous world.
                </p>
                
                <Button variant="neon" size="lg">
                  Join Our Mission
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <SectionHeading
                  title="The Future We're Building"
                  subtitle="Our long-term vision for Neurolov and the AI ecosystem"
                  badge="Long-term Vision"
                  align="left"
                />
                
                <p className="text-muted-foreground mb-6">
                  We believe that the current centralized model of AI compute is holding back 
                  innovation and limiting the benefits of AI to a select few organizations with 
                  massive resources. Our vision is to fundamentally transform this paradigm.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-4 font-bold">1</div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Ubiquitous AI Compute</h4>
                      <p className="text-muted-foreground">
                        A world where AI compute is available everywhere, on demand, at competitive prices, 
                        enabling innovation from individuals and organizations of all sizes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-4 font-bold">2</div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Community Ownership</h4>
                      <p className="text-muted-foreground">
                        A platform truly owned by its users, with decisions made through transparent 
                        governance and benefits distributed fairly to all contributors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-4 font-bold">3</div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">Global Resource Optimization</h4>
                      <p className="text-muted-foreground">
                        Maximizing the utility of computing resources worldwide by creating a marketplace 
                        where idle capacity can be shared and utilized efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
                    alt="AI Future Vision" 
                    className="rounded-xl shadow-xl" 
                  />
                  
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                    <div className="text-lg font-bold mb-1">By 2030</div>
                    <p className="text-sm text-muted-foreground">
                      We aim to power over 50% of the world's AI workloads through our decentralized network.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <SectionHeading
                title="The Impact We Envision"
                subtitle="How Neurolov will transform the AI landscape"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h3 className="text-xl font-bold mb-3">Economic Empowerment</h3>
                  <p className="text-muted-foreground mb-4">
                    By allowing anyone to contribute computing resources to the network, 
                    we're creating new income streams for individuals and organizations 
                    worldwide. Hardware that would otherwise sit idle can now generate revenue.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We estimate that by 2025, our network will have distributed over $500 million 
                    worth of NLOV tokens to resource providers across the globe.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-neuro-500/30 to-blue-500/30 rounded-full"></div>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h3 className="text-xl font-bold mb-3">Innovation Acceleration</h3>
                  <p className="text-muted-foreground mb-4">
                    By dramatically reducing the cost barrier to AI development, we'll 
                    enable a new wave of innovation from startups, researchers, and independent 
                    developers who previously couldn't afford the necessary computing resources.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We project that by 2026, over 10,000 AI startups will be built on top of the 
                    Neurolov infrastructure, creating solutions we haven't even imagined yet.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-neuro-500/30 to-blue-500/30 rounded-full"></div>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h3 className="text-xl font-bold mb-3">Environmental Benefits</h3>
                  <p className="text-muted-foreground mb-4">
                    Optimizing the use of existing hardware reduces the need for building new data 
                    centers. Our intelligent workload distribution system also routes jobs to locations 
                    with renewable energy when possible.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We aim to reduce the carbon footprint of AI computing by 35% compared to 
                    traditional centralized models by 2027.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-neuro-500/30 to-blue-500/30 rounded-full"></div>
                </div>
                
                <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                  <h3 className="text-xl font-bold mb-3">Democratized AI Governance</h3>
                  <p className="text-muted-foreground mb-4">
                    By shifting control from central corporations to a distributed community, 
                    we're ensuring that the future of AI is shaped by diverse voices representing 
                    global interests, not just commercial priorities.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Our goal is to have the most diverse DAO in tech, with representation from 
                    over 100 countries actively participating in governance by 2028.
                  </p>
                  <div className="w-full h-1 bg-gradient-to-r from-neuro-500/30 to-blue-500/30 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl border border-neuro-500/10 text-center">
              <SectionHeading
                title="Join Us in Shaping the Future"
                subtitle="Be part of the decentralized AI revolution"
              />
              
              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground mb-8">
                  Our vision is ambitious, but achievable with the support of a global community 
                  of developers, compute providers, users, and investors who share our belief in 
                  the transformative potential of decentralized AI infrastructure.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button variant="neon">
                    Join Our Community
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    Become a Node Provider
                  </Button>
                  <Button variant="outline">
                    Explore Developer Docs
                  </Button>
                </div>
                
                <div className="flex justify-center space-x-6 text-muted-foreground">
                  <a href="#" className="hover:text-foreground transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="hover:text-foreground transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </PageLayout>
  );
}
