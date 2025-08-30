import React from "react";

type Partner = {
  image: string;
};

const partners_1: Partner[] = [
  {
    image: "/powered/1.png",
  },
  {
    image: "/powered/2.png",
  },
  {
    image: "/powered/3.png",
  },
  {
    image: "/powered/4.png",
  },
  {
    image: "/powered/5.png",
  },
];

const partners_2: Partner[] = [
  {
    image: "/powered/5.png",
  },
  {
    image: "/powered/4.png",
  },
  {
    image: "/powered/3.png",
  },
  {
    image: "/powered/2.png",
  },
  {
    image: "/powered/1.png",
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
    body: "Endorsed by top Web3 voices. Supported by the world's top crypto influencer and a leading global VC.",
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
    title: "World's First Browser‑Based Compute Network",
    body: "Contribute via browser—no setup needed. Built on WebGPU/WebGL; earn $ENLOV by sharing idle device power with institutions at scale.",
  },
];

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <div className="group relative  min-w-[250px] mx-3">
    <img src={partner.image} alt="Partner logo" className=" object-cover" />
  </div>
);

export default function PoweredAndWhy() {
  // Create duplicated arrays for seamless infinite scroll
  const duplicatedPartners_1 = [...partners_1, ...partners_1, ...partners_1];
  const duplicatedPartners_2 = [...partners_2, ...partners_2, ...partners_2];

  return (
    <section className="relative w-full overflow-hidden bg-[url('/powered/star-bg.png')] bg-top bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,12,28,0.25),rgba(6,12,28,0.7)_60%,rgba(6,12,28,0.85))] pointer-events-none" />

      <style>{`
        @keyframes slide-left-to-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .slide-left-to-right {
          animation: slide-left-to-right 10s linear infinite;
        }

        .slide-right-to-left {
          animation: slide-right-to-left 10s linear infinite;
        }
      `}</style>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <header className="text-center">
          <h2 className="text-[40px] sm:text-5xl font-medium font-sans tracking-tight text-[#ACD2FF]">
            Powered By
          </h2>
        </header>
      </div>

      {/* First sliding row - Left to Right */}
      <div className=" w-full overflow-hidden">
        <div className="flex slide-left-to-right">
          {duplicatedPartners_1.map((partner, index) => (
            <PartnerCard key={`ltr-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      {/* Second sliding row - Right to Left */}
      <div className="mt-6 w-full overflow-hidden">
        <div className="flex slide-right-to-left">
          {duplicatedPartners_2.map((partner, index) => (
            <PartnerCard key={`rtl-${index}`} partner={partner} />
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-white/80">WHY </span>
          <span className="text-sky-300">NEUROLOV?</span>
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6">
          {whyItems.map((it, idx) => (
            <div key={idx} className="flex items-stretch gap-4">
              <div className="flex w-20 shrink-0 items-center justify-center rounded-md bg-[#0a1b44] ring-1 ring-white/10">
                {it.icon}
              </div>
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
    </section>
  );
}
