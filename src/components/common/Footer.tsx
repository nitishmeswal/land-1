import React from "react";

const NeurolovFooter: React.FC = () => {
  return (
    <>
      <footer className="relative overflow-hidden rounded-3xl mx-4 mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#80B8FF] to-[#0361DA]"></div>

        <div className="absolute inset-0 flex items-end justify-center pb-[-1rem] ">
          <h1
            className="text-[18rem] font-bold leading-none select-none pointer-events-none opacity-30 translate-y-16"
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

        <div className="relative z-10 px-8 py-12">
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

              <div className="mt-6 text-[#002B62] text-xs">
                <p>For business inquiries & support,</p>
                <p>contact us at:</p>
                <p className="font-medium">support@neurolov.ai</p>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-start px-16">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-20">
                <div>
                  <h3 className="text-[#002B62] font-semibold text-sm mb-4 uppercase tracking-wider">
                    PRODUCTS
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Compute
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        AI Models
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Neuro Swarm
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        AI Agents
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#002B62] font-semibold text-sm mb-4 uppercase tracking-wider">
                    TOKEN
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        $NLOV
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Tokenomics
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Utility
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#002B62] font-semibold text-sm mb-4 uppercase tracking-wider">
                    ECOSYSTEM
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Roadmap
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Partners
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#002B62] font-semibold text-sm mb-4 uppercase tracking-wider">
                    RESOURCES
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Technical Papers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Community
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Blog & Updates
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#002B62] font-semibold text-sm mb-4 uppercase tracking-wider">
                    ABOUT
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-[#0862D6] text-sm hover:text-white transition-colors"
                      >
                        Mission
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-20 mb-28">
            <div className="flex flex-wrap ml-96 gap-2 text-sm">
              <a
                href="#"
                className="text-[#0862D6] hover:text-white transition-colors"
              >
                PRIVACY POLICY
              </a>
              <span className="text-[#0862D6]">|</span>
              <a
                href="#"
                className="text-[#0862D6] hover:text-white transition-colors"
              >
                TERMS & CONDITIONS
              </a>
              <span className="text-[#0862D6]">|</span>
              <a
                href="#"
                className="text-[#0862D6] hover:text-white transition-colors"
              >
                REFUND POLICY
              </a>
              <span className="text-[#0862D6]">|</span>
              <a
                href="#"
                className="text-[#0862D6] hover:text-white transition-colors"
              >
                DISCLAIMER
              </a>
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
