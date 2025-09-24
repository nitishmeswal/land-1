import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import MobileNavSlider from "@/components/common/MobileNavSlider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm, { ContactFormData } from "@/components/common/ContactForm";

const navItems = {
  products: {
    label: "Products",
    items: [
      { label: "Compute", href: "/products/compute" },
      { label: "AI Models", href: "/products/ai-models" },
      { label: "Neuro Swarm", href: "/products/swarm" },
      { label: "AI Agents", href: "/products/agents" },
    ],
  },
  token: {
    label: "Token",
    items: [
      { label: "$NLOV", href: "/token/overview" },
      { label: "Tokenomics", href: "/token/tokenomics" },
      { label: "Utility", href: "/token/utility" },
      { label: "FAQ", href: "/token/faq" },
    ],
  },
  ecosystem: {
    label: "Ecosystem",
    items: [
      { label: "Roadmap", href: "/ecosystem/roadmap" },
      { label: "Partners", href: "/ecosystem/partners" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { label: "Technical Papers", href: "/resources" },
      { label: "Community", href: "/resources" },
      { label: "Blog & Updates", href: "/resources" },
    ],
  },
  about: {
    label: "About",
    items: [
      { label: "Team", href: "/about/team" },
      { label: "Mission", href: "/about/mission" },
      { label: "Contact Us", href: "/about/contact"},
    ],
  },
};

// Desktop navigation item with dropdown
const NavItem = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 50);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center space-x-1 rounded-full px-4 py-2 bg-white/5 hover:bg-white/10 transition-all duration-300">
        <span className="text-sm text-white/90 hover:text-white">{label}</span>
        <ChevronDown
          className={`h-4 w-4 text-white/70 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div className="absolute -bottom-2 left-0 right-0 h-2" />

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-xl bg-[#0361DA] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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

// Mobile navigation category with collapsible submenu and animations
const MobileNavCategory = ({
  label,
  items,
  closeMenu,
  isExpanded,
  onClick,
}) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="flex w-full justify-between items-center py-3 px-4"
      >
        <span className="text-base font-medium text-white">{label}</span>
        <ChevronDown
          className={`h-5 w-5 text-white/70 transition-transform duration-300 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionProperty: "max-height, opacity",
        }}
      >
        <div className="bg-white/5 rounded-md mx-2 mb-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={closeMenu}
              className="flex items-center space-x-2 px-6 py-3 text-sm text-white/80 hover:text-white transition-all duration-200"
            >
              <ChevronRight className="h-3 w-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const [isQuickNavOpen, setIsQuickNavOpen] = useState(false);
  const flatLinks = [
    // Flatten navItems
    ...Object.values(navItems).flatMap(({ items }) => items),
    // Extra external links
    { label: "App", href: "https://app.neurolov.ai" },
  ];
  
  const handleEarnNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Open Google Form
    window.open('https://forms.gle/awCVM6xa9hUFQv926', '_blank', 'noopener,noreferrer');
    
    // Show toast
    toast('📧 Opening waitlist form! Join for exclusive presale updates and early access!', {
      duration: 4500,
      style: {
        background: 'linear-gradient(135deg, #0361DA 0%, #4F8EF7 100%)',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '12px',
        padding: '16px 20px',
        fontSize: '14px',
        fontWeight: '500',
        boxShadow: '0 10px 25px rgba(3, 97, 218, 0.3)',
        maxWidth: '400px',
      },
    });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    // Enable scrolling when menu closes
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryClick = (categoryKey) => {
    setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey);
  };

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Fix for mobile menu z-index and positioning
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 z-[50] w-full transition-all duration-300
        ${
          isScrolled
            ? "bg-[#0361DA]/95 backdrop-blur-sm shadow-md"
            : "bg-[#0361DA]"
        }`}
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 z-20">
              <img src="/og-image.png" alt="Neurolov" className="h-10 w-auto" />
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

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              
              <button
                onClick={handleEarnNowClick}
                className="rounded-full"
              >
                <Button className="rounded-full bg-[#0361DA] hover:bg-[#0255c1] text-white transition-all duration-300 hover:scale-105 active:scale-95">
                  Join Presale
                </Button>
              </button>
            </div>

            {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-white hover:bg-white/10 rounded-full z-20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile quick nav slider trigger */}
          <button
            onClick={() => setIsQuickNavOpen(true)}
            className="md:hidden ml-2 p-2 text-white hover:text-white hover:bg-white/10 rounded-full z-20"
            aria-label="Open quick navigation"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
          </button>
          </div>
        </Container>
        <style>
          {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(8px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          `}
        </style>
      </nav>
      {/* Mobile quick navigation slider */}
      <MobileNavSlider
        open={isQuickNavOpen}
        onClose={() => setIsQuickNavOpen(false)}
        links={flatLinks}
        title="Quick Navigation"
      />
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-x-0 top-0 bottom-0 bg-[#0361DA] pt-16 z-[49] overflow-y-auto transition-all duration-500 ease ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col h-full pt-2">
          {/* Navigation Categories */}
          <div className="py-4">
            {Object.entries(navItems).map(([key, { label, items }], index) => (
              <div
                key={key}
                className="animate-slide-in"
                style={{
                  animationDelay: `${index * 50}ms`,
                  opacity: 0,
                  animation: isMenuOpen
                    ? `fadeSlideIn 0.5s ease forwards ${index * 50}ms`
                    : "none",
                }}
              >
                <MobileNavCategory
                  label={label}
                  items={items}
                  closeMenu={closeMenu}
                  isExpanded={expandedCategory === key}
                  onClick={() => handleCategoryClick(key)}
                />
              </div>
            ))}

            {/* App Link */}
            <div
              className="px-4 py-3 animate-slide-in"
              style={{
                animationDelay: `${Object.keys(navItems).length * 50}ms`,
                opacity: 0,
                animation: isMenuOpen
                  ? `fadeSlideIn 0.5s ease forwards ${
                      Object.keys(navItems).length * 50
                    }ms`
                  : "none",
              }}
            >
              <a
                href="https://app.neurolov.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center space-x-2 text-base font-medium text-white"
              >
                <span>App</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div
              className="px-4 py-6 space-y-3 mt-4"
              style={{
                opacity: 0,
                animation: isMenuOpen
                  ? `fadeSlideIn 0.5s ease forwards ${
                      (Object.keys(navItems).length + 1) * 50
                    }ms`
                  : "none",
              }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full rounded-full text-white/90 hover:text-white hover:bg-white/10"
                  >
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#0361DA] border-white/10 md:max-w-[400px] p-6 [&>button]:text-white [&>button]:hover:bg-white/10">
                  <DialogHeader>
                    <DialogTitle className="text-xl text-white">
                      Contact Us
                    </DialogTitle>
                    <DialogDescription className="text-white/80">
                      Send us a message and we'll get back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <ContactForm
                      onSubmit={async (data: ContactFormData) => {
                        console.log("Form submitted:", data);
                        alert("Thank you for your message. We'll get back to you soon!");
                        closeMenu();
                      }}
                    />
                  </div>
                </DialogContent>
              </Dialog>
              <button
                onClick={(e) => {
                  handleEarnNowClick(e);
                  closeMenu();
                }}
                className="block w-full"
              >
                <Button
                  className="w-full rounded-full bg-gradient-to-r from-[#0361DA] to-[#4F8EF7] px-5 py-2 text-white font-semibold shadow-[0_0_10px_rgba(3,97,218,0.6)] hover:shadow-[0_0_20px_rgba(3,97,218,0.8)] hover:brightness-110 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Join Presale
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
