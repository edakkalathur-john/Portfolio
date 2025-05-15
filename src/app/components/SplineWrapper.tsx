
'use client';

import React from 'react';
// Ensure the import path and component name match the library's export
import SplineComponent from '@splinetool/react-spline/next';

interface SplineWrapperProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  // It's good practice to check if the component loaded, though import failures usually throw.
  if (!SplineComponent) {
    return <p>Error loading Spline library component.</p>;
  }
  return <SplineComponent scene={scene} className={className} style={style} />;
};

export default SplineWrapper;
