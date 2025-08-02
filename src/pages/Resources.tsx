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
import {
  DiscordIcon,
  TelegramIcon,
  DevToIcon,
  MediumIcon,
  IndieHackersIcon,
} from "@/components/icons/social-icons";
import { PatternBackground } from "@/components/common/Highlight";
import { getAllBlogs } from '@/utils/blogLoader';
import { useState } from 'react';

const resources = [
  {
    title: "Technical Papers",
    description: "Research papers and technical specifications",
    icon: <Book className="h-6 w-6" />,
    links: [
      {
        text: "Whitepaper",
        url: "/resources/White Paper.pdf",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        text: "Tokenomics",
        url: "/resources/Tokonomics.pdf",
        icon: <FileText className="h-4 w-4" />,
      },
      {
        text: "Pitch Deck",
        url: "https://drive.google.com/drive/folders/180NDE65yPcvFnBfuuZ8dM-Gu3PQvHH_Y",
        icon: <FileText className="h-4 w-4" />,
        external: true
      },
      {
        text: "Elevator Pitch",
        url: "/resources/ev.pdf",
        icon: <FileText className="h-4 w-4" />
      },
    ],
  },

  {
    title: "Community",
    description: "Join our community and get support",
    icon: <MessageSquare className="h-6 w-6" />,
    links: [
      {
        text: "Discord Community",
        url: "https://discord.gg/Bu7BnZ85kb",
        icon: <DiscordIcon className="text-[#5865F2]" />,
      },
      {
        text: "Developer's Community",
        url: "https://dev.to/neurolov_ai_",
        icon: <DevToIcon className="text-black dark:text-white" />,
      },
      {
        text: "Telegram Community",
        url: "https://t.me/neurolovcommunity",
        icon: <TelegramIcon className="text-[#26A5E4]" />,
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
        icon: <MediumIcon className="text-black dark:text-white" />,
      },
      {
        text: "Indie Hacker",
        url: "https://www.indiehackers.com/Neurolovai",
        icon: <IndieHackersIcon className="text-[#0E2439]" />,
      },
      // {
      //   text: "Dev.to",
      //   url: "https://dev.to/neurolov_ai_",
      //   icon: <DevToIcon className="text-black dark:text-white" />,
      // },
    ],
  },
];

console.log('DEBUG: Loaded blogs:', getAllBlogs().map(b => ({ slug: b.slug, title: b.title, date: b.date })));
export default function ResourcesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const allBlogs = getAllBlogs();
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);
  const currentBlogs = allBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <PatternBackground>
      <PageLayout
        title="Resources"
        subtitle="Everything you need to build on Neurolov"
      >
        <SectionContainer className="pb-16">
          {/* Featured Resources */}
          <div className="mb-16">
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-[100]">
              {resources.map((resource, index) => (
                <Card
                  key={index}
                  className="group hover:border-[#0361DA]/50 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#0361DA]/10 text-[#0361DA]">
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
              {/* Blog Cards */}
              {currentBlogs.map((blog) => (
                <Card key={blog.slug} className="group hover:border-[#0361DA]/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#0361DA]/10 text-[#0361DA]">
                        <Newspaper className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg mb-1 group-hover:text-[#0361DA] transition-colors">{blog.title}</CardTitle>
                    </div>
                    <CardDescription className="mb-2 text-xs text-muted-foreground">
                      {new Date(blog.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-32 object-cover object-center rounded-lg"
                        loading="lazy"
                      />
                      <p className="mb-2 text-sm text-muted-foreground">{blog.summary}</p>
                      <Button asChild variant="ghost" className="w-full justify-between group/link">
                        <a href={`/blog/${blog.slug}`} className="group/link flex items-center gap-2">
                          <span className="font-medium text-[#0361DA]">Read More</span>
                          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="flex items-center px-4">
                  Page {currentPage} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            )}
          </div>
        </SectionContainer>
      </PageLayout>
    </PatternBackground>
  );
}
