import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";
import { SiMedium } from "react-icons/si";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const clickedHamburger = () => {
    setOpen(!open);
  };
  return (
    <div className="mainContainer">
      <div className="mainPic">
        <nav>
          <div className="logo">
            <a href="http://www.youngchnai.com/">Young.Han</a>
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
        <div className="intro">
          <p> JavaScript Software Engineer</p>
        </div>
        <div className="icons">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/yhan1205/"
          >
            <AiFillLinkedin />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/yhan0704/"
          >
            <DiGithubAlt />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://hanyc1205.medium.com/"
          >
            <SiMedium />
          </a>
        </div>
        <div className="makeBlock">
          <h2 className="toProject">Click to see my Projects</h2>
        </div>
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
