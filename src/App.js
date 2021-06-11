import React from "react";
import About from "./Components/About";
import "./App.css";
import Blog from "./Components/Blog";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import ScrollTopArrow from "./Components/ScrollTopArrow";
import Footer from "./Components/Footer";
import Icons from "./Components/Icons";
import Contact from "./Components/Contact";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Main />
        <Icons />
        <About />
        <Projects />
        <Blog />
        <ScrollTopArrow />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
