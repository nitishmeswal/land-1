
import { useEffect, useRef } from 'react';
import { SectionContainer } from '@/components/ui/Container';

export default function Partners() {
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

  // Placeholder partner logos (replace with actual partners)
  const partners = [
    { name: 'Solana', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { name: 'Partner 2', logo: 'https://via.placeholder.com/150x50?text=Partner+2' },
    { name: 'Partner 3', logo: 'https://via.placeholder.com/150x50?text=Partner+3' },
    { name: 'Partner 4', logo: 'https://via.placeholder.com/150x50?text=Partner+4' },
    { name: 'Partner 5', logo: 'https://via.placeholder.com/150x50?text=Partner+5' },
  ];

  return (
    <SectionContainer className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4 reveal reveal-delay-1">Building with the Best</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
          We collaborate with industry leaders to bring you unparalleled AI and compute solutions.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 reveal reveal-delay-3">
        {partners.map((partner, index) => (
          <div 
            key={index} 
            className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
          >
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
