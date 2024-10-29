import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa"; // Import icons

const Sidebar = () => {
  return (
    <aside className="bg-black w-16 h-1/3 fixed top-1/2 left-2 transform -translate-y-1/2 flex flex-col items-center p-4 space-y-5 z-20 rounded shadow-hgold">
      <div className="flex flex-col items-center justify-center space-y-8 h-full">
        <a
          href="https://github.com/ChwaseH55"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaGithub className="text-3xl" /> {/* Adjust the size here */}
        </a>
        <a
          href="https://linkedin.com/in/chase-hanson-78b960330"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaLinkedin className="text-3xl" /> {/* Adjust the size here */}
        </a>
        <a
          href="https://Instagram.com/chase._.55"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaInstagram className="text-3xl" /> {/* Adjust the size here */}
        </a>
        <a
          href="mailto:chase.hanson9@gmail.com"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaEnvelope className="text-3xl" /> {/* Adjust the size here */}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
