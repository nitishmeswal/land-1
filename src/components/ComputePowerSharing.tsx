import React from "react";

const ComputePowerSharing: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full mx-auto min-h-screen flex flex-col items-center justify-start lg:justify-center py-12 lg:py-20 pb-20 text-white overflow-hidden">
        <div
          className="
            pointer-events-none absolute inset-0
            bg-[url('/compute/wave.gif')] w-full h-full bg-cover bg-center bg-no-repeat
            bg-blend-color-dodge
          "
          style={{ mixBlendMode: "color-dodge" }}
          aria-hidden="true"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-black/20"
          aria-hidden="true"
        />

        <div className="w-full text-center mb-12 lg:mb-16 px-4 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 lg:mb-6">
            Share <span className="text-[#ACD2FF]">Compute Power</span>
          </h1>
          <p className="text-base text-[#FFFFFF] max-w-4xl mx-auto leading-relaxed">
            Share idle power from mobiles, laptops, desktops, or even GPU (Data
            centers &amp; Bulk Deals) and earn $NLOV while fueling AI ecosystem,
            gaming, agentic infra, and research at unbeatable costs
          </p>
        </div>

        <div className="relative w-full max-w-7xl mx-auto z-10 px-4">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
            <div className="glowing-line w-full h-auto max-w-6xl">
              <img
                src="/compute/line.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="absolute left-4 sm:left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden sm:block z-10">
            <img
              src="/compute/left.png"
              alt="Left compute devices"
              className="w-44 h-auto"
            />
          </div>

          <div className="absolute left-64 top-1/2 -translate-y-1/2 block z-10">
            <div className="flex flex-col space-y-24 text-white text-base">
              <div className="text-left">GPU Cluster</div>
              <div className="text-left">GPU</div>
              <div className="text-left">Laptop</div>
              <div className="text-left">Mobile</div>
            </div>
          </div>

          <div className="relative flex items-center justify-center py-6 sm:py-8 z-20">
            <img
              src="/compute/logo.png"
              alt="Compute network logo"
              className="w-60 sm:w-72 lg:w-80 h-auto drop-shadow-2xl"
            />
          </div>

          <div className="absolute right-4 sm:right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden sm:block z-10">
            <img
              src="/compute/right.png"
              alt="Right compute consumers"
              className="w-40 h-auto"
            />
          </div>

          <div className="absolute right-60 top-1/2 -translate-y-1/2 block z-10">
            <div className="flex flex-col space-y-28 text-white text-sm lg:text-base">
              <div className="text-right">AI Agents</div>
              <div className="text-right">Training Gen. AI</div>
              <div className="text-right">Blockchain Computing</div>
              <div className="text-right">Autonomous Vehicle</div>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mt-16 z-10 pb-6">
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
              minWidth: 260,
              minHeight: 64,
              borderRadius: 14,
            }}
            type="button"
            aria-label="CONNECT &amp; EARN"
          >
            CONNECT &amp; EARN
          </button>
        </div>
      </div>

      <style>{`
        .glowing-line {
  position: relative;
  overflow: hidden;
}

.glowing-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(172, 210, 255, 0.3) 25%,
    rgba(172, 210, 255, 0.8) 50%,
    rgba(172, 210, 255, 0.3) 75%,
    transparent 100%
  );
  animation: glowSweep 3s linear infinite;
  z-index: 1;
}

@keyframes glowSweep {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

      `}</style>
    </div>
  );
};

export default ComputePowerSharing;
