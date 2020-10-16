import React from "react";
import About from "./Components/About";
import "./App.css";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import ScrollTopArrow from "./Components/ScrollTopArrow";

function App() {
  return (
    <div className="container">
      <Main />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <ScrollTopArrow />
    </div>
  );
}

export default App;
