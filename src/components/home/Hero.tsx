import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

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
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-20 flex items-center bg-[url('/grid.png')] bg-repeat">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>

      <Container
        className={`relative pb-20 transition-all duration-1000 ${
          isLoaded ? "opacity-100 transform-none" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle tag */}
          <div className="inline-flex items-center rounded-full bg-[#0361DA]/10 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1">
            <span className="text-[#0361DA]">
              Presale Coming Soon • Limited Allocation
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 reveal reveal-delay-2">
            Neurolov
            <span className="text-[#0361DA]">.ai</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto reveal reveal-delay-3">
            Join the revolution: Rent GPUs, generate AI content, and earn $NLOV
            tokens on Solana.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 reveal reveal-delay-4">
            <Button
              size="lg"
              onClick={() => window.open("https://app.neurolov.ai/", "_blank")}
              className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white"
            >
              Start Earning
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 reveal reveal-delay-5">
            <div className="glass-card p-6 rounded-xl border border-[#0361DA]/10 bg-blue-500/10 backdrop-blur-sm hover:border-[#0361DA]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-[#0361DA] mb-3">200+</div>
              <div className="text-muted-foreground text-sm">GPUs</div>
            </div>

            <div className="glass-card p-6 rounded-xl border border-[#0361DA]/10 bg-blue-500/10 backdrop-blur-sm hover:border-[#0361DA]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl font-bold text-[#0361DA] mb-3">100K</div>
              <div className="text-muted-foreground text-sm">
                AI Content Made
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl border border-[#0361DA]/10 bg-blue-500/10 backdrop-blur-sm hover:border-[#0361DA]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center">
                <div className="text-5xl font-bold text-[#0361DA] mb-3 whitespace-nowrap overflow-visible">
                  35,000+ 
                </div>
              </div>
              <div className="text-muted-foreground text-sm">
                Community Members
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
