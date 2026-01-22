"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useThree, extend } from "@react-three/fiber";
import { shaderMaterial, useTrailTexture } from "@react-three/drei";
import * as THREE from "three";

/* =======================
   Shader Material
======================= */
const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 40,
    pixelColor: new THREE.Color("#ffffff"),
  },
  `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution / max(resolution.x, resolution.y);
      return clamp((uv - 0.5) * s + 0.5, 0.0, 1.0);
    }

    void main() {
      vec2 uv = coverUv(gl_FragCoord.xy / resolution);
      vec2 cell = (floor(uv * gridSize) + 0.5) / gridSize;
      float trail = texture2D(mouseTrail, cell).r;
      gl_FragColor = vec4(pixelColor, trail * 1.5);
    }
  `
);

extend({ DotMaterial });

/* =======================
   Gooey Filter
======================= */
function GooeyFilter({ id, strength }: { id: string; strength: number }) {
  return (
    <svg className="absolute overflow-hidden">
      <defs>
        <filter id={id}>
          <feGaussianBlur stdDeviation={strength} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
          />
        </filter>
      </defs>
    </svg>
  );
}

/* =======================
   Scene
======================= */
interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  color: string;
}

function Scene({
  gridSize,
  trailSize,
  maxAge,
  interpolate,
  easingFunction,
  color,
}: SceneProps) {
  const { size, viewport } = useThree();
  const materialRef = useRef<THREE.Material>(null);

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge,
    interpolate,
    ease: easingFunction,
  });

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <dotMaterial
        ref={materialRef}
        gridSize={gridSize}
        mouseTrail={trail}
        resolution={[
          size.width * viewport.dpr,
          size.height * viewport.dpr,
        ]}
        pixelColor={new THREE.Color(color)}
      />
    </mesh>
  );
}

/* =======================
   PixelTrail Component
======================= */
interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  className?: string;
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  gooeyFilter,
  color = "#ffffff",
  className = "",
}: PixelTrailProps) {
  return (
    <>
      {gooeyFilter && (
        <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />
      )}

      <Canvas
        frameloop="always"
        className={`fixed inset-0 z-0 pointer-events-none ${className}`}
        gl={{ antialias: false, alpha: true }}
        style={{
          width: "100vw",
          height: "100vh",
          filter: gooeyFilter ? `url(#${gooeyFilter.id})` : undefined,
        }}
      >
        <Suspense fallback={null}>
          <Scene
            gridSize={gridSize}
            trailSize={trailSize}
            maxAge={maxAge}
            interpolate={interpolate}
            easingFunction={easingFunction}
            color={color}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
