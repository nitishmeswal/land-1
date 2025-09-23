import React from "react";

const AIModelsSectionMobile: React.FC = () => {
  return (
    <section className="relative w-full px-4 py-8 bg-[#030924]">
      {/* Simple AI Models Card */}
      <div className="relative w-full mx-auto rounded-3xl overflow-hidden" style={{ height: "580px" }}>
        
        {/* BG (1) Background */}
        <div className="absolute inset-0">
          <img
            src="/landing-ai-model/BG (1).png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* BG Layer */}
        <div className="absolute inset-0">
          <img
            src="/landing-ai-model/BG.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-6">
          
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">AI MODELS</h2>
          </div>

          {/* Center GIF - Larger and more prominent */}
          <div className="flex-1 flex justify-center items-center mb-6">
            <div className="w-56 h-32 flex items-center justify-center">
              <img
                src="/landing-ai-model/ai-model.gif"
                alt="AI Model Visualization"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Stats Section - More compact */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#0361DA] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ACD2FF]" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-white">
                10M+ Images Generated
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#0361DA] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ACD2FF]" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16v12H4V4z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="m8 8 4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-white">
                20,000+ Video Generated
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#0361DA] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ACD2FF]" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <path d="M12 1v6m0 6v6" stroke="currentColor" strokeWidth="2"/>
                  <path d="m21 12-6 0m-6 0-6 0" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-white">
                20M+ Query solved
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#0361DA] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#ACD2FF]" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18V5l12-2v13" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-white">
                30,000+ Music Generated
              </span>
            </div>
          </div>

          {/* USE MODELS Button */}
          <div className="relative">
            <button 
              className="w-full relative px-8 py-4 rounded-2xl text-black font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)] active:scale-95"
              onClick={() => window.open('https://app.neurolov.ai/ai-models', '_blank', 'noopener,noreferrer')}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#89BDFF] to-[#5C9EFF] rounded-2xl" />
              <span className="relative z-10">USE MODELS</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIModelsSectionMobile;
