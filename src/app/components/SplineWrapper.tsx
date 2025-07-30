'use client';

import React, { CSSProperties, useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline/next'; // Revert back to /next

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
    // Render a placeholder or null on the server and during initial render
    return <div className={className} style={style} />; // You can adjust the placeholder
  }

  // Render the Spline component only after the component has mounted on the client
  return <Spline scene={scene} className={className} style={style} />;
};

export default SplineWrapper;
