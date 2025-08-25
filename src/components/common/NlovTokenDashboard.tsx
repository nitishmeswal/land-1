import React from "react";

type CardProps = {
  title: string;
  subtitle: string;
  img: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, subtitle, img, className }) => {
  return (
    <div
      className={[
        "relative isolate rounded-2xl w-[320px] h-[150px] overflow-hidden",

        className || "",
      ].join(" ")}
    >
      <img
        src={`/${img}`}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover opacity-90 pointer-events-none"
      />
    </div>
  );
};

const TokenShowcase: React.FC = () => {
  return (
    <section className="relative w-[85vw] mx-auto bg-[url('/token/bg.png')] bg-fill">
      <div className="relative mx-auto max-w-7xl px-10">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-semibold text-[#ACD2FF]">$NLOV Token</h1>
          <div className="max-w-5xl mx-auto text-sm md:text-base font-normal text-gray-300 leading-relaxed tracking-wide">
            $NLOV is set to become the backbone of the Neurolov ecosystem,
            powering all features and transactions. With the full platform and
            features already live, $NLOV demand—and its value—will naturally
            skyrocket at launch
          </div>

          <button className="w-full max-w-[230px] relative px-6 md:px-8 py-3 md:py-4 rounded-xl text-black font-semibold text-base md:text-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="absolute inset-0">
              <img
                src="/landing-ai-model/button-bg.png"
                alt="Button Background"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <span className="relative z-10">Read Docs</span>
          </button>
        </div>

        <div
          className="
            relative mx-auto h-[760px]
            w-full max-w-[1100px]
          "
        >
          <img
            src="/token/ring.png"
            alt="center glow lines"
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[360px]
              opacity-95 pointer-events-none z-0
              mix-blend-screen
            "
          />

          <img
            src="/token/coin.png"
            alt="coin"
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-[380px] 
              z-20
            "
            style={{
              filter:
                "drop-shadow(0 10px 25px rgba(0,0,0,0.35)) drop-shadow(0 0 40px rgba(88,160,255,0.55))",
            }}
          />

          <div className="hidden md:block">
            <div className="absolute left-1/2 top-[14%] -translate-x-1/2 z-10">
              <Card
                title="Subscriptions"
                subtitle="Unlock premium features with $NLOV."
                img="token/subscriptions.png"
              />
            </div>

            <div className="absolute left-[6%] top-[40%] z-10">
              <Card
                title="Governance"
                subtitle="Shape the future via DAO voting."
                img="token/governance.png"
                className="w-[300px]"
              />
            </div>

            <div className="absolute right-[6%] top-[40%] z-10">
              <Card
                title="Staking"
                subtitle="Secure the network and boost rewards."
                img="token/staking.png"
                className="w-[300px]"
              />
            </div>

            <div className="absolute left-[18%] bottom-[14%] z-10">
              <Card
                title="Marketplace"
                subtitle="Access GPUs, run AI, deploy agents."
                img="token/market.png"
              />
            </div>

            <div className="absolute right-[18%] bottom-[14%] z-10">
              <Card
                title="Swarm Rewards"
                subtitle="Earn $NLOV by contributing compute."
                img="token/reward.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default TokenShowcase;
