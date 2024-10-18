import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </div>
  );
};

export default App;