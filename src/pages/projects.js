// ProjectsPage.js
import React from "react";
import useGradDirection from "../components/GradDirection";
import Sidebar from "../components/SideBar"; // Reusing the Sidebar component
import '../styles/Home.css'; // Ensure your CSS file is included

const ProjectsPage = () => {
  const gradientAngle = useGradDirection();

  // Hardcoded project data
  const projects = [
    {
      title: "UCF Library Group Finder",
      description: "A project to create a website and mobile app that serves the purpose of mapping out each floor of the UCF library allowing the creation of study groups, and an expansive forum feature",
      skills: "MongoDB, Express, Node.js, React, JavaScript, TailwindCSS, Flutter, Heroku",
      thumbnail: "../AKS.png", // Path to the image
    },
    {
      title: "UCF Golf Club Website and Mobile App (In Progress)",
      description: "This is my current Senior Design project. In a group of 6 student developers, I am the project manager attempting to deliver a product that can solve the current problem the Golf Club at UCF faces with a lack of a centralized club platform",
      skills: "Node.js, Express, PostgreSQL, React, JavaScript, TailwindCSS, Flutter, AWS",
      thumbnail: "../Landing.png", // Path to the image
    },
    {
      title: "M.E.O.W (In Progress)",
      description: "A rhythm based bullet-hell game. My personal contributions are mostly on the backend of the game, involving programming a fully functional rhythm indicator and developing the main mechanic of the game, allowing actions to only be performed on beat with the music",
      skills: "C#, Unity Game Editor",
      thumbnail: "../Demo.png",
    },
    {
      title: "Personal Portfolio",
      description: "I believe this project best demonstrates the frontend skills I have obtained working on several web apps. It is a personal showcase of my ability to create professional and creative designs, knowledge of React and Tailwind libraries, and an effective use of JavaScript",
      skills: "React, TailwindCSS, JavaScript",
      thumbnail: "../portfolioThumbnail.png", // Path to the image
    },
    // Add more projects as needed
  ];

  return (
    <main className="flex flex-grow justify-center items-center min-h-screen overflow-hidden bg-gradient-to-bl from-gold to-black p-3 relative">
      <Sidebar />
      <div className="max-w-screen-xl w-full p-6">
        <h1
          className="font-bold text-8xl text-transparent bg-clip-text text-center mt-8"
          style={{
            backgroundImage: `linear-gradient(${gradientAngle}deg, black, gold)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Projects
        </h1>

        {/* Display Projects */}
        <div className="mt-8">
          {projects.length === 0 ? (
            <p className="text-lg">No projects available.</p>
          ) : (
            projects.map((proj, index) => (
              <div key={index} className="border border-gold rounded-lg p-4 mb-4 bg-black">
                <h3 className="text-2xl text-gold font-bold">{proj.title}</h3>
                <div className="my-2">
                  <img src={proj.thumbnail} alt={proj.title} className="w-full text-gold h-auto rounded-lg" />
                </div>
                <p className="text-lg text-gold mt-2">{proj.description}</p>
                <p className="text-sm text-gold">Skills: {proj.skills}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
