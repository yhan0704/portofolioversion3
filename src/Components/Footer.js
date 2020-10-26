import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubAlt } from "react-icons/di";
import { SiMedium } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="icons">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/yhan1205/"
        >
          <AiFillLinkedin />
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yhan0704/"
        >
          <DiGithubAlt />
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://hanyc1205.medium.com/"
        >
          <SiMedium />
        </a>
      </div>
      <div className="licence">©2020 Young Han all rights reserved.</div>
    </div>
  );
}
