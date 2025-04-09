import React from "react";
import { SectionContainer } from "@/components/ui/Container";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  FileText,
  Book,
  Video,
  MessageSquare,
  ArrowUpRight,
  Newspaper,
  GraduationCap,
  Github,
} from "lucide-react";

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API references for developers",
    icon: <FileText className="h-6 w-6" />,
    links: [
      { text: "Getting Started Guide", url: "/docs/getting-started" },
      { text: "API Reference", url: "/docs/api" },
      { text: "SDK Documentation", url: "/docs/sdk" },
    ],
  },
  {
    title: "Technical Papers",
    description: "Research papers and technical specifications",
    icon: <Book className="h-6 w-6" />,
    links: [
      { text: "Whitepaper", url: "/whitepaper" },
      { text: "Technical Architecture", url: "/docs/architecture" },
      { text: "Research Publications", url: "/research" },
    ],
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides and demonstrations",
    icon: <Video className="h-6 w-6" />,
    links: [
      { text: "Platform Overview", url: "/tutorials/overview" },
      { text: "Developer Tutorials", url: "/tutorials/dev" },
      { text: "Use Case Examples", url: "/tutorials/examples" },
    ],
  },
  {
    title: "Community",
    description: "Join our community and get support",
    icon: <MessageSquare className="h-6 w-6" />,
    links: [
      { text: "Discord Community", url: "https://discord.gg/neurolov" },
      { text: "Developer Forum", url: "/forum" },
      {
        text: "GitHub Discussions",
        url: "https://github.com/neurolov/discussions",
      },
    ],
  },
  {
    title: "Blog & Updates",
    description: "Latest news, updates, and technical articles",
    icon: <Newspaper className="h-6 w-6" />,
    links: [
      { text: "Technical Blog", url: "/blog" },
      { text: "Release Notes", url: "/releases" },
      { text: "Ecosystem Updates", url: "/updates" },
    ],
  },
  {
    title: "Learning Hub",
    description: "Educational resources and training materials",
    icon: <GraduationCap className="h-6 w-6" />,
    links: [
      { text: "Learning Paths", url: "/learn" },
      { text: "Certification Program", url: "/certification" },
      { text: "Best Practices", url: "/best-practices" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <PageLayout
      title="Resources"
      subtitle="Everything you need to build on Neurolov"
    >
      <SectionContainer className="pb-16">
        {/* Featured Resources */}
        <div className="mb-16">
          <SectionHeading
            className="md:flex md:flex-col md:items-center md:justify-center"
            title="Developer Resources"
            subtitle="Access comprehensive documentation, tutorials, and support to help you build on Neurolov"
            badge="Resources"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="group hover:border-neuro-500/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-neuro-500/10 text-neuro-500">
                      {resource.icon}
                    </div>
                    <CardTitle>{resource.title}</CardTitle>
                  </div>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Button
                          variant="ghost"
                          className="w-full justify-between group/link"
                          asChild
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.text}
                            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                          </a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GitHub Section */}
        <div className="glass-card p-8 rounded-xl border border-neuro-500/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <div className="flex items-center gap-3 mb-4">
                <Github className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Open Source</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Our core infrastructure is open source. Contribute to our
                repositories, submit issues, and help us build the future of
                decentralized AI computing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="neon" asChild>
                  <a
                    href="https://github.com/neurolov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/neurolov/contribute"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contribution Guide
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1556075798-4825dfaaf498"
                alt="Open Source Collaboration"
                className="rounded-lg w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
}
