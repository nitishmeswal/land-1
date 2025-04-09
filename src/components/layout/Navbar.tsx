import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { useState, useRef } from 'react';

const navItems = {
  products: {
    label: 'Products',
    items: [
      { label: 'Compute', href: '/products#compute' },
      { label: 'AI Models', href: '/products#ai-models' },
      { label: 'AI Agents', href: '/products#ai-agents' },
      { label: 'Neuro Swarm', href: '/products#swarm-network' }
    ]
  },
  token: {
    label: 'Token',
    items: [
      { label: '$NLOV', href: '/token' },
      { label: 'Tokenomics', href: '/token#tokenomics' },
      { label: 'Utility', href: '/token#utility' },
      { label: 'FAQ', href: '/token#faq' }
    ]
  },
  ecosystem: {
    label: 'Ecosystem',
    items: [
      { label: 'Roadmap', href: '/ecosystem#roadmap' },
      { label: 'Partners', href: '/ecosystem#partners' },
    ]
  },
  resources: {
    label: 'Resources',
    items: [
      { label: 'Overview', href: '/resources' },
      { label: 'Documentation', href: '/resources#docs' },
      { label: 'Whitepaper', href: '/whitepaper' },
      { label: 'Pitch Deck', href: '/pitch-deck' }
    ]
  },
  about: {
    label: 'About',
    items: [
      { label: 'Team', href: '/about#team' },
      { label: 'Mission', href: '/about#mission' },
      
    ]
  }
};

const NavItem = ({ label, items }: { label: string; items: { label: string; href: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 50); // Reduced from 150ms to 50ms for faster response
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-1 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 transition-all duration-300">
        <span className="text-sm text-white/90 hover:text-white">{label}</span>
        <ChevronDown className={`h-4 w-4 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {/* Add a transparent bridge to prevent gap */}
      <div className="absolute -bottom-2 left-0 right-0 h-2" />
      
      {isOpen && (
        <div 
          className="absolute left-0 mt-2 w-48 rounded-xl bg-[#06115D] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#06115D]">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/og-image.png" alt="Neurolov" className="h-8 w-auto" />
            <span className="text-xl font-bold text-white">Neurolov</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {Object.entries(navItems).map(([key, { label, items }]) => (
              <NavItem key={key} label={label} items={items} />
            ))}
            <a 
              href="https://app.neurolov.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 text-sm text-white/90 hover:text-white transition-all duration-300"
            >
              App
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="rounded-full text-white/90 hover:text-white hover:bg-white/10">
              Contact Us
            </Button>
            <Button className="rounded-full bg-neuro-500 hover:bg-neuro-600 text-white">
              Try Testnet
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-white hover:bg-white/10 rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-black/20 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              {Object.entries(navItems).map(([key, { label, items }]) => (
                <div key={key} className="px-4">
                  <div className="text-sm font-medium text-white mb-2">{label}</div>
                  <div className="ml-4 flex flex-col space-y-2">
                    {items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="text-sm text-white/90 hover:text-white transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <a 
                href="https://app.neurolov.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm text-white/90 hover:text-white transition-all duration-300"
              >
                App
              </a>
              <div className="pt-4 space-y-3 px-4">
                <Button variant="ghost" className="w-full rounded-full text-white/90 hover:text-white hover:bg-white/10">
                  Contact Us
                </Button>
                <Button className="w-full rounded-full bg-neuro-500 hover:bg-neuro-600 text-white">
                  Try Testnet
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
