'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import { Suspense } from 'react';

// Ce sous-composant charge le modèle spécifique
function Model({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={1} />;
}

export default function VehicleViewer({ modelName }: { modelName: string }) {
  // On construit le chemin dynamiquement (ex: /models/tesla.glb)
  const modelPath = `/models/${modelName}.glb`;

  return (
    <div className="h-[400px] w-full bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
      <Suspense fallback={
        <div className="flex items-center justify-center h-full text-zinc-700 text-[10px] uppercase tracking-widest animate-pulse">
          Chargement du modèle {modelName}...
        </div>
      }>
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <PresentationControls speed={1.5} global zoom={0.8} polar={[-0.1, Math.PI / 4]}>
            <Stage environment="city" intensity={0.5} castShadow={true}>
              <Model path={modelPath} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </Suspense>
    </div>
  );
}