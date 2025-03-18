
import { useRef, useEffect } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionContainer } from '@/components/ui/Container';
import { Cpu, Code, Network, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
};

const ProductCard = ({ title, description, icon, className, delay }: ProductCardProps) => (
  <div className={cn(
    "glass-card p-6 rounded-xl transition-all hover:translate-y-[-4px] reveal",
    delay,
    className
  )}>
    <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

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
    <SectionContainer className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 reveal reveal-delay-1">Discover the Neurolov Advantage</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
          A comprehensive ecosystem combining AI, decentralized computing, and blockchain rewards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            title={product.title}
            description={product.description}
            icon={product.icon}
            delay={product.delay}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
