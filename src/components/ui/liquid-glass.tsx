'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane, shaderMaterial } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';

// Liquid Glass Shader Material
const LiquidGlassMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.2, 0.0, 0.2),
    resolution: new THREE.Vector2(1, 1),
    mouse: new THREE.Vector2(0, 0),
    opacity: 0.8,
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec3 color;
    uniform vec2 resolution;
    uniform vec2 mouse;
    uniform float opacity;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }
    
    float smoothNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      
      float a = noise(i);
      float b = noise(i + vec2(1.0, 0.0));
      float c = noise(i + vec2(0.0, 1.0));
      float d = noise(i + vec2(1.0, 1.0));
      
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }
    
    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;
      float frequency = 1.0;
      
      for (int i = 0; i < 4; i++) {
        value += amplitude * smoothNoise(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
      }
      
      return value;
    }
    
    void main() {
      vec2 uv = vUv;
      vec2 p = uv * 2.0 - 1.0;
      
      // Create flowing liquid effect
      float flow1 = fbm(uv * 3.0 + time * 0.1);
      float flow2 = fbm(uv * 2.0 - time * 0.15);
      float flow3 = fbm(uv * 4.0 + time * 0.08);
      
      // Combine flows for complex liquid motion
      float liquid = (flow1 + flow2 * 0.5 + flow3 * 0.3) / 1.8;
      
      // Add mouse interaction
      vec2 mouseEffect = mouse - uv;
      float mouseDist = length(mouseEffect);
      float mouseInfluence = smoothstep(0.3, 0.0, mouseDist) * 0.5;
      
      liquid += mouseInfluence;
      
      // Create glass-like refraction
      vec2 distortion = vec2(
        sin(uv.y * 10.0 + time) * 0.02,
        cos(uv.x * 8.0 + time * 1.2) * 0.02
      ) * liquid;
      
      vec2 refractedUV = uv + distortion;
      
      // Glass color with iridescence
      vec3 baseColor = color;
      vec3 iridescence = vec3(
        sin(liquid * 6.28 + time) * 0.5 + 0.5,
        sin(liquid * 6.28 + time + 2.09) * 0.5 + 0.5,
        sin(liquid * 6.28 + time + 4.18) * 0.5 + 0.5
      );
      
      vec3 finalColor = mix(baseColor, iridescence * 0.3, liquid * 0.5);
      
      // Add fresnel-like effect
      float fresnel = pow(1.0 - dot(normalize(vec3(0, 0, 1)), normalize(vec3(p, 1.0))), 2.0);
      finalColor += fresnel * 0.2;
      
      gl_FragColor = vec4(finalColor, opacity);
    }
  `
);

extend({ LiquidGlassMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      liquidGlassMaterial: any;
    }
  }
}

interface LiquidGlassPlaneProps {
  color?: THREE.Color;
  opacity?: number;
}

function LiquidGlassPlane({ color = new THREE.Color(0.2, 0.0, 0.2), opacity = 0.8 }: LiquidGlassPlaneProps) {
  const materialRef = useRef<any>();
  const { size, mouse } = useThree();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.time = state.clock.elapsedTime;
      materialRef.current.resolution.set(size.width, size.height);
      materialRef.current.mouse.set(
        (mouse.x + 1) / 2,
        (mouse.y + 1) / 2
      );
    }
  });

  return (
    <Plane args={[2, 2]} position={[0, 0, 0]}>
      <liquidGlassMaterial
        ref={materialRef}
        color={color}
        opacity={opacity}
        transparent
        blending={THREE.AdditiveBlending}
      />
    </Plane>
  );
}

interface LiquidGlassProps {
  className?: string;
  color?: string;
  opacity?: number;
  children?: React.ReactNode;
}

export function LiquidGlass({ 
  className = '', 
  color = '#3300ff', 
  opacity = 0.3,
  children 
}: LiquidGlassProps) {
  const glassColor = useMemo(() => new THREE.Color(color), [color]);

  return (
    <div className={`relative ${className}`}>
      {children}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 1], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <LiquidGlassPlane color={glassColor} opacity={opacity} />
        </Canvas>
      </div>
    </div>
  );
}