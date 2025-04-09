import { useEffect, useRef, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Rocket, Sparkles, ArrowRight, Bell, Users, Shield, Lock, Zap } from 'lucide-react';

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
        <div className="glass-card max-w-3xl mx-auto p-10 text-center rounded-2xl shadow-neon border border-neuro-500/20 backdrop-blur-md bg-gradient-to-b from-background/90 to-background/70 relative overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 -z-10 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-20"></div>

          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4 reveal reveal-delay-1">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Coming Soon</span>
          </div>

          <h2 className="text-3xl font-bold mb-4 reveal reveal-delay-1">Don't Miss the $NLOV Presale</h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto reveal reveal-delay-2">
            Join our newsletter to be the first to know when our presale launches. Get exclusive access, early bird rewards, and important updates about the future of AI compute.
          </p>

          {/* Newsletter form */}
          <div className="max-w-md mx-auto mb-8 reveal reveal-delay-3">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 rounded-xl border border-neuro-500/20 focus:border-neuro-500 focus:ring-1 focus:ring-neuro-500 outline-none transition-all duration-300"
              />
              <Button 
                type="submit"
                variant="neon"
                className="group relative overflow-hidden whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Bell className="mr-2 h-4 w-4 transition-all group-hover:rotate-12" />
                <span className="relative">Notify Me</span>
              </Button>
            </form>
          </div>

          {/* Social proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground reveal reveal-delay-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>2.5k+ Waitlist Members</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Early Access to Neuro Swarm Mainnet</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
