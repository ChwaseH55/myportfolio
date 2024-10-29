import { useState, useEffect } from "react";

function useGradDirection() {
  const [angle, setAngle] = useState(90); // Default angle

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // Calculate angle in degrees
      const calculatedAngle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
      setAngle(calculatedAngle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return angle;
}

export default useGradDirection;
