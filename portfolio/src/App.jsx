import { Earth } from "./assets/components/earth.jsx";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './app.css' 
import { Float } from '@react-three/drei'

export default function App(){
    return(
  <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <ambientLight position={[5, 5, 5]} />
        
        <Float rotationIntensity={3}>
        <Earth
          scale={[4,4,4]}
          rotation={[0.41, 0, 0]} // Earth's 23.5° axial tilt
          position={[0, -1, 0]}
        />
      </Float>
        {/* <OrbitControls/> */}
      </Canvas>
    )
      
    
}