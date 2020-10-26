import React from "react";
import myPic from "../Image/my_pic.png";

export default function About() {
  return (
    <div className="aboutTag" id="about">
      <div className="aboutContainer">
        <h1>About</h1>
        <div className="aboutMain">
          <div className="myPic">
            <img src={myPic} alt="me" />
          </div>
          <div className="texts">
            <p>
              I am a driven software engineer with an outstanding work ethic
              open to contributing my diverse skill set in a junior-level
              position.
            </p>
            <br />
            <p>
              I graduated from the University of Maryland, Baltimore County with
              a Bachelor of Science Degree in Information Systems. After I
              graduated school, I attended Flatiron School where I honed my
              skills as a developer.
            </p>
            <br />
            <p>
              I am passionate about coding because of my drive to solve problems
              and create a final product. Beyond my academic qualifications, I
              continue to advance my skills as a developer by enhancing projects
              within my portfolio and preparing for the AWS practitioner
              certification. I welcome you to take a look at my portfolio and
              please contact me with any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
