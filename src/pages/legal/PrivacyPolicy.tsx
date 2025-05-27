"use client";
import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { SectionContainer } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/common/SectionHeading";

export default function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <SectionContainer className="py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Last Updated: May 21, 2025"
            className="mb-12"
          />
          
          {/* Summary Box */}
          <div className="bg-neuro-900/5 p-6 rounded-lg mb-12">
            <h3 className="text-lg font-semibold mb-4">Quick Summary</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect personal information, usage data, and token-related data</li>
              <li>Your data is used to provide services and ensure compliance</li>
              <li>We implement industry-standard security measures</li>
              <li>You have rights under DPDP Act, 2023</li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-neuro max-w-none">
            <p className="text-lg leading-relaxed">
              At Neurolov, a product of Orlov Innovation Private Limited, registered under the Companies Act, 2013, with its registered office at W15, Siddhraj Z Square, Ahmedabad, Gujarat, India, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, protect, and disclose personal information when you use our website www.neurolov.ai or app.neurolov.ai platform, or services, including our browser-based GPU computing platform swarm.neurolov.ai and participation in our utility token presale or token drop. By accessing or using our services, you agree to this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, contact details, billing information, KYC details (e.g., government-issued ID for token presale participants), and other information you provide when registering or interacting with our services.</li>
              <li><strong>Usage Data:</strong> IP address, browser type, device information, operating system, pages visited, and interactions with our platform.</li>
              <li><strong>Token-Related Data:</strong> Wallet addresses, transaction details, and other blockchain-related data for utility token purchases or interactions.</li>
              <li><strong>Cookies and Tracking:</strong> We use cookies and similar technologies to enhance user experience and analyze usage patterns. You can manage cookie preferences via your browser settings.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services, including GPU computing and token-related functionalities.</li>
              <li>Process transactions, including token presale and token drop participation.</li>
              <li>Communicate with you, including sending updates, notifications, and promotional materials (with your consent).</li>
              <li>Ensure compliance with legal and regulatory requirements, such as KYC/AML for token sales.</li>
              <li>Analyze usage trends to enhance platform performance and user experience.</li>
              <li>Protect against fraud, unauthorized access, and security threats.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Share Your Information</h2>
            <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors for payment processing, cloud hosting, KYC/AML verification, and analytics, who are bound by strict confidentiality agreements.</li>
              <li><strong>Blockchain Networks:</strong> Public blockchain networks for token transactions, where wallet addresses and transaction details are inherently public.</li>
              <li><strong>Legal Authorities:</strong> When required by law, such as under the DPDP Act, 2023, or to comply with legal processes.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, with safeguards to protect your data.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">We implement industry-standard security measures, including encryption, secure socket layer (SSL) technology, and access controls, to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
            <p className="mb-4">Under the DPDP Act, 2023, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete your personal data.</li>
              <li>Withdraw consent for data processing (where applicable).</li>
              <li>Nominate a representative to manage your data in case of incapacitation.</li>
              <li>Lodge complaints with the Data Protection Board of India.</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at support@neurolov.ai.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Retention</h2>
            <p className="mb-4">We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Token-related data may be retained longer due to blockchain immutability.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. International Data Transfers</h2>
            <p className="mb-4">As a global platform, your data may be transferred to and processed in countries outside India. We ensure such transfers comply with applicable data protection laws and include adequate safeguards.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Third-Party Links</h2>
            <p className="mb-4">Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Updates to This Policy</h2>
            <p className="mb-4">We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
            <p className="mb-4">For privacy-related inquiries, contact:</p>
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
