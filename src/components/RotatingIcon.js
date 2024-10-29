// RotatingIcon.js
import React, { useEffect, useState } from "react";
import '../styles/Home.css'; // Ensure the CSS is imported

const RotatingIcon = ({ icon, index, totalIcons, speed, size }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => prev + speed); // Increment the offset
      requestAnimationFrame(animate); // Keep the animation going
    };
    requestAnimationFrame(animate); // Start the animation
  }, [speed]);

  // Function to calculate the position of the icon on the ellipse
  const calculatePosition = (index, totalIcons) => {
    const angle = (index / totalIcons) * 2 * Math.PI + offset; // Calculate position based on index and offset
    const x = Math.cos(angle) * 450; // X position (major axis)
    const y = Math.sin(angle) * 270; // Y position (minor axis)
    return {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(${x}px, ${y}px)`, // Move the icon to the calculated position
    };
  };

  return (
    <i
      className={`devicon-${icon.name}-plain rotating-icon`} // Add class for the icon
      title={icon.title}
      style={{ ...calculatePosition(index, totalIcons), fontSize: size }} // Calculate position and size for the icon
    ></i>
  );
};

export default RotatingIcon;
