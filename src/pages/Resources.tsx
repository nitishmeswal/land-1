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
import { DiscordIcon, TelegramIcon, DevToIcon, MediumIcon, IndieHackersIcon } from "@/components/icons/social-icons";

const resources = [
  {
    title: "Technical Papers",
    description: "Research papers and technical specifications",
    icon: <Book className="h-6 w-6" />,
    links: [
      { text: "Whitepaper", url: "/whitepaper" },
      { text: "Tokenomics", url: "/docs/architecture" },
      { text: "Pitchdeck", url: "/research" },
    ],
  },
  
  {
    title: "Community",
    description: "Join our community and get support",
    icon: <MessageSquare className="h-6 w-6" />,
    links: [
      { 
        text: "Discord Community", 
        url: "https://discord.gg/neurolov",
        icon: <DiscordIcon className="text-[#5865F2]" />
      },
      { 
        text: "Developer's Community", 
        url: "https://dev.to/neurolov_ai_",
        icon: <DevToIcon className="text-black dark:text-white" />
      },
      { 
        text: "Telegram Community", 
        url: "https://t.me/neurolovcommunity",
        icon: <TelegramIcon className="text-[#26A5E4]" />
      },
    ],
  },
  {
    title: "Blog & Updates",
    description: "Latest news, updates, and technical articles",
    icon: <Newspaper className="h-6 w-6" />,
    links: [
      { 
        text: "Medium", 
        url: "https://neurolov.medium.com/",
        icon: <MediumIcon className="text-black dark:text-white" />
      },
      { 
        text: "Indie Hacker", 
        url: "https://www.indiehackers.com/Neurolovai",
        icon: <IndieHackersIcon className="text-[#0E2439]" />
      },
      { 
        text: "Dev.to", 
        url: "https://dev.to/neurolov_ai_",
        icon: <DevToIcon className="text-black dark:text-white" />
      },
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
                            className="group/link flex items-center gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="flex items-center gap-2">
                              {link.icon}
                              {link.text}
                            </div>
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
      </SectionContainer>
    </PageLayout>
  );
}
