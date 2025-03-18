
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  className?: string;
  index?: number;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon, 
  image,
  className, 
  index = 0 
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "glass-card p-7 rounded-xl transition-all duration-500 group hover:shadow-neon border border-neuro-500/10 hover:border-neuro-500/30 relative",
        isHovered ? "translate-y-[-8px]" : "translate-y-0",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon && (
        <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-neuro-500/20 to-blue-500/10 text-neuro-500 mb-4 group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
      )}
      
      {image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      )}
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-neuro-500 transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      
      <div className="flex items-center text-sm font-medium text-neuro-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
      
      {/* Card number */}
      {index > 0 && (
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-neuro-500 to-neuro-400 text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform -rotate-12 group-hover:rotate-0">
          {index}
        </div>
      )}
    </div>
  );
}
