import React from "react";

const ComputePowerSharing: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[80%] mx-auto bg-transparent min-h-screen flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
        <div className="text-center mb-16 z-10">
          <h1 className="text-6xl font-bold mb-6">
            Share{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Compute Power
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Share idle power from mobiles, laptops, desktops, or even GPU (Data
            centers & Bulk Deals) earn
            <br />
            <span className="text-green-400 font-semibold">$NLOV</span> while
            fueling AI Ecosystem, gaming, agentic infra, and research at
            unbeatable costs
          </p>
        </div>
        <div className="relative w-full max-w-7xl mx-auto z-10">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded"></div>
              </div>
              <span className="text-lg font-medium">GPU Cluster</span>
              <div className="w-32 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-10 h-6 bg-gray-300 rounded-sm flex items-center justify-center">
                  <div className="w-6 h-3 bg-green-500 rounded-xs"></div>
                </div>
              </div>
              <span className="text-lg font-medium">GPU</span>
              <div className="w-32 h-0.5 bg-gradient-to-r from-green-400 to-transparent"></div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-10 h-6 bg-gray-800 rounded-sm border border-gray-600"></div>
              </div>
              <span className="text-lg font-medium">Laptop</span>
              <div className="w-32 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 bg-blue-400 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <span className="text-lg font-medium">Mobile</span>
              <div className="w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
            </div>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <div className="w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2M12 4.14L20 8.25V10C20 14.5 17.25 18.25 12 20C6.75 18.25 4 14.5 4 10V8.25L12 4.14M10.5 6L9 12H11V18L15 12H13V6H10.5Z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-8">
            <div className="flex items-center space-x-4 group flex-row-reverse">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-lg font-medium">AI Agents</span>
              <div className="w-32 h-0.5 bg-gradient-to-l from-purple-400 to-transparent"></div>
            </div>

            <div className="flex items-center space-x-4 group flex-row-reverse">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-lg font-medium">Training Gen. AI</span>
              <div className="w-32 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent"></div>
            </div>

            <div className="flex items-center space-x-4 group flex-row-reverse">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="grid grid-cols-2 gap-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-blue-400 rounded-sm"
                    ></div>
                  ))}
                </div>
              </div>
              <span className="text-lg font-medium">Blockchain Computing</span>
              <div className="w-32 h-0.5 bg-gradient-to-l from-blue-400 to-transparent"></div>
            </div>

            <div className="flex items-center space-x-4 group flex-row-reverse">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z" />
                </svg>
              </div>
              <span className="text-lg font-medium">Autonomous Vehicle</span>
              <div className="w-32 h-0.5 bg-gradient-to-l from-gray-400 to-transparent"></div>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-60 animate-pulse"></div>

            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-40"
                style={{
                  left: "50%",
                  top: `${30 + i * 5}%`,
                  transform: `rotate(${45 + i * 45}deg)`,
                  transformOrigin: "bottom",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 z-10">
          <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xl font-semibold rounded-full shadow-2xl hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 border border-blue-400">
            CONNECT & EARN
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputePowerSharing;
