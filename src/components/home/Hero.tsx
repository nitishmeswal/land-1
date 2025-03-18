
import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
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
    };
  }, []);

  return (
    <div className="relative min-h-screen pt-20 flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-background to-background/80"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neuro-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative pb-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Subtitle tag */}
          <div className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-sm font-medium mb-6 reveal reveal-delay-1">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            <span className="text-muted-foreground">Introducing Neurolov.ai</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6 reveal reveal-delay-2">
            Empower Your <span className="hero-text-gradient">AI Journey</span> with Neurolov
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto reveal reveal-delay-3">
            Rent GPUs, generate AI content, and earn NLOV tokens on Solana. Join the decentralized AI revolution.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 reveal reveal-delay-4">
            <Button variant="neon" size="lg" className="px-8 shadow-lg">
              Rent GPUs
            </Button>
            <Button variant="outline" size="lg" className="group">
              Explore AI Models
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Hero image/graphic */}
          <div className="relative mt-12 px-4 sm:mt-16 lg:mt-24 reveal reveal-delay-4">
            <div className="glass-card overflow-hidden rounded-xl shadow-card border border-white/20">
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[5/2]">
                {/* Replace with your actual hero image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1600&q=80"
                  alt="AI computing visualization"
                  className="h-full w-full object-cover"
                />
                
                {/* Floating elements for visual interest */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-neuro-500/20 rounded-lg backdrop-blur-sm border border-white/20 animate-float z-20"></div>
                <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-white/20 animate-float animation-delay-1000 z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
