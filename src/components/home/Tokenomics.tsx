import { useEffect, useRef, useState } from 'react';
import { SectionContainer } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Coins, TrendingUp } from 'lucide-react';

// Enhanced TokenChart component with 3D pie chart
const TokenChart = () => {
  const [hoverSection, setHoverSection] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  
  const sections = [
    { id: 'seed', name: 'Seed Investors', percent: 2, color: 'from-blue-600 to-blue-400', bgColor: 'bg-blue-500' },
    { id: 'presale', name: 'Presale Investors', percent: 2.25, color: 'from-indigo-600 to-indigo-400', bgColor: 'bg-indigo-500' },
    { id: 'liquidity', name: 'Liquidity Pool (DEX)', percent: 35, color: 'from-violet-600 to-violet-400', bgColor: 'bg-violet-500' },
    { id: 'team', name: 'Team and Development', percent: 12, color: 'from-blue-700 to-blue-500', bgColor: 'bg-blue-600' },
    { id: 'ecosystem', name: 'Ecosystem and Rewards', percent: 18, color: 'from-indigo-700 to-indigo-500', bgColor: 'bg-indigo-600' },
    { id: 'community', name: 'Community and Marketing', percent: 8, color: 'from-violet-700 to-violet-500', bgColor: 'bg-violet-600' },
    { id: 'buyback', name: 'Buyback and Burn Reserve', percent: 13.75, color: 'from-blue-800 to-blue-600', bgColor: 'bg-blue-700' },
    { id: 'strategic', name: 'Strategic Reserve', percent: 5, color: 'from-indigo-800 to-indigo-600', bgColor: 'bg-indigo-700' },
    { id: 'dao', name: 'DAO Treasury', percent: 4, color: 'from-violet-800 to-violet-600', bgColor: 'bg-violet-700' },
    { id: 'foundation', name: 'Foundation', percent: 5, color: 'from-blue-900 to-blue-700', bgColor: 'bg-blue-800' }
  ].map((section, index, array) => {
    // Calculate the starting angle based on the sum of all previous percentages
    const startAngle = array
      .slice(0, index)
      .reduce((sum, s) => sum + (s.percent / 100 * 360), 0);
    
    return {
      ...section,
      startAngle,
      endAngle: startAngle + (section.percent / 100 * 360)
    };
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`glass-card p-8 rounded-xl shadow-xl border border-white/10 reveal reveal-delay-2 relative overflow-hidden bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md transition-all duration-500 hover:shadow-neon ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 mb-2 bg-blue-500/10 px-3 py-1 rounded-full">
          <Coins className="h-5 w-5 text-blue-500" />
          <h3 className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">$NLOV Token Allocation</h3>
        </div>
        <p className="text-sm text-muted-foreground">Total Supply: 500,000,000 $NLOV</p>
      </div>
      
      <div className="relative w-full aspect-square max-w-md mx-auto" ref={chartRef}>
        {/* Chart Container */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="relative w-full h-full p-4">
            {/* Main Chart */}
            <div className="absolute inset-0 w-full h-full">
              <svg viewBox="-10 -10 120 120" className="w-full h-full transform transition-transform duration-500 hover:scale-105">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                {sections.map((section, index) => {
                  const startAngleRad = (section.startAngle - 90) * (Math.PI / 180);
                  const endAngleRad = (section.endAngle - 90) * (Math.PI / 180);
                  const midAngleRad = (startAngleRad + endAngleRad) / 2;
                  const radius = 50;
                  const x1 = 50 + radius * Math.cos(startAngleRad);
                  const y1 = 50 + radius * Math.sin(startAngleRad);
                  const x2 = 50 + radius * Math.cos(endAngleRad);
                  const y2 = 50 + radius * Math.sin(endAngleRad);
                  const largeArcFlag = section.endAngle - section.startAngle <= 180 ? "0" : "1";

                  // Calculate label position (in the middle of the section)
                  const labelRadius = radius * 0.65; // Position labels at 65% of the radius
                  const labelX = 50 + labelRadius * Math.cos(midAngleRad);
                  const labelY = 50 + labelRadius * Math.sin(midAngleRad);

                  return (
                    <g key={section.id} className="transition-transform duration-300 cursor-pointer"
                       onMouseEnter={() => setHoverSection(section.id)}
                       onMouseLeave={() => setHoverSection(null)}
                       style={{ filter: hoverSection === section.id ? 'url(#glow)' : 'none' }}>
                      <defs>
                        <linearGradient id={`gradient-${section.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" className={`${section.bgColor} stop-opacity-1`} />
                          <stop offset="100%" className={`${section.bgColor} stop-opacity-0.8`} />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M 50 50 L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={`url(#gradient-${section.id})`}
                        className={`transition-all duration-300 ${hoverSection === section.id ? 'opacity-90' : 'opacity-80'}`}
                        style={{ 
                          transform: `scale(${hoverSection === section.id ? 1.02 : 1})`,
                          transformOrigin: '50% 50%'
                        }}
                      />
                      {/* Section Labels */}
                      <g transform={`translate(${labelX}, ${labelY})`}
                         className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                         style={{ transitionDelay: `${index * 100}ms` }}>
                        <text
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="fill-white text-[3px] font-medium"
                          transform={`rotate(0)`}>
                          {section.name}
                        </text>
                        <text
                          textAnchor="middle"
                          dominantBaseline="middle"
                          className="fill-white/70 text-[2.5px] font-medium"
                          transform={`translate(0, 3)`}>
                          {section.percent}%
                        </text>
                      </g>
                    </g>
                  );
                })}
                {/* Center Circle */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="15" 
                  className="fill-blue-900/90 backdrop-blur-sm stroke-blue-400/20" 
                  strokeWidth="1"
                />
              </svg>
                </div>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">500M</span>
                <span className="block text-xs text-blue-200/70">$NLOV</span>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {sections.map((section) => {
                const midAngle = (section.startAngle + section.endAngle) / 2 - 90;
                const radius = 60;
                const x = Math.cos(midAngle * Math.PI / 180) * radius;
                const y = Math.sin(midAngle * Math.PI / 180) * radius;
                
                return (
                  <div 
                    key={`glow-${section.id}`}
                    className={`absolute left-1/2 top-1/2 w-32 h-32 rounded-full transition-all duration-500 ${section.bgColor}/10 blur-xl`}
                    style={{ 
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${hoverSection === section.id ? '1.2' : '0'})`,
                      opacity: hoverSection === section.id ? 1 : 0
                    }}
                  />
                );
              })}
            </div>
          </div>
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
            <Button 
              variant="neon" 
              className="group relative overflow-hidden border border-neuro-500/20 hover:shadow-neon-lg"
              onClick={() => window.location.href = '/token'}
            >
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
