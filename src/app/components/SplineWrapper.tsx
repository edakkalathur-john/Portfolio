'use client';

import dynamic from 'next/dynamic';
import React, { CSSProperties } from 'react';
import type { SplineProps } from '@splinetool/react-spline';

interface SplineWrapperProps {
  scene: string;
  className?: string;
  style?: CSSProperties;
}

const Spline = dynamic<SplineProps>(
  () => import('@splinetool/react-spline').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <p>Loading 3D model…</p>,
    // You can also catch errors via an ErrorBoundary if desired
  }
);

const SplineWrapper: React.FC<SplineWrapperProps> = ({ scene, className, style }) => {
  return <Spline scene={scene} className={className} style={style} />;
};

export default SplineWrapper;
