import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skill";
import Projects from "./components/project";
import Footer from "./components/footer";
import Contact from "./components/contact";


function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
