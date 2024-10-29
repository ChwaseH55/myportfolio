import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 w-full p-4 z-10">
      <div className="flex items-center justify-center relative z-20">
        <div className="flex-grow h-1 bg-gold" />
        <div className="flex space-x-10 mx-4 z-30">
          <Link to="/" className="text-gold text-lg hover:text-hgold">Home</Link>
          <Link to="/about" className="text-gold text-lg hover:text-hgold rounded">About</Link>
          <Link to="/projects" className="text-gold text-lg hover:text-hgold rounded">Projects</Link>
        </div>
        <div className="flex-grow h-1 bg-gold" />
      </div>
    </nav>
  );
};

export default Nav;
