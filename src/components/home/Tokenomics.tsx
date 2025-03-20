import { useEffect, useRef, useState } from 'react';
import { SectionContainer } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Coins, TrendingUp } from 'lucide-react';

// Enhanced TokenChart component with animations and interactions
const TokenChart = () => {
  const [hoverSection, setHoverSection] = useState<string | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  
  const sections = [
    { id: 'ecosystem', name: 'Ecosystem', percent: 40, color: 'from-neuro-500', position: 'top-4 left-1/2 -translate-x-1/2' },
    { id: 'team', name: 'Team', percent: 20, color: 'from-blue-500', position: 'top-1/3 right-4' },
    { id: 'presale', name: 'Presale', percent: 20, color: 'from-neuro-600', position: 'bottom-1/3 right-4' },
    { id: 'marketing', name: 'Marketing', percent: 10, color: 'from-neuro-700', position: 'bottom-4 left-1/2 -translate-x-1/2' },
    { id: 'reserves', name: 'Reserves', percent: 10, color: 'from-neuro-400', position: 'bottom-1/3 left-4' },
  ];

  useEffect(() => {
    // Add fancy chart animation on mount
    if (chartRef.current) {
      chartRef.current.classList.add('animate-spin-slow');
      
      // Random sparkle effect
      const createSparkle = () => {
        if (!chartRef.current) return;
        
        const sparkle = document.createElement('div');
        sparkle.className = 'absolute w-1 h-1 bg-white rounded-full animate-ping-slow';
        
        // Random position around the chart
        const angle = Math.random() * Math.PI * 2;
        const distance = 100 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        sparkle.style.left = `calc(50% + ${x}px)`;
        sparkle.style.top = `calc(50% + ${y}px)`;
        
        chartRef.current.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
          sparkle.remove();
        }, 2000);
      };
      
      // Create sparkles periodically
      const sparkleInterval = setInterval(createSparkle, 300);
      
      return () => clearInterval(sparkleInterval);
    }
  }, []);

  return (
    <div className="glass-card p-8 rounded-xl shadow-card border border-white/20 reveal reveal-delay-2 relative overflow-hidden bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md transition-all duration-500 hover:shadow-neon">
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 -z-10 bg-grid-white/5 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)] opacity-20 animate-pulse-slow"></div>
      
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-2 bg-neuro-500/10 px-3 py-1 rounded-full">
          <Coins className="h-5 w-5 text-neuro-500" />
          <h3 className="text-lg font-medium hero-text-gradient">$NLOV Token Allocation</h3>
        </div>
        <p className="text-sm text-muted-foreground">Total Supply: 500,000,000 $NLOV</p>
      </div>
      
      <div className="relative w-full aspect-square max-w-md mx-auto" ref={chartRef}>
        {/* Enhanced token chart visualization with more dynamic effects */}
        <div className="absolute inset-0 flex items-center justify-center group">
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-neuro-500 via-blue-500 to-neuro-700 shadow-neon p-[2px] rotate-45 transition-all duration-500 group-hover:rotate-[55deg] group-hover:shadow-neon-lg">
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-neuro-500 via-blue-500 to-neuro-700 -rotate-45 transition-all duration-500 group-hover:rotate-[-55deg]">
              {/* Enhanced center circle with 3D effect */}
              <div className="absolute inset-1/4 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-neuro-500/20 shadow-inner transition-all duration-500 group-hover:scale-105 after:content-[''] after:absolute after:inset-0 after:rounded-full after:bg-gradient-radial after:from-transparent after:to-neuro-500/10 after:opacity-70">
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-xl font-bold hero-text-gradient animate-pulse-slow">500M</span>
                  <span className="text-xs">$NLOV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced token allocation labels with better visual feedback */}
        {sections.map((section) => (
          <div 
            key={section.id}
            className={`absolute ${section.position} flex flex-col items-center transition-all duration-300 z-10 ${hoverSection === section.id ? 'scale-110' : 'scale-100'}`}
            onMouseEnter={() => setHoverSection(section.id)}
            onMouseLeave={() => setHoverSection(null)}
          >
            <div className={`w-3 h-3 bg-gradient-to-r ${section.color} to-white/80 rounded-full mb-1 shadow-neon ${hoverSection === section.id ? 'animate-pulse' : ''}`}></div>
            <span className={`text-xs font-medium bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-neuro-500/10 transition-all duration-300 ${hoverSection === section.id ? 'bg-neuro-500/20 border-neuro-500/30 text-white' : ''}`}>
              {section.name}: {section.percent}%
            </span>
          </div>
        ))}
        
        {/* Add decorative orbiting dots */}
        <div className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '15s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-neuro-500/50 rounded-full shadow-neon-sm"></div>
        </div>
        <div className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500/50 rounded-full shadow-neon-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default function Tokenomics() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize the intersection observer with enhanced animation timing
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -100px 0px' });

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
    <SectionContainer className="py-24 relative overflow-hidden">
      {/* Enhanced background decorations with parallax effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-neuro-500/5 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-blue-500/5 to-transparent opacity-60"></div>
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-neuro-500/20 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 7}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-8 reveal reveal-delay-1">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-neuro-500/10 rounded-full text-neuro-500 mb-4 animate-pulse-slow">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              Tokenomics
            </span>
            <h2 className="text-3xl font-bold mb-4 relative hero-text-gradient">
              $NLOV: The Heart of Neurolov
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full"></div>
            </h2>
            <p className="text-muted-foreground max-w-md">
              $NLOV powers the entire Neurolov ecosystem, enabling seamless transactions, rewards, and governance. Be part of our journey from day one.
            </p>
          </div>

          <div className="space-y-6 reveal reveal-delay-2">
            <div className="glass-card p-5 rounded-lg border border-neuro-500/20 bg-gradient-to-r from-neuro-500/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-neuro-500/30 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <TrendingUp className="mr-3 h-5 w-5 text-neuro-500 group-hover:animate-bounce-sm" />
                  <span className="font-medium">Total Supply</span>
                </div>
                <span className="bg-background/50 px-3 py-1 rounded-full text-sm border border-white/10 group-hover:bg-neuro-500/20 transition-all duration-300">500,000,000 $NLOV</span>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-lg border border-neuro-500/20 bg-gradient-to-r from-neuro-500/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-neuro-500/30 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <svg width="20" height="20" viewBox="0 0 32 32" className="mr-3 text-neuro-500 group-hover:animate-bounce-sm">
                    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" fill="currentColor" opacity="0.2"/>
                    <path d="M10.4 19.2h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z" fill="currentColor"/>
                    <path d="M10.4 9.6h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z" fill="currentColor"/>
                    <path d="M10.4 14.4h11.2c0.48 0 0.8 0.32 0.8 0.8v1.6c0 0.48-0.32 0.8-0.8 0.8h-11.2c-0.48 0-0.8-0.32-0.8-0.8v-1.6c0-0.48 0.32-0.8 0.8-0.8z" fill="currentColor"/>
                  </svg>
                  <span className="font-medium">Blockchain</span>
                </div>
                <span className="bg-background/50 px-3 py-1 rounded-full text-sm border border-white/10 group-hover:bg-neuro-500/20 transition-all duration-300">Solana</span>
              </div>
            </div>
            
            <div className="glass-card p-5 rounded-lg border border-neuro-500/20 bg-gradient-to-r from-neuro-500/5 to-transparent transition-all duration-300 hover:shadow-neon hover:border-neuro-500/30 group">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Coins className="mr-3 h-5 w-5 text-neuro-500 group-hover:animate-bounce-sm" />
                  <span className="font-medium">Token Utility</span>
                </div>
                <span className="bg-background/50 px-3 py-1 rounded-full text-sm border border-white/10 group-hover:bg-neuro-500/20 transition-all duration-300">Compute, Staking, Governance</span>
              </div>
            </div>
          </div>

          <div className="mt-10 reveal reveal-delay-3">
            <Button variant="neon" className="group relative overflow-hidden border border-neuro-500/20 hover:shadow-neon-lg">
              <span className="absolute inset-0 bg-gradient-to-r from-neuro-500/10 to-blue-500/10 group-hover:opacity-100 opacity-0 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[400%] transition-all duration-1000 ease-out"></span>
              <span className="relative flex items-center">
                View Tokenomics
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>
        </div>

        <TokenChart />
      </div>
    </SectionContainer>
  );
}
