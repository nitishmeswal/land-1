"use client";
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { SectionContainer } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

export default function TermsAndConditions() {
  return (
    <PageLayout title="Terms and Conditions">
      <SectionContainer className="py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Terms and Conditions"
            subtitle="Last Updated: May 21, 2025"
            className="mb-12"
          />
          
          {/* Summary Box */}
          <div className="bg-neuro-900/5 p-6 rounded-lg mb-12">
            <h3 className="text-lg font-semibold mb-4">Key Points</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Eligibility:</strong> Must be 18+ and complete KYC/AML verification for token participation</li>
              <li><strong>Token Information:</strong> NLOV Token is a utility token for accessing platform services, not an investment product</li>
              <li><strong>Usage Rules:</strong> Services must be used lawfully; no reverse engineering or platform interference allowed</li>
              <li><strong>Payments:</strong> Non-refundable unless specified in Refund Policy</li>
              <li><strong>Legal Framework:</strong> Governed by Indian law with arbitration in Ahmedabad, Gujarat</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-neuro max-w-none">
            <p className="text-lg leading-relaxed">
              Welcome to Neurolov, operated by Orlov Innovation Private Limited, a company registered under the Companies Act, 2013, with its registered office at Orlov Innovation Private Limited, W15, Siddhraj Z Square, Ahmedabad, Gujarat, India. These Terms and Conditions ("T&Cs") govern your access to and use of our website (www.neurolov.ai), browser-based GPU computing platform (app.neurolov.ai), and related services (swarm.neurolov.ai), including participation in our utility token presale and token drop (collectively, "Services"). By accessing or using our Services, you agree to be bound by these T&Cs.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old and have the legal capacity to enter into contracts.</li>
              <li>You must comply with all applicable laws, including those in India and your jurisdiction.</li>
              <li>For token presale participation, you must complete KYC/AML verification as required.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Services</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">Permitted Use:</h3>
            <p className="mb-4">You may use the Services for lawful purposes, such as accessing GPU computing resources or participating in token-related activities.</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Prohibited Use:</h3>
            <p className="mb-2">You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services for illegal activities, including fraud, money laundering, or unauthorized access.</li>
              <li>Reverse-engineer, decompile, or attempt to extract source code from the platform.</li>
              <li>Interfere with the platform's functionality or security.</li>
              <li>Misrepresent your identity or engage in fraudulent token transactions.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Token Presale and Token Drop</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Utility Token:</strong> Our utility token ("NLOV Token") provides access to GPU computing resources and other platform features. It is not an investment product or security.</li>
              <li><strong>Presale and Token Drop:</strong> Participation is subject to KYC/AML verification, payment in approved cryptocurrencies or fiat, and compliance with these T&Cs.</li>
              <li><strong>Risk Acknowledgment:</strong> Token transactions are irreversible due to blockchain technology. You acknowledge the risks of price volatility, regulatory changes, and technical issues.</li>
              <li><strong>No Guarantee:</strong> We do not guarantee the value, utility, or future performance of the NLOV Token.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content, trademarks, and intellectual property on the platform are owned by Orlov Innovation Private Limited or its licensors.</li>
              <li>You are granted a limited, non-exclusive, non-transferable license to use the Services for personal or authorized commercial purposes, subject to these T&Cs.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payments for Services or token purchases are processed via secure third-party payment gateways.</li>
              <li>All payments are non-refundable unless specified in our Refund Policy.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We may suspend or terminate your access to the Services for violating these T&Cs, engaging in illegal activities, or at our discretion.</li>
              <li>Upon termination, your right to use the Services ceases, but provisions related to intellectual property, liability, and dispute resolution survive.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Disclaimer and Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services are provided "as is" without warranties of any kind, express or implied.</li>
              <li>Orlov Innovation Private Limited, its affiliates, and employees shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.</li>
              <li>Our liability is limited to the amount paid by you for the Services, where applicable.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>These T&Cs are governed by the laws of India.</li>
              <li>Any disputes shall be resolved through arbitration in Ahmedabad, Gujarat, under the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English by a sole arbitrator appointed by Orlov Innovation.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Updates to T&Cs</h2>
            <p className="mb-4">We may update these T&Cs periodically. Changes will be posted on this page, and your continued use of the Services constitutes acceptance of the updated terms.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-4">For questions about these T&Cs, contact:</p>
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
