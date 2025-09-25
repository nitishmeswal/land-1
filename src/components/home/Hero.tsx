import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { newsletterAPI } from "@/api/newsletter";
import { toast } from "react-hot-toast";

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

const StatGlow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div className={`stat-glow-wrap ${className}`} {...rest}>
      <div className="stat-glow-inner">{children}</div>
    </div>
  );
};

// Price animation component with glowing effect
const AnimatedPrice = ({ label, value = "Soon", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div className="relative">
      <span className="text-[#80B8FF]">{label}:</span>{" "}
      <span 
        className={`inline-block transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } relative`}
      >
        <span className="relative z-10 font-medium text-[#82FFEA] animate-pulse">
          {value}
        </span>
        <span 
          className="absolute inset-0 blur-sm bg-gradient-to-r from-[#82FFEA] to-[#80B8FF] opacity-50 animate-ping"
          style={{ animationDuration: '2s' }}
        />
      </span>
    </div>
  );
};

function PresaleCard() {
  const openPresale = () => window.open("https://swarm.neurolov.ai/", "_blank");
  const [useAltSlider, setUseAltSlider] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleJoinWaitlist = () => {
    // Open Google Form
    window.open('https://forms.gle/awCVM6xa9hUFQv926', '_blank', 'noopener,noreferrer');
    
    // Show toast
    toast('Opening waitlist form! Join for exclusive presale access and updates!', {
      duration: 4000,
      style: {
        background: 'linear-gradient(135deg, #0361DA 0%, #4F8EF7 100%)',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '12px',
        padding: '16px 20px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 10px 25px rgba(3, 97, 218, 0.3)',
      },
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setUseAltSlider((prev) => !prev);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const result = await newsletterAPI.subscribe({ 
      email, 
      source: 'hero_form' 
    });

    if (result.success) {
      setMessage('✅ ' + result.message);
      setEmail('');
    } else {
      setMessage('❌ ' + (result.error || 'Subscription failed') + ' Please follow us on social media for updates!');
    }

    setIsSubmitting(false);
    
    // Clear message after 5 seconds
    setTimeout(() => setMessage(''), 5000);
  };

  return (
    <div className="relative w-[380px] h-[550px]">
      {/* Glow background behind the card */}
      <div
        className="absolute inset-0 w-[510px] h-[510px] rounded-full"
        style={{
          background: "radial-gradient(circle, #73B0FF 0%, transparent 70%)",
          filter: "blur(4px)",
          opacity: 0.45,
          mixBlendMode: "color-dodge",

          top: "45%",
          left: "45%",
          transform: "translate(-45%, -45%) scale(1.2)",
        }}
      />

      <img
        src="/hero/right-glow.png"
        alt=""
        className="absolute inset-0 w-full h-full z-0"
        loading="eager"
        decoding="async"
      />
      <img
        src="/hero/right-bg.png"
        alt=""
        className="absolute inset-0 w-full h-[500px] z-0"
        loading="eager"
        decoding="async"
      />
      <img
        src="/hero/glow-card.png"
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto"
        loading="eager"
        decoding="async"
      />

      <div className="absolute inset-0 p-8 flex flex-col text-white z-20">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <img src="/hero/nlov.png" alt="Presale" className=" w-56" />
          </div>
        </div>

        <div className="flex justify-between my-4 text-sm">
          <AnimatedPrice label="Actual Price" value="Revealed Soon" delay={300} />
          <AnimatedPrice label="Listing Price" value="Revealed Soon" delay={600} />
        </div>

        <div className="relative h-8 my-2 w-full bg-[#010726] rounded-2xl">
          <div className="progress-window w-[200px] h-full overflow-hidden rounded-2xl">
            <div className="progress-track">
              <img
                src="/hero/progress-bar.png"
                alt="Progress bar segment"
                className="h-full w-[200px] flex-shrink-0 "
              />
              <img
                src="/hero/progress-bar.png"
                alt="Progress bar segment"
                className="h-full w-[200px] flex-shrink-0"
              />
              <img
                src="/hero/progress-bar.png"
                alt="Progress bar segment"
                className="h-full w-[200px] flex-shrink-0"
              />
            </div>
          </div>

          <div
            className="absolute top-1/2 -translate-y-1/2 select-none pointer-events-none"
            style={{ left: "45%" }}
          >
            <img
              src="/hero/slider-button.png"
              alt="Slider button"
              className={`h-16 w-auto transition-opacity duration-500 ease-in-out ${
                useAltSlider ? "opacity-50" : "opacity-100"
              }`}
            />
            <img
              src="/hero/slider-button-2.png"
              alt="Slider button alt"
              className={`h-16 w-auto transition-opacity duration-500 ease-in-out absolute inset-0 ${
                useAltSlider ? "opacity-100" : "opacity-50"
              }`}
            />
          </div>
        </div>

        <button 
          onClick={handleJoinWaitlist}
          className="relative px-4 py-3 rounded-xl text-black font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)] hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0">
            <img
              src="/hero/button-bg.png"
              alt="Button Background"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <span className="relative z-10 px-6">Join Waitlist</span>
        </button>

        <div className="mt-4 text-center">
          <h4 className="text-sm font-semibold mb-3 text-[#7D8EE6]">
            COMMUNITY & SUPPORT
          </h4>
          <div className="flex justify-center gap-4">
            <a 
              href="https://x.com/neurolov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Follow Neurolov on X (Twitter)"
            >
              <img src="/hero/x.png" alt="X" className="w-8 h-8" />
            </a>
            <a 
              href="https://t.me/neurolovcommunity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Join Neurolov Telegram"
            >
              <img
                src="/hero/telegram.png"
                alt="Telegram"
                className="w-8 h-8"
              />
            </a>
            <a 
              href="mailto:support@neurolov.ai" 
              className="hover:opacity-80 transition-opacity"
              aria-label="Email Neurolov team"
            >
              <img src="/hero/mail.png" alt="Email" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-semibold mb-3 text-center">
            SUBSCRIBE FOR UPDATE
          </h4>
          <form onSubmit={handleSubscribe} className="flex gap-2 bg-[#01092D] rounded-lg p-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="flex-1 rounded-lg px-3 py-2 text-[#2F4195] placeholder-[#2F4195] text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all"
              style={{ backgroundColor: "#01092D" }}
              disabled={isSubmitting}
              aria-label="Enter your email address for newsletter updates"
              aria-describedby="newsletter-description"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white px-4 py-2 rounded-lg text-xs font-normal hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: "#0D1952" }}
              aria-label="Subscribe to newsletter"
            >
              {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
            </button>
          </form>
          <div id="newsletter-description" className="sr-only">
            Get notified about Neurolov presale updates and product announcements
          </div>
          {message && (
            <div className={`mt-2 text-xs text-center ${message.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </div>
          )}
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
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Helmet>
        <title>Neurolov - Decentralized AI Compute Marketplace</title>
        <meta
          name="description"
          content="Neurolov is the decentralized AI compute marketplace and GPU rental platform for the future of open, community-driven AI."
        />
        <meta
          property="og:title"
          content="Neurolov - Decentralized AI Compute Marketplace"
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

      <section className="relative" role="main" aria-label="Hero section">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-black/20" />
        <div
          id="main-content"
          className={`relative min-h-screen pt-24 flex items-center ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } transition-all duration-700`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-24 items-start">
              <div>
                <h1 className="text-left font-extrabold tracking-tight leading-tight mb-4 reveal reveal-delay-2">
                  <div className="block text-center lg:text-start pl-4 font-sans font-normal text-3xl lg:text-5xl text-white">
                    The WORLD'S FIRST
                  </div>
                  <div className="flex flex-col items-center lg:gap-2 lg:block">
                    <div className="inline-block relative">
                      <div className="absolute top-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute top-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D9D9D9] border border-[#318AF3] z-10" />
                      <span className="block font-sans space-x-2 p-2 border-2 border-b-0 border-[#265CA8] mt-2 text-3xl lg:text-5xl text-[#318AF3] relative">
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
                      <span className="block font-sans space-x-2 p-2 border-2 border-[#265CA8] text-3xl lg:text-5xl text-[#318AF3] relative">
                        <span
                          className="absolute inset-0 bg-gradient-to-r from-black to-[#00377E] -z-10"
                          style={{ width: "100%" }}
                        />
                        <SplitText text="COMPUTE" delay={0.9} />
                        <SplitText text="PLATFORM." delay={0.9} />
                      </span>
                    </div>
                  </div>
                </h1>

                <div className="text-white text-center lg:text-start font-sans text-xs lg:text-sm my-10">
                  Neurolov turns idle phones, laptops, and PCs into GPU power.
                  Together, we build a community supercomputer that speeds up
                  AI, supports developers, creates smart agents, and boosts
                  gaming and research.
                </div>

                <div className="grid  mb-10 lg:mb-0 grid-cols-3 gap-2 lg:gap-5 max-w-3xl reveal reveal-delay-4">
                  <StatGlow>
                    <img
                      src="/hero/stat-1.png"
                      alt="95,000+ Nodes Connected"
                      className="block w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </StatGlow>
                  <StatGlow>
                    <img
                      src="/hero/stat-2.png"
                      alt="7M+ AI Content Generated"
                      className="block w-full h-auto"
                      loading="lazy"
                      decoding="async"
                    />
                  </StatGlow>
                  <StatGlow>
                    <img
                      src="/hero/stat-3.png"
                      alt=""
                      className="block w-full h-auto"
                    />
                  </StatGlow>
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
                  <button 
                    className="p-0 border-none bg-transparent hover:bg-transparent"
                    onClick={() => window.open('/resources/White Paper.pdf', '_blank', 'noopener,noreferrer')}
                  >
                    <img
                      src="/hero/button-2.png"
                      alt="Read Whitepaper"
                      className="h-12 w-auto"
                    />
                  </button>
                </div>
              </div>

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

        .stat-glow-wrap {
          position: relative;
          overflow: hidden;
          border-bottom-right-radius: 28px;
          border: 1px solid #002554;
          background: #002554;
          isolation: isolate;
        }
        .stat-glow-wrap::before {
          content: '';
          position: absolute;
          inset: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(90deg, transparent, #0361DA, transparent);
          animation: statGlowSweep 2.6s linear infinite;
          z-index: 1;
          border-radius: 10px;
          filter: blur(10px);
          transform: translateX(-150%);
        }
        .stat-glow-inner {
          position: relative;
          z-index: 2;
          border-radius: 0px;
          overflow: hidden;
          background: transparent;
        }
        @keyframes statGlowSweep {
          0%   { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }

        
        .progress-window {
          position: relative;
          overflow: hidden;
          width: 200px; 
          height: 100%;
          border-radius: 16px;
        }
        .progress-track {
          display: flex;
          width: max-content;
          animation: progressMarquee 3s linear infinite;
        }
        .progress-track img {
          flex: 0 0 auto;
          width: 200px;
          height: 100%;
        }
        @keyframes progressMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-200px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .progress-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
