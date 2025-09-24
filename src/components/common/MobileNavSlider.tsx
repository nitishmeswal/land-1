import React from "react";
import { Link } from "react-router-dom";

export type MobileNavLink = {
  label: string;
  href: string;
};

type MobileNavSliderProps = {
  open: boolean;
  onClose: () => void;
  links: MobileNavLink[];
  title?: string;
};

const isExternal = (href: string) => /^https?:\/\//i.test(href);

const MobileNavSlider: React.FC<MobileNavSliderProps> = ({ open, onClose, links, title = "Navigate" }) => {
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[1000] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[rgba(1,9,45,0.65)] backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Decorative gradient glow */}
      <div
        className={`pointer-events-none absolute right-0 top-0 h-1/2 w-1/2 bg-gradient-to-bl from-[#4F8EF7]/40 to-[#0361DA]/10 blur-2xl translate-x-10 -translate-y-10 ${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      />

      {/* Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-[88%] max-w-[420px] text-white shadow-2xl
        transition-transform duration-300 ease-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="relative h-full flex flex-col"
             style={{ paddingTop: 'calc(env(safe-area-inset-top) + 8px)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
          {/* Panel background with glass & border */}
          <div className="absolute inset-0 rounded-l-2xl bg-gradient-to-b from-[#061245] via-[#05153F] to-[#041032] border-l border-white/10" />

          {/* Header */}
          <div className="relative z-10 flex items-center justify-between px-4 pb-3">
            <div className="flex items-center gap-2">
              <img src="/header/logo.png" alt="Neurolov" className="h-10 mt-2 w-auto" />
             
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/15 active:scale-95 transition shadow-sm"
              aria-label="Close navigation"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="relative z-10 px-4">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3" />
          </div>

          
          {/* Grid as alternative to slider for more links */}
          <div className="relative z-10 px-4 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {links.map((link) => {
                const Card = ({ children }) => (
                  <div className="group flex items-center justify-between px-3 py-3 rounded-xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] hover:border-white/20 transition shadow-sm">
                    <span className="text-sm">{children}</span>
                    <svg className="opacity-70 group-hover:opacity-100 transition" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                );
                return isExternal(link.href) ? (
                  <a
                    key={link.href + '-grid'}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block"
                  >
                    <Card>{link.label}</Card>
                  </a>
                ) : (
                  <Link
                    key={link.href + '-grid'}
                    to={link.href}
                    onClick={onClose}
                    className="block"
                  >
                    <Card>{link.label}</Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Safe area spacer */}
          <div className="relative z-10 h-4" />

          {/* Helper styles */}
          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default MobileNavSlider;
