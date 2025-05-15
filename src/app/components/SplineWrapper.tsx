
'use client';

import React, { useState, useEffect, ComponentType } from 'react';

interface SplineProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
  // Add any other props that @splinetool/react-spline expects
  onLoad?: (spline: any) => void; 
}

interface SplineWrapperProps {
  scene: string;
  className?: string;
  style?: React.CSSProperties;
}

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  const [SplineComponent, setSplineComponent] = useState<ComponentType<SplineProps> | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    import('@splinetool/react-spline/next')
      .then((module) => {
        if (isMounted) {
          // The module itself might be the default export, or it might have a named export 'Spline'
          // Adjust based on how the library exports its Next.js component.
          // Typically, it's a default export for the react-spline/next variant.
          setSplineComponent(() => module.default || (module as any).Spline); 
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Failed to load Spline component:", err);
          setError("Failed to load 3D model.");
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <p className="text-center py-10">Loading 3D Model (Wrapper)...</p>;
  }

  if (error) {
    return <p className="text-center py-10 text-red-500">{error}</p>;
  }

  if (!SplineComponent) {
    // This case should ideally be covered by isLoading or error states
    return <p className="text-center py-10">Spline component not available.</p>;
  }

  return <SplineComponent scene={scene} className={className} style={style} />;
};

export default SplineWrapper;
