
import { useEffect, useRef } from 'react';
import { SectionContainer } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const TokenChart = () => (
  <div className="glass-card p-8 rounded-xl shadow-card border border-white/20 reveal reveal-delay-2">
    <div className="mb-6 text-center">
      <h3 className="text-lg font-medium">NLOV Token Allocation</h3>
    </div>
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Simplified token chart visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-neuro-500 via-blue-500 to-neuro-700">
          {/* Center circle */}
          <div className="absolute inset-1/4 bg-background rounded-full flex items-center justify-center">
            <span className="font-medium text-sm">500M NLOV</span>
          </div>
        </div>
      </div>
      
      {/* Token allocation labels */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-3 h-3 bg-neuro-500 rounded-full mb-1"></div>
        <span className="text-xs font-medium">Ecosystem: 40%</span>
      </div>
      
      <div className="absolute top-1/3 right-4 flex flex-col items-center">
        <div className="w-3 h-3 bg-blue-500 rounded-full mb-1"></div>
        <span className="text-xs font-medium">Team: 20%</span>
      </div>
      
      <div className="absolute bottom-1/3 right-4 flex flex-col items-center">
        <div className="w-3 h-3 bg-neuro-600 rounded-full mb-1"></div>
        <span className="text-xs font-medium">Presale: 20%</span>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-3 h-3 bg-neuro-700 rounded-full mb-1"></div>
        <span className="text-xs font-medium">Marketing: 10%</span>
      </div>
      
      <div className="absolute bottom-1/3 left-4 flex flex-col items-center">
        <div className="w-3 h-3 bg-neuro-400 rounded-full mb-1"></div>
        <span className="text-xs font-medium">Reserves: 10%</span>
      </div>
    </div>
  </div>
);

export default function Tokenomics() {
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

  return (
    <SectionContainer className="py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6 reveal reveal-delay-1">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 rounded-full text-primary mb-4">
              Tokenomics
            </span>
            <h2 className="text-3xl font-bold mb-4">NLOV: The Heart of Neurolov</h2>
            <p className="text-muted-foreground">
              NLOV powers the entire Neurolov ecosystem, enabling seamless transactions, rewards, and governance.
            </p>
          </div>

          <div className="space-y-6 reveal reveal-delay-2">
            <div className="glass-card p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Total Supply</span>
                <span>500,000,000 NLOV</span>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Blockchain</span>
                <span>Solana</span>
              </div>
            </div>
            
            <div className="glass-card p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex justify-between items-center">
                <span className="font-medium">Token Utility</span>
                <span>Compute, Staking, Governance</span>
              </div>
            </div>
          </div>

          <div className="mt-10 reveal reveal-delay-3">
            <Button variant="outline" className="group">
              View Tokenomics
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        <TokenChart />
      </div>
    </SectionContainer>
  );
}
