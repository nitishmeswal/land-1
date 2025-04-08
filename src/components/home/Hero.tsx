import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import Aurora from '../Aurora';

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after a short delay for entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 300);

    // Initialize the intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observerRef.current?.unobserve(entry.target);
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
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Aurora effect */}
      <div className="absolute inset-0 overflow-hidden -z-10 h-screen">
        <Aurora
          colorStops={["#3A29FF", "#33FFF5", "#3356FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background/50 via-background/30 to-background/20"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neuro-500/10 via-neuro-500/5 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-blue-500/10 via-blue-400/5 to-transparent rounded-full blur-3xl opacity-50 animate-pulse-slow animation-delay-1000"></div>

        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-neuro-400/20 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/20 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-neuro-500/20 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-500/20 rounded-full animate-float animation-delay-1500"></div>
        </div>
      </div>

      <Container className={`relative pb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle tag */}
          <div className="inline-flex items-center rounded-full border border-neuro-500/30 bg-neuro-500/5 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1 shadow-neon">
            <span className="flex h-2 w-2 rounded-full bg-neuro-500 mr-2 animate-pulse"></span>
            <span className="text-neuro-500 font-semibold">Presale Coming Soon - Limited Allocation</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 reveal reveal-delay-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
            Neurolov{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neuro-500 via-blue-400 to-neuro-500 animate-gradient">
              .ai
            </span>{' '}
          </h1>


          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto reveal reveal-delay-3 drop-shadow-glow">
            Join the revolution: Rent GPUs, generate AI content, and earn $NLOV tokens on Solana.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 reveal reveal-delay-4">
            <Button
              variant="neon"
              size="xl"
              className="px-8 shadow-neon group relative overflow-hidden bg-gradient-to-r from-neuro-500 to-blue-500 hover:from-blue-500 hover:to-neuro-500 transition-all duration-500 animate-pulse-subtle"
              onClick={() => window.open('app.neurolov.ai', '_blank')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neuro-500/20 to-blue-500/20 animate-shimmer"></span>
              <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              <span className="relative z-10">Launch App</span>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="group relative overflow-hidden border-2 border-neuro-500/50 hover:border-neuro-500 bg-gradient-to-r from-neuro-500/10 to-blue-500/10 hover:from-neuro-500/20 hover:to-blue-500/20 transition-all duration-500"
              onClick={() => window.open('/token#tokenomics', '_self')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-neuro-500/10 to-blue-500/10 animate-shimmer"></span>
              <span className="relative z-10 bg-gradient-to-r from-neuro-500 to-blue-500 text-transparent bg-clip-text font-semibold">
                Pre Sale LIVE!!
              </span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 text-neuro-500" />
            </Button>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 reveal reveal-delay-5 mb-12">
            <div className="glass-card px-6 py-3 rounded-xl shadow-neon border border-neuro-500/30 hover:border-neuro-500/50 transition-all duration-300">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neuro-500 via-blue-400 to-neuro-500 animate-gradient">200+</p>
              <p className="text-xs text-blue-200">GPUs</p>
            </div>
            <div className="glass-card px-6 py-3 rounded-xl shadow-neon border border-neuro-500/30 hover:border-neuro-500/50 transition-all duration-300">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neuro-500 via-blue-400 to-neuro-500 animate-gradient">100K</p>
              <p className="text-xs text-blue-200">AI Contents Made</p>
            </div>
            <div className="glass-card px-6 py-3 rounded-xl shadow-neon border border-neuro-500/30 hover:border-neuro-500/50 transition-all duration-300">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neuro-500 via-blue-400 to-neuro-500 animate-gradient">35,000+</p>
              <p className="text-xs text-blue-200">Community Members</p>
            </div>
          </div>

         
        </div>
      </Container>
    </div>
  );
}
