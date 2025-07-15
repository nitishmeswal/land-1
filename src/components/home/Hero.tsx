import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

const SplitText: React.FC<SplitTextProps> = ({ text, className = "", delay = 0 }) => {
  return (
    <span className={className}>
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

  return (
    <>
      <Helmet>
        <title>Neurolov – Decentralized AI Compute Marketplace</title>
        <meta name="description" content="Neurolov is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://neurolov.ai/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>

      <div className="relative min-h-screen pt-20 flex items-center">
        <Container
          className={`relative pb-20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-[#0361DA]/10 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1 shadow-[0_0_10px_rgba(3,97,218,0.7)] hover:shadow-[0_0_20px_rgba(3,97,218,0.9)]">
              <span className="text-[#0361DA]">World’s First Decentralized AI Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 reveal reveal-delay-2">
              <SplitText text="Neurolov" delay={0.5} />
              <span className="text-[#0361DA]"><SplitText text=".ai" delay={1.2} /></span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto reveal reveal-delay-3">
              <b>Join the revolution: Share Compute and earn $NLOV</b>
            </p>

            <div className="flex flex-row justify-center gap-4 mb-20 reveal reveal-delay-4">
              <Button
                onClick={() => window.open("https://swarm.neurolov.ai/", "_blank")}
                className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white w-[50%] md:w-[25%]"
              >
                Start Earning
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 reveal reveal-delay-5">
              <StatCard value="10,000+" label="Nodes Connected" />
              <StatCard value="2M+" label="AI Content Made" />
              <StatCard value="5M+" label="TFLOPS Cumulative Compute" />
            </div>

            {/* Why Neurolov */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16">
              {[
                { title: "Truly Decentralized", desc: "No central authority. Power and rewards are distributed to the community." },
                { title: "AI for All", desc: "Open access to powerful AI models and compute for creators, builders, and dreamers." },
                { title: "Earn While You Contribute", desc: "Share your compute, participate in the network, and earn $NLOV rewards." },
                { title: "Secure & Transparent", desc: "Blockchain-backed, open-source, and fully auditable for maximum trust." },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-[#0361DA]/10 to-blue-500/5 border border-[#0361DA]/10">
                  <div className="mb-3">
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="#0361DA" fillOpacity="0.12" />
                      <path d="M8 12l2 2 4-4" stroke="#0361DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-card p-6 rounded-xl border border-[#0361DA]/10 bg-blue-500/10 backdrop-blur-sm hover:border-[#0361DA]/30 transition-all duration-300 hover:-translate-y-1">
      <div className="text-5xl font-bold text-[#0361DA] mb-3">{value}</div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
}
