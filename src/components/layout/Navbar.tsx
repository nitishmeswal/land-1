
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CustomDropdown, DropdownItem } from '@/components/ui/DropdownMenu';
import { cn } from '@/lib/utils';
import { 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  BarChart3,
  Code,
  Cpu,
  Network,
  Bot,
  Coins,
  HelpCircle,
  FileText,
  Users,
  BookOpen,
  Share2 
} from 'lucide-react';

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
      <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 5c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2zm6 14H10v-2h4v-6h-2v-2h4v8h4v2z" fill="currentColor"/>
    </svg>
    <span className="hero-text-gradient">Neurolov</span>
  </Link>
);

interface NavItem {
  name: string;
  path?: string;
  icon?: React.ReactNode;
  dropdownItems?: { name: string; path: string; icon?: React.ReactNode }[];
}

const navItems: NavItem[] = [
  { 
    name: 'Home', 
    path: '/',
  },
  { 
    name: 'Products', 
    icon: <Cpu className="h-4 w-4" />,
    dropdownItems: [
      { name: 'Compute', path: '/products#compute', icon: <Cpu className="h-4 w-4" /> },
      { name: 'AI Models', path: '/products#ai-models', icon: <Code className="h-4 w-4" /> },
      { name: 'Swarm Network', path: '/products#swarm', icon: <Network className="h-4 w-4" /> },
      { name: 'AI Agents', path: '/products#agents', icon: <Bot className="h-4 w-4" /> },
    ]
  },
  { 
    name: 'Token', 
    icon: <Coins className="h-4 w-4" />,
    dropdownItems: [
      { name: 'NLOV', path: '/token#overview', icon: <Coins className="h-4 w-4" /> },
      { name: 'Presale', path: '/token#presale', icon: <BarChart3 className="h-4 w-4" /> },
      { name: 'Tokenomics', path: '/token#tokenomics', icon: <BarChart3 className="h-4 w-4" /> },
      { name: 'Utility', path: '/token#utility', icon: <Share2 className="h-4 w-4" /> },
      { name: 'FAQ', path: '/token#faq', icon: <HelpCircle className="h-4 w-4" /> },
      { name: 'Governance', path: '/token#governance', icon: <Users className="h-4 w-4" /> },
    ]
  },
  { 
    name: 'Ecosystem', 
    icon: <Globe className="h-4 w-4" />,
    dropdownItems: [
      { name: 'Roadmap', path: '/ecosystem#roadmap', icon: <BookOpen className="h-4 w-4" /> },
      { name: 'Partners', path: '/ecosystem#partners', icon: <Users className="h-4 w-4" /> },
      { name: 'Integrations', path: '/ecosystem#integrations', icon: <Code className="h-4 w-4" /> },
    ]
  },
  { 
    name: 'Resources', 
    icon: <FileText className="h-4 w-4" />,
    dropdownItems: [
      { name: 'How to Use', path: '/resources#how-to-use', icon: <BookOpen className="h-4 w-4" /> },
      { name: 'Docs', path: '/resources#docs', icon: <FileText className="h-4 w-4" /> },
      { name: 'FAQ', path: '/resources#faq', icon: <HelpCircle className="h-4 w-4" /> },
      { name: 'Support', path: '/resources#support', icon: <HelpCircle className="h-4 w-4" /> },
      { name: 'Whitepaper', path: '/whitepaper', icon: <FileText className="h-4 w-4" /> },
      { name: 'Pitch Deck', path: '/pitch-deck', icon: <FileText className="h-4 w-4" /> },
    ]
  },
  { 
    name: 'About', 
    icon: <Users className="h-4 w-4" />,
    dropdownItems: [
      { name: 'Team', path: '/about#team', icon: <Users className="h-4 w-4" /> },
      { name: 'Mission', path: '/about#mission', icon: <BookOpen className="h-4 w-4" /> },
      { name: 'Vision', path: '/about#vision', icon: <BookOpen className="h-4 w-4" /> },
    ]
  },
  { 
    name: 'App', 
    path: 'https://app.neurolov.ai',
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled ? "navbar-blur py-3" : "bg-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdownItems ? (
                  <CustomDropdown 
                    trigger={
                      <span className="nav-link">
                        {item.name}
                      </span>
                    }
                  >
                    {item.dropdownItems.map((dropdownItem, idx) => (
                      <DropdownItem key={idx}>
                        <Link to={dropdownItem.path} className="flex items-center space-x-2">
                          {dropdownItem.icon}
                          <span>{dropdownItem.name}</span>
                        </Link>
                      </DropdownItem>
                    ))}
                  </CustomDropdown>
                ) : (
                  <Link to={item.path || "#"} className="nav-link">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm">
              Connect Wallet
            </Button>
            <Button variant="neon" size="sm">
              Join Presale
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background h-[calc(100vh-4rem)] overflow-y-auto animate-slide-in">
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <div key={index} className="py-2 border-b border-border/40">
                  {item.dropdownItems ? (
                    <div>
                      <button
                        className="w-full flex items-center justify-between py-2"
                        onClick={() => {
                          // Toggle this specific dropdown
                          const el = document.getElementById(`mobile-dropdown-${index}`);
                          if (el) {
                            el.classList.toggle('hidden');
                          }
                        }}
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      <div id={`mobile-dropdown-${index}`} className="hidden pl-4 mt-2 space-y-2 border-l border-border/40">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <Link 
                            key={idx} 
                            to={dropdownItem.path}
                            className="flex items-center space-x-2 py-2 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.icon}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={item.path || "#"} 
                      className="block py-2 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" className="w-full justify-center">
                  Connect Wallet
                </Button>
                <Button variant="neon" className="w-full justify-center">
                  Join Presale
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
