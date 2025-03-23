import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Twitter, 
  MessageSquare, 
  Send, 
  Linkedin 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { label: 'Compute', href: '/products#compute' },
      { label: 'AI Models', href: '/products#ai-models' },
      { label: 'Swarm Network', href: '/products#swarm' },
      { label: 'AI Agents', href: '/products#agents' },
    ],
  },
  {
    title: 'Token',
    links: [
      { label: 'NLOV', href: '/token#overview' },
      { label: 'Presale', href: '/token#presale' },
      { label: 'Tokenomics', href: '/token#tokenomics' },
      { label: 'Utility', href: '/token#utility' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'Roadmap', href: '/ecosystem#roadmap' },
      { label: 'Partners', href: '/ecosystem#partners' },
      { label: 'Integrations', href: '/ecosystem#integrations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'How to Use', href: '/resources#how-to-use' },
      { label: 'Docs', href: '/resources#docs' },
      { label: 'FAQ', href: '/resources#faq' },
      { label: 'Support', href: '/resources#support' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 pt-16 pb-8 border-t border-border/60">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <img src="/og-image.png" alt="Neurolov" className="h-8 w-auto" />
              <span className="hero-text-gradient">Neurolov</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Empower your AI journey with decentralized computing, content generation, and blockchain rewards.
            </p>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground subtle-animate"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground subtle-animate"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground subtle-animate"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground subtle-animate"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground subtle-animate"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-medium">Stay Updated</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="mt-4 sm:flex max-w-md">
              <div className="w-full min-w-0 flex-1">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full rounded-lg border-border px-3.5 py-2" 
                />
              </div>
              <div className="mt-3 sm:ml-3 sm:mt-0">
                <Button type="submit">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p> {new Date().getFullYear()} Neurolov.ai. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
