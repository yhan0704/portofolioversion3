import React from "react";
import nodejs from "../Image/nodejs.png";
import react from "../Image/react.png";
import html from "../Image/html-5.png";
import github from "../Image/github.png";
import css from "../Image/css.png";
import typeScript from "../Image/typeScript.png";
import graphQL from "../Image/graphQL.png";
import materialUI from "../Image/materialUI.png";
import jest from "../Image/jest.png";

export default function Icons() {
  return (
    <div className="iconContainer">
      <img src={react} alt="react" />
      <img src={nodejs} alt="nodejs" />
      <img src={html} alt="html" />
      <img src={css} alt="css" />
      <img src={github} alt="github" />
      <img src={typeScript} alt="typeScript" />
      <img src={graphQL} alt="graphQL" />
      <img src={materialUI} alt="materialUI" />
      <img src={jest} alt="jest" />
    </div>
  );
}
