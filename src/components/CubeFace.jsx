import React from "react";
import "../style/cubeFace.css";

const CubeFace = ({ faces = [], rotationX = 0, zIndex = 1 }) => {
  // Safety check for faces array
  if (!faces || !Array.isArray(faces) || faces.length === 0) {
    return null;
  }

  return (
    <div className="cube-container" style={{ zIndex: zIndex, position: "relative" }}>
      <div
        className="cube"
        style={{ transform: `rotateX(${rotationX}deg)` }}
      >
        {faces.map((face, index) => (
          <div key={index} className={`cube-face cube-face-${index}`}>
            {face.content}
          </div>
        ))}
      </div>
    </div>
  );
};


export default CubeFace;
