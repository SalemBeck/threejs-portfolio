import { useGLTF } from '@react-three/drei'

export function Earth(props) {
  const { scene } = useGLTF('/earth.glb')
  return <primitive object={scene} {...props}/>
}
