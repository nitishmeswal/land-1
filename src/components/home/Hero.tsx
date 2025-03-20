import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

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
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-background/80"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neuro-500/20 via-neuro-500/10 to-transparent rounded-full blur-3xl opacity-80 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-blue-400/10 to-transparent rounded-full blur-3xl opacity-70 animate-pulse-slow animation-delay-1000"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-neuro-400/40 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-neuro-500/40 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-500/40 rounded-full animate-float animation-delay-1500"></div>
        </div>
      </div>

      <Container className={`relative pb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle tag */}
          <div className="inline-flex items-center rounded-full border border-neuro-500/30 bg-neuro-500/5 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-neuro-500 mr-2 animate-pulse"></span>
            <span className="text-neuro-500">Presale Live Now — Limited Allocation</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 reveal reveal-delay-2">
            The Future of <span className="hero-text-gradient">AI & Compute</span> is Here
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto reveal reveal-delay-3">
            Join the revolution: Rent GPUs, generate AI content, and earn $NLOV tokens on Solana.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 reveal reveal-delay-4">
            <Button variant="neon" size="xl" className="px-8 shadow-neon group">
              <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Join Presale
            </Button>
            <Button variant="outline" size="xl" className="group border-neuro-400/30 hover:border-neuro-500/50 hover:bg-neuro-500/5">
              Explore Platform
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 reveal reveal-delay-5 mb-12">
            <div className="glass-card px-6 py-3 rounded-xl shadow-glass">
              <p className="text-2xl font-bold hero-text-gradient">$3.5M</p>
              <p className="text-xs text-muted-foreground">Raised in Presale</p>
            </div>
            <div className="glass-card px-6 py-3 rounded-xl shadow-glass">
              <p className="text-2xl font-bold hero-text-gradient">7,000+</p>
              <p className="text-xs text-muted-foreground">Community Members</p>
            </div>
            <div className="glass-card px-6 py-3 rounded-xl shadow-glass">
              <p className="text-2xl font-bold hero-text-gradient">78%</p>
              <p className="text-xs text-muted-foreground">Allocation Filled</p>
            </div>
          </div>
          
          {/* Hero image/graphic */}
          <div className="relative mt-12 px-4 sm:mt-16 lg:mt-20 reveal reveal-delay-5">
            <div className="glass-card overflow-hidden rounded-xl shadow-neon border border-neuro-500/20">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[5/2]">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-10"></div>
                
                {/* Background image */}
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80"
                  alt="AI computing visualization"
                  className="h-full w-full object-cover"
                />
                
                {/* Floating elements */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-neuro-500/20 rounded-xl backdrop-blur-sm border border-white/20 animate-float z-20 rotate-6 shadow-neon"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-blue-500/20 rounded-xl backdrop-blur-sm border border-white/20 animate-float animation-delay-1000 z-20 -rotate-6 shadow-glass"></div>
                
                {/* TGE callout */}
                <div className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 glass-card-dark p-4 rounded-lg z-20 shadow-neon border border-neuro-500/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Sparkles className="h-5 w-5 text-neuro-400" />
                    <h3 className="text-sm font-medium text-white">Token Generation Event</h3>
                  </div>
                  <p className="text-xs text-white/80 mb-3">$NLOV launching on Solana in Q2 2025. Join the presale for early access.</p>
                  <div className="flex gap-2 items-center">
                    <div className="bg-black/40 h-2 flex-1 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-xs text-white/80">78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
