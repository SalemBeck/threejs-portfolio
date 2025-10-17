// Loader.jsx
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ textAlign: "center", color: "white" }}>
        <p>Loading... {progress.toFixed(0)}%</p>
        <div
          style={{
            width: "200px",
            height: "10px",
            background: "#333",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "limegreen",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>
    </Html>
  );
}
