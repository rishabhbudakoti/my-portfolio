import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Particles from "./Components/Particles";
import Shapes from "./Components/Shapes";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Loader from "./Components/Loader";

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    let id = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  if (load) {
    return <Loader />;
  }

  return (
    <>
      <Particles />
      <Shapes />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default App;
