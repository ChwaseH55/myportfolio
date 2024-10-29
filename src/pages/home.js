// Home.js
import React from "react";
import useGradDirection from "../components/GradDirection";
import Sidebar from "../components/SideBar";
import RotatingIcon from "../components/RotatingIcon"; // Import the RotatingIcon component
import '../styles/Home.css'; // Ensure your CSS file is included

const Home = () => {
  const gradientAngle = useGradDirection();

  // Array of icons
  const icons = [
    { name: "git", title: "Git" },
    { name: "javascript", title: "JavaScript" },
    { name: "react", title: "React" },
    { name: "nodejs", title: "Node.js" },
    { name: "mongodb", title: "MongoDB" },
    { name: "mysql", title: "SQL" },
    { name: "python", title: "Python" },
    { name: "java", title: "Java" },
    { name: "cplusplus", title: "C++" },
    { name: "csharp", title: "C#" },
  ];

  // Define speed and size settings
  const rotationSpeed = .003; // Adjust this value to change speed
  const iconSize = "64px"; // Adjust this value to change icon size

  return (
    <main className="flex flex-grow justify-center items-center min-h-screen overflow-hidden bg-gradient-to-bl from-gold to-black p-3 relative">
      <Sidebar />
      <div className="text-center relative">
        <h1
          className="font-bold text-8xl text-transparent bg-clip-text"
          style={{
            backgroundImage: `linear-gradient(${gradientAngle}deg, black, gold)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Chase Hanson
        </h1>

        <div className="icons-container absolute"> {/* Set to absolute positioning */}
          {icons.map((icon, index) => (
            <RotatingIcon 
              key={icon.name} 
              icon={icon} 
              index={index} 
              totalIcons={icons.length} 
              speed={rotationSpeed} // Pass speed prop
              size={iconSize} // Pass size prop
            />
          ))}
        </div>

        <p className="text-2xl">
          Software Engineer / Full Stack Web Developer
        </p>
      </div>
    </main>
  );
};

export default Home;
