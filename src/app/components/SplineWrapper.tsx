'use client';

import React, { CSSProperties, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline/jsx';

interface SplineWrapperProps {
  scene: string; // Path to the .splinecode file, e.g., /models/scene.splinecode
  className?: string;
  style?: CSSProperties;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!scene) {
    return <p className="text-center text-red-500">Spline scene not provided.</p>;
  }

  if (!mounted) {
    return <div className={className} style={style}>Loading...</div>;
  }

  // The Spline component from '@splinetool/react-spline/next'
  // should handle loading local .splinecode files if they are correctly
  // placed in the /public directory and the path is correct.
  return <Spline scene={scene} className={className} style={style} />;
};

export default SplineWrapper;
