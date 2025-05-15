
'use client';

import React from 'react';

interface SplineWrapperProps {
  scene: string; // This will now be the src for the iframe
  className?: string;
  style?: React.CSSProperties;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  // Basic iframe embedding
  return (
    <iframe
      src={scene}
      frameBorder="0"
      className={className || "w-full h-full"} // Default to full width/height if no className
      style={style}
      title="Spline Scene"
      allowFullScreen
    />
  );
};

export default SplineWrapper;
