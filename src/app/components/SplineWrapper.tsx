
'use client';

import React, { CSSProperties } from 'react';
import Spline from '@splinetool/react-spline/next';

interface SplineWrapperProps {
  scene: string; // Path to the .splinecode file, e.g., /models/scene.splinecode
  className?: string;
  style?: CSSProperties;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  if (!scene) {
    return <p className="text-center text-red-500">Spline scene not provided.</p>;
  }

  // The Spline component from '@splinetool/react-spline/next'
  // should handle loading local .splinecode files if they are correctly
  // placed in the /public directory and the path is correct.
  return <Spline scene={scene} className={className} style={style} />;
};

export default SplineWrapper;
