
import { useEffect, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function CallToAction() {
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
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-neuro-500/10 to-transparent opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <div className="glass-card max-w-4xl mx-auto p-10 text-center rounded-2xl shadow-card border border-white/20 backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 reveal reveal-delay-1">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto reveal reveal-delay-2">
            Explore our products or join the presale to be part of the future of AI, compute, and blockchain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal reveal-delay-3">
            <Button variant="outline" size="lg">
              View Products
            </Button>
            <Button variant="neon" size="lg">
              Join Presale
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
