import React from 'react';

interface Size {
  width: number;
  height: number;
}

interface ResponsiveImageProps {
  src: string;
  alt: string;
  desktopSize: Size;
  tabletRatio?: number;
  mobileRatio?: number;
  className?: string;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  desktopSize,
  tabletRatio = 0.75,
  mobileRatio = 0.5,
  className = '',
}) => {
  const tabletWidth = Math.round(desktopSize.width * tabletRatio);
  const tabletHeight = Math.round(desktopSize.height * tabletRatio);
  const mobileWidth = Math.round(desktopSize.width * mobileRatio);
  const mobileHeight = Math.round(desktopSize.height * mobileRatio);

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto ${className}`}
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
      srcSet={`
        ${src} ${desktopSize.width}w,
        ${src} ${tabletWidth}w,
        ${src} ${mobileWidth}w
      `}
      sizes={`
        (min-width: 1024px) ${desktopSize.width}px,
        (min-width: 768px) ${tabletWidth}px,
        ${mobileWidth}px
      `}
      width={desktopSize.width}
      height={desktopSize.height}
    />
  );
};

export default ResponsiveImage;
