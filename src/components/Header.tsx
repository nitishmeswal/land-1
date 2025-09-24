import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import MobileNavSlider from "@/components/common/MobileNavSlider";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  nav?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const DEFAULT_NAV: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Token", href: "/token/overview" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Compute App", href: "https://app.neurolov.ai" },
];

const isExternal = (href: string) => /^https?:\/\//i.test(href);

const Header: React.FC<Props> = ({
  nav = DEFAULT_NAV,
  ctaLabel = "JOIN PRESALE",
  ctaHref = "#presale",
  className = "",
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
  const handlePresaleClick = (e: React.MouseEvent) => {
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
  return (
    <header
      className={`header-root ${className}`}
      role="banner"
      aria-label="Site header"
    >
      <div className="header-outer">
        <div className="header-inner">
          <Link className="brand" to="/" aria-label="Homepage">
            <img className="brand-logo" src="/header/logo.png" alt="Brand" />
          </Link>

          <div className="end-group">
            <nav className="nav" aria-label="Primary">
              <ul className="nav-list">
                {nav.map((item) => (
                  <li key={item.href} className="nav-li">
                    {isExternal(item.href) ? (
                      <a
                        href={item.href}
                        className="nav-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.href} className="nav-link">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <span className="cta-mobile-wrap">
              <button
                className="cta-mobile cta-image-mobile no-hover"
                onClick={() => setIsMobileNavOpen(true)}
                aria-label={ctaLabel}
              >
                <span className="visually-hidden">{ctaLabel}</span>
              </button>
            </span>

            <span className="cta-desktop-wrap">
              <button
                className="cta cta-image no-hover"
                onClick={handlePresaleClick}
                aria-label={ctaLabel}
              >
                <span className="visually-hidden">{ctaLabel}</span>
              </button>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .header-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 2147483647;
          pointer-events: none;
        }
        .header-outer {
          display: flex;
          justify-content: center;
          padding-top: 58px;
          padding-bottom: 12px;
          pointer-events: none;
        }
        .header-inner {
          width: 82%;
          max-width: 1400px;
          min-width: 320px;
          height: 72px;
          background: #040D33CC;
          border-radius: 999px;
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          padding: 0 16px 0 16px;
          gap: 12px;
          box-shadow:
            0 2px 6px rgba(0,0,0,0.25),
            inset 0 0 0 1px rgba(255,255,255,0.035);
          backdrop-filter: saturate(120%) blur(6px);
          -webkit-backdrop-filter: saturate(120%) blur(6px);
          pointer-events: auto;
        }
        .brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }
        .brand-logo {
          height: 34px;
          width: auto;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
        }

        .end-group {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 28px;
          min-width: 0;
        }
        .nav { overflow: hidden; }
        .nav-list {
          display: flex;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: nowrap;
        }
        .nav-li { display: inline-flex; }
        .nav-link {
          color: #EDEFF8;
          text-decoration: none;
          font-size: 16px;
          line-height: 1;
          opacity: 0.95;
          white-space: nowrap;
        }

        .cta-mobile-wrap { display: none; }
        .cta-desktop-wrap { display: inline-block; }

        .cta {
          position: relative;
          display: inline-block;
          height: 52px;
          width: 190px;
          border-radius: 999px;
          overflow: hidden;
          flex: 0 0 auto;
          text-decoration: none;
          isolation: isolate;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .cta-image {
          background-image: url("/header/button.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
        }

        .cta-mobile {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 5px;
          height: 45px;
          width: 45px;
          border-radius: 999px;
          overflow: hidden;
          flex: 0 0 auto;
          text-decoration: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .cta-image-mobile {
          background-image: url("/header/menu.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
        }

        .cta::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          --btn-h: 52px;
          width: var(--btn-h);
          height: var(--btn-h);
          transform: translate(-50%, -50%) scale(0.05);
          transform-origin: center center;
          border-radius: 999px;
          border: 2px solid #A8CEFF;
          box-sizing: border-box;
          pointer-events: none;
          opacity: 0;
          animation: ring-fill 1.8s ease-out infinite;
        }
        .cta { --btn-h: 52px; }

        @keyframes ring-fill {
          0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.05); }
          10%  { opacity: 1; }
          70%  { opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(4.8); opacity: 0; }
        }

        .no-hover:hover,
        .no-hover:focus-visible {
          opacity: inherit;
          transform: none;
          box-shadow: none;
          outline: none;
        }
        .visually-hidden {
          position: absolute !important;
          width: 1px; height: 1px;
          padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0 0 0 0);
          white-space: nowrap; border: 0;
        }
        :root { --header-offset: 122px; }
        body { scroll-padding-top: var(--header-offset); }

        @media (max-width: 1280px) {
          .header-inner { width: 78%; }
          .nav-list { gap: 24px; }
          .cta { width: 210px; height: 50px; }
        }
        @media (max-width: 1100px) {
          .header-inner { width: 82%; }
          .nav-link { font-size: 15px; }
          .cta { width: 200px; height: 48px; }
        }
        @media (max-width: 992px) {
          .header-inner { width: 88%; height: 66px; }
          .nav-list { gap: 18px; }
          .nav-link { font-size: 14px; }
          .cta { width: 184px; height: 46px; }
          .brand-logo { height: 32px; }
        }
        @media (max-width: 768px) {
          .header-inner {
            width: 92%;
            grid-template-columns: auto 1fr;
            padding: 0 12px;
            height: 62px;
          }
          .nav { display: none; }
          .cta-desktop-wrap { display: none; }
          .cta-mobile-wrap { display: inline-block; }
          .cta { width: 168px; height: 44px; }
        }

        @media (max-width: 1280px) { .cta { --btn-h: 50px; } }
        @media (max-width: 1100px) { .cta { --btn-h: 48px; } }
        @media (max-width: 992px)  { .cta { --btn-h: 46px; } }
        @media (max-width: 768px)  { .cta { --btn-h: 44px; } }
      `}</style>
      <MobileNavSlider
        open={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        links={nav}
        title="Quick Navigation"
      />
    </header>
  );
};

export default Header;
