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
                <div className="inline-flex items-center rounded-full bg-[#0361DA]/10 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1 shadow-[0_0_10px_rgba(3,97,218,0.7)] transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(3,97,218,0.9)]">
                  <span className="text-[#0361DA]">
                    World’s First Decentralised AI Ecosystem
                  </span>
                </div>

                <h1 className="text-left font-extrabold tracking-tight leading-tight mb-4 reveal reveal-delay-2">
                  <div className="block text-lg font-normal sm:text-4xl md:text-5xl text-white">
                    The WORLD'S FIRST
                  </div>
                  <span className="block text-lg sm:text-4xl md:text-5xl text-[#0B2C59]">
                    <SplitText text="BROWSER BASED" delay={0.3} />
                  </span>
                  <span className="block text-lg sm:text-4xl md:text-5xl text-[#0B2C59]">
                    <SplitText text="COMPUTE PLATFORM." delay={0.9} />
                  </span>
                </h1>

                <div className="flex flex-wrap gap-4 mb-10 reveal reveal-delay-3">
                  <Button
                    onClick={openPresale}
                    className="bg-[#0361DA] hover:bg-[#0361DA]/90 text-white shadow-md shadow-[#0361DA]/30"
                  >
                    Start Earning
                  </Button>
                  <Button className="bg-white hover:bg-white/90 text-[#0B2C59] border border-[#0361DA]/20">
                    Read Whitepaper
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl reveal reveal-delay-4">
                  <img src="/hero/stat-1.png" alt="" />
                  <img src="/hero/stat-2.png" alt="" />
                  <img src="/hero/stat-3.png" alt="" />
                </div>
              </div>

              <div className="relative">
                <div className="mx-auto w-full max-w-md rounded-2xl overflow-hidden bg-[#0E1E3A] text-white border border-white/10 shadow-xl reveal reveal-delay-5">
                  <div className="absolute top-0 right-0 h-10 w-10 bg-white/5 rotate-45 translate-x-5 -translate-y-5 pointer-events-none" />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-green-300">
                        <span className="inline-block h-2 w-2 rounded-full bg-green-400" />
                        LIVE
                      </span>
                      <span className="text-xs text-white/70">600% to TGE</span>
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold">
                      $NLOV Presale
                    </h3>

                    <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-white/80">
                      <div className="space-y-1">
                        <div className="text-white/60">Actual Price</div>
                        <div className="font-semibold">$0.025</div>
                      </div>
                      <div className="space-y-1 text-right">
                        <div className="text-white/60">Listing Price</div>
                        <div className="font-semibold">$0.55</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="h-4 w-full rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#244CFF] to-[#69A1FF] rounded-full"
                          style={{ width: "66%" }}
                        />
                      </div>
                      <div className="mt-2 text-sm text-white/80">
                        <span className="font-semibold">$9,923</span> / $15,000
                      </div>
                    </div>

                    <Button
                      onClick={openPresale}
                      className="mt-4 w-full bg-[#65B5FF] hover:bg-[#7cc2ff] text-[#0B2C59] font-bold"
                    >
                      BUY NOW
                    </Button>

                    <div className="mt-5">
                      <div className="text-[10px] tracking-wide text-white/50 text-center">
                        COMMUNITY & SUPPORT
                      </div>
                      <div className="mt-2 flex justify-center gap-4 text-xl">
                        <span className="opacity-80 hover:opacity-100 cursor-pointer">
                          𝕏
                        </span>
                        <span className="opacity-80 hover:opacity-100 cursor-pointer">
                          ↗
                        </span>
                        <span className="opacity-80 hover:opacity-100 cursor-pointer">
                          ✉
                        </span>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="sr-only">Email</label>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          className="w-full rounded-md bg-white/10 placeholder-white/50 text-white px-3 py-2 outline-none focus:ring-2 focus:ring-[#65B5FF]"
                        />
                        <Button className="bg-white/15 hover:bg-white/25 border border-white/20">
                          SUBSCRIBE
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
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
