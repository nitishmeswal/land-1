import React from "react";

export default function Highlight() {
  return (
    <section>
      <div className="w-full text-center mb-12 lg:mb-16 px-4 z-10">
        <h1 className="text-5xl tracking-tight mb-4 lg:mb-6">
          <span className="text-[#ACD2FF]">
            {" "}
            Product <span className="font-bold">Highlights</span>
          </span>
        </h1>
      </div>

      {/* Container to stack images vertically and limit width */}
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4">
        <div className="w-full flex justify-center items-center">
          <img src="/highlight/1.png" alt="" className="w-full" />
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
