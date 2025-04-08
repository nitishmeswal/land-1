import React from 'react';
import { SectionContainer } from '@/components/ui/Container';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Presentation, Download, ArrowUpRight, Lock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function PitchDeckPage() {
  return (
    <PageLayout 
      title="Pitch Deck" 
      subtitle="Investment overview and business presentation"
    >
      <SectionContainer className="pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Access Card */}
          <Card className="mb-12 p-6 border-neuro-500/20">
            <CardContent className="flex flex-col sm:flex-row items-center justify-between gap-6 p-0">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neuro-500/10">
                  <Presentation className="h-8 w-8 text-neuro-500" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Neurolov Pitch Deck 2025</h3>
                  <p className="text-sm text-muted-foreground">PowerPoint & PDF • 15 MB • Last updated March 2025</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button variant="neon" className="gap-2">
                  <ArrowUpRight className="h-4 w-4" />
                  View Online
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* NDA Notice */}
          <Alert className="mb-12">
            <Lock className="h-4 w-4" />
            <AlertDescription>
              This pitch deck contains confidential information. By accessing this document, 
              you agree to our non-disclosure terms.
            </AlertDescription>
          </Alert>

          {/* Deck Preview */}
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">Investment Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Market Opportunity</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>$500B AI compute market by 2030</li>
                    <li>Growing demand for decentralized infrastructure</li>
                    <li>First-mover advantage in key markets</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Competitive Edge</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Proprietary optimization technology</li>
                    <li>Strategic partnerships with key players</li>
                    <li>Strong IP portfolio</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Traction</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>50,000+ registered developers</li>
                    <li>$10M+ in committed infrastructure</li>
                    <li>Growing enterprise pipeline</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Team</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Ex-Google AI leadership</li>
                    <li>Successful serial entrepreneurs</li>
                    <li>World-class advisory board</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Financial Projections</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Revenue Growth</h4>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neuro-500 to-blue-500 w-[85%]"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Projected 8.5x growth in 2025</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">User Acquisition</h4>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neuro-500 to-blue-500 w-[70%]"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">500k users by Q4 2025</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Network Growth</h4>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-neuro-500 to-blue-500 w-[60%]"></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">60% network utilization target</p>
                  </div>
                </div>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Investment Terms</h2>
              <Card className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Round Details</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Series A funding round</li>
                      <li>$50M target raise</li>
                      <li>$500M valuation cap</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Use of Funds</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Product development (40%)</li>
                      <li>Market expansion (30%)</li>
                      <li>Team growth (20%)</li>
                      <li>Operations (10%)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
}
