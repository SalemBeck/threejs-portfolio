import { useGLTF } from '@react-three/drei'

export function Earth() {
  const { scene } = useGLTF('/earth.glb')
  return <primitive object={scene} />
}
