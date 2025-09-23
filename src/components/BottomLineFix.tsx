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
          fontSize: 'clamp(18px, 2vw, 22px)',
          fontWeight: 800,
          letterSpacing: '0.3px',
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
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "18px",
        width: "60vw",
        maxWidth: "959.9749755859375px",
        minWidth: "320px",
        height: "65px",
        zIndex: 9999,
        pointerEvents: "none",
      }}
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

      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "24px",
          background: "#06124580",
          boxShadow:
            "inset 0 0 0 1px rgba(128,186,255,0.18), 0 8px 24px rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "stretch",
          padding: "8px",
          gap: "12px",
          pointerEvents: "auto",
          backdropFilter: "blur(2px)",
        }}
      >
        <div
          style={{
            flex: "1.2 1 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            padding: "8px 14px",
            borderRadius: "20px",
            background: "#101D5866",
            minWidth: 0,
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "clamp(14px, 1.5vw, 18px)",
              fontWeight: 500,
              letterSpacing: "0.2px",
              whiteSpace: "nowrap",
            }}
          >
            Current price
          </span>
          <AnimatedPrice label="Current price" value="Revealed Soon" delay={300} />
        </div>

        <div
          style={{
            flex: "1.8 1 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            padding: "8px 12px",
            borderRadius: "20px",
            background: "#101D5866",
            minWidth: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(14px, 1.5vw, 18px)",
                fontWeight: 500,
                letterSpacing: "0.2px",
                whiteSpace: "nowrap",
              }}
            >
              ROI at TGE =
            </span>
            <span
              style={{
                color: "#80BAFF",
                fontSize: "clamp(20px, 2.2vw, 26px)",
                fontWeight: 800,
                letterSpacing: "0.4px",
                whiteSpace: "nowrap",
              }}
            >
              600%
            </span>
          </div>

          <div
            className="glow-container"
            style={{
              flexShrink: 0,
            }}
          >
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
              className="button-inner"
              style={{
                width: "180px",
                height: "30px",
                border: 0,
                outline: 0,
                background: "#0E1A52",
                backgroundImage: "url(/bottom-line/button.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                cursor: "pointer",
                display: "grid",
                placeItems: "center",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <span
                style={{
                  color: "#FFFFFF",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  position: "relative",
                  zIndex: 3,
                }}
              >
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
