import React from "react";

type Partner = {
  name: string;
  logo: React.ReactNode;
};

const partners: Partner[] = [
  {
    name: "BINANCE",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2 7.5 6.5 9 8l3-3 3 3 1.5-1.5L12 2Zm-7 7L2 12l3 3 1.5-1.5L5 12l1.5-1.5L5 9Zm14 0L17.5 10.5 19 12l-1.5 1.5L21 15l3-3-3-3Zm-7 1-3 3 3 3 3-3-3-3Z"
        />
      </svg>
    ),
  },
  {
    name: "BYBIT",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <circle cx="12" cy="12" r="9" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "NVIDIA",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M4 12c4-6 12-6 16 0-4 6-12 6-16 0Zm8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
      </svg>
    ),
  },
  {
    name: "Grok",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path fill="currentColor" d="M12 3 4 9l8 12 8-12-8-6Z" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M7 5h10v2H7V5Zm-2 6h14v2H5v-2Zm2 6h10v2H7v-2Z"
        />
      </svg>
    ),
  },
  {
    name: "SOLANA",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M3 7h14l4-3H7l-4 3Zm0 10h14l4-3H7l-4 3Zm0-5h14l4-3H7l-4 3Z"
        />
      </svg>
    ),
  },
  {
    name: "Gate",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2 2 12l10 10 10-10L12 2Zm0 4 6 6-6 6-6-6 6-6Z"
        />
      </svg>
    ),
  },
  {
    name: "AMD",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M3 3h8v8H3V3Zm10 0h8v8h-8V3Zm0 10h8v8h-8v-8Zm-10 0h8v8H3v-8Z"
        />
      </svg>
    ),
  },
  {
    name: "KUCOIN",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M5 5h2l12 12v2h-2L5 7V5Zm0 12 12-12h2v2L9 19H7v-2Z"
        />
      </svg>
    ),
  },
  {
    name: "Bitget",
    logo: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-sky-300" aria-hidden>
        <path
          fill="currentColor"
          d="M4 12 12 4l8 8-8 8-8-8Zm4 0 4 4 4-4-4-4-4 4Z"
        />
      </svg>
    ),
  },
];

const whyItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" aria-hidden>
        <path
          fill="currentColor"
          d="M16.5 3a4.5 4.5 0 0 1 4.1 6.3l-8.6 8.6a3 3 0 0 1-1.5.8l-4.2.9a.75.75 0 0 1-.87-.87l.9-4.2a3 3 0 0 1 .8-1.5l8.6-8.6A4.5 4.5 0 0 1 16.5 3Zm0 1.5a3 3 0 0 0-2.1.9l-.7.7 3.2 3.2.7-.7a3 3 0 0 0-2.1-5.1ZM4.75 20.25h4.06l-3.53-3.53-.53 2.44a1.25 1.25 0 0 0 1 1.52Z"
        />
      </svg>
    ),
    title: "$12M Compute Deal Secured",
    body: "Historic partnership with government & institutions. Delivering decentralized compute power to startups and universities at scale.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2 1 7l11 5 9-4.091V17h2V7L12 2ZM3 18v2h10v-2H3Zm0-5v2h10v-2H3Z"
        />
      </svg>
    ),
    title: "Backed by Mario Nawfal & Victus Global",
    body: "Endorsed by top Web3 voices. Supported by the world’s top crypto influencer and a leading global VC.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" aria-hidden>
        <path
          fill="currentColor"
          d="M4 4h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6l-4 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
        />
      </svg>
    ),
    title: "World’s First Browser‑Based Compute Network",
    body: "Contribute via browser—no setup needed. Built on WebGPU/WebGL; earn $ENLOV by sharing idle device power with institutions at scale.",
  },
];

export default function PoweredAndWhy() {
  return (
    <section className="relative w-full overflow-hidden bg-[url('/powered/star-bg.png')] bg-top bg-cover bg-no-repeat">
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,12,28,0.25),rgba(6,12,28,0.7)_60%,rgba(6,12,28,0.85))] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Powered By */}
        <header className="text-center">
          <h2 className="text-[40px] sm:text-5xl font-extrabold tracking-tight text-sky-200">
            Powered By
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative flex items-center justify-center gap-3 rounded-md bg-[#0a1b44] px-6 py-5 text-sky-200 shadow-md ring-1 ring-white/10"
            >
              {/* Corner brackets */}
              <span className="absolute inset-0 pointer-events-none">
                <span className="absolute left-2 top-2 h-4 w-4 border-t-2 border-l-2 border-sky-300/60 rounded-tl-sm" />
                <span className="absolute right-2 top-2 h-4 w-4 border-t-2 border-r-2 border-sky-300/60 rounded-tr-sm" />
                <span className="absolute left-2 bottom-2 h-4 w-4 border-b-2 border-l-2 border-sky-300/60 rounded-bl-sm" />
                <span className="absolute right-2 bottom-2 h-4 w-4 border-b-2 border-r-2 border-sky-300/60 rounded-br-sm" />
              </span>

              {p.logo}
              <span className="text-lg font-semibold tracking-wide text-sky-200">
                {p.name}
              </span>
            </div>
          ))}
        </div>

        {/* Why Neurolov */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            <span className="text-white/80">WHY </span>
            <span className="text-sky-300">NEUROLOV?</span>
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-6">
            {whyItems.map((it, idx) => (
              <div key={idx} className="flex items-stretch gap-4">
                {/* Icon column */}
                <div className="flex w-20 shrink-0 items-center justify-center rounded-md bg-[#0a1b44] ring-1 ring-white/10">
                  {it.icon}
                </div>

                {/* Content card with angled right edge */}
                <div className="relative flex-1">
                  <div className="neu-card">
                    <div className="p-5 sm:p-6">
                      <h4 className="text-white text-lg sm:text-xl font-semibold">
                        {it.title}
                      </h4>
                      <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed">
                        {it.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
