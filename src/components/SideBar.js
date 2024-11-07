import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Sidebar = () => {
  return (
    <aside className="bg-black w-16 h-80 fixed top-1/2 left-2 transform -translate-y-1/2 flex flex-col items-center p-4 space-y-5 z-20 rounded shadow-hgold">
      <div className="flex flex-col items-center justify-center space-y-8 h-full">
        <a
          href="https://github.com/ChwaseH55"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://leetcode.com/u/ChaseH77/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <SiLeetcode className="text-3xl" />
        </a>
        <a
          href="https://linkedin.com/in/chase-hanson-78b960330"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://X.com/ChaseHDev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaXTwitter className="text-3xl" />
        </a>
        <a
          href="mailto:chase.hanson9@gmail.com"
          className="text-gold hover:text-hgold flex items-center justify-center"
        >
          <FaEnvelope className="text-3xl" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
