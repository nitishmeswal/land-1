import { useEffect, useRef, useState } from "react";
import { SectionContainer } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Coins, TrendingUp } from "lucide-react";

const TokenAllocation = () => {
  const [isMobile, setIsMobile] = useState(false);
  const allocations = [
    {
      name: "Ecosystem & Rewards",
      percentage: 18.45,
      angle: -90,
      radius: isMobile ? 195 : 180,
    },
    {
      name: "Community & Marketing",
      percentage: 8.45,
      angle: -145,
      radius: 180,
    },
    {
      name: "Buyback & Burn Reserve",
      percentage: 8.85,
      angle: -35,
      radius: 190,
    },
    { name: "Presale Investors", percentage: 2.95, angle: -5, radius: 220 },
    { name: "Liquidity Pool (DEX)", percentage: 30.45, angle: 17, radius: 220 },
    {
      name: "Seed Investors",
      percentage: 2.95,
      angle: 185,
      radius: 220,
    },
    { name: "Strategic Reserve", percentage: 5.45, angle: 160, radius: 180 },
    { name: "Foundation", percentage: 5.45, angle: 45, radius: 220 },
    {
      name: "Team & Development",
      percentage: 12.45,
      angle: 90,
      radius: isMobile ? 240 : 220,
    },
    { name: "DAO Treasury", percentage: 4.45, angle: 130, radius: 200 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[320px] md:max-w-[600px] mx-auto">
      {/* Center coin */}
      <div className="absolute top-[52%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-56 md:h-56">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse-slow filter blur-xl"></div>
        <img
          src="/nlov-coin.png"
          alt="NLOV Token"
          className="w-full h-full object-contain animate-float"
        />
      </div>

      {/* Allocation labels */}
      {allocations.map((item) => {
        const angleInRadians = (item.angle * Math.PI) / 180;
        const radius = isMobile ? item.radius * 0.6 : item.radius;
        const x = Math.cos(angleInRadians) * radius;
        const y = Math.sin(angleInRadians) * radius;

        return (
          <div
            key={item.name}
            className="absolute top-1/2 left-1/2 transition-all duration-300"
            style={{
              transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
            }}
          >
            <div className="relative">
              <div className="glass-card px-2 py-[3px] md:px-4 md:py-2 rounded-full border border-[#0361DA]/20 bg-[#0361DA]/5 backdrop-blur-sm shadow-lg flex flex-col items-center text-center whitespace-normal min-w-[100px] md:min-w-[120px]">
                <span className="font-medium text-xs md:text-sm text-[#646e83]/80 leading-tight">
                  {item.name}
                </span>
                <span className="text-xs md:text-sm text-[#0361DA] mt-1">
                  {item.percentage}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Tokenomics() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <SectionContainer className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-neuro-500/5 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-blue-500/5 to-transparent opacity-60"></div>

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-neuro-500/20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 7}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-8 reveal reveal-delay-1 flex flex-col items-center">
            <span className="inline-flex justify-center items-center px-3 py-1 text-xs font-medium bg-neuro-500/10 rounded-full text-neuro-500 mb-4 animate-pulse-slow self-center">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Tokenomics
            </span>
            <h2 className="text-3xl font-bold mb-4 relative hero-text-gradient text-center">
              $NLOV: The Heart of Neurolov
              <div className="absolute -bottom-2 left-1/2 w-20 h-1 bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full transform -translate-x-1/2"></div>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2 text-center mt-2">
              $NLOV powers the entire Neurolov ecosystem, enabling seamless
              transactions, rewards, and governance. Be part of our journey from
              day one.
            </p>
          </div>

          <div className="space-y-6 reveal reveal-delay-2">
            <div className="flex glass-card p-5 rounded-lg border border-neuro-500/20 bg-gradient-to-r from-neuro-500/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-neuro-500/30 group">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <TrendingUp className="mr-3 h-5 w-5 text-neuro-500 group-hover:animate-bounce-sm" />
                  <span className="font-medium">Total Supply</span>
                </div>
                <span className="bg-background/50 px-3 py-1 rounded-full text-sm border border-white/10 group-hover:bg-neuro-500/20 transition-all duration-300">
                  500,000,000 $NLOV
                </span>
              </div>
            </div>

            <div className="glass-card p-5 rounded-lg border border-neuro-500/20 bg-gradient-to-r from-neuro-500/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-neuro-500/30 group">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    className="mr-3 text-neuro-500 group-hover:animate-bounce-sm"
                  >
                    <path
                      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <path
                      d="M10.4 19.2h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.4 9.6h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.4 14.4h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-medium">Blockchain</span>
                </div>
                <span className="bg-background/50 px-3 py-1 rounded-full text-sm border border-white/10 group-hover:bg-neuro-500/20 transition-all duration-300">
                  Solana
                </span>
              </div>
            </div>

            <div className="glass-card p-5 rounded-lg border border-neuro-500/20 bg-gradient-to-r from-neuro-500/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-neuro-500/30 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Coins className="mr-3 h-5 w-5 text-neuro-500 group-hover:animate-bounce-sm" />
                  <span className="font-medium">Token Utility</span>
                </div>
                <span className="bg-background/50 px-2 py-1 rounded-full text-sm border border-white/10 group-hover:bg-neuro-500/20 transition-all duration-300">
                  Governance, Compute, Staking
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 reveal reveal-delay-3 flex justify-center">
            <Button
              variant="neon"
              className="group relative overflow-hidden border border-neuro-500/20 hover:shadow-neon-lg"
              onClick={() => (window.location.href = "/token")}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neuro-500/10 to-blue-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-all duration-1000 ease-out"></span>
              <span className="relative flex items-center">
                View Tokenomics
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <TokenAllocation />
        </div>
      </div>
    </SectionContainer>
  );
}
