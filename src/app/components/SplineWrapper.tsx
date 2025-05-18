
'use client';

import React, { useEffect, useState, CSSProperties } from 'react';
import type { SplineProps } from '@splinetool/react-spline';

interface SplineWrapperProps {
  scene: string;
  className?: string;
  style?: CSSProperties;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  const [SplineComponent, setSplineComponent] = useState<React.ComponentType<SplineProps> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    import('@splinetool/react-spline/next')
      .then((module) => {
        // The Spline component is usually the default export
        setSplineComponent(() => module.default || module.Spline);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load Spline component", err);
        setError("Failed to load Spline component.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading 3D model...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!SplineComponent) {
    return <p>Spline component could not be loaded.</p>;
  }

  return <SplineComponent scene={scene} className={className} style={style} />;
};

export default SplineWrapper;
