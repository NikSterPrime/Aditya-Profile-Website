import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

// ↓ 3‑D donut loader
function Donut() {
  const gltf = useGLTF("/Models/Donut2.glb");
  return (
    <primitive
      object={gltf.scene}
      scale={10.0}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

useGLTF.preload("/Models/Donut2.glb");

const CreativeShowcase = () => (
  <div className="w-screen max-w-5xl mx-auto flex flex-col items-center bg-[#FC5A8D] p-8 rounded-2xl shadow-2xl">
    <h2 className="text-2xl md:text-3xl text-[#1e1e1e] mb-4">// Creative Showcase</h2>

    {/* 3‑D Canvas */}
    <div className="w-1/2 h-80 rounded-xl overflow-hidden mb-8 flex flex-row">
      <Canvas camera={{ position: [0, 0.6, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5,5,5]} />
        <Suspense fallback={null}>
          <Donut />
          {/* subtle HDRI reflections */}
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  </div>
);

export default CreativeShowcase;
