"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionContainer } from "@/components/ui/Container";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Users,
  BookOpen,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Team data
const teamMembers = [
  {
    name: "Dhruv Panchal",
    role: "CEO & Co-Founder",
    bio: "Visionary CEO of Neurolov, leading AI for global brands . Impacted 50K+ lives in 40+ countries. Signed $13M AI MOU with Govt. of Gujarat. UN-recognized humanitarian and innovation leader",
    image: "/ceo.png",
    social: {
      linkedin: "https://www.linkedin.com/in/dhruv-panchal-48617a1ba/",
    },
  },
  {
    name: "Adhik Joshi",
    role: " Co-Founder",
    bio: "Founder of ModelsLab & Stable Diffusion API, generating 800M+ images with 350K users and $1.2M ARR. 5+ years in AI/ML product development, full-stack engineering, and scalable API integrations",
    image: "/co-founder.png",
    social: {
      linkedin: "https://www.linkedin.com/in/adhikjoshi/",
    },
  },
  {
    name: "Gokul Ravindran",
    role: "Chief Technology Officer",
    bio: "With 9+ years in blockchain and cryptography, I’ve built smart contracts, exchange engines, and authored key whitepapers.Expert in zk-proofs, Layer 2, and privacy tech, with on-chain analysis for 10+ major projects",
    image: "/cto.png",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Ruzaliya Gubaidullina",
    role: "Chief Operating Officer",
    bio: "Ruzaliya Gubaidullina is a business strategist with deep expertise in growth, partnerships, and go-to-market execution.Before co-founding Neurolov, she led initiatives that drove revenue and scaled market reach",
    image: "/coo.png",
    social: {
      linkedin: "http://linkedin.com/in/ruzaliya-g-45331220b",
    },
  },
  {
    name: "Sparsh ",
    role: "Investor and Partner Relations",
    bio: "Founder of Hangout Corporations, 100k+ discord community. Web3 builder and AI/ML enthusiast, Sparsh brings a sharp focus on strategic partnerships, fundraising, and ecosystem growth. With a strong background in digital innovation, he helps position Neurolov at the forefront of decentralized AI and Web3 collaboration",
    image: "/kol.png",
    social: {
      linkedin:
        "https://www.linkedin.com/in/sparsh-gupta-72306b22b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    name: "Nitish Meswal",
    role: "Software Engineer",
    bio: "3+ years of experience in full-stack development, blockchain, MCP AI protocols, and dApps. Expert in MERN, AI automation, cybersecurity, and scalable Web3 solutions.Web3 Tech Lead at Neurolov",
    image: "/lead-dev.png",
    social: {
      github: "https://github.com/nitishmeswal",
      linkedin: "https://www.linkedin.com/in/nitish-meswal-a33365249",
    },
  },
  {
    name: "Ramesh Sharma ",
    role: "Business Analyst ",
    bio: "Leads Neurolov’s business growth, strategic roadmap, and ecosystem expansion. With deep expertise in AI, Web3, and DePIN markets, RK oversees token strategy, User and market research, and go-to-market execution",
    image: "/rk.png",
    social: {
      linkedin:
        "https://www.linkedin.com/in/rk-sharma-2b9385285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Dhruvanshi ",
    role: "Design Lead",
    bio: "Creative lead driving Neurolov’s brand identity and digital presence across Web3 and AI ecosystems. Manages visual branding, social media execution, and community engagement to amplify growth and global visibility",
    image: "/d-lead.png",
    social: {
      linkedin: "https://www.linkedin.com/in/dhruvanshi-vyas-631154299",
    },
  },
  {
    name: "Sanskar Lunawat",
    role: "Marketing Head",
    bio: "As a founding team member, Sanskar has built Neurolov’s brand from the ground up, combining strategic marketing with deep platform knowledge",
    image: "/m-lead.png",
    social: {
      linkedin:
        "https://www.linkedin.com/in/sanskar-lunavat?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Charu Keswani  ",
    role: "Community Manager",
    bio: "Charu fosters a vibrant and engaging community at Neurolov, ensuring seamless communication between users and the team. With a keen understanding of Web3 dynamics, she moderates discussions, organizes events, and enhances user experience.",
    image: "/kc.png",
    social: {
      linkedin: "https://in.linkedin.com/in/charu-keswani-a86506188",
    },
  },
];

// Advisor data
const advisors = [
  {
    name: "Chandra S Katta",
    role: "Technical Advisor ",
    bio: "COO of stealth AI/HPC startup | Ex-CTO at Bitfury 27+ years in tech leadership at Intel, Bitfury & emerging tech firms.Led $1B+ product innovations, holds multiple patents in AI/Blockchain efficiency.Awarded Intel’s Gordy Award for blockchain excellence.Cornell EMBA & Stanford GSB Executive Program graduate.Expert in Web3, tokenization, and sustainable tech strategy",
    image: "/technical.png",
    social: {
      linkedin:
        "https://www.linkedin.com/in/chandra-s-k-46b0a33?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  },
  {
    name: "Jesse Guglielmo ",
    role: "Strategy  Advisor ",
    bio: "CMO at Bracket (Binance Labs-backed) with 20+ years in marketing and $50M+ GTM revenue driven across fintech, consumer, entertainment & Web3. Ex-NYSE trader & former CEO of a top NYC creative agency.",
    image: "/strategy.png",
    social: {
      linkedin: "https://www.linkedin.com/in/jesseguglielmo/",
    },
  },
  {
    name: "Peter Yeo",
    role: " Business  Advisor ",
    bio: "Seasoned venture capitalist with over 20 years of experience. Partner at Sequoia Capital with focus on AI and blockchain investments.",
    image: "/business.png",
    social: {
      linkedin: "https://www.linkedin.com/in/peteryeo/",
    },
  },
  {
    name: "Claire Cawthon",
    role: "Marketing Advisor ",
    bio: "CMO at ForceField & Advisor at Kinetic Capital (280+ Web3 investments incl. Ethereum, Solana).Manages $145M+ in annual marketing budgets. 12+ years in tech, 6+ in Web3, advising top 100 blockchain projects. Award-winning strategist, expert in GTM and scaling past $5M+.",
    image: "/marketing.png",
    social: {
      linkedin: "https://www.linkedin.com/in/claire-cawthorn-bounaga-5a303753/",
    },
  },
  {
    name: "Umair Mirza",
    role: "Growth Advisor",
    bio: "Head of Marketing at TorusChain & Neoma Ventures Web3 marketing expert with global experience across the USA, UAE, Singapore & Malaysia.Founder of Omimiz.eth, with a track record in crypto, NFTs, and metaverse projects.Former CMO for Cloud City Metaverse & Narsun Studios.Specializes in community building, brand growth, and blockchain development",
    image: "/growth.png",
    social: {
      linkedin: "https://www.linkedin.com/in/umer-mirza-0a8487a0/",
    },
  },
];

// Company milestones
const milestones = [
  {
    year: "2022",
    title: "Inception",
    description:
      "Neurolov founded with the vision of democratizing access to AI compute resources.",
  },
  {
    year: "2023",
    title: "Seed Funding",
    description:
      "Raised $5M in seed funding from leading VCs to develop the initial platform.",
  },
  {
    year: "2023",
    title: "Alpha Launch",
    description:
      "Released alpha version to select partners, achieving 100+ node network.",
  },
  {
    year: "2024",
    title: "Public Beta",
    description: "Public beta launch with over 1000 GPU nodes and 5000 users.",
  },
  {
    year: "2024",
    title: "Token Launch",
    description:
      "NLOV token deployed with successful presale and initial exchange listings.",
  },
];

// Core values
const coreValues = [
  {
    title: "Decentralization",
    description:
      "We believe in removing central points of control to create a more resilient and democratized AI ecosystem.",
  },
  {
    title: "Accessibility",
    description:
      "Making advanced AI capabilities accessible to everyone, not just large corporations with vast resources.",
  },
  {
    title: "Sustainability",
    description:
      "Building a network that efficiently utilizes computing resources to minimize environmental impact.",
  },
  {
    title: "Community",
    description:
      "Fostering a vibrant community of developers, providers, and users who collectively shape the platform's future.",
  },
  {
    title: "Innovation",
    description:
      "Continuously pushing the boundaries of what's possible at the intersection of AI and blockchain technology.",
  },
  {
    title: "Transparency",
    description:
      "Operating with openness in our governance, development, and business practices.",
  },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <PageLayout
      title="About Neurolov"
      subtitle="Our team, mission, and vision for the future of AI computing"
    >
      <SectionContainer className="pb-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12 md:mb-8">
            <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
              <TabsTrigger
                value="team"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                <Users className="mr-2 h-4 w-4" /> Team
              </TabsTrigger>
              <TabsTrigger
                value="mission"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
              >
                <BookOpen className="mr-2 h-4 w-4" /> Mission
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Team Tab */}
          <TabsContent value="team" className="space-y-16">
            <div>
              <SectionHeading
                title="Our Leadership Team"
                subtitle="Meet the experts building the future of decentralized AI"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 relative min-h-[320px]"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="text-sm text-blue-400">{member.role}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-12">
                      {member.bio}
                    </p>

                    <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-blue-400 transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-blue-400 transition-colors"
                        >
                          <Github className="h-5 w-5" />
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
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {advisors.map((advisor, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl border border-white/10 hover:border-neuro-500/20 transition-all duration-300 relative min-h-[320px]"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={advisor.image}
                          alt={advisor.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium">{advisor.name}</h3>
                        <p className="text-sm text-blue-400">{advisor.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-12">
                      {advisor.bio}
                    </p>
                    <div className="absolute bottom-6 left-6 flex items-center space-x-3">
                      {advisor.social.linkedin && (
                        <a
                          href={advisor.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-blue-400 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Mission Tab */}
          <TabsContent value="mission" className="space-y-16">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/2">
                <SectionHeading
                  title="Our Mission"
                  subtitle="Democratizing access to AI compute and capabilities"
                  align={useIsMobile() ? "center" : "left"}
                />

                <div className="glass-card p-6 rounded-xl border border-neuro-500/10 bg-gradient-to-br from-neuro-500/5 to-blue-500/5 mb-6">
                  <p className="text-xl italic text-center">
                    "To create a decentralized network that makes AI computing
                    accessible to everyone, empowering innovation while
                    maximizing efficiency of global compute resources."
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 text-center md:text-left px-2 md:px-0">
                  At Neurolov, we believe that the future of AI should be open,
                  accessible, and equitable. Our mission is to break down the
                  barriers that currently restrict access to AI compute
                  resources and ensure that the benefits of artificial
                  intelligence can be realized by innovators and creators of all
                  sizes, not just large corporations.
                </p>
                {useIsMobile() && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neuro-500/20 to-transparent my-5"></div>
                )}

                <p className="text-muted-foreground mb-6 text-center md:text-left px-2 md:px-0">
                  By building a decentralized network that connects GPU
                  providers with AI users, we're creating a more efficient
                  ecosystem where unused compute resources can be shared and
                  utilized to their full potential, reducing waste and
                  democratizing access.
                </p>
                {useIsMobile() && (
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neuro-500/20 to-transparent my-5"></div>
                )}
                <p className="text-muted-foreground text-center md:text-left px-2 md:px-0">
                  We're committed to an open, transparent approach to
                  development, with a strong focus on building a sustainable
                  community-governed platform where all stakeholders have a
                  voice.
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
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl border border-neuro-500/10 hover:border-neuro-500/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4">
                      <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">How We Work</h3>
                  <p className="text-muted-foreground mb-6">
                    Neurolov operates as a distributed team across the globe,
                    embracing remote work and asynchronous collaboration. Our
                    culture reflects our product: decentralized, efficient, and
                    accessible.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Open Source Collaboration
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Many of our core components are developed in the open,
                          with community contributions.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Agile Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Two-week sprint cycles with regular public releases
                          and transparent roadmap.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Community-First</h4>
                        <p className="text-sm text-muted-foreground">
                          Our development priorities are shaped by the needs of
                          our community and network participants.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-neuro-500/10 rounded-full flex items-center justify-center text-neuro-500 mr-3">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Research-Driven</h4>
                        <p className="text-sm text-muted-foreground">
                          Continuous innovation backed by rigorous research and
                          testing.
                        </p>
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
                  We're committed to ensuring that AI advancement benefits
                  humanity. Our Neurolov Foundation allocates 2% of all network
                  fees to support AI education and research in underserved
                  communities.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Foundation Initiatives
                </Button>
              </div>

              <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-muted-foreground mb-4">
                  Our network is designed to optimize resource utilization,
                  reducing energy waste. We also prioritize integrating with
                  providers that use renewable energy sources to power their
                  hardware.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Environmental Impact
                </Button>
              </div>

              <div className="glass-card p-6 rounded-xl border border-neuro-500/10">
                <h3 className="text-xl font-bold mb-4">Ethics & Governance</h3>
                <p className="text-muted-foreground mb-4">
                  We maintain high ethical standards through our AI Ethics
                  Committee and community governance processes, ensuring our
                  technology is used responsibly.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Ethics Framework
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </SectionContainer>
    </PageLayout>
  );
}
