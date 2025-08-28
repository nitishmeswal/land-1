import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

function Container(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...rest}
    />
  );
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", children, ...rest } = props;
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type SplitTextProps = { text: string; className?: string; delay?: number };
const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 0,
}) => {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block opacity-0 animate-fade-in"
          style={{
            animationDelay: `${delay + i * 0.05}s`,
            animationFillMode: "forwards",
          }}
          aria-hidden="true"
        >
          {char}
        </span>
      ))}
    </span>
  );
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

// Presale Card Component
function PresaleCard() {
  const openPresale = () => window.open("https://swarm.neurolov.ai/", "_blank");

  return (
    <div className="relative">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-white/20 rounded-3xl blur-3xl"></div>

      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-blue-900/90 to-blue-800/90 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
              • LIVE
            </div>
            <h3 className="text-white text-xl font-bold">$NLOV Presale</h3>
          </div>
          <div className="text-white text-sm font-semibold">600% to TGE</div>
        </div>

        {/* Price Information */}
        <div className="flex justify-between mb-4">
          <div className="text-white text-sm">
            Actual Price: <span className="font-semibold">$0.025</span>
          </div>
          <div className="text-white text-sm">
            Listing Price: <span className="font-semibold">$0.55</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-blue-900/50 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-400 to-blue-300 h-3 rounded-full relative"
              style={{ width: "66%" }}
            >
              <div className="absolute right-0 top-0 w-4 h-4 bg-blue-300 rounded-full transform translate-x-1/2 -translate-y-0.5"></div>
            </div>
          </div>
        </div>

        {/* Funds Raised */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-white text-sm">USD Raised:</span>
          <span className="text-white text-lg font-bold">$9,923 / $15,000</span>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={openPresale}
          className="w-full bg-gradient-to-r from-blue-400 to-blue-300 text-white font-bold py-3 px-6 rounded-xl mb-6 hover:from-blue-300 hover:to-blue-200 transition-all duration-300 transform hover:scale-105"
        >
          BUY NOW
        </button>

        {/* Community & Support */}
        <div className="mb-4">
          <h4 className="text-white text-sm font-semibold mb-3">
            COMMUNITY & SUPPORT
          </h4>
          <div className="flex gap-4">
            <div className="w-8 h-8 border border-blue-400 rounded-full flex items-center justify-center">
              <span className="text-blue-400 text-sm font-bold">X</span>
            </div>
            <div className="w-8 h-8 border border-blue-400 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <div className="w-8 h-8 border border-blue-400 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">
            SUBSCRIBE FOR UPDATE
          </h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-1 bg-blue-900/50 border border-blue-400/30 rounded-lg px-3 py-2 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-blue-400"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const openPresale = () => window.open("https://swarm.neurolov.ai/", "_blank");

  return (
    <>
      <Helmet>
        <title>Neurolov – Decentralized AI Compute Marketplace</title>
        <meta
          name="description"
          content="Neurolov is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI."
        />
        <meta
          property="og:title"
          content="Neurolov – Decentralized AI Compute Marketplace"
        />
        <meta
          property="og:description"
          content="Neurolov is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://neurolov.ai/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Neurolov - Decentralized AI Compute Marketplace"
        />
        <meta
          name="twitter:description"
          content="Neurolov is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      <section className="relative">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-black/20" />

        <div
          className={`relative min-h-screen pt-24 flex items-center ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } transition-all duration-700`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h1 className="text-left font-extrabold tracking-tight leading-tight mb-4 reveal reveal-delay-2">
                  <div className="block pl-4 font-sans text-lg font-normal sm:text-4xl md:text-5xl text-white">
                    The WORLD'S FIRST
                  </div>
                  <div className="inline-block relative">
                    <div className="absolute top-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />

                    <div className="absolute top-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />

                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />

                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />

                    <span className="block font-sans space-x-2 text-lg p-2 border-2 border-b-0 border-[#265CA8] mt-2 sm:text-4xl md:text-5xl text-[#318AF3] relative">
                      <span
                        className="absolute inset-0 bg-gradient-to-r from-black to-[#00377E] -z-10"
                        style={{ width: "100%" }}
                      />
                      <SplitText text="BROWSER" delay={0.3} />
                      <SplitText text="BASED" delay={0.3} />
                    </span>
                  </div>
                  <div className="inline-block relative">
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />

                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />

                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />

                    <span className="block font-sans space-x-2 text-lg p-2 border-2 border-[#265CA8] sm:text-4xl md:text-5xl text-[#318AF3] relative">
                      <span
                        className="absolute inset-0 bg-gradient-to-r from-black to-[#00377E] -z-10"
                        style={{ width: "100%" }}
                      />
                      <SplitText text="COMPUTE" delay={0.9} />
                      <SplitText text="PLATFORM." delay={0.9} />
                    </span>
                  </div>
                </h1>

                <div className="text-white font-sans text-sm my-10  ">
                  Neurolov turns idle phones, laptops, and PCs into GPU power.
                  Together, we build a community supercomputer that speeds up
                  AI, supports developers, creates smart agents, and boosts
                  gaming and research.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl reveal reveal-delay-4">
                  <img src="/hero/stat-1.png" alt="" />
                  <img src="/hero/stat-2.png" alt="" />
                  <img src="/hero/stat-3.png" alt="" />
                </div>
                <div className="flex justify-start mt-4 reveal reveal-delay-3">
                  <button
                    onClick={openPresale}
                    className="p-0 border-none bg-transparent hover:bg-transparent"
                  >
                    <img
                      src="/hero/button-1.png"
                      alt="Start Earning"
                      className="h-12 w-auto"
                    />
                  </button>
                  <button className="p-0 border-none bg-transparent hover:bg-transparent">
                    <img
                      src="/hero/button-2.png"
                      alt="Read Whitepaper"
                      className="h-12 w-auto"
                    />
                  </button>
                </div>
              </div>

              {/* Right side - Presale Card */}
              <div className="flex justify-center lg:justify-end lg:mr-20 items-start pt-10 lg:pt-0">
                <PresaleCard />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <style>{`
        .animate-fade-in { animation: fade-in .5s ease forwards; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: none; } }
        .reveal { opacity: 0; transform: translateY(10px); transition: all .6s ease; }
        .reveal-visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: .1s; }
        .reveal-delay-2 { transition-delay: .2s; }
        .reveal-delay-3 { transition-delay: .3s; }
        .reveal-delay-4 { transition-delay: .4s; }
        .reveal-delay-5 { transition-delay: .5s; }
        .reveal-delay-6 { transition-delay: .6s; }
      `}</style>
    </>
  );
}
