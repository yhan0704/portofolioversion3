import React, { useState } from "react";
import My_Logo from "../Image/Logo.png";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const clickedHamburger = () => {
    setOpen(!open);
  };
  return (
    <div className="mainContainer">
      <nav>
        <div className="logo">
          <a href="http://www.youngchnai.com/">
            <img src={My_Logo} alt="logo" />
          </a>
        </div>
        <div className="tab">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </Link>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Blog
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="menuShow">
          <GiHamburgerMenu
            className="menuIcon"
            style={{ display: open === false ? "block" : "none" }}
            onClick={clickedHamburger}
          />
        </div>
        <div
          className="hamburger"
          style={{ display: open === true ? "flex" : "none" }}
        >
          <AiOutlineCloseCircle onClick={clickedHamburger} />
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={clickedHamburger}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={clickedHamburger}
          >
            Project
          </Link>
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={clickedHamburger}
          >
            Blog
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={clickedHamburger}
          >
            Contact
          </Link>
        </div>
        <div className="close"></div>
      </nav>
      <div className="mainPic">
        <div className="intro">
          <h1>Hello, I am Young Han</h1>
          <p>I am a software engineer. </p>
        </div>
        <h1 className="toProject">Click to see my Projects</h1>
        <div className="toProjectArrow">
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <AiOutlineArrowDown />
          </Link>
        </div>
      </div>
    </div>
  );
}
