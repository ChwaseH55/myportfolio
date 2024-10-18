import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-black min-h-10">
          <div className="flex space-x-8">
            <Link to="/" className="text-gold hover:text-hgold bg-grey">Home</Link>
            <Link to="/about" className="text-gold hover:text-hgold">About</Link>
            <Link to="/projects" className="text-gold hover:text-hgold">Projects</Link>
          </div>
        </nav>
    );
};

export default Nav;