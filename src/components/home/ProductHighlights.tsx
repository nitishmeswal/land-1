import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionContainer } from "@/components/ui/Container";
import { Cpu, Code, Network, Bot, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

// Mobile detection hook
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

type ProductCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
  index: number;
  url: string;
  iconImage?: string;
};

type MobileProductCardProps = {
  title: string;
  description: string;
  iconImage: string;
  url: string;
};

const ProductCard = ({
  title,
  description,
  icon,
  className,
  delay,
  index,
  url,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-7 rounded-xl transition-all duration-500 relative border border-[#0361DA]/10 reveal",
        delay,
        className
      )}
    >
      <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-[#0361DA]/20 to-blue-500/10 text-[#0361DA] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      <button
        className="group p-0 h-auto bg-transparent hover:bg-transparent border-none cursor-pointer relative z-10"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Button clicked, opening URL:', url);
          window.open(url, '_blank', 'noopener,noreferrer');
        }}
      >
        <span className="flex items-center text-sm font-medium text-[#0361DA] hover:text-[#0361DA]/80 transition-colors">
          Learn more
          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </button>
    </div>
  );
};

const MobileProductCard = ({ title, description, iconImage, url }: MobileProductCardProps) => {
  return (
    <div className="min-w-[280px] flex-shrink-0 relative rounded-3xl overflow-hidden mx-3">
      {/* Base Rectangle */}
      <div className="relative w-full h-[400px]">
        <img
          src="/highlights/Rectangle42270.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Subtract Overlay */}
        <img
          src="/highlights/Subtract.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col">
          {/* Header with icon */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-24 h-24 mb-6 flex items-center justify-center">
              <img
                src={`/highlights/${iconImage}.png`}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Bottom content */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed line-clamp-4">
              {description.split('\n')[0]}
            </p>
            
            <button
              onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
              className="w-full bg-[#4A69E2] hover:bg-[#4A69E2]/80 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 active:scale-95"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductHighlights() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
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
    };
  }, []);

  const products = [
    {
      title: "GPU Compute",
      description:
        "Rent GPUs for AI training and inference. Affordable, scalable compute power for all.\n\nWhy it matters: Access high-performance GPUs on demand—no need to own expensive hardware. Ideal for researchers, startups, and creators who need flexible, affordable compute resources.",
      icon: <Cpu className="h-6 w-6" />,
      delay: "reveal-delay-1",
      url: "https://app.neurolov.ai/gpu-marketplace",
      iconImage: "compute",
    },
    {
      title: "AI Models",
      description:
        "Generate images, text, audio, code, and video with ease. Unleash creativity with Neurolov.\n\nWho it's for: Artists, developers, and businesses looking to integrate state-of-the-art AI into their workflows—no technical barriers, just results.",
      icon: <Code className="h-6 w-6" />,
      delay: "reveal-delay-2",
      url: "https://app.neurolov.ai/ai-models",
      iconImage: "ai-models",
    },
    {
      title: "Swarm Network",
      description:
        "Connect devices, solve compute tasks, and earn NLOV. Turn idle hardware into income.\n\nWhy it matters: Anyone can contribute their device's unused power to the network and earn rewards, making advanced AI accessible and affordable for all.",
      icon: <Network className="h-6 w-6" />,
      delay: "reveal-delay-3",
      url: "https://swarm.neurolov.ai",
      iconImage: "swarm",
    },
    {
      title: "AI Agents",
      description:
        "Autonomous AI solutions for decentralized apps. The future of blockchain automation.\n\nWho it's for: Web3 builders and enterprises seeking autonomous, intelligent agents to power next-gen dApps and automate complex workflows.",
      icon: <Bot className="h-6 w-6" />,
      delay: "reveal-delay-4",
      url: "https://app.neurolov.ai",
      iconImage: "ai-agents",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Neurolov Product Highlights – GPU, AI, Swarm & Agents</title>
        <meta
          name="description"
          content="Explore Neurolov’s decentralized GPU compute, AI models, Swarm network, and AI agents. Flexible, scalable solutions for everyone."
        />
      </Helmet>
      <SectionContainer className="pb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 hero-text-gradient">
          Product Highlights
        </h1>
        {/* Background patterns */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-dots-light bg-[size:20px_20px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0361DA]/20 to-transparent"></div>
        </div>
   
        <p className="text-muted-foreground max-w-2xl mx-auto text-center mt-4 reveal reveal-delay-2">
          A comprehensive ecosystem combining AI, decentralized computing, and crypto rewards.
        </p><br></br>
        
        {/* Conditional rendering for mobile vs desktop */}
        {isMobile ? (
          /* Mobile: Horizontal scroll layout */
          <div className="overflow-x-auto scrollbar-hide -mx-4">
            <div className="flex px-4 py-4 space-x-0">
              {products.map((product, index) => (
                <MobileProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  iconImage={product.iconImage}
                  url={product.url}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Grid layout */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting lines between cards (desktop only) */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#0361DA]/10 hidden lg:block pointer-events-none"></div>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                index={index}
                title={product.title}
                description={product.description}
                icon={product.icon}
                delay={product.delay}
                url={product.url}
              />
            ))}
          </div>
        )}
        {/* Call to action */}
        <div className="mt-16 text-center reveal reveal-delay-5">
          <a
            href="https://app.neurolov.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white group">
              <span className="flex items-center">
                Explore All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </a>
        </div>
      </SectionContainer>
    </>
  );
}
