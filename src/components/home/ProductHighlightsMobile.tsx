import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductSlideProps = {
  title: string;
  description: string;
  contentImage: string;
  cardBackgroundImage: string;
  url: string;
  buttonText: string;
  isActive: boolean;
};

const ProductSlide = ({ title, description, contentImage, cardBackgroundImage, url, buttonText, isActive }: ProductSlideProps) => {
  return (
    <div className="min-w-full relative px-4">
      {/* Card Container with Proper Layering */}
      <div 
        className="relative rounded-3xl overflow-hidden"
        style={{ height: "650px" }}
      >
        
        {/* Base Card Background (1.png, 2.png, etc.) */}
        <div className="absolute inset-0">
          <img
            src={cardBackgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Rectangle Base Layer */}
        <div className="absolute inset-0">
          <img
            src="/highlight/Rectangle 42270.png"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Subtract Overlay */}
        <div className="absolute inset-0">
          <img
            src="/highlight/Subtract.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 h-full flex flex-col p-6">
          
          {/* Card Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>

          {/* Center Content Image */}
          <div className="flex-1 flex justify-center items-center mb-6">
            <div className="w-72 h-48 flex items-center justify-center">
              <img
                src={contentImage}
                alt={title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          {/* Bottom Content */}
          <div className="space-y-4">
            <p className="text-white text-sm leading-relaxed">
              {description}
            </p>

            <button
              onClick={() => window.open(url, '_blank')}
              className="w-full relative px-6 py-4 rounded-2xl text-black font-bold text-base overflow-hidden transition-all duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#89BDFF] to-[#5C9EFF] rounded-2xl" />
              <span className="relative z-10">{buttonText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductHighlightsMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      title: "GPU Compute",
      description: "Rent GPUs for AI training and inference. Affordable, scalable compute power for all. Why it matters: Access high-performance GPUs on demand, no need to own expensive hardware. Ideal for researchers, startups, and creators who need flexible, affordable compute resources.",
      contentImage: "/highlight/compute.png",
      cardBackgroundImage: "/highlight/1.png",
      url: "https://app.neurolov.ai/gpu-compute",
      buttonText: "LEARN MORE"
    },
    {
      title: "AI Models", 
      description: "Access powerful AI models for image generation, text processing, and more. Built for creators, developers, and businesses. Generate content with state-of-the-art AI technology.",
      contentImage: "/highlight/ai-models.png",
      cardBackgroundImage: "/highlight/2.png",
      url: "https://app.neurolov.ai/ai-models",
      buttonText: "LEARN MORE"
    },
    {
      title: "Swarm Network",
      description: "Connect devices, solve compute tasks, and earn NLOV. Turn idle hardware into income. Why it matters: Anyone can contribute their device's unused power to the network and earn rewards, making advanced AI accessible and affordable for all.",
      contentImage: "/highlight/swarm.png",
      cardBackgroundImage: "/highlight/3.png",
      url: "https://app.neurolov.ai/swarm",
      buttonText: "LEARN MORE"
    },
    {
      title: "AI Agents",
      description: "Deploy autonomous AI agents that can perform complex tasks, make decisions, and interact with various systems. Perfect for automation, customer service, and intelligent workflows.",
      contentImage: "/highlight/ai-agents.png",
      cardBackgroundImage: "/highlight/4.png", 
      url: "https://app.neurolov.ai/ai-agents",
      buttonText: "LEARN MORE"
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
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
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-12 bg-[#030924]">
      {/* Header */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-[#ACD2FF]">Product Highlights</h2>
      </div>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <ProductSlide
              key={index}
              title={slide.title}
              description={slide.description}
              contentImage={slide.contentImage}
              cardBackgroundImage={slide.cardBackgroundImage}
              url={slide.url}
              buttonText={slide.buttonText}
              isActive={index === currentIndex}
            />
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3 px-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-300",
              index === currentIndex 
                ? "bg-[#ACD2FF]" 
                : "bg-gray-600 hover:bg-gray-500"
            )}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
