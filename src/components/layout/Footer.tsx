import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a 
                href="https://twitter.com/neurolov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/twitter.svg" alt="Twitter" className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/neurolov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/discord.svg" alt="Discord" className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/neurolov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/telegram.svg" alt="Telegram" className="h-5 w-5" />
              </a>
              <a 
                href="https://reddit.com/r/neurolov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/reddit.svg" alt="Reddit" className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/neurolov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/instagram.svg" alt="Instagram" className="h-5 w-5" />
              </a>
              <a 
                href="https://medium.com/@neurolov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/medium.svg" alt="Medium" className="h-5 w-5" />
              </a>
              <a 
                href="https://dev.neurolov.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/devdigest.svg" alt="Dev Digest" className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@neurolov.ai" 
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/mail.svg" alt="Email" className="h-5 w-5" />
              </a>
              <a 
                href="https://wiki.neurolov.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/wiki.svg" alt="Wiki" className="h-5 w-5" />
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
        </div>
        
        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p> {new Date().getFullYear()} Neurolov.ai. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
