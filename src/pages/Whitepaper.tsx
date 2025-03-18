import React from 'react';
import { SectionContainer } from '@/components/ui/Container';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { FileText, Download, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

export default function WhitepaperPage() {
  return (
    <PageLayout 
      title="Whitepaper" 
      subtitle="Technical overview of the Neurolov platform"
    >
      <SectionContainer className="pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Download Section */}
          <Card className="mb-12 p-6 border-neuro-500/20">
            <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-6 p-0">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neuro-500/10">
                  <FileText className="h-8 w-8 text-neuro-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Neurolov Whitepaper v1.0</h3>
                  <p className="text-sm text-muted-foreground">PDF • 2.5 MB • Last updated March 2025</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="neon" className="gap-2">
                  <ArrowUpRight className="h-4 w-4" />
                  Read Online
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Table of Contents */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2>Table of Contents</h2>
            <ol className="space-y-4">
              <li>
                <h3>Introduction</h3>
                <ul className="text-muted-foreground">
                  <li>Background and Motivation</li>
                  <li>Vision and Mission</li>
                  <li>Market Overview</li>
                </ul>
              </li>
              <li>
                <h3>Technical Architecture</h3>
                <ul className="text-muted-foreground">
                  <li>System Overview</li>
                  <li>Network Infrastructure</li>
                  <li>Security Model</li>
                  <li>Scalability Solutions</li>
                </ul>
              </li>
              <li>
                <h3>Token Economics</h3>
                <ul className="text-muted-foreground">
                  <li>Token Utility</li>
                  <li>Distribution Model</li>
                  <li>Incentive Mechanisms</li>
                  <li>Governance Structure</li>
                </ul>
              </li>
              <li>
                <h3>Product Suite</h3>
                <ul className="text-muted-foreground">
                  <li>Compute Infrastructure</li>
                  <li>AI Services</li>
                  <li>Developer Tools</li>
                  <li>Enterprise Solutions</li>
                </ul>
              </li>
              <li>
                <h3>Roadmap and Development</h3>
                <ul className="text-muted-foreground">
                  <li>Technical Milestones</li>
                  <li>Business Development</li>
                  <li>Community Growth</li>
                </ul>
              </li>
              <li>
                <h3>Team and Partners</h3>
                <ul className="text-muted-foreground">
                  <li>Core Team</li>
                  <li>Advisors</li>
                  <li>Strategic Partners</li>
                </ul>
              </li>
            </ol>

            <div className="mt-12 p-6 rounded-xl bg-muted">
              <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
              <p className="text-sm text-muted-foreground">
                This whitepaper is for informational purposes only and does not constitute 
                investment advice. The information contained herein is subject to change 
                as the project evolves. Please refer to our official channels for the 
                most up-to-date information.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
}
