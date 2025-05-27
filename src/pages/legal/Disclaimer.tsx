"use client";
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { SectionContainer } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

export default function Disclaimer() {
  return (
    <PageLayout title="Disclaimer">
      <SectionContainer className="py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Disclaimer"
            subtitle="Last Updated: May 21, 2025"
            className="mb-12"
          />
          
          {/* Summary Box */}
          <div className="bg-neuro-900/5 p-6 rounded-lg mb-12">
            <h3 className="text-lg font-semibold mb-4">Important Notice</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Warranty:</strong> All services are provided "as is" without any warranties</li>
              <li><strong>Token Risk:</strong> NLOV Token involves risks including price volatility and potential loss</li>
              <li><strong>Third Parties:</strong> We are not responsible for third-party services or content</li>
              <li><strong>Liability:</strong> Limited liability for any damages arising from service use</li>
              <li><strong>Compliance:</strong> Users must comply with their local jurisdiction's laws</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-neuro max-w-none">
            <p className="text-lg leading-relaxed mb-8">
              Orlov Innovation Private Limited, operating as Neurolov, with its registered office at W15, Siddhraj Z Square, Ahmedabad, Gujarat, India, provides this Disclaimer to clarify the terms under which our website (www.neurolov.ai) (app.neurolov.ai)(swarm.neurolov.ai), browser-based GPU computing platform, and related services, including utility token presale and token drop (collectively, "Services"), are offered.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. No Warranties</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.</li>
              <li>We do not guarantee that the Services will be uninterrupted, error-free, or secure, or that they will meet your specific requirements.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Token-Related Risks</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The NLOV Token is a utility token for accessing Services and is not an investment product, security, or financial instrument.</li>
              <li>You acknowledge the risks associated with token purchases, including price volatility, regulatory uncertainty, and potential loss of funds due to blockchain-related issues.</li>
              <li>We are not responsible for losses arising from unauthorized access to your wallet, private key loss, or third-party actions.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services may integrate third-party tools, such as payment gateways, blockchain networks, or analytics providers. We are not responsible for their performance, security, or privacy practices.</li>
              <li>Links to third-party websites are provided for convenience, and we do not endorse or control their content.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orlov Innovation Private Limited, its affiliates, and employees shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the Services.</li>
              <li>Our liability is limited to the amount paid by you for the Services, where applicable.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Regulatory Compliance</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for ensuring your use of the Services, including token purchases, complies with applicable laws in your jurisdiction.</li>
              <li>We may restrict access to the Services or token sales in jurisdictions where they are prohibited.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
            <p className="mb-4">For questions about this Disclaimer, contact:</p>
            <p className="mb-6"><strong>Address:</strong> Orlov Innovation Private Limited, W15, Siddhraj Z Square, Ahmedabad, Gujarat, India</p>
            <div className="mt-4">
              <Button
                variant="outline"
                className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white hover:text-white"
                onClick={() => window.open("mailto:support@neurolov.ai")}
              >
                support@neurolov.ai
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>
    </PageLayout>
  );
}
