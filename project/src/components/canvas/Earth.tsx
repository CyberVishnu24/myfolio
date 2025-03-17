import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (earthRef.current && cloudsRef.current) {
      earthRef.current.rotation.y += 0.0005;
      cloudsRef.current.rotation.y += 0.0006;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={1} position={[10, 10, 10]} />

      <group scale={2.5} position={[0, 0, 0]}>
        <mesh ref={earthRef} castShadow receiveShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#2233aa" metalness={0.4} roughness={0.7} />
        </mesh>

        <group ref={groupRef}>
          {/* Landmasses */}
          <group>
            <mesh position={[0, 0, 1.01]} receiveShadow>
              <sphereGeometry args={[1.01, 16, 16, 0, Math.PI * 0.4, 0, Math.PI * 0.3]} />
              <meshStandardMaterial color="#228833" />
            </mesh>

            <mesh position={[0.7, 0.5, 0.7]} receiveShadow>
              <sphereGeometry args={[1.01, 16, 16, 0, Math.PI * 0.3, 0, Math.PI * 0.2]} />
              <meshStandardMaterial color="#228833" />
            </mesh>

            <mesh position={[-0.7, -0.3, 0.7]} receiveShadow>
              <sphereGeometry args={[1.01, 16, 16, 0, Math.PI * 0.4, 0, Math.PI * 0.3]} />
              <meshStandardMaterial color="#228833" />
            </mesh>
          </group>

          {/* Clouds */}
          <mesh ref={cloudsRef} position={[0, 0, 0]} receiveShadow>
            <sphereGeometry args={[1.02, 24, 24]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
          </mesh>

          {/* Atmosphere */}
          <mesh>
            <sphereGeometry args={[1.15, 24, 24]} />
            <meshStandardMaterial color="#4444ff" transparent opacity={0.1} />
          </mesh>
        </group>
      </group>
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true, powerPreference: "high-performance" }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.3}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

const CanvasLoader = () => (
  <div className="flex justify-center items-center h-full">
    <div className="canvas-loader"></div>
  </div>
);

export default EarthCanvas;
