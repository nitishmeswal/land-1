
import { useEffect, useRef } from 'react';
import { SectionContainer } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Wallet, Cpu, Coins } from 'lucide-react';

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
};

const Step = ({ number, title, description, icon, delay }: StepProps) => (
  <div className={`flex flex-col items-center p-6 text-center reveal ${delay}`}>
    <div className="relative">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
        {icon}
      </div>
      <div className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-primary rounded-full text-white text-xs font-medium">
        {number}
      </div>
    </div>
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

export default function HowItWorks() {
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

  const steps = [
    {
      number: 1,
      title: "Connect your Solana wallet",
      description: "Link Phantom or any Solana-compatible wallet in seconds.",
      icon: <Wallet className="h-6 w-6 text-primary" />,
      delay: "reveal-delay-1"
    },
    {
      number: 2,
      title: "Rent GPUs or deploy AI models",
      description: "Choose your compute power or generate content instantly.",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      delay: "reveal-delay-2"
    },
    {
      number: 3,
      title: "Join the Swarm Network to earn NLOV",
      description: "Contribute compute, earn rewards – it's that easy.",
      icon: <Coins className="h-6 w-6 text-primary" />,
      delay: "reveal-delay-3"
    }
  ];

  return (
    <SectionContainer className="py-24 bg-secondary/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 reveal reveal-delay-1">Get Started in Three Simple Steps</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
          Joining the Neurolov ecosystem is simple and straightforward. Follow these steps to begin your journey.
        </p>
      </div>

      <div className="relative">
        {/* Connecting line between steps */}
        <div className="absolute top-16 left-0 w-full h-0.5 bg-border hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={step.delay}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button variant="neon" size="lg" className="reveal reveal-delay-4">
          Start Now
        </Button>
      </div>
    </SectionContainer>
  );
}
