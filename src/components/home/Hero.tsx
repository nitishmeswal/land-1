import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

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
    <div className="relative min-h-screen pt-20 flex items-center bg-[url('/grid.png')] bg-repeat">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>

      <Container className={`relative pb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-12'}`}>
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle tag */}
          <div className="inline-flex items-center rounded-full bg-neuro-500/10 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1">
            <span className="text-neuro-500">Presale Coming Soon • Limited Allocation</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 reveal reveal-delay-2">
            Neurolov
            <span className="text-neuro-500">.ai</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto reveal reveal-delay-3">
            Join the revolution: Rent GPUs, generate AI content, and earn $NLOV tokens on Solana.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 reveal reveal-delay-4">
            <Button
              size="lg"
              onClick={() => window.open('app.neurolov.ai', '_blank')}
              className="bg-neuro-500 hover:bg-neuro-600 text-white"
            >
              Launch App
            </Button>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 reveal reveal-delay-5 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-2xl font-bold text-neuro-500">200+</p>
              <p className="text-sm text-muted-foreground">GPUs</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-2xl font-bold text-neuro-500">100K</p>
              <p className="text-sm text-muted-foreground">AI Content Made</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-2xl font-bold text-neuro-500">35,000+</p>
              <p className="text-sm text-muted-foreground">Community Members</p>
            </div>
          </div>

          
        </div>
      </Container>
    </div>
  );
}
