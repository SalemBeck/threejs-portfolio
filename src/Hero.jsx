import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Model } from "./assets/components/laptop";
import Loader from "./loader.jsx";
import { useState, useEffect } from "react";
import { Reactlogo } from "./assets/components/reactobj.jsx";

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {" "}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          display: "flex",
        }}
      >
        <Canvas
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          camera={{ position: [0, 0, 5], fov: 50 }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={2} />
            <directionalLight position={[5, 50, 5]} intensity={10} />
            <Float rotationIntensity={0.5} floatIntensity={0.5}>
              <Model
                scale={isMobile ? 0.02 : 0.03}
                position={isMobile ? [-1.5, 0.8, 0] : [-1.9, 0.8, 0]}
                rotation={[0.3, 1.4, 0]}
              />
            </Float>
            <Float rotationIntensity={1} floatIntensity={0.5}>
              <Reactlogo
                scale={isMobile ? 0.2 : 0.25} // 👈 larger scale to make it visible
                position={isMobile ? [1.5, 1, 0] : [2, 1, 0]}
                rotation={[3, 6, 4]}
              />
            </Float>
            
          </Suspense>
        </Canvas>

        <h1
          style={{
            fontSize: "20px",
            color: "white",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          hi I am Salem <span></span> <h3 className="wave">👋</h3>
        </h1>
        <h2
          style={{
            fontSize: "30px",
            color: "blue",
            position: "absolute",
            top: "24%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          a web developer
        </h2>
      </div>
    </>
  );
}
export default Hero;
