import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Compute", href: "/products/compute" },
      { label: "AI Models", href: "/products/ai-models" },
      { label: "Neuro Swarm", href: "/products/swarm" },
      { label: "AI Agents", href: "/products/agents" },
    ],
  },
  {
    title: "Token",
    links: [
      { label: "$NLOV", href: "/token/overview" },
      { label: "Tokenomics", href: "/token/tokenomics" },
      { label: "Utility", href: "/token/utility" },
      { label: "FAQ", href: "/token/faq" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Roadmap", href: "/ecosystem/roadmap" },
      { label: "Partners", href: "/ecosystem/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technical Papers", href: "/resources" },
      { label: "Community", href: "/resources/docs" },
      { label: "Blog & Updates", href: "/whitepaper" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Team", href: "/about/team" },
      { label: "Mission", href: "/about/mission" },
    ],
  },
];

const NeurolovFooter: React.FC = () => {
  return (
    <>
      <footer className="relative overflow-hidden rounded-3xl mx-4 mb-8 ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#80B8FF] to-[#0361DA]"></div>

        <div className="absolute inset-0 flex items-end justify-center ">
          <h1
            className="text-[19rem] w-full flex items-center justify-center font-bold leading-none select-none pointer-events-none opacity-30 translate-y-16"
            style={{
              background:
                "linear-gradient(to bottom, #002B62 0%, #6BA2E800 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neurolov
          </h1>
        </div>

        <div className="relative z-10 px-8 py-12 pl-32">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
            <div className="lg:col-span-1 pl-6">
              <div className="flex items-center mb-6">
                <img
                  src="/footer/logo.png"
                  alt="Neurolov"
                  className="w-[250px]"
                />
              </div>
              <p className="text-[#002B62] text-xs leading-relaxed mb-4">
                Empower your AI journey with decentralized computing, content
                generation, and blockchain rewards.
              </p>

              <div className="flex space-x-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/footer/x.png" alt="x" />
                </div>
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/footer/telegram.png" alt="Telegram" />
                </div>
                <div className="w-10 h-10  flex items-center justify-center">
                  <img src="/footer/discord.png" alt="Discord" />
                </div>
                <div className="w-10 h-10  flex items-center justify-center">
                  <img src="/footer/github.png" alt="GitHub" />
                </div>
              </div>

              <div className="mt-6 font-bold text-[#002B62] text-xs">
                <p>For business inquiries & support,</p>
                <p>contact us at:</p>
                <p className="font-medium">support@neurolov.ai</p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-start px-16">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-20">
                {footerLinks.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-[#002B62] font-semibold text-sm mb-4 uppercase tracking-wider">
                      {section.title.toUpperCase()}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            to={l.href}
                            className="text-[#0862D6] text-sm hover:text-white transition-colors"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-20 mb-32">
            <div className="flex flex-wrap ml-64 gap-2 text-sm">
              <Link
                to="/legal/privacy-policy"
                className="text-[#0862D6] transition-colors"
              >
                PRIVACY POLICY
              </Link>
              <span className="text-[#0862D6]">|</span>
              <Link
                to="/legal/terms-and-conditions"
                className="text-[#0862D6] transition-colors"
              >
                TERMS & CONDITIONS
              </Link>
              <span className="text-[#0862D6]">|</span>
              <Link
                to="/legal/refund-policy"
                className="text-[#0862D6] transition-colors"
              >
                REFUND POLICY
              </Link>
              <span className="text-[#0862D6]">|</span>
              <Link
                to="/legal/disclaimer"
                className="text-[#0862D6] transition-colors"
              >
                DISCLAIMER
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-0 right-0 z-20 text-center">
          <p className="text-[#9DC8FF] text-sm">
            2025 Neurolov.ai. All rights reserved.
          </p>
        </div>
      </footer>

      <div className="h-8"></div>
    </>
  );
};

export default NeurolovFooter;
