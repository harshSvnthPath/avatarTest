import * as THREE from "three";
import { useGLTF } from "@react-three/drei";

type Props = {};

export function Avatar(props: Props) {
  const model = useGLTF("/models/default_model.glb");

  model.scene.traverse((object) => {
    if (object instanceof THREE.Mesh) {
      object.castShadow = true;
      object.receiveShadow = true;
      object.material.envMapIntensity = 0.3;
    }
  });

  return <primitive object={model.scene}></primitive>;
}
