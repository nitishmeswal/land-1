import { useEffect, useState } from 'react';
import { SectionContainer } from '@/components/ui/Container';

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const partners = [
    { name: 'Trade Flow', logo: '/partner/Trade Flow Logo Set-03.png' },
    { name: 'Solpen', logo: '/partner/solpen_logo (1).jpg' },
    { name: 'Linklayer AI', logo: '/partner/Linklayer AI logo.jpeg' },
    { name: 'Pars Network', logo: '/partner/Pars Network.jpg' },
    { name: 'PropBlocc', logo: '/partner/PropBlocc New Logo FIX-04.png' },
    { name: 'POPP', logo: '/partner/POPP LOGO.png' },
    { name: 'Victus Global', logo: '/partner/Victus global LOGO.jpeg' },
    { name: 'Supersol', logo: '/partner/Supersol LOGO.jpeg' },
    { name: 'SoluAI', logo: '/partner/SoluAI logo.png' },
    { name: 'PowerAI', logo: '/partner/PowerAI.jpg' },
    { name: 'Rivalz Network', logo: '/partner/Rivalz Network.png' },
    { name: 'REI Network', logo: '/partner/REI Network.jpg' },
    { name: 'Life\'s Meta', logo: '/partner/Life_s Meta.jpeg' },
    { name: 'CRTAI Network', logo: '/partner/CRTAI NETWORK.png' },
    { name: 'Orbler', logo: '/partner/Orbler.AVIF' },
    { name: 'Kalp', logo: '/partner/Kalp.png' },
    { name: 'Coin Avatar', logo: '/partner/Coin Avatar.JPG' },
    { name: 'Megafin', logo: '/partner/Megafin.JPG' },
    { name: 'Artboard', logo: '/partner/Artboard 4.png' },
    { name: 'OpenLoop', logo: '/partner/OpenLoop.png' },
    { name: 'AGI Open Network', logo: '/partner/AGI Open Network.png' },
    { name: 'DMail.io', logo: '/partner/DMail.io.JPG' },
    { name: 'Intract', logo: '/partner/Intract.JPG' },
    { name: 'Bitgertbrise', logo: '/partner/Bitgertbrise.jpg' },
    { name: 'Fomoin', logo: '/partner/Fomoin.jpg' },
    { name: 'CESS', logo: '/partner/CESS LOGO.png' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 5) % partners.length);
        setIsTransitioning(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [partners.length]);

  const visiblePartners = [
    ...partners.slice(currentIndex),
    ...partners.slice(0, currentIndex)
  ].slice(0, 5);

  return (
    <div>
      <SectionContainer className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Building with the Best</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to bring you unparalleled AI and compute solutions.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className={`flex justify-center gap-8 transition-opacity duration-1000 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {visiblePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white/80 dark:bg-white/10 rounded-lg p-4 flex items-center justify-center hover:scale-105 transition-transform"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter dark:brightness-110"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
