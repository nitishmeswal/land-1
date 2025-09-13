import React from "react";

export default function Highlight() {
  return (
    <section>
      <div className="w-full text-center mb-12 lg:mb-16 px-4 z-10">
        <h1 className="text-5xl tracking-tight mb-4 lg:mb-6">
          <span className="text-[#ACD2FF]">
            Product <span className="font-bold">Highlights</span>
          </span>
        </h1>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4">
        <div className="w-full flex justify-center items-center relative">
          <img src="/highlight/1.png" alt="" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-start pl-24">
            <div className="max-w-lg text-white">
              <h2 className="text-3xl font-semibold mb-6 text-white">
                GPU Compute
              </h2>
              <p className="text-lg my-10 leading-relaxed opacity-90">
                Rent GPUs for AI training and inference. Affordable, scalable
                compute power for all. Why it matters: Access high- performance
                GPUs on demand, no need to own expensive hardware. Ideal for
                researchers, startups, and creators who need flexible,
                affordable compute resources.
              </p>
              <button
                onClick={() => {
                  window.open("https://swarm.neurolov.ai", "_blank");
                }}
                className="relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]"
                style={{
                  backgroundImage: "url('/compute/button.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minWidth: 200,
                  minHeight: 44,
                  borderRadius: 14,
                }}
                type="button"
                aria-label="CONNECT &amp; EARN"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <img src="/highlight/2.png" alt="" className="w-full" />
        </div>
        <div className="w-full flex justify-center items-center">
          <img src="/highlight/3.png" alt="" className="w-full" />
        </div>
        <div className="w-full flex justify-center items-center">
          <img src="/highlight/4.png" alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
