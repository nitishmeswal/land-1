import React from "react";

type NavItem = {
  label: string;
  href: string;
};

type Props = {
  logoSrc: string;
  nav?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
};

const DEFAULT_NAV: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Token", href: "#token" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Compute App", href: "#compute" },
];

const Header: React.FC<Props> = ({
  logoSrc,
  nav = DEFAULT_NAV,
  ctaLabel = "JOIN PRESALE",
  ctaHref = "#presale",
  className = "",
}) => {
  return (
    <header
      className={`header-root ${className}`}
      role="banner"
      aria-label="Site header"
    >
      <div className="header-outer">
        <div className="header-inner">
          {/* Left: Logo fixed at start */}
          <a className="brand" href="/" aria-label="Homepage">
            <img className="brand-logo" src={logoSrc} alt="" />
          </a>

          {/* Right group: Nav + CTA aligned to end */}
          <div className="end-group">
            <nav className="nav" aria-label="Primary">
              <ul className="nav-list">
                {nav.map((item) => (
                  <li key={item.href} className="nav-li">
                    <a href={item.href} className="nav-link no-hover">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA uses image background */}
            <a className="cta cta-image no-hover" href={ctaHref}>
              <span className="visually-hidden">{ctaLabel}</span>
            </a>
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
        .nav-link {
          color: #EDEFF8;
          text-decoration: none;
          font-size: 16px;
          line-height: 1;
          opacity: 0.95;
          white-space: nowrap;
        }

        /* CTA background image button */
        .cta {
          position: relative;
          display: inline-block;
          height: 52px;
          width: 230px;
          border-radius: 999px;
          overflow: hidden;
          flex: 0 0 auto;
          text-decoration: none;
        }
        .cta-image {
          background-image: url("/header/button.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: contain;
        }

        /* Remove all hover effects on nav links and CTA by overriding */
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
          .cta { width: 168px; height: 44px; }
        }
      `}</style>
    </header>
  );
};

export default Header;
