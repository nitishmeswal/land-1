import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  isActive: boolean;
};

const TeamCard = ({ name, role, image, isActive }: TeamMemberProps) => {
  return (
    <div className="min-w-full relative px-4">
      <div className="flex flex-col items-center">
        {/* Team Member Image */}
        <div className="w-auto h-80 mb-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default function TeamMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const teamMembers = [
    {
      name: "Dhruv Panchal",
      role: "FOUNDER",
      image: "/token/team-1.png",
    },
    {
      name: "Team Member 2",
      role: "CO-FOUNDER",
      image: "/token/team-2.png",
    },
    {
      name: "Team Member 3",
      role: "CTO",
      image: "/token/team-3.png",
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
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
    <section className="relative w-full py-16 bg-[#030924]">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Meet Our Team</h2>
      </div>

      {/* Sliding Team Cards */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              isActive={index === currentIndex}
            />
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-3 px-4">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors duration-300",
              index === currentIndex
                ? "bg-[#ACD2FF]"
                : "bg-gray-600 hover:bg-gray-500"
            )}
            aria-label={`Go to team member ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
