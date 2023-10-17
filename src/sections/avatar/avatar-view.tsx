import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from "./avatar";

type Props = {};

export default function AvatarView(props: Props) {
  return (
    <Canvas camera={{ position: [-2, 1, 3] }} shadows>
      <fog attach="fog" color={0xa0a0a0} near={10} far={50} />

      <hemisphereLight position={[0, 20, 0]} />

      <directionalLight castShadow position={[-3, 10, -10]} color={0xffffff} />

      <OrbitControls />

      <Environment files="/models/brown_photostudio_01.hdr" />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshPhongMaterial color={0x999999} depthWrite={false} />
      </mesh>

      <Avatar />
    </Canvas>
  );
}

// brown_photostudio_01.hdr
