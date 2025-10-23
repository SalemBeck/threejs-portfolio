import { Earth } from "./assets/components/earth.jsx";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function App(){
    return(
  <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Earth />
        <OrbitControls />
      </Canvas>
    )
      
    
}