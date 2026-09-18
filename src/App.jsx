import React from "react";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Work from "./components/Work.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
const App = () => {
  return (
    <div className="bg-[#1e1e1e]">
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Experience/>
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
