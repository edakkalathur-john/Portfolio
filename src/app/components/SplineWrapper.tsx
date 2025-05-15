
'use client';

import React from 'react';

interface SplineWrapperProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  return (
    <iframe
      src={scene}
      frameBorder="0"
      className={className || "w-full h-full"}
      style={style}
      title="Spline Scene"
      allowFullScreen
      allowTransparency={true} // Ensures this attribute is present
    />
  );
};

export default SplineWrapper;
