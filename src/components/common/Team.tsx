import React from "react";

export default function Team() {
  return (
    <section>
      <div className="text-center mb-6 mt-10">
        <h1 className="text-5xl font-semibold text-[#ACD2FF]">Meet Our Team</h1>
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="/token/glow.png"
          alt="spotlight"
          className="absolute inset-0 w-full h-full object-cover z-0 mt-24"
        />
        <div className="w-full md:w-1/2 relative z-10">
          <img
            src="/token/team-1.png"
            alt="Team"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 relative z-10">
          <img
            src="/token/team-2.png"
            alt="Team"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 relative z-10">
          <img
            src="/token/team-3.png"
            alt="Team"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="relative px-4 py-3 rounded-xl text-black font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)]">
          <div className="absolute inset-0">
            <img
              src="/landing-ai-model/button-bg.png"
              alt="Button Background"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <span className="relative z-10 px-6">View Full Team</span>
        </button>
      </div>
    </section>
  );
}
