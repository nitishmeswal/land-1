import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Helmet } from "react-helmet";

// Types for SplitText component
type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

// SplitText component for character-by-character animation
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
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

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
        <meta property="og:title" content="Neurolov – Decentralized AI Compute Marketplace" />
        <meta property="og:description" content="Neurolov is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://neurolov.ai/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Neurolov – Decentralized AI Compute Marketplace" />
        <meta name="twitter:description" content="Neurolov is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI." />
        <meta name="twitter:image" content="/og-image.png" />
      </Helmet>
      <div className="relative min-h-screen pt-20 flex items-center">
        <Container
          className={`relative pb-20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-flex items-center rounded-full bg-[#0361DA]/10 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1 shadow-[0_0_10px_rgba(3,97,218,0.7)] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(3,97,218,0.9)]">
              <span className="text-[#0361DA]">
                Worlds First Decentralised AI Ecosystem
              </span>
            </div>
            {/* Animated headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 reveal reveal-delay-2">
              <SplitText text="Neurolov" delay={0.5} />
              <span className="text-[#0361DA]">
                <SplitText text=".ai" delay={1.2} />
              </span>
            </h1>
            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto reveal reveal-delay-3">
              <b>Join the revolution: Share Compute and earn $NLOV</b>
            </p>
            {/* CTA Button */}
            <div className="flex flex-row justify-center gap-4 mb-20 reveal reveal-delay-4 w-full mx-auto">
              <Button
                onClick={() => window.open("https://swarm.neurolov.ai//", "_blank")}
                className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white w-[50%] md:w-[25%]"
              >
                Start Earning
              </Button>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 reveal reveal-delay-5">
            <div className="glass-card p-6 rounded-xl border border-[#0361DA]/10 bg-blue-500/10 backdrop-blur-sm hover:border-[#0361DA]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-[#0361DA] mb-3">10,000+</div>
              <div className="text-muted-foreground text-sm">Nodes Connected</div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-[#0361DA]/10 bg-blue-500/10 backdrop-blur-sm hover:border-[#0361DA]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-[#0361DA] mb-3">2M+</div>
              <div className="text-muted-foreground text-sm">
                AI Content Made
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl border border-[#0361DA]/10 bg-blue-500/10 backdrop-blur-sm hover:border-[#0361DA]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-[#0361DA] mb-3 whitespace-nowrap overflow-visible">
                5M+
              </div>
              <div className="text-muted-foreground text-sm">
                TFLOPS Cumilative Compute 
              </div>
            </div>
          </div>
          {/* Key Highlights Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            {/* $11M Compute Deal */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br from-[#0361DA]/10 to-blue-500/5 border border-[#0361DA]/10 hover:shadow-lg hover:shadow-[#0361DA]/10 transition-all duration-300">
              <div className="bg-green-500/20 p-3 rounded-full mb-4">
                <span className="text-green-400 text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">$13M Compute Deal Secured</h3>
              <p className="text-sm text-muted-foreground">
              Historic partnership with government & institutions
Delivering decentralized compute power to startups and universities at scale.

              </p>
            </div>

            {/* Backed by Investors */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br from-[#0361DA]/10 to-blue-500/5 border border-[#0361DA]/10 hover:shadow-lg hover:shadow-[#0361DA]/10 transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-full mb-4">
                <span className="text-purple-400 text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">Backed by Mario Nawfal & Victus Global</h3>
              <p className="text-sm text-muted-foreground">
              Endorsed by top Web3 voices
Supported by the world’s top crypto influencer and a leading global VC.


              </p>
            </div>

            {/* Browser-Based Compute */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-gradient-to-br from-[#0361DA]/10 to-blue-500/5 border border-[#0361DA]/10 hover:shadow-lg hover:shadow-[#0361DA]/10 transition-all duration-300">
              <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                <span className="text-blue-400 text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">World's First Browser-Based Compute Network</h3>
              <p className="text-sm text-muted-foreground">
              Contribute via browser, no setup needed
              Built on WebGPU/WebGL — earn $NLOV by sharing idle device power.  </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
