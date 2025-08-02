import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Compute", href: "/products/compute" },
      { label: "AI Models", href: "/products/ai-models" },
      { label: "Neuro Swarm", href: "/products/swarm" },
      { label: "AI Agents", href: "/products/agents" },
    ],
  },
  {
    title: "Token",
    links: [
      { label: "$NLOV", href: "/token/overview" },
      { label: "Tokenomics", href: "/token/tokenomics" },
      { label: "Utility", href: "/token/utility" },
      { label: "FAQ", href: "/token/faq" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Roadmap", href: "/ecosystem/roadmap" },
      { label: "Partners", href: "/ecosystem/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Technical Papers", href: "/resources" },
      { label: "Community", href: "/resources/docs" },
      { label: "Blog & Updates", href: "/whitepaper" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Team", href: "/about/team" },
      { label: "Mission", href: "/about/mission" },
    ],
  },
 
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* Logo and description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 lg:pr-8 mb-6 lg:mb-0">
            <Link
              to="/"
              className="flex items-center space-x-2 text-lg font-bold"
            >
              <picture>
  <img src="/og-image.png" alt="Neurolov" width="120" height="28" className="h-7 w-auto" loading="lazy" />
</picture>
              <span className="hero-text-gradient">Neurolov</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Empower your AI journey with decentralized computing, content
              generation, and blockchain rewards.
            </p>

            <div className="mt-6 flex items-center gap-6">
              <a
                href="https://twitter.com/neurolov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img
                  src="/icons/twitter.svg"
                  alt="Twitter"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="https://discord.gg/Bu7BnZ85kb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img
                  src="/icons/discord.svg"
                  alt="Discord"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="https://t.me/neurolovcommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img
                  src="/icons/telegram.svg"
                  alt="Telegram"
                  className="h-5 w-5"
                />
              </a>
              <a
                href="mailto:support@neurolov.ai"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img src="/icons/mail.svg" alt="Email" className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/neurolov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
              >
                <img
                  src="/icons/github.svg"
                  alt="GitHub"
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>

          {/* Footer links */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-4">
            {footerLinks.map((group, idx) => (
  <div
    key={idx}
    className={`px-2 ${group.title === "Legal" ? "col-span-2 sm:col-span-1 flex flex-col items-start" : ""}`}
  >
    <h3 className="text-sm font-semibold mb-3">{group.title}</h3>
    <ul
      className={
        group.title === "Legal"
          ? "flex flex-col space-y-2.5 w-full"
          : "space-y-2.5"
      }
    >
      {group.links.map((link, linkIdx) => (
        <li key={linkIdx} className="w-full">
          <Link
            to={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors block w-full"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
))}
          </div>
        </div>

        {/* Legal links row above copyright */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <Link to="/legal/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/legal/terms-and-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
          <Link to="/legal/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</Link>
          <Link to="/legal/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
        </div>
        <div className="mt-4 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p> {new Date().getFullYear()} Neurolov.ai. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
