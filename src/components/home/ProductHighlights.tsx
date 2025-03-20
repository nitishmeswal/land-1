import { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui/container';
import { SectionContainer } from '@/components/ui/container';
import { Cpu, Code, Network, Bot, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type ProductCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
  index: number;
};

const ProductCard = ({ title, description, icon, className, delay, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "glass-card p-7 rounded-xl transition-all duration-500 group hover:shadow-neon border border-neuro-500/10 hover:border-neuro-500/30 reveal",
        isHovered ? "translate-y-[-8px]" : "translate-y-0",
        delay,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-neuro-500/20 to-blue-500/10 text-neuro-500 mb-4 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-neuro-500 transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      
      <div className="flex items-center text-sm font-medium text-neuro-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
      
      {/* Card number */}
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-neuro-500 to-neuro-400 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform -rotate-12 group-hover:rotate-0">
        {index + 1}
      </div>
    </div>
  );
};

export default function ProductHighlights() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the reveal class
    const elements = document.querySelectorAll('.reveal');
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
      description: "Rent GPUs for AI training and inference. Affordable, scalable compute power for all.",
      icon: <Cpu className="h-6 w-6" />,
      delay: "reveal-delay-1"
    },
    {
      title: "AI Models",
      description: "Generate images, text, audio, code, and video with ease. Unleash creativity with cutting-edge AI.",
      icon: <Code className="h-6 w-6" />,
      delay: "reveal-delay-2"
    },
    {
      title: "Swarm Network",
      description: "Connect devices, solve compute tasks, and earn NLOV. Turn idle hardware into income.",
      icon: <Network className="h-6 w-6" />,
      delay: "reveal-delay-3"
    },
    {
      title: "AI Agents",
      description: "Autonomous AI solutions for decentralized apps. The future of blockchain automation.",
      icon: <Bot className="h-6 w-6" />,
      delay: "reveal-delay-4"
    },
  ];

  return (
    <SectionContainer className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots-light bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuro-500/20 to-transparent"></div>
      </div>
      
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4 reveal reveal-delay-1">
          <span className="mr-1">✨</span>
          <span>Neurolov Ecosystem</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-4 reveal reveal-delay-1 relative inline-block">
          Discover the Neurolov Advantage
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full"></div>
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
          A comprehensive ecosystem combining AI, decentralized computing, and blockchain rewards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connecting lines between cards (desktop only) */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-neuro-500/10 hidden lg:block"></div>
        
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            index={index}
            title={product.title}
            description={product.description}
            icon={product.icon}
            delay={product.delay}
          />
        ))}
      </div>
      
      {/* Call to action */}
      <div className="mt-16 text-center reveal reveal-delay-5">
        <Button variant="glassDark" className="group relative overflow-hidden border border-neuro-500/20">
          <span className="absolute inset-0 bg-gradient-to-r from-neuro-500/10 to-blue-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
          <span className="relative flex items-center">
            Explore All Products
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Button>
      </div>
    </SectionContainer>
  );
}
