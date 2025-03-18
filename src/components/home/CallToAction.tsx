
import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Rocket, Sparkles, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // TGE date - example: May 15, 2025
  const tgeDate = new Date('2025-05-15T00:00:00');

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

    // Countdown timer
    const countdownTimer = setInterval(() => {
      const now = new Date();
      const difference = tgeDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(countdownTimer);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(countdownTimer);
    };
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-neuro-500/20 to-transparent opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-neuro-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full animate-float animation-delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-5 h-5 bg-neuro-500/30 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <Container>
        <div className="glass-card max-w-4xl mx-auto p-10 text-center rounded-2xl shadow-neon border border-neuro-500/20 backdrop-blur-md bg-gradient-to-b from-background/90 to-background/70 relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 -z-10 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20"></div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4 reveal reveal-delay-1">
            <Rocket className="h-4 w-4 animate-pulse" />
            <span>Token Generation Event</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 reveal reveal-delay-1">Join the $NLOV Presale Now</h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto reveal reveal-delay-2">
            Be part of the revolution in AI, compute, and blockchain. Limited allocation available for early supporters.
          </p>
          
          {/* Countdown timer */}
          <div className="mb-10 reveal reveal-delay-3">
            <p className="text-sm text-muted-foreground mb-3">TGE Countdown:</p>
            <div className="flex justify-center gap-4">
              <div className="glass-card-dark p-3 w-20 rounded-lg shadow-card border border-neuro-500/20 bg-gradient-to-b from-neuro-500/10 to-transparent">
                <div className="text-2xl font-bold text-neuro-400">{formatNumber(countdown.days)}</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
              <div className="glass-card-dark p-3 w-20 rounded-lg shadow-card border border-neuro-500/20 bg-gradient-to-b from-neuro-500/10 to-transparent">
                <div className="text-2xl font-bold text-neuro-400">{formatNumber(countdown.hours)}</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="glass-card-dark p-3 w-20 rounded-lg shadow-card border border-neuro-500/20 bg-gradient-to-b from-neuro-500/10 to-transparent">
                <div className="text-2xl font-bold text-neuro-400">{formatNumber(countdown.minutes)}</div>
                <div className="text-xs text-muted-foreground">Minutes</div>
              </div>
              <div className="glass-card-dark p-3 w-20 rounded-lg shadow-card border border-neuro-500/20 bg-gradient-to-b from-neuro-500/10 to-transparent">
                <div className="text-2xl font-bold text-neuro-400">{formatNumber(countdown.seconds)}</div>
                <div className="text-xs text-muted-foreground">Seconds</div>
              </div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="max-w-md mx-auto mb-8 reveal reveal-delay-3">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress: 78% Filled</span>
              <span>7.8M / 10M $NLOV</span>
            </div>
            <div className="h-3 bg-background/50 rounded-full overflow-hidden border border-neuro-500/20">
              <div className="h-full w-[78%] bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal reveal-delay-4">
            <Button variant="outline" size="lg" className="border-neuro-400/20 hover:bg-neuro-500/5 group">
              <span className="relative flex items-center">
                View Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button variant="neon" size="lg" className="group relative overflow-hidden">
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Sparkles className="mr-2 h-5 w-5 transition-all group-hover:rotate-12" />
              <span className="relative">Join Presale</span>
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="mt-8 pt-6 border-t border-neuro-500/10 reveal reveal-delay-5">
            <p className="text-xs text-muted-foreground mb-3">As Featured In</p>
            <div className="flex flex-wrap justify-center gap-8">
              <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana" className="h-6 opacity-70 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" />
              <div className="h-6 w-20 bg-muted rounded opacity-30"></div>
              <div className="h-6 w-24 bg-muted rounded opacity-30"></div>
              <div className="h-6 w-20 bg-muted rounded opacity-30"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
