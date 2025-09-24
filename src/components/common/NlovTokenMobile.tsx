import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type TokenCardProps = {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  buttonText: string;
  buttonAction: () => void;
  isActive: boolean;
};

const TokenCard = ({ title, subtitle, description, image, buttonText, buttonAction, isActive }: TokenCardProps) => {
  return (
    <div className="min-w-full relative px-4">
      <img
              src={image}
              alt={title}
              className="w-full h-full object-contain"
            />
    </div>
  );
};

export default function NlovTokenMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const tokenCards = [
    {
      title: "Market",
      subtitle: "Trade $NLOV tokens",
      description: "Buy, sell, and trade $NLOV tokens on decentralized exchanges. Access the best liquidity pools.",
      image: "/token/market.png",
      buttonText: "TRADE NOW",
      buttonAction: () => window.open('https://app.neurolov.ai/market', '_blank')
    },
    {
      title: "Rewards",
      subtitle: "Earn by participating",
      description: "Earn $NLOV rewards by contributing to the network and completing tasks in the ecosystem.",
      image: "/token/reward.png",
      buttonText: "EARN REWARDS",
      buttonAction: () => window.open('https://app.neurolov.ai/rewards', '_blank')
    },
    {
      title: "Staking",
      subtitle: "Stake and earn",
      description: "Stake your $NLOV tokens to earn passive rewards and help secure the network infrastructure.",
      image: "/token/staking.png",
      buttonText: "START STAKING",
      buttonAction: () => window.open('https://app.neurolov.ai/staking', '_blank')
    },
    {
      title: "Subscriptions",
      subtitle: "Unlock premium features",
      description: "Get access to advanced AI models and premium features by using $NLOV tokens for subscriptions.",
      image: "/token/subscriptions.png",
      buttonText: "EXPLORE PLANS",
      buttonAction: () => window.open('https://app.neurolov.ai/subscription', '_blank')
    },
    {
      title: "Governance",
      subtitle: "Shape the future",
      description: "Participate in governance decisions and vote on proposals that shape Neurolov's future.",
      image: "/token/governance.png",
      buttonText: "VOTE NOW",
      buttonAction: () => window.open('https://app.neurolov.ai/governance', '_blank')
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? tokenCards.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === tokenCards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-8 bg-[url('/token/bg.png')] bg-cover bg-center">
      {/* Fixed Header Section */}
      <div className="px-6 mb-6">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-white mb-3">$NLOV Token</h2>
          <p className="text-white/80 text-xs leading-relaxed max-w-xs mx-auto">
            $NLOV is set to become the backbone of the Neurolov ecosystem, powering all features and transactions. With the full platform features already live, $NLOV demand and its value will naturally skyrocket at launch
          </p>
        </div>

        {/* Coin Image */}
        <div className="flex justify-center mb-6">
          <div className="w-240 h-240 flex items-center justify-center">
            <img
              src="/token/coin-new.png"
              alt="NLOV Token"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Sliding Cards Section */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {tokenCards.map((card, index) => (
            <TokenCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              image={card.image}
              buttonText={card.buttonText}
              buttonAction={card.buttonAction}
              isActive={index === currentIndex}
            />
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2 px-4">
        {tokenCards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-300",
              index === currentIndex 
                ? "bg-[#ACD2FF]" 
                : "bg-gray-600 hover:bg-gray-500"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* READ DOCS Button */}
      <div className="px-6 mt-6">
        <button
          onClick={() => window.open('https://docs.neurolov.ai', '_blank')}
          className="w-full relative px-8 py-3 rounded-2xl text-black font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(137,189,255,0.8)] active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#89BDFF] to-[#5C9EFF] rounded-2xl" />
          <span className="relative z-10">READ DOCS</span>
        </button>
      </div>
    </section>
  );
}
