"use client";
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { SectionContainer } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

export default function RefundPolicy() {
  return (
    <PageLayout title="Refund Policy">
      <SectionContainer className="py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Refund Policy"
            subtitle="Last Updated: May 21, 2025"
            className="mb-12"
          />
          
          {/* Summary Box */}
          <div className="bg-neuro-900/5 p-6 rounded-lg mb-12">
            <h3 className="text-lg font-semibold mb-4">Key Points</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>General Policy:</strong> Services and token purchases are non-refundable by default</li>
              <li><strong>Exceptions:</strong> Refunds possible for technical failures or canceled presales</li>
              <li><strong>Time Limits:</strong> Submit requests within 7 days, processed within 30 days</li>
              <li><strong>Token Sales:</strong> Blockchain transactions are irreversible; no refunds for user errors</li>
              <li><strong>Chargebacks:</strong> Unauthorized chargebacks may lead to account suspension</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-neuro max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              This policy addresses refunds for services and token purchases, ensuring transparency and compliance with Indian consumer protection laws.
            </p>
            
            <p className="text-lg leading-relaxed mb-8">
              Orlov Innovation Private Limited, operating as Neurolov, with its registered office at Orlov Innovation Private Limited, W15, Siddhraj Z Square, Ahmedabad, Gujarat, India, is committed to transparency in our refund process. This Refund Policy applies to payments for our Services, including GPU computing subscriptions and utility token purchases (NLOV Token) via our website (www.neurolov.ai) (app.neurolov.ai) or (swarm.neurolov.ai).
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. General Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments for Services, including subscriptions and one-time fees, are non-refundable unless explicitly stated otherwise.</li>
              <li>Refunds may be considered in exceptional cases, such as technical failures solely attributable to Neurolov, at our sole discretion.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Token Presale and Token Drop Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Due to the irreversible nature of blockchain transactions, payments for NLOV Tokens during the presale or token drop are non-refundable.</li>
              <li>If a presale or token drop is canceled by Neurolov before token distribution, we will refund payments in the original payment method (fiat or cryptocurrency) within 30 days, subject to applicable transaction fees.</li>
            </ul>
            
            <p className="mt-4 mb-2">Refunds will not be provided for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>User errors, such as sending funds to the wrong wallet address.</li>
              <li>Changes in token value or market conditions.</li>
              <li>Regulatory restrictions preventing token delivery.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Process for Requesting a Refund</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Submit refund requests via email to support@neurolov.ai within 7 days of the payment date, including your name, transaction details, and reason for the request.</li>
              <li>We will review requests within 14 business days and notify you of the outcome.</li>
              <li>Approved refunds will be processed within 30 days, subject to payment gateway policies.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Chargebacks</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Initiating a chargeback without contacting us may result in suspension of your account and forfeiture of access to Services.</li>
              <li>We reserve the right to contest chargebacks if we believe the claim is unjustified.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">For refund-related inquiries, contact:</p>
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
