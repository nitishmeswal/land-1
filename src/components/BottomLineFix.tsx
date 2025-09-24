import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

// Price animation component with glowing effect
const AnimatedPrice = ({ label, value = "Revealed Soon", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', minWidth: 0, overflow: 'hidden' }}>
      <span 
        className={`inline-block transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          color: '#82FFEA',
          fontSize: 'clamp(12px, 2.5vw, 16px)',
          fontWeight: 800,
          letterSpacing: '0.2px',
          whiteSpace: 'nowrap',
          position: 'relative',
          animation: isVisible ? 'pulse 2s infinite' : 'none'
        }}
      >
        {value}
        <span 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #82FFEA, #80B8FF)',
            filter: 'blur(4px)',
            opacity: 0.3,
            animation: isVisible ? 'ping 2s infinite' : 'none',
            zIndex: -1
          }}
        />
      </span>
    </div>
  );
};

type Props = { onJoin?: () => void };

const BottomLineFix: React.FC<Props> = ({ onJoin }) => {
  return (
    <div
      aria-label="bottom-offer-bar"
      className="fixed left-1/2 transform -translate-x-1/2 bottom-3 w-[92vw] max-w-[320px] min-w-[260px] h-[86px] z-[9999] pointer-events-none"
    >
      <style>
        {`
          @keyframes glowLeftToRight {
            0% {
              transform: translateX(-150%);
            }
            100% {
              transform: translateX(150%);
            }
          }
          
          .glow-container {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            border: 1.5px solid #002554;
            padding: 3px;
            background: #002554;
          }
          
          .glow-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, #0361DA, transparent);
            animation: glowLeftToRight 2.5s linear infinite;
            z-index: 1;
            border-radius: 12px;
          }
          
          .button-inner {
            position: relative;
            z-index: 2;
            border-radius: 9px;
            overflow: hidden;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>

      <div className="w-full h-full rounded-2xl bg-[#06124580] shadow-[inset_0_0_0_1px_rgba(128,186,255,0.18),_0_8px_24px_rgba(0,0,0,0.35)] flex flex-col items-stretch p-1.5 gap-1.5 pointer-events-auto backdrop-blur-sm">
        {/* Current Price Section */}
        <div className="flex items-center justify-center gap-1.5 px-2 py-1 rounded-lg bg-[#101D5866]">
          <span className="text-white/90 text-xs font-medium whitespace-nowrap">
            Current price
          </span>
          <AnimatedPrice label="Current price" value="Revealed Soon" delay={300} />
        </div>

        {/* JOIN NOW Button Section */}
        <div className="flex items-center justify-center">

          <div className="glow-container flex-shrink-0">
            <button
              type="button"
              onClick={() => {
                // Open Google Form
                window.open('https://forms.gle/awCVM6xa9hUFQv926', '_blank', 'noopener,noreferrer');
                
                // Show toast
                toast('Opening waitlist form! Join for exclusive presale access!', {
                  duration: 4000,
                  style: {
                    background: 'linear-gradient(135deg, #0361DA 0%, #4F8EF7 100%)',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    boxShadow: '0 10px 25px rgba(3, 97, 218, 0.3)',
                  },
                });
                
                // Call the original onJoin if provided
                if (onJoin) onJoin();
              }}
              className="button-inner w-[120px] h-[28px] border-0 outline-0 bg-[#0E1A52] bg-cover bg-no-repeat bg-center cursor-pointer grid place-items-center relative transition-all duration-300 hover:scale-105"
              style={{
                backgroundImage: "url(/bottom-line/button.png)",
              }}
            >
              <span className="text-white text-xs font-semibold uppercase tracking-wide relative z-10">
                JOIN NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLineFix;
