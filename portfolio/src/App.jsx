import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Earth } from "./assets/components/earth.jsx";
import { useState } from "react";
import "./app.css";

export default function App() {
  const slides = ["Who am I", "Skills", "Projects", "Contact"];
  const [active, setActive] = useState(1);

  const next = () => setActive((prev) => (prev + 1) % slides.length);
  const prev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <Float rotationIntensity={3}>
          <Earth
            scale={[3, 3, 3]}
            rotation={[0.41, 0, 0]}
            position={[0, -1, 0]}
          />
        </Float>
      </Canvas>

      <div className="html">
        <div className="title">Salem Bakhouche</div>
        <div className="subtitle">3D Web Developer</div>

        <div className="carousel-container">
          <button className="arrow left" onClick={prev}>‹</button>

          <div className="carousel">
            {slides.map((text, index) => {
              const offset = index - active;
              const isCenter = offset === 0;
              const visible = Math.abs(offset) <= 1;

              return (
                <div
                  key={index}
                  className={`slide ${isCenter ? "center" : ""}`}
                  style={{
                    transform: `translateX(${offset * 220}px) scale(${isCenter ? 1.2 : 0.9})`,
                    opacity: visible ? 1 : 0,
                    zIndex: isCenter ? 2 : 1,
                    transition: "all 0.5s ease",
                  }}
                >
                  {text}
                </div>
              );
            })}
          </div>

          <button className="arrow right" onClick={next}>›</button>
        </div>
      </div>
    </>
  );
}
