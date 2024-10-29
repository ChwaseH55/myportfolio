// AboutPage.js
import React from "react";
import useGradDirection from "../components/GradDirection";
import Sidebar from "../components/SideBar"; // Reusing the Sidebar component
import '../styles/Home.css'; // Ensure your CSS file is included

const AboutPage = () => {
  const gradientAngle = useGradDirection();

  return (
    <main className="flex flex-grow justify-center items-center min-h-screen overflow-hidden bg-gradient-to-bl from-gold to-black p-3 relative">
      <Sidebar />
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row relative"> {/* Flex container for layout */}
        {/* Text Container */}
        <div className="text-center md:text-left md:w-2/3 p-6"> {/* Text area */}
          <h1
            className="font-bold text-8xl text-transparent bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(${gradientAngle}deg, black, gold)`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            About Me
          </h1>

          <p className="text-2xl mt-4">
            Hi, I'm Chase Hanson, a Software Engineer and Full Stack Web Developer. With a love for coding and technology, I strive to create efficient and user-friendly applications that enhance people's lives.
          </p>

          <p className="text-2xl mt-4">
            My journey into tech began when I discovered programming during my high school years. Since then, I've honed my skills in various technologies, including JavaScript, React, Node.js, and more.
          </p>

          <p className="text-2xl mt-4">
            Outside of coding, I enjoy hiking, golf, and basketball.
          </p>

          <p className="text-2xl mt-4">
            Feel free to reach out to me through my links in the sidebar!
          </p>
        </div>

        {/* Image Container */}
        <div className="md:w-1/3 flex justify-center items-center p-6 overflow-hidden"> {/* Space for image */}
          <div className="w-full h-96 relative"> {/* Fixed height for the image container */}
            <img 
              src="../Me.jpg" // Replace with your image path
              alt="About Me" 
              className="absolute inset-0 w-full h-full object-cover" // Ensures the image covers the entire area
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
