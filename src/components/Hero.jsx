import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

const Model = () => {
  const gltf = useGLTF("/fishing-penguin-joined.glb");
  return <primitive object={gltf.scene} scale={0.5}/>;
}
const Hero = () => {
  return (
    <div className="h-screen">
      <div>
        <h1>Chi Li</h1>
        <h1>Software Engineer</h1>
      </div>
      <Canvas>
        <ambientLight intensity={2.5}/>
        <directionalLight position={[10, 20, 150]} />
        <OrbitControls/>
        <Model/>
      </Canvas>
    </div>
  );
};

export default Hero;
